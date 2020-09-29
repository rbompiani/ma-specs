import React, { useState } from "react"

import BrowserItem from '../components/BrowserItem'

const DivisionBrowser = (props) => {
    const divisions = props.divisions;

    return (
        <div className="divBrowser">
            <ul>
                {divisions.map((divis) => {
                    return (
                        <div>
                            <BrowserItem id={divis.id} title={divis.title} class="division" check={props.check} isOn={props.divisionsOn.includes(divis.id) ? true : false} />
                            <ul>
                                {divis.sections.items.map((sec) => <BrowserItem id={sec.id} title={sec.title} class="section" check={props.check} isOn={props.divisionsOn.includes(sec.id) ? true : false} />)}
                            </ul>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default DivisionBrowser;