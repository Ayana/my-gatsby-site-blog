import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Fade from 'react-reveal/Fade';

const button = {
	background: '#333', 
	padding: '5px 15px',
	color: '#fff',
	border: 'none',
	borderRadius: '3px',
	width: '200px',
}

class DemoReveal extends React.Component {
	constructor(props) {
		super(props);
		this.state = { message: false };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({ message: !this.state.message });
	}
	render() {
		return (
			<Layout location={this.props.location}>
				<SEO title="Demo React Reveal" />
				<div className="container">
					<h1>Demo React Reveal</h1>
					<Fade left when={this.state.message}>
						<div style={{padding: '80px 0'}}>
							<p>Hello World!<br />
							This is demo for react reveal.</p>
						</div>
					</Fade>
					<button
						className="hover"
						style={button}
						type="button"
						onClick={this.handleClick}	
					>
						Click to { this.state.message ? 'hide' : 'show' }
					</button>

					<div style={{marginTop: '3em'}}>
						Refference<br />
						<a 
							className="hover"
							href="https://www.react-reveal.com/examples/" 
							target="_blank"
							rel="noopener noreferrer" 
						>
							React Reveal Examples
						</a>
					</div>
				</div>
			</Layout>			
		)
	}
}

// const DemoReveal = (props) => {
// 	const location = props.location
	
// 	return (
// 		<Layout location={location}>
//       <SEO title="Demo React Reveal" />
// 			<div className="container">
// 				<h1>Demo Reace Reveal</h1>
// 				<Fade left>
// 					<div>
// 						<p>Hello World</p>
// 						<p>This is demo for react reveal.</p>
// 					</div>
// 				</Fade>

// 			</div>
// 		</Layout>
// 	)
// }

export default DemoReveal
