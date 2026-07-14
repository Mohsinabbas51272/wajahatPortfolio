import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Industries from './components/Industries';
import GlobalHiring from './components/GlobalHiring';
import Process from './components/Process';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Skills from './components/Skills';
import Results from './components/Results';
import Services from './components/Services';
import CtaSection from './components/CtaSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MouseGlow from './components/MouseGlow';
import LoadingScreen from './components/LoadingScreen';
import SectionWrapper from './components/SectionWrapper';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Smooth entry effect: lock scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <>
      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Pre-loader and Main Content transition */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative min-h-screen bg-darkBg text-textPrimary selection:bg-brandBlue/30 selection:text-white"
          >
            
            {/* Global UI helpers */}
            <MouseGlow />
            <ScrollToTop />
            <Navbar />

            {/* Sections */}
            <main>
              <SectionWrapper id="home" className="pt-24 pb-16">
                <Hero />
              </SectionWrapper>

              <SectionWrapper id="about">
                <About />
              </SectionWrapper>

              <SectionWrapper id="expertise">
                <Expertise />
              </SectionWrapper>

              <SectionWrapper id="industries">
                <Industries />
              </SectionWrapper>

              <SectionWrapper id="global-hiring">
                <GlobalHiring />
              </SectionWrapper>

              <SectionWrapper id="process">
                <Process />
              </SectionWrapper>

              <SectionWrapper id="why-work">
                <WhyWorkWithMe />
              </SectionWrapper>

              <SectionWrapper id="skills">
                <Skills />
              </SectionWrapper>

              <SectionWrapper id="results">
                <Results />
              </SectionWrapper>

              <SectionWrapper id="services">
                <Services />
              </SectionWrapper>

              <SectionWrapper id="cta">
                <CtaSection />
              </SectionWrapper>

              <SectionWrapper id="contact">
                <Contact />
              </SectionWrapper>
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
