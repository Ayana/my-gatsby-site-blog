import React, { useState } from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import ButtonSlide from "../../components/demo/ButtonSlide"
import ButtonShutterOut from "../../components/demo/ButtonShutterOut"
import InputName from "../../components/demo/InputName"
import Increment from "../../components/demo/Increment"
import styled from "styled-components"

const StyledTransition = styled.div`
	@media (min-width: 751px) {
	}
`

const Functions = props => {

  const location = props.location
  const pageTitle = "Demo Functions"
  const pageSlug = "demo-functions"


	return(
		<Layout location={location}>
      <SEO pageTitle={pageTitle} pageSlug={pageSlug} />
      <StyledTransition>
        <div className="container">
          <h1>{pageTitle}</h1>
          <h2></h2>

						<div style={{marginTop: '5em'}}>
							<InputName />
						</div>

						<div style={{marginTop: '5em'}}>
							<Increment />
						</div>

						<div style={{marginTop: '5em'}}>
							<ButtonSlide />
						</div>

						<div style={{marginTop: '2em'}}>
							<ButtonShutterOut />
						</div>

        </div>
      </StyledTransition>
    </Layout>
	)
}

export default Functions