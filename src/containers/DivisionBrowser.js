import React from "react"

import BrowserItem from '../components/BrowserItem'

const DivisionBrowser = (props) => {
    const divisions = props.divisions;

    return (
        <div className="divBrowser">
            <ul>
                {divisions.map((divis) => {
                    return (
                        <div>
                            <BrowserItem id={divis.id} title={divis.title} class="division" />
                            <ul>
                                {divis.sections.items.map((sec) => <BrowserItem id={sec.id} title={sec.title} class="section" />)}
                            </ul>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default DivisionBrowser;