import React from "react"
import Nav from "../../components/Nav"
import SEO from "../../components/SEO"

import imageDemo from '../../assets/images/demo/img_demo2.jpg'

import styled from "styled-components"

const StyledParallax = styled.div`
	.wrapper {
		height: 100vh;  /* Required*/
		overflow-x: hidden;  /* Required*/
		overflow-y: auto;  /* Required*/
		perspective: 1px;  /* Required*/
		transform-style: preserve-3d;
		.header {
			padding-bottom: 4em;
		}
		.parallax-wrapper {
			width: 100%;  /* Required*/
			height: 70vh;
			transform-style: preserve-3d;  /* Required*/
			&::before {  /* Required*/
				content: "";
				width: 100%;
				height: 70vh;
				top: 0;
				left: 0;
				position: absolute;
				z-index: -1;
				transform: translateZ(-1px) scale(2);
				background-image: url(${imageDemo});
				background-size: cover;
				background-position: center;
				opacity: 0.6;
			}
		}
	}
`


const DemoParallaxCSS = () => {
	
	return (
		<StyledParallax>
			<SEO title="Demo React Reveal" />
			<div className="wrapper">

				<header>
					<div className="container">
						<div>
							<Nav />
						</div>
					</div>
				</header>


				<div className="header">
					<div className="container">
						<h1>Demo Parallax with Pure CSS</h1>
					</div>
				</div>

				<div className="container"  style={{zIndex: 2,}}>
					In all chaotic beauty lies a wounded work of art.
Beautiful but torn, wreaking havoc on my heart.
Camouflaged by insecurities, blinded by it all.
I love the way you sit there and barely notice me at all.
				</div>

				<div className="container" style={{zIndex: 2,position: 'relative',minHeight:'50vh'}}>
					<span 
						style={{ 
							display: 'inline-block', 
							width: '300px',
							height: '300px', 
							left: '80%',
							top: '20%',
							background: '#6bb1a5',
							borderRadius: '50%',
							opacity: '0.8',
							position: 'relative',
						}}>
					</span>
				</div>

				<div className="parallax-wrapper"></div>


				<div className="container" style={{zIndex: 2,position: 'relative',minHeight:'90vh'}}>
					<span 
						style={{ 
							display: 'inline-block', 
							width: '300px',
							height: '300px', 
							left: '-10%',
							top: '30%',
							background: '#6bb1a5',
							borderRadius: '50%',
							opacity: '0.8',
							position: 'relative',
							}}>
						</span>
				</div>

				<div className="container"  style={{zIndex: 2,}}>
					In all chaotic beauty lies a wounded work of art.
Beautiful but torn, wreaking havoc on my heart.
Camouflaged by insecurities, blinded by it all.
I love the way you sit there and barely notice me at all.
				</div>

				<div className="container" style={{zIndex: 2,}}>
					<div style={{marginTop: '15em'}}>
						Refference<br />
						<a 
							className="hover"
							target="_blank" 
							rel="noopener noreferrer" 
							href="https://codepen.io/keithclark/pen/JycFw"
						>
							Pure CSS Parallax
						</a><br/>
						<a 
							className="hover"
							target="_blank" 
							rel="noopener noreferrer" 
							href="hhttps://developers.google.com/web/updates/2016/12/performant-parallaxing"
						>
							Performant Parallaxing
						</a>
					</div>
				</div>

				<footer className="container" style={{
					textAlign:'center',
					fontSize: '0.9rem',
					width: '100%',
					margin: '15em auto 1em',
					}}>
					<span style={{ verticalAlign: '-0.18em'}}>&copy; </span>{new Date().getFullYear()}
				</footer>

			</div>
		</StyledParallax>
	)
}

export default DemoParallaxCSS
