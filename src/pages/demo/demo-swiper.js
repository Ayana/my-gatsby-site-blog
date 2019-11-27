import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Swiper from 'react-id-swiper'
import 'swiper/swiper.scss'

import styled from "styled-components"

const StyledSwiper = styled.div`
	.swiper-wrapper {
		margin-bottom: 1em;
		.swiper-slide {
			background: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 250px;
			width: 60%;
		}
	}
	.swiper-pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		.swiper-pagination-bullet {
			background: #222;
			border-radius: 2px;
			color: #fff;
			margin: 8px;
			padding: 2px 10px;
			cursor: pointer;
			transition: .3s;
			&:hover {
				opacity: 0.7;
			}
		}
		.swiper-pagination-bullet-active {
			background: #ccc;
		}
	}
`


const DemoSwiper = props => {
  const location = props.location
	const pageTitle = 'Demo Swiper'
	const pageSlug = 'demo-swiper'
 
	const menu = ['Slide1', 'Slide2', 'Slide3', 'Slide4', 'Slide5']
	const params = {
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (menu[index]) + '</span>';
			},
		}
	}

	return(
		<Layout location={location} slug={pageSlug}>
      <SEO title={pageTitle} />
				<div className="container">
					<h1>{pageTitle}</h1>
					<StyledSwiper>
						<Swiper {...params}>
							<div>Slide #1</div>
							<div>Slide #2</div>
							<div>Slide #3</div>
							<div>Slide #4</div>
							<div>Slide #5</div>
						</Swiper>
						<div class="swiper-pagination"></div>

					</StyledSwiper>

					<div style={{marginTop: '5em'}}>
						Refference<br /> 
						<a 
							className="hover"
							target="_blank" 
							rel="noopener noreferrer" 
							href="https://swiperjs.com/get-started/"
						>
							Swiper
						</a><br />
						<a 
							className="hover"
							target="_blank" 
							rel="noopener noreferrer" 
							href="https://react-id-swiper.ashernguyen.site/example/default"
						>
							react-id-swiper
						</a><br />
						<a 
							className="hover"
							target="_blank" 
							rel="noopener noreferrer" 
							href="https://codepen.io/ncer/pen/xpqemZ"
						>
							Swiper custom pagination
						</a>
					</div>
				</div>
    </Layout>
	)
}


export default DemoSwiper