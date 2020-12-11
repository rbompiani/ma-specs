import React from "react"
import ParagraphContainer from './ParagraphContainer'
import AddParagraph from './AddParagraph'

const ArticleContainer = (props) => {
    const paragraphs = props.paragraphs.sort((a, b) => a.orderInArticle - b.orderInArticle)

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
                            <ParagraphContainer {...par} />
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
