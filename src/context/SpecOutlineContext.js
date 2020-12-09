import React, { createContext, useState, useEffect, useRef } from 'react';

// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { divisionsByNumber, partsByNumber, } from '../graphql/queries'
import { onCreateSection } from '../graphql/subscriptions'

export const SpecOutlineContext = createContext();

const SpecOutlineContextProvider = (props) => {

    //-------- STATE --------//
    // outline state
    const [divisions, setDivisions] = useState([]);
    const [parts, setParts] = useState([]);

    const divisionsRef = useRef();
    divisionsRef.current = divisions;


    //-------- FETCHING DATA --------//

    // fetch outline data
    useEffect(() => {
        fetchOutline();

        // Listeners - onCreateSectionContent / onUpdateSectionContent
        API.graphql(graphqlOperation(onCreateSection)).subscribe({
            next: sectionData => {
                const newSection = sectionData.value.data.onCreateSection
                let tempDivisions = [...divisionsRef.current]
                const divIndex = tempDivisions.findIndex(({ id }) => id === newSection.division.id)
                delete newSection.division
                tempDivisions[divIndex].sections.items.push(newSection)
                setDivisions(tempDivisions)
            }
        })
    },
        []
    )

    const fetchOutline = async () => {
        const divisionResults = await API.graphql(graphqlOperation(divisionsByNumber, { baseType: "division" }));
        const partResults = await API.graphql(graphqlOperation(partsByNumber, { baseType: "part" }));
        let tempDivisions = divisionResults.data.divisionsByNumber.items;
        tempDivisions.map(div => {
            return (
                div.sections.items.sort((a, b) => a.id - b.id)
            )
        });
        let tempParts = partResults.data.partsByNumber.items;
        tempParts.map(part => {
            return (
                part.articles.items.sort((a, b) => a.orderInPart - b.orderInPart).map(art => {
                    return (
                        art.paragraphHints.items.sort((a, b) => a.orderIArticle - b.orderInArticle)
                    )
                }
                )
            )
        });
        setDivisions(tempDivisions);
        setParts(tempParts);
    }

    return (
        <SpecOutlineContext.Provider value={{ divisions, parts }}>
            {props.children}
        </SpecOutlineContext.Provider>
    );
};

export default SpecOutlineContextProvider;
