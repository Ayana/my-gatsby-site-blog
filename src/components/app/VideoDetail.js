import React from "react"

const VideoDetail = ({ video }) => {
	if (!video) {
		return (
			<div>
				
			</div>
		)
	}

	const videoSrc = 'https://www.youtube.com/embed/' + video.id.videoId  //Old version
	// const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`  //Template Literal

	return(
		<div>
			<div className="ui embed">
				<iframe src={videoSrc} />
			</div>
			<div>
				<a href={videoSrc}>
					<h3 
						className="ui header"
						style={{margin: '0 0 1em'}}
					>
						{video.snippet.title}
					</h3>
				</a>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	)
}


export default VideoDetail
