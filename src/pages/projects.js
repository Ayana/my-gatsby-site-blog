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
    margin-bottom: 5em;
    padding-top: 1em;
    .project__cateroy {
      display: flex;
      margin-top: -1.3em;
      margin-top: 1.5em;
      margin-left: 0.5em;
      .project__line {
        background-color: #888;
        height: 1px;
        width: 12%;
        margin-top: 0.5rem;
      }
      .project__label {
        margin-left: 0.9em;
        font-size: 0.75rem;
      }
    }
    .project__header {
      font-size: 2.2rem;
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
      display: inline-block;
      margin-top: 2em;
      padding: 8px 20px;
      border: none;
    }
  }
  @media (min-width: 751px) {
    .project {
      margin-bottom: 7em;
      .project__cateroy {
        margin-left: 1.5em;
        .project__line {
          width: 25%;
          margin-top: 0.6rem;
        }
        .project__label {
          font-size: 0.8rem;
        }
      }
      .project__header {
        font-size: 2.8rem;
      }
      .project__copy {
      }
      .project__description {
      }
      .project__link {
      }
      .slideHover {
        /* position: relative; */
        /* box-shadow: inset 0 0 0 0 #64b4a7;
        transition: ease-out 0.4s;
        &:hover {
          color: #fff;
          box-shadow: inset 400px 0 0 0 #64b4a7;
        } */
        /* &:after {
          border: none;
          border-radius: 3px;
          position: absolute;
          bottom: 0;
          left: 0;
          content: '';
          width: 100%;
          height: 100%;
          background: #8cd7ca;
          transform: scale(0, 1);
          transform-origin: left top;
          transition: transform .7s cubic-bezier(.10,.7,0,1);
          z-index: -1;
        }
        &:hover:after {
          transform: scale(1, 1);
          border: none;
        } */
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
            <Fade bottom delay={200} duration={800} distance={'30px'}>
              <Image fluid={data.misawaya.childImageSharp.fluid} />
            </Fade>
            <Fade bottom delay={500} duration={500} distance={'20px'}>
            <h2 className="project__header">Misawaya</h2>
            <div className="project__cateroy">
              <div className="project__line"></div>
              <div className="project__label">
                Planning / Event / Website / Social Media
              </div>
            </div>
            <h3 className="project__copy">Leave and utilize the attractive Japanese house to the next generation.</h3>
            <div className="project__description">
              <p>How do we preserve this 150 years old house? - This is a big challenge we had faced in 2016. "Misawaya" is a Japanese traditional house built in 1861 which my family owns in Nagano, Japan. I have been challanging to solve social issues using this house.</p>
            </div>
            <a 
              className="project__link button secondary"
              target="_blank" 
              rel="noopener noreferrer" 
              href="http://misawayanohanashi.com/english/">
                Visit Site
            </a>
            </Fade>
          </div>

          <div id="develop" className="project">
            <Fade bottom delay={800} duration={800} distance={'30px'}>
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
              <h3 className="project__copy">Introduce a new Japanese snack brand to the world.</h3>
              <div className="project__description">
                <p>Tempura Tokyo is a new Japanese snack brand which is created as a uniquely-flavored Japanese-style snack. The main target is Japanese customers, however I made it simple that tourists also can undestand them briefly.</p>
              </div>
              <a 
                className="project__link button secondary"
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://tempura-tokyo.jp/">
                  Visit Site
              </a>
            </Fade>
          </div>

          <div id="support" className="project">
            <Fade bottom delay={200} duration={800} distance={'30px'}>
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
                <p>How much do you know about New York City history? the Museum of Reclaimed Urban Space is a small museum in Lower East Side. The Museum has archives about squats and communitry garden which is very interesting. I support this museum as an act of living in a grassroots community.</p>
              </div>
              <a 
                className="project__link button secondary"
                target="_blank" 
                rel="noopener noreferrer" 
                href="http://www.morusnyc.org/">
                  Visit Site
              </a>
            </Fade>
          </div>

          <div id="create" className="project">
            <Fade bottom delay={200} duration={800} distance={'30px'}>
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
                className="project__link button secondary"
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://greenroadfarm.org/">
                  Visit Site
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
