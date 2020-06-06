import React, { useState } from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import InputName from '../../components/demo/InputName'
import Increment from '../../components/demo/Increment'
import SearchFunc from '../../components/demo/SearchFunc'
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

const SearchBar = styled.div`
	margin-top: 5rem;

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

	const [persons] = useState([
		{ name: 'Emiko', number: '00-0000-0000' },
		{ name: 'Perry', number: '00-0000-0000' },
		{ name: 'Mike', number: '00-0000-0000' },
		{ name: 'Tom', number: '00-0000-0000' },
		{ name: 'Lisa', number: '00-0000-0000' },
	])

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

					<SearchBar>
						<h2>Search Bar</h2>
						<SearchFunc persons={persons} />
						<p style={{ marginTop: '6rem' }}>
							Refference:
							<br />
							<a href="https://hackernoon.com/how-to-build-a-search-bar-in-react-with-react-hooks-o77l3yl7" target="_blank" rel="noopener noreferrer">
								How to Build a Search Bar in React with React Hooks
							</a>
						</p>
					</SearchBar>

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
				</div>
			</StyledTransition>
		</Layout>
	)
}

export default Functions
