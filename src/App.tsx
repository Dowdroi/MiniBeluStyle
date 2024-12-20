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
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

// AWS Amplify Config
Amplify.configure(outputs);

function App() {
  // Dark mode từ Mobx
  useEffect(() => {
    if (themeStore.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeStore.darkMode]);

  return (
    <div>
      <Navbar />
      <Cart />
      {/* Main Content */}
      <Hero />
      <Features />
      <ProductList />
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
