import React, { createContext, useState, useEffect, useRef } from 'react';

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { getSectionContent } from '../graphql/queries'
import { updateSectionContent } from '../graphql/mutations'
import { onCreateParagraph, onUpdateParagraph, onDeleteParagraph, onUpdateSectionContent } from '../graphql/subscriptions'

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
