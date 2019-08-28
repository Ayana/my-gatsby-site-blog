import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import logo from '../../content/assets/logo.svg'
import Media from 'react-media';

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
      <div>
        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              <div style={{ 
                margin: "auto",
                width: '4em',
                }}>
                <img
                  src={logo}
                  alt="Ayaos"
                />
              </div>
            ) : (
              <div style={{ 
                margin: "auto",
                width: '5em',
                }}>
                <img
                  src={logo}
                  alt="Ayaos"
                />
              </div>
            )
          }
        </Media>
      </div>
    )
  }
}



export default Logo

