import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

interface CardProps {
    name: string;
    image: string;
}

const Card_Proficionais: React.FC<CardProps> = ({ name, image}) => {

    return (
        <div className={styles.Card}>
            <Image className={styles.Card_Image} src={image} alt="Proficionais" width={200} height={200} />
            <h2 className={styles.Card_Name}>{name}</h2>
        </div>
    );
};

export default Card_Proficionais;