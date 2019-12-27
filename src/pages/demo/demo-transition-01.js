import React, { useState } from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import ButtonSlide from "../../components/demo/ButtonSlide"
import InputName from "../../components/demo/InputName"
import Increment from "../../components/demo/Increment"
import styled from "styled-components"
import { CSSTransition } from 'react-transition-group';

const StyledTransition = styled.div`
  .box {
		border: 1px solid #ccc;
		border-radius: 3px;
		padding: 1em 2em;
		background: #eaeaea;
		display: none;
	}
	@media (min-width: 751px) {
		.slideHover {
			/* border: 1px solid #56a397; */
			background: #d7d7d7;
			font-size: 0.9rem;
			position: relative;
			padding: 10px 15px;
			display: inline-block;
			vertical-align: middle;
			transform: perspective(1px) translateZ(0);
			box-shadow: 0 0 1px rgba(0, 0, 0, 0);
			position: relative;
			transition-property: color;
			transition-duration: 0.3s;
			&:before {
				content: "";
				position: absolute;
				z-index: -1;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: #56a397;
				border-radius: 3px;
				transform: scaleX(0);
				transform-origin: 0 50%;
				transition-property: transform;
				transition-duration: 0.3s;
				transition-timing-function: ease-out;
			}
			&:hover {
				color: #fff;
				&:before {
					transform: scaleX(1);
				}
			}
		}
	}
`

const DemoCSSTransition = props => {

  const location = props.location
  const pageTitle = "Demo CSSTransition"
  const pageSlug = "demo-csstransition"

	const [showButton, setShowButton] = useState(true)
	const [showMessage, setShowMessage] = useState(false)

	return(
		<Layout location={location}>
      <SEO pageTitle={pageTitle} pageSlug={pageSlug} />
      <StyledTransition>
        <div className="container">
          <h1>{pageTitle}</h1>
          <h2></h2>

						<button 
							type="button"
							className="button secondary"
							onClick={() => setShowMessage(true)}
						>
							Show Message {showMessage}
						</button>


						<div
							className="box"
							dismissible
						>
							<h3>
								Animated alert message
							</h3>
							<p>
								This alert message is being transitioned in and
								out of the DOM.
							</p>
							<button 
								className="button small close"
								onClick={() => setShowMessage(false)} 
							>
								Close
							</button>
						</div>


						<div style={{marginTop: '5em'}}>
							<InputName />
						</div>

						<div style={{marginTop: '5em'}}>
							<Increment />
						</div>

						<div style={{marginTop: '5em'}}>
							<ButtonSlide />
						</div>

        </div>
      </StyledTransition>
    </Layout>
	)
}

export default DemoCSSTransition