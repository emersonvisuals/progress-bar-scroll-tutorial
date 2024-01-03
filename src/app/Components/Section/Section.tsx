// Section.tsx
import React from "react";
import Styles from "./Section.module.css";
import Tag from "../Tag/Tag";
import Image from "next/image";
import Arrow from "../../../../public/arrow.svg";

// Define the interface for props
interface SectionProps {
    title: string;
    tagTitle: string;
    tagTitleTwo: string;
}

const Section: React.FC<SectionProps> = ({ title, tagTitle, tagTitleTwo }) => {
    return (
        <div className={Styles.section}>
            <div className={Styles.contents}>
                <h2 className={Styles.h2}>{title}</h2>
                <p className={Styles.p}>
                    <br></br>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Suscipit delectus illo quia incidunt at perspiciatis
                    laudantium fuga, esse molestiae nostrum deleniti et, beatae
                    dignissimos quibusdam corporis nemo reiciendis quas.
                    Doloribus impedit debitis optio voluptatem magnam odio
                    necessitatibus omnis itaque animi. Vel cumque voluptate,
                    quaerat quo sint repellendus, fugit natus, sit aut ipsam
                    nostrum atque cupiditate.
                    <br></br>
                    <br></br>
                    Id rerum blanditiis officiis minus magnam, provident soluta
                    aliquam ab nemo itaque ipsam! Obcaecati consectetur soluta
                    doloribus accusantium odio sed, laborum atque quo hic
                    possimus nostrum iste nesciunt reprehenderit aliquid,
                    laboriosam iusto ratione ipsum assumenda eveniet dolorum,
                    vitae ab. Perspiciatis delectus voluptatibus illo ipsam
                    doloremque?
                </p>
            </div>
            <div className={Styles.action}>
                <div className={Styles.tags}>
                    <Tag tagTitle={tagTitle} />
                    <Tag tagTitle={tagTitleTwo} />
                </div>
                <div className={Styles.cta}>
                    <h2 className={Styles.h2Action}>purchase today</h2>
                    <Image src={Arrow}></Image>
                </div>
            </div>
        </div>
    );
};

export default Section;
