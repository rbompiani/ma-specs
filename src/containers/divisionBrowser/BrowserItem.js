import React, { useContext } from 'react';
import { ProjectContext } from '../../context/ProjectContext'
import { SectionContext } from '../../context/SectionContext'
//import { attachEventProps } from '@aws-amplify/ui-react/lib-esm/react-component-lib/utils';

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { createSectionContent } from '../../graphql/mutations'


const BrowserItem = (props) => {
    const checkHandler = useContext(ProjectContext).browserCheckHandler
    const { id: projectId, content: projectContent } = useContext(ProjectContext).project
    const fetchSectionContent = useContext(SectionContext).fetchSectionContent
    const setActiveSection = useContext(SectionContext).setActiveSection

    const sectionClickHandler = async (id, baseType) => {
        id = baseType === "division" ? id = id.concat("0000") : id
        let newCurrentSection = projectContent.items.find(sectCont => sectCont.section.id === id)
        if (newCurrentSection) {
            fetchSectionContent(newCurrentSection.id);
        } else {
            const newSectionContent = {
                sectionContentProjectId: projectId,
                sectionContentSectionId: id,
                partsOn: ["1", "2", "3"],
                articlesOn: [],
                notes: null
            }
            const results = await API.graphql(graphqlOperation(createSectionContent, { input: newSectionContent }))
            setActiveSection(results)
        }
    }

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