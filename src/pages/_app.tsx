import type { AppProps } from 'next/app';
import '../styles/global-styles.css';

export default function Home({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
