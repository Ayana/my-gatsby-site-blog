/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ogp from '../../content/assets/img_ogp.jpg'

function SEO({ description, lang, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
          }
        }
      }
    `
  )

  const siteTitle = site.siteMetadata.title
  const metaTitle = title || siteTitle
  const siteDescription = description || site.siteMetadata.description
  const siteUrl = site.siteMetadata.siteUrl
  const siteAuthor = site.siteMetadata.author

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s - ${siteTitle}`}
      defaultTitle={siteTitle}
      >
        {/* General tags */}
        <meta name="image" content={ogp} />
        <meta name="description" content={siteDescription} />

        {/* OpenGraph tags */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:type" content="website" />

        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogp} />
        <meta property="og:description" content={siteDescription} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={siteAuthor} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:image" content={ogp} />
        <meta name="twitter:description" content={siteDescription} />
         
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" type="text/javascript" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
