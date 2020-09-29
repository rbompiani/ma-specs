import React from "react"

import { AmplifyGreetings } from '@aws-amplify/ui-react';

const Header = () => {
    return (
        <div className="header">
            <AmplifyGreetings />
        </div>
    )
}

export default Header;