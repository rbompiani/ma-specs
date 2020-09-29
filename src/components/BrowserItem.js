import React from 'react';

import Checkbox from './Checkbox'

const BrowserItem = (props) => {
    return (
        <li className={`browserItem ${props.class}`}>
            <Checkbox /> {props.id} - {props.title}
        </li>
    )
}

export default BrowserItem