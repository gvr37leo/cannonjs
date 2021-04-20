
// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
// import {loop} from '/utils.js'
// import {World} from '/world.js'
// import {PhysicsWorld} from '/physicsworld.js'
// import {Helper} from '/helper.js'


var timemultiplier = 1
var physicsworld = new PhysicsWorld()
var three = new Three(document.body)
physicsworld.init()
var cannonDebugRenderer = new THREE.CannonDebugRenderer(three.scene,physicsworld.world);

physicsworld.generatePyramid(5)
physicsworld.addCar()

// var fsxsphere = physicsworld.addSphere()
// fsxsphere.position.set(0,30,0)

// document.addEventListener('keydown',e => {
//     var fsxsphere = physicsworld.addCube(new CANNON.Vec3(0.5,0.5,0.5))
//     fsxsphere.position.set(Math.random() * 4,10,Math.random() * 4)
// })

loop((dt) => {
    dt = Math.min(dt,0.017)
    physicsworld.world.step(dt * timemultiplier)
    cannonDebugRenderer.update()
    three.render()
})



