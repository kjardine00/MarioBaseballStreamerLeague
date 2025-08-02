import { useState } from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Teams from "./pages/Teams";

function App() {
  const [isHome, setIsHome] = useState(true);

  const toggleHome = (x) => {
    setIsHome(x);
  };
  
  return (
    <>
      <Router>
        <Header isHome={isHome} toggleHome={toggleHome} />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
