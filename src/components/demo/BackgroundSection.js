import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ bgImage, className }) => {
  return (
    <BackgroundImage
      Tag="div"
      className={className}
      objectFit="cover"
      fluid={bgImage}
    />
  )
}

export default BackgroundSection
