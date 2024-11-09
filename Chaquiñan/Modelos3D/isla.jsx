// Isla.jsx
import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';
import { Html } from '@react-three/drei';
import escenaIsla from '../assets/3d/floating_island.glb';

// Componente Isla
const Isla = (props) => {
  const islaRef = useRef();
  const { nodes, materials } = useGLTF(escenaIsla);

  return (
    <a.group ref={islaRef} {...props}>
      <group scale={0.01}>
        {/* Aquí van los meshes del modelo */}
        <mesh
          geometry={nodes.Cube_Material001_0.geometry}
          material={materials['Material.001']}
        />
        <mesh
          geometry={nodes.Cube001_Material_0.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube002_Material002_0.geometry}
          material={materials['Material.002']}
        />
        <mesh
          geometry={nodes.Cube007_Material003_0.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Cube006_Material003_0.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Cube005_Material003_0.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Cone001_Material004_0.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Cone009_Material004_0.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Cone010_Material004_0.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Cone011_Material004_0.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Cone012_Material004_0.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Cone013_Material004_0.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Cone014_Material004_0.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Cone015_Material004_0.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Cone016_Material004_0.geometry}
          material={materials['Material.004']}
        />

        {/* Puntos de información (fuera del modelo) */}
        <SpotInformation position={[-15, 5, -25]} info="Información sobre el punto 1" />
        <SpotInformation position={[10, 5, -30]} info="Información sobre el punto 2" />
        <SpotInformation position={[20, 5, -10]} info="Información sobre el punto 3" />
      </group>
    </a.group>
  );
};

// Componente SpotInformation para los puntos interactivos
const SpotInformation = ({ position, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { camera } = useThree();

  const handleClick = () => {
    setShowInfo(!showInfo);

    // Mueve la cámara hacia el punto donde se hace clic
    camera.position.set(position[0] * 1.5, position[1] * 1.5, position[2] * 1.5);
    camera.lookAt(position[0], position[1], position[2]);
  };

  return (
    <group position={position}>
      {/* Punto interactivo */}
      <mesh onClick={handleClick}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="yellow" emissive="yellow" />
      </mesh>

      {/* Tarjeta de información */}
      {showInfo && (
        <Html position={[0, 1.5, 0]}>
          <div style={cardStyle}>
            <h3>Detalles:</h3>
            <p>{info}</p>
            <button onClick={() => setShowInfo(false)} style={buttonStyle}>
              Cerrar
            </button>
          </div>
        </Html>
      )}
    </group>
  );
};

// Estilos para la tarjeta
const cardStyle = {
  padding: '10px',
  backgroundColor: 'white',
  borderRadius: '8px',
  border: '2px solid #ddd',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  width: '200px',
  fontFamily: 'Arial, sans-serif',
};

const buttonStyle = {
  marginTop: '10px',
  padding: '5px 10px',
  border: 'none',
  backgroundColor: '#007bff',
  color: 'white',
  cursor: 'pointer',
  borderRadius: '5px',
};

export default Isla;
