import React from 'react'
import styled from 'styled-components'

const StyledButtonLine = styled.div`
	.slideHoverBorder {
		margin-top: -3px;
		cursor: pointer;
		font-size: 0.9rem;
		padding: 12px 5px;
		vertical-align: middle;
		position: relative;
		&:after {
			content: '';
			position: absolute;
			z-index: -1;
			left: 0;
			right: 0;
			bottom: 0;
			background: #ccc;
			height: 2px;
		}
		&:before {
			content: '';
			position: absolute;
			z-index: 1;
			/* top: 0; */
			left: 0;
			right: 100%;
			bottom: 0;
			background: #56a397;
			height: 4px;
			/* transform: scaleX(0); */
			transform-origin: 0 50%;
			transition-property: right;
			transition-duration: 0.3s;
			transition-timing-function: ease-out;
		}
		&:hover {
			&:before {
				right: 0;
			}
		}
	}
`

const ButtonSlideLine = () => {
	return (
		<StyledButtonLine>
			<button className="slideHoverBorder">Hover Slide Line</button>
		</StyledButtonLine>
	)
}

export default ButtonSlideLine
