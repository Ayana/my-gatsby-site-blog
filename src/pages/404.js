import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

class NotFoundPage extends React.Component {
  render() {
    const pageTitle = '404: Not Found'
    const pageSlug = '404'

    return (
      <Layout location={this.props.location}>
        <SEO pageTitle={pageTitle} pageSlug={pageSlug} />
        <div className="container">
          <h1>{pageTitle}</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage
