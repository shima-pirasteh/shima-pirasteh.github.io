import { ArrowRight, Compass, Landmark, Lightbulb } from "lucide-react";
import { motion } from "motion/react";
import { IMAGES } from "../data";
import DynamicQuote from "./DynamicQuote";

interface HomeProps {
  onEnterWorks: () => void;
}

export default function Home({ onEnterWorks }: HomeProps) {
  return (
    <section 
      id="home-page-root" 
      className="relative min-h-screen flex flex-col justify-start text-stone-100 overflow-hidden bg-black px-6 md:px-12 lg:px-24 pt-32 sm:pt-40"
    >
      {/* Immersive background double exposure calligraphy picture */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />
        <div className="absolute inset-0 opacity-10 pointer-events-none immersive-glow z-0"></div>
        <img
          src={IMAGES.shimaHomeBg}
          alt="Shima Pirasteh double exposure artistic calligraphy background"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover opacity-90 object-bottom transition-all duration-1000 select-none scale-100 sm:scale-105"
        />
      </div>

      {/* Aesthetic technical vertical coordinates */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[0.5px] bg-white/5 z-0 pointer-events-none hidden md:block"></div>
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[0.5px] bg-white/5 z-0 pointer-events-none hidden md:block"></div>

      {/* Active content frame - positioned upwards using top alignment */}
      <div className="max-w-6xl mx-auto z-10 relative pb-12 w-full flex flex-col justify-start">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start"
        >
          {/* Left Column: Title & Intro */}
          <div className="md:col-span-7 space-y-6">
            {/* Practice tags */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-stone-400 font-mono text-[9px] uppercase tracking-[0.25em]">
              <span className="flex items-center gap-1 text-[#FAC700] hover:text-white transition-colors duration-300">
                <Compass size={10} /> Contextual Architecture
              </span>
              <span className="text-stone-800">|</span>
              <span className="flex items-center gap-1 text-[#FAC700] hover:text-white transition-colors duration-300">
                <Landmark size={10} /> Heritage Surveying
              </span>
              <span className="text-stone-800">|</span>
              <span className="flex items-center gap-1 text-[#FAC700] hover:text-white transition-colors duration-300">
                <Lightbulb size={10} /> Experience Curation
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-white font-normal leading-[1.05]">
                SHIMA <span className="text-white italic font-medium">PIRASTEH</span>
              </h1>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-400 font-semibold border-b border-white/5 pb-2 max-w-xs">
                Spatial Designer & Cultural Curation
              </p>
            </div>

            {/* Minimalist introduction text */}
            <div className="max-w-xl text-stone-200 font-sans text-sm md:text-base leading-relaxed">
              <p>
                Structuring spatial dialogues where raw materials find harmony with historical memories and interactive architectural design.
              </p>
            </div>

            {/* CTA Button to Enter works */}
            <div className="pt-2">
              <button
                onClick={onEnterWorks}
                className="group flex items-center space-x-3 bg-[#FAC700] text-stone-950 font-mono text-[10px] uppercase font-black tracking-widest py-3 px-6 hover:bg-white transition-all rounded-sm cursor-pointer"
              >
                <span>Explore Portfolio</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Floating Quotes Section (background and border removed) */}
          <div className="md:col-span-5 w-full">
            <div id="home-quotes-wrapper" className="pt-4 pb-4 md:ml-auto max-w-md w-full relative z-20">
              <span className="font-mono text-[8px] uppercase tracking-widest text-[#FAC700] font-bold mb-1.5 block">
                Architectural Philosophy
              </span>
              <DynamicQuote />
            </div>
          </div>

        </motion.div>
      </div>

      {/* Subtle background photo attribution in the bottom right corner */}
      <div className="absolute bottom-6 right-6 md:right-12 z-20 text-right select-none pointer-events-none">
        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-stone-500/70 leading-relaxed">
          <span className="block">Photography: Manya Rezapour</span>
          <span className="block">Model and Composition: Shima Pirasteh</span>
        </p>
      </div>
    </section>
  );
}
