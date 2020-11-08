import React, { useContext } from 'react';
import { SpecContext } from '../context/SpecContext'
//import { attachEventProps } from '@aws-amplify/ui-react/lib-esm/react-component-lib/utils';

const BrowserItem = (props) => {
    const checkHandler = useContext(SpecContext).checkHandler
    const sectionClickHandler = useContext(SpecContext).sectionClickHandler

    return (
        <li className={`browserItem ${props.class} ${!props.isOn ? "inactive" : ""} `}>
            <input
                type="checkbox"
                key={props.id}
                id={props.id}
                value={props.id}
                className={`checkbox-${props.class} `}
                onChange={(e) => checkHandler(props.id, props.isOn)}
                checked={props.isOn}
            />
            <label onClick={() => sectionClickHandler(props.id)} >{props.id} - {props.title}</label>
        </li>
    )
}

export default BrowserItem