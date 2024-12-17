import { useEffect } from "react";
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
import themeStore from "./store/themeStore";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

// AWS Amplify Config
Amplify.configure(outputs);

function App() {
  // Sync trạng thái dark mode từ MobX store vào DOM
  useEffect(() => {
    if (themeStore.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeStore.darkMode]);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

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
