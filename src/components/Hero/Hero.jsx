import {getImageUrl} from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}> 
            <h1 className={styles.title}>Hi, I&apos;m Dylan</h1>
            <p className={styles.description}>I&apos;m a full-stack developer with 3 years of experience using NodeJS, Reach out if you&apos;d like to learn more!</p>
            <a className={styles.contactBtn} href="mailto:dylanbartle@hotmail.com">Contact Me</a>
        </div>
        <img src={getImageUrl("hero/hero1.png")} alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    );
};