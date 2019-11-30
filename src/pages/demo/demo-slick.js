import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image1 from '../../assets/images/demo/img_slick_sample.png'

import styled from "styled-components"

const StyledSlick = styled.div`
	.slick-list {
		margin-bottom: 1em;
		.slick-slide {

			h3 {
				/* background: #5f9ea0; */
				color: #fff;
				font-size: 36px;
				line-height: 100px;
				margin: 10px auto;
				padding: 30px;
				position: relative;
				text-align: center;
				transition: .3s;
				@media (min-width: 768px) {
					padding: 50px;
				}
			}
		}
		.slick-center {
			h3 {
				transform: scale(1.2);
			}
		}
	}
	.slick-dots {
		display: flex;
		justify-content: space-between;
		@media (min-width: 768px) {
			max-width: 500px;
			margin: 0 auto 8em;
			position: inherit;
		}
		li {
			width: 16%;
			a {
				width: 100%;
			}
		}
		.slick-active {
			a {
				color: #ccc;
			}
		}
	}
	
	.slick-prev:before, .slick-next:before {
		color: #000;
	}
`


class DemoSlick extends React.Component {
	render() {

		const location = this.props.location
		const pageTitle = 'Demo React Slick'
		const pageSlug = 'demo-slick'

		let labels = ['Slide1', 'Slide2', 'Slide3', 'Slide4', 'Slide5']
    const settings = {
			customPaging: function(index) {
        return (
          <a>
            {labels[index]}
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb variable-width",
			className: "center",
      centerMode: true,
      infinite: true,
			centerPadding: "220px",
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
			responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerPadding: "120px"
          }
        },
        {
          breakpoint: 414,
          settings: {
            slidesToShow: 1,
            centerPadding: "70px"
          }
        },
      ]
    }

		return(
			<Layout location={location} slug={pageSlug}>
				<SEO pageTitle={pageTitle} />
					<div className="container">
						<h1>{pageTitle}</h1>
						<StyledSlick>
							<Slider {...settings}>
								<div>
									<h3><img src={image1} /></h3>
								</div>
								<div>
									<h3><img src={image1} /></h3>
								</div>
								<div>
									<h3><img src={image1} /></h3>
								</div>
								<div>
									<h3><img src={image1} /></h3>
								</div>
								<div>
									<h3><img src={image1} /></h3>
								</div>
							</Slider>
						</StyledSlick>

						<div style={{marginTop: '5em'}}>
							Refference<br /> 
							<a 
								className="hover"
								target="_blank" 
								rel="noopener noreferrer" 
								href="https://react-slick.neostack.com/"
							>
								react-slick
							</a>

						</div>
					</div>
			</Layout>
		)
	}
}


export default DemoSlick