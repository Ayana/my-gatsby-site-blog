import React from "react"
import { Link } from "gatsby"
import Media from 'react-media';

import Logo from "../components/logo"
import Nav from "../components/nav"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              <div>
                <Nav />
                <h1
                  style={{
                    ...scale(1.5),
                    margin: "auto",
                    marginTop: rhythm(1.5),
                    paddingBottom: rhythm(1/2),
                    width: '4em',
                  }}
                >
                  <Link to={`/`}>
                    <Logo />
                  </Link>
                </h1>
              </div>
              ) : (
              <div>
                <Nav />
                <h1
                  style={{
                    ...scale(1.5),
                    margin: "auto",
                    marginTop: rhythm(1),
                    paddingBottom: rhythm(0.5),
                    width: '5em',
                  }}
                >
                  <Link to={`/`}>
                    <Logo />
                  </Link>
                </h1>                
              </div>
            )
          }
        </Media>
      )
    } else {
      header = (
        <div>
          <Nav />
          <div
            style={{
              marginTop: '-1.6em',
              marginBottom: '1.5em',
              width: '8em',
            }}
          >
            <Link to={`/`}>
              <Logo />
            </Link>
          </div>
        </div>
      )
    }
    return (
      <div>
        <header style={{
          margin: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1)} 0`,
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
