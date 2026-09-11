import React from 'react';
import styles from './CaseStudyModal.module.css';
import { getImageUrl } from '../../utils';

const CaseStudyModal = ({ open, onClose, caseStudy, title, imageSrc }) => {
  if (!open) return null;

  const img = imageSrc || 'projects/project.png';

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>
        <div className={styles.header}>
          <img src={getImageUrl(img)} alt={`${title} screenshot`} className={styles.image} />
          <div className={styles.titleWrap}>
            <h2 className={styles.title}>{title}</h2>
            {caseStudy?.role && <div className={styles.role}>{caseStudy.role}</div>}
          </div>
        </div>

        <div className={styles.content}>
          {caseStudy?.problem && (
            <section>
              <h3>Problem</h3>
              <p>{caseStudy.problem}</p>
            </section>
          )}

          {caseStudy?.approach && (
            <section>
              <h3>Approach</h3>
              <p>{caseStudy.approach}</p>
            </section>
          )}

          {caseStudy?.tech && (
            <section>
              <h3>Tech</h3>
              <ul>
                {caseStudy.tech.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </section>
          )}

          {caseStudy?.impact && (
            <section>
              <h3>Impact</h3>
              <ul>
                {caseStudy.impact.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
