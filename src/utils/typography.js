import Typography from "typography"
// import noriegaTheme from 'typography-theme-noriega'
import parnassusTheme from 'typography-theme-parnassus'
// import stAnnesTheme from 'typography-theme-st-annes'

parnassusTheme.overrideThemeStyles = () => {
  return {
    "body": {
      backgroundColor: `#f7f6f2`,
      color: `#444`,
      letterSpacing: '0.03em',
   },
    "::selection": {
      background: `#ebec60`,
    },
    "a": {
      boxShadow: 'none',
      color: `#444`,
      textDecoration: 'none',
      transition: '.3s',
    },
    // "a:hover": {
    //   color: '#82a8b3',
    // },
    "a img": {
      transition: '.3s',
    },
    "a img:hover": {
      opacity: `0.6`,
    },
    ".hover": {
      color: '#6bb1a5',
      cursor: 'pointer',
      transition: '.3s',
    },
    ".hover:hover": {
      opacity: `0.6`,
    },
    "main h1": {
      color: `#444`,
      marginTop: `0.5em`,
      fontSize: '3rem',
    },
    "main h2": {
      color: `#444`,
    },
    "main h3": {
      color: `#444`,
    },
    "iframe": {
      width: `100%`,
    },

    // media query
    '@media (max-width: 749px)': {
      "html": {
        lineHeight: `1.5`,
      },
      ".container": {
        padding: `0 1.5em`,
      },
    },
    '@media (min-width: 750px)': {
      ".container": {
        maxWidth: `840px`,
        margin: `auto`,
      },
    },

  }
}


// const typography = new Typography(noriegaTheme)
const typography = new Typography(parnassusTheme)
// const typography = new Typography(stAnnesTheme)
// const typography = new Typography

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
