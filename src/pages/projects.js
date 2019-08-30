import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import misawaya from '../../content/assets/projects/img_project_misawaya.jpg'


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
          <p>- Act of preservation for traditional Japanese house in Nagano, Japan</p>
          <a target="_blank" rel="noopener" href="http://misawayanohanashi.com/">
            <img
              src={misawaya}
              alt="Misawaya"
              style={{ width: '100%', margin: '0', }}
            />
          </a>
          <p><a target="_blank" rel="noopener" href="http://misawayanohanashi.com/">>> Website</a></p>
          <h2>Summer Cafe</h2>
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
