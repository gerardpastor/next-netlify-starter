import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Experience() {
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.x = cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry />
      <meshBasicMaterial color="hotpink" />
    </mesh>
  );
}
