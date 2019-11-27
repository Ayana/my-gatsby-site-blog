import React from "react"
import Nav from "./Nav"
import "../assets/scss/style.scss"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
          <Nav />
        </div>
      )
    } else {
      header = (
        <div>
          <Nav />
        </div>
      )
    }

    return (
      <div className="wrapper">
        <header>
          <div className="container">
            {header}
          </div>
        </header>
        <main>{children}</main>
        <footer className="container" style={{
          textAlign:'center',
          margin: `4em auto 0.8em`,
          fontSize: '0.9rem'
          }}>
          <span style={{ verticalAlign: '-0.18em'}}>&copy; </span>{new Date().getFullYear()}
        </footer>
      </div>
    )
  }
}

export default Layout
