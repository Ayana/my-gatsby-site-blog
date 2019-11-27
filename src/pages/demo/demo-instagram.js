import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Instagram from '../../components/Instagram'


const DemoInstagramFeed = props => {

  const location = props.location
	const pageTitle = 'Demo Instagram Feed'
	const pageSlug = 'demo-instagram'

	return(
		<Layout location={location}>
      <SEO pageTitle={pageTitle} pageSlug={pageSlug} />
				<div className="container">
					<h1>{pageTitle}</h1>
					<Instagram />
					<div>
					Refference<br /> 
					<a 
						className="hover"
						target="_blank" 
						rel="noopener noreferrer" 
						href="https://www.gatsbyjs.org/packages/gatsby-source-instagram/"
					>
						gatsby-source-instagram
					</a>
					</div>
				</div>
    </Layout>
	)
}


export default DemoInstagramFeed