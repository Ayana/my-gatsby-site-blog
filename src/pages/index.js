import React from 'react'
import {graphql} from 'gatsby'
// import AniLink from "gatsby-plugin-transition-link/AniLink"

import About from '../components/About'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

class Index extends React.Component {
	render() {
		const pageSlug = 'home'

		return (
			<Layout location={this.props.location}>
				<SEO pageSlug={pageSlug} />
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
	}
`
