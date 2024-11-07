import {getImageUrl} from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}><img src={getImageUrl("about/aboutImage.png")} 
            alt="me sitting with laptop" className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")}alt="cursor icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I&apos;m a frontend developer with experience building responsive and optimized sites</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")}alt="server icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimized systems and RESTful API&apos;s </p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")}alt="UI icon"/>
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>I have designed landing pages and design systems</p>
                </div>
                </li>
            </ul>
            </div>
        </section>
    )
}