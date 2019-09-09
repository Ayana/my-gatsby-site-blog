import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const BlogWrapper = styled.div`
    @media (min-width: 750px) {
      .blogHover {
        position: relative;
        display: inline-block;
        text-decoration: none;
        height: 26px;
        &:after {
          position: absolute;
          bottom: -4px;
          left: 0;
          content: '';
          width: 100%;
          height: 1px;
          background: #444;
          transform: scale(0, 1);
          transform-origin: left top;
          transition: transform .3s;
        }
        &:hover:after {
          transform: scale(1, 1);
        }
      }
    },
  }
`;


class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        <div style={{
          margin: 'auto',
          maxWidth: rhythm(28),
          padding: `0 ${rhythm(1)}`,
        }}>
          <h1>Blog</h1>
          {posts.slice(0,20).map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <BlogWrapper>
                <div key={node.fields.slug} style={{
                  margin: 'auto',
                }}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <AniLink 
                      className="blogHover"
                      fade 
                      to={node.fields.slug} 
                      duration={0.3}>
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
              </BlogWrapper>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Projects

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
