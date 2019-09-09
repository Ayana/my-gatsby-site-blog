import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"


const DemoFade = props => {
	console.log(props)
  const location = props.location
  const siteTitle = props.data.site.siteMetadata.title
	return(
		<Layout location={location} title={siteTitle}>
      <SEO title="Projects" />
      <div>
        <div className="container">
          <h1>Hello gatsby-image</h1>
        </div>
        <Image fluid={props.data.misawaya.childImageSharp.fluid} />
      </div>
    </Layout>
	)
}

export const query = graphql`
  query {
    misawaya: file(relativePath: { eq: "projects/img_project_misawaya.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default DemoFade