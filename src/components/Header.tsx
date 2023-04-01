import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Header.module.css";
import logo from "../assets/img/logo.png";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

interface MenuEntry {
  title: string;
  path: string;
}

const menuEntries: MenuEntry[] = [
  { title: "Apps", path: "/apps" },
  { title: "Games", path: "/games" },
  { title: "About us", path: "/about" },
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Attach scroll event listener on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        <Image src={logo} alt="Logo" fill={true} />
      </div>
      <div className={styles.nav}>
        {menuEntries.map((entry) => (
          <Link href={entry.path} key={entry.title}>
            <div className={styles.card} >
              <span className={inter.className}>{entry.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
