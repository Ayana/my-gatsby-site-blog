import React, { useState, useEffect } from "react"
import * as THREE from "three"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import styled from "styled-components"

const StyledTransition = styled.div`

	@media (max-width: 750px) {
		
	}
	@media (min-width: 751px) {
	}
`

// class Three extends Component {
//   componentDidMount() {
//     // === THREE.JS CODE START ===
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
//     var renderer = new THREE.WebGLRenderer();
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     document.body.appendChild( renderer.domElement );
//     var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//     var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//     var cube = new THREE.Mesh( geometry, material );
//     scene.add( cube );
//     camera.position.z = 5;
//     var animate = function () {
//       requestAnimationFrame( animate );
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       renderer.render( scene, camera );
//     };
//     animate();
//     // === THREE.JS EXAMPLE CODE END ===
//   }
//   render() {
//     return (
//       <div />
//     )
//   }
// }

const Three = props => {

  const location = props.location
  const pageTitle = "Demo 3D"
  const pageSlug = "demo-3d"

  useEffect(() => {
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // Object setting
    const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;


    // const animate = function () {
    function animate() {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
    
  })

  return (
      <div />
  )
	// return (
	// 	<Layout location={location}>
  //     <SEO pageTitle={pageTitle} pageSlug={pageSlug} />
  //     <StyledTransition>
  //         <h1>{pageTitle}</h1>

	// 					<div />

  //     </StyledTransition>
  //   </Layout>
	// )
}

export default Three