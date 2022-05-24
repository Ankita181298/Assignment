import * as THREE from './three.js-master/three.js-master/build/three.module.js';
import {GLTFLoader} from './three.js-master/three.js-master/examples/jsm/loaders/GLTFLoader.js';

const canvas = document.querySelector('.webgl');
const scene = new THREE.Scene();

const loader = new GLTFLoader()
loader.load('assets/wraith.glb',function(glb){
    console.log(glb)
}, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) +"%loaded")
}, function(error){
    console.log("an error occured")
})

//boiler plate
const size ={
    width:window.innerWidth,
    height:window.innerWidth
}
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({
    color:0xFF0000
})
const boxMesh = new THREE.Mesh(geometry,material)
scene.add(boxMesh)
const camera = new THREE.PerspectiveCamera(75,size.width/size.height,0.1,100)
camera.position.set(0,1,2)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas:canvas
})
renderer.setSize(size.width,size.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enabled= true
renderer.gammaouput= true
renderer.render(scene,camera)