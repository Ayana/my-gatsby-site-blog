import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Social from "./Social"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const StyledAbout = styled.div`
  padding-bottom: ${rhythm(1)};
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  .about {
    .gatsby-image-wrapper {
      width: 120px;
      height: 120px;
      margin: auto;
      img {
        margin-bottom: 0;
        border-radius: 50%;
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
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
    <StyledAbout>
      <div className="about">
        <div>
          <Image
            fluid={data.avatar.childImageSharp.fluid}
            alt={author}
          />
          <h2 style={{
            marginBottom:'0.2em',
            fontSize:'2rem',
            fontFamily:'Merriweather Sans',
            marginTop: '0.6em',
            }}><strong>I'm {author}</strong></h2>
          <p style={{marginBottom:'2em',}}>Web Developer / Organizer</p>
          <div style={{marginTop:'1.8em'}}>
            <Social />
          </div>
        </div>
      </div>
    </StyledAbout>
  )
}

export default About