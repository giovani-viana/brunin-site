import React from "react";
import styles from "./styles.module.css";

const agendamentos: React.FC = () => {
  return (
    <>
      <p className={styles.title}>Agendar</p>
      <div className={styles.container}>
        <div className={styles.map_Container}>
          <div className={styles.text_Container}>
            <p className={styles.Title_info}>Agende sua consulta</p>
            <p className={styles.Title_info}>Taguatinga, rua 23</p>
            <p className={styles.Title_info}>EMAIL: gasjdij </p>
            <p className={styles.Title_info}>TEL: (11) 9999-9999</p>
            <p className={styles.Title_info}>Segunda a Sexta:</p>
            <p className={styles.Title_info}>Sabado:</p>
          </div>

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

export default agendamentos;
