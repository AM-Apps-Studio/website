import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/About.module.css";
import { Inter } from "next/font/google";
import laptop from '../assets/img/laptop.png'
const inter = Inter({ subsets: ["latin"] });


type GameEntry = {
  name: string;
  image: any;
  link: string;
};
const apps: GameEntry[] = [
  {
    name: "M",
    image: laptop,
    link: "https://github.com/ochan12"
  },
  {
    name: "A",
    image: laptop,
    link: "https://github.com/AlexZayat"
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.card_container}>
          {apps.map(({ name, image, link }) => (
            <a className={styles.card} key={name} href={link} target="_blank">
              <div className={styles.person}>
                <Image src={image} fill={true} alt={name} />
              </div>
              <span className={`${inter.className} ${styles.person_title}`}>
                {name}
              </span>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
