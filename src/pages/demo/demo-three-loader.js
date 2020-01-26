// import React, { useEffect } from "react"
// import * as THREE from "three"
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// // import OBJLoader from 'three-obj-loader';

// // import Object from "../../assets/images/demo/Object.obj"

// const Three = () => {

//   useEffect(() => {

//     // let scene, camera, renderer;

//     // function init() {


// 		// }


// 			// Create the Three.js Scene
// 			const scene = new THREE.Scene();

// 			// Create a new Perspective Camera
// 			const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
// 			camera.position.z = 25;

// 			// Create a Full Screen WebGL Renderer
// 			const renderer = new THREE.WebGLRenderer();
// 			renderer.setSize(window.innerWidth,window.innerHeight);
// 			document.body.appendChild(renderer.domElement);



// 		// Add a light
// 		const light = new THREE.PointLight(0xFFFFFF, 1.4, 1000)
// 		light.position.set(0,15,15);
// 		scene.add(light);

// 		const loader = new THREE.GLTFLoader();
// 		loader.load('images/scene.gltf'), gltf => {
// 			scene.add(gltf.scene);
// 			renderer.render(scene,camera);
// 		}

// 		// init();

// 		// function animate() {
// 		// 	renderer.render(scene,camera);
// 		// 	requestAnimationFrame(animate);
// 		// }

// 		// const geometry = new THREE.BoxGeometry( 2, 2, 2 );
// 		// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

// 		// const controls = new THREE.OrbitControls(camera, renderer.domElement);
// 		// controls.enableDamping = true;
// 		// controls.campingFactor = 0.25;
// 		// controls.enableZoom = true;


// 		// // Make sure the project is responsive based on window resizing
// 		// window.addEventListener('resize', () => {
// 		// 		renderer.setSize(window.innerWidth,window.innerHeight);
// 		// 		camera.aspect = window.innerWidth / window.innerHeight;

// 		// 		camera.updateProjectionMatrix();
// 		// })

// 		// const animation = function() {
// 		// 	requestAnimationFrame(animate);
// 		// 	controls.update();
// 		// 	renderer.render(scene, camera)
// 		// }


// 		// Add object
// 		// const objLoader = new THREE.OBJLoader();
// 		// objLoader.load(Object), function(object) {
// 		// 	object.position.y -= 60;
// 		// 	scene.add(object);
// 		// }

// 		// const 
// 		// const objLoader = new THREE.OBJLoader();
// 		// // loader.setPath(Object)
// 		// objLoader.load(Object, function(object) {
// 		// 	object.position.y -= 60;
// 		// 	scene.add(object);
// 		// })


// 		// Call this to render the entire scene
// 		// init();

// 	})
    

//   return (
//       <div />
//   )

// }

// export default Three