import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Nav extends React.Component {
  render() {
    return (
      <div>
				<nav style={{ margin: "auto", display: 'flex', justifyContent: 'flex-end',}}>
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