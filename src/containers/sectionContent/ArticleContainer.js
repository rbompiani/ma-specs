import React, { useContext } from "react"
import { SectionContext } from '../../context/SectionContext'
import ParagraphContainer from './ParagraphContainer'
import AddParagraph from './AddParagraph'

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'
// graphql imports
import { updateParagraph, deleteParagraph } from '../../graphql/mutations'


const ArticleContainer = (props) => {

    let paragraphs = useContext(SectionContext).activeSection.paragraphs
    paragraphs = paragraphs.items
        .filter(p => p.article === props.id)
        .sort((a, b) => a.orderInArticle - b.orderInArticle)

    const contentCheckHandler = useContext(SectionContext).contentCheckHandler

    const reOrderParagraphs = async (indexToUpdate, action, deleteId) => {
        let paragraphsToUpdate = []
        let itemUp
        let itemDown
        switch (action) {
            case "delete":
                for (let i = indexToUpdate + 1; i < paragraphs.length; i++) {
                    itemUp = paragraphs[i]
                    itemUp.orderInArticle--
                    paragraphsToUpdate.push(itemUp)
                }
                break
            case "moveUp":
                itemUp = paragraphs[indexToUpdate]
                itemDown = paragraphs[indexToUpdate - 1]
                itemUp.orderInArticle--
                itemDown.orderInArticle++
                paragraphsToUpdate.push(itemUp)
                paragraphsToUpdate.push(itemDown)
                break
            case "moveDown":
                itemDown = paragraphs[indexToUpdate]
                itemUp = paragraphs[indexToUpdate + 1]
                itemUp.orderInArticle--
                itemDown.orderInArticle++
                paragraphsToUpdate.push(itemUp)
                paragraphsToUpdate.push(itemDown)
                break
        }
        console.log(paragraphsToUpdate);
        paragraphsToUpdate.map(async (par) => {
            (
                await API.graphql(graphqlOperation(updateParagraph, { input: { id: par.id, orderInArticle: par.orderInArticle } }))
            )
        })
        action === "delete" && await API.graphql(graphqlOperation(deleteParagraph, { input: { id: deleteId } }))
    }

    return (
        <div className={`articleWrapper ${!props.isOn && "inactive"}`} >
            <div className="article">
                <input
                    type="checkbox"
                    id={props.id}
                    value={props.id}
                    className={`checkbox-${props.baseType} `}
                    onChange={(e) => contentCheckHandler(props.id, props.isOn, props.baseType)}
                    checked={props.isOn}
                />
                <div className={`${props.baseType}Title`}>{props.title}</div>
            </div>
            { props.isOn && (
                <div className='paragraphWrapper'>
                    {paragraphs.map((par) => {
                        return (
                            <ParagraphContainer
                                key={par.id}
                                {...par}
                                reOrderParagraphs={reOrderParagraphs}
                                numParagraphs={paragraphs.length}
                            />
                        )
                    })}
                    <AddParagraph
                        paragraphHints={props.paragraphHints.items}
                        articleId={props.id}
                        numParagraphs={paragraphs.length}
                    />
                </div>
            )}
        </div >
    )
}

export default ArticleContainer;
