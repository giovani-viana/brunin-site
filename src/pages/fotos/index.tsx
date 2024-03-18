import React from "react";
import styles from "./styles.module.css";
import Card_Fotos from "@/components/Card_Fotos";
import Link from "next/link";

const fotosData = [
    {
        name: "Fulano 1",
        image: "/assets/Mina.png",
    },
    {
        name: "Fulano 2",
        image: "/assets/Mina.png",
    },
    {
        name: "Fulano 3",
        image: "/assets/Mina.png",
    },
];

export default function Fotos() {
    return (
        <div className={styles.container}>
            <section className={styles.Seção_Fotos}>
                <p>Fotos</p>

                <div className={styles.Seção_Fotos_Content}>
                    {fotosData.map((data, index) => (
                        <Card_Fotos key={index} name={data.name} image={data.image} />
                    ))}
                </div>

                <Link href="/agendar">
                    <button className={styles.Serviços_Button}>Ver Serviços</button>
                </Link>
            </section>
        </div>
    );
}