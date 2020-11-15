import React, { useContext } from "react"
import { SpecContext } from '../../context/SpecContext'

import DivisionWrapper from './DivisionWrapper'

import './DivisionBrowser.css'

const DivisionBrowser = (props) => {
    const specContext = useContext(SpecContext);

    return (
        <article className="divBrowser">
            <ul className="divisions">
                {specContext.divisions.map((division) => {
                    return (
                        <DivisionWrapper {...division} key={division.id} />
                    )
                })}
            </ul>
        </article>
    )
}

export default DivisionBrowser;