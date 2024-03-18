import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Sobre() {
  return (
    <main className={styles.main}>
      <section className={styles.Seção_Conversa}>
        <div className={styles.Conversa_Title_Container}>
          <h1 className={styles.Conversa_Title}>Sobre</h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.Seção_Conversa_Container}>
          <Image
            src="/assets/Conversa.jpg"
            alt="Cortes"
            width={350}
            height={250}
          />
          <div>
            <p>TEASDOIAHJSDOHASOIDHOIHASDLOIJHDLOASJDLASJo</p>
          </div>
        </div>
      </section>
    </main>
  );
}
