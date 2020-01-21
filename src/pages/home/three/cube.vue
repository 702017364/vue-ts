<template>
  <div ref="three"></div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Mixin from './mixin';
import * as THREE from 'three';

@Component
export default class ThreeCube extends Mixins(Mixin) {
  private _CAMERA_?: THREE.PerspectiveCamera;
  private _CUBE_?: THREE.Mesh;
  private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
  private scene: THREE.Scene = new THREE.Scene();

  private get camera(): THREE.PerspectiveCamera {
    const { _CAMERA_: camera } = this;
    if(camera) return camera;
    return this._CAMERA_ = new THREE.PerspectiveCamera(75, this.width / this.height, .1, 1000);
  }

  private get cube(): THREE.Mesh {
    const { _CUBE_: cube } = this;
    if(cube) return cube;
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffff55,
      // wireframe: true,
      // aoMapIntensity: 0.1,
      wireframeLinecap: 'round',
    });
    return this._CUBE_ = new THREE.Mesh(geometry, material);
  }

  mounted(): void {
    this.$nextTick(() => {
      const { three, renderer } = this;
      renderer.setSize(this.width, this.height);
      three.append(renderer.domElement);
      this.scene.add(this.cube);
      this.camera.position.z = 2;
      this.animate();
    });
  }

  animate(): void {
    const { rotation } = this.cube;
    requestAnimationFrame(this.animate);
    rotation.x += 0.01;
    rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}
</script>