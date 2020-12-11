import React, { useState } from "react"

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'
// graphql imports
import { updateParagraph } from '../../graphql/mutations'


const ParagraphContainer = (props) => {
    // state
    const [isActive, setIsActive] = useState(false);
    const [paragraph, setParagraph] = useState({
        paragraphSectionId: props.sectionId,
        article: props.articleId,
        orderInArticle: props.orderInArticle,
        content: props.content,
        isOn: true,
        baseType: "paragraph"
    })

    const numeral = 'abcdefghijklmnopqrstuvwxyz'.charAt(props.orderInArticle);

    // handlers
    const onEditHandler = () => {
        setIsActive(!isActive);
    }

    const onChangeHandler = (e) => {
        setParagraph({ ...paragraph, content: e.target.value })
    }

    const updateParagraphHandler = async (e) => {
        e.preventDefault();
        console.log("Updating to this in the database:", paragraph)
        await API.graphql(graphqlOperation(updateParagraph, { input: { id: props.id, content: paragraph.content } }))
        setIsActive(false);
        onEditHandler();
    }

    return (
        !isActive ? (
            <div className={`paragraph active`} >
                <p>{numeral}. {props.content}</p>
                <button onClick={onEditHandler}>edit</button>
            </div>
        ) : (
                <div className={`paragraph inactive`} >
                    <p>{numeral}.</p>
                    <input value={paragraph.content} onChange={onChangeHandler} />
                    <button onClick={updateParagraphHandler}>save</button>
                </div>
            )
    )
}

export default ParagraphContainer;

