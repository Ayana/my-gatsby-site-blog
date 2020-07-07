import React, {useState} from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import ButtonSlide from '../../components/demo/ButtonSlide'
import ButtonSlideLine from '../../components/demo/ButtonSlideLine'
import ButtonSlideLineBorder from '../../components/demo/ButtonSlideLineBorder'
import ButtonShutterOut from '../../components/demo/ButtonShutterOut'
import styled from 'styled-components'

const StyledWrap = styled.div`
	margin-bottom: 20rem !important;
	.demo-section {
		padding: 5rem 0;
		text-align: center;
		.font-script {
			font-size: 1.8rem;
		}
	}
	/* @media (max-width: 750px) {
	} */
`

const MoveOut = styled.div`
	.circle-move-out {
		cursor: pointer;
		margin: auto;
		width: 50px;
		height: 50px;
		position: relative;
		z-index: 1;
		.circle-outer {
			border: 2px solid #ff5454;
			border-radius: 50%;
			height: 100%;
			opacity: 0;
			width: 100%;
		}
		.circle-inner {
			background: #eb5151;
			border-radius: 50%;
			width: 30px;
			height: 30px;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			transition: 0.3s;
			&:hover {
				background: #ff5454;
			}
		}
		.zoomIn {
			animation: zoomIn 1.2s ease-out infinite;
		}
		@keyframes zoomIn {
			from {
				opacity: 0;
				transform: scale3d(0.5, 0.5, 0.5);
			}
			50% {
				opacity: 1;
			}
		}
	}
`

const Circle = styled.div`
	svg {
		width: 100px;
		cursor: pointer;
		circle {
			fill: none;
			stroke-width: 5;
			transform: rotate(-90deg);
			transform-origin: 50%;
			transform-box: fill-box;
			stroke-dasharray: 250;
			stroke-dashoffset: 250;
			transition: 0.5s;
			&:nth-child(1) {
				stroke: #ccc;
				stroke-dashoffset: 0;
			}
			&:nth-child(2) {
				stroke: #eb5151;
				stroke-dashoffset: 250;
			}
			&.LineAnime {
				animation: lineAnimation 2s linear forwards infinite;
				animation-delay: 0.1s;
			}
		}
	}
	@keyframes lineAnimation {
		0% {
			stroke-dashoffset: 250;
		}
		40% {
			stroke-dashoffset: 120;
			transform: rotate(-90deg);
		}
		100% {
			transform: rotate(270deg);
		}
	}
`

const ButtonHover = styled.div`
	@media (min-width: 751px) {
		display: flex;
		justify-content: space-between;
	}
	div {
		margin-bottom: 1.5rem;
		button {
			min-width: 160px;
		}
	}
`

const ButtonClose = styled.div`
	position: relative;
	@media (min-width: 751px) {
		.close__fixed {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			-webkit-backface-visibility: hidden;
			width: 4rem;
			height: 4rem;
			top: 2rem;
			.line {
				background: black;
				position: absolute;
				width: 4.5rem;
				height: 2px;
				transition: transform 0.3s;
				&.line--top {
					top: 5px;
					right: 0;
					transform-origin: top right;
					transform: rotate(-45deg);
				}
				&.line--bottom {
					bottom: 5px;
					right: 0;
					transform-origin: bottom right;
					transform: rotate(45deg);
				}
			}
			.text {
				opacity: 0;
				transition: opacity 0.3s;
				font-size: 1.1rem;
				font-weight: 300;
				letter-spacing: 0.05em;
				padding-top: 2px;
			}
			&:hover {
				.line {
					transform: rotate(0);
					height: 1px;
					width: 100%;
				}
				.text {
					opacity: 1;
				}
			}
		}
	}
`

const MicroInterections = (props) => {
	const location = props.location
	const pageTitle = 'Demo Micro Interections'
	const pageSlug = 'demo-micro-interections'

	const [onHover1, setOnHover1] = useState(false)
	const [onHover2, setOnHover2] = useState(false)
	// console.log(hover)

	// const welcome = document.querySelectorAll('svg circle')

	// for (let i = 0; i < welcome.length; i++) {
	// 	console.log(`Letter ${i} is ${welcome[i].getTotalLength()}`)
	// }
	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledWrap className="container basic-link">
				<div>
					<h1>{pageTitle}</h1>

					<p className="show-for-small-only">*This functions work only for desktop</p>

					<MoveOut className="demo-section">
						<p className="font-script">Hover me!</p>
						<button className="circle-move-out" onMouseEnter={() => setOnHover1(true)} onMouseLeave={() => setOnHover1(false)}>
							<div className={`circle-outer ${onHover1 && 'zoomIn'}`}></div>
							<div className="circle-inner"></div>
						</button>
					</MoveOut>

					<Circle className="demo-section">
						<svg onMouseEnter={() => setOnHover2(true)} onMouseLeave={() => setOnHover2(false)}>
							<circle cx="50" cy="50" r="25"></circle>
							<circle cx="50" cy="50" r="25" className={onHover2 && 'LineAnime'}></circle>
						</svg>
					</Circle>

					<ButtonHover className="demo-section">
						<ButtonSlide />
						<ButtonSlideLine />
						<ButtonSlideLineBorder />
						<ButtonShutterOut />
					</ButtonHover>

					<ButtonClose className="demo-section">
						<button className="close__fixed">
							<span className="line line--top"></span>
							<span className="text">CLOSE</span>
							<span className="line line--bottom"></span>
						</button>
					</ButtonClose>

					<p className="ref">
						Refference:
						<br />
						<a href="https://emilkowalski.github.io/css-effects-snippets/" target="_blank" rel="noopener noreferrer">
							CSSeffectsSnippets
						</a>
					</p>
				</div>
			</StyledWrap>
		</Layout>
	)
}

export default MicroInterections
