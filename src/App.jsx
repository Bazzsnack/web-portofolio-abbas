import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
// import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </main>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
