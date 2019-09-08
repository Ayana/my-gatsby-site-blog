import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Media from 'react-media';

import Logo from "../components/logo"
import About from "../components/about"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
     <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        {/* <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              <div>
                <h1
                  style={{
                    ...scale(1.5),
                    margin: "auto",
                    marginTop: rhythm(1.5),
                    paddingBottom: rhythm(1/2),
                    width: '4em',
                  }}
                >
                  <Logo />
                </h1>
              </div>
              ) : (
              <div>
                <h1
                  style={{
                    ...scale(1.5),
                    margin: "auto",
                    marginTop: rhythm(1),
                    paddingBottom: rhythm(0.5),
                    width: '5em',
                  }}
                >
                  <Logo />
                </h1>                
              </div>
            )
          }
        </Media> */}
        <About />
        {/* {posts.slice(0,2).map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} style={{
              maxWidth: rhythm(18),
              margin: 'auto',
              padding: `0 ${rhythm(1)}`,
           }}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <AniLink fade to={node.fields.slug} duration={0.2}>
                  {title}
                </AniLink>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })} */}
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
