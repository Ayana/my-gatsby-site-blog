import React from "react"
import Nav from "../components/nav"

import { rhythm } from "../utils/typography"


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
      <div>
        <header style={{
          margin: `auto`,
          maxWidth: rhythm(28),
          padding: `${rhythm(1)}`,
        }}
        >{header}</header>
        <main>{children}</main>
        <footer style={{
          textAlign:'center',
          maxWidth: rhythm(24),
          margin: `5em auto 1em`,
          }}>
          © {new Date().getFullYear()}
        </footer>
      </div>
    )
  }
}

export default Layout
