import React from "react"
import Nav from "../../components/Nav"
import SEO from "../../components/SEO"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

// if (typeof window !== "undefined") {
//   // eslint-disable-next-line global-require
//   require("smooth-scroll")('a[href*="#"]')
// }

const DemoReveal = () => {

	const pageTitle = 'Demo Parallax with React Spring'
	const pageSlug = 'demo-parallax'

  let parallax

	return (
		<div className="wrapper">
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<Parallax pages={4} ref={ref => parallax = ref}>

				<ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#e2e2e2',opacity:'0.5' }} />
				<ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#e2e2e2',opacity:'0.5' }} />

        <header>
          <div className="container">
            <div>
							<Nav />
						</div>
          </div>
        </header>

        <main className="container">

					<h1>{pageTitle}</h1>

					<ParallaxLayer offset={0.3} speed={-0.1} style={{ justifyContent: 'center' }}>
						<span 
							style={{ 
								display: 'block', 
								width: '200px',
								height: '200px', 
								marginLeft: '80%',
								background: '#ccc',
								borderRadius: '50%',
								opacity: '0.8',
							}}>
						</span>
					</ParallaxLayer>

					<ParallaxLayer offset={0.5} speed={0.1} style={{  }}>
						<span 
							style={{ 
								display: 'block', 
								width: '300px',
								height: '300px', 
								marginLeft: '20%',
								background: '#6bb1a5',
								borderRadius: '50%',
								opacity: '0.8',
							}}>
						</span>
					</ParallaxLayer>

					<ParallaxLayer offset={1.2} speed={0.4} style={{  }}>
						<span 
							style={{ 
								display: 'block', 
								width: '200px',
								height: '200px', 
								marginLeft: '60%',
								background: '#ccc',
								borderRadius: '50%',
								opacity: '0.8',
							}}>
						</span>
					</ParallaxLayer>

					<ParallaxLayer offset={0.8} speed={0.4} style={{  }}>
						<span 
							style={{ 
								display: 'block', 
								width: '400px',
								height: '400px', 
								marginLeft: '40%',
								background: '#6bb1a5',
								borderRadius: '50%',
								opacity: '0.8',
							}}>
						</span>
					</ParallaxLayer>

					<ParallaxLayer offset={1.8} speed={0.4} style={{  }}>
						<span 
							style={{ 
								display: 'block', 
								width: '300px',
								height: '300px', 
								marginLeft: '10%',
								background: '#6bb1a5',
								borderRadius: '50%',
								opacity: '0.8',
							}}>
						</span>
					</ParallaxLayer>

					<ParallaxLayer offset={2} speed={0.8} style={{  }}>
						<span 
							style={{ 
								display: 'block', 
								width: '400px',
								height: '400px', 
								marginLeft: '20%',
								background: '#ccc',
								borderRadius: '50%',
								opacity: '0.8',
							}}>
						</span>
					</ParallaxLayer>


					<ParallaxLayer offset={2.8} speed={0.8} style={{  }}>
						<span 
							style={{ 
								display: 'block', 
								width: '500px',
								height: '500px', 
								marginLeft: '70%',
								background: '#6bb1a5',
								borderRadius: '50%',
								opacity: '0.8',
							}}>
						</span>
					</ParallaxLayer>

					<ParallaxLayer offset={3} speed={1.6} style={{  }}>
						<span 
							style={{ 
								display: 'block', 
								width: '150px',
								height: '150px', 
								marginLeft: '10%',
								background: '#ccc',
								borderRadius: '50%',
								opacity: '0.8',
							}}>
						</span>
					</ParallaxLayer>

					<ParallaxLayer
						offset={3.3}
						speed={0.1}
						onClick={() => parallax.scrollTo(0)}
						style={{ 
							display: 'flex', 
							alignItems: 'center', 
							justifyContent: 'center',
							cursor: 'pointer',
							background: '#7FCBC4',
							color: '#fff',
							width: '200px',
							height: '70px',
							borderRadius: '4px',
							position: 'relative',
						}}>
						Click to top
					</ParallaxLayer>

					<ParallaxLayer
						offset={3.6}
						speed={0.1}
						onClick={() => parallax.scrollTo(0)}
						style={{ 
							marginLeft: '10%',
						}}>
					<div>
						Refference<br /> 
						<a 
							className="hover"
							target="_blank" 
							rel="noopener noreferrer" 
							href="https://www.react-spring.io/docs/props/parallax"
						>
							react-spring
						</a>
					</div>
					</ParallaxLayer>

				</main>

				<ParallaxLayer offset={3} speed={1} factor={0.2}
					style={{ 
						height: '80px',
						display: 'flex',
						bottom: '75%',
					}}>
					<footer className="container" style={{
						textAlign:'center',
						fontSize: '0.9rem',
						width: '100%',
						}}>
						<span style={{ verticalAlign: '-0.18em'}}>&copy; </span>{new Date().getFullYear()}
					</footer>
				</ParallaxLayer>

			</Parallax>
		</div>
	)
}

export default DemoReveal
