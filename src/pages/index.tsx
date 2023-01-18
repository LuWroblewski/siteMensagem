import Link from 'next/link';
import autosize from 'autosize';
import { useEffect } from 'react';
import { useState } from 'react';
import { ButtonForm } from '../components/button';
import { Post } from '../components/post';
import Image from 'next/image';
import logo from '../img/Logotipo.png';

const Menu = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleclick = () => {
    fetch('./api/insert', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        message: message,
      }),
    });
    setName('');
    setMessage('');
  };
  useEffect(() => {
    autosize(document.querySelectorAll('textarea'));
  });

  return (
    <div className="Menu">
      <div className="logo">
        <Image className="image" src={logo} alt="logo" width={300} height={300} />
      </div>
      <form className="formPost">
        <h2 className="title">Escreva uma</h2>
        <h2 className="title">Mensagem 😎❤️</h2>
        <Post placeholder="Nome" value={name} onChange={(e) => setName(e)} text={''} maxLength={110} />
        <Post placeholder="Mensagem: " value={message} onChange={(e) => setMessage(e)} text={''} maxLength={110} />
        <Link href="AllMessages">
          <ButtonForm
            onClick={() => {
              handleclick();
            }}
            text={'Enviar'}
          ></ButtonForm>
        </Link>
      </form>
      <small className="author">Feito com ❤️ por Lexy</small>
    </div>
  );
};

export default Menu;
