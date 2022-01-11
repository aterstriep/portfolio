import * as React from "react"
import Helmet from "react-helmet"
import Button from "../components/Button"
import Layout from "../components/Layout"
import Container from "../components/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page Not Found</title>
        <body className="error" />
      </Helmet>
      <Container>
        <FontAwesomeIcon icon="bug" />
        <h1>Page not found!</h1>
        <Button href="/" icon="home">Return Home</Button>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
