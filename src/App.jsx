import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FocusPage from './pages/FocusPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';
import PledgePage from './pages/PledgePage';
import EventDetail from './components/pages/EventDetail';
import TeamDetail from './components/pages/TeamDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/focus" element={<FocusPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/pledge" element={<PledgePage />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/team/:id" element={<TeamDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
