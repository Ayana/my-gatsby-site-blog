import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import logo from '../../content/assets/logo.svg'


// const Logo = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "img_ayaos.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  // return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
// }

class Logo extends React.Component {
  render() {
    return (
      <div style={{ width: '4em', margin: "auto" }}>
        <img
          src={logo}
          alt="Ayaos"
        />
      </div>
    )
  }
}



export default Logo

