import { ArrowDown, Compass, Landmark, Lightbulb } from "lucide-react";
import DynamicQuote from "./DynamicQuote";
import { IMAGES } from "../data";

interface HeroProps {
  onScrollToCatalog: () => void;
}

export default function Hero({ onScrollToCatalog }: HeroProps) {
  return (
    <header 
      id="hero-section" 
      className="relative min-h-[96vh] flex flex-col justify-between text-stone-100 overflow-hidden bg-[#0A0A0B] px-6 md:px-12 lg:px-24"
    >
      {/* Background Graphic with gradient vignettes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/70 via-[#0A0A0B]/80 to-[#0A0A0B] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B]/90 via-transparent to-[#0A0A0B]/60 z-10" />
        <div className="absolute inset-0 opacity-20 pointer-events-none immersive-glow z-0"></div>
        <img
          src={IMAGES.heroBg}
          alt="Abstract structural blueprint concrete texture background"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover opacity-25 object-center"
        />
      </div>

      {/* Decorative vertical coordinates overlay (aesthetic grid lines with modern 5% border) */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[0.5px] bg-white/5 z-0 pointer-events-none hidden md:block"></div>
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[0.5px] bg-white/5 z-0 pointer-events-none hidden md:block"></div>

      {/* Spacer to clear the persistent unified top navbar */}
      <div className="pt-24 sm:pt-32"></div>

      {/* Center core text frame with names, subtitles, and quotes */}
      <main className="flex-1 flex flex-col justify-center z-10 py-16 relative">
        <div className="max-w-4xl">
          {/* Practice tags */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-stone-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
            <span className="flex items-center gap-1.5 text-[#FAC700] font-bold">
              <Compass size={11} /> Architectural Design
            </span>
            <span className="text-stone-700">//</span>
            <span className="flex items-center gap-1.5 text-[#FAC700] font-bold">
              <Landmark size={11} /> Cultural Heritage Analysis
            </span>
            <span className="text-stone-700">//</span>
            <span className="flex items-center gap-1.5 text-[#FAC700] font-bold">
              <Lightbulb size={11} /> Experience Curation
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-white font-normal leading-[1.05]">
            Architecting <br className="hidden md:inline"/>
            <span className="text-[#FAC700] italic font-medium">Cultural</span> Narratives.
          </h1>

          <div className="mt-12 pt-10 border-t border-white/5 max-w-2xl">
            <DynamicQuote />
          </div>
        </div>
      </main>

      {/* Downward Navigation and prompt scroll button (Bottom element) */}
      <footer className="pb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 z-10 relative">
        <div className="font-mono text-[9px] text-stone-500 uppercase tracking-[0.2em]">
          Portfolio Archive // Riga & Barcelona base // Ed. 2026
        </div>
        
        <button
          id="scroll-to-all"
          onClick={onScrollToCatalog}
          className="flex items-center space-x-3 text-stone-400 hover:text-[#FAC700] transition-all group font-mono text-xs uppercase tracking-[0.15em] cursor-pointer self-start sm:self-auto"
        >
          <span>Examine Project Catalog</span>
          <div className="p-2 border border-white/5 rounded-full group-hover:border-[#FAC700] transition-colors animate-bounce-slow">
            <ArrowDown size={14} className="text-[#FAC700]" />
          </div>
        </button>
      </footer>
    </header>
  );
}
