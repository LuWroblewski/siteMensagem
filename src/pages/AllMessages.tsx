import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../img/Logotipo.png';
import Link from 'next/link';
import { TableMessages } from '../components/tableMessages';
const vercelToken = 'z0G6mcDXRgdDWtpmT2NmlwcT';

export default function AllMessages() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/find', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + vercelToken,
        },
      });
      const data = await res.json();
      const messages = data.messages;
      setPosts(messages);
    }
    fetchData();
  }, []);

  return (
    <div className="menuPeoples">
      <div className="logo">
        <Link href="/Home">
          <Image className="imageMenu" src={logo} alt="logo" width={100} height={100} />
          <p className="menuReturn">Menu</p>
        </Link>
      </div>

      <TableMessages messages={posts}></TableMessages>
    </div>
  );
}
