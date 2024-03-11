import React from "react";
import styles from "./styles.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p>Siga as nossas redes sociais</p>
      <div className={styles.iconf}>
        <a href="https://www.facebook.com/">
          <FacebookIcon />
        </a>
      </div>
      <a href="https://www.instagram.com/" className={styles.icon}>
        <InstagramIcon />
      </a>
    </footer>
  );
};

export default Footer;
