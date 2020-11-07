import React from 'react';
//import { attachEventProps } from '@aws-amplify/ui-react/lib-esm/react-component-lib/utils';

const BrowserItem = (props) => {


    return (
        <li className={`browserItem ${props.class} ${!props.isOn ? "inactive" : ""} `}>
            <input
                type="checkbox"
                id={props.id}
                value={props.id}
                className={`checkbox-${props.class} `}
                onChange={(e) => props.check(props.id, props.isOn)}
                checked={props.isOn}
            />
            <label>{props.id} - {props.title}</label>
        </li>
    )
}

export default BrowserItem