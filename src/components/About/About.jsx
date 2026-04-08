import {getImageUrl} from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}><img src={getImageUrl("about/character.png")} 
            alt="me sitting with laptop" className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")}alt="cursor icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Data Analysis Skills</h3>
                    <p>SQL: Data extraction, querying, and analysis for BI.<br/>
                        Python & Libraries: Pandas, NumPy, matplotlib, seaborn for data manipulation and visualization.<br/>
                        Data Visualization: Experience with Tableau and dashboard creation.</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")}alt="server icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Software Development</h3>
                    <p>JavaScript (React, Express, Node.js): Full-stack development with experience building web applications.<br/>
                    Java & Kotlin: Used for Android app development, showcasing mobile development skills. </p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")}alt="UI icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Tools & Platforms</h3>
                    <p>Database Management: SQL and MongoDB. <br/>
                    Other Tools: Git for version control, Jupyter Notebooks, and Postman for API testing.</p>
                </div>
                </li>
            </ul>
            </div>
        </section>
    )
}