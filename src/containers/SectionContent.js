import React, { useContext } from "react"
import { SpecContext } from '../context/SpecContext'

const SectionContent = () => {
    const currentSection = useContext(SpecContext).currentSection;
    const parts = useContext(SpecContext).parts
    const paragraphs = useContext(SpecContext).paragraphs


    return (
        <div className="sectionContent" >

            {parts.map((p) => {
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

/* <ul>
        {allDivisions.map((divis) => {
          return (
            <div>
              <li>Division {divis.id} - {divis.title}</li>
              <ul>
                {divis.sections.items.map((sec) => <li>{sec.id} - {sec.title}</li>)}
                {parts.map((p) => {
                  return (
                    <div>
                      <div>Part {p.id} - {p.title}</div>
                      {paragraphs.filter(e => e.part == p.id).map(par => <div>{par.title}</div>)}
                    </div>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </ul> */