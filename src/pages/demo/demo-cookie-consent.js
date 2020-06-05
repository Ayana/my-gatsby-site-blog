import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import ConsentWindow from '../../components/ConsentWindow'

const CookieConsent = (props) => {
	const location = props.location
	const pageTitle = 'Demo Cookie Consent'
	const pageSlug = 'demo-cookie-consent'

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<div className="container basic-link" style={{ marginTop: '5em' }}>
				<h1>{pageTitle}</h1>
				<p>Down below(Initial access only)</p>
				<p style={{ margin: '2rem 0 20rem' }}>
					Refference:
					<br />
					<a href="https://www.npmjs.com/package/react-cookie-consent" target="_blank" rel="noopener noreferrer">
						https://www.npmjs.com/package/react-cookie-consent
					</a>
				</p>
			</div>

			<ConsentWindow />
		</Layout>
	)
}

export default CookieConsent
