import styles from "./Education.module.css";
import education from "../../data/education.json";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <ul className={styles.educationList}>
        {education.map((item, id) => (
          <li key={id} className={styles.educationItem}>
            <img
              src={getImageUrl(item.imageSrc)}
              alt={`${item.institution} logo`}
              className={styles.institutionLogo}
            />
            <div className={styles.details}>
              <h3 className={styles.heading}>
                <span>{item.degree}</span>
                <span className={styles.separator}>•</span>
                <span>{item.institution}</span>
              </h3>
              {(item.startDate || item.endDate) && (
                <p className={styles.dates}>
                  {item.startDate}
                  {item.startDate && item.endDate ? " - " : ""}
                  {item.endDate}
                </p>
              )}
              <ul className={styles.highlights}>
                {item.highlights.map((highlight, highlightId) => (
                  <li key={highlightId}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
