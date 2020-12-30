import React, { useState, useContext, useRef } from "react"
import { SectionContext } from '../../context/SectionContext'
import SubParagraphContainer from './SubParagraphContainer'
import AddSubParagraph from './AddSubparagraph'
import EditBar from './EditBar'

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'
// graphql imports
import { updateParagraph, deleteSubParagraph, updateSubParagraph } from '../../graphql/mutations'
// react icon imports
import { TiDelete } from 'react-icons/ti';
import { CgArrowLongDownE, CgArrowLongUpE } from 'react-icons/cg'

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
    const [textAreaHeight, setTextAreaHeight] = useState(2)

    // context
    const useOutsideClick = useContext(SectionContext).useOutsideClick
    const ref = useRef();

    // local variables and props
    const subParagraphs = props.subparagraphs.items.sort((a, b) => a.orderInParagraph - b.orderInParagraph);
    const numeral = 'ABCDEFGHIJKLMNOPQRSTUV'.charAt(props.orderInArticle);

    // handlers
    function calcHeight(text, width) {
        let numberOfLineBreaks = (text.match(/\n/g) || []).length;
        let newRows = Math.ceil((text.length * 8) / width) + numberOfLineBreaks + 1;
        return newRows;
    }

    const prepTextArea = (e) => {
        setIsActive(true);
        setTextAreaHeight(calcHeight(paragraph.content, e.currentTarget.offsetWidth))
    }

    useOutsideClick(ref, () => {
        if (isActive) setIsActive(false);
    });

    const onChangeHandler = (e) => {
        setTextAreaHeight(calcHeight(e.target.value, e.currentTarget.offsetWidth));
        setParagraph({ ...paragraph, content: e.target.value })
    }

    const updateParagraphHandler = async (e) => {
        e.preventDefault();
        console.log("Updating to this in the database:", paragraph)
        await API.graphql(graphqlOperation(updateParagraph, { input: { id: props.id, content: paragraph.content } }))
        setIsActive(false);
    }

    const resetParagraphContent = (e) => {
        setTextAreaHeight(calcHeight(props.content, 500));
        setParagraph({ ...paragraph, content: props.content })
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
        subParagraphsToUpdate.map(async (sub) => {
            (
                await API.graphql(graphqlOperation(updateSubParagraph, { input: { id: sub.id, orderInParagraph: sub.orderInParagraph } }))
            )
        })
        action === "delete" && await API.graphql(graphqlOperation(deleteSubParagraph, { input: { id: deleteId } }))
    }


    return (
        <div ref={ref}>
            {!isActive ? (
                <div className='paragraph' onClick={prepTextArea}>
                    <span className='numeral'>{numeral}.</span>
                    <p className='paragraphContent'>{props.content}</p>
                </div>
            ) : (
                    <div>
                        <div className={`paragraph active`} >
                            <p>{numeral}.</p>
                            <textarea value={paragraph.content} rows={textAreaHeight} onChange={onChangeHandler} />
                        </div>
                        <EditBar
                            id={props.id}
                            reOrder={props.reOrderParagraphs}
                            order={props.orderInArticle}
                            save={updateParagraphHandler}
                            reset={resetParagraphContent}
                            listLength={props.numParagraphs}
                        />
                    </div>
                )}
            <div className='subparagraphWrapper'>
                {subParagraphs.map((sub) => {
                    return (
                        <SubParagraphContainer
                            key={sub.id}
                            {...sub}
                            reOrderSubParagraphs={reOrderSubParagraphs}
                        />
                    )
                })}
                <div>
                    <AddSubParagraph paragraphId={props.id} numSubParagraphs={subParagraphs.length} />
                </div>

            </div>
        </div>
    )
}

export default ParagraphContainer;

