import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Logo from "../components/logo"
import styled from "styled-components"

const NavWrapper = styled.div`
  @media (min-width: 750px) {
    .navHover {
      position: relative;
      display: inline-block;
      text-decoration: none;
      height: 26px;
      &:after {
        position: absolute;
        bottom: -4px;
        left: 0;
        content: '';
        width: 100%;
        height: 1px;
        background: #444;
        transform: scale(0, 1);
        transform-origin: left top;
        transition: transform .3s;
      }
      &:hover:after {
        transform: scale(1, 1);
      }
    }
  }
`;


class Nav extends React.Component {
  render() {
    return (
      <NavWrapper>
        <div style={{display: 'flex', justifyContent: 'space-between',}}>
          <AniLink
            fade to={`/`} 
            duration={0.4}
            style={{
              marginTop: '-0.5em',
              width: '8em',
            }}>
            <Logo />
          </AniLink>
          <nav style={{ display: 'flex', justifyContent: 'flex-end',}}>
            <AniLink 
              className="navHover"
              fade 
              style={{ textAlign: 'center' }} 
              to='/projects/'
              duration={0.3}
            >
              Projects
            </AniLink>
            <AniLink 
              className="navHover"
              fade 
              style={{ marginLeft: '2em', textAlign: 'center' }} 
              to='/blog/' 
              duration={0.3}
            >
              Blog
            </AniLink>
          </nav>
        </div>
      </NavWrapper>
    )
  }
}

export default Nav