import React, { useContext } from 'react'
import { ProjectContext } from '../context/ProjectContext'

const Title = () => {
    const currentSection = useContext(ProjectContext).currentSection.section

    return (
        <h1>
            {currentSection && `${currentSection.id} - ${currentSection.title}`}
        </h1>
    )
}

export default Title