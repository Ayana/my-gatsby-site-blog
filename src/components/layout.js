import React from "react"
import { Link } from "gatsby"
import Media from 'react-media';

import Logo from "../components/logo"

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
              <h1
                style={{
                  ...scale(1.5),
                  margin: "auto",
                  marginTop: 0,
                  paddingBottom: rhythm(1/3),
                  width: '4em',
                }}
              >
                <Link to={`/`}>
                  <Logo />
                </Link>
              </h1>
              ) : (
              <h1
                style={{
                  ...scale(1.5),
                  margin: "auto",
                  marginTop: 0,
                  paddingBottom: rhythm(0.2),
                  width: '5em',
                }}
              >
                <Link to={`/`}>
                  <Logo />
                </Link>
              </h1>                
            )
          }
        </Media>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            marginBottom: '2em',
            width: '7em',
          }}
        >
          <Link to={`/`}>
            <Logo />
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
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
