import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Nav extends React.Component {
  render() {
    return (
      <div>
				<nav style={{ margin: "auto", display: 'flex', justifyContent: 'flex-end',}}>
					<AniLink fade style={{ marginLeft: '1.5em', textAlign: 'center' }} to='/projects/'>
            Projects
					</AniLink>
					<AniLink fade style={{ marginLeft: '1.5em', textAlign: 'center' }} to='/blog/'>
            Blog
					</AniLink>
				</nav>
      </div>
    )
  }
}

export default Nav