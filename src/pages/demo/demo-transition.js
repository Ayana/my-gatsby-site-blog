import React, { useState } from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Dialog from "../../components/demo/Dialog"
import styled from "styled-components"

const StyledTransition = styled.div`
	@media (min-width: 751px) {
	}
`

const DemoCSSTransition = props => {

  const location = props.location
  const pageTitle = "Demo Transition"
  const pageSlug = "demo-transition"


	return(
		<Layout location={location}>
      <SEO pageTitle={pageTitle} pageSlug={pageSlug} />
      <StyledTransition>
        <div className="container">
          <h1>{pageTitle}</h1>

						<h2>CSSTransition / Transition Group</h2>
						<div style={{margin: '2em 0 5em'}}>
							<Dialog />
						</div>

        </div>
      </StyledTransition>
    </Layout>
	)
}

export default DemoCSSTransition