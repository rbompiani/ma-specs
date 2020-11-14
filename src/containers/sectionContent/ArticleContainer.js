import React from "react"
import AddParagraphHint from './AddParagraphHint'

const ArticleContainer = (props) => {
    const paragraphHints = props.paragraphHints.items.sort((a, b) => a.orderInArticle - b.orderInArticle)
    return (
        <div className="article">
            <div key={props.id} >{props.title}</div>
            {paragraphHints.map(hint => <div className="paragraph">{hint.content}</div>)}
            <AddParagraphHint id={props.id} nextNumberInArticle={paragraphHints.length} />
        </div>
    )
}

export default ArticleContainer;
