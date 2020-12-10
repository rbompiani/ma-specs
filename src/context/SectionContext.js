import React, { createContext, useState, useEffect, useRef } from 'react';

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { getSectionContent } from '../graphql/queries'
import { updateSectionContent } from '../graphql/mutations'
import { onCreateSectionContent, onUpdateSectionContent, onCreateParagraph } from '../graphql/subscriptions'

export const SectionContext = createContext();

const SectionContextProvider = (props) => {

    //-------- STATE --------//
    const [activeSection, setActiveSection] = useState();

    const activeSectionRef = useRef();
    activeSection.current = activeSection;

    //-------- FETCHING DATA --------//

    // fetch outline data
    useEffect(() => {
        fetchSectionContent();

        // Listeners - onCreateSectionContent / onUpdateSectionContent
        // API.graphql(graphqlOperation(onCreateSectionContent)).subscribe({
        //     next: sectionContentData => {
        //         const newSectionContent = sectionContentData.value.data.onCreateSectionContent
        //         let tempContent = projectRef.current.content;
        //         tempContent.items.push(newSectionContent)
        //         setProject({ ...projectRef.current, content: tempContent })
        //     }
        // })

        // API.graphql(graphqlOperation(onUpdateSectionContent)).subscribe({
        //     next: sectionContentData => {
        //         const updatedSectionContent = sectionContentData.value.data.onUpdateSectionContent
        //         let tempContent = projectRef.current.content;
        //         const updatedSectionIndex = tempContent.items.findIndex(item => item.id === updatedSectionContent.id)
        //         tempContent.items.splice(updatedSectionIndex, 1, updatedSectionContent)
        //         setProject({ ...projectRef.current, content: tempContent })
        //     }
        // })

        // API.graphql(graphqlOperation(onCreateParagraph)).subscribe({
        //     next: createParagraphData => {
        //         const newParagraphContent = createParagraphData.value.data.onCreateParagraph
        //         let tempContent = projectRef.current.content;
        //         let contentIndex = tempContent.items.findIndex(cont => cont.id === newParagraphContent.section.id)
        //         tempContent.items[contentIndex].paragraphs.items.push(newParagraphContent)
        //         setProject({ ...projectRef.current, content: tempContent })
        //     }
        // })


    },
        []
    )

    // fetch current section content and set paragraph and subparagraph subscriptions
    const fetchSectionContent = async (id) => {
        const results = await API.graphql(graphqlOperation(getSectionContent, { id: id }));
        setActiveSection(results.data.getSectionContent)

        //TODO - Add listener for onDeleteParagraph / onUpdateParagraph
        API.graphql(graphqlOperation(onCreateParagraph)).subscribe({
            next: createParagraphData => {
                const newParagraphContent = createParagraphData.value.data.onCreateParagraph
                let tempContent = { ...activeSectionRef.current }
                tempContent.paragraphs.items.push(newParagraphContent)
                if (newParagraphContent.section.id === activeSectionRef.current.id) {
                    setActiveSection(tempContent)
                }
            }
        })
    }

    //-------- HANDLERS --------//
    const contentCheckHandler = async (id, isOn, baseType) => {
        const propName = baseType + "sOn";
        let newArray;
        if (isOn) {
            newArray = activeSection[propName].filter(item => item !== id)
        } else {
            newArray = [...activeSection[propName], id]
        }
        await API.graphql(graphqlOperation(updateSectionContent, { input: { id: activeSection.id, [propName]: newArray } }))
        setActiveSection({ ...activeSection, [propName]: newArray });
    }


    return (
        <SectionContext.Provider value={{ activeSection, contentCheckHandler }}>
            {props.children}
        </SectionContext.Provider>
    );
};

export default SectionContextProvider;
