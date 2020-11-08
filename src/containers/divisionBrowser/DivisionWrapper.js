import React, { useContext, useState } from 'react'
import { SpecContext } from '../../context/SpecContext'
import BrowserItem from './BrowserItem'

const DivisionWrapper = (props) => {
    const divisionsOn = useContext(SpecContext).project.divisionsOn;
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleExpandedHandler = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <section className={`divisionWrapper ${isExpanded ? "expanded" : ""}`}>

            {/* browser item for division*/}
            <BrowserItem
                id={props.id}
                title={props.title}
                class="division"
                isOn={divisionsOn.includes(props.id) ? true : false}
                toggleExpanded={toggleExpandedHandler}
                isExpanded={isExpanded}
            />

            {/* map through sections in each division and create a browser item for each*/}
            <ul className={`sections ${!isExpanded && "hidden"}`} >
                {
                    props.sections.items.map((sec) => {
                        return (
                            <BrowserItem
                                key={sec.id}
                                id={sec.id}
                                title={sec.title}
                                class="section"
                                isOn={divisionsOn.includes(sec.id) ? true : false}
                            />
                        )
                    })
                }
            </ul>

        </section>
    )
}

export default DivisionWrapper;