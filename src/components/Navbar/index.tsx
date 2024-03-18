import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className={styles.Navbar}>
      <nav className={styles.Navbar__nav}>
        <ul className={styles.Navbar_items}>
          <li>
            <Link href="/">
              <Image
                src="/favicon.ico"
                alt="Picture of the author"
                width={120}
                height={100}
              />
            </Link>
          </li>
          <li className={styles.Navbar_items_texto}>
            <Link href="/">INÍCIO</Link>
          </li>
          <li className={styles.Navbar_items_texto}>
            <Link href="/sobre">SOBRE</Link>
          </li>
          <li className={styles.Navbar_items_texto}>
            <Link href="/agendar">AGENDAR</Link>
          </li>
          <li className={styles.Navbar_items_texto}>
            <Link href="/fotos">FOTOS</Link>
          </li>
          <li className={styles.Navbar_items_texto}>
            <Link href="/contato">CONTATO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
