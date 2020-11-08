import React from 'react'

// component imports
import Header from '../containers/Header'
import Title from '../containers/Title'
import DivisionBrowser from '../containers/DivisionBrowser'
import SectionContent from '../containers/SectionContent'
import Notes from '../containers/Notes'

const ProjectEditor = () => {
  return (
    <main>
      <Header />
      <Title />
      <DivisionBrowser />
      <SectionContent />
      <Notes />
    </main>
  )
}

export default ProjectEditor;