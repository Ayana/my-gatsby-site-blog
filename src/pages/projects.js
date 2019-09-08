import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import misawaya from '../../content/assets/projects/img_project_misawaya.jpg'
import fruit from '../../content/assets/projects/img_project_fruit.jpg'


class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Projects" />
        <div style={{
          margin: 'auto',
          maxWidth: rhythm(26),
          padding: `0 ${rhythm(1)}`,
        }}>
          <h1>Projects</h1>
          <h2>Misawaya</h2>
          <p>- Act of preservation for a traditional Japanese house in Nagano, Japan</p>
          <a target="_blank" rel="noopener" href="http://misawayanohanashi.com/">
            <img
              src={misawaya}
              alt="Misawaya"
              style={{ width: '100%', margin: '0', }}
            />
          </a>
          <p><a target="_blank" rel="noopener" href="http://misawayanohanashi.com/">>> Website</a></p>
          <h2>Fruits</h2>
            <img
              src={fruit}
              alt="fruit"
              style={{ width: '100%', margin: '0', }}
            />
          <p>- Kakigori(shaved ice) cafe with fruits from my father’s farm</p>
          <h2>Museum of Reclaimed Urban Space</h2>
          <p>- Helping to update websites at the museum in Lower East Side</p>
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
