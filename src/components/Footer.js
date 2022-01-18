import * as React from "react"
import { Link } from "gatsby"
import SocialLinks from "./SocialLinks"

const Footer = () => {

    return (
        <footer>
            <p id="copyright">© {new Date().getFullYear()} Ashley Terstriep</p>
        </footer>
    )
}

export default Footer