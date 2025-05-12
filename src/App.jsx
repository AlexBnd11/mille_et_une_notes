import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

// Pages
import Accueil from './pages/Accueil';
import Association from './pages/Association';
import Parcours from './pages/Parcours';
import Contact from './pages/Contact';
import Studio from './pages/Studio';
import Agenda from './pages/Agenda';
import Pratiques from './pages/Pratiques';
// Components
import Nav from './components/Nav';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/association" element={<Association />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/pratiques-musicales" element={<Pratiques />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/studio" element={<Studio />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}