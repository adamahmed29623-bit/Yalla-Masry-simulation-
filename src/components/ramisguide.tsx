    // components/RamisGuide.tsx
    import { useEffect, useState } from 'react';

    export default function RamisGuide() {
      const [message, setMessage] = useState('مرحبًا، أنا راميس!');

      useEffect(() => {
        // هنا كود التفاعل مع راميس
      }, []);

      return (
        <div>
          <h3>{message}</h3>
          <img src="/ramis-avatar.png" alt="راميس" />
        </div>
      );
    }
    
