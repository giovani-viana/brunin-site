import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Card_Serviços from "@/components/Card_Serviços";
import Card_Proficionais from "@/components/Card_Proficionais";

export default function Page() {
  const cardData = {
    title: "Sample Title",
    content: "This is some sample content for the card."
};

const proficionaisData =[ {
  name: "Fulano 1",
  image: "/assets/Conversa.jpg"
},
{
  name: "Fulano 2",
  image: "/assets/Conversa.jpg"
},
{
  name: "Fulano 3",
  image: "/assets/Conversa.jpg"
},] 


  return (
    <main className={styles.Main_Content}>
      <section className={styles.Seção_Cortes}>
        <div>
          <Image src="/assets/Mina.png" alt="Mina" width={350} height={350} />
        </div>
        <div>
          <h1 className={styles.Title_Cortes}>Cortes</h1>
          <p>Clique aqui para editar e adicionar o serviço que deseja</p>
          <button className={styles.button}>Agende</button>
        </div>
      </section>
       
      <section className={styles.Seção_Conversa}>
        <div>
          <Image src="/assets/Conversa.jpg" alt="Cortes" width={350} height={250} />
        </div>
       <div>
          <p>TEASDOIAHJSDOHASOIDHOIHASDLOIJHDLOASJDLASJo</p>
       </div>
      </section>
      
      <section className={styles.Seção_Profissionais}>
        <h1>Nossos Proficionais</h1>
        <div className={styles.Seção_Profissionais_Content}>
          {proficionaisData.map((data, index) => (
            <Card_Proficionais key={index} name={data.name} image={data.image} />
          ))}  
          </div>  
      </section>
      <section>
        <h1>Serviços</h1>
        <h3>Feminino</h3>
        <Card_Serviços title={cardData.title} content={cardData.content} />
        <h3>Masculino</h3>
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
