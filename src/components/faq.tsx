// components/FAQ.tsx
import { useState } from 'react';

export default function FAQ() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا كود تنفيذ الاستفسار
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      <button type="submit">استفسار</button>
      <p>{answer}</p>
    </form>
  );
}
