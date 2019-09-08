import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Social from "../components/social"
import { rhythm } from "../utils/typography"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            instagram
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        margin: `${rhythm(1)} 0 ${rhythm(2.5)} `,
        textAlign: 'center',
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginBottom: 0,
          minWidth: 100,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <h2 style={{
        marginBottom:'0',
        fontSize:'1.8rem',
        fontFamily:'Merriweather Sans',
        marginTop: '0.6em',
        }}><strong>I'm {author}</strong></h2>
      <p style={{marginBottom:'2em',}}>Web Developer / Organizer of Misawaya</p>
      {/* <p>Over 13 years experience in web design & development. Working </p> */}
      <div style={{marginTop:'1.8em'}}>
        <Social />
      </div>
    </div>
  )
}

export default About