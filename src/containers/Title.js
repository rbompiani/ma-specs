import React, { useContext } from 'react'
import { SpecContext } from '../context/SpecContext'

const Title = () => {
    const currentSection = useContext(SpecContext).currentSection
    return (
        <h1>{currentSection.id} - {currentSection.title}</h1>
    )
}

export default Title