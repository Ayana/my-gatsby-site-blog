import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

// import MODEL from '../../assets/images/demo/model.obj';

const ThreeModel = (props) => {
	const location = props.location
	const pageTitle = 'Demo Three.js'
	const pageSlug = 'demo-three'

	let container, scene, camera, renderer

	function init() {
		container = document.querySelector('.scene')

		scene = new THREE.Scene()

		// Camera setting
		const fov = 35
		const aspect = container.clientWidth / container.clientHeight
		const near = 0.1
		const far = 500

		camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

		camera.position.set(-50, 40, 350)

		// Add light
		const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4)
		scene.add(ambientLight)

		// Renderer
		renderer = new THREE.WebGLRenderer({ antialias: true })
		renderer.setSize(container.clientWidth, container.clientHeight)
		renderer.setPixelRatio(window.devicePixelRatio)

		container.appendChild(renderer.domElement)

		// Load model
		// const loader = new OBJLoader()
		// loader.load(MODEL, function(object) {
		// 	scene.add(object)

		// 	renderer.render(scene, camera)
		// })
	}

	// init();

	return (
		<Layout location={location}>
			<SEO pageTitle={pageTitle} pageSlug={pageSlug} />
			<div className='container'>
				<h1>{pageTitle}</h1>
				<div className='' style={{ height: '300px', background: 'red' }}></div>
			</div>
		</Layout>
	)
}

export default ThreeModel

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

// const ThreeCube = () => {
//   // const location = props.location
//   // const pageTitle = "Demo 3D"
//   // const pageSlug = "demo-3d"

//   useEffect(() => {
//     let scene, camera, renderer, cube;

//     function init() {
//       scene = new THREE.Scene();

//       camera = new THREE.PerspectiveCamera(
//         75,
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000
//       );

//       renderer = new THREE.WebGLRenderer({ antialias: true });
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       document.body.appendChild(renderer.domElement);

//       // Object setting
//       const geometry = new THREE.BoxGeometry(2, 2, 2);
//       // const texture = new THREE.TextureLoader().load('textures/crate.gif');
//       const material = new THREE.MeshBasicMaterial({ wireframe: true });
//       // const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
//       cube = new THREE.Mesh(geometry, material);
//       scene.add(cube);
//       camera.position.z = 5;
//     }

//     // const animate = function () {
//     function animate() {
//       requestAnimationFrame(animate);
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     }

//     // WindowResizeOptimization
//     function onWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }

//     window.addEventListener('resize', onWindowResize, false);

//     init();
//     animate();
//   });

//   return <div />;
// };

// export default ThreeCube;
