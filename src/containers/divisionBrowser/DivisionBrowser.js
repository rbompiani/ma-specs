import React, { useContext } from "react"
import { SpecOutlineContext } from '../../context/SpecOutlineContext'

import DivisionWrapper from './DivisionWrapper'

import './DivisionBrowser.css'

const DivisionBrowser = (props) => {
    const specOutlineContext = useContext(SpecOutlineContext);

    return (
        <article className="divBrowser">
            <ul className="divisions">
                {specOutlineContext.divisions.map((division) => {
                    return (
                        <DivisionWrapper
                            key={division.id}
                            {...division}
                            fetchSectionContent={props.fetchSectionContent}
                            updateSectionContent={props.updateSectionContent}
                        />
                    )
                })}
            </ul>
        </article>
    )
}

export default DivisionBrowser;