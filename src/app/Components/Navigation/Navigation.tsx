import React from "react";
import Styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <div className={Styles.navigation}>
            <h3 className={Styles.author}>Jane Frank</h3>
            <h3 className={Styles.menu}>Menu</h3>
        </div>
    );
};

export default Navigation;
