import React from 'react'
import Nav from './Nav'
// import './i18next'
import '../assets/scss/styles.scss'

if (typeof window !== 'undefined') {
	// eslint-disable-next-line global-require
	require('smooth-scroll')('a[href*="#"]')
}

class Layout extends React.Component {
	render() {
		const { location, children } = this.props
		const rootPath = `${__PATH_PREFIX__}/`
		let header

		if (location.pathname === rootPath) {
			header = (
				<div>
					<Nav />
				</div>
			)
		} else {
			header = (
				<div>
					<Nav />
				</div>
			)
		}

		return (
			<div className="wrapper">
				<header>
					<div className="container full">{header}</div>
				</header>
				<main>{children}</main>
				<i18n />
				<footer
					className="container"
					style={{
						textAlign: 'center',
						margin: `4em auto 0.8em`,
						fontSize: '0.9rem',
					}}>
					<span style={{ verticalAlign: '-0.18em' }}>&copy; </span>
					{new Date().getFullYear()}
				</footer>
			</div>
		)
	}
}

export default Layout
