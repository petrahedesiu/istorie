import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

export default class SceneInit {
    constructor(canvasId) {
        // NOTE: Core components to initialize Three.js app.
        this.scene = undefined;
        this.camera = undefined;
        this.renderer = undefined;

        // NOTE: Camera params;
        this.fov = 8;
        this.nearPlane = 0.0001;
        this.farPlane = 10;
        this.canvasId = canvasId;

        // NOTE: Additional components.
        this.clock = undefined;
        this.stats = undefined;
        this.controls = undefined;

        // NOTE: Lighting is basically required.
        this.ambientLight = undefined;
        this.directionalLight = undefined;
    }

    initialize() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            this.fov,
            window.innerWidth / window.innerHeight,
            0.0001,
            5
        );
        this.camera.position.z = 1;

        // NOTE: Specify a canvas which is already created in the HTML.
        const canvas = document.getElementById(this.canvasId);
        this.renderer = new THREE.WebGLRenderer({
            canvas,
            // NOTE: Anti-aliasing smooths out the edges.
            antialias: true,
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        document.body.appendChild(this.renderer.domElement);

        // this.clock = new THREE.Clock();
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        // this.stats = Stats();

        // ambient light which is for the whole scene
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
        this.ambientLight.castShadow = true;
        this.scene.add(this.ambientLight);

        // directional light - parallel sun rays
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1.9);
        this.directionalLight.castShadow = true;
        this.directionalLight.position.set(0, 30, 60);
        this.scene.add(this.directionalLight);

        // if window resizes
        window.addEventListener('resize', () => this.onWindowResize(), false);

        // NOTE: Load space background.
        this.loader = new THREE.TextureLoader();
        // this.scene.background = new THREE.Color('#0f3d47')

        const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
        const boxMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });

        // Create a box mesh and add it to the scene
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        this.scene.add(boxMesh);
        this.renderer.setClearColor(0x000000, 0);
    }

    animate() {
        // NOTE: Window is implied.
        window.requestAnimationFrame(this.animate.bind(this));
        this.render();
        // this.stats.update();
        this.controls.update();
    }

    render() {
        // NOTE: Update uniform data on each render.
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}