export class Entity{
    mesh
    body
}

export class Helper{

    entitys = []

    constructor(cannonworld,threejsscene){
        
    }


    addCube(size,pos){
        
        var body = new CANNON.Body({
            mass:0,
            material:new CANNON.Material(),
            shape:new CANNON.Box(
                new CANNON.Vec3(20, 0.01, 20)
            ),
        })

        var mesh = new THREE.Mesh( 
            new THREE.BoxGeometry(1,1,1), 
            new THREE.MeshStandardMaterial( { color: 'red' } ) 
        );
        mesh.position.set(0, 0, 0);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        var entity = new Entity()
        entity.body = body;
        entity.mesh = mesh;
        this.world.add(body)
        this.scene.add(mesh)
        this.entitys.push(entity)
        return entity
    }


    addEntity(mesh,body){

    }


    update(){
        //update the mesh pos,rot,scale of each entity
    }



}