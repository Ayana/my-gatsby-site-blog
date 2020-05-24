import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

// Classの場合
// class Internal extends React.Component {
//   render() {
//     return (
// 			// location={this.props.location}の部分は、このページのlocationをLayoutコンポネントに渡している
//       <Layout location={this.props.location}>
//         <SEO title="Internal View" />
//         <div className="container">
//           <h1>Internal View</h1>
//         </div>
//       </Layout>
//     )
//   }
// }

// Functionの場合
const Internal = (props) => {
	const pageTitle = 'Internal View'
	const pageSlug = 'internal-view'

	return (
		<Layout location={props.location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<div className="container">
				<h1>{pageTitle}</h1>
				<form name="contact" method="POST" data-netlify="true">
					<p>
						<label>
							Your Name: <input type="text" name="name" />
						</label>
					</p>
					<p>
						<label>
							Your Email: <input type="email" name="email" />
						</label>
					</p>
					<p>
						<label>
							Your Role:{' '}
							<select name="role[]" multiple>
								<option value="leader">Leader</option>
								<option value="follower">Follower</option>
							</select>
						</label>
					</p>
					<p>
						<label>
							Message: <textarea name="message"></textarea>
						</label>
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
			</div>
		</Layout>
	)
}

export default Internal
