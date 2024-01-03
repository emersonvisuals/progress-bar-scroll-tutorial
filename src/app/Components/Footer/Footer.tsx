import React from "react";
import Styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={Styles.navigation}>
            <h3 className={Styles.author}>@janefrank</h3>
            <h3 className={Styles.menu}>mail@janefrank.author</h3>
        </div>
    );
};

export default Footer;
