import React from "react"

const VideoItem = ({ video, onVideoSelect }) => {

	return (
		<div>
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
		</div>
	)
}

export default VideoItem

