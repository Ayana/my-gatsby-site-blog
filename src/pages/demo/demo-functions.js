import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import ConsentWindow from '../../components/ConsentWindow'
import InputName from '../../components/demo/InputName'
import Increment from '../../components/demo/Increment'
import styled from 'styled-components'

const StyledTransition = styled.div`
	.color-wheel {
		background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
		width: 100px;
		height: 100px;
	}
	@media (max-width: 750px) {
	}
	@media (min-width: 751px) {
	}
`
const MapIteration = styled.div`
	margin-top: 5rem;
	.list-items {
		display: inline-flex;
		margin: 1rem 0;
		/* flex-wrap: wrap; */
		.list-items__image {
			/* width: 50%; */
			img {
				margin-bottom: 0;
				height: 170px;
				object-fit: cover;
			}
		}
	}
`

const Functions = (props) => {
	const location = props.location
	const pageTitle = 'Demo Functions'
	const pageSlug = 'demo-functions'

	const numbers = [1, 2, 3, 4, 5]

	const listItems = numbers.map((number) => (
		<div className="list-items__image" key={number.toString()}>
			<img src={require(`./../../assets/images/demo/img_demo_${number}.jpg`)} alt="" />
		</div>
	))

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledTransition>
				<div className="container basic-link">
					<h1>{pageTitle}</h1>

					<div style={{ marginTop: '5em' }}>
						<h2>Intaractive display</h2>
						<InputName />
					</div>

					<div style={{ marginTop: '5em' }}>
						<h2>Counter</h2>
						<Increment />
					</div>

					<MapIteration>
						<h2>Map Iteration</h2>
						<div className="list-items">{listItems}</div>
						<p>
							Refference:
							<br />
							<a href="https://reactjs.org/docs/lists-and-keys.html" target="_blank" rel="noopener noreferrer">
								https://reactjs.org/docs/lists-and-keys.html
							</a>
						</p>
					</MapIteration>

					<div style={{ marginTop: '5em' }}>
						<h2>Color Gradient</h2>
						<div className="color-wheel"></div>
					</div>

					<div style={{ marginTop: '5em' }}>
						<h2>React Cookie Consent</h2>
						<p>Down below(Initial access only)</p>
						<p>
							Refference:
							<br />
							<a href="https://www.npmjs.com/package/react-cookie-consent" target="_blank" rel="noopener noreferrer">
								https://www.npmjs.com/package/react-cookie-consent
							</a>
						</p>
					</div>
				</div>
			</StyledTransition>
			<ConsentWindow />
		</Layout>
	)
}

export default Functions
