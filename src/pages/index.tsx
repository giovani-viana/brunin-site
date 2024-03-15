import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Card_Serviços from "@/components/Card_Serviços";
import Card_Proficionais from "@/components/Card_Proficionais";
import Card_Fotos from "@/components/Card_Fotos";
import Link from "next/link";

export default function Page() {
  const cardData = [
    {
      title: "Sample Title",
      content: [
        "corte",
        "escova",
        "hidratação",
        "coloração",
        "mechas",
        "progressiva",
      ],
      image: "/assets/Conversa.jpg",
    },
    {
      title: "Sample Title",
      content: [
        "corte",
        "escova",
        "hidratação",
        "coloração",
        "mechas",
        "progressiva",
      ],
      image: "/assets/Conversa.jpg",
    },
    {
      title: "Sample Title",
      content: [
        "corte",
        "escova",
        "hidratação",
        "coloração",
        "mechas",
        "progressiva",
      ],
      image: "/assets/Conversa.jpg",
    },
  ];

  const proficionaisData = [
    {
      name: "Fulano 1",
      image: "/assets/Conversa.jpg",
    },
    {
      name: "Fulano 2",
      image: "/assets/Conversa.jpg",
    },
    {
      name: "Fulano 3",
      image: "/assets/Conversa.jpg",
    },
  ];

  const fotosData = [
    {
      name: "Fulano 1",
      image: "/assets/Mina.png",
    },
    {
      name: "Fulano 2",
      image: "/assets/Mina.png",
    },
    {
      name: "Fulano 3",
      image: "/assets/Mina.png",
    },
  ];

  return (
    <main className={styles.Main_Content}>
      <section className={styles.Seção_Cortes}>
        <div>
          <Image src="/assets/Mina.png" alt="Mina" width={350} height={350} />
        </div>
        <div>
          <h1 className={styles.Title_Cortes}>Cortes</h1>
          <div>Clique aqui divara editar e adicionar o serviço que deseja</div>
          <button className={styles.button}>Agende</button>
        </div>
      </section>

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

      <section className={styles.Seção_Profissionais}>
        <h1>Nossos Proficionais</h1>
        <div className={styles.Seção_Profissionais_Content}>
          {proficionaisData.map((data, index) => (
            <Card_Proficionais
              key={index}
              name={data.name}
              image={data.image}
            />
          ))}
        </div>
      </section>
      <section className={styles.Seção_Serviços}>
        <p className={styles.Title_Serviços}>Serviços</p>
        <p className={styles.SubTitle_Serviços}>Feminino</p>

        <div className={styles.Card_Serviços_Container}>
          {cardData.map((data, index) => (
            <Card_Serviços
              key={index}
              title={data.title}
              content={data.content}
              image={data.image}
            />
          ))}
        </div>

        <p className={styles.SubTitle_Serviços}>Masculino</p>

        <div className={styles.Card_Serviços_Container}>
          {cardData.map((data, index) => (
            <Card_Serviços
              key={index}
              title={data.title}
              content={data.content}
              image={data.image}
            />
          ))}
        </div>
      </section>

      <section className={styles.Seção_Fotos}>
        <p>Fotos</p>

        <div className={styles.Seção_Fotos_Content}>
          {fotosData.map((data, index) => (
            <Card_Fotos key={index} name={data.name} image={data.image} />
          ))}
        </div>

        <Link href="serviços">
          <button className={styles.Serviços_Button}>Ver Serviços</button>
        </Link>
      </section>
    </main>
  );
}
