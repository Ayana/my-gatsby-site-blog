// import React, { useEffect } from "react"

// import * as THREE from 'three';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'


// import MODEL from "./../../assets/images/demo/Object.obj"

// // import { OBJLoader } from './jsm/loaders/OBJLoader.js';
// // import OBJLoader from 'three-obj-loader';
// // OBJLoader(THREE);

// // import Model from "./../../assets/images/demo/Object.obj"


// // export default class Flower extends Group {
// //   constructor() {
// //     const loader = new ObjectLoader();
    
// //     super();

// //     this.name = 'flower';

// //     const x = OBJLoader(THREE);
// //     const y = new THREE.OBJLoader();

// //     console.log(y.load)

// //     loader.load(MODEL, (mesh)=>{
// //       this.add(mesh);
// //     });
// //   }
// // }

// const ThreeModel = () => {

//   useEffect(() => {
//     let scene, camera, renderer;

//     function init() {
//       scene = new THREE.Scene();
// 			// scene.background = new THREE.Color(0xdddddd);
      
//       camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 1, 5000 );

// 			const light = new THREE.PointLight (0x404040,0.5);
// 			scene.add(light);

//       renderer = new THREE.WebGLRenderer({ antialias: true});
//       renderer.setSize( window.innerWidth, window.innerHeight );
//       document.body.appendChild( renderer.domElement );

//       // Object setting
//       // const geometry = new THREE.BoxGeometry( 2, 2, 2 );
//       // const material = new THREE.MeshBasicMaterial({ wireframe: true })

//       // cube = new THREE.Mesh( geometry, material );
//       // scene.add( cube );
//       // camera.position.z = 5;

// 			// Add a light
// 			// const light = new THREE.PointLight(0xFFFFFF, 1.4, 1000)
// 			// light.position.set(0,15,15);
// 			// scene.add(light);

// 			//Add model
// 			const loader = new THREE.OBJLoader();
// 			loader.load( 'http://localhost:8000/images/Object.obj', function(geometry) {
// 				// scene.add(object);
// 				// renderer.render(scene,camera);
// 			}, undefined, error => {
//           console.log(error);
//         }
// 			);

//     }


//     // const animate = function () {
//     // function animate() {
//     //   requestAnimationFrame( animate );
//     //   cube.rotation.x += 0.01;
//     //   cube.rotation.y += 0.01;
//     //   renderer.render( scene, camera );
//     // };

//     // WindowResizeOptimization
//     function onWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize( window.innerWidth, window.innerHeight );
//     }

//     window.addEventListener('resize', onWindowResize, false)

//     init();
//     // animate();
    
//   })
    

//   return (
//       <div />
//   )

// }

// export default ThreeModel