import React, { useContext } from "react"

import { SectionContext } from '../../context/SectionContext'

import ArticleContainer from './ArticleContainer'
import AddArticle from './AddArticle'

import './SectionContent.css'

const PartContainer = (props) => {
    const articlesOn = useContext(SectionContext).activeSection.articlesOn

    const articles = props.articles.items.sort((a, b) => a.orderInPart - b.orderInPart)


    return (
        <div className={
            `partWrapper 
            ${!props.isOn && "inactive"}`
        }>
            <div className={`part 
            ${!props.isOn && "inactive"}`}>
                <input
                    type="checkbox"
                    id={props.id}
                    value={props.id}
                    className={`checkbox-${props.baseType} `}
                    onChange={(e) => props.contentCheckHandler(props.id, props.isOn, "part")}
                    checked={props.isOn}
                />
                <div className="partTitle">Part {props.id} - {props.title}</div>
            </div>
            {articles.map(art => {
                return (
                    <ArticleContainer
                        key={art.id}
                        isOn={articlesOn.includes(art.id)}
                        {...art}
                    />
                )
            })}
            {/*<AddArticle id={props.id} nextNumberInPart={props.articles.items.length + 1} />*/}
        </div>
    )
}

export default PartContainer;
