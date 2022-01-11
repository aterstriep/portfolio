import * as React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Projects from '../components/projects/ProjectsGrid'
import Image from '../components/Image'
import SocialLinks from '../components/SocialLinks'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IndexPage = () => {
  return (
    <Layout>

      <Helmet>
        <title>Ashley Terstriep | Portfolio</title>
        <body className="index" />
      </Helmet>

      <div className="home-header">

        <div className="home-header-content">
          <div className="headshot">
            <Image src="at.jpg" alt="Ashley Terstriep headshot" />
          </div>
          <div className="header-intro">
            <h2>Hey there, my name is <span className="text-emph">Ashley Terstriep.</span></h2>
            <p>I'm a <span className="text-emph">frontend developer</span> with additional experience in backend development, website design, and marketing. I've worn a lot of creative hats that give me a unique experience as a developer.</p>
            <p className="current-position"><FontAwesomeIcon icon="code" /> Currently a Website Designer/Developer at <a href="https://vervocity.io" target="_blank" rel="noopener">Vervocity</a></p>
            <SocialLinks />
          </div>
        </div>

      </div>
      
      <Projects />

    </Layout>
  )
}

export default IndexPage