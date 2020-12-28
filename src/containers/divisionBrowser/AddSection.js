import React, { useState } from 'react'
// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { createSection } from '../../graphql/mutations'


const AddSection = (props) => {
    const [newSection, setNewSection] = useState({
        id: props.id,
        title: "",
        baseType: "section",
        sectionDivisionId: props.id
    })

    const sectionInputHandler = (e) => {
        setNewSection({
            ...newSection,
            [e.target.name]: e.target.value
        });
    }

    const submitSectionHandler = async (e) => {
        e.preventDefault();
        await API.graphql(graphqlOperation(createSection, { input: newSection }))
    }

    return (
        <div className="addSection">
            <input type="text" name="id" value={newSection.id} onChange={sectionInputHandler} />
            <input type="tet" name="title" value={newSection.title} onChange={sectionInputHandler} />
            <button onClick={submitSectionHandler}>+</button>
        </div>
    )
}

export default AddSection