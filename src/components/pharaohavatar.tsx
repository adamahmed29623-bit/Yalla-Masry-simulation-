
// components/PharaohAvatar.tsx
import { useEffect, useState } from 'react';

export default function PharaohAvatar() {
  const [name, setName] = useState('راميس');

  useEffect(() => {
    // هنا كود التفاعل مع التوأم الرقمي
  }, []);

  return (
    <div>
      <h3>التوأم الرقمي: {name}</h3>
      <img src="/pharaoh-avatar.png" alt="التوأم الرقمي" />
    </div>
  );
}
    
