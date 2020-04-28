import React from "react"
import CookieConsent from 'react-cookie-consent'


const ConsentWindow = () => {
	return (
		<CookieConsent style={{ background: '#2B373B', fontFamily: 'sans-serif' }} buttonStyle={{ background: '#fff', fontSize: '14px', borderRadius: '1px', padding: '8px 15px', margin: '10px 15px' }}>
			Our website uses cookies to improve your experience. By browsing this website, you agree to our use of cookies.
		</CookieConsent>
	)
}

export default ConsentWindow