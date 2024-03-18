import React from "react";
import styles from "./styles.module.css";

type Primeiro_FormProps = {
    onButtonClick: () => void;
};


const Primeiro_Form: React.FC<Primeiro_FormProps> = ({ onButtonClick }) => {
    return (
        <div className={styles.container}>

            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <p className={styles.title}>Selecione o profissonal</p>

                    <div className={styles.inputContainer}>
                        <select className={styles.input}>
                            <option value="0">Selecione o profissional</option>
                            <option value="1">Profissional 1</option>
                            <option value="2">Profissional 2</option>
                            <option value="3">Profissional 3</option>

                        </select>
                    </div>

                    <div className={styles.Info_Container}>
                        <p className={styles.sub_title}>Detalhes do Serviço</p>
                        <p>Profissional: Pedro</p>
                        <p>Corte</p>
                        <p>15 de setembro de 2023 as 12h</p>
                    </div>

                    <button type="submit" onClick={onButtonClick} className={styles.button}>
                        Próximo
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Primeiro_Form;