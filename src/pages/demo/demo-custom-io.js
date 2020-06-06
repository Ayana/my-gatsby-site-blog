// import React, { useRef, useState, useEffect } from 'react'
// import Layout from '../../components/Layout'
// import SEO from '../../components/SEO'
// import styled from 'styled-components'

// const StyledIntersection = styled.div`
// 	padding-bottom: 5rem;
// 	section {
// 		font-size: 5rem;
// 		font-family: 'Merriweather Sans', sans-serif;
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 		height: 100vh;
// 		transition: all 0.3s;
// 		&.active {
// 			background: #4eae8a;
// 			color: #fff;
// 		}
// 	}
// 	.ref {
// 		margin: 5rem 0 4rem;
// 	}
// `

// function useOnScreen(options) {
// 	const ref = useRef()
// 	const [isActive, setIsActive] = useState('')

// 	useEffect(() => {
// 		const observer = new IntersectionObserver(([entry]) => {
// 			setIsActive(entry.isIntersecting)
// 		}, options)

// 		if (ref.current) {
// 			observer.observe(ref.current)
// 		}

// 		return () => {
// 			if (ref.current) {
// 				observer.unobserve(ref.current)
// 			}
// 		}
// 	}, [ref, options])

// 	return [ref, isActive]
// }

// const Intersection = (props) => {
// 	const location = props.location
// 	const pageTitle = 'Demo Custoom Hooks Intersection Observer'
// 	const pageSlug = 'demo-custom-io'

// 	const rootMargin = '-400px'
// 	const [ref1, isActive1] = useOnScreen({ rootMargin: rootMargin })
// 	const [ref2, isActive2] = useOnScreen({ rootMargin: rootMargin })
// 	const [ref3, isActive3] = useOnScreen({ rootMargin: rootMargin })
// 	const [ref4, isActive4] = useOnScreen({ rootMargin: rootMargin })

// 	return (
// 		<Layout location={location}>
// 			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
// 			<StyledIntersection>
// 				<div className="basic-link">
// 					<div className="container-wide">
// 						<h1>{pageTitle}</h1>
// 					</div>

// 					<section ref={ref1} className={`section ${isActive1 ? 'active' : ''}`}>
// 						<span>First</span>
// 					</section>

// 					<section ref={ref2} className={`section ${isActive2 ? 'active' : ''}`}>
// 						<span>Second</span>
// 					</section>

// 					<section ref={ref3} className={`section ${isActive3 ? 'active' : ''}`}>
// 						<span>Third</span>
// 					</section>

// 					<section ref={ref4} className={`section ${isActive4 ? 'active' : ''}`}>
// 						<span>Fourth</span>
// 					</section>
// 					<div className="container">
// 						<p className="ref">
// 							Refference:
// 							<br />
// 							<a href="https://www.youtube.com/watch?v=QD4GcZJObXg" target="_blank" rel="noopener noreferrer">
// 								React and Intersection Observer(Youtube)
// 							</a>
// 						</p>
// 					</div>
// 				</div>
// 			</StyledIntersection>
// 		</Layout>
// 	)
// }

// export default Intersection
