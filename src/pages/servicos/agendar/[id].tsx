import React from "react";
import styles from "./styles.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Props = {
  id: "1",
  nome: "Corte",
  tempo: "30M",
  preço: "R$ 30,00",
};

const scheduleDB = [
  {
    id: "1",
    dia: "Segunda",
    mes: "Outubro",
    horarios: [
      { id: "1", hora: "10:00" },
      { id: "2", hora: "12:00" },
      { id: "3", hora: "14:00" },
      { id: "4", hora: "16:00" },
      { id: "5", hora: "18:00" },
    ],
  },
];

const profissionaisDB = [
  {
    id: "1",
    nome: "João",
    foto: "/images/joao.jpg",
    especialidades: ["Corte", "Barba", "Penteado"],
  },
  {
    id: "2",
    nome: "Maria",
    foto: "/images/maria.jpg",
    especialidades: ["Corte", "Penteado"],
  },
  {
    id: "3",
    nome: "José",
    foto: "/images/jose.jpg",
    especialidades: ["Barba", "Penteado"],
  },
];

const agendar: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.first_container}>
          <div className={styles.back_button}>
            <ArrowBackIosIcon /> <p>Voltar</p>
          </div>
          <p className={styles.sub_title}>{Props.nome}</p>
          <div className={styles.line}></div>
          <p>Confira nossos horários e datas</p>
          <div className={styles.caledar_container}></div>
        </div>

        <div className={styles.second_container}>
          <form className={styles.form}>
            <p className={styles.title}>Agende sua consulta</p>

            <input
              className={styles.field1}
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
            />

            <input
              className={styles.field2}
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
            />
            <textarea
              className={styles.field3}
              id="message"
              name="message"
              rows={4}
              placeholder="Digite sua mensagem"
            />

            <button type="submit" className={styles.button}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default agendar;
