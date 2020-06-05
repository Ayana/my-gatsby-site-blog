import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import styled from 'styled-components'

const StyledIntersection = styled.div`
	padding-bottom: 5rem;
	section {
		font-size: 5rem;
		font-family: 'Merriweather Sans', sans-serif;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		transition: all 0.3s;
		&.active {
			background: #247ba0;
			color: #fff;
		}
	}
	.ref {
		margin: 5rem 0 4rem;
	}
`

const DemoParallxJs = (props) => {
	const location = props.location
	const pageTitle = 'Demo Intersection Observer'
	const pageSlug = 'demo-intersection-observer'

	const section = document.querySelectorAll('section')
	const options = {
		root: null,
		rootMargin: '-10%',
		threshold: 0.4,
	}
	const observer = new IntersectionObserver(beTouching, options)
	section.forEach((section) => {
		observer.observe(section)
	})

	function beTouching(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				// console.log(entry.target)
				entry.target.classList.add('active')
			} else {
				entry.target.classList.remove('active')
			}
		})
	}

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledIntersection>
				<div className="basic-link">
					<div className="container-wide">
						<h1>{pageTitle}</h1>
					</div>

					<section className="first">
						<span>First</span>
					</section>

					<section className="second">
						<span>Second</span>
					</section>

					<section className="third">
						<span>Third</span>
					</section>

					<section className="fourth">
						<span>Fourth</span>
					</section>
					<div className="container">
						<p className="ref">
							Refference:
							<br />
							<a href="https://www.youtube.com/watch?v=gQ8WggeHoJU" target="_blank" rel="noopener noreferrer">
								https://www.youtube.com/watch?v=gQ8WggeHoJU
							</a>
						</p>
					</div>
				</div>
			</StyledIntersection>
		</Layout>
	)
}

export default DemoParallxJs
