import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../../apis/youtube'
import styled from "styled-components"

const AppStyle = styled.div`
  @media (min-width: 800px) {
    .row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1em;
      .detail {
        width: 66%;
      }
      .five {
        width: 30%;
      }
    }
  }
`

class App extends React.Component {

  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.onTermSubmit('cooking')
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() { 
    return (
      <AppStyle>
        <SearchBar onFormSubmit={this.onTermSubmit} />

        <div className="row">
          <div className="detail">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="five">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos} 
            />
          </div>
        </div>

      </AppStyle>
    );
  }
}
 
export default App;