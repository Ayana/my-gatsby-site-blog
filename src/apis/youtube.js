import axios from 'axios'

const KEY = 'AIzaSyBdO2Fz-5OKgNz1LVhSneB58617Rmvy35c'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 10,
		key: KEY
	}
})