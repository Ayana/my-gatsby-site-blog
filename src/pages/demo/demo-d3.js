import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Chart from '../../components/demo/Chart'
import styled from 'styled-components'

const StyledD3 = styled.div`
	.chart__item {
		margin-bottom: 2rem;
	}
	@media (max-width: 750px) {
	}
	@media (min-width: 751px) {
	}
`

const Functions = (props) => {
	const location = props.location
	const pageTitle = 'Demo D3'
	const pageSlug = 'demo-d3'

	const data1 = [12, 26, 6, 25, 35, 10, 20, 25, 35, 10, 20]
	const data2 = [15, 10, 20, 48, 12, 52, 52, 44, 5]
	const data3 = [12, 6, 6, 25, 19, 5, 12, 5, 64, 2]

	const w = 800
	const h = 300

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledD3>
				<div className="container">
					<h1>{pageTitle}</h1>

					<div className="chart">
						<div className="chart__item">
							<Chart data={data1} w={w} h={h} color="#ffd460" />
						</div>
						<div className="chart__item">
							<Chart data={data2} w={w} h={h} color="#f07b3f" />
						</div>
						<div className="chart__item">
							<Chart data={data3} w={w} h={h} color="#ea5455" />
						</div>
					</div>
				</div>
			</StyledD3>
		</Layout>
	)
}

export default Functions
