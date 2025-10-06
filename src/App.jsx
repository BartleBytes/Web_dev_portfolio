
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Education } from './components/Education/Education';
import { ScrollTopButton } from './components/ScrollTopButton/ScrollTopButton';

function App() {
    return <div className={styles.App} id="top">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <ScrollTopButton />
    </div>
}

export default App
