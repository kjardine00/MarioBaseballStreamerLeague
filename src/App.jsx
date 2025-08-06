import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import TeamPage from "./pages/TeamPage";
import Scores from "./pages/Scores";
import Schedule from "./pages/Schedule";
import Standings from "./pages/Standings";
import Stats from "./pages/Stats";
import Rules from "./pages/Rules";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = (x) => {
    setIsNavOpen(x);
  };

  return (
    <>
      <Header isHome={isHome} isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <Nav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId" element={<TeamPage />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </div>
      <div className={`footer ${isHome ? "footer-home" : "footer-other"}`}>
        <p>All-Star Superstar Baseball League and Steamer Tournament</p>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
