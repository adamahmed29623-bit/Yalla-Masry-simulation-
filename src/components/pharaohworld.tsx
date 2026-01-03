// components/PharaohWorld.tsx
import { Canvas } from '@react-three/fiber';

export default function PharaohWorld() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <!-- هنا كود النماذج 3D -->
    </Canvas>
  );
}
