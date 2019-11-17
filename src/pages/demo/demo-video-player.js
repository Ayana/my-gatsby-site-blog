import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import App from '../../components/app/App'

const DemoVideoPlayer = props => {
  const location = props.location
	return(
		<Layout location={location}>
      <SEO title="Demo Video Player" />
				<div className="container">
					<h1>Demo Video Player</h1>
				</div>
				<App />
    </Layout>
	)
}


export default DemoVideoPlayer