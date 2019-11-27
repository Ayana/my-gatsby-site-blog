import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

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
const Internal = props => {

  const pageTitle = 'Internal View'
  const pageSlug = 'internal-view'

  return (
    <Layout location={props.location}>
      <SEO pageTitle={pageTitle} pageSlug={pageSlug} />
      <div className="container">
        <h1>{pageTitle}</h1>
      </div>
    </Layout>
  )

}

export default Internal

