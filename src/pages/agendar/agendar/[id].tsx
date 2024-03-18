import React from "react";
import styles from "./styles.module.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Link from "next/link";
import Primeiro_Form from "@/components/Forms/Primeiro_Form";
import Segundo_Form from "@/components/Forms/Segundo_Form";
import { useState } from "react";

const AgendamentoProps = {
  id: "1",
  serviço: "Corte",
  tempo: "30M",
  preço: "R$ 30,00",
  profissionais: [
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
  ],

  Data: [
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
    {
      id: "2",
      dia: "Terça",
      mes: "Outubro",
      horarios: [
        { id: "1", hora: "10:00" },
        { id: "2", hora: "12:00" },
        { id: "3", hora: "14:00" },
        { id: "4", hora: "16:00" },
        { id: "5", hora: "18:00" },
      ],
    },
    {
      id: "3",
      dia: "Quarta",
      mes: "Outubro",
      horarios: [
        { id: "1", hora: "10:00" },
        { id: "2", hora: "12:00" },
        { id: "3", hora: "14:00" },
        { id: "4", hora: "16:00" },
        { id: "5", hora: "18:00" },
      ],
    },
    {
      id: "4",
      dia: "Quinta",
      mes: "Outubro",
      horarios: [
        { id: "1", hora: "10:00" },
        { id: "2", hora: "12:00" },
        { id: "3", hora: "14:00" },
        { id: "4", hora: "16:00" },
        { id: "5", hora: "18:00" },
      ],
    },
    {
      id: "5",
      dia: "Sexta",
      mes: "Outubro",
      horarios: [
        { id: "1", hora: "10:00" },
        { id: "2", hora: "12:00" },
        { id: "3", hora: "14:00" },
        { id: "4", hora: "16:00" },
        { id: "5", hora: "18:00" },
      ],
    },
    {
      id: "6",
      dia: "Sábado",
      mes: "Outubro",
      horarios: [
        { id: "1", hora: "10:00" },
        { id: "2", hora: "12:00" },
        { id: "3", hora: "14:00" },
        { id: "4", hora: "16:00" },
        { id: "5", hora: "18:00" },
      ],
    },
  ],
};

const Agendar: React.FC = () => {
  const horários = AgendamentoProps.Data;
  const dia = horários.map((Data) => Data.dia);
  const mes = horários.map((Data) => Data.mes);
  const horas = horários.map((Data) => Data.horarios);

  const [showSecondForm, setShowSecondForm] = React.useState(false);


  const handleButtonClick = () => {
    setShowSecondForm(true);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.first_container}>
          {!showSecondForm && <>
            <div className={styles.first_container}>
              <div className={styles.header_container}>
                <div className={styles.back_button}>
                  <ArrowBackIosIcon />
                  <Link href="/agendar">
                    <p>Voltar</p>
                  </Link>
                </div>
                <p className={styles.sub_title}>{AgendamentoProps.serviço}</p>
                <p className={styles.text}>Confira nossos horários e datas</p>
                <div className={styles.line}></div>
              </div>
              <div className={styles.caledar_container}>
                <p>Selecione uma data e horário</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar />
                </LocalizationProvider>
              </div>

              <div className={styles.horarios_container}>
                {dia[1]}, de {mes[1]}{" "}
                {horas[1].map((hora) => (
                  <div key={hora.id} className={styles.horarios}>{hora.hora}</div>
                ))}
              </div>
            </div>

            <Primeiro_Form onButtonClick={handleButtonClick} />
          </>}
          {showSecondForm && <Segundo_Form />}
        </div>
      </div>
    </>
  );
};

export default Agendar;
