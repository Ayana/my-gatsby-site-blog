import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Classの場合
class Internal extends React.Component {
  render() {
    return (
			// location={this.props.location}の部分は、このページのlocationをLayoutコンポネントに渡している
      <Layout location={this.props.location}> 
        <SEO title="Internal View" />
        <div className="container">
          <h1>Internal View</h1>
        </div>
      </Layout>
    )
  }
}

// Functionの場合
// const Internal = props => {
//     return (
//       <Layout location={props.location}>
//         <SEO title="Internal View" />
//         <div className="container">
//           <h1>Internal View</h1>
//         </div>
//       </Layout>
//     )

// }

export default Internal

