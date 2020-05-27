import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import Modal1 from '../../assets/images/demo/modal/modal-img1.jpg'
import styled from 'styled-components'

const StyledModal = styled.div`
	.item-box {
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
`
export default function ResponsiveDialog() {
	const [open, setOpen] = useState(false)
	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

	const [captionShown, setCaptionShown] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<StyledModal>
			<div className="item-box" onClick={handleClickOpen}>
				<img src={Modal1} alt="image1" />
				<div className={`caption ${captionShown ? 'is-active' : ''}`} onMouseEnter={() => setCaptionShown(true)} onMouseLeave={() => setCaptionShown(false)}>
					<div className="caption__inner">
						<h3 className="caption__head">Image Title</h3>
						<p className="caption__description">Image Discription</p>
					</div>
				</div>
			</div>
			<Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
				<h3>Image Title</h3>
				<div>text</div>
				<IconButton aria-label="close" onClick={handleClose}>
					×
				</IconButton>
			</Dialog>
		</StyledModal>
	)
}

// export default () => {
// 	return <div className="">Modal</div>
// }
