import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"
import { scale } from "../utils/typography"

const BlogPostWrapper = styled.div`
  h1 {
    @media (max-width: 750px) {
      font-size: 2rem;
    }
  }
  a {
    color: #7fb7ad;
    &:hover {
      opacity: 0.6;
    }
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <SEO
          pageTitle={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <BlogPostWrapper>
          <div className="container">
            <h1>
              {post.frontmatter.title}
            </h1>
          </div>  
          <div>
            <div className="container">
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                }}
              >
                {post.frontmatter.date}
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>  
            <hr
              style={{
                margin: '8em 0 1em',
              }}
            />

            <div className="container">
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                  margin: 0,
                }}
              >
                <li>
                  {previous && (
                    <AniLink fade to={previous.fields.slug} rel="prev" duration={0.2}>
                      ← {previous.frontmatter.title}
                    </AniLink>
                  )}
                </li>
                <li>
                  {next && (
                    <AniLink fade to={next.fields.slug} rel="next" duration={0.2}>
                      {next.frontmatter.title} →
                    </AniLink>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </BlogPostWrapper>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail
      }
    }
  }
`
