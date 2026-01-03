// api/auth.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // هنا كود تسجيل الدخول
    res.status(200).json({ message: 'تم تسجيل الدخول' });
  } else {
    res.status(405).json({ message: 'طريقة غير مدعومة' });
  }
}
