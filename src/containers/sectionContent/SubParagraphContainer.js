import React, { useState, useContext, useRef } from "react"
import { SectionContext } from '../../context/SectionContext'
import EditBar from './EditBar'

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'
// graphql imports
import { updateSubParagraph, deleteSubParagraph } from '../../graphql/mutations'


const SubParagraphContainer = (props) => {
    // state
    const [isActive, setIsActive] = useState(false);
    const [subParagraph, setSubParagraph] = useState({
        subParagraphParagraphId: props.paragraphId,
        orderInParagraph: props.orderInParagraph,
        content: props.content,
        isOn: true,
        baseType: "subparagraph"
    })
    const [textAreaHeight, setTextAreaHeight] = useState(2)

    const numeral = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'][props.orderInParagraph];

    // handlers
    // handlers
    function calcHeight(text, width) {
        let numberOfLineBreaks = (text.match(/\n/g) || []).length;
        let newRows = Math.ceil((text.length * 8) / width) + numberOfLineBreaks + 1;
        return newRows;
    }

    const prepTextArea = (e) => {
        setIsActive(true);
        setTextAreaHeight(calcHeight(subParagraph.content, e.currentTarget.offsetWidth))
    }

    const onEditHandler = () => {
        setIsActive(!isActive);
    }

    // context
    const useOutsideClick = useContext(SectionContext).useOutsideClick
    const ref = useRef();

    // handlers
    useOutsideClick(ref, () => {
        if (isActive) setIsActive(false);
    });

    const onChangeHandler = (e) => {
        setSubParagraph({ ...subParagraph, content: e.target.value })
    }

    const updateSubParagraphHandler = async (e) => {
        e.preventDefault();
        console.log("Updating to this in the database:", subParagraph)
        await API.graphql(graphqlOperation(updateSubParagraph, { input: { id: props.id, content: subParagraph.content } }))
        setIsActive(false);
        onEditHandler();
    }

    const resetParagraphContent = (e) => {
        setTextAreaHeight(calcHeight(props.content, 500));
        setSubParagraph({ ...subParagraph, content: props.content })
    }


    return (
        <div ref={ref}>{
            !isActive ? (
                <div className={`subParagraph`} onClick={prepTextArea}>
                    <span className="numeral">{numeral}.</span>
                    <p className="subparagraphContent">{props.content}</p>
                    {/* {props.orderInParagraph > 0 && <button onClick={() => props.reOrderSubParagraphs(props.orderInParagraph, "moveUp")}>up</button>}
                {props.orderInParagraph < props.numSubParagraphs && <button onClick={() => props.reOrderSubParagraphs(props.orderInParagraph, "moveDown")}>down</button>} */}
                </div>
            ) : (
                    <div>
                        <div className={`subParagraph active`} >
                            <p>{numeral}.</p>
                            <textarea value={subParagraph.content} onChange={onChangeHandler} />
                            {/* <button onClick={updateSubParagraphHandler}>save</button>
                    <button onClick={() => props.reOrderSubParagraphs(props.orderInParagraph, "delete", props.id)}>delete</button> */}
                        </div>
                        <EditBar
                            id={props.id}
                            reOrder={props.reOrderSubParagraphs}
                            order={props.orderInParagraph}
                            save={updateSubParagraphHandler}
                            reset={resetParagraphContent}
                            listLength={props.numSubParagraphs}
                        />
                    </div>
                )
        }
        </div>
    )
}

export default SubParagraphContainer;

