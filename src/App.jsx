import { Routes, Route, useLocation } from "react-router";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  return (
    <>
      <Navbar 
      isHomePage={isHomePage}
      scrolled={scrolled}
      />

      <Routes>
        <Route path="/" element={<HomePage scrolled={scrolled} />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App