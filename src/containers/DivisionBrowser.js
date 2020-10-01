import React, { useState } from "react"

import BrowserItem from '../components/BrowserItem'

const DivisionBrowser = (props) => {
    const divisions = props.divisions;

    return (
        <article className="divBrowser">
            <ul className="divisions">
                {divisions.map((divis) => {
                    return (
                        <section>
                            <BrowserItem id={divis.id} title={divis.title} class="division" check={props.check} isOn={props.divisionsOn.includes(divis.id) ? true : false} />
                            <ul className="sections">
                                {divis.sections.items.map((sec) => <BrowserItem id={sec.id} title={sec.title} class="section" check={props.check} isOn={props.divisionsOn.includes(sec.id) ? true : false} />)}
                            </ul>
                        </section>
                    )
                })}
            </ul>
        </article>
    )
}

export default DivisionBrowser;