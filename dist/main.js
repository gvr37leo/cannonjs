import * as CANNON from 'cannon-es';
import cannonDebugger from 'cannon-es-debugger';
import * as THREE from 'three';
import { loop } from './utils';
const scene = new THREE.Scene();
const world = new CANNON.World();
var cube = new CANNON.Body({
    shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)),
    mass: 5,
});
cube.position.set(0, 5, 0);
world.addBody(cube);
var plane = new CANNON.Body({
    shape: new CANNON.Plane(),
    mass: 0,
});
world.addBody(plane);
var cannonDebugRenderer = cannonDebugger(scene, world.bodies, {});
loop();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sS0FBSyxNQUFNLE1BQU0sV0FBVyxDQUFBO0FBQ25DLE9BQU8sY0FBYyxNQUFNLG9CQUFvQixDQUFBO0FBQy9DLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBQzlCLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxTQUFTLENBQUE7QUFFNUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUE7QUFDL0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7QUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3ZCLEtBQUssRUFBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEQsSUFBSSxFQUFDLENBQUM7Q0FDVCxDQUFDLENBQUE7QUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7QUFFbkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3hCLEtBQUssRUFBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDeEIsSUFBSSxFQUFDLENBQUM7Q0FDVCxDQUFDLENBQUE7QUFDRixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3BCLElBQUksbUJBQW1CLEdBQUcsY0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRWxFLElBQUksRUFBRSxDQUFBIn0=