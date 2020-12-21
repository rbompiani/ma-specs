import React, { useState, useContext, useRef } from "react"
import { SectionContext } from '../../context/SectionContext'
import SubParagraphContainer from './SubParagraphContainer'
import AddSubParagraph from './AddSubparagraph'

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'
// graphql imports
import { updateParagraph, deleteSubParagraph, updateSubParagraph } from '../../graphql/mutations'


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

    // local variables and props
    const subParagraphs = props.subparagraphs.items.sort((a, b) => a.orderInParagraph - b.orderInParagraph);
    const numeral = 'abcdefghijklmnopqrstuvwxyz'.charAt(props.orderInArticle);

    // handlers
    useOutsideClick(ref, () => {
        if (isActive) setIsActive(false);
    });

    const onChangeHandler = (e) => {
        setParagraph({ ...paragraph, content: e.target.value })
    }

    const updateParagraphHandler = async (e) => {
        e.preventDefault();
        console.log("Updating to this in the database:", paragraph)
        await API.graphql(graphqlOperation(updateParagraph, { input: { id: props.id, content: paragraph.content } }))
        setIsActive(false);
    }

    const reOrderSubParagraphs = async (indexToUpdate, action, deleteId) => {
        let subParagraphsToUpdate = []
        let itemUp
        let itemDown
        switch (action) {
            case "delete":
                if (subParagraphs.length > 1) {
                    for (let i = indexToUpdate + 1; i < subParagraphs.length; i++) {
                        itemUp = subParagraphs[i]
                        itemUp.orderInParagraph--
                        subParagraphsToUpdate.push(itemUp)
                    }
                }
                break
            case "moveUp":
                itemUp = subParagraphs[indexToUpdate]
                itemDown = subParagraphs[indexToUpdate - 1]
                itemUp.orderInParagraph--
                itemDown.orderInParagraph++
                subParagraphsToUpdate.push(itemUp)
                subParagraphsToUpdate.push(itemDown)
                break
            case "moveDown":
                itemDown = subParagraphs[indexToUpdate]
                itemUp = subParagraphs[indexToUpdate + 1]
                itemUp.orderInParagraph--
                itemDown.orderInParagraph++
                subParagraphsToUpdate.push(itemUp)
                subParagraphsToUpdate.push(itemDown)
                break
        }
        console.log(subParagraphsToUpdate);
        subParagraphsToUpdate.map(async (sub) => {
            (
                await API.graphql(graphqlOperation(updateSubParagraph, { input: { id: sub.id, orderInParagraph: sub.orderInParagraph } }))
            )
        })
        action === "delete" && await API.graphql(graphqlOperation(deleteSubParagraph, { input: { id: deleteId } }))
    }


    return (
        <div>
            {!isActive ? (
                <div ref={ref} className={`paragraph inactive`} onClick={() => setIsActive(true)}>
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
                        <AddSubParagraph paragraphId={props.id} numSubParagraphs={subParagraphs.length} />
                    </div>
                )}
            {subParagraphs.map((sub) => {
                return (
                    <SubParagraphContainer
                        key={sub.id}
                        {...sub}
                        reOrderSubParagraphs={reOrderSubParagraphs}
                    />
                )
            })}
        </div>
    )
}

export default ParagraphContainer;

