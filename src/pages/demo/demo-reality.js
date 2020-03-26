import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import styled from 'styled-components'

// import MODEL from '../../assets/images/demo/model.usdz';
// import PREVIEW from '../../assets/images/demo/model.png';

const StyledReality = styled.div`
	@media (max-width: 750px) {
	}
	@media (min-width: 751px) {
	}
`

const Reality = (props) => {
	const location = props.location
	const pageTitle = 'Demo Reality'
	const pageSlug = 'demo-reality'

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledReality>
				<div className='container'>
					<h1>{pageTitle}</h1>

					<div className='container'>
						<section>{/* <a rel='ar' href={MODEL}>
								<img src={PREVIEW} />
							</a> */}</section>
					</div>
				</div>
			</StyledReality>
		</Layout>
	)
}

export default Reality
