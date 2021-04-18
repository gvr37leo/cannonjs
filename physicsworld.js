var TAU = Math.PI * 2

class PhysicsWorld{

    constructor(){

    }

    init(){
        this.world = new CANNON.World()
        this.world.gravity.set(0,-10,0);
        this.world.broadphase = new CANNON.NaiveBroadphase();
        this.world.solver.iterations = 50;
        this.world.defaultContactMaterial.contactEquationStiffness = 5e7;
        this.world.defaultContactMaterial.contactEquationRelaxation = 4;

        var plane = new CANNON.Body({
            mass:0,
            material:new CANNON.Material({
                friction:0
            }),
            // shape:new CANNON.Box(
            //     new CANNON.Vec3(20, 0.01, 20)
            // ),
            shape:new CANNON.Plane(),
        })
        plane.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),TAU * -0.25)
        plane.name = 'plane'
        this.world.addBody(plane)
    }

    addSphere(){
        var sphere = new CANNON.Body({
            mass:5,
            material:new CANNON.Material(),
            shape:new CANNON.Sphere(0.5)
        })
        sphere.name = 'sphere'
        this.world.addBody(sphere)
        return sphere
    }

    addCube(halfextents){
        var cube = new CANNON.Body({
            mass:5,
            material:new CANNON.Material(),
            shape:new CANNON.Box(halfextents)
        })
        cube.name = 'cube'
        this.world.addBody(cube)
        return cube
    }

    generatePyramid(rows){
        var blockwidth = 1
        var blockheight = 0.5
        
        var bricks = []
        for(var y = 0; y < rows; y++){

            var positions = this.spacing(rows - y,blockwidth,0.2)
            for(var j = 0; j < positions.length; j++){
                var cube = this.addCube(new CANNON.Vec3(blockwidth / 2,blockheight / 2,blockheight / 2))
                cube.position.set(positions[j],y * (blockheight + 0.00) + blockheight / 2,0)
                bricks.push(cube)
            }
        }

        return bricks;
    }

    spacing(blockcount,blockwidth,padding){
        var res = []
        var space = blockcount * blockwidth + (blockcount - 1) * padding
        var step = blockwidth + padding
        var currentpos = -(space / 2) + blockwidth / 2
        for(var i = 0; i < blockcount; i++){
            res.push(currentpos)
            currentpos += step
        }
        return res
    }

    addCar(){

    }
}