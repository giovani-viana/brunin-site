import React from "react";
import styles from "./styles.module.css";
import Serviços_Masculino from "@/components/Serviços_Masculino";
import Serviços_Feminino from "@/components/Serviços_Feminino";

const agendar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Serviços_Feminino />
        <Serviços_Masculino />
      </div>
    </div>
  );
};

export default agendar;
