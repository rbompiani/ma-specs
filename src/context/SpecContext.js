import React, { createContext, useState, useEffect } from 'react';

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import {
    getProject,
    divisionsByNumber,
    getSection,
    partsByNumber,
    getParagraph,
    listParagraphs,
    listSubparagraphs
} from '../graphql/queries'


export const SpecContext = createContext();

const SpecContextProvider = (props) => {

    //-------- STATE --------//

    // outline state
    const [allDivisions, setAllDivisions] = useState([]);
    const [parts, setParts] = useState([]);
    const [paragraphs, setParagraphs] = useState([]);

    // project state
    const [project, setProject] = useState({})

    // current display state
    const [currentSection, setCurrentSection] = useState({});


    //-------- FETCHING DATA --------//

    // fetch outline data
    useEffect(() => {
        const fetchOutline = async () => {
            const divisionResults = await API.graphql(graphqlOperation(divisionsByNumber, { baseType: "Division" }));
            const partResults = await API.graphql(graphqlOperation(partsByNumber, { baseType: "Part" }));
            setAllDivisions(divisionResults.data.divisionsByNumber.items);
            setParts(partResults.data.partsByNumber.items);
        }
        fetchOutline();
        fetchProject();
    },
        []
    )

    // fetch project specific data
    const fetchProject = async () => {
        const results = await API.graphql(graphqlOperation(getProject, { id: "1905" }));
        console.log(results.data.getProject.content)
        setProject(results.data.getProject)
        setCurrentSection(results.data.getProject.divisionsOn[0])
    }


    useEffect(() => {
        const fetchParagraphs = async () => {
            const results = await API.graphql(graphqlOperation(listParagraphs));
            /*
            const flatResults = results.data.listParagraphs.items.map(e => {
              const partID = e.part.id
              e.part = partID
              return e
            })
            console.log(flatResults)
            */
            setParagraphs(results.data.listParagraphs.items);
        }
        fetchParagraphs();
    },
        []
    )

    //-------- HANDLERS --------//
    const checkHandler = (id, isOn) => {
        const oldDivisions = project.divisionsOn
        if (isOn) {
            setProject({ ...project, divisionsOn: oldDivisions.filter(div => div != id) });
        } else {
            setProject({ ...project, divisionsOn: [...oldDivisions, id] })
        }
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

        const containingDivision = allDivisions.find(div => div.id == divisionId)
        const selectedSection = containingDivision.sections.items.find(sect => sect.id == sectionId)

        setCurrentSection(selectedSection);
    }


    return (
        <SpecContext.Provider value={{ allDivisions, parts, paragraphs, project, currentSection, checkHandler, sectionClickHandler }}>
            {props.children}
        </SpecContext.Provider>
    );
};

export default SpecContextProvider;
