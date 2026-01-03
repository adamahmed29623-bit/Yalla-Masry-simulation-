// api/gemini.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { challenge, question, help } = req.body;

    // هنا كود تنفيذ التحديات والاستفسارات والمساعدة
    if (challenge) {
      // تنفيذ التحدي
    } else if (question) {
      // تنفيذ الاستفسار
    } else if (help) {
      // تنفيذ المساعدة
    }

    res.status(200).json({ message: 'تم تنفيذ الطلب' });
  } else {
    res.status(405).json({ message: 'طريقة غير مدعومة' });
  }
}
