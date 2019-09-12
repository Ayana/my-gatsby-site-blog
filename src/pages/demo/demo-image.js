import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"


export default props => {
	console.log(props.data)
	return(
		<Layout location={props.location}>
      <div className="container">
        <h1>Demo of gatsby-image</h1>
        <Img fluid={props.data.misawaya.childImageSharp.fluid} />
        <Img fluid={props.data.fruit.childImageSharp.fluid} />
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
    fruit: file(relativePath: { eq: "projects/img_project_fruit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
