import * as React from "react"
import { Link } from "gatsby"
import SocialLinks from "./SocialLinks"

const Footer = () => {

    return (
        <footer>
            <SocialLinks />
            <p id="copyright">© {new Date().getFullYear()} Ashley Terstriep</p>
        </footer>
    )
}

export default Footer