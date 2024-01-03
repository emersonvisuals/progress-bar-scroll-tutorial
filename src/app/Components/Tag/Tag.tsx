import React from "react";
import Styles from "./Tag.module.css";

interface TagProps {
    tagTitle: string;
}

const Tag: React.FC<TagProps> = ({ tagTitle }) => {
    return (
        <div className={Styles.tag}>
            <h4 className={Styles.h4}>{tagTitle}</h4>
        </div>
    );
};

export default Tag;
