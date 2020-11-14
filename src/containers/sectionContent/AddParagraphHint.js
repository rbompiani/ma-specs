import React, { useState } from 'react'
// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { createParagraphHint } from '../../graphql/mutations'


const AddParagraphHint = (props) => {
    const [newHint, setNewHint] = useState({
        content: "",
        paragraphHintArticleId: props.id,
        orderInArticle: props.nextNumberInArticle,
        isOn: true,
    })

    const hintInputHandler = (e) => {
        setNewHint({
            ...newHint,
            [e.target.name]: e.target.value
        });
    }

    const submitHintHandler = async (e) => {
        e.preventDefault();
        console.log("Adding this to the database:", newHint)
        await API.graphql(graphqlOperation(createParagraphHint, { input: newHint }))
    }

    return (
        <div className="paragraph">
            <input type="text" name="content" value={newHint.title} onChange={hintInputHandler} />
            <button onClick={submitHintHandler}>+</button>
        </div>
    )
}

export default AddParagraphHint