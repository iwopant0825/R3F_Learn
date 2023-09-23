import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Mainbox(){
    const refMesh = useRef()
    // useFrame((s,d)=>{
    //     refMesh.current.rotation.y += d;
    // })
    return(
        <>
            <directionalLight position={[1,1,1]}></directionalLight>
            <axesHelper scale={10}></axesHelper>
            <OrbitControls></OrbitControls>
            <mesh ref={refMesh}
                position={[0,0,0]}
                rotation-y={45*Math.PI/180}
                scale={[2,1,1]}
            >
                <boxGeometry></boxGeometry>
                <meshStandardMaterial color={'red'}></meshStandardMaterial>
                <axesHelper></axesHelper>

                <mesh>
                    <sphereGeometry></sphereGeometry>
                    <meshStandardMaterial color={'blue'}></meshStandardMaterial>
                </mesh>
            </mesh>
        </>
    )
}

export default Mainbox;