import React from 'react'

// component imports
import Header from '../containers/Header'
import Title from '../containers/Title'
import DivisionBrowser from '../containers/divisionBrowser/DivisionBrowser'
import SectionContent from '../containers/sectionContent/SectionContent'
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