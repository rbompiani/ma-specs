import React, { createContext, useState, useEffect, useRef } from 'react';

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { getProject } from '../graphql/queries'
import { createSectionContent, updateProject, updateSectionContent } from '../graphql/mutations'
import { onCreateSectionContent, onUpdateSectionContent, onCreateParagraph } from '../graphql/subscriptions'

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {

    //-------- STATE --------//

    //TODO - update project id with selected value
    const [projectId, setProjectId] = useState("1905")

    // project state
    const [project, setProject] = useState({})

    const projectRef = useRef();
    projectRef.current = project;

    // current display state
    const [currentSection, setCurrentSection] = useState({});



    //-------- FETCHING DATA --------//

    // fetch outline data
    useEffect(() => {
        fetchProject();

        // Listeners - onCreateSectionContent / onUpdateSectionContent
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
        <ProjectContext.Provider value={{ project, currentSection, browserCheckHandler, sectionClickHandler, contentCheckHandler }}>
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectContextProvider;
