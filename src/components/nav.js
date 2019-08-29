import React from "react"
import { Link } from "gatsby"

class Nav extends React.Component {
  render() {
    return (
      <div>
				<nav style={{ margin: "auto", display: 'flex', justifyContent: 'flex-end',}}>
					<Link style={{ marginLeft: '1.5em', textAlign: 'center' }} to='/projects/'>
            Projects
					</Link>
					<Link style={{ marginLeft: '1.5em', textAlign: 'center' }} to='/blog/'>
            Blog
					</Link>
				</nav>
      </div>
    )
  }
}

export default Nav