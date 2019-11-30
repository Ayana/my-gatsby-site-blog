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
 
	// let labels = ['Slide1', 'Slide2', 'Slide3', 'Slide4', 'Slide5']
	// const params = {
	// 	slidesPerView: 'auto',
	// 	spaceBetween: 30,
	// 	centeredSlides: true,
	// 	loop: true,
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable: true,
	// 		renderBullet: function (index, className) {
	// 			return '<span class="' + className + '">' + (labels[index]) + '</span>'
	// 		},
	// 	}
	// }


	const params = {
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			bulletElement: 'span',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		}
	}

	return(
		<Layout location={location} slug={pageSlug}>
      <SEO pageTitle={pageTitle} />
				<div className="container">
					<h1>{pageTitle}</h1>
					<StyledSwiper>
						<Swiper {...params}>
							<div data-name="test1">Slide #1</div>
							<div data-name="test2">Slide #2</div>
							<div data-name="test3">Slide #3</div>
							<div data-name="test4">Slide #4</div>
							<div data-name="test5">Slide #5</div>
						</Swiper>
						<div className="swiper-pagination"></div>

						※There's a bug on pagination

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