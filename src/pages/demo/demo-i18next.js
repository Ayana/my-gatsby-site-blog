import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import styled from 'styled-components'
// import objectsList from '../../utils/objectsList'

// import '../../components/i18next'
import {useTranslation} from 'react-i18next'

const StyledWrap = styled.div`
	.nav {
		text-align: center;
		margin-bottom: 3rem;
		/* button {
			background: #ddd;
			border-radius: 3px;
			padding: 8px 30px;
			margin: 5px;
			outline: none;
			cursor: pointer;
			&:hover {
				opacity: 0.7;
			}
			&.current {
				background: #afafaf;
			}
		} */
	}
`

function Translation({location}) {
	const pageTitle = 'Demo i18next'
	const pageSlug = 'demo-i18next'

	// const [currentLang, setCurrentLang] = useState()
	// const isLangEn = currentLang === 'en'

	const {t} = useTranslation()
	// const {t,i18n} = useTranslation('translation', {useSuspense: false})
	// function changeLanguage(lang) {
	// 	i18n.changeLanguage(lang)
	// 	setCurrentLang(lang)
	// }

	// 配列の取得
	// console.log(objectsList[0].description[1])

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledWrap className='container basic-link'>
				<div>
					<h1>{pageTitle}</h1>

					{/* <nav className='nav font-typewriter'>
						<button onClick={() => changeLanguage('en')} className={isLangEn ? 'current' : ''}>
							En
						</button>
						<button onClick={() => changeLanguage('ja')} className={!isLangEn ? 'current' : ''}>
							Ja
						</button>
					</nav> */}

					<div style={{marginBottom: '5rem'}}>
						<h2>{t('heading')}</h2>
						<div>{t('description.1')}</div>
						<div>{t('description.2')}</div>
					</div>

					<div style={{marginBottom: '5rem'}}>
						<p>Gatsby doesn't support Suspense yet so I had to remove Suspense code and add "useSuspense: false".</p>
						<p>
							Have to check this for warning
							<br />
							<a href='https://www.i18next.com/overview/configuration-options' target='_blank' rel='noopener noreferrer'>
								Configuration Options
							</a>
						</p>
						{/* <p>i18next didn't work well.... it was ok in development but got error during build</p> */}
					</div>

					<p className='ref'>
						Refference:
						<br />
						<a href='https://react.i18next.com/' target='_blank' rel='noopener noreferrer'>
							react-i18next documentation
						</a>
						<br />
						<a href='https://www.youtube.com/watch?v=cHqxgLhOl5Y&t=1s' target='_blank' rel='noopener noreferrer'>
							Multi-language Translate React JS APP with React Hook & I18NEXT(Youtube)
						</a>
					</p>
				</div>
			</StyledWrap>
		</Layout>
	)
}

export default Translation
