import React from "react"
import Nav from "../components/nav"
import styled from "styled-components"
const LayoutWrapper = styled.div`
  @media (min-width: 750px) {
    header {
      padding: 1.5em;
    }
  }
  @media (max-width: 749px) {
    header {
      padding: 1.5em 0 1em;
    }
  }
`;


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
        <LayoutWrapper>
          <header>
            <div className="container">
              {header}
            </div>
          </header>
          <main>{children}</main>
          <footer className="container" style={{
            textAlign:'center',
            margin: `4em auto 1em`,
            }}>
            © {new Date().getFullYear()}
          </footer>
        </LayoutWrapper>
      </div>
    )
  }
}

export default Layout
