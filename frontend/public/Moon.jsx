/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 moon.gltf 
Author: Homless_Models (https://sketchfab.com/hl_models)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/our-moon-0daa5bd2ddd14f4bbb8f0d2d5c2df6e1
Title: Our Moon
*/

import { useGLTF } from "@react-three/drei";

export default function Moon(props) {
  const { nodes, materials } = useGLTF("/moon.gltf");
  return (
    // eslint-disable-next-line react/no-unknown-property,react/jsx-props-no-spreading
    <group {...props} dispose={null}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          {/* eslint-disable-next-line react/no-unknown-property */}
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              /* eslint-disable-next-line react/no-unknown-property */
              geometry={
                nodes.lroc_color_poles_16k_lroc_color_poles_16k_0.geometry
              }
              /* eslint-disable-next-line react/no-unknown-property */
              material={materials.lroc_color_poles_16k}
            />
            <mesh
              /* eslint-disable-next-line react/no-unknown-property */
              geometry={
                nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_1.geometry
              }
              /* eslint-disable-next-line react/no-unknown-property */
              material={materials.lroc_color_poles_16k}
            />
            <mesh
              /* eslint-disable-next-line react/no-unknown-property */
              geometry={
                nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_2.geometry
              }
              /* eslint-disable-next-line react/no-unknown-property */
              material={materials.lroc_color_poles_16k}
            />
            <mesh
              /* eslint-disable-next-line react/no-unknown-property */
              geometry={
                nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_3.geometry
              }
              /* eslint-disable-next-line react/no-unknown-property */
              material={materials.lroc_color_poles_16k}
            />
            <mesh
              /* eslint-disable-next-line react/no-unknown-property */
              geometry={
                nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_4.geometry
              }
              /* eslint-disable-next-line react/no-unknown-property */
              material={materials.lroc_color_poles_16k}
            />
            <mesh
              /* eslint-disable-next-line react/no-unknown-property */
              geometry={
                nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_5.geometry
              }
              /* eslint-disable-next-line react/no-unknown-property */
              material={materials.lroc_color_poles_16k}
            />
            <mesh
              /* eslint-disable-next-line react/no-unknown-property */
              geometry={
                nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_6.geometry
              }
              /* eslint-disable-next-line react/no-unknown-property */
              material={materials.lroc_color_poles_16k}
            />
            <mesh
              /* eslint-disable-next-line react/no-unknown-property */
              geometry={
                nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_7.geometry
              }
              /* eslint-disable-next-line react/no-unknown-property */
              material={materials.lroc_color_poles_16k}
            />
            <mesh
              /* eslint-disable-next-line react/no-unknown-property */
              geometry={
                nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_8.geometry
              }
              /* eslint-disable-next-line react/no-unknown-property */
              material={materials.lroc_color_poles_16k}
            />
            <mesh
              /* eslint-disable-next-line react/no-unknown-property */
              geometry={
                nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_9.geometry
              }
              /* eslint-disable-next-line react/no-unknown-property */
              material={materials.lroc_color_poles_16k}
            />
            <mesh
              /* eslint-disable-next-line react/no-unknown-property */
              geometry={
                nodes.lroc_color_poles_16k_lroc_color_poles_16k_0_10.geometry
              }
              /* eslint-disable-next-line react/no-unknown-property */
              material={materials.lroc_color_poles_16k}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/moon.gltf");
