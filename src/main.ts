
import * as CANNON from 'cannon-es'
import cannonDebugger from 'cannon-es-debugger'
import * as THREE from 'three'
import {loop} from './utils'
import {ModelViewer} from './modelviewer'

// https://codepen.io/b29/pen/YzKGzMQ
var mv = new ModelViewer(document.body)

const world = new CANNON.World({
    allowSleep:true,
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
addCar()

loop((dt) => {
    dt = clamp(dt,1/200,1/20)
    world.step(dt)
    mv.render()
})

function clamp(val,min,max){
    return Math.min(Math.max(min,val),max)
}




function addCar(){
    // var world = this.world
    // var groundMaterial = new CANNON.Material("groundMaterial");
    // var wheelMaterial = new CANNON.Material("wheelMaterial");
    // var wheelGroundContactMaterial = window.wheelGroundContactMaterial = new CANNON.ContactMaterial(wheelMaterial, groundMaterial, {
    //     friction: 0.3,
    //     restitution: 0,
    //     contactEquationStiffness: 1000
    // });
    // world.addContactMaterial(wheelGroundContactMaterial);


    var chassisShape = new CANNON.Box(new CANNON.Vec3(1, 0.5, 2));
    var chassisBody = new CANNON.Body({ mass: 150 });
    chassisBody.addShape(chassisShape);
    chassisBody.position.set(0, 4, -6);
    chassisBody.angularVelocity.set(0, 0, 0);



    var options = {
        radius: 0.5,
        directionLocal: new CANNON.Vec3(0, -1, 0),
        suspensionStiffness: 30,
        suspensionRestLength: 0.3,
        frictionSlip: 5,
        dampingRelaxation: 2.3,
        dampingCompression: 4.4,
        maxSuspensionForce: 100000,
        rollInfluence:  0.01,
        axleLocal: new CANNON.Vec3(-1, 0, 0),
        chassisConnectionPointLocal: new CANNON.Vec3(0, 0, 0),
        maxSuspensionTravel: 0.3,
        customSlidingRotationalSpeed: -30,
        useCustomSlidingRotationalSpeed: true
    };

    var vehicle = new CANNON.RaycastVehicle({
        chassisBody: chassisBody,
        indexRightAxis: 0, // x
        indexUpAxis: 1, // y
        indexForwardAxis: 2, // z
    });

    options.chassisConnectionPointLocal.set(1, 0, 2);
    vehicle.addWheel(options);

    options.chassisConnectionPointLocal.set(-1, 0, 2);
    vehicle.addWheel(options);

    options.chassisConnectionPointLocal.set(1, 0, -2);
    vehicle.addWheel(options);

    options.chassisConnectionPointLocal.set(-1, 0, -2);
    vehicle.addWheel(options);

    vehicle.addToWorld(world);

    // var wheelBodies = [];
    // for(var i=0; i<vehicle.wheelInfos.length; i++){
    //     var wheel = vehicle.wheelInfos[i];
    //     var cylinderShape = new CANNON.Cylinder(wheel.radius, wheel.radius, wheel.radius / 2, 20);
    //     var wheelBody = new CANNON.Body({ mass: 1 });
    //     var q = new CANNON.Quaternion();
    //     q.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    //     wheelBody.addShape(cylinderShape, new CANNON.Vec3(), q);
    //     wheelBodies.push(wheelBody);
    //     // world.addBody(wheelBody)
    // }
    // world.addEventListener('postStep', function(){
    //     for (var i = 0; i < vehicle.wheelInfos.length; i++) {
    //         vehicle.updateWheelTransform(i);
    //         var t = vehicle.wheelInfos[i].worldTransform;
    //         wheelBodies[i].position.copy(t.position);
    //         wheelBodies[i].quaternion.copy(t.quaternion);
    //     }
    // });

    document.onkeydown = handler;
    document.onkeyup = handler;

    var maxSteerVal = 0.5;
    var maxForce = 1000;
    var brakeForce = 1000000;

    function handler(event){
        var up = (event.type == 'keyup');

        if(!up && event.type !== 'keydown'){
            return;
        }

        vehicle.setBrake(0, 0);
        vehicle.setBrake(0, 1);
        vehicle.setBrake(0, 2);
        vehicle.setBrake(0, 3);

        switch(event.keyCode){

        case 38: // forward
            vehicle.applyEngineForce(up ? 0 : -maxForce, 2);
            vehicle.applyEngineForce(up ? 0 : -maxForce, 3);
            break;

        case 40: // backward
            vehicle.applyEngineForce(up ? 0 : maxForce, 2);
            vehicle.applyEngineForce(up ? 0 : maxForce, 3);
            break;

        case 66: // b
            vehicle.setBrake(brakeForce, 0);
            vehicle.setBrake(brakeForce, 1);
            vehicle.setBrake(brakeForce, 2);
            vehicle.setBrake(brakeForce, 3);
            break;

        case 39: // right
            vehicle.setSteeringValue(up ? 0 : -maxSteerVal, 0);
            vehicle.setSteeringValue(up ? 0 : -maxSteerVal, 1);
            break;

        case 37: // left
            vehicle.setSteeringValue(up ? 0 : maxSteerVal, 0);
            vehicle.setSteeringValue(up ? 0 : maxSteerVal, 1);
            break;

        }
    }
}