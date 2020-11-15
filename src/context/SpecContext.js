import React, { createContext, useState, useEffect, createRef, useRef } from 'react';

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import {
    getProject,
    divisionsByNumber,
    partsByNumber,
    listArticles,
} from '../graphql/queries'
import { updateProject } from '../graphql/mutations'
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
                console.log("here are the new divisions", tempDivisions)
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
        setCurrentSection(results.data.getProject.divisionsOn[0])
    }


    //-------- HANDLERS --------//
    const checkHandler = async (id, isOn) => {
        const oldDivisions = project.divisionsOn
        let newDivisions;
        if (isOn) {
            newDivisions = oldDivisions.filter(div => div !== id)
        } else {
            newDivisions = [...oldDivisions, id]
        }
        console.log(newDivisions)
        await API.graphql(graphqlOperation(updateProject, { input: { id: project.id, divisionsOn: newDivisions } }))
        setProject({ ...project, divisionsOn: newDivisions });
    }


    const sectionClickHandler = (id) => {
        let divisionId;
        let sectionId;

        if (id.length > 2) {
            divisionId = id.slice(0, 2)
            sectionId = id
        } else {
            divisionId = id
            sectionId = id.concat("0000")
        }

        const containingDivision = divisions.find(div => div.id === divisionId)
        const selectedSection = containingDivision.sections.items.find(sect => sect.id === sectionId)

        setCurrentSection(selectedSection);
    }


    return (
        <SpecContext.Provider value={{ divisions, parts, project, currentSection, checkHandler, sectionClickHandler }}>
            {props.children}
        </SpecContext.Provider>
    );
};

export default SpecContextProvider;
