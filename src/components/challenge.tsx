// components/Challenge.tsx
import { useState } from 'react';

export default function Challenge() {
  const [challenge, setChallenge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا كود تنفيذ التحدي
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={challenge} onChange={(e) => setChallenge(e.target.value)} />
      <button type="submit">تنفيذ التحدي</button>
    </form>
  );
}
