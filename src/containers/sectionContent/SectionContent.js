import React, { useContext } from "react"
import { SpecContext } from '../../context/SpecContext'
import PartContainer from '../sectionContent/PartContainer'

import './SectionContent.css'

const SectionContent = () => {
    const currentSection = useContext(SpecContext).currentSection;
    const parts = useContext(SpecContext).parts

    return (
        <div className="sectionContent" >

            {currentSection.id && parts.map((p) => <PartContainer key={p.id} {...p} />)}

        </div>
    )
}

export default SectionContent;
