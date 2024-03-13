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

const Serviços_Feminino: React.FC = () => {
  return (
    <div className={styles.table_container}>
      <p className={styles.table_header}>Feminino</p>
      <div className={styles.header_container}>
        <div className={styles.header_container_categories}>
          <div className={styles.header_category}>Corte</div>
          <div className={styles.header_category}>Unha</div>
          <div className={styles.header_category}>Depilação</div>
        </div>
        <div className={styles.line_category}></div>
      </div>

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

export default Serviços_Feminino;
