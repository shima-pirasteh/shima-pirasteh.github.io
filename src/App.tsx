import { useState, useEffect } from "react";
import Home from "./components/Home";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";
import CaseStudyView from "./components/CaseStudyView";
import { ArrowUp, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activePage, setActivePage] = useState<"home" | "works" | "philosophy" | "endorsements" | "contact">("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor URL Hash changes to enable deep-linking and browser navigation (back/forward keys)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#/project/")) {
        const id = hash.replace("#/project/", "");
        setActiveProjectId(id);
      } else {
        setActiveProjectId(null);
        if (hash === "#/works" || hash === "#/projects") {
          setActivePage("works");
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (hash === "#/philosophy" || hash === "#/about") {
          setActivePage("philosophy");
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (hash === "#/endorsements" || hash === "#/recommendations") {
          setActivePage("endorsements");
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (hash === "#/correspond" || hash === "#/contact") {
          setActivePage("contact");
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          setActivePage("home");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    };

    // Run once on load
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Monitor scroll height to show/hide "Back to Top" button and navbar visual densities
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToPage = (pageName: "home" | "works" | "philosophy" | "endorsements" | "contact") => {
    if (pageName === "home") {
      window.location.hash = "#/home";
    } else {
      window.location.hash = `#/${pageName}`;
    }
  };

  const handleSelectProject = (id: string) => {
    window.location.hash = `#/project/${id}`;
  };

  const handleBackToHome = () => {
    window.location.hash = "#/works";
  };

  const handleNavigateProject = (id: string) => {
    window.location.hash = `#/project/${id}`;
  };

  return (
    <div
      id="portfolio-app-root"
      className="bg-stone-950 min-h-screen text-stone-300 antialiased selection:bg-amber-400 selection:text-stone-950 font-sans"
    >
      {/* Persistent Navigation Header */}
      {!activeProjectId && (
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-305 ${
            scrolled ? "bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6 md:py-8"
          } px-4 md:px-12 lg:px-24`}
        >
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            {/* Brand Logo */}
            <button
              onClick={() => {
                navigateToPage("home");
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 group cursor-pointer text-left"
            >
              <div className="w-10 h-10 border border-[#FAC700] flex items-center justify-center font-serif text-[#FAC700] text-xl transition-all duration-300 group-hover:bg-[#FAC700] group-hover:text-stone-950">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-sm uppercase tracking-[0.3em] font-bold text-stone-100 transition-colors group-hover:text-[#FAC700]">
                  Shima Pirasteh
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-mono">Portfolio</span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400 space-x-6 hidden md:flex items-center">
              <button
                onClick={() => navigateToPage("home")}
                className={`transition-colors cursor-pointer pb-1 ${
                  activePage === "home" ? "text-[#FAC700] font-bold border-b border-[#FAC700]" : "hover:text-[#FAC700]"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigateToPage("works")}
                className={`transition-colors cursor-pointer pb-1 ${
                  activePage === "works" ? "text-[#FAC700] font-bold border-b border-[#FAC700]" : "hover:text-[#FAC700]"
                }`}
              >
                Selected Works
              </button>
              <button
                onClick={() => navigateToPage("endorsements")}
                className={`transition-colors cursor-pointer pb-1 ${
                  activePage === "endorsements"
                    ? "text-[#FAC700] font-bold border-b border-[#FAC700]"
                    : "hover:text-[#FAC700]"
                }`}
              >
                Endorsements
              </button>
              <button
                onClick={() => navigateToPage("contact")}
                className={`transition-colors cursor-pointer pb-1 ${
                  activePage === "contact"
                    ? "text-[#FAC700] font-bold border-b border-[#FAC700]"
                    : "hover:text-[#FAC700]"
                }`}
              >
                Correspond
              </button>
            </nav>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-stone-300 hover:text-[#FAC700] p-1 cursor-pointer"
              title="Toggle navigation list"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>
      )}

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && !activeProjectId && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[72px] bottom-0 bg-[#0A0A0B]/98 z-40 md:hidden flex flex-col justify-start pt-12 px-6 space-y-6 text-center select-none"
          >
            <button
              onClick={() => {
                navigateToPage("home");
                setMobileMenuOpen(false);
              }}
              className={`font-mono text-xs uppercase tracking-[0.2em] py-3 border-b border-white/5 ${
                activePage === "home" ? "text-[#FAC700] font-bold" : "text-stone-300"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                navigateToPage("works");
                setMobileMenuOpen(false);
              }}
              className={`font-mono text-xs uppercase tracking-[0.2em] py-3 border-b border-white/5 ${
                activePage === "works" ? "text-[#FAC700] font-bold" : "text-stone-300"
              }`}
            >
              Selected Works
            </button>
            <button
              onClick={() => {
                navigateToPage("philosophy");
                setMobileMenuOpen(false);
              }}
              className={`font-mono text-xs uppercase tracking-[0.2em] py-3 border-b border-white/5 ${
                activePage === "philosophy" ? "text-[#FAC700] font-bold" : "text-stone-300"
              }`}
            >
              Philosophy
            </button>
            <button
              onClick={() => {
                navigateToPage("endorsements");
                setMobileMenuOpen(false);
              }}
              className={`font-mono text-xs uppercase tracking-[0.2em] py-3 border-b border-white/5 ${
                activePage === "endorsements" ? "text-[#FAC700] font-bold" : "text-stone-300"
              }`}
            >
              Endorsements
            </button>
            <button
              onClick={() => {
                navigateToPage("contact");
                setMobileMenuOpen(false);
              }}
              className={`font-mono text-xs uppercase tracking-[0.2em] py-3 ${
                activePage === "contact" ? "text-[#FAC700] font-bold" : "text-stone-300"
              }`}
            >
              Correspond
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeProjectId ? (
          // Case Study Route Render
          <motion.div
            key="case-study"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <CaseStudyView projectId={activeProjectId} onBack={handleBackToHome} onNavigate={handleNavigateProject} />
          </motion.div>
        ) : activePage === "home" ? (
          // Specific Home Route Render
          <motion.div
            key="home-tab"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Home onEnterWorks={() => navigateToPage("works")} />
          </motion.div>
        ) : activePage === "works" ? (
          // Standalone Selected Works Page (Projects Section)
          <motion.div
            key="works-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <ProjectsSection onSelectProject={handleSelectProject} />
          </motion.div>
        ) : activePage === "philosophy" ? (
          // Standalone Philosophy Page (About Section)
          <motion.div
            key="philosophy-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <About />
          </motion.div>
        ) : activePage === "endorsements" ? (
          // Standalone Endorsements Page (Recommendations Section)
          <motion.div
            key="endorsements-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <Recommendations />
          </motion.div>
        ) : (
          // Standalone Correspond Page (Contact Section)
          <motion.div
            key="contact-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Utilities */}
      <AnimatePresence>
        {showBackToTop && !activeProjectId && (
          <motion.button
            key="back-to-top"
            id="back-to-top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 p-3 bg-[#181818] border border-stone-800 text-amber-400 hover:text-stone-950 hover:bg-amber-400 rounded-sm shadow-xl transition-all duration-305 flex items-center justify-center cursor-pointer"
            title="Scroll to top of landing page"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Styles Injection for specific custom animations */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 35s linear infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.4s ease-in-out infinite;
        }

        /* Print Override styles for perfect Recommendation Letters generation */
        @media print {
          body * {
            visibility: hidden;
          }
          #print-letterhead-content, #print-letterhead-content * {
            visibility: visible;
          }
          #print-letterhead-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            color: #000000 !important;
            background: #ffffff !important;
            padding: 20px !important;
            margin: 0 !important;
            font-size: 14px !important;
            line-height: 1.6 !important;
          }
          /* Hide non-print structures inside letter */
          #print-letterhead-content .print\\:hidden, 
          #print-letterhead-content button,
          #close-btn, 
          #download-btn, 
          #print-btn {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
