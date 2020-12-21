import React, { createContext, useState, useEffect, useRef } from 'react';

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { getSectionContent } from '../graphql/queries'
import { updateSectionContent } from '../graphql/mutations'
import { onCreateParagraph, onUpdateParagraph, onDeleteParagraph, onCreateSubParagraph, onUpdateSubParagraph, onDeleteSubParagraph, onUpdateSectionContent } from '../graphql/subscriptions'

export const SectionContext = createContext();

const SectionContextProvider = (props) => {

    //-------- STATE --------//
    const [activeSection, setActiveSection] = useState();

    const activeSectionRef = useRef();
    activeSectionRef.current = activeSection;

    //-------- FETCHING DATA --------//

    // fetch current section content and set paragraph and subparagraph subscriptions
    const fetchSectionContent = async (id) => {
        const results = await API.graphql(graphqlOperation(getSectionContent, { id: id }));
        setActiveSection(results.data.getSectionContent)

        API.graphql(graphqlOperation(onCreateParagraph)).subscribe({
            next: createParagraphData => {

                const newParagraphContent = createParagraphData.value.data.onCreateParagraph

                if (newParagraphContent.section.id === activeSectionRef.current.id) {
                    let tempContent = { ...activeSectionRef.current }
                    tempContent.paragraphs.items.push(newParagraphContent)
                    setActiveSection(tempContent)
                }
            }
        })

        API.graphql(graphqlOperation(onUpdateParagraph)).subscribe({
            next: updateParagraphData => {
                const updatedParagraph = updateParagraphData.value.data.onUpdateParagraph
                if (updatedParagraph.section.id === activeSectionRef.current.id) {
                    let tempContent = { ...activeSectionRef.current }
                    const parIndex = tempContent.paragraphs.items.findIndex(p => p.id === updatedParagraph.id)
                    tempContent.paragraphs.items[parIndex] = updatedParagraph
                    setActiveSection(tempContent)
                }
            }
        })

        API.graphql(graphqlOperation(onDeleteParagraph)).subscribe({
            next: deletedParagraphData => {
                const deletedParagraph = deletedParagraphData.value.data.onDeleteParagraph
                if (deletedParagraph.section.id === activeSectionRef.current.id) {
                    let tempParagraphs = activeSectionRef.current.paragraphs.items.filter(p => p.id !== deletedParagraph.id)
                    setActiveSection({ ...activeSectionRef.current, paragraphs: { items: tempParagraphs } })
                }
            }
        })

        API.graphql(graphqlOperation(onCreateSubParagraph)).subscribe({
            next: createSubParagraphData => {

                const newSubParagraphContent = createSubParagraphData.value.data.onCreateSubParagraph
                const paragraphIndex = activeSectionRef.current.paragraphs.items.findIndex(par => par.id === newSubParagraphContent.paragraph.id)
                if (paragraphIndex > -1) {
                    let tempContent = { ...activeSectionRef.current }
                    tempContent.paragraphs.items[paragraphIndex].subparagraphs.items.push(newSubParagraphContent)
                    setActiveSection(tempContent)
                }
            }
        })

        API.graphql(graphqlOperation(onUpdateSubParagraph)).subscribe({
            next: updateSubParagraphData => {
                const updatedSubParagraph = updateSubParagraphData.value.data.onUpdateSubParagraph
                if (activeSectionRef.current.paragraphs.items.find(par => par.id === updatedSubParagraph.paragraph.id)) {
                    let tempContent = { ...activeSectionRef.current }
                    const parIndex = tempContent.paragraphs.items.findIndex(p => p.id === updatedSubParagraph.paragraph.id)
                    const subIndex = tempContent.paragraphs.items[parIndex].subparagraphs.items.findIndex(sub => sub.id === updatedSubParagraph.id)
                    tempContent.paragraphs.items[parIndex].subparagraphs.items[subIndex] = updatedSubParagraph
                    setActiveSection(tempContent)
                }
            }
        })

        API.graphql(graphqlOperation(onDeleteSubParagraph)).subscribe({
            next: deletedSubParagraphData => {
                const deletedSubParagraph = deletedSubParagraphData.value.data.onDeleteSubParagraph
                const paragraphIndex = activeSectionRef.current.paragraphs.items.findIndex(par => par.id === deletedSubParagraph.paragraph.id)
                if (paragraphIndex > -1) {
                    let tempParagraphs = { ...activeSectionRef.current.paragraphs }
                    tempParagraphs.items[paragraphIndex].subparagraphs.items = tempParagraphs.items[paragraphIndex].subparagraphs.items.filter(sub => sub.id !== deletedSubParagraph.id)
                    setActiveSection({ ...activeSectionRef.current, paragraphs: tempParagraphs })
                }
            }
        })

        API.graphql(graphqlOperation(onUpdateSectionContent)).subscribe({
            next: updatedSection => {
                const newSection = updatedSection.value.data.onUpdateSectionContent
                if (newSection.id === activeSectionRef.current.id) {
                    setActiveSection({ ...activeSectionRef.current, notes: newSection.notes })
                }
            }
        })
    }

    //-------- HANDLERS --------//
    const contentCheckHandler = async (id, isOn, baseType) => {
        const propName = baseType + "sOn";
        console.log(propName)
        let newArray;
        if (isOn) {
            newArray = activeSectionRef.current[propName].filter(item => item !== id)
        } else {
            newArray = [...activeSectionRef.current[propName], id]
        }
        await API.graphql(graphqlOperation(updateSectionContent, { input: { id: activeSectionRef.current.id, [propName]: newArray } }))
        setActiveSection({ ...activeSectionRef.current, [propName]: newArray });
    }

    //---------- HOOKS -------------//
    const useOutsideClick = (ref, callback) => {
        const handleClick = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        };

        useEffect(() => {
            document.addEventListener("click", handleClick);

            return () => {
                document.removeEventListener("click", handleClick);
            };
        });
    };

    return (
        <SectionContext.Provider value={{ activeSection, setActiveSection, fetchSectionContent, contentCheckHandler, useOutsideClick }}>
            {props.children}
        </SectionContext.Provider>
    );
};

export default SectionContextProvider;
