/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 sun.gltf 
Author: Jiaxing (https://sketchfab.com/saitoyang)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sun-b867c44d578943f186164f97351370fe
Title: Sun
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

function Sun(props) {
  const { nodes, materials } = useGLTF("/sun.gltf");
  return (
    // eslint-disable-next-line react/no-unknown-property,react/jsx-props-no-spreading
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          /* eslint-disable-next-line react/no-unknown-property */
          geometry={nodes.pSphere1_sun_0.geometry}
          /* eslint-disable-next-line react/no-unknown-property */
          material={materials.material}
          scale={5.295}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/sun.gltf");

export default Sun;