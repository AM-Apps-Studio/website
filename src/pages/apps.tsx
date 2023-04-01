import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Apps.module.css";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

type GameEntry = {
  name: string;
  image: string;
  platforms: ("apple" | "android" | "MacOS")[];
};
const apps: GameEntry[] = [
];

export default function Apps() {
  return (
    <>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {apps.map(({ name, image }) => (
          <div className={styles.card} key={name}>
            <div className={styles.app}>
              <Image src={image} fill={true} alt={name} />
            </div>
            <span className={`${inter.className} ${styles.app_title}`}>{name}</span>
          </div>
        ))}
      </main>
    </>
  );
}
