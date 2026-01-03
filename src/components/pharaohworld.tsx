'use client'; // السطر 1: ضروري جداً لبيئة Next.js والـ 3D
import React from 'react'; // السطر 2: لضمان استقرار المكون
import { Canvas } from '@react-three/fiber'; // السطر 3: محرك الرسوميات
import { OrbitControls, Stars, Float } from '@react-three/drei'; // السطر 4: المؤثرات الملكية

export default function PharaohWorld() { // السطر 5: بداية بوابة العالم الثالث
  return (
    <div className="h-[500px] w-full bg-slate-950 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)] border-2 border-yellow-600/30 relative">
      
      {/* عنوان داخلي فخم */}
      <div className="absolute top-6 right-6 z-10">
        <h2 className="text-yellow-500 font-black text-xl italic drop-shadow-md">بوابة الزمن الثلاثية 🏺</h2>
      </div>

      <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
        {/* إضاءة ملكية خافتة */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#d4af37" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />

        {/* سماء القاهرة المرصعة بالنجوم */}
        <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1.5} />
        
        {/* جعل العناصر تطفو بسحر فرعوني */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <mesh>
            {/* هرم ذهبي مؤقت يمثل شموخ الأكاديمية */}
            <coneGeometry args={[1.5, 2, 4]} />
            <meshStandardMaterial 
              color="#d4af37" 
              metalness={0.8} 
              roughness={0.2} 
              emissive="#3a2a00"
            />
          </mesh>
        </Float>

        {/* السماح للطالب بتدوير العالم لكن مع حدود ملكية */}
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>

      {/* لمسة نهائية: ضباب في الأسفل لإعطاء عمق */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </div>
  );
}
