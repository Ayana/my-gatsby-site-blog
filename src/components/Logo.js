import React from "react"
import logo from '../assets/images/logo.svg'

class Logo extends React.Component {
  render() {
    return (
      <div>
        <img
          src={logo}
          alt="Ayaos"
        />
      </div>
    )
  }
}

export default Logo

