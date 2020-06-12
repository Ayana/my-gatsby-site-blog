import React, { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
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

const Intersection = ({ location }) => {
	const pageTitle = 'Demo Intersection Observer'
	const pageSlug = 'demo-intersection'

	useEffect(() => {
		const section = document.querySelectorAll('.section')

		const options = {
			//上にないと効かない
			root: null,
			// rootMargin: '-150px',
			threshold: 0.4,
		}
		const observer = new IntersectionObserver(inView, options)
		section.forEach((section) => {
			observer.observe(section)
		})

		function inView(entries) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('active')
				} else {
					entry.target.classList.remove('active')
				}
			})
		}
	}, [])

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledIntersection>
				<div className="basic-link">
					<div className="container-wide">
						<h1>{pageTitle}</h1>
					</div>

					<section className={`section`}>
						<span>First</span>
					</section>

					<section className={`section`}>
						<span>Second</span>
					</section>

					<section className={`section`}>
						<span>Third</span>
					</section>

					<section className={`section`}>
						<span>Fourth</span>
					</section>

					<div className="container">
						<p className="ref">
							Refference:
							<br />
							<a href="https://www.npmjs.com/package/react-intersection-observer" target="_blank" rel="noopener noreferrer">
								react-intersection-observer(Plugin)
							</a>
							<br />
							<a href="https://www.youtube.com/watch?v=gQ8WggeHoJU" target="_blank" rel="noopener noreferrer">
								IntersectionObserver API(For pure JavaScript)
							</a>
						</p>
					</div>
				</div>
			</StyledIntersection>
		</Layout>
	)
}

export default Intersection
