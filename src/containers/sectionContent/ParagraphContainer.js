import React, { useState } from "react"

const ParagraphContainer = (props) => {
    // state
    const [isActive, setIsActive] = useState(false);
    const numeral = 'abcdefghijklmnopqrstuvwxyz'.charAt(props.itemNo);

    return (
        <div>
            <p>{numeral}. {props.content}</p>
        </div>
    )
}

export default ParagraphContainer;

