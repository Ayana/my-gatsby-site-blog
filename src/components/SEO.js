import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, pageTitle, pageSlug }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            author
          }
        }
      }
    `
  )

  const siteTitle = site.siteMetadata.title
  const metaTitle = pageTitle || siteTitle
  const siteDescription = description || site.siteMetadata.description
  const siteUrl = site.siteMetadata.siteUrl
  const ogpImage = site.siteMetadata.image
  const siteAuthor = site.siteMetadata.author


  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={pageTitle ? `%s - ${siteTitle}` : {siteTitle}}
      defaultTitle={siteTitle}
      >
        {/* General tags */}
        <meta name="image" content={siteUrl + ogpImage} />
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={`${pageTitle},${siteTitle}`} />

        {/* OpenGraph tags */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:type" content="website" />

        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={siteUrl + ogpImage} />
        <meta property="og:description" content={siteDescription} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={siteAuthor} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:image" content={siteUrl + ogpImage} />
        <meta name="twitter:description" content={siteDescription} />

        <body className={pageSlug} />
         
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
  pageTitle: PropTypes.string.isRequired,
}

export default SEO
