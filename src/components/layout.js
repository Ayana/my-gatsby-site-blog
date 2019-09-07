import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Logo from "../components/logo"
import Nav from "../components/nav"

import { rhythm } from "../utils/typography"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
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
          <div
            style={{
              marginTop: '-1.6em',
              width: '8em',
            }}
          >
            <AniLink fade to={`/`}>
              <Logo />
            </AniLink>
          </div>
        </div>
      )
    }
    return (
      <div>
        <header style={{
          margin: `auto`,
          maxWidth: rhythm(26),
          padding: `${rhythm(1)} ${rhythm(1)} 0`,
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
