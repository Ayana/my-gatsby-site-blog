import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Logo from "../components/logo"

class Nav extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'space-between',}}>
        <AniLink
          fade to={`/`} 
          duration={0.3}
          style={{
            marginTop: '-0.5em',
            width: '8em',
          }}>
          <Logo />
        </AniLink>
				<nav style={{ display: 'flex', justifyContent: 'flex-end',}}>
					<AniLink 
            fade 
            style={{ marginLeft: '1.5em', textAlign: 'center' }} 
            to='/projects/'
            duration={0.2}
          >
            Projects
					</AniLink>
					<AniLink 
            fade 
            style={{ marginLeft: '1.5em', textAlign: 'center' }} 
            to='/blog/' 
            duration={0.2}
          >
            Blog
					</AniLink>
				</nav>
      </div>
    )
  }
}

export default Nav