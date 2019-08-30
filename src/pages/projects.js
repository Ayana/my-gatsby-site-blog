import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"


class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Projects" />
        <div style={{
          margin: 'auto',
          maxWidth: rhythm(24),
        }}>
          <h1>Projects</h1>
          <h2>Misawaya</h2>
          <p>- Act of preservation for traditional Japanese house in Nagano, Japan</p>
          <p><a target="_blank" rel="noopener" href="http://misawayanohanashi.com/">>> Website</a></p>
          <h2>Summer Cafe</h2>
          <p>- Kakigori(shaved ice) cafe with fruits from my father’s farm</p>
        </div>
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
