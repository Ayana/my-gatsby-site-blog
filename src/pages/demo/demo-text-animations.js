import React, { useState } from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import styled from 'styled-components'

import Welcome from '../../components/demo/Welcome'

const DemoWrapper = styled.div`
	.demo-section {
		margin-bottom: 6em;
	}
	.effect-wrap {
		margin: 2em 0;
	}
	.button {
		background: #333;
		font-family: 'Bebas Neue', cursive;
		font-size: 1.5rem;
		outline: none;
		padding: 0.6em 1em;
		color: #fff;
		border: none;
		border-radius: 5px;
		width: 200px;
		transform: perspective(1px) translateZ(0);
		position: relative;
		overflow: hidden;
		&:before {
			content: '';
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: #3f3f3f;
			border-radius: 100%;
			transform: scale(0);
			transition-property: transform;
			transition-duration: 0.3s;
			transition-timing-function: ease-out;
		}
		@media (max-width: 750px) {
			&:hover {
				opacity: 1;
				box-shadow: 2px 10px 16px rgba(0, 0, 0, 0.15);
			}
			&:hover:before {
				transform: scale(2);
			}
		}
	}
	/* demo-fade */
	.fade-effect {
		font-size: 2.8rem;
		line-height: 1.2;
		margin-bottom: 0.4em;
		.fade-in {
			opacity: 0;
		}
		@keyframes fadeIn {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
		&.active {
			.fade-in {
				animation: fadeIn ease-in 1;
				animation-fill-mode: forwards;
				animation-duration: 0.2s;
			}
			.fade-in.one {
				animation-delay: 0.1s;
			}
			.fade-in.two {
				animation-delay: 0.15s;
			}
			.fade-in.three {
				animation-delay: 0.2s;
			}
			.fade-in.four {
				animation-delay: 0.25s;
			}
			.fade-in.five {
				animation-delay: 0.3s;
			}
			.fade-in.six {
				animation-delay: 0.35s;
			}
			.fade-in.seven {
				animation-delay: 0.4s;
			}
			.fade-in.eight {
				animation-delay: 0.45s;
			}
			.fade-in.nine {
				animation-delay: 0.5s;
			}
			.fade-in.ten {
				animation-delay: 0.55s;
			}
			.fade-in.eleven {
				animation-delay: 0.6s;
			}
			.fade-in.twelve {
				animation-delay: 0.65s;
			}
			.fade-in.thirteen {
				animation-delay: 0.7s;
			}
			.fade-in.fourteen {
				animation-delay: 0.75s;
			}
			.fade-in.fifteen {
				animation-delay: 0.8s;
			}
			.fade-in.sixteen {
				animation-delay: 0.85s;
			}
			.fade-in.seventeen {
				animation-delay: 0.9s;
			}
			.fade-in.eighteen {
				animation-delay: 0.95s;
			}
			.fade-in.nineteen {
				animation-delay: 1s;
			}
			.fade-in.twenty {
				animation-delay: 1.05s;
			}
			.fade-in.twentyone {
				animation-delay: 1.1s;
			}
			.fade-in.twentytwo {
				animation-delay: 1.15s;
			}
			.fade-in.twentythree {
				animation-delay: 1.2s;
			}
			.fade-in.twentyfour {
				animation-delay: 1.25s;
			}
			.fade-in.twentyfive {
				animation-delay: 1.3s;
			}
			.fade-in.twentysix {
				animation-delay: 1.35s;
			}
			.fade-in.caption {
				color: #ec9862;
				animation-delay: 2.4s;
			}
		}
	}

	/* typewriter-effect */
	.typewriter-effect {
		font-family: 'Contrail One', cursive;
		font-size: 1.05rem;
		@media (min-width: 750px) {
			font-size: 2rem;
		}
		overflow: hidden;
		white-space: nowrap;
		line-height: 1;
		width: 0;
		&.active {
			animation: typingEffect 3s steps(40), blinkTextCursor 0.8s steps(40) infinite normal;
			@media (max-width: 750px) {
				width: 100%;
			}
			@media (min-width: 750px) {
				width: 21em;
			}
		}
	}
	@keyframes typingEffect {
		from {
			width: 0;
		}
		to {
			@media (max-width: 750px) {
				width: 100%;
			}
			@media (min-width: 750px) {
				width: 21em;
			}
		}
	}
	@keyframes blinkTextCursor {
		from {
			border-right: 3px solid black;
		}
		to {
			border-right: transparent;
		}
	}
	.handwriting-effect {
		.welcome-text {
			svg {
				fill: none;
				stroke: #231f20;
				stroke-miterlimit: 10;
				stroke-width: 2px;
			}
			path:nth-child(1) {
				stroke-dasharray: 604.5255737304688;
				stroke-dashoffset: 604.5255737304688;
			}
			path:nth-child(2) {
				stroke-dasharray: 168.1890411376953;
				stroke-dashoffset: 168.1890411376953;
			}
			path:nth-child(3) {
				stroke-dasharray: 234.04576110839844;
				stroke-dashoffset: 234.04576110839844;
			}
			path:nth-child(4) {
				stroke-dasharray: 156.92361450195312;
				stroke-dashoffset: 156.92361450195312;
			}
			path:nth-child(5) {
				stroke-dasharray: 202.04403686523438;
				stroke-dashoffset: 202.04403686523438;
			}
			path:nth-child(6) {
				stroke-dasharray: 282.1566467285156;
				stroke-dashoffset: 282.1566467285156;
			}
			path:nth-child(7) {
				stroke-dasharray: 168.1973114013672;
				stroke-dashoffset: 168.1973114013672;
			}
		}
		.active {
			path:nth-child(1) {
				animation: lineAnimation 2s ease forwards;
			}
			path:nth-child(2) {
				animation: lineAnimation 2s ease forwards 0.3s;
			}
			path:nth-child(3) {
				animation: lineAnimation 2s ease forwards 0.6s;
			}
			path:nth-child(4) {
				animation: lineAnimation 2s ease forwards 0.9s;
			}
			path:nth-child(5) {
				animation: lineAnimation 2s ease forwards 1.2s;
			}
			path:nth-child(6) {
				animation: lineAnimation 2s ease forwards 1.5s;
			}
			path:nth-child(7) {
				animation: lineAnimation 2s ease forwards 1.8s;
			}
		}

		@keyframes lineAnimation {
			from {
			}
			to {
				stroke-dashoffset: 0;
			}
		}
	}
`
// const welcome = document.querySelectorAll('.handwriting-effect path')

// for(let i = 0; i < welcome.length; i++) {
//   console.log(`Letter ${i} is ${welcome[i].getTotalLength()}`)
// }

const DemoFade = (props) => {
	const location = props.location
	const pageTitle = 'Demo Fade Animation'
	const pageSlug = 'demo-fade'

	const [stateHandwriting, setStateHandwriting] = useState('')
	const [textHandwriting, setTextHandwriting] = useState('start')

	function handleClickHandwriting() {
		setStateHandwriting(() => (stateHandwriting ? '' : 'active'))
		setTextHandwriting(() => (textHandwriting === 'start' ? 'hide' : 'start'))
	}

	const [stateTypewriter, setStateTypewriter] = useState('')
	const [textTypewriter, setTextTypewriter] = useState('start')

	function handleClickTypewriter() {
		setStateTypewriter(() => (stateTypewriter ? '' : 'active'))

		// setTextTypewriter(() => !textTypewriter ? 'hide' : 'start' )
		if (textTypewriter === 'start') {
			setTextTypewriter('hide')
		} else {
			setTextTypewriter('start')
		}
	}

	const [stateFade, setStateFade] = useState('')
	const [textFade, setTextFade] = useState('start')

	function handleClickFade() {
		setStateFade(() => (stateFade ? '' : 'active'))
		setTextFade(() => (textFade === 'start' ? 'hide' : 'start'))
	}

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<DemoWrapper>
				<div className='container basic-link'>
					<h1>{pageTitle}</h1>

					<section className='demo-section'>
						<h2>Handwriting effect</h2>
						<div className='effect-wrap'>
							<div className='handwriting-effect'>
								<div className={`welcome-text ${stateHandwriting}`}>
									<Welcome />
								</div>
							</div>
						</div>
						<button className='hover button' type='button' onClick={handleClickHandwriting}>
							Click to {textHandwriting}
						</button>

						<div>
							Refferece:
							<br />
							<a href='https://www.youtube.com/watch?v=vJNVramny9k'>SVG Animation With Text Tutorial</a>
						</div>
					</section>

					<section className='demo-section'>
						<h2>Typewriter effect</h2>
						<div className='effect-wrap'>
							<div className={`typewriter-effect ${stateTypewriter}`}>Thank you for coming! Here is a typewriter effect.</div>
						</div>
						<button className='hover button' type='button' onClick={handleClickTypewriter}>
							Click to {textTypewriter}
						</button>
					</section>

					<section className='demo-section'>
						<h2>Fade in Text</h2>
						<div className='effect-wrap'>
							<div className={`font-script fade-effect ${stateFade}`}>
								<p>
									<span className='fade-in one'>T</span>
									<span className='fade-in two'>h</span>
									<span className='fade-in three'>a</span>
									<span className='fade-in four'>n</span>
									<span className='fade-in five'>k</span>
									<span className='fade-in six'> y</span>
									<span className='fade-in seven'>o</span>
									<span className='fade-in eight'>u</span>
									<span className='fade-in nine'> f</span>
									<span className='fade-in ten'>o</span>
									<span className='fade-in eleven'>r</span>
									<span className='fade-in twelve'> v</span>
									<span className='fade-in thirteen'>i</span>
									<span className='fade-in fourteen'>s</span>
									<span className='fade-in fifteen'>i</span>
									<span className='fade-in sixteen'>t</span>
									<span className='fade-in seventeen'>i</span>
									<span className='fade-in eighteen'>n</span>
									<span className='fade-in nineteen'>g</span>
									<span className='fade-in twenty'> m</span>
									<span className='fade-in twentyone'>y</span>
									<span className='fade-in twentytwo'> d</span>
									<span className='fade-in twentythree'>e</span>
									<span className='fade-in twentyfour'>m</span>
									<span className='fade-in twentyfive'>o</span>
									<span className='fade-in twentysix'>!</span>
								</p>
								<p className='fade-in caption'> - Welcome!</p>
							</div>
						</div>
						<button className='hover button' type='button' onClick={handleClickFade}>
							Click to {textFade}
						</button>
					</section>
				</div>
			</DemoWrapper>
		</Layout>
	)
}

export default DemoFade
