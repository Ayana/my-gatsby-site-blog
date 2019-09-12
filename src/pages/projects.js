import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const ProjectsWrapper = styled.div`
  margin-top: 3em;
  .item {
    margin-bottom: 5em;
  }
  @media (min-width: 750px) {
    .linkHover {
      border: 1px solid #444;
      padding: 0.1em 0.8em 0 1.5em;
      position: relative;
      display: inline-block;
      text-decoration: none;
      &:hover {
        color: #eee;
        &:before {
        border-top: 1px solid #eee;
        border-right: 1px solid #eee;
        }
      }
      &:before {
        content: "";
        position: absolute;
        left: 10px;
        top: 1px;
        bottom: 0;
        display: block;
        margin-top: auto;
        margin-right: 0;
        margin-bottom: auto;
        margin-left: 0;
        width: 7px;
        height: 7px;
        border-top: 1px solid #222;
        border-right: 1px solid #222;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 100%;
        background: #444;
        transform: scale(0, 1);
        transform-origin: left top;
        transition: transform .3s;
        z-index: -1;
      }
      &:hover:after {
        transform: scale(1, 1);
      }
  }
}
`;


class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Projects" />
        <div className="container">
        <h1>Projects</h1>
          <ProjectsWrapper>
          <div className="item">
            <Image fluid={data.misawaya.childImageSharp.fluid} />
            <h2>Leave this attractive Japanese house to the next generation - Misawaya Project</h2>
            <p>- Act of preservation for a traditional Japanese house in Nagano, Japan</p>
            <a 
              className="linkHover"
              target="_blank" 
              rel="noopener noreferrer" 
              href="http://misawayanohanashi.com/">Misawaya Website
            </a>
          </div>
          <div className="item">
            <Image fluid={data.fruit.childImageSharp.fluid} />
            <h2>Use seasonal fruits to reduce food loss and make sustainable life cycles - Fruits Project</h2>
            <p>- Kakigori(shaved ice) cafe with fruits from my father’s farm</p>
            <a 
              className="linkHover"
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://greenroadfarm.org/">Farm's Website
            </a>
          </div>
          <div className="item">
            <h2>Create a community for sharing ideas and technology in an urban space - NYC Project</h2>
            <p>- Act of living in a grassroots community, the Museum of Reclaimed Urban Space in Lower East Side</p>
          </div>
          </ProjectsWrapper>
        </div>
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
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
    site {
      siteMetadata {
        title
      }
    }
  }
`
