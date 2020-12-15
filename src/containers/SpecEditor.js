import React, { useContext, useState, useEffect, useRef } from 'react'

// context imports
import { ProjectContext } from '../context/ProjectContext'
import { SectionContext } from '../context/SectionContext'

// component imports
import Header from '../containers/Header'
import Title from '../containers/Title'
import DivisionBrowser from '../containers/divisionBrowser/DivisionBrowser'
import SectionContent from '../containers/sectionContent/SectionContent'
import Notes from '../containers/Notes'

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { getSectionContent } from '../graphql/queries'
import { updateSectionContent } from '../graphql/mutations'
import { onCreateParagraph, onUpdateParagraph, onDeleteParagraph } from '../graphql/subscriptions'

const SpecEditor = () => {

  // // pass section content down as props to section content component and children
  // const [currentSectionContent, setCurrentSectionContent] = useState();

  // const currentSectionRef = useRef();
  // currentSectionRef.current = currentSectionContent;

  // // fetch current section content and set paragraph and subparagraph subscriptions
  // const fetchSectionContent = async (id) => {
  //   const results = await API.graphql(graphqlOperation(getSectionContent, { id: id }));
  //   setCurrentSectionContent(results.data.getSectionContent)

  //   API.graphql(graphqlOperation(onCreateParagraph)).subscribe({
  //     next: createParagraphData => {

  //       const newParagraphContent = createParagraphData.value.data.onCreateParagraph

  //       if (newParagraphContent.section.id === currentSectionRef.current.id) {
  //         let tempContent = { ...currentSectionRef.current }
  //         tempContent.paragraphs.items.push(newParagraphContent)
  //         setCurrentSectionContent(tempContent)
  //       }
  //     }
  //   })

  //   API.graphql(graphqlOperation(onUpdateParagraph)).subscribe({
  //     next: updateParagraphData => {
  //       const updatedParagraph = updateParagraphData.value.data.onUpdateParagraph
  //       if (updatedParagraph.section.id === currentSectionRef.current.id) {
  //         let tempContent = { ...currentSectionRef.current }
  //         const parIndex = tempContent.paragraphs.items.findIndex(p => p.id === updatedParagraph.id)
  //         tempContent.paragraphs.items[parIndex] = updatedParagraph
  //         setCurrentSectionContent(tempContent)
  //       }
  //     }
  //   })

  //   API.graphql(graphqlOperation(onDeleteParagraph)).subscribe({
  //     next: deletedParagraphData => {
  //       const deletedParagraph = deletedParagraphData.value.data.onDeleteParagraph
  //       if (deletedParagraph.section.id === currentSectionRef.current.id) {
  //         let tempParagraphs = currentSectionRef.current.paragraphs.items.filter(p => p.id !== deletedParagraph.id)
  //         setCurrentSectionContent({ ...currentSectionRef.current, paragraphs: { items: tempParagraphs } })
  //       }
  //     }
  //   })

  // }

  // const contentCheckHandler = async (id, isOn, baseType) => {
  //   const propName = baseType + "sOn";
  //   let newArray;
  //   if (isOn) {
  //     newArray = currentSectionContent[propName].filter(item => item !== id)
  //   } else {
  //     newArray = [...currentSectionContent[propName], id]
  //   }
  //   await API.graphql(graphqlOperation(updateSectionContent, { input: { id: currentSectionContent.id, [propName]: newArray } }))
  //   setCurrentSectionContent({ ...currentSectionContent, [propName]: newArray });
  // }

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

export default SpecEditor;