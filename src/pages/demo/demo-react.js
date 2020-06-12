import React, { useEffect, useRef } from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import styled from 'styled-components'

const StyledWrap = styled.div`
	margin-bottom: 20rem !important;
	.demo-section {
		padding: 5rem 0;
		text-align: center;
	}
	/* @media (max-width: 750px) {
	} */
`

// Function for redirect
// const getRedirectLanguage = () => {
//   if (typeof navigator === `undefined`) {
//     return null
//   }

//   const browserLang =
//     navigator && navigator.language && navigator.language.split("-")[0]
//   if (!browserLang) return "ja"

//   switch (browserLang) {
//     case "ja":
//       return "jp"
//     default:
//       return ""
//   }
// }

function FocusInput({ location }) {
	const pageTitle = 'Demo Next'
	const pageSlug = 'demo-next'

	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	// Code for switch language
	// useEffect(() => {
	//   const urlLang = getRedirectLanguage()

	//   navigate(`/${urlLang}`)
	// }, [])

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledWrap className="container basic-link">
				<div>
					<h1>{pageTitle}</h1>
					<h2>useRef() sample</h2>
					<input ref={inputRef} type="text" />

					<p style={{ marginTop: '5rem' }}>Will try this next</p>
					<p className="ref">
						Refference:
						<br />
						<a href="https://www.iamtimsmith.com/blog/lets-build-a-search-bar-in-react/" target="_blank" rel="noopener noreferrer">
							Let's build a search bar in React!
						</a>
					</p>
				</div>
			</StyledWrap>
		</Layout>
	)
}

export default FocusInput
