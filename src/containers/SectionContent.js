import React, { useContext } from "react"
import { SpecContext } from '../context/SpecContext'

const SectionContent = () => {
    const currentSection = useContext(SpecContext).currentSection;
    const parts = useContext(SpecContext).parts
    const paragraphs = useContext(SpecContext).paragraphs


    return (
        <div className="sectionContent" >

            {currentSection.id && parts.map((p) => {
                return (
                    <div>
                        <div>Part {p.id} - {p.title}</div>
                        {paragraphs.filter(e => e.part.id == p.id).map(par => <div>{par.title}</div>)}
                    </div>
                )
            })}
        </div>
    )
}

export default SectionContent;
