import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundSection from '../../components/demo/BackgroundSection'

const BackgroundImage = ({ location }) => {
	const pageTitle = 'Demo Background Image'
	const pageSlug = 'demo-background-image'

	useEffect(() => {
		const currentWidth = window.innerWidth
		const heroBG = document.querySelector('.hero-bg')
		const windowHeight = window.innerHeight
		heroBG.style.height = windowHeight + 'px'
		window.addEventListener('resize', function() {
			if (currentWidth !== window.innerWidth) {
				const windowHeight = window.innerHeight
				heroBG.style.height = windowHeight + 'px'
			}
		})
	})

	const { mobileImage, desktopImage } = useStaticQuery(graphql`
		query {
			mobileImage: file(relativePath: { eq: "images/demo/img-hero-small.jpg" }) {
				childImageSharp {
					fluid(quality: 80, maxWidth: 400) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
			desktopImage: file(relativePath: { eq: "images/demo/img-hero-medium.jpg" }) {
				childImageSharp {
					fluid(quality: 50, maxWidth: 1600) {
						...GatsbyImageSharpFluid_noBase64
					}
				}
			}
		}
	`)
	const sources = [
		mobileImage.childImageSharp.fluid,
		{
			...desktopImage.childImageSharp.fluid,
			media: `(min-width: 768px)`,
		},
	]

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<div className="container-wide">
				<h1>{pageTitle}</h1>
			</div>
			<BackgroundSection bgImage={sources} className="hero-bg fadein" />
		</Layout>
	)
}

export default BackgroundImage
