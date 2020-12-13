import React, { useState } from "react"

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'
// graphql imports
import { createSubParagraph } from '../../graphql/mutations'

const AddSubParagraph = (props) => {

    // state
    const [isActive, setIsActive] = useState(false);
    const [newSubParagraph, setNewSubParagraph] = useState({
        paragraph: props.paragraphId,
        orderInParagraph: props.numSubParagraphs,
        content: "",
        isOn: true,
        baseType: "subparagraph"
    })

    //TODO - Determine how many paragraphs exist in the current article, auto increment new paragraph to be next

    // handlers
    const addSubParagraphHandler = () => {
        setIsActive(true);
    }

    const subParagraphChangeHandler = (e) => {
        setNewSubParagraph({
            ...newSubParagraph,
            content: e.target.value
        });
    }

    const submitSubParagraphHandler = async (e) => {
        e.preventDefault();
        console.log("Adding this to the database:", newSubParagraph)
        await API.graphql(graphqlOperation(createSubParagraph, { input: { ...newSubParagraph } }))
        setIsActive(false);
        setNewParagraph({ ...newSubParagraph, content: "" })
    }

    return (
        <div>
            {isActive ? (
                <div>
                    <input
                        type="text"
                        placeholder="Add subparagraph content"
                        value={newSubParagraph.content}
                        onChange={subParagraphChangeHandler}
                    >
                    </input>
                    <button>...</button>
                    <button onClick={submitSubParagraphHandler}>Save</button>
                </div>
            ) : (
                    <AddSubParagraphPrompt addParagraphHandler={addParagraphHandler} />
                )}
        </div>
    )
}

export default AddSubParagraph;

const AddSubParagraphPrompt = (props) => {
    return (
        <div>
            <button onClick={props.addSubParagraphHandler}>+</button>
            <p>Add new subparagraph</p>
        </div>
    )
}
