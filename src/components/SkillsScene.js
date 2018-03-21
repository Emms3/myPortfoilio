import React, { PropTypes } from "react";
import { OrbitControls } from "three-orbitcontrols-ts";

import * as three from "three";

export default class SkillsScene extends React.Component {
	componentDidMount() {
		let { width, height } = this.props;

		let scene = new three.Scene(),
			camera = new three.PerspectiveCamera(75, width / height, 0.1, 1000),
			renderer = new three.WebGLRenderer();

		// renderer settings:
		renderer.setSize(width, height);
		renderer.setClearColor(0x2a2835, 1);
		// add renderer:
		this.refs.anchor.appendChild(renderer.domElement);

		// create shapes
		let innerSphere = new three.SphereGeometry(1, 32, 32),
			outterShpere = new three.SphereGeometry(2, 32, 32),
			innerSphereMaterial = new three.MeshBasicMaterial({
				wireframe: true
				// color: 0xa71d5d
			}),
			outterShpereMaterial = new three.MeshBasicMaterial({
				wireframe: true
				// color: 0xa71d5d
			}),
			innerSphereMesh = new three.Mesh(innerSphere, innerSphereMaterial),
			outterShpereMesh = new three.Mesh(
				outterShpere,
				outterShpereMaterial
			);

		scene.add(innerSphereMesh, outterShpereMesh);

		camera.position.z = 5;

		const controls = new OrbitControls(camera, renderer.domElement);
		// cameraControls.target.set(0, 50, 0);
		// controls.enableZoom = false;
		// controls.enablePan = false;
		// controls.enableRotate = false;

		let animate = function() {
			requestAnimationFrame(animate);
			innerSphereMesh.rotation.x += 0.01;
			outterShpereMesh.rotation.y -= 0.01;
			// camera.position.z -= 0.1;
			controls.update();

			renderer.render(scene, camera);
		};

		animate();
	}
	render() {
		const { width, height } = this.props;
		return (
			<div
				className="skillsRightConatiner"
				ref="anchor"
				style={{ width, height }}
			/>
		);
	}
}

SkillsScene.propTypes = {};
