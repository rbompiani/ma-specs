import React from 'react'

import Checkbox from '../../components/Checkbox'

const SectionItem = (props) => {
    return (
        <div className={props.baseType || ""}>
            <Checkbox />
            <li>{props.title}</li>
        </div>
    )
}

export default SectionItem