import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Loader from "../Componentes/Loader";
import Isla from "../Modelos3D/isla";

const Home = () => {
  return (
    <div>
      <section className="w-full h-screen relative bg-sky-300">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ position: [-2, 3, 8], near: 0.5, far: 500 }}

      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Isla />

          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={false}
            minPolarAngle={Math.PI / 4}    /* Límite inferior de rotación vertical */
            maxPolarAngle={Math.PI / 3}    /* Límite superior de rotación vertical */
            minAzimuthAngle={-Math.PI / 4} /* Límite izquierdo de rotación horizontal */
            maxAzimuthAngle={Math.PI / 4}  /* Límite derecho de rotación horizontal */
            minDistance={3}                /* Distancia mínima de zoom */
            maxDistance={15}               /* Distancia máxima de zoom */
            target={[0, 0, 0]}            /*  Centra el paneo en el origen del modelo */
            mouseButtons={{
              LEFT: 2,  /* Botón izquierdo para paneo */
              RIGHT: 0, /* Desactiva el botón derecho */
            }}
          />
        </Suspense>
      </Canvas>
    </section>
    </div>
    
  );
};

export default Home;
