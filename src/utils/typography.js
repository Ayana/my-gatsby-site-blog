import Typography from "typography"
// import noriegaTheme from 'typography-theme-noriega'
import parnassusTheme from 'typography-theme-parnassus'
// import stAnnesTheme from 'typography-theme-st-annes'

parnassusTheme.overrideThemeStyles = () => {
  return {
    // Can add override styles here sample below

    // '@media (max-width: 749px)': {
    //   ".container": {
    //     padding: `0 1.5em`,
    //   },
    // },
    // '@media (min-width: 750px)': {
    //   ".container": {
    //     maxWidth: `840px`,
    //     margin: `auto`,
    //   },
    // },

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
