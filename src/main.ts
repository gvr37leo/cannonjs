
import * as CANNON from 'cannon-es'
// import cannonDebugger from 'cannon-es-debugger'
// import * as THREE from 'three'
import {loop} from './utils'
// const scene = new THREE.Scene()
const world = new CANNON.World()
var cube = new CANNON.Body({
    shape:new CANNON.Box(new CANNON.Vec3(0.5,0.5,0.5)),
    mass:5,
})
cube.position.set(0,5,0)
world.addBody(cube)

var plane = new CANNON.Body({
    shape:new CANNON.Plane(),
    mass:0,
})
world.addBody(plane)
// var cannonDebugRenderer = cannonDebugger(scene, world.bodies, {});

loop()




