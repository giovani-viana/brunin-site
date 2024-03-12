import React from "react";
import styles from "./styles.module.css";
import Serviços_Masculino from "@/components/Serviços_Masculino";

const servicos: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Serviços_Masculino />
      </div>
    </div>
  );
};

export default servicos;
