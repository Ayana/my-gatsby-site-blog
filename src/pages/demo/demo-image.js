import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Img from "gatsby-image"


export default props => {
	
  const pageTitle = 'Demo Gatsby Image'
  const pageSlug = 'demo-image'
  
	return(
		<Layout location={props.location}>
      <SEO pageTitle={pageTitle} pageSlug={pageSlug} />
      <div className="container">
        <h1>{pageTitle}</h1>
        <div style={{marginBottom: '2em'}}>
          <Img fluid={props.data.image1.childImageSharp.fluid} />
        </div>
        <div>
          <Img fluid={props.data.image2.childImageSharp.fluid} />
        </div>
      </div>
    </Layout>
	)
}

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "images/demo/img_demo1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "images/demo/img_demo2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

