import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with the laptop" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                        I have over 3 years of experience building responsive and performant websites using React, JavaScript, and modern frontend tools.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI/UX Designer</h3>
                        <p>
                        I create clean, user-focused interfaces and intuitive user experiences using Figma, Adobe XD, and industry best practices.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Database Handling</h3>
                        <p>
                        I have experience working with MongoDB and MySQL to design schemas, store and retrieve data, and integrate databases into full-stack applications.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Full-Stack Collaboration</h3>
                        <p>
                        I’ve collaborated in Agile teams, connecting React frontends with Node.js/Express backends and REST APIs to deliver dynamic web applications.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
};