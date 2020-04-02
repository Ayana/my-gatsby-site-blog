import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import styled from 'styled-components'

const StyledParallax = styled.div`
	.effect-wrap {
		/* scroll-snap-type: y mandatory;
		overflow-y: scroll; */
		/* height: 60vh; */
		/* max-height: 100vh; */
		section {
			font-size: 8rem;
			font-family: 'Merriweather Sans', sans-serif;

			height: 80vh;
			/* scroll-snap-align: start; */
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
		.parallax-section {
			.copy-box {
				display: flex;
				justify-content: center;
				align-items: middle;
				place-items: center;
				height: 60vh;
			}
		}
		.circle {
			width: 100px;
			height: 100px;
			position: absolute;
			top: 0;
			left: 0;
			background: black;
			border-radius: 50%;
		}
	}
	@media (max-width: 750px) {
	}
	@media (min-width: 751px) {
	}
`

const DemoParallxJs = (props) => {
	const location = props.location
	const pageTitle = 'Demo Vanilla JavaScript Parallax'
	const pageSlug = 'demo-parallax-js'

	useEffect(() => {
		window.addEventListener('scroll', function() {
			const target = document.querySelectorAll('.scroll')

			// var scrolled = window.pageYOffset
			// var rate = scrolled * 0.5
			// target.style.transform = 'translate3d(0, ' + rate + 'px, 0)'

			var index = 0,
				length = target.length

			for (index; 0, index < length; index++) {
				var pos = window.pageYOffset * target[index].dataset.rate

				if (target[index].dataset.direction === 'vertical') {
					target[index].style.transform = 'translate3d(0, ' + pos + 'px, 0)'
				} else {
					var posX = window.pageYOffset * target[index].dataset.ratex
					var posY = window.pageYOffset * target[index].dataset.ratey
					target[index].style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0)'
				}
			}
		})
	})

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledParallax>
				<div className='container-wide'>
					<h1>{pageTitle}</h1>
				</div>
				<div className='effect-wrap'>
					<section className='first'>
						<div className='parallax-section'>
							<div className='copy-box'>
								<span className='scroll' data-rate='-1' data-direction='vertical'>
									De
								</span>
								<span className='scroll' data-rate='1' data-direction='vertical'>
									sign
								</span>
							</div>
						</div>
						{/* <span className='scroll circle' data-ratey='1' data-ratex='2' data-direction='horizontal'></span> */}
					</section>

					<section className='second'></section>

					<section className='third'></section>

					<section className='fourth'></section>
				</div>
			</StyledParallax>
		</Layout>
	)
}

export default DemoParallxJs