

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <p>Check out my Resume</p>
        <a href="files/dylan_the_analyst.pdf" download="dylan_the_analyst.pdf">
        <button className={styles['electric-button']}>Download Resume</button>
    </a>
        
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:dylanbartle@hotmail.com">dylanbartle@hotmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/dylan-bartle-8ab6a2131/">https://www.linkedin.com/in/dylan-bartle-8ab6a2131/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/BartleBytes">https://github.com/BartleBytes</a>
        </li>
      </ul>
    </footer>
  );
};