import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import styled from 'styled-components'
import BG1 from '../../assets/images/demo/bg-forest.png'

const StyledParallax = styled.div`
	.effect-wrap {
		section {
			font-family: 'Merriweather Sans', sans-serif;
			position: relative;
		}
		.first {
			background-image: url('${BG1}');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: bottom;
			min-height: 150vh;
			@media (max-width: 750px) {
				min-height: 100vh;
			}
			.copy {
				font-size: 8rem;
				margin-top: 0.5em;
				text-align: center;
				@media (max-width: 750px) {
					font-size: 5rem;
				}
			}
		}
		.hello {
			color: #fff;
			font-size: 5rem;
			position: absolute;
			bottom: 10em;
			@media (max-width: 750px) {
				bottom: 5em;
				font-size: 4rem;
			}
		}
	}

`

const DemoParallxJs = (props) => {
	const location = props.location
	const pageTitle = 'Demo Vanilla JavaScript Parallax'
	const pageSlug = 'demo-parallax-js'

	useEffect(() => {
		window.addEventListener('scroll', function() {
			const target = document.querySelectorAll('.parallax')
			const YOffset = window.pageYOffset

			// var scrolled = window.pageYOffset
			// var rate = scrolled * 0.5
			// target.style.transform = 'translate3d(0, ' + rate + 'px, 0)'

			var index = 0,
				length = target.length

			for (index = 0; index < length; index++) {
				var pos = YOffset * target[index].dataset.rate

				if (target[index].dataset.direction === 'vertical') {
					target[index].style.transform = 'translate3d(0, ' + pos + 'px, 0)'
				} else {
					var posX = YOffset * target[index].dataset.ratex
					var posY = YOffset * target[index].dataset.ratey
					target[index].style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0)'
				}
			}

			// もしセクションが複数ある場合は、下記のように条件分岐して書く
			if (YOffset > 300) {
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
						<div className='copy parallax' data-rate='0.2' data-direction='vertical'>
							Parallax
						</div>
						<div className='hello parallax' data-ratey='1' data-ratex='1' data-direction='horizontal'>
							Hello
						</div>
					</section>
					{/* <div className='work code parallax' data-ratey='1' data-ratex='1' data-direction='horizontal'>
							Code
						</div> */}
				</div>
			</StyledParallax>
		</Layout>
	)
}

export default DemoParallxJs
