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
                src="/logo.png"
                alt="Picture of the author"
                width={100}
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
            <Link href="/">SERVIÇOS</Link>
          </li>
          <li className={styles.Navbar_items_texto}>
            <Link href="/">AGENDAR</Link>
          </li>
          <li className={styles.Navbar_items_texto}>
            <Link href="/">FOTOS</Link>
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
