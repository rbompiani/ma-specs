import React, { useContext } from "react"
import { SpecContext } from '../../context/SpecContext'

import DivisionWrapper from './DivisionWrapper'

import './DivisionBrowser.css'

const DivisionBrowser = (props) => {
    const divisions = useContext(SpecContext).allDivisions;

    return (
        <article className="divBrowser">
            <ul className="divisions">
                {divisions.map((division) => {
                    return (
                        <DivisionWrapper {...division} />
                    )
                })}
            </ul>
        </article>
    )
}

export default DivisionBrowser;