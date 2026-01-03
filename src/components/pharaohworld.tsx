'use client'; // ضروري جداً لأن الـ 3D يعمل في المتصفح فقط
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

export default function PharaohWorld() {
  return (
    <div className="h-[400px] w-full bg-slate-950 rounded-3xl overflow-hidden shadow-inner border-2 border-yellow-600">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* إضافة سماء مرصعة بالنجوم لمسة ملكية */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* تفعيل التحكم في الكاميرا للمستخدم */}
        <OrbitControls enableZoom={false} />

        {/* التعليق الصحيح هنا يكون هكذا */}
        {/* سيتم وضع النماذج ثلاثية الأبعاد هنا (الأهرامات، التماثيل) */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#d4af37" /> {/* مكعب ذهبي مؤقت كرمز للعرش */}
        </mesh>
      </Canvas>
    </div>
  );
}
