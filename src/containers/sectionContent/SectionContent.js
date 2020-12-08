import React, { useContext } from "react"
import { SpecOutlineContext } from '../../context/SpecOutlineContext'
import { ProjectContext } from '../../context/ProjectContext'
import PartContainer from '../sectionContent/PartContainer'

import './SectionContent.css'

const SectionContent = (props) => {
    const parts = useContext(SpecOutlineContext).parts

    let content;

    if (props.currentSection && parts) {
        const { partsOn, ...rest } = props.currentSection
        content = parts.map((p) => {
            return (
                <PartContainer
                    key={p.id}
                    isOn={partsOn.includes(p.id)}
                    {...p}
                    currentSection={rest}
                    contentCheckHandler={props.contentCheckHandler}
                />
            )
        })
    } else content = <div></div>


    return (
        <div className="sectionContent" >
            {content}
        </div>
    )
}

export default SectionContent;
