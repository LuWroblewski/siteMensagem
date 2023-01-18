import Image from 'next/image';
import logo from '../img/Logotipo.png';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { TableMessages } from '../components/tableMessages';

export default function allMessages({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(posts);

  console.log(` é um array? ${Array.isArray(posts)}`);
  return (
    <div className="menuPeoples">
      <div className="logo">
        <Link href="/Home">
          <Image className="imageMenu" src={logo} alt="logo" width={100} height={100} />
          <p className="menuReturn">retorne aqui </p>
        </Link>
      </div>

      <TableMessages messages={posts}></TableMessages>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/find');
  const data = await res.json();
  const posts = data.messages;
  return {
    props: {
      posts,
    },
  };
};