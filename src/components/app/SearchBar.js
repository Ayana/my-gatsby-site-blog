import React from 'react';
import styled from "styled-components"

const SearchStyle = styled.div`
  input {
    width: 100%;
    border: solid 1px #ddd;
    padding: 5px 10px;
    border-radius: 3px;
  }
  @media (min-width: #{$tablet-width}) {
  }
`

class SearchBar extends React.Component {
  state = { term: '' }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value 
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onFormSubmit(this.state.term)
  }

  render() { 
    return (
      <SearchStyle>
        <div className="search-bar ui segment" style={{marginTop: "2em"}}>
          <form className="ui search" onSubmit={this.onFormSubmit}>
            <div className="ui icon input fluid">
              <input 
                className="prompt" 
                type="text" 
                placeholder="Search videos..." 
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </div>

          </form>
        </div>
      </SearchStyle>
    )
  }
}
 
export default SearchBar;