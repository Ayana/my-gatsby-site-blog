import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Logo from "./Logo"
import styled from "styled-components"

const StyledNav = styled.div`
  .global-nav {
    display: flex;
    justify-content: space-between;
    .global-nav__logo {
      margin-top: -0.5em;
      width: 5em;
      @media (min-width: 750px) {
        width: 8em;
      }
    }
    .global-nav__list {
      display: flex;
      justify-content: flex-end;
      .global-nav__link {
        color: #444;
        text-align: center;
        margin-left: 0.8em;
        max-height: 50px;
        @media (min-width: 768px) {
          position: relative;
          display: inline-block;
          text-decoration: none;
          height: 26px;
          margin-left: 1.5em;
          &:after {
            position: absolute;
            bottom: -1px;
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
    }
  }
`;


class Nav extends React.Component {
  render() {
    return (
      <StyledNav>
        <div className="global-nav">
          <AniLink
            fade to={`/`} 
            duration={0.3}
            className="global-nav__logo"
          >
            <Logo />
          </AniLink>
          <nav className="global-nav__list">
            <AniLink 
              className="global-nav__link"
              fade 
              to='/projects/'
              duration={0.3}
            >
              Projects
            </AniLink>
            <AniLink 
              className="global-nav__link"
              fade 
              to='/blog/' 
              duration={0.3}
            >
              Blog
            </AniLink>
            <AniLink 
              className="global-nav__link"
              fade 
              to='/demo/' 
              duration={0.3}
            >
              Demo
            </AniLink>
          </nav>
        </div>
      </StyledNav>
    )
  }
}

export default Nav