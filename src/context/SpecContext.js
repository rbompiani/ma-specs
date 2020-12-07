import React, { createContext, useState, useEffect, createRef, useRef } from 'react';

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import {
    getProject,
    divisionsByNumber,
    partsByNumber,
    listSectionContents,
    listParagraphs,
} from '../graphql/queries'
import { createSectionContent, updateProject, updateSectionContent } from '../graphql/mutations'
import { onCreateSection, onCreateSectionContent, onUpdateSectionContent, onCreateParagraph } from '../graphql/subscriptions'

export const SpecContext = createContext();

const SpecContextProvider = (props) => {

    //-------- STATE --------//

    //TODO - update project id with selected value
    const projectId = "1905"

    // outline state
    const [divisions, setDivisions] = useState([]);
    const [parts, setParts] = useState([]);

    const divisionsRef = useRef();
    divisionsRef.current = divisions;

    // project state
    const [project, setProject] = useState({})

    const projectRef = useRef();
    projectRef.current = project;

    // current display state
    const [currentSection, setCurrentSection] = useState({});



    //-------- FETCHING DATA --------//

    // fetch outline data
    useEffect(() => {
        fetchOutline();
        fetchProject();

        // Listeners - onCreateSectionContent / onUpdateSectionContent
        API.graphql(graphqlOperation(onCreateSection)).subscribe({
            next: sectionData => {
                const newSection = sectionData.value.data.onCreateSection
                let tempDivisions = [...divisionsRef.current]
                const divIndex = tempDivisions.findIndex(({ id }) => id == newSection.division.id)
                delete newSection.division
                tempDivisions[divIndex].sections.items.push(newSection)
                setDivisions(tempDivisions)
            }
        })


        API.graphql(graphqlOperation(onCreateSectionContent)).subscribe({
            next: sectionContentData => {
                const newSectionContent = sectionContentData.value.data.onCreateSectionContent
                let tempContent = projectRef.current.content;
                tempContent.items.push(newSectionContent)
                setProject({ ...projectRef.current, content: tempContent })
            }
        })

        API.graphql(graphqlOperation(onUpdateSectionContent)).subscribe({
            next: sectionContentData => {
                const updatedSectionContent = sectionContentData.value.data.onUpdateSectionContent
                let tempContent = projectRef.current.content;
                const updatedSectionIndex = tempContent.items.findIndex(item => item.id === updatedSectionContent.id)
                tempContent.items.splice(updatedSectionIndex, 1, updatedSectionContent)
                setProject({ ...projectRef.current, content: tempContent })
                setCurrentSection(tempContent)
            }
        })

        API.graphql(graphqlOperation(onCreateParagraph)).subscribe({
            next: createParagraphData => {
                const newParagraphContent = createParagraphData.value.data.onCreateParagraph
                let tempContent = projectRef.current.content;
                let contentIndex = tempContent.items.findIndex(cont => cont.id == newParagraphContent.section.id)
                tempContent.items[contentIndex].paragraphs.items.push(newParagraphContent)
                console.log(tempContent)
                setProject({ ...projectRef.current, content: tempContent })
            }
        })

        //TODO - Add listener for onDeleteParagraph / onUpdateParagraph
    },
        []
    )

    const fetchOutline = async () => {
        const divisionResults = await API.graphql(graphqlOperation(divisionsByNumber, { baseType: "division" }));
        const partResults = await API.graphql(graphqlOperation(partsByNumber, { baseType: "part" }));
        let tempDivisions = divisionResults.data.divisionsByNumber.items;
        tempDivisions.map(div => {
            return (
                div.sections.items.sort((a, b) => a.id - b.id)
            )
        });
        let tempParts = partResults.data.partsByNumber.items;
        tempParts.map(part => {
            return (
                part.articles.items.sort((a, b) => a.orderInPart - b.orderInPart).map(art => {
                    art.paragraphHints.items.sort((a, b) => a.orderIArticle - b.orderInArticle)
                }
                )
            )
        });
        setDivisions(tempDivisions);
        setParts(tempParts);
    }

    // fetch project specific data
    const fetchProject = async () => {
        const results = await API.graphql(graphqlOperation(getProject, { id: projectId }));
        setProject(results.data.getProject)
    }


    //-------- HANDLERS --------//
    const browserCheckHandler = async (id, isOn, baseType) => {
        const propName = baseType + "sOn";
        const oldArray = project[propName]
        let newArray;
        if (isOn) {
            newArray = oldArray.filter(div => div !== id)
        } else {
            newArray = [...oldArray, id]
        }
        await API.graphql(graphqlOperation(updateProject, { input: { id: project.id, [propName]: newArray } }))
        setProject({ ...project, [propName]: newArray });
    }

    const sectionClickHandler = async (id) => {
        let divisionId;
        let sectionId;

        if (id.length > 2) {
            divisionId = id.slice(0, 2)
            sectionId = id
        } else {
            divisionId = id
            sectionId = id.concat("0000")
        }

        let currentSectionContent = project.content.items.find(sect => sect.section.id === sectionId);

        if (!currentSectionContent) {
            const newSectionContent = {
                sectionContentProjectId: projectId,
                sectionContentSectionId: sectionId,
                partsOn: ["1", "2", "3"],
                articlesOn: [],
                notes: null
            }

            const results = await API.graphql(graphqlOperation(createSectionContent, { input: newSectionContent }))
            currentSectionContent = results.data.createSectionContent
        }

        setCurrentSection(currentSectionContent);
    }

    const contentCheckHandler = async (id, isOn, baseType) => {
        const propName = baseType + "sOn";
        const oldArray = currentSection[propName]
        let newArray;
        if (isOn) {
            newArray = oldArray.filter(item => item !== id)
        } else {
            newArray = [...oldArray, id]
        }
        await API.graphql(graphqlOperation(updateSectionContent, { input: { id: currentSection.id, [propName]: newArray } }))
        setCurrentSection({ ...currentSection, [propName]: newArray });
    }


    return (
        <SpecContext.Provider value={{ divisions, parts, project, currentSection, browserCheckHandler, sectionClickHandler, contentCheckHandler }}>
            {props.children}
        </SpecContext.Provider>
    );
};

export default SpecContextProvider;
