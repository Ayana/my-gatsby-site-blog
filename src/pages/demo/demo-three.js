import React, { useEffect } from "react"
import * as THREE from "three"

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

const ThreeCube = () => {

  // const location = props.location
  // const pageTitle = "Demo 3D"
  // const pageSlug = "demo-3d"

  useEffect(() => {
    let scene, camera, renderer, cube;

    function init() {
      scene = new THREE.Scene();
      
      camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

      renderer = new THREE.WebGLRenderer({ antialias: true});
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      // Object setting
      const geometry = new THREE.BoxGeometry( 2, 2, 2 );
      // const texture = new THREE.TextureLoader().load('textures/crate.gif');
      const material = new THREE.MeshBasicMaterial({ wireframe: true })
      // const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
      cube = new THREE.Mesh( geometry, material );
      scene.add( cube );
      camera.position.z = 5;

    }


    // const animate = function () {
    function animate() {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };

    // WindowResizeOptimization
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }

    window.addEventListener('resize', onWindowResize, false)

    init();
    animate();
    
  })

  return (
      <div />
  )

}

export default ThreeCube