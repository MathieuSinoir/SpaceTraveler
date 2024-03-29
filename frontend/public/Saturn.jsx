/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 saturn.gltf 
Author: SebastianSosnowski (https://sketchfab.com/SebastianSosnowski)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/saturn-planet-9ab1eb3bb97f4e4a9305c0aae2d280a6
Title: Saturn (planet)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Saturn(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/saturn.gltf");
  // const { actions } = useAnimations(animations, group);
  return (
    // eslint-disable-next-line react/no-unknown-property,react/jsx-props-no-spreading
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          /* eslint-disable-next-line react/no-unknown-property */
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.002}
        >
          <group
            name="56fb5d81d5a845599d5e60534f293915fbx"
            /* eslint-disable-next-line react/no-unknown-property */
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Saturn"
                  /* eslint-disable-next-line react/no-unknown-property */
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Saturn_Material_#50_0"
                    /* eslint-disable-next-line react/no-unknown-property */
                    geometry={nodes["Saturn_Material_#50_0"].geometry}
                    /* eslint-disable-next-line react/no-unknown-property */
                    material={materials.Material_50}
                  />
                </group>
                <group
                  name="Saturn_Clouds"
                  /* eslint-disable-next-line react/no-unknown-property */
                  rotation={[-Math.PI / 2, 0, -0.019]}
                  scale={101}
                >
                  <mesh
                    name="Saturn_Clouds_Material_#62_0"
                    /* eslint-disable-next-line react/no-unknown-property */
                    geometry={nodes["Saturn_Clouds_Material_#62_0"].geometry}
                    /* eslint-disable-next-line react/no-unknown-property */
                    material={materials.Material_62}
                  />
                </group>
                <group
                  name="Saturn_Rings"
                  /* eslint-disable-next-line react/no-unknown-property */
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Saturn_Rings_Material_#63_0"
                    /* eslint-disable-next-line react/no-unknown-property */
                    geometry={nodes["Saturn_Rings_Material_#63_0"].geometry}
                    /* eslint-disable-next-line react/no-unknown-property */
                    material={materials.Material_63}
                  />
                </group>
                <group
                  name="Sphere_Mimas"
                  /* eslint-disable-next-line react/no-unknown-property */
                  position={[-988.316, 0, -1127.884]}
                  /* eslint-disable-next-line react/no-unknown-property */
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Sphere_Mimas_Material_#64_0"
                    /* eslint-disable-next-line react/no-unknown-property */
                    geometry={nodes["Sphere_Mimas_Material_#64_0"].geometry}
                    /* eslint-disable-next-line react/no-unknown-property */
                    material={materials.Material_64}
                  />
                </group>
                <group
                  name="Sphere_Enceladus"
                  /* eslint-disable-next-line react/no-unknown-property */
                  position={[1784.732, 0, 239.893]}
                  /* eslint-disable-next-line react/no-unknown-property */
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Sphere_Enceladus_Material_#64_0"
                    /* eslint-disable-next-line react/no-unknown-property */
                    geometry={nodes["Sphere_Enceladus_Material_#64_0"].geometry}
                    /* eslint-disable-next-line react/no-unknown-property */
                    material={materials.Material_64}
                  />
                </group>
                <group
                  name="Sphere_Dione"
                  /* eslint-disable-next-line react/no-unknown-property */
                  position={[-3011.732, 0, -1085.334]}
                  /* eslint-disable-next-line react/no-unknown-property */
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Sphere_Dione_Material_#64_0"
                    /* eslint-disable-next-line react/no-unknown-property */
                    geometry={nodes["Sphere_Dione_Material_#64_0"].geometry}
                    /* eslint-disable-next-line react/no-unknown-property */
                    material={materials.Material_64}
                  />
                </group>
                <group
                  name="Sphere_Rhea"
                  /* eslint-disable-next-line react/no-unknown-property */
                  position={[-2969.675, 0, -3375.375]}
                  /* eslint-disable-next-line react/no-unknown-property */
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Sphere_Rhea_Material_#64_0"
                    /* eslint-disable-next-line react/no-unknown-property */
                    geometry={nodes["Sphere_Rhea_Material_#64_0"].geometry}
                    /* eslint-disable-next-line react/no-unknown-property */
                    material={materials.Material_64}
                  />
                </group>
                <group
                  name="Sphere_Tethys"
                  /* eslint-disable-next-line react/no-unknown-property */
                  position={[396.367, 0, 2165.972]}
                  /* eslint-disable-next-line react/no-unknown-property */
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="Sphere_Tethys_Material_#64_0"
                    /* eslint-disable-next-line react/no-unknown-property */
                    geometry={nodes["Sphere_Tethys_Material_#64_0"].geometry}
                    /* eslint-disable-next-line react/no-unknown-property */
                    material={materials.Material_64}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/saturn.gltf");

export default Saturn;
