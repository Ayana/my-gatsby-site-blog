import React, {useEffect} from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import styled from 'styled-components'
import gsap from 'gsap'

const StyledWrap = styled.div`
	h1 {
		margin-bottom: 1em;
	}
	margin-bottom: 6em;
	.overlay {
		visibility: hidden;
		background: white;
		margin: 2em 0;
		height: 70vh;
		position: relative;
		width: 100%;
		.copy {
			z-index: 20;
			position: relative;
			mix-blend-mode: difference;
			height: 35vh;
			display: grid;
			place-items: center;
			div {
				width: 100%;
				.tl {
					color: white;
					height: 56px;
					position: relative;
					overflow: hidden;
					.tl__line {
						font-size: 2rem;
						position: absolute;
					}
				}
			}
		}
		.image {
			height: 35vh;
			bottom: 0;
			left: 0;
			position: absolute;
			width: 100%;
			.image__item {
				position: absolute;
				height: 100%;
				width: 33.333vw;
				background: #f1c5c5;
				bottom: 0;
				right: 0;
				@media (max-width: 680px) {
					width: 100%;
					right: 0;
				}
				&:nth-child(2) {
					right: 33.333%;
					background: #e5edb7;
					@media (max-width: 680px) {
						width: 100vw;
						top: 100%;
						right: 0;
					}
				}
				&:nth-child(3) {
					right: 66.666%;
					background: #8bcdcd;
					@media (max-width: 680px) {
						width: 100vw;
						top: 100%;
						right: 0;
					}
				}
			}
		}
		.top {
			height: 35vh;
			top: 0;
			left: 0;
			position: absolute;
			width: 100%;
			z-index: 8;
			.overlay-top {
				position: absolute;
				height: 100%;
				width: 33.333vw;
				background: black;
				bottom: 0;
				left: 0;
				right: 0;
				@media (max-width: 680px) {
					width: 100%;
				}
				&:nth-child(2) {
					left: 33.333%;
					@media (max-width: 680px) {
						display: none;
					}
				}
				&:nth-child(3) {
					left: 66.666%;
					@media (max-width: 680px) {
						display: none;
					}
				}
			}
		}
		.bottom {
			height: 35vh;
			bottom: 0;
			left: 0;
			position: absolute;
			width: 100%;
			z-index: 8;
			.overlay-bottom {
				position: absolute;
				height: 100%;
				width: 33.333vw;
				background: white;
				bottom: 0;
				right: 0;
				@media (max-width: 680px) {
					width: 100%;
					right: 0;
				}
				&:nth-child(2) {
					right: 33.333%;
					@media (max-width: 680px) {
						width: 100vw;
						top: 100%;
						right: 0;
					}
				}
				&:nth-child(3) {
					right: 66.666%;
					@media (max-width: 680px) {
						width: 100vw;
						top: 100%;
						right: 0;
					}
				}
			}
		}
	}
`

const GSAP = (props) => {
	const location = props.location
	const pageTitle = 'Demo GSAP'
	const pageSlug = 'demo-gsap'

	useEffect(() => {
		// prevents flashing text
		gsap.to('.overlay', 0, {css: {visibility: 'visible'}})

		// timeline
		const tl = gsap.timeline()

		// timeline animation
		tl.from('.tl__line', 1.8, {
			opacity: 0,
			y: 70,
			ease: 'power4.out',
			delay: 1,
			skewY: 5,
			stagger: {
				amount: 0.2,
			},
		})
			.to('.overlay-top', 1.6, {
				height: 0,
				ease: 'expo.inOut',
				delay: -1,
				stagger: 0.4,
			})
			.to('.overlay-bottom', 1.6, {
				width: 0,
				ease: 'expo.inOut',
				delay: -1,
				// stagger: 0.4,
			})
	}, [])

	// リサイズして500秒後に実行
	useEffect(() => {
		let timeoutId = null
		const resizeListener = () => {
			// setWidth(window.innerWidth)
			const x = window.matchMedia('(max-width: 668px)')
			clearTimeout(timeoutId)
			timeoutId = setTimeout(() => {
				if (x.matches) {
					console.log(window.innerWidth)
				}
			}, 500)
		}
		window.addEventListener('resize', resizeListener)

		return () => {
			window.addEventListener('resize', resizeListener)
		}
	}, [])

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledWrap>
				<div className='container'>
					<h1 className='headline'>{pageTitle}</h1>
				</div>

				<div className='overlay'>
					<div className='copy font-typewriter container'>
						<div>
							<div className='tl'>
								<span className='tl__line'>Tech x Design web developer.</span>
							</div>
							<div className='tl'>
								<span className='tl__line'>Technology for sustainable business. </span>
							</div>
							<div className='tl'>
								<span className='tl__line'>Design for effective interaction with people.</span>
							</div>
						</div>
					</div>

					<div className='top'>
						<div className='overlay-top'></div>
						<div className='overlay-top'></div>
						<div className='overlay-top'></div>
					</div>
					<div className='bottom'>
						<div className='overlay-bottom'></div>
						<div className='overlay-bottom'></div>
						<div className='overlay-bottom'></div>
					</div>
					<div className='image'>
						<div className='image__item'></div>
						<div className='image__item'></div>
						<div className='image__item'></div>
					</div>
				</div>
				<p className='basic-link container'>
					Refference:
					<br />
					<a href='https://www.youtube.com/watch?v=OIPgWIcEYHQ' target='_blank' rel='noopener noreferrer'>
						Awwwards Rebuilt Episode 1
					</a>
				</p>
			</StyledWrap>
		</Layout>
	)
}

export default GSAP
