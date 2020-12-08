import React, { useState, useContext } from "react"
// AWS imports
import { API, graphqlOperation } from 'aws-amplify'
// graphql imports
import { createParagraph } from '../../graphql/mutations'

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

