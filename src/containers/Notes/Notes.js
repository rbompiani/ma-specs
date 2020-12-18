import React, { useContext, useState, useEffect, useRef } from 'react'

import { SectionContext } from '../../context/SectionContext'

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'
// graphql imports
import { updateSectionContent } from '../../graphql/mutations'

const Notes = () => {
    // state
    const [notes, setNotes] = useState('')

    // context
    const currentSection = useContext(SectionContext).activeSection

    let sectionId = currentSection.id

    useEffect(() => {
        const storedNotes = currentSection.notes || ''
        setNotes(storedNotes)
    }, [currentSection.notes])

    if (currentSection) {
        const updateNotesHandler = (e) => {
            setNotes(e.target.value)
        }

        const addNotesHandler = async () => {
            await API.graphql(graphqlOperation(updateSectionContent, { input: { id: sectionId, notes: notes } }))
        }

        return (
            <aside>
                <input placeholder="Add notes here" value={notes} onChange={updateNotesHandler}></input>
                <button onClick={addNotesHandler}>save</button>
            </aside>
        )

    } else {
        return (
            <aside></aside>
        )
    }
}

export default Notes;