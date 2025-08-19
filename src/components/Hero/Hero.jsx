import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Sampavi</h1>
            <p className={styles.description}>I'm a frontend developer with 3 years of 
               experience using React and NodeJS.</p>
            <a className={styles.contactBtn} href="mailto:sampavi.shanthakumar@gmail.com">Contact Me</a>
        </div>
        <img className={styles.HeroImg} src={getImageUrl("hero/myImage.jpeg")} alt="Hero Image of me" />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
};