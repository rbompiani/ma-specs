import React from "react"
import ParagraphContainer from './ParagraphContainer'
import AddParagraph from './AddParagraph'

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'
// graphql imports
import { updateParagraph, deleteParagraph } from '../../graphql/mutations'


const ArticleContainer = (props) => {
    const paragraphs = props.paragraphs.sort((a, b) => a.orderInArticle - b.orderInArticle)

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
        <div>
            <input
                type="checkbox"
                id={props.id}
                value={props.id}
                className={`checkbox-${props.baseType} `}
                onChange={(e) => props.contentCheckHandler(props.id, props.isOn, props.baseType)}
                checked={props.isOn}
            />
            <div className={props.baseType}>{props.title}</div>
            { props.isOn && (
                <div>
                    {paragraphs.map((par, index) => {
                        return (
                            <ParagraphContainer key={par.id} {...par} reOrderParagraphs={reOrderParagraphs} />
                        )
                    })}
                    <AddParagraph
                        paragraphHints={props.paragraphHints.items}
                        sectionId={props.sectionId}
                        articleId={props.id}
                        contentCheckHandler={props.contentCheckHandler}
                        numParagraphs={paragraphs.length}
                    />
                </div>
            )}
        </div>
    )
}

export default ArticleContainer;
