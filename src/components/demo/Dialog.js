import React, { useState } from "react"
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import styled from "styled-components"

const StyledDialog = styled.div`
  .box {
		border: 1px solid #ccc;
		border-radius: 3px;
		padding: 1em 2em;
		background: #eaeaea;
		/* display: none; */
	}
	.alert-enter {
		opacity: 0;
		transform: scale(0.9);
	}
	.alert-enter-active {
		opacity: 1;
		transform: translateX(0); /* これがないとカクカクする */
		transition: opacity .3s, transform .3s;
	}
	.alert-exit {
		opacity: 1;
	}
	.alert-exit-active {
		opacity: 0;
		transform: scale(0.9); /* 閉じるときに少し小さく */
		transition: opacity .3s, transform .3s;
	}

`

const Dialog = () => {

	const [showButton, setShowButton] = useState(true)
	const [showMessage, setShowMessage] = useState(false)

	return(
		<StyledDialog>

			{showButton && (
				<button 
					type="button"
					className="button secondary"
					onClick={() => setShowMessage(true)}
				>
					Show Message {showMessage}
				</button>
			)}

			<CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
				<div
					className="box"
					onClose={() => setShowMessage(false)}
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
			</CSSTransition>
		</StyledDialog>
	)
}

export default Dialog