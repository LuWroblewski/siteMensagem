import type { NextApiRequest, NextApiResponse } from 'next';
import { db, collection } from './connection';
import { transporter } from './connection';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, message } = req.body;

  transporter.sendMail({
    from: 'Totem <testeluwroblewski@gmail.com>',
    to: `wrolucas@gmail.com`,
    subject: 'Mensagem do site',
    html: `<div style= "border: 4px; border-style: solid; border-color: rgb(93, 85, 133); width: 500px; height: 100%; background-color: rgb(127, 117, 179)" >
<h2 style="font-family: roboto-condesed; color: rgb(255, 255, 255); text-align: center;" >Mensagem</h2>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;"  >Nome do remetente: ${name}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;"  >A mensagem: ${message}</p>
<p style="font-family: Arial; color: rgb(255, 255, 255);  text-align: center;"  ><small>Se voce não fez a solicitação por favor ignorar.</small></p>
</div> `,
  });

  collection
    .insert([{ name: name, message: message }])
    .then(() => {
      console.log('Enviado com sucesso');
      res.status(200).json({ message: 'Enviado com sucesso' });
    })
    .catch((error: string) => {
      res.status(500).json({ error: error });
    })
    .then(() => db.close());
}
