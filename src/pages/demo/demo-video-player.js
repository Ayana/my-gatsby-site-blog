import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import App from '../../components/app/App'

const DemoVideoPlayer = props => {
  const location = props.location
	const pageTitle = 'Demo Video Player'
	const pageSlug = 'demo-video-player'

	return(
		<Layout location={location}>
      <SEO pageTitle={pageTitle} pageSlug={pageSlug} />
				<div>
					<div className="container">
						<h1>{pageTitle}</h1>
					</div>
					<App />
				</div>
    </Layout>
	)
}


export default DemoVideoPlayer