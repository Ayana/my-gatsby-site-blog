import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import styled from "styled-components"

const StyledTransition = styled.div`

	@media (max-width: 750px) {
		
	}
	@media (min-width: 751px) {
	}
`

const MicroAnimation = props => {

  const location = props.location
  const pageTitle = "Demo Micro Animations"
  const pageSlug = "demo-micro-animations"


	return(
		<Layout location={location}>
      <SEO pageTitle={pageTitle} pageSlug={pageSlug} />
      <StyledTransition>
        <div className="container">
          <h1>{pageTitle}</h1>

					{/* <div className="container">
						<section>
							<h2></h2>
							<div>
								
							</div>
						</section>


					</div> */}

        </div>
      </StyledTransition>
    </Layout>
	)
}

export default MicroAnimation