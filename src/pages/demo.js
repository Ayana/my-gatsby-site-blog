import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import styled from 'styled-components'

const StyledDemo = styled.div`
	margin-bottom: 10em;
	.lead-text {
		margin-bottom: 2rem;
		p {
			margin-bottom: 0.2rem;
		}
		.small {
			font-size: 0.8rem;
		}
	}
	.demo-list {
		line-height: 2;
		margin-bottom: 2rem;
	}
`

const Demo = (props) => {
	const pageTitle = 'Demo'
	const pageSlug = 'demo'

	return (
		<Layout location={props.location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledDemo>
				<div className='container basic-link'>
					<h1>{pageTitle}</h1>
					<div className='lead-text'>
						<p>Here's a list for easy access to my demos I've tried out.</p>
						<p className='small'>- Last update: Apr 1, 2020</p>
					</div>
					<h2>3D</h2>
					<div className='demo-list'>
						<div className='demo-list__item'>
							=>
							<a href='https://ar-mushroom.netlify.com/' target='_blank'>
								AR Quick Look & Reality Composer
							</a>
						</div>
						<div className='demo-list__item'>
							=>
							<a href='https://three-js-model.netlify.com/' target='_blank'>
								3D model
							</a>
						</div>
					</div>
					<h2>CSS</h2>
					<div className='demo-list'>
						<div className='demo-list__item'>
							=> <Link to='/demo/demo-scroll-snap/'>Scroll Snap</Link>
						</div>
						<div className='demo-list__item'>
							=> <Link to='/demo/demo-animation/'>SVG Animations</Link>
						</div>
						<div className='demo-list__item'>
							=> <Link to='/demo/demo-parallax-css/'>Parallax with Pure CSS</Link>
						</div>
						<div className='demo-list__item'>
							=> <Link to='/demo/demo-text-animations/'>Text animation</Link>
						</div>
					</div>
					<h2>UI Library </h2>
					<div className='demo-list'>
						<div className='demo-list__item'>
							=> <Link to='/demo/demo-transition/'>CSS Transition</Link>
						</div>
						<div className='demo-list__item'>
							=> <Link to='/demo/demo-slick/'>React Slick</Link>
						</div>
						<div className='demo-list__item'>
							=> <Link to='/demo/demo-swiper/'>Swiper</Link>
						</div>
						<div className='demo-list__item'>
							=> <Link to='/demo/demo-reveal/'>React Reveal animation</Link> <br />
						</div>
					</div>
					<h2>CSS & JavaScript </h2>
					<div className='demo-list'>
						<div className='demo-list__item'>
							=> <Link to='/demo/demo-parallax-js/'>Vanilla JavaScript Parallax</Link> <br />
						</div>
					</div>
					<h2>JavaScript </h2>
					<div className='demo-list'>
						<div className='demo-list__item'>
							=> <Link to='/demo/demo-functions/'>Small Functions</Link>
						</div>
						<div className='demo-list__item'>
							=> <Link to='/demo/demo-video-player/'>Video Player using youtube API</Link>
						</div>
					</div>

					<h2>Gatsby </h2>
					<div className='demo-list'>
						<div className='demo-list__item'>
							=> <Link to='/demo/demo-image/'>Gatsby Image</Link>
						</div>
						<div className='demo-list__item'>
							=> <Link to='/demo/demo-instagram/'>Instagram Feed</Link>
						</div>
					</div>
				</div>
			</StyledDemo>
		</Layout>
	)
}

export default Demo
