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
                        <DivisionWrapper {...division} key={division.id} />
                    )
                })}
            </ul>
        </article>
    )
}

export default DivisionBrowser;