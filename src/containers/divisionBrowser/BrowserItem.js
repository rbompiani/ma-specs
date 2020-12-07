import React, { useContext } from 'react';
import { ProjectContext } from '../../context/ProjectContext'
//import { attachEventProps } from '@aws-amplify/ui-react/lib-esm/react-component-lib/utils';

const BrowserItem = (props) => {
    const checkHandler = useContext(ProjectContext).browserCheckHandler
    const sectionClickHandler = useContext(ProjectContext).sectionClickHandler

    return (
        <li
            className={
                `browserItem ${props.class} 
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
            <label onClick={() => sectionClickHandler(props.id)} >{props.id} - {props.title}</label>
            {props.toggleExpanded && <div className={props.isExpanded ? "arrow-up" : "arrow-down"} onClick={props.toggleExpanded}></div>}
        </li>
    )
}

export default BrowserItem