import React, { useContext } from "react"
import AddParagraphHint from './AddParagraphHint'
import { SpecContext } from '../../context/SpecContext'

const ArticleContainer = (props) => {
    const paragraphHints = props.paragraphHints.items.sort((a, b) => a.orderInArticle - b.orderInArticle)
    const checkHandler = useContext(SpecContext).contentCheckHandler;

    return (
        <div className="article">
            <input
                type="checkbox"
                id={props.id}
                value={props.id}
                className={`checkbox-${props.baseType} `}
                onChange={(e) => checkHandler(props.id, props.isOn, "article")}
                checked={props.isOn}
            />
            <div>{props.title}</div>
            {paragraphHints.map(hint => <div className="paragraph">{hint.content}</div>)}
            <AddParagraphHint id={props.id} nextNumberInArticle={paragraphHints.length} />
        </div>
    )
}

export default ArticleContainer;
