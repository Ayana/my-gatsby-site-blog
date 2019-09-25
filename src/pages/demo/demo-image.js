import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Img from "gatsby-image"


export default props => {
	// console.log(props)
	return(
		<Layout location={props.location}>
      <div className="container">
        <h1>Demo of gatsby-image</h1>
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
    image1: file(relativePath: { eq: "demo/img_demo1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "demo/img_demo2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

