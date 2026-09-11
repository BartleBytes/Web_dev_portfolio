import { useState } from 'react';
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';
import CaseStudyModal from './CaseStudyModal';

const mapSkillToIcon = (skill) => {
    const s = skill.toLowerCase();
    if (s.includes('python') || s.includes('pandas') || s.includes('scikit') || s.includes('pytorch') || s.includes('ml') || s.includes('nlp') || s.includes('rag') || s.includes('streamlit')) return 'skills/python.png';
    if (s.includes('react')) return 'skills/react.png';
    if (s.includes('node')) return 'skills/node.png';
    if (s.includes('mongodb')) return 'skills/mongodb.png';
    if (s.includes('kotlin')) return 'skills/kotlin.png';
    if (s.includes('java')) return 'skills/java.png';
    if (s.includes('sql')) return 'skills/sql.png';
    if (s.includes('tableau') || s.includes('tab')) return 'skills/tab.png';
    if (s.includes('powerbi')) return 'skills/powerbi.png';
    if (s.includes('figma')) return 'skills/figma.png';
    if (s.includes('html')) return 'skills/html.png';
    if (s.includes('css')) return 'skills/css.png';
    return 'projects/project.png';
};

export const ProjectCard = ({ project }) => {
    const { title, imageSrc, description, skills = [], demo, source } = project;
    const [open, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const shortDesc = description && description.length > 140 ? description.slice(0, 140) + '…' : description;

    return (
        <div className={`${styles.container} ${open ? styles.open : ''}`}>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>

            <p className={styles.description}>{open ? description : shortDesc}</p>

            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    const icon = mapSkillToIcon(typeof skill === 'string' ? skill : String(skill));
                    return (
                        <li key={id} className={styles.skill} title={skill}>
                            <img src={getImageUrl(icon)} alt="" className={styles.skillIcon} />
                            <span className={styles.skillText}>{skill}</span>
                        </li>
                    );
                })}
            </ul>

            {open && (
                <div className={styles.meta}>
                    {project.caseStudy && (
                      <div className={styles.caseStudy}>
                        <h4>Case Study</h4>
                        <p><strong>Role:</strong> {project.caseStudy.role}</p>
                        <p><strong>Problem:</strong> {project.caseStudy.problem}</p>
                        <p><strong>Approach:</strong> {project.caseStudy.approach}</p>
                        <ul>
                          {(project.caseStudy.impact || []).map((imp, i) => (
                            <li key={i}>{imp}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className={styles.links}>
                        {demo && (
                            <a href={demo} className={styles.link} target="_blank" rel="noreferrer">Demo</a>
                        )}
                        {source && (
                            <a href={source} className={styles.link} target="_blank" rel="noreferrer">Source</a>
                        )}
                    </div>

                    {project.caseStudy && (
                      <div style={{display:'flex', justifyContent:'center', marginTop:12}}>
                        <button className={styles.modalButton} onClick={() => setModalOpen(true)}>Open Case Study</button>
                      </div>
                    )}
                </div>
            )}

            <button className={styles.toggleBtn} onClick={() => setOpen((s) => !s)} aria-expanded={open}>
                {open ? 'Show Less' : 'Show More'}
            </button>

            <CaseStudyModal open={modalOpen} onClose={() => setModalOpen(false)} caseStudy={project.caseStudy} title={title} imageSrc={imageSrc} />
        </div>
    );
};