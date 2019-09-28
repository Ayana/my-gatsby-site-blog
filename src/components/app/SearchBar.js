import React from 'react';

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
    )
  }
}
 
export default SearchBar;