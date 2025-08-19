import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';
export const Contact = () =>{
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                <a href="mailto:sampavi.shanthakumar@gmail.com">sampavi.shanthakumar@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon"/>
                <a href="https://www.linkedin.com/in/sampavi-shanthakumar-9222a2295/">linkedin.com/Sampavi Shanthakumar</a>
            </li>
            <li className={styles.link}>  
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
                <a href="https://github.com/sshanthakumar2">github.com/Sampavi Shanthakumar</a>
            </li>
        </ul>
    </footer>
}