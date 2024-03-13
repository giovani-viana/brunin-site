import React from "react";
import styles from "./styles.module.css";

const ServicesDB = [
  {
    nome: "Corte",
    tempo: "30M",
    preço: "R$ 30,00",
  },
  {
    nome: "Barba",
    tempo: "2h",
    preço: "R$ 30,00",
  },
  {
    nome: "Pacote",
    tempo: "4h",
    preço: "R$ 30,00",
  },
  {
    nome: "Pacote",
    tempo: "2h",
    preço: "R$ 30,00",
  },
];

const Serviços_Masculino: React.FC = () => {
  return (
    <div className={styles.table_container}>
      <h1 className={styles.table_header}>Masculino</h1>
      <div className={styles.table}>
        {ServicesDB.map((service) => (
          <>
            <div className={styles.line}></div>
            <div className={styles.table_row}>
              <div className={styles.table_row}>{service.nome}</div>
              <div className={styles.wrapper}>
                <div className={styles.table_row}>{service.tempo}</div>
                <div className={styles.table_row}>{service.preço}</div>
              </div>
              <button className={styles.table_button}>Agendar agora</button>
            </div>
          </>
        ))}
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Serviços_Masculino;
