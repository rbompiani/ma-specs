import React from 'react';
import { attachEventProps } from '@aws-amplify/ui-react/lib-esm/react-component-lib/utils';

const BrowserItem = (props) => {
    return (
        <li className={`browserItem ${props.class} ${!props.isOn ? "inactive" : ""}`}>
            <label><input type="checkbox" className={`checkbox-${props.class} `} onChange={(e) => props.check(props.id, props.isOn)} checked={props.isOn} /><span>{props.id} - {props.title}</span></label>
        </li>
    )
}

export default BrowserItem