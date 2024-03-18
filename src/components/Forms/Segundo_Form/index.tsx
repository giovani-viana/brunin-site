import React from "react";
import styles from "./styles.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";


export default function Segundo_Form() {
    return (
        <div className={styles.container}>
            <div className={styles.first_section}>
                <div className={styles.header_container}>
                    <div className={styles.back_button}>
                        <ArrowBackIosIcon />
                        <Link href="/agendar">
                            <p>Voltar</p>
                        </Link>
                    </div>
                    <p className={styles.sub_title}>Preencher Dados</p>
                    <div className={styles.line}></div>
                </div>
                <form>

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

                    <input
                        className={styles.field3}
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Telefone"
                    />

                    <textarea
                        className={styles.field4}
                        id="message"
                        name="message"
                        placeholder="Mensagem"
                    ></textarea>
                </form>
            </div>

            <div className={styles.second_section}>
                <div className={styles.header_container}>
                    <p className={styles.sub_title}>Informações do Agendamento</p>
                    <div className={styles.line}></div>
                </div>
                <p className={styles.text}>Profissional: Pedro</p>
                <p className={styles.text}>Corte</p>
                <p className={styles.text}>12 de novembro de 2023 as 12h</p>
                <p className={styles.text}>R$ 120,00 </p>
                <div className={styles.line}></div>
                <p className={styles.text}>Total: R$200,00</p>
                <button className={styles.button}>Agendar agora</button>
            </div>
        </div>
    );
}