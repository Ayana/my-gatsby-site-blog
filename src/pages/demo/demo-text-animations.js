import React, { useState } from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import styled from "styled-components"

const DemoWrapper = styled.div`
.demo-section {
  margin-bottom: 4em;
}
.effect-wrap {
  margin: 2em 0;
}
.button {
	background: #333; 
  font-family: 'Bebas Neue', cursive;
  font-size: 1.5rem;
  outline: none;
	padding: 0.6em 1em;
	color: #fff;
	border: none;
	border-radius: 5px;
	width: 200px;
  transform: perspective(1px) translateZ(0);
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #3f3f3f;
    border-radius: 100%;
    transform: scale(0);
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:hover {
    opacity: 1;
    box-shadow: 2px 10px 16px rgba(0,0,0,0.15);
  }
  &:hover:before {
    transform: scale(2);
  }
}
/* demo-fade */
.demo-fade {
  font-size: 2.8rem;
  line-height: 1.2;
  margin-bottom: 0.4em;
  .fade-in {
    opacity:0;
    animation:fadeIn ease-in 1;
    animation-fill-mode:forwards;
    animation-duration:0.2s;
  }
  .fade-in.one {  animation-delay: 0.1s;}
  .fade-in.two {  animation-delay: .15s;}
  .fade-in.three {  animation-delay: .2s;}
  .fade-in.four{  animation-delay: .25s}
  .fade-in.five {  animation-delay: .3s;}
  .fade-in.six {  animation-delay: .35s;}
  .fade-in.seven {  animation-delay: .4s}
  .fade-in.eight {  animation-delay: .45s;}
  .fade-in.nine {  animation-delay: .5s;}
  .fade-in.ten {  animation-delay: .55s;}
  .fade-in.eleven {  animation-delay: .6s;}
  .fade-in.twelve {  animation-delay: .65s;}
  .fade-in.thirteen {  animation-delay: .7s;}
  .fade-in.fourteen {  animation-delay: .75s;}
  .fade-in.fifteen {  animation-delay: .8s;}
  .fade-in.sixteen {  animation-delay: .85s;}
  .fade-in.seventeen {  animation-delay: .9s;}
  .fade-in.eighteen {  animation-delay: .95s;}
  .fade-in.nineteen {  animation-delay: 1s;}
  .fade-in.twenty {  animation-delay: 1.05s;}
  .fade-in.twentyone {  animation-delay: 1.1s;}
  .fade-in.twentytwo {  animation-delay: 1.15s;}
  .fade-in.twentythree {  animation-delay: 1.2s;}
  .fade-in.twentyfour {  animation-delay: 1.25s;}
  .fade-in.twentyfive {  animation-delay: 1.3s;}
  .fade-in.twentysix {  animation-delay: 1.35s;}
  .fade-in.caption {
    color :#ec9862;
    animation-delay: 2.4s;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}

/* writing-effect */
.typewriter-effect {
  font-family: 'Contrail One', cursive;
  font-size: 2rem;
  overflow: hidden;
  white-space: nowrap;
  line-height: 1;
  width: 0;
  &.active {
    animation: typingEffect 3s steps(40), 
    blinkTextCursor .8s steps(40) infinite normal;
    width: 21em;
  }
}
@keyframes typingEffect {
  from {
    width: 0;
  }
  to {
    width: 21em;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right: 3px solid black;
  }
  to {
    border-right: transparent;
  }
}

`

const DemoFade = props => {

  const location = props.location
  const pageTitle = "Demo Fade Animation"
  const pageSlug = "demo-fade"

  const [state, setState] = useState('')
  const [text, setText] = useState('start')

  function handleClick() {
    setState(() => state ? '' : 'active')

    setText(() => !state ? 'hide' : 'start' )
    // if (text === 'show') {
    //   setText('hide')
    // } else {
    //   setText('show')
    // }
  }

	return(
		<Layout location={location}>
      <SEO pageTitle={pageTitle} pageSlug={pageSlug} />
      <DemoWrapper>
        <div className="container">
          <h1>{pageTitle}</h1>

          <section className="demo-section">
            <h2>Typewriter effect</h2>
            <div className="effect-wrap">
              <div className={`typewriter-effect ${state}`}>
                Thank you for coming! Here is a typewriter effect.
              </div>
            </div>
            <button
              className="hover button"
              type="button"
              onClick={handleClick}	
            >
              Click to {text}
            </button>
          </section>


          <section className="demo-section">
            <h2>Fade in Text</h2>
            <div className="font-script demo-fade">
              <p>
                <span className="fade-in one">T</span>
                <span className="fade-in two">h</span>
                <span className="fade-in three">a</span>
                <span className="fade-in four">n</span>
                <span className="fade-in five">k</span>
                <span className="fade-in six"> Y</span>
                <span className="fade-in seven">o</span>
                <span className="fade-in eight">u</span>
                <span className="fade-in nine"> f</span>
                <span className="fade-in ten">o</span>
                <span className="fade-in eleven">r</span>
                <span className="fade-in twelve"> C</span>
                <span className="fade-in thirteen">h</span>
                <span className="fade-in fourteen">e</span>
                <span className="fade-in fifteen">c</span>
                <span className="fade-in sixteen">k</span>
                <span className="fade-in seventeen">i</span>
                <span className="fade-in eighteen">n</span>
                <span className="fade-in nineteen">g</span>
                <span className="fade-in twenty"> m</span>
                <span className="fade-in twentyone">y</span>
                <span className="fade-in twentytwo"> D</span>
                <span className="fade-in twentythree">e</span>
                <span className="fade-in twentyfour">m</span>
                <span className="fade-in twentyfive">o</span>
                <span className="fade-in twentysix">!</span>
              </p>
              <p className="fade-in caption"> - Welcome!</p>

            </div>
          </section>

        </div>
      </DemoWrapper>
    </Layout>
	)
}

export default DemoFade