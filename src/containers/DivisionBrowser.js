import React, { useContext } from "react"
import { SpecContext } from '../context/SpecContext';

import BrowserItem from '../components/BrowserItem'

const DivisionBrowser = (props) => {
    const divisions = useContext(SpecContext).allDivisions;
    const divisionsOn = useContext(SpecContext).project.divisionsOn;

    return (
        <article className="divBrowser">
            <ul className="divisions">
                {divisions.map((divis) => {
                    return (
                        <section key={divis.id}>
                            {divisions &&
                                <BrowserItem
                                    id={divis.id}
                                    title={divis.title}
                                    class="division"
                                    isOn={divisionsOn.includes(divis.id) ? true : false}
                                />}
                            <ul className="sections">
                                {divis.sections.items.map((sec) => {
                                    return (
                                        <BrowserItem
                                            key={sec.id}
                                            id={sec.id}
                                            title={sec.title}
                                            class="section"
                                            isOn={divisionsOn.includes(sec.id) ? true : false}
                                        />
                                    )
                                })}
                            </ul>
                        </section>
                    )
                })}
            </ul>
        </article>
    )
}

export default DivisionBrowser;