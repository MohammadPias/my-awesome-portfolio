import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import About from './components/Home/About/About';
import Contact from './components/Home/Contact/Contact';
import Home from './components/Home/Home';
import IndexHome from './components/Home/IndexHome/IndexHome';
import Projects from './components/Home/Projects/Projects';
import Skills from './components/Home/Skill/Skills';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<IndexHome />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
