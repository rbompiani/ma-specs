import React, { useContext } from "react"
import AddParagraphHint from './AddParagraphHint'
import { SpecContext } from '../../context/SpecContext'

const ArticleContainer = (props) => {
    const paragraphHints = props.paragraphHints.items.sort((a, b) => a.orderInArticle - b.orderInArticle)
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
            {paragraphHints.length && props.isOn ? (
                <select className="paragraphHints" name="hint" id="hint" onChange={(e) => { console.log(e.target.value) }}>
                    {paragraphHints.map(hint => <option value={hint.content} className="paragraph">{hint.content}</option>)}
                </select>
            ) : null}
            {props.isOn && <div><button>+</button><input type="text" disabled placeholder="add paragraph here"></input></div>}
            {/*<AddParagraphHint id={props.id} nextNumberInArticle={paragraphHints.length} />*/}
        </div>
    )
}

export default ArticleContainer;
