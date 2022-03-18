import React from 'react'
import SocialLinks from './SocialLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {
    return (
        <div id="about">
            <SocialLinks />
            <div>
                <h2>About Me</h2>
                <p>I'm a frontend software engineer with additional experience in backend development, design, and marketing. I've worn a lot of creative hats that give me a unique experience as a developer.</p>
                <p className="about-icon"><FontAwesomeIcon icon="map-marker-alt" /> <span>Located in Illinois, USA</span></p>
                <p className="about-icon"><FontAwesomeIcon icon="code" /> <span>Currently a frontend software engineer at <a href="https://oddball.io" rel="noreferrer" target="_blank">Oddball</a></span></p>
            </div>
        </div>
    )
}
