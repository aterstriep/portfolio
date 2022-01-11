import * as React from "react"
import "normalize.css"
import "../stylesheets/main.scss"
import Footer from "./Footer"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBolt, faCode, faEnvelope, faHome, faBug } from '@fortawesome/free-solid-svg-icons'

library.add( fab, faBolt, faCode, faEnvelope, faHome, faBug )

const Layout = ({ children }) => {
    return (
        <div>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout