import React, { useState } from "react"

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'
// graphql imports
import { createParagraph } from '../../graphql/mutations'

const AddParagraph = (props) => {

    // state
    const [isActive, setIsActive] = useState(false);
    const [newParagraph, setNewParagraph] = useState({
        paragraphSectionId: props.sectionId,
        article: props.articleId,
        orderInArticle: props.numParagraphs,
        content: "",
        isOn: true,
        baseType: "paragraph"
    })

    //TODO - Determine how many paragraphs exist in the current article, auto increment new paragraph to be next

    // handlers
    const addParagraphHandler = () => {
        setIsActive(true);
    }

    const paragraphChangeHandler = (e) => {
        setNewParagraph({
            ...newParagraph,
            content: e.target.value
        });
    }

    const submitParagraphHandler = async (e) => {
        e.preventDefault();
        console.log("Adding this to the database:", newParagraph)
        await API.graphql(graphqlOperation(createParagraph, { input: { ...newParagraph } }))
        setIsActive(false);
        setNewParagraph({ ...newParagraph, content: "" })
    }

    return (
        <div>
            {isActive ? (
                <div>
                    <input
                        type="text"
                        placeholder="Add paragraph content, or select paragraph starter ->"
                        value={newParagraph.content}
                        onChange={paragraphChangeHandler}
                    >
                    </input>
                    <button>...</button>
                    <button onClick={submitParagraphHandler}>Save</button>
                </div>
            ) : (
                    <AddParagraphPrompt addParagraphHandler={addParagraphHandler} />
                )}

            <select className="paragraphHints" name="hint" id="hint" onChange={(e) => { console.log(e.target.value) }}>
                {props.paragraphHints.map(hint => <option value={hint.content} className="paragraph">{hint.content}</option>)}
            </select>
        </div>
    )
}

export default AddParagraph;

const AddParagraphPrompt = (props) => {
    return (
        <div>
            <button onClick={props.addParagraphHandler}>+</button>
            <p>Add new paragraph</p>
        </div>
    )
}
