import React, { useState } from "react"
import EditBar from './EditBar'

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'
// graphql imports
import { createSubParagraph } from '../../graphql/mutations'
// react icon imports
import { MdAddBox } from 'react-icons/md';

const AddSubParagraph = (props) => {

    // state
    const [isActive, setIsActive] = useState(false);
    const [newSubParagraph, setNewSubParagraph] = useState({
        subParagraphParagraphId: props.paragraphId,
        orderInParagraph: props.numSubParagraphs,
        content: "",
        isOn: true,
        baseType: "subparagraph"
    })
    const [textAreaHeight, setTextAreaHeight] = useState(2)

    const numeral = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'][props.numSubParagraphs];

    function calcHeight(text, width) {
        let numberOfLineBreaks = (text.match(/\n/g) || []).length;
        let newRows = Math.ceil((text.length * 8) / width) + numberOfLineBreaks + 1;
        return newRows;
    }

    const subParagraphChangeHandler = (e) => {
        setTextAreaHeight(calcHeight(e.target.value, e.currentTarget.offsetWidth));
        setNewSubParagraph({
            ...newSubParagraph,
            content: e.target.value
        });
    }

    const submitSubParagraphHandler = async (e) => {
        e.preventDefault();
        console.log("Adding this to the database:", newSubParagraph)
        await API.graphql(graphqlOperation(createSubParagraph, { input: { ...newSubParagraph, orderInParagraph: props.numSubParagraphs } }))
        setIsActive(false);
        setNewSubParagraph({ ...newSubParagraph, content: "" })
    }

    const resetContent = (e) => {
        setTextAreaHeight(2);
        setNewSubParagraph({ ...newSubParagraph, content: "" })
        setIsActive(false)
    }

    return (
        <div className="addSubparagraph">
            {isActive ? (
                <div>
                    <div className="addSubparagraphInput">
                        <div>{numeral}.</div>
                        <textarea
                            type="text"
                            placeholder="Add subparagraph content"
                            value={newSubParagraph.content}
                            rows={textAreaHeight}
                            onChange={subParagraphChangeHandler}
                        />
                        <div></div>
                        <div>
                            <button onClick={submitSubParagraphHandler}>Save</button>
                            <button onClick={resetContent}>Cancel</button>
                        </div>
                    </div>
                </div>
            ) : (
                    <div className="addSubparagraphPrompt" onClick={() => setIsActive(true)} >
                        <MdAddBox />
                        <p>Add new subparagraph</p>
                    </div>
                )}
        </div>
    )
}

export default AddSubParagraph;
