import React from 'react';
import styles from './styles.module.css';

interface CardProps {
    title: string;
    content: string;
}

const Card_Serviços: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className={styles.Card}>
            <h2 className={styles.Card_Title}>{title}</h2>
            <p className={styles.Card_Content}>{content}</p>
        </div>
    );
};

export default Card_Serviços;