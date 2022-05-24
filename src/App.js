import AnimatedCursor from 'react-animated-cursor';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Home/About/About';
import Contact from './components/Home/Contact/Contact';
import Home from './components/Home/Home';
import IndexHome from './components/Home/IndexHome/IndexHome';
import BabyCare from './components/Home/ProjectDetails/BabyCare';
import Ceramics from './components/Home/ProjectDetails/Ceramics';
import MediCare from './components/Home/ProjectDetails/MediCare';
import T2P from './components/Home/ProjectDetails/T2P';
import Projects from './components/Home/Projects/Projects';
import Skills from './components/Home/Skill/Skills';

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={14}
        outerSize={40}
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<IndexHome />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects/Babycare-Products/' element={<BabyCare />} />
          <Route path='projects/Ceramics-Amber/' element={<Ceramics />} />
          <Route path='projects/Travel-to-Paradise/' element={<T2P />} />
          <Route path='projects/Medicare-Magician/' element={<MediCare />} />
          <Route path='skills' element={<Skills />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
