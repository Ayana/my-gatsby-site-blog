import React from 'react'
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

const Intersection = (props) => {
	const location = props.location
	const pageTitle = 'Demo React Intersection Observer'
	const pageSlug = 'demo-react-io'

	const THRESHOLD = [0.4]
	const [ref1, inView1] = useInView({
		threshold: THRESHOLD,
	})
	const [ref2, inView2] = useInView({
		threshold: THRESHOLD,
	})
	const [ref3, inView3] = useInView({
		threshold: THRESHOLD,
	})
	const [ref4, inView4] = useInView({
		threshold: THRESHOLD,
	})

	// For pure javascript
	// const options = {
	// 	root: null,
	// 	rootMargin: '-150px',
	// 	threshold: 0.4,
	// }
	// const section = document.querySelectorAll('.section')

	// const observer = new IntersectionObserver(beTouching, options)
	// section.forEach((section) => {
	// 	observer.observe(section)
	// })

	// function beTouching(entries) {
	// 	entries.forEach((entry) => {
	// 		if (entry.isIntersecting) {
	// 			// console.log(entry.target)
	// 			entry.target.classList.add('active')
	// 		} else {
	// 			entry.target.classList.remove('active')
	// 		}
	// 	})
	// }

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledIntersection>
				<div className="basic-link">
					<div className="container-wide">
						<h1>{pageTitle}</h1>
					</div>

					<section ref={ref1} className={`section ${inView1 ? 'active' : ''}`}>
						<span>First</span>
					</section>

					<section ref={ref2} className={`section ${inView2 ? 'active' : ''}`}>
						<span>Second</span>
					</section>

					<section ref={ref3} className={`section ${inView3 ? 'active' : ''}`}>
						<span>Third</span>
					</section>

					<section ref={ref4} className={`section ${inView4 ? 'active' : ''}`}>
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
