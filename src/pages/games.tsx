import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Games.module.css";
import { Inter } from 'next/font/google'
import jugglemaster from '../assets/img/JuggleMaster.png'
const inter = Inter({ subsets: ['latin'] })

type GameEntry = {
  name: string;
  image: any;
  platforms: ("apple" | "android" | "MacOS")[];
};
const games: GameEntry[] = [
  {
    name: "JuggleMaster",
    image: jugglemaster,
    platforms: ["android"],
  },
];

export default function Games() {
  return (
    <>
      <Head>
        <title>Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {games.map(({ name, image }) => (
          <div className={styles.card} key={name}>
            <div className={styles.game}>
              <Image src={image} fill={true} alt={name} />
            </div>
            <span className={`${inter.className} ${styles.game_title}`}>{name}</span>
          </div>
        ))}
      </main>
    </>
  );
}
