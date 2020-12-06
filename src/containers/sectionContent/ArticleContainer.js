import React, { useContext } from "react"
import ArticleContent from './ArticleContent'
import { SpecContext } from '../../context/SpecContext'

const ArticleContainer = (props) => {
    const checkHandler = useContext(SpecContext).contentCheckHandler;

    return (
        <div>
            <input
                type="checkbox"
                id={props.id}
                value={props.id}
                className={`checkbox-${props.baseType} `}
                onChange={(e) => checkHandler(props.id, props.isOn, "article")}
                checked={props.isOn}
            />
            <div className="article">{props.title}</div>
            { props.isOn && <ArticleContent paragraphHints={props.paragraphHints.items} articleId={props.id} />}
        </div>
    )
}

export default ArticleContainer;
