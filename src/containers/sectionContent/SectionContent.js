import React, { useContext } from "react"
import { SpecOutlineContext } from '../../context/SpecOutlineContext'
import { ProjectContext } from '../../context/ProjectContext'
import PartContainer from '../sectionContent/PartContainer'

import './SectionContent.css'

const SectionContent = () => {
    const currentSection = useContext(ProjectContext).currentSection;
    const partsOn = useContext(ProjectContext).currentSection.partsOn
    const parts = useContext(SpecOutlineContext).parts


    return (
        <div className="sectionContent" >

            {currentSection.id && parts.map((p) => <PartContainer key={p.id} isOn={partsOn.includes(p.id)} {...p} />)}

        </div>
    )
}

export default SectionContent;
