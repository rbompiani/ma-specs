import React from 'react'

const Checkbox = (props) => {
    return (
        <input
            type="checkbox"
            id={props.id}
            value={props.id}
            className={`checkbox-${props.baseType} `}
            onChange={(e) => checkHandler(props.id, props.isOn)}
            checked={props.isOn}
        />
    )
}

export default Checkbox;