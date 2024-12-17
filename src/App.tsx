import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feedback from "./components/Feedback";
import Features from "./components/Features";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import Team from "./components/Team";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      localStorage.setItem("darkMode", String(!prevMode));
      return !prevMode;
    });
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      {/* Main Content */}
      <Hero />
      <Features />
      <Feedback />
      <Stats />
      <FAQ />
      <Team />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
