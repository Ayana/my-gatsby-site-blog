import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import styled from 'styled-components'

const StyledDemo = styled.div`
	a {
		color: #7fb7ad;
		&:hover {
			opacity: 0.6;
		}
	}
	.demo-list {
		line-height: 2;
		margin-bottom: 10em;
	}
`

const Demo = (props) => {
	const pageTitle = 'Demo'
	const pageSlug = 'demo'

	return (
		<Layout location={props.location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledDemo>
				<div className='container'>
					<h1>{pageTitle}</h1>
					<div className='demo-list'>
						=> <AniLink to='/demo/demo-slick/'>React Slick</AniLink>
						<br />
						=> <AniLink to='/demo/demo-swiper/'>Swiper</AniLink>
						<br />
						=> <AniLink to='/demo/demo-parallax-css/'>Parallax with Pure CSS</AniLink>
						<br />
						{/* => <AniLink to="/demo/demo-parallax/">React Spring Parallax</AniLink><br /> */}
						=> <AniLink to='/demo/demo-instagram/'>Instagram Feed</AniLink>
						<br />
						=> <AniLink to='/demo/demo-video-player/'>Video Player using youtube API</AniLink>
						<br />
						=> <AniLink to='/demo/demo-reveal/'>React Reveal animation</AniLink>
						<br />
						=> <AniLink to='/demo/demo-fade/'>Text animation</AniLink>
						<br />
						=> <AniLink to='/demo/demo-image/'>Gatsby Image</AniLink>
					</div>
				</div>
			</StyledDemo>
		</Layout>
	)
}

export default Demo
