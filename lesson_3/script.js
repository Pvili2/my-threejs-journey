// script.js
import * as THREE from './threejs_libs/three.module.js';

console.log(THREE);

//create our first object

//1. Scene
const scene = new THREE.Scene();

// 2. Create an object
// Mesh: Ez egy geometriai háló ami két részből áll -> Geometry (pl kocka stb, hogy milyen alakzat), Material (színe, stílusa, fénye stb)

const geometry = new THREE.BoxGeometry(1,1,1); // méretei, magasság, szélesség, mélység
const material = new THREE.MeshBasicMaterial({color: "red"});
const mesh = new THREE.Mesh(geometry, material);
// add to the scene
scene.add(mesh);

// 3. Camera
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75,sizes.width / sizes.height, );
camera.position.z = 3;
camera.position.x = 2;
camera.position.y = 1;
scene.add(camera);

// 4. Renderer
// Ki rendereli a kijlezőre a scene-t a kamera szemszögéből, a canvasbe
const canvas = document.querySelector(".webgl")
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas,
})

renderer.setSize(sizes.width, sizes.height)
// render
renderer.render(scene, camera);