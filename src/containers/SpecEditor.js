import React, { useContext, useState, useEffect, useRef } from 'react'

// context imports
import { ProjectContext } from '../context/ProjectContext'
import { SectionContext } from '../context/SectionContext'

// component imports
import Header from '../containers/Header'
import Title from '../containers/Title'
import DivisionBrowser from '../containers/divisionBrowser/DivisionBrowser'
import SectionContent from '../containers/sectionContent/SectionContent'
import NotesContainer from '../containers/Notes/NotesContainer'

const SpecEditor = () => {

  return (
    <main>
      <Header />
      <Title />
      <DivisionBrowser />
      <SectionContent />
      <NotesContainer />
    </main>
  )
}

export default SpecEditor;