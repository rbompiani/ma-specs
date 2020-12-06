import React, { useState, useContext } from "react"
import { SpecContext } from '../../context/SpecContext'
// AWS imports
import { API, graphqlOperation } from 'aws-amplify'
// graphql imports
import { createParagraph } from '../../graphql/mutations'

const ArticleContent = (props) => {
    // context
    const currentSectionId = useContext(SpecContext).currentSection.id
    const currentProjectId = useContext(SpecContext).project.id
    const paragraphsInArticle = useContext(SpecContext).paragraphContent.filter(par => par.article == props.articleId).sort((a, b) => a.orderInArticle - b.orderInArticle)

    // props
    const paragraphHints = props.paragraphHints.sort((a, b) => a.orderInArticle - b.orderInArticle)

    // state
    const [isActive, setIsActive] = useState(false);
    const [newParagraph, setNewParagraph] = useState({
        paragraphProjectId: currentProjectId,
        section: currentSectionId,
        article: props.articleId,
        orderInArticle: paragraphsInArticle.length,
        listTier: 0,
        content: "",
        isOn: true,
    })

    //TODO - Determine how many paragraphs exist in the current article, auto increment new paragraph to be next

    // handlers
    const addParagraphHandler = () => {
        setIsActive(true);
    }

    const paragraphChangeHandler = (e) => {
        setNewParagraph({
            ...newParagraph,
            content: e.target.value
        });
    }

    const submitParagraphHandler = async (e) => {
        e.preventDefault();
        console.log("Adding this to the database:", newParagraph)
        await API.graphql(graphqlOperation(createParagraph, { input: newParagraph }))
        setIsActive(false);
    }

    return (
        <div>
            {paragraphsInArticle.map(par => <p>{par.content}</p>)}
            {isActive ? (
                <div>
                    <input
                        type="text"
                        placeholder="Add paragraph content, or select paragraph starter ->"
                        value={newParagraph.content}
                        onChange={paragraphChangeHandler}
                    >
                    </input>
                    <button>...</button>
                    <button onClick={submitParagraphHandler}>Save</button>
                </div>
            ) : (
                    <AddParagraphPrompt addParagraphHandler={addParagraphHandler} />
                )}

            <select className="paragraphHints" name="hint" id="hint" onChange={(e) => { console.log(e.target.value) }}>
                {paragraphHints.map(hint => <option value={hint.content} className="paragraph">{hint.content}</option>)}
            </select>
        </div>
    )
}

export default ArticleContent;

const AddParagraphPrompt = (props) => {
    return (
        <div>
            <button onClick={props.addParagraphHandler}>+</button>
            <p>Add new paragraph</p>
        </div>
    )
}
