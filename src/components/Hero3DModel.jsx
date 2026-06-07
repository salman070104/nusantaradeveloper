import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html, ContactShadows } from '@react-three/drei';

const Laptop = () => {
  return (
    <group position={[0, -0.5, 0]}>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 0.1, 2.4]} />
        <meshStandardMaterial color="#e5e7eb" />
      </mesh>
      {/* Keyboard Area */}
      <mesh position={[0, 0.06, 0.2]}>
        <boxGeometry args={[2.8, 0.02, 1.2]} />
        <meshStandardMaterial color="#9ca3af" />
      </mesh>
      {/* Trackpad */}
      <mesh position={[0, 0.06, 0.95]}>
        <boxGeometry args={[0.8, 0.02, 0.4]} />
        <meshStandardMaterial color="#9ca3af" />
      </mesh>
      
      {/* Screen Lid (hinged at the back) */}
      <group position={[0, 0.05, -1.2]} rotation={[-0.15, 0, 0]}>
        {/* Outer Lid */}
        <mesh position={[0, 1.1, 0.05]}>
          <boxGeometry args={[3.2, 2.2, 0.1]} />
          <meshStandardMaterial color="#d1d5db" />
        </mesh>
        {/* Screen Bezel (Black) */}
        <mesh position={[0, 1.1, 0.105]}>
          <boxGeometry args={[3.0, 2.0, 0.01]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        
        {/* Embedded HTML Screen */}
        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={1.3}
          position={[0, 1.1, 0.11]}
          rotation={[0, 0, 0]}
        >
          <div className="w-[500px] h-[330px] bg-white rounded-md flex flex-col overflow-hidden text-left shadow-2xl">
            {/* Browser Header */}
            <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 bg-white px-3 py-1 text-[11px] text-slate-500 rounded-md w-48 truncate border border-slate-200 shadow-sm flex items-center">
                <span className="opacity-50 mr-1">🔒</span> brebeswebdev.com
              </div>
            </div>
            {/* Mini Website Content */}
            <div className="flex-1 p-5 bg-slate-50 flex flex-col gap-3">
              <div className="w-full h-32 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl shadow-inner flex flex-col items-center justify-center p-4">
                <span className="text-white text-3xl font-extrabold tracking-tight mb-2">UMKM GO DIGITAL</span>
                <span className="text-blue-100 text-sm">Website Modern & Responsif</span>
              </div>
              <div className="flex gap-3">
                <div className="w-1/3 h-24 bg-white rounded-lg shadow-sm border border-slate-100 p-3 flex flex-col gap-2">
                  <div className="w-6 h-6 rounded bg-blue-100 mb-1"></div>
                  <div className="w-full h-2 bg-slate-100 rounded"></div>
                  <div className="w-2/3 h-2 bg-slate-100 rounded"></div>
                </div>
                <div className="w-1/3 h-24 bg-white rounded-lg shadow-sm border border-slate-100 p-3 flex flex-col gap-2">
                  <div className="w-6 h-6 rounded bg-violet-100 mb-1"></div>
                  <div className="w-full h-2 bg-slate-100 rounded"></div>
                  <div className="w-3/4 h-2 bg-slate-100 rounded"></div>
                </div>
                <div className="w-1/3 h-24 bg-white rounded-lg shadow-sm border border-slate-100 p-3 flex flex-col gap-2">
                  <div className="w-6 h-6 rounded bg-emerald-100 mb-1"></div>
                  <div className="w-full h-2 bg-slate-100 rounded"></div>
                  <div className="w-1/2 h-2 bg-slate-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </Html>
      </group>
    </group>
  );
};

const Hero3DModel = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating and subtle rotation tracking
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 - 0.4;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <group ref={groupRef} scale={0.9} rotation={[0.1, -0.4, 0]}>
          <Laptop />
        </group>
      </Float>
      
      {/* Floor Shadow */}
      <ContactShadows position={[0, -1.2, 0]} opacity={0.5} scale={10} blur={2} far={4} color="#000000" />
      
      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" castShadow />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#eab308" />
    </>
  );
};

export default Hero3DModel;
