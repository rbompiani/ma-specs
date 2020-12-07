import React, { useContext } from "react"
import ArticleContainer from './ArticleContainer'
import AddArticle from './AddArticle'
import { ProjectContext } from '../../context/ProjectContext'

import './SectionContent.css'

const PartContainer = (props) => {
    const articles = props.articles.items.sort((a, b) => a.orderInPart - b.orderInPart);
    const checkHandler = useContext(ProjectContext).contentCheckHandler;
    const articlesOn = useContext(ProjectContext).currentSection.articlesOn;

    return (
        <div>
            <input
                type="checkbox"
                id={props.id}
                value={props.id}
                className={`checkbox-${props.baseType} `}
                onChange={(e) => checkHandler(props.id, props.isOn, "part")}
                checked={props.isOn}
            />
            <div className="part">Part {props.id} - {props.title}</div>
            {articles.map(art => <ArticleContainer key={art.id} isOn={articlesOn.includes(art.id)} {...art} />)}
            {/*<AddArticle id={props.id} nextNumberInPart={props.articles.items.length + 1} />*/}
        </div>
    )
}

export default PartContainer;
