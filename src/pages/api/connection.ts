import type { NextApiRequest, NextApiResponse } from 'next';
import monk from 'monk';
export const url = 'mongodb+srv://teste:teste123@cluster0.1ylmc4y.mongodb.net/site-messages';
export const db = monk(url);
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
