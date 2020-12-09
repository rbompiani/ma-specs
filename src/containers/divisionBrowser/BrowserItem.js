import React, { useContext } from 'react';
import { ProjectContext } from '../../context/ProjectContext'
//import { attachEventProps } from '@aws-amplify/ui-react/lib-esm/react-component-lib/utils';

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { createSectionContent } from '../../graphql/mutations'


const BrowserItem = (props) => {
    const checkHandler = useContext(ProjectContext).browserCheckHandler
    const { id: projectId, content: projectContent } = useContext(ProjectContext).project

    //const sectionClickHandler = useContext(ProjectContext).sectionClickHandler

    const sectionClickHandler = async (id, baseType) => {
        id = baseType === "division" ? id = id.concat("0000") : id
        let newCurrentSection = projectContent.items.find(sectCont => sectCont.section.id === id)
        if (newCurrentSection) {
            props.fetchSectionContent(newCurrentSection.id);
        } else {
            const newSectionContent = {
                sectionContentProjectId: projectId,
                sectionContentSectionId: id,
                partsOn: ["1", "2", "3"],
                articlesOn: [],
                notes: null
            }
            await API.graphql(graphqlOperation(createSectionContent, { input: newSectionContent }))
            props.updateSectionContent(props.updateSectionContent)
        }
    }

    // const sectionClickHandler = async (id) => {
    //     let divisionId;
    //     let sectionId;

    //     if (id.length > 2) {
    //         divisionId = id.slice(0, 2)
    //         sectionId = id
    //     } else {
    //         divisionId = id
    //         sectionId = id.concat("0000")
    //     }

    //     let currentSectionContent = project.content.items.find(sect => sect.section.id === sectionId);

    //     if (!currentSectionContent) {
    //         const newSectionContent = {
    //             sectionContentProjectId: projectId,
    //             sectionContentSectionId: sectionId,
    //             partsOn: ["1", "2", "3"],
    //             articlesOn: [],
    //             notes: null
    //         }

    //         const results = await API.graphql(graphqlOperation(createSectionContent, { input: newSectionContent }))
    //         currentSectionContent = results.data.createSectionContent
    //     }

    //     setCurrentSection(currentSectionContent);
    // }

    return (
        <li
            className={
                `browserItem ${props.baseType} 
                ${!props.isOn && "inactive"}`
            }>
            <input
                type="checkbox"
                key={props.id}
                id={props.id}
                value={props.id}
                className={`checkbox-${props.class} `}
                onChange={(e) => checkHandler(props.id, props.isOn, "section")}
                checked={props.isOn}
            />
            <label onClick={() => sectionClickHandler(props.id, props.baseType)} >{props.id} - {props.title}</label>
            {props.toggleExpanded && <div className={props.isExpanded ? "arrow-up" : "arrow-down"} onClick={props.toggleExpanded}></div>}
        </li>
    )
}

export default BrowserItem