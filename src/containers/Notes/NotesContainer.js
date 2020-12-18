import React, { useContext } from 'react'

import { SectionContext } from '../../context/SectionContext'

import Notes from './Notes'

const NotesContainer = () => {
    // context
    const currentSection = useContext(SectionContext).activeSection

    if (currentSection) {
        return (
            <aside>
                <Notes />
            </aside>
        )

    } else {
        return (
            <aside></aside>
        )
    }
}

export default NotesContainer;