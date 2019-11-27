import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"

const ProjectsWrapper = styled.div`
  margin-top: 3em;
  .item {
    margin-bottom: 5em;
    h2 {
      margin: 1.4em 0 1em;
      line-height: 1.2;
    }
    .sub-box {
      font-size: 0.7rem;
      margin: -0.6em 0 3em;
      line-height: 1.5;
      p {
        margin-bottom: 0.3em;
      }
    }
  }
  @media (min-width: 751px) {
    .linkHover {
      border: 1px solid #222;
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
        background: #222;
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
  @media (max-width: 750px) {
    .linkHover {
      border: 1px solid #444;
      padding: 0.3em 0.8em 0.3em 1.5em;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        left: 7px;
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
    }
  }
`;


class Projects extends React.Component {
  render() {
    const { data } = this.props
    const pageTitle = "Projects"
    const pageSlug = "projects"

    return (
      <Layout location={this.props.location}>
        <SEO pageTitle={pageTitle} pageSlug={pageSlug} />
        <div className="container">
        <h1>{pageTitle}</h1>
          <ProjectsWrapper>
          <div className="item">
            <Image fluid={data.misawaya.childImageSharp.fluid} />
            <h2>Leave the attractive Japanese house to the next generation - Misawaya Project</h2>
            <p>Act of preservation for a traditional Japanese house in Nagano, Japan.</p>
            <div className="sub-box">
              <p>Skills: Management, Planning, Marketing, Sales, Print Design, Web Development, Social Media</p>
              <p>Web Environment: WordPress *Now working on migration to React with WordPress(as Headless CMS)</p>
            </div>
            <a 
              className="linkHover"
              target="_blank" 
              rel="noopener noreferrer" 
              href="http://misawayanohanashi.com/">Misawaya Website
            </a>
          </div>
          <div className="item">
            <Image fluid={data.fruit.childImageSharp.fluid} />
            <h2>Use seasonal fruits to reduce food loss and make sustainable life cycles - Food Project</h2>
            <p>Kakigori(shaved ice) cafe with fruits from my father’s farm.</p>
            <div className="sub-box">
              <p>Skills: Planning, Cooking, Menu Development, Running Cafe, Fruits Sales, Farming, Web Development</p>
              <p>Web Environment: JavaScript(React/Gatsby)</p>
            </div>
            <a 
              className="linkHover"
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://greenroadfarm.org/">Farm's Website
            </a>
          </div>
          <div className="item">
            <Image fluid={data.morus.childImageSharp.fluid} />
            <h2>Help to preserve a community and historical archives in Lower East Side - NYC Project</h2>
            <p>Act of living in a grassroots community - the Museum of Reclaimed Urban Space.</p>
            <div className="sub-box">
              <p>Skills: Web Development</p>
              <p>Web Environment: WordPress</p>
            </div>
           <a 
              className="linkHover"
              target="_blank" 
              rel="noopener noreferrer" 
              href="http://www.morusnyc.org/">Museum Website
            </a>
          </div>
          <div className="item">
            <Image fluid={data.cineric.childImageSharp.fluid} />
            <h2>Cineric website</h2>
            <p>Website for introducing the company toward Japan market.  (2018)</p>
            <div className="sub-box">
              <p>Skills: Web Development</p>
              <p>Web Environment: WordPress, JavaScript(jQuery)</p>
            </div>
            <a 
              className="linkHover"
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://cineric.jp/">Cineric Website
            </a>
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
    misawaya: file(relativePath: { eq: "images/projects/img_project_misawaya.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fruit: file(relativePath: { eq: "images/projects/img_project_fruit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    morus: file(relativePath: { eq: "images/projects/img_project_morus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cineric: file(relativePath: { eq: "images/projects/img_project_cineric.jpg" }) {
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
