import React, { createContext, useState, useEffect } from 'react';

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

export const SpecContext = createContext();

const SpecContextProvider = (props) => {

    //-------- STATE --------//

    // outline state
    const [allDivisions, setAllDivisions] = useState([]);
    const [parts, setParts] = useState([]);
    const [articles, setArticles] = useState([]);

    // project state
    const [project, setProject] = useState({})

    // current display state
    const [currentSection, setCurrentSection] = useState({});


    //-------- FETCHING DATA --------//

    // fetch outline data
    useEffect(() => {
        const fetchOutline = async () => {
            const divisionResults = await API.graphql(graphqlOperation(divisionsByNumber, { baseType: "division" }));
            const partResults = await API.graphql(graphqlOperation(partsByNumber, { baseType: "part" }));
            const articleResults = await API.graphql(graphqlOperation(listArticles));
            let tempDivisions = divisionResults.data.divisionsByNumber.items;
            tempDivisions.map(div => {
                return (
                    div.sections.items.sort((a, b) => a.id - b.id)
                )
            });
            setAllDivisions(tempDivisions);
            setParts(partResults.data.partsByNumber.items);
            setArticles(articleResults.data.listArticles.items.sort((a, b) => a.orderInPart - b.orderInPart));
        }
        fetchOutline();
        fetchProject();
    },
        []
    )

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

        const containingDivision = allDivisions.find(div => div.id === divisionId)
        const selectedSection = containingDivision.sections.items.find(sect => sect.id === sectionId)

        setCurrentSection(selectedSection);
    }


    return (
        <SpecContext.Provider value={{ allDivisions, parts, articles, project, currentSection, checkHandler, sectionClickHandler }}>
            {props.children}
        </SpecContext.Provider>
    );
};

export default SpecContextProvider;
