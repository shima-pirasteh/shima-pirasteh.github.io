import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QUOTES } from "../data";
import { Quote as QuoteIcon } from "lucide-react";

export default function DynamicQuote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Periodically cycle quotes every 8 seconds
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % QUOTES.length);
    }, 8500);

    return () => clearInterval(interval);
  }, []);

  const currentQuote = QUOTES[index];

  return (
    <div 
      id="quote-container" 
      className="relative min-h-[140px] md:min-h-[110px] w-full max-w-2xl py-4 flex flex-col justify-center select-none cursor-pointer group"
      onClick={() => setIndex((prev) => (prev + 1) % QUOTES.length)}
      title="Click to see next philosophical quote"
    >
      <div className="absolute -left-6 -top-2 opacity-5 text-[#FAC700] group-hover:opacity-10 transition-opacity">
        <QuoteIcon size={44} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuote.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-left"
        >
          <p className="font-serif italic text-base md:text-lg lg:text-xl text-stone-200 leading-relaxed tracking-wide">
            {currentQuote.text}
          </p>
          {(currentQuote.author || currentQuote.context) && (
            <div className="mt-3 flex items-center space-x-2 text-stone-400">
              {currentQuote.author && (
                <>
                  <span className="h-[1px] w-6 bg-[#FAC700]/60"></span>
                  <span className="font-sans text-xs uppercase tracking-widest text-[#FAC700] font-medium font-mono">
                    {currentQuote.author}
                  </span>
                </>
              )}
              {currentQuote.context && (
                <span className="font-sans text-stone-500 text-xs italic">
                  {currentQuote.author ? `— ${currentQuote.context}` : currentQuote.context}
                </span>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-4 flex space-x-1.5 justify-start">
        {QUOTES.map((q, i) => (
          <button
            key={q.id}
            id={`quote-bullet-${i}`}
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
            className={`h-1 transition-all duration-500 rounded-full ${
              i === index ? "w-8 bg-[#FAC700]" : "w-2 bg-stone-700 hover:bg-stone-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
