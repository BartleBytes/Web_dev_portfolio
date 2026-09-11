import { useState, useMemo } from 'react';
import projects from '../../data/projects.json';
import styles from './Projects.module.css';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
    const [selectedTags, setSelectedTags] = useState([]);

    const tags = useMemo(() => {
      const all = projects.flatMap((p) => p.skills || []);
      const unique = Array.from(new Set(all.map((s) => (typeof s === 'string' ? s : String(s)))));
      return unique;
    }, []);

    const toggleTag = (tag) => {
      setSelectedTags((prev) => {
        if (tag === 'All') return [];
        if (prev.includes(tag)) return prev.filter((t) => t !== tag);
        return [...prev, tag];
      });
    };

    const filtered = useMemo(() => {
      if (!selectedTags || selectedTags.length === 0) return projects;
      return projects.filter((p) => (p.skills || []).some((s) => selectedTags.includes(String(s))));
    }, [selectedTags]);

    return (
      <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>

        <div className={styles.filterBar} role="tablist" aria-label="Project filters">
          <button
            key={'All'}
            className={`${styles.filterBtn} ${selectedTags.length === 0 ? styles.selected : ''}`}
            onClick={() => toggleTag('All')}
            aria-pressed={selectedTags.length === 0}
            style={{ ['--delay']: `0ms` }}
          >
            All
          </button>

          {tags.map((tag, i) => (
            <button
              key={tag}
              className={`${styles.filterBtn} ${selectedTags.includes(tag) ? styles.selected : ''}`}
              onClick={() => toggleTag(tag)}
              aria-pressed={selectedTags.includes(tag)}
              style={{ ['--delay']: `${(i + 1) * 60}ms` }}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className={styles.projects}>
          {filtered.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
      </section>
    );
  };