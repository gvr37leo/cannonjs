(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('cannon-es')) :
    typeof define === 'function' && define.amd ? define(['cannon-es'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CANNON));
}(this, (function (CANNON) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var CANNON__namespace = /*#__PURE__*/_interopNamespace(CANNON);

    function loop() {
        console.log('hello');
    }

    // const scene = new THREE.Scene()
    const world = new CANNON__namespace.World();
    var cube = new CANNON__namespace.Body({
        shape: new CANNON__namespace.Box(new CANNON__namespace.Vec3(0.5, 0.5, 0.5)),
        mass: 5,
    });
    cube.position.set(0, 5, 0);
    world.addBody(cube);
    var plane = new CANNON__namespace.Body({
        shape: new CANNON__namespace.Plane(),
        mass: 0,
    });
    world.addBody(plane);
    // var cannonDebugRenderer = cannonDebugger(scene, world.bodies, {});
    loop();

})));
//# sourceMappingURL=library.js.map
