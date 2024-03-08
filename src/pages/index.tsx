import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <main>
      <section className={styles.Cortes}>
        <Image src="/cortes.jpg" alt="Cortes" width={200} height={200} />
        <h1 className={styles.Title_Cortes}>Cortes</h1>
        <p>Clique aqui para editar e adicionar o serviço que deseja</p>
        <button className={styles.button}>Agende</button>
        <Image src="/cortes.jpg" alt="Cortes" width={100} height={100} />
      </section>
      <section>
        <h1>Nossos Proficionais</h1>
        <div>
          <Image
            src="/proficionais.jpg"
            alt="Proficionais"
            width={100}
            height={100}
          />
          <p>Fulano 1</p>
        </div>
        <div>
          <Image
            src="/proficionais.jpg"
            alt="Proficionais"
            width={100}
            height={100}
          />
          <p>Fulano 2</p>
        </div>
        <div>
          <Image
            src="/proficionais.jpg"
            alt="Proficionais"
            width={100}
            height={100}
          />
          <p>Fulano 3</p>
        </div>
      </section>
      <section>
        <h1>Serviços</h1>
      </section>
      <section>
        <h1>Fotos</h1>
        <div>
          <Image
            src="/proficionais.jpg"
            alt="Proficionais"
            width={100}
            height={100}
          />
          <p>Fulano 1</p>
        </div>
        <div>
          <Image
            src="/proficionais.jpg"
            alt="Proficionais"
            width={100}
            height={100}
          />
          <p>Fulano 1</p>
        </div>
        <div>
          <Image
            src="/proficionais.jpg"
            alt="Proficionais"
            width={100}
            height={100}
          />
          <p>Fulano 1</p>
        </div>
        <button>Ver Serviços</button>
      </section>
    </main>
  );
}
