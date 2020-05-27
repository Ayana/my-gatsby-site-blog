import React, { useState } from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Modal from '../../components/demo/Modal'
import styled from 'styled-components'
import Modal1 from '../../assets/images/demo/modal/modal-img1.jpg'
import Modal2 from '../../assets/images/demo/modal/modal-img2.jpg'
import Modal3 from '../../assets/images/demo/modal/modal-img3.jpg'

const StyledModal = styled.div`
	margin-bottom: 10rem;
	.item-lists {
		display: flex;
		justify-content: space-between;
		.item-list {
			position: relative;
			img {
				margin-bottom: 0;
			}
			.caption {
				cursor: pointer;
				opacity: 0;
				transition: 0.3s;
				position: absolute;
				left: 0;
				top: 0;
				background: rgba(0, 0, 0, 0.5);
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				.caption__head {
					color: #fff;
				}
				.caption__description {
					color: #fff;
				}
				&.is-active {
					opacity: 1;
				}
			}
		}
	}
	.modal {
		/* display: none; */
		opacity: 0;
		transition: opacity linear 0.15s;
		/* transition: all 0.3; */
		&.show {
			opacity: 1;
			transition: opacity linear 0.15s;
			/* display: block;
			animation-duration: 0.3s;
			animation-name: FadeIn; */
		}
		&.hide {
			opacity: 0;
			transition: opacity linear 0.15s;
			/* display: none;
			animation-duration: 2.3s;
			animation-name: FadeOut; */
		}
	}
	@keyframes FadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes FadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`

const Fadein = (props) => {
	const location = props.location
	const pageTitle = 'Demo Modal'
	const pageSlug = 'demo-modal'

	const [open, setOpen] = useState(false)

	const [captionShown, setCaptionShown] = useState(false)
	const [modalShown, setModalShown] = useState(false)

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<StyledModal>
				<div className="container">
					<div className="item-lists">
						<Modal />
						<div className="item-list">
							<img src={Modal1} alt="image1" />
							<div className={`caption ${captionShown ? 'is-active' : ''}`} onMouseEnter={() => setCaptionShown(true)} onMouseLeave={() => setCaptionShown(false)} onClick={() => setModalShown(!modalShown)}>
								<div className="caption__inner">
									<h3 className="caption__head">Image Title</h3>
									<p className="caption__description">Image Discription</p>
								</div>
							</div>
						</div>
						<div className="item-list">
							<img src={Modal2} alt="image2" />
						</div>
						<div className="item-list">
							<img src={Modal3} alt="image3" />
						</div>
					</div>
					{/* {modalShown && ( */}
					<div className={`modal ${modalShown ? 'show' : 'hide'}`}></div>
					{/* )} */}
				</div>
			</StyledModal>
		</Layout>
	)
}

export default Fadein
