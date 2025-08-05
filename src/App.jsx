import { useState } from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import TeamPage from "./pages/TeamPage";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleHome = (x) => {
    setIsHome(x);
  };

  const toggleNav = (x) => {
    setIsNavOpen(x);
  };
  
  return (
    <>
      <Router>
        <Header isHome={isHome} toggleHome={toggleHome} isNavOpen={isNavOpen} toggleNav={toggleNav} />
        <Nav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId" element={<TeamPage />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
