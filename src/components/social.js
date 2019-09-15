import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import twitter from '../../content/assets/social/ico_twitter.svg'
import instagram from '../../content/assets/social/ico_instagram.svg'
import linkedin from '../../content/assets/social/ico_linkedin.svg'
import github from '../../content/assets/social/ico_github.svg'
import styled from "styled-components"


const SocialWrapper = styled.div`
    @media (min-width: 750px) {
      .socialHover {
        &:hover {
          transform: translateY(-5px);
        }
      }
    },
  }
`;


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
    <SocialWrapper>
      <div style={{ margin: "auto", display: 'flex', justifyContent: 'center',}}>
        <a 
          className="socialHover"
          target="_blank" 
          rel="noopener noreferrer" 
          href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}>
          <img
            src={twitter}
            alt="Twitter"
            title="Twitter"
            style={{ width: '2em', height: '2em', margin: '0 10px', }}
          />
        </a>
        <a 
          className="socialHover"
          target="_blank" 
          rel="noopener noreferrer" 
          href={`https://instagram.com/${data.site.siteMetadata.social.instagram}`}>
          <img
            src={instagram}
            alt="Instagram"
            title="Instagram"
            style={{ width: '2em', height: '2em', margin: '0 10px', }}
          />
        </a>
        <a 
          className="socialHover"
          target="_blank" 
          rel="noopener noreferrer" 
          href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}>
          <img
            src={linkedin}
            alt="LinkedIn"
            title="LinkedIn"
            style={{ width: '2em', height: '2em', margin: '0 10px', }}
          />
        </a>
        <a 
          className="socialHover"
          target="_blank" 
          rel="noopener noreferrer" 
          href={`https://github.com/${data.site.siteMetadata.social.github}`}>
          <img
            src={github}
            alt="Github"
            title="Github"
            style={{ width: '2em', height: '2em', margin: '0 10px', }}
          />
        </a>
          
      </div>
    </SocialWrapper>
  )
}

export default Social

