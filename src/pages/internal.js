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
				<form name="request" method="post" netlify-honeypot="bot-field" data-netlify="true">
					<input type="hidden" name="form-name" value="request" />
					<div class="fields">
						<div class="field">
							<textarea name="message" rows="4" placeholder="Request message"></textarea>
						</div>
						<div class="field">
							<input type="email" name="email" placeholder="Email" />
						</div>
					</div>
					<div class="actions">
						<button type="submit">Send</button>
					</div>
				</form>
			</div>
		</Layout>
	)
}

export default Internal
