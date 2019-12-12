import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Fade from 'react-reveal/Fade';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"

const ProjectsWrapper = styled.div`
  margin-top: 3em;
  .project-nav {
    display: flex;
    justify-content: center;
    margin-bottom: 4em;
    margin-top: 4em;
    li {
      font-size: 0.9rem;
      padding: 0 1em;
    }
  }
  .project {
    margin-bottom: 6em;
    padding-top: 1em;
    .project__cateroy {
      display: flex;
      margin-top: -1.3em;
      margin-top: 1.5em;
      margin-left: 1em;
      .project__line {
        background-color: #888;
        height: 1px;
        width: 25%;
        margin-top: 0.6rem;
      }
      .project__label {
        margin-left: 0.9em;
        font-size: 0.8rem;
      }
    }
    .project__header {
      font-size: 2.8rem;
      margin-top: 2rem;
      margin-bottom: 0;
      letter-spacing: 0;
    }
    .project__copy {
      font-size: 1.6rem;
      margin-top: 2em;
      line-height: 1.2;
      letter-spacing: 0;
    }
    .project__description {
      color: #777;
      font-size: 0.85rem;
      margin-top: 3em;
    }
    .project__link {
      margin-top: 2.5em;
    }
  }
  @media (max-width: 750px) {
    .linkHover {
      border: 1px solid #444;
      padding: 0.3em 0.8em 0.3em 1.5em;
      position: relative;
      display: inline-block;
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
        transform: rotate(45deg);
      }
    }
  }
  @media (min-width: 751px) {
    .linkHover {
      border: 1px solid #333;
      padding: 0.1em 0.8em 0.1em 1.5em;
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
        border-top: 1px solid #333;
        border-right: 1px solid #333;
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
        background: #333;
        transform: scale(0, 1);
        transform-origin: left top;
        transition: transform .7s cubic-bezier(.10,.7,0,1);
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
    const pageTitle = "Projects"
    const pageSlug = "projects"

    return (
      <Layout location={this.props.location}>
        <SEO pageTitle={pageTitle} pageSlug={pageSlug} />
        <div className="container">
          <h1>{pageTitle}</h1>
          <ProjectsWrapper>
          {/* <ul className="no-bullet project-nav">
						<li><a href="#develop">Develop</a></li>
						<li><a href="#organize">Organize</a></li>
						<li><a href="#support">Contribute</a></li>
					</ul> */}

          <div id="organize" className="project">
            <Fade left delay={500} duration={800} distance={'50px'}>
              <Image fluid={data.misawaya.childImageSharp.fluid} />
            </Fade>
            <Fade bottom delay={1000} duration={500} distance={'20px'}>
            <h2 className="project__header">Misawaya</h2>
            <div className="project__cateroy">
              <div className="project__line"></div>
              <div className="project__label">
                Planning / Event / Website / Social
              </div>
            </div>
            <h3 className="project__copy">Leave and utelize the attractive Japanese house to the next generation.</h3>
            <div className="project__description">
              <p>How do we preserve this 150 years old house? - This is a big challenge we had faced in 2016. "Misawaya" is a Japanese traditional house built in 1861 which my family owns in Nagano, Japan. I have been challanging to solve social issues using this house.</p>
            </div>
            <a 
              className="project__link linkHover"
              target="_blank" 
              rel="noopener noreferrer" 
              href="http://misawayanohanashi.com/">Misawaya
            </a>
            </Fade>
          </div>

          <div id="develop" className="project">
            <Fade left delay={800} duration={800} distance={'50px'}>
              <Image fluid={data.tempuratokyo.childImageSharp.fluid} />
            </Fade>
            <Fade bottom delay={200} duration={500} distance={'20px'}>
              <h2 className="project__header">Tempura Tokyo</h2>
              <div className="project__cateroy">
                <div className="project__line"></div>
                <div className="project__label">
                  Website
                </div>
              </div>
              <h3 className="project__copy">Introduce new unique Japanese snack brand to the world.</h3>
              <div className="project__description">
                <p>Tempura Tokyo is a new Japanese snack brand whchi is Japanese traditional snacks with unique flavors. Although main target is Japanese people, I tried to make it design universal that tourists also can undestand them briefly.</p>
              </div>
              <a 
                className="project__link linkHover"
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://tempura-tokyo.jp/">Tempura Tokyo
              </a>
            </Fade>
          </div>

          <div id="support" className="project">
            <Fade left delay={200} duration={800} distance={'50px'}>
              <Image fluid={data.morus.childImageSharp.fluid} />
            </Fade>
            <Fade bottom delay={200} duration={500} distance={'20px'}>
              <h2 className="project__header">MoRUS</h2>
              <div className="project__cateroy">
                <div className="project__line"></div>
                <div className="project__label">
                  Maintenance / CRM / Volunteer
                </div>
              </div>
              <h3 className="project__copy">Help to preserve a community and historical archives in Lower East Side.</h3>
              <div className="project__description">
                <p>How much do you know about New York history? the Museum of Reclaimed Urban Space is a small museum in Lower East Side. The Museum has archives about squats and communitry garden which is very interesting. I support this museum as an act of living in a grassroots community.</p>
              </div>
              <a 
                className="project__link linkHover"
                target="_blank" 
                rel="noopener noreferrer" 
                href="http://www.morusnyc.org/">MoRUS
              </a>
            </Fade>
          </div>

          <div id="create" className="project">
            <Fade left delay={200} duration={800} distance={'50px'}>
              <Image fluid={data.fruit.childImageSharp.fluid} />
            </Fade>
              <h2 className="project__header">GreenRoadFarm</h2>
              <Fade bottom delay={200} duration={500} distance={'20px'}>
              <div className="project__cateroy">
                <div className="project__line"></div>
                <div className="project__label">
                  Website / Recipe / Product / Cafe
                </div>
              </div>
              <h3 className="project__copy">Use seasonal fruits to reduce food loss and make sustainable life cycles.</h3>
              <div className="project__description">
                <p>As you know, farming is very difficult to control its production because of the weather. Kakigori(shaved ice) cafe is a creative way of utilizing fruits which suppose to dump at my father’s farm.</p>
              </div>
              <a 
                className="project__link linkHover"
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://greenroadfarm.org/">GreenRoadFarm
              </a>
            </Fade>
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
    tempuratokyo: file(relativePath: { eq: "images/projects/img_project_tempura.jpg" }) {
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
