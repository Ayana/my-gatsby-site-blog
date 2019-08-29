import Typography from "typography"
// import noriegaTheme from 'typography-theme-noriega'
import parnassusTheme from 'typography-theme-parnassus'
// import stAnnesTheme from 'typography-theme-st-annes'

parnassusTheme.overrideThemeStyles = () => {
  return {
    "a": {
      boxShadow: 'none',
      color: `#333`,
      textDecoration: 'none',
      transition: '.3s',
    },
    "a:hover": {
      color: '#82a8b3',
    },
    "a img": {
      transition: '.3s',
    },
    "a img:hover": {
      opacity: `0.8`,
    },
    // media query
    '@media (max-width: 750px)': {
      "html": {
        lineHeight: `1.5`,
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
