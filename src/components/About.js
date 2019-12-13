import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Fade from 'react-reveal/Fade';

import Social from "./Social"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const StyledAbout = styled.div`
  padding-bottom: ${rhythm(1.5)};
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
    .about__text--greeting {
      margin-bottom: 0.2em;
      font-size: 1.8rem;
      margin-top: 0.6em;
    }
    .about__text--title {
      margin-bottom: 2em;
    }
    @media (min-width: 751px) {
      .about__text--greeting {
        font-size: 2rem;
      }
      .about__text--title {
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
          <Fade bottom delay={500} duration={800} distance={'20px'}>
            <Image
              fluid={data.avatar.childImageSharp.fluid}
              alt={author}
            />
          </Fade>
          <Fade bottom delay={900} duration={800} distance={'20px'}>
            <h2 className="about__text--greeting">Hello, I'm {author}</h2>
            <p className="about__text--title">Web Developer / Organizer</p>
          </Fade>
          <Fade bottom delay={1200} duration={800} distance={'20px'}>
            <div style={{marginTop:'1.8em'}}>
              <Social />
            </div>
          </Fade>
        </div>
      </div>
    </StyledAbout>
  )
}

export default About