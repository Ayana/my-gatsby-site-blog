import React, { useState } from 'react'
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

const MicroInterections = (props) => {
	const location = props.location
	const pageTitle = 'Demo Micro Interections'
	const pageSlug = 'demo-micro-interections'

	const [onHover, setOnHover] = useState(false)
	// console.log(hover)

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledWrap className="container">
				<div>
					<h1>{pageTitle}</h1>

					<p className="show-for-small-only">*This functions work only for desktop</p>

					<MoveOut className="demo-section">
						<p className="font-script">Hover me!</p>
						<button className="circle-move-out" onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
							<div className={`circle-outer ${onHover && 'zoomIn'}`}></div>
							{/* <div className="circle-outer zoomIn"></div> */}
							<div className="circle-inner"></div>
						</button>
					</MoveOut>

					<ButtonHover className="demo-section">
						<ButtonSlide />
						<ButtonSlideLine />
						<ButtonSlideLineBorder />
						<ButtonShutterOut />
					</ButtonHover>
				</div>
			</StyledWrap>
		</Layout>
	)
}

export default MicroInterections
