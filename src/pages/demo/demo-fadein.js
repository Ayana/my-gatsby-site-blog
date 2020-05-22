import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const StyledFadein = styled.div`
	.gallery-items {
		display: inline-flex;
		margin: 0;
		flex-wrap: wrap;
		.gallery-item {
			width: 33.333%;
			img {
				width: 100%;
				margin-bottom: 0;
			}
		}
	}
`

const Fadein = (props) => {
	const location = props.location
	const pageTitle = 'Demo Fadein'
	const pageSlug = 'demo-fadein'

	let gallery = []
	for (let i = 1; i < 10; ++i) {
		gallery.push(
			<div className="gallery-item" key={i.toString()}>
				<Fade delay={i * 150}>
					<img src={require(`./../../assets/images/demo/fadein/hero-img${i}.jpg`)} alt="" />
				</Fade>
			</div>
		)
	}

	return (
		<StyledFadein>
			{/* <div className="list-items">{listItems}</div> */}
			<div className="gallery-items">{gallery}</div>
		</StyledFadein>
	)
}

export default Fadein
