import * as React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Projects from '../components/projects/ProjectsGrid'
import About from '../components/About'

const IndexPage = () => {
  return (
    <Layout>

      <Helmet>
        <title>Ashley Terstriep | Portfolio</title>
        <body className="index" />
      </Helmet>

      <div className="home-header">

        <div className="home-header-content">
            <p className="subtitle">Hey there,</p>
            <h1><span>My name is <span className="text-emph">Ashley Terstriep</span>,</span> <span>& I'm a frontend software engineer.</span></h1>
        </div>

      </div>
      
      <Projects />

      <About />

    </Layout>
  )
}

export default IndexPage