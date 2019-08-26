import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import twitter from '../../content/assets/social/ico_twitter.svg'
import instagram from '../../content/assets/social/ico_instagram.svg'
import linkedin from '../../content/assets/social/ico_linkedin.svg'
import github from '../../content/assets/social/ico_github.svg'


const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
            instagram
            linkedin
            github
          }
        }
      }
    }
  `)

  return (
    <div style={{ margin: "auto", display: 'flex', justifyContent: 'center',}}>
      <a target="_blank" rel="noopener" href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}>
        <img
          src={twitter}
          alt="Twitter"
          style={{ width: '2em', height: '2em', margin: '0 5px', }}
        />
      </a>
      <a target="_blank" rel="noopener" href={`https://instagram.com/${data.site.siteMetadata.social.instagram}`}>
        <img
          src={instagram}
          alt="Instagram"
          style={{ width: '2em', height: '2em', margin: '0 5px', }}
        />
      </a>
      <a target="_blank" rel="noopener" href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}>
        <img
          src={linkedin}
          alt="LinkedIn"
          style={{ width: '2em', height: '2em', margin: '0 5px', }}
        />
      </a>
      <a target="_blank" rel="noopener" href={`https://github.com/${data.site.siteMetadata.social.github}`}>
        <img
          src={github}
          alt="Github"
          style={{ width: '2em', height: '2em', margin: '0 5px', }}
        />
      </a>
        
    </div>
  )
}

export default Social

