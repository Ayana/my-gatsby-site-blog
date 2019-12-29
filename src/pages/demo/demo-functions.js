import React, { useState } from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import ButtonSlide from "../../components/demo/ButtonSlide"
import ButtonShutterOut from "../../components/demo/ButtonShutterOut"
import InputName from "../../components/demo/InputName"
import Increment from "../../components/demo/Increment"
import styled from "styled-components"

const StyledTransition = styled.div`
	.color-wheel {
		background: conic-gradient(
			red, yellow, lime, aqua, blue, magenta, red
		);
		width: 100px;
		height: 100px;
	}
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
							<h2>Intaractive display</h2>
							<InputName />
						</div>

						<div style={{marginTop: '5em'}}>
							<h2>Counter</h2>
							<Increment />
						</div>

						<div style={{marginTop: '5em'}}>
							<h2>Hover Animation</h2>
							<ButtonSlide />
						</div>

						<div style={{marginTop: '2em'}}>
							<ButtonShutterOut />
						</div>

						<div style={{marginTop: '5em'}}>
							<h2>Color Gradient</h2>
							<div className="color-wheel"></div>
						</div>

        </div>
      </StyledTransition>
    </Layout>
	)
}

export default Functions