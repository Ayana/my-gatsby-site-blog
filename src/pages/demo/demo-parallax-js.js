import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import styled from 'styled-components'

const StyledParallax = styled.div`
	@media (max-width: 750px) {
	}
	@media (min-width: 751px) {
	}
`

const DemoParallxJs = (props) => {
	const location = props.location
	const pageTitle = 'Demo Parallax with '
	const pageSlug = 'demo-parallax-js'

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledParallax>
				<div className='container'>
					<h1>{pageTitle}</h1>
				</div>
			</StyledParallax>
		</Layout>
	)
}

export default DemoParallxJs
