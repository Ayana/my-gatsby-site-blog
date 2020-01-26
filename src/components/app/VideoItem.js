import React from "react"
import styled from "styled-components"

const ItemStyle = styled.div`
  input {
    width: 100%;
    border: solid 1px #ddd;
    padding: 5px 10px;
    border-radius: 3px;
  }
	.item {
		font-size: 0.8rem;
		font-weight: bold;
		line-height: 1.5;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1.5em;
		cursor: pointer;
		transition: .3s;
		&:hover {
			opacity: 0.7;
		}
		.image {
			width: 35%;
			height: auto;
			margin-bottom: 0;
		}
		.content {
			width: 63%;
		}
	}
`

const VideoItem = ({ video, onVideoSelect }) => {

	return (
		<ItemStyle>
			<div role="link" onClick={() => onVideoSelect(video)} className="item" onKeyDown={() => onVideoSelect(video)} tabIndex={() => onVideoSelect(video)}>
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

