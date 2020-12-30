import React, { useContext, useState } from "react"
import { SpecOutlineContext } from '../../context/SpecOutlineContext'
import { SectionContext } from '../../context/SectionContext'
import PartContainer from '../sectionContent/PartContainer'

import './SectionContent.css'

const SectionContent = () => {
    const parts = useContext(SpecOutlineContext).parts
    const currentSection = useContext(SectionContext).activeSection

    let content;

    if (currentSection && parts) {
        const { partsOn } = currentSection
        content = parts.map((p) => {
            return (
                <PartContainer
                    key={p.id}
                    isOn={partsOn.includes(p.id)}
                    {...p}
                />
            )
        })
    } else content = <div></div>


    return (
        <section className="sectionContent" >
            {content}
        </section>
    )
}

export default SectionContent;
