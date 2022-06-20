import './App.css';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';

const App = () => {
  return (
    <div className="A">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
