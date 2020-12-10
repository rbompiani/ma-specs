import React, { useState, useEffect, useRef } from 'react'

// context imports
import { ProjectContext } from '../context/ProjectContext'

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
import { onCreateParagraph } from '../graphql/subscriptions'

const SpecEditor = () => {
  // pass section content down as props to section content component and children
  const [currentSectionContent, setCurrentSectionContent] = useState();

  const currentSectionRef = useRef();
  currentSectionRef.current = currentSectionContent;

  // fetch current section content and set paragraph and subparagraph subscriptions
  const fetchSectionContent = async (id) => {
    const results = await API.graphql(graphqlOperation(getSectionContent, { id: id }));
    setCurrentSectionContent(results.data.getSectionContent)

    API.graphql(graphqlOperation(onCreateParagraph)).subscribe({
      next: createParagraphData => {
        const newParagraphContent = createParagraphData.value.data.onCreateParagraph
        let tempContent = { ...currentSectionRef.current }
        tempContent.paragraphs.items.push(newParagraphContent)
        if (newParagraphContent.section.id === currentSectionRef.current.id) {
          setCurrentSectionContent(tempContent)
        }
      }
    })
  }

  const contentCheckHandler = async (id, isOn, baseType) => {
    const propName = baseType + "sOn";
    let newArray;
    if (isOn) {
      newArray = currentSectionContent[propName].filter(item => item !== id)
    } else {
      newArray = [...currentSectionContent[propName], id]
    }
    await API.graphql(graphqlOperation(updateSectionContent, { input: { id: currentSectionContent.id, [propName]: newArray } }))
    setCurrentSectionContent({ ...currentSectionContent, [propName]: newArray });
  }

  return (
    <main>
      <Header />
      {currentSectionContent && (
        <Title
          id={currentSectionContent.section.id}
          title={currentSectionContent.section.title} />
      )}
      <DivisionBrowser
        fetchSectionContent={fetchSectionContent}
        updateSectionContent={setCurrentSectionContent}
      />
      <SectionContent
        currentSection={currentSectionContent}
        contentCheckHandler={contentCheckHandler}
      />
      <Notes />
    </main>
  )
}

export default SpecEditor;