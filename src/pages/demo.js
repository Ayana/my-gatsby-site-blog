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
				<div className="basic-link">
					<div className="container">
						<h1>{pageTitle}</h1>
						<div className="lead-text">
							<p>A list for easy access to my demos I've tried out.</p>
							{/* <p className="small">- Last update: June 4, 2020</p> */}
						</div>
					</div>

					<div className="container">
						<h2>AR & WebGL</h2>
						<div className="demo-list">
							<div className="demo-list__item">
								=>
								<a href="https://ar-mushroom.netlify.com/" target="_blank" rel="noopener noreferrer">
									AR Quick Look & Reality Composer
								</a>
							</div>
							<div className="demo-list__item">
								=>
								<a href="https://three-js-model.netlify.com/" target="_blank" rel="noopener noreferrer">
									Three.js
								</a>
							</div>
						</div>
						<h2>CSS</h2>
						<div className="demo-list">
							<div className="demo-list__item">
								=> <Link to="/demo/demo-micro-interections/">Micro Interections</Link>
							</div>
							<div className="demo-list__item">
								=> <Link to="/demo/demo-scroll-snap/">Scroll Snap</Link>
							</div>
							<div className="demo-list__item">
								=> <Link to="/demo/demo-animation/">SVG Animations</Link>
							</div>
							<div className="demo-list__item">
								=> <Link to="/demo/demo-parallax-css/">Parallax with Pure CSS</Link>
							</div>
							<div className="demo-list__item">
								=> <Link to="/demo/demo-text-animations/">Text animation</Link>
							</div>
						</div>
						<h2>JavaScript library </h2>
						<div className="demo-list">
							<div className="demo-list__item">
								=> <Link to="/demo/demo-i18next/">React i18next</Link>
							</div>
							<div className="demo-list__item">
								=> <Link to="/demo/demo-react-io/">React Intersection Observer</Link>
							</div>
							<div className="demo-list__item">
								=> <Link to="/demo/demo-cookie-consent/">React Cookie Consent</Link>
							</div>
							<div className="demo-list__item">
								=> <Link to="/demo/demo-react-parallax/">React Parallax(Banner)</Link>
							</div>
							<div className="demo-list__item">
								=> <Link to="/demo/demo-d3/">D3.js</Link>
							</div>
							<div className="demo-list__item">
								=> <Link to="/demo/demo-transition/">CSS Transition</Link>
							</div>
							<div className="demo-list__item">
								=> <Link to="/demo/demo-slick/">React Slick</Link>
							</div>
							<div className="demo-list__item">
								=> <Link to="/demo/demo-swiper/">Swiper</Link>
							</div>
							<div className="demo-list__item">
								=> <Link to="/demo/demo-reveal/">React Reveal</Link> <br />
							</div>
						</div>
						<h2>CSS & JavaScript </h2>
						<div className="demo-list">
							<div className="demo-list__item">
								=> <Link to="/demo/demo-custom-io/">Custom Hooks Intersection Observer</Link>
							</div>
							<div className="demo-list__item">
								=> <Link to="/demo/demo-parallax-js/">Vanilla JavaScript Parallax</Link> <br />
							</div>
							<div className="demo-list__item">
								=> <Link to="/demo/demo-functions/">Small Functions</Link>
							</div>
						</div>

						<h2>API </h2>
						<div className="demo-list">
							<div className="demo-list__item">
								=> <Link to="/demo/demo-video-player/">Video Player using youtube API</Link>
							</div>
						</div>

						<div className="demo-list">{/* <div className="demo-list__item">
								=> <Link to="/demo/demo-image/">Gatsby Image</Link>
							</div>
							<div className="demo-list__item">
								=> <Link to="/demo/demo-instagram/">Instagram Feed</Link>
							</div> */}</div>
					</div>
				</div>
			</StyledDemo>
		</Layout>
	)
}

export default Demo
