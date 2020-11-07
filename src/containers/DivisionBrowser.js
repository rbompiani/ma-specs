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
                        <section>
                            {divisions &&
                                <BrowserItem
                                    id={divis.id}
                                    title={divis.title}
                                    class="division"
                                    //check={props.check}
                                    isOn={divisionsOn.includes(divis.id) ? true : false}
                                />}
                            <ul className="sections">
                                {divis.sections.items.map((sec) => {
                                    return (
                                        <BrowserItem
                                            id={sec.id}
                                            title={sec.title}
                                            class="section"
                                            //check={props.check} 
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