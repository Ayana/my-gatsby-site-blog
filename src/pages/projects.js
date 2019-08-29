import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Projects" />
        <h1>Projects</h1>
				<h2>Misawaya</h2>
        <p>- Act of preservation for traditional Japanese house in Nagano, Japan</p>
				<h2>Summer Cafe</h2>
				<p>- Kakigori(shaved ice) cafe with fruits from my father’s farm</p>
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
