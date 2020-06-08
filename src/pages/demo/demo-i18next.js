import React, { Suspense } from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import styled from 'styled-components'
import TranslationList from '../../locales/en/translation'

// import { useTranslation } from 'react-i18next'
// import '../../components/i18next'

// import Misawaya from '../../assets/images/demo/misawaya.jpg'

const StyledWrap = styled.div`
	.nav {
		text-align: center;
		margin-bottom: 3rem;
		button {
			background: #ddd;
			border-radius: 3px;
			padding: 8px 30px;
			margin: 5px;
			cursor: pointer;
			&:hover {
				opacity: 0.7;
			}
		}
	}
`

function Translation({ location }) {
	const pageTitle = 'Demo i18next'
	const pageSlug = 'demo-i18next'

	// const [t, i18n] = useTranslation('translation', { useSuspense: false })
	// const changeLanguage = (lang) => {
	// 	i18n.changeLanguage(lang)
	// }

	console.log(TranslationList[0].description[1])

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Layout location={location}>
				<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
				<StyledWrap className="container basic-link">
					<div>
						<h1>{pageTitle}</h1>

						{/* <nav className="nav font-typewriter">
							<button onClick={() => changeLanguage('en')}>En</button>
							<button onClick={() => changeLanguage('ja')}>Ja</button>
						</nav> */}

						<div style={{ marginBottom: '5rem' }}>{/* <h2>{t('heading')}</h2>
							<div>{t('description.1')}</div>
							<div>{t('description.2')}</div> */}</div>

						<p>i18next didn't work well.... it was ok in development but got error during build</p>

						<p className="ref">
							Refference:
							<br />
							<a href="https://react.i18next.com/" target="_blank" rel="noopener noreferrer">
								react-i18next documentation
							</a>
							<br />
							<a href="https://www.youtube.com/watch?v=cHqxgLhOl5Y&t=1s" target="_blank" rel="noopener noreferrer">
								Multi-language Translate React JS APP with React Hook & I18NEXT(Youtube)
							</a>
						</p>
					</div>
				</StyledWrap>
			</Layout>
		</Suspense>
	)
}

export default Translation
