import type { NextApiRequest, NextApiResponse } from 'next';
import monk from 'monk';
export const DB = () => {
  return monk(process.env.MONGO_URI);
};
export const db = DB();
export const collection = db.get('messages');
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'testeluwroblewski@gmail.com',
    pass: 'jdojzlkhzanwrpuh',
  },
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Connected correctly to server' });
  db.then(() => {
    console.log('Connected correctly to server');
  });
}
