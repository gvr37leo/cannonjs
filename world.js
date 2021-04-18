
class Three{

    constructor(element){
        this.element = element
        this.init()
    }

    init(){

        // var width = this.element.clientWidth
        // var height = this.element.clientHeight
        var width = this.element.clientWidth
        var height = this.element.clientHeight

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 70, width / height, 0.1, 1000 );
        this.camera.position.copy(new THREE.Vector3(0,5,-40))
        this.camera.lookAt(new THREE.Vector3(0,0,0))

        this.renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.resize()
        this.element.appendChild(this.renderer.domElement);

        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.copy(new THREE.Vector3(0,0,0));
        this.controls.update();
        

        let cubeloader = new THREE.CubeTextureLoader()
        let texture = cubeloader.load([
            `./resources/cubemaps/parksummer/px.jpg`,
            `./resources/cubemaps/parksummer/nx.jpg`,
            `./resources/cubemaps/parksummer/py.jpg`,
            `./resources/cubemaps/parksummer/ny.jpg`,
            `./resources/cubemaps/parksummer/pz.jpg`,
            `./resources/cubemaps/parksummer/nz.jpg`,
        ],() => {
            this.renderer.render( this.scene, this.camera );
        })
        this.scene.background = texture
        


        


        let directionallight = new THREE.DirectionalLight('#fff', 1);
        directionallight.position.set(20, 100, 10);
        directionallight.target.position.set(0, 0, 0);
        directionallight.castShadow = true;
        directionallight.shadow.bias = -0.001;
        directionallight.shadow.mapSize.width = 2048;
        directionallight.shadow.mapSize.height = 2048;
        directionallight.shadow.camera.near = 0.5;
        directionallight.shadow.camera.far = 500.0;
        directionallight.shadow.camera.left = 40;
        directionallight.shadow.camera.right = -40;
        directionallight.shadow.camera.top = 40;
        directionallight.shadow.camera.bottom = -40;
        this.scene.add(directionallight);

        let ambientlight = new THREE.AmbientLight('#fff', 0.7);
        this.scene.add(ambientlight);



        

        window.addEventListener('resize', () => {
            this.resize()
        })
    }

    addCube(){
        var cube = new THREE.Mesh( 
            new THREE.BoxGeometry(1,1,1), 
            new THREE.MeshStandardMaterial( { color: 'red' } ) 
        );
        cube.position.set(0, 0, 0);
        cube.castShadow = true;
        cube.receiveShadow = true;
        this.scene.add(cube);
        return cube
    }

    addSphere(){
        var sphere = new THREE.Mesh(
            new THREE.SphereGeometry(0.5,32,32), 
            new THREE.MeshStandardMaterial( { color: 'red' } ) 
        );
        sphere.position.set(0, 0, 0);
        sphere.castShadow = true;
        sphere.receiveShadow = true;
        this.scene.add(sphere);
        return sphere
    }

    addPlane(){
        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100, 10, 10),
            new THREE.MeshStandardMaterial({
                color: 0xFFFFFF,
        }));
        plane.castShadow = false;
        plane.receiveShadow = true;
        plane.rotation.x = -Math.PI / 2;
        this.scene.add(plane);
        return plane
    }

    render(){
        this.renderer.render( this.scene, this.camera );
    }


    resize(){
        var width = this.element.clientWidth
        var height = this.element.clientHeight
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height, false);
    }
}