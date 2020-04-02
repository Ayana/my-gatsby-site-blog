import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import styled from 'styled-components'

const StyledParallax = styled.div`
	.effect-wrap {
		max-height: 60vh;
		max-width: 100%;
		&.scroll-y {
			scroll-snap-type: y mandatory;
			overflow-y: scroll;
			margin-bottom: 5em;
		}
		&.scroll-x {
			scroll-snap-type: x mandatory;
			overflow-x: scroll;

			display: flex;

			section {
				min-width: 100%;
			}
		}
		section {
			font-size: 5rem;
			font-family: 'Merriweather Sans', sans-serif;
			display: flex;
			align-items: center;
			justify-content: center;

			height: 60vh;
			scroll-snap-align: start;
		}
		.first {
			background: #f25f5c;
		}
		.second {
			background: #ffe066;
		}
		.third {
			background: #247ba0;
		}
		.fourth {
			background: #70c1b3;
		}
	}
`

const DemoParallxJs = (props) => {
	const location = props.location
	const pageTitle = 'Demo Scroll Snap'
	const pageSlug = 'demo-scroll-snap'

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledParallax>
				<div className='container-wide'>
					<h1>{pageTitle}</h1>

					<h2>Scroll Y</h2>
					<div className='effect-wrap scroll-y'>
						<section className='first'>
							<span>First</span>
						</section>

						<section className='second'>
							<span>Second</span>
						</section>

						<section className='third'>
							<span>Third</span>
						</section>

						<section className='fourth'>
							<span>Fourth</span>
						</section>
					</div>

					<h2>Scroll X</h2>
					<div className='effect-wrap scroll-x'>
						<section className='first'>
							<span>First</span>
						</section>

						<section className='second'>
							<span>Second</span>
						</section>

						<section className='third'>
							<span>Third</span>
						</section>

						<section className='fourth'>
							<span>Fourth</span>
						</section>
					</div>
				</div>
			</StyledParallax>
		</Layout>
	)
}

export default DemoParallxJs
