import React, {useState} from 'react'
import Nav from './Nav'
// import './i18next'
import '../assets/scss/styles.scss'

import './i18next'
import {useTranslation} from 'react-i18next'
import styled from 'styled-components'

const StyledWrap = styled.div`
	button {
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
	}
`

if (typeof window !== 'undefined') {
	// eslint-disable-next-line global-require
	require('smooth-scroll')('a[href*="#"]')
}

const Layout = ({location, children}) => {
	const rootPath = `${__PATH_PREFIX__}/`

	const [currentLang, setCurrentLang] = useState()
	const isLangEn = currentLang === 'en'

	const {i18n} = useTranslation()
	function changeLanguage(lang) {
		i18n.changeLanguage(lang)
		setCurrentLang(lang)
	}

	let header

	if (location.pathname === rootPath) {
		header = (
			<StyledWrap>
				<Nav isLangEn={isLangEn} changeLanguage={changeLanguage} />
			</StyledWrap>
		)
	} else {
		header = (
			<StyledWrap>
				<Nav isLangEn={isLangEn} changeLanguage={changeLanguage} />
			</StyledWrap>
		)
	}

	return (
		<div className='wrapper'>
			<header>
				<div className='container full'>{header}</div>
			</header>
			<main>{children}</main>
			{/* <i18n /> */}
			<footer
				className='container'
				style={{
					textAlign: 'center',
					margin: `4em auto 0.8em`,
					fontSize: '0.9rem',
				}}>
				<span style={{verticalAlign: '-0.18em'}}>&copy; </span>
				{new Date().getFullYear()}
			</footer>
		</div>
	)
}

export default Layout
