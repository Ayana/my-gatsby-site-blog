import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Instagram from '../../components/Instagram'


const DemoInstagramFeed = props => {
  const location = props.location
	return(
		<Layout location={location}>
      <SEO title="Demo Instagram Feed" />
				<div className="container">
					<h1>Demo Instagram Feed</h1>
					<Instagram />
				</div>
    </Layout>
	)
}


export default DemoInstagramFeed