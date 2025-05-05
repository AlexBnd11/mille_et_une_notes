import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

// Pages
import Accueil from './pages/Accueil';

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}