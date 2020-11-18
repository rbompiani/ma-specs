import React, { useContext } from 'react'
import { SpecContext } from '../context/SpecContext'

const Title = () => {
    const currentSection = useContext(SpecContext).currentSection.section

    return (
        <h1>
            {currentSection && `${currentSection.id} - ${currentSection.title}`}
        </h1>
    )
}

export default Title