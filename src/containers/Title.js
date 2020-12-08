import React, { useContext } from 'react'

const Title = (props) => {

    return (
        <h1>
            {`${props.id} - ${props.title}`}
        </h1>
    )
}

export default Title