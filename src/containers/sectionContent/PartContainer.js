import React from "react"
import ArticleContainer from './ArticleContainer'
import AddArticle from './AddArticle'

import './SectionContent.css'

const PartContainer = (props) => {
    const articles = props.articles.items.sort((a, b) => a.orderInPart - b.orderInPart);
    return (
        <div key={props.id}>
            <div className="part">Part {props.id} - {props.title}</div>
            {articles.map(art => <ArticleContainer key={art.id} {...art} />)}
            <AddArticle id={props.id} nextNumberInPart={props.articles.items.length + 1} />
        </div>
    )
}

export default PartContainer;
