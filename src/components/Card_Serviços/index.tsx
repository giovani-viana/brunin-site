import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

interface CardProps {
  title: string;
  content: string[];
  image: string;
}

const Card_Serviços: React.FC<CardProps> = ({ title, content, image }) => {
  const half = Math.ceil(content.length / 2);
  const firstHalf = content.slice(0, half);
  const secondHalf = content.slice(half);

  return (
    <div className={styles.CardContainer}>
      <Image
        className={styles.Card_Image}
        src={image}
        alt="Conversa"
        width={135}
        height={180}
      />
      <div className={styles.Card}>
        <p className={styles.Card_Title}>{title}</p>
        <div className={styles.Card_Content}>
          <div>
            {firstHalf.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div>
            {secondHalf.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_Serviços;
