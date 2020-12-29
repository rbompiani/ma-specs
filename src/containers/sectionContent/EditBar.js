import React from "react"

// react icon imports
import { IconContext } from "react-icons";
import { FaUndoAlt, FaLongArrowAltDown, FaLongArrowAltUp, FaTimesCircle } from 'react-icons/fa';


const EditBar = (props) => {
    const isFirst = props.order === 0;
    const isLast = props.order === props.listLength - 1;
    return (
        <div className="editBar">
            <button onClick={props.save}>save</button>
            <FaUndoAlt onClick={props.reset} />
            {isLast ?
                <FaLongArrowAltDown className="disabled" /> :
                <FaLongArrowAltDown onClick={() => props.reOrder(props.order, "moveDown")} />
            }
            {isFirst ?
                <FaLongArrowAltUp className="disabled" /> :
                <FaLongArrowAltUp onClick={() => props.reOrder(props.order, "moveUp")} />
            }
            <FaTimesCircle className="deleteIcon" onClick={() => props.reOrder(props.order, "delete", props.id)} />
        </div>
    )
}

export default EditBar;