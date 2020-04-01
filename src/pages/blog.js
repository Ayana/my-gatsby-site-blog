import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'

const BlogWrapper = styled.div`
	@media (min-width: 750px) {
		.blogHover {
			&:hover {
				/* color: #50a094; */
			}
		}
	}
`

class Blog extends React.Component {
	render() {
		const { data } = this.props
		const pageTitle = 'Blog'
		const pageSlug = 'blog'
		const posts = data.allMarkdownRemark.edges

		return (
			<Layout location={this.props.location}>
				<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
				<div className='container'>
					<h1>{pageTitle}</h1>
					<BlogWrapper>
						{posts.slice(0, 20).map(({ node }) => {
							const title = node.frontmatter.title || node.fields.slug
							return (
								<div key={node.fields.slug}>
									<h2
										style={{
											marginBottom: rhythm(1 / 4),
										}}>
										<AniLink className='blogHover' fade to={node.fields.slug} duration={0.3}>
											{title}
										</AniLink>
									</h2>
									<small
										style={{
											marginBottom: '5px',
											display: 'block',
											color: '#666',
										}}>
										{node.frontmatter.date}
									</small>
									<p
										dangerouslySetInnerHTML={{
											__html: node.frontmatter.description || node.excerpt,
										}}
									/>
								</div>
							)
						})}
					</BlogWrapper>
				</div>
			</Layout>
		)
	}
}

export default Blog

export const pageQuery = graphql`
	query {
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
