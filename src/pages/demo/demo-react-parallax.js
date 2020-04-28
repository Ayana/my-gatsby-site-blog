import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Banner from '../../components/demo/Banner'
import styled from 'styled-components'
import image from '../../assets/images/demo/bg-mountain.jpg'

const StyledReactParallax = styled.div`
	h1 {
		margin-bottom: 3rem;
	}
	.box {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const ReactParallax = (props) => {
	const location = props.location
	const pageTitle = 'Demo React Parallax'
	const pageSlug = 'demo-react-parallax'

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledReactParallax className="basic-link">
				<h1 className="container">{pageTitle}</h1>
				<Banner bgImage={image} height={400} />
				<div className="box" style={{ height: '400px' }}>
					content
				</div>
				<Banner bgImage={image} height={600} />
				<div className="box" style={{ height: '400px' }}>
					content
				</div>
				<Banner bgImage={image} height={400} />
				<div className="container" style={{ height: '200px', textAlign: 'left', padding: '3rem 0' }}>
					<p>
						Refference:
						<br />
						<a href="https://github.com/rrutsche/react-parallax#readme" target="_blank" rel="noopener noreferrer">
							https://github.com/rrutsche/react-parallax
						</a>
					</p>
				</div>
			</StyledReactParallax>
		</Layout>
	)
}
export default ReactParallax
