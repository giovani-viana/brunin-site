import React from "react";
import styles from "./styles.module.css";

const contato: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Contato</p>

      <div className={styles.map_Container}>
        <div className={styles.text_Container}>
          <p className={styles.Title_info}>VENHA NOS VISITAR</p>
          <p className={styles.Title_info}>Taguatinga, rua 23</p>
          <p className={styles.Title_info}>EMAIL: gasjdij </p>
          <p className={styles.Title_info}>TEL: (11) 9999-9999</p>
          <p className={styles.Title_info}>Segunda a Sexta:</p>
          <p className={styles.Title_info}>Sabado:</p>
        </div>

        <form className={styles.form}>
          <p>Mande uma mensagem</p>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <input className={styles.input} type="text" id="name" name="name" />

          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
          />

          <label className={styles.label} htmlFor="message">
            Message:
          </label>
          <textarea id="message" name="message" rows={4} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default contato;
