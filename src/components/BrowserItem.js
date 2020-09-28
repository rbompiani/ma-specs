import React from 'react';

const BrowserItem = (props) => {
    return (
        <li className={`browserItem ${props.class}`}>
            <li>{props.class == "division" ? "Division" : null} {props.id} - {props.title}</li>
        </li>
    )
}

export default BrowserItem