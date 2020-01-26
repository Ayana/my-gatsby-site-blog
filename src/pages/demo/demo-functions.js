import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import ButtonSlide from "../../components/demo/ButtonSlide"
import ButtonSlideLine from "../../components/demo/ButtonSlideLine"
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
	@media (max-width: 750px) {
		
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
						<p className="show-for-small-only">*This functions work only for desktop</p>
						<div className="hide-for-small-only">
							<div>
								<ButtonSlide />
							</div>

							<div style={{marginTop: '2em'}}>
								<ButtonSlideLine />
							</div>

							<div style={{marginTop: '2em'}}>
								<ButtonShutterOut />
							</div>
						</div>
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