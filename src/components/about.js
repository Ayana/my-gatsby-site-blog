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
          fixed(width: 120, height: 120) {
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
        paddingBottom: rhythm(1),
        height: '60vh',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex',
      }}
    >
      <div>
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
          marginBottom:'0.2em',
          fontSize:'1.8rem',
          fontFamily:'Merriweather Sans',
          marginTop: '0.6em',
          }}><strong>I'm {author}</strong></h2>
        <p style={{marginBottom:'2em',}}>Web Developer / Organizer of Misawaya</p>
        <div style={{marginTop:'1.8em'}}>
          <Social />
        </div>
      </div>
    </div>
  )
}

export default About