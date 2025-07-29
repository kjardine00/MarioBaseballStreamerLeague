import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackgroundVideo from "./components/BackgroundVideo";

function App() {
  return (
    <>
      <Header />
      <BackgroundVideo />
      <Footer />
    </>
  );
}

export default App;
