import React, { useState, useContext, useRef } from "react"
import { SectionContext } from '../../context/SectionContext'

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'
// graphql imports
import { updateParagraph, deleteParagraph } from '../../graphql/mutations'


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

    // context
    const useOutsideClick = useContext(SectionContext).useOutsideClick
    const ref = useRef();

    useOutsideClick(ref, () => {
        if (isActive) setIsActive(false);
    });

    const numeral = 'abcdefghijklmnopqrstuvwxyz'.charAt(props.orderInArticle);

    const onChangeHandler = (e) => {
        setParagraph({ ...paragraph, content: e.target.value })
    }

    const updateParagraphHandler = async (e) => {
        e.preventDefault();
        console.log("Updating to this in the database:", paragraph)
        await API.graphql(graphqlOperation(updateParagraph, { input: { id: props.id, content: paragraph.content } }))
        setIsActive(false);
    }


    return (
        !isActive ? (
            <div ref={ref} className={`paragraph inactive`} onClick={() => setIsActive(!isActive)}>
                <p>{numeral}. {props.content}</p>
                {props.orderInArticle > 0 && <button onClick={() => props.reOrderParagraphs(props.orderInArticle, "moveUp")}>up</button>}
                {props.orderInArticle < props.numParagraphs - 1 && <button onClick={() => props.reOrderParagraphs(props.orderInArticle, "moveDown")}>down</button>}
            </div>
        ) : (
                <div ref={ref} className={`paragraph active`} >
                    <p>{numeral}.</p>
                    <input value={paragraph.content} onChange={onChangeHandler} />
                    <button onClick={updateParagraphHandler}>save</button>
                    <button onClick={() => props.reOrderParagraphs(props.orderInArticle, "delete", props.id)}>delete</button>
                </div>
            )
    )
}

export default ParagraphContainer;

