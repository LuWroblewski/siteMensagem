import type { NextApiRequest, NextApiResponse } from 'next';
import { collection } from './connection';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await collection
    .find()
    .then((messages) => {
      console.log(messages);
      res.status(200).json({ messages });
    })
    .catch((error: string) => {
      res.status(500).json({ error: error });
    });
}
