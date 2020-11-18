import React, { createContext, useState, useEffect, createRef, useRef } from 'react';

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import {
    getProject,
    divisionsByNumber,
    partsByNumber,
    listSectionContents,
} from '../graphql/queries'
import { updateProject, updateSectionContent } from '../graphql/mutations'
import { onCreateSection } from '../graphql/subscriptions'

export const SpecContext = createContext();

const SpecContextProvider = (props) => {

    //-------- STATE --------//

    // outline state
    const [divisions, setDivisions] = useState([]);
    const [parts, setParts] = useState([]);

    const divisionsRef = useRef();
    divisionsRef.current = divisions;

    // project state
    const [project, setProject] = useState({})
    const [sectionsContent, setSectionsContent] = useState();

    // current display state
    const [currentSection, setCurrentSection] = useState({});


    //-------- FETCHING DATA --------//

    // fetch outline data
    useEffect(() => {
        fetchOutline();
        fetchProject();
        API.graphql(graphqlOperation(onCreateSection)).subscribe({
            next: sectionData => {
                console.log(sectionData.value.data.onCreateSection)
                const newSection = sectionData.value.data.onCreateSection
                let tempDivisions = [...divisionsRef.current]
                const divIndex = tempDivisions.findIndex(({ id }) => id == newSection.division.id)
                delete newSection.division
                tempDivisions[divIndex].sections.items.push(newSection)
                setDivisions(tempDivisions)
            }
        })
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
        setDivisions(tempDivisions);
        setParts(partResults.data.partsByNumber.items);
    }

    // fetch project specific data
    const fetchProject = async () => {
        const results = await API.graphql(graphqlOperation(getProject, { id: "1905" }));
        setProject(results.data.getProject)

        const sectionContentResults = await API.graphql(graphqlOperation(listSectionContents, { project: "1905" }))
        setSectionsContent(sectionContentResults.data.listSectionContents.items);
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

        let currentSectionContent = sectionsContent.find(sect => sect.section.id === sectionId)

        setCurrentSection(currentSectionContent);
        console.log(currentSectionContent);
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
        <SpecContext.Provider value={{ divisions, parts, project, currentSection, sectionsContent, browserCheckHandler, sectionClickHandler, contentCheckHandler }}>
            {props.children}
        </SpecContext.Provider>
    );
};

export default SpecContextProvider;
