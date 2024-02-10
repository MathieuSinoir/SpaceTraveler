import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Mercury(props) {
  const meshRef = useRef();
  const { nodes, materials } = useGLTF("/mercury.gltf");

  useEffect(() => {
    if (meshRef.current) {
      // Centrer la géométrie
      const { geometry } = meshRef.current;
      geometry.computeBoundingBox();
      geometry.center();
    }
  }, []);

  return (
    // eslint-disable-next-line react/no-unknown-property,react/jsx-props-no-spreading
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        /* eslint-disable-next-line react/no-unknown-property */
        geometry={nodes.Object_2.geometry}
        /* eslint-disable-next-line react/no-unknown-property */
        material={materials.moon}
      />
    </group>
  );
}

useGLTF.preload("/mercury.gltf");
