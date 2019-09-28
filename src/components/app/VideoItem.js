import React from "react"
import styled from "styled-components"

const ItemStyle = styled.div`
	.item {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1em;
		cursor: pointer;
		transition: .3s;
		&:hover {
			opacity: 0.7;
		}
		.image {
			width: 35%;
			height: auto;
		}
		.content {
			width: 63%;
		}
	}
`

const VideoItem = ({ video, onVideoSelect }) => {

	return (
		<ItemStyle>
			<div onClick={() => onVideoSelect(video)} className="item">
				<img 
					alt={video.snippet.title}
					className="ui image"
					src={video.snippet.thumbnails.medium.url} 
				/>
				<div className="content">
					{video.snippet.title}
				</div>
			</div>
		</ItemStyle>
	)
}

export default VideoItem

