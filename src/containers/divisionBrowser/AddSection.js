import React, { useState } from 'react'
// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { createProject, createSection } from '../../graphql/mutations'


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
        console.log("Adding this to the database:", newSection)
        const result = await API.graphql(graphqlOperation(createSection, { input: newSection }))
    }

    return (
        <div>
            <input type="text" name="id" value={newSection.id} onChange={sectionInputHandler} />
            <input type="tet" name="title" value={newSection.title} onChange={sectionInputHandler} />
            <button onClick={submitSectionHandler}>+</button>
        </div>
    )
}

export default AddSection