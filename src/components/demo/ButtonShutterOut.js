import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
	.slideHover {
		/* border: 1px solid #56a397; */
		background: #d7d7d7;
		cursor: pointer;
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
			content: '';
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: #56a397;
			border-radius: 3px;
			transform: scaleX(0);
			transform-origin: center;
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
`

const ButtonShutterOut = () => {
	return (
		<StyledButton>
			<button className="slideHover">Hover Shutter Out</button>
		</StyledButton>
	)
}

export default ButtonShutterOut
