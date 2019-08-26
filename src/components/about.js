/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

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
        // display: `flex`,
        marginBottom: rhythm(2.5),
        textAlign: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          // marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 100,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{marginBottom:0,fontSize:'1.8rem',}}><strong>{author}</strong></p>
      <p style={{marginBottom:0,}}>Web Developer / Organizer of Misawaya</p>
      <div style={{marginTop:'1em'}}>
        <Social />
      </div>
    </div>
  )
}

export default About