import React, { createContext, useState, useEffect, useRef } from 'react';

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { getProject } from '../graphql/queries'
import { updateProject } from '../graphql/mutations'
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
            }
        })

        API.graphql(graphqlOperation(onCreateParagraph)).subscribe({
            next: createParagraphData => {
                const newParagraphContent = createParagraphData.value.data.onCreateParagraph
                let tempContent = projectRef.current.content;
                let contentIndex = tempContent.items.findIndex(cont => cont.id === newParagraphContent.section.id)
                tempContent.items[contentIndex].paragraphs.items.push(newParagraphContent)
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

    return (
        <ProjectContext.Provider value={{ project, browserCheckHandler }}>
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectContextProvider;
