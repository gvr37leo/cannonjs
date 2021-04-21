
import * as CANNON from 'cannon-es'
import cannonDebugger from 'cannon-es-debugger'
import * as THREE from 'three'
import {loop} from './utils'
import {ModelViewer} from './modelviewer'

var mv = new ModelViewer(document.body)

const world = new CANNON.World({
    gravity:new CANNON.Vec3(0,-10,0)
})
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
plane.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI / 2)
world.addBody(plane)
var cannonDebugRenderer = cannonDebugger(mv.scene, world.bodies, {});

loop((dt) => {
    world.step(dt)
    mv.render()
})




