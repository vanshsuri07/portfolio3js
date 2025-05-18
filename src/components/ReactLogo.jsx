import { Float, useGLTF } from '@react-three/drei';

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/react.glb');

    return (
        <Float floatIntensity={1}>
            <group position={[8, 8, 0]} scale={0.5} {...props} dispose={null}>
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[1, 0.09, 0.181]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.5, 0.392, 0.527]}
                />
            </group>
        </Float>
    );
};

useGLTF.preload('/models/react.glb');

export default ReactLogo;