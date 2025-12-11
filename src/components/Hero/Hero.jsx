import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Sampavi</h1>
            <p className={styles.description}>I'm a full-stack developer with over 3 years of experience building
                    applications using JavaScript, React, and Node.js.</p>
            <a className={styles.contactBtn} href="mailto:sampavi.shanthakumar@gmail.com">Contact Me</a>
        </div>
        <img className={styles.HeroImg} src={getImageUrl("hero/myImage.jpeg")} alt="Hero Image of me" />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
};
