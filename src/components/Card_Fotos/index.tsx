import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

interface CardProps {
  name: string;
  image: string;
}

const Card_Fotos: React.FC<CardProps> = ({ name, image }) => {
  return (
    <div className={styles.Card}>
      <Image
        className={styles.Card_Image}
        src={image}
        alt="Proficionais"
        width={150}
        height={150}
      />
      <div className={styles.Card_Name}>{name}</div>
    </div>
  );
};

export default Card_Fotos;
