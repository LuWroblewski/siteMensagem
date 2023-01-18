import type { AppProps } from 'next/app';
import '../styles/global-styles.css';
import nextConnect from 'next-connect';
import cors from 'cors';

const handler = nextConnect();

handler.use(cors());

export default function Home({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export const config = {
  api: {
    bodyParser: false,
    handler,
  },
};
