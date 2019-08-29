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
          <h3
            style={{
              marginTop: '-1.6em',
              marginBottom: '1.5em',
              width: '5em',
            }}
          >
            <Link to={`/`}>
              <Logo />
            </Link>
          </h3>
        </div>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer style={{textAlign:'center',marginTop:'5em'}}>
          © {new Date().getFullYear()}
        </footer>
      </div>
    )
  }
}

export default Layout
