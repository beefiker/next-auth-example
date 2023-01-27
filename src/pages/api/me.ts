// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name?: string;
  image?: string;
  email?: string;
  accessToken?: string;
  refreshToken?: string;
  message?: string;
};

function generateToken() {
  return Math.random().toString(36).substring(2);
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { email, password } = req.body;
  console.log(email, password);
  if (email === 'test' && password === '1234') {
    return res.status(200).json({
      name: 'Jaeyoung',
      email,
      image: 'https://avatars.githubusercontent.com/u/1016365?v=4',
      accessToken: generateToken(),
      refreshToken: generateToken(),
    });
  }
  return res.status(400).json({
    message: 'Check your email and password',
  });
}
