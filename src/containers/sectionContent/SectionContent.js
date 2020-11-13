import React, { useContext } from "react"
import { SpecContext } from '../../context/SpecContext'
import AddArticle from '../sectionContent/AddArticle'

const SectionContent = () => {
    const currentSection = useContext(SpecContext).currentSection;
    const parts = useContext(SpecContext).parts
    const articles = useContext(SpecContext).articles


    return (
        <div className="sectionContent" >

            {currentSection.id && parts.map((p) => {
                const articlesInPart = articles.filter(e => e.part.id === p.id) || []
                return (
                    <div>
                        <div>Part {p.id} - {p.title}</div>
                        {articlesInPart.map(par => <div key={par.id}>{par.title}</div>)}
                        <AddArticle id={p.id} nextNumberInPart={articlesInPart.length + 1} />
                    </div>
                )
            })}
        </div>
    )
}

export default SectionContent;
