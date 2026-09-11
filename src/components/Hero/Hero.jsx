import {getImageUrl} from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}> 
            <h1 className={styles.title}>Hi, I&apos;m Dylan</h1>
            <p className={styles.description}>Data Scientist / Decision Scientist focused on data modeling, analytics, and ML-driven products. Experienced with Python, NLP, RAG systems, and building production-ready data applications. Reach out to discuss data projects or collaborations.</p>
            <a className={styles.contactBtn} href="mailto:dylanbartle@hotmail.com">Contact Me</a>
        </div>
        <img src={getImageUrl("hero/hero1.png")} alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    );
};