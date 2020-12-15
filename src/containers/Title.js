import React, { useContext } from 'react'
import { SectionContext } from '../context/SectionContext'

const Title = (props) => {
    const activeSection = useContext(SectionContext).activeSection

    return (
        <h1>
            {activeSection ? `${activeSection.section.id} - ${activeSection.section.title}` : ''}
        </h1>
    )
}

export default Title