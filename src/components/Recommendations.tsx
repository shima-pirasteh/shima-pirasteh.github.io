import { useState } from "react";
import { RECOMMENDATIONS } from "../data";
import { Recommendation } from "../types";
import { FileText, Download, Printer, X, Award, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Recommendations() {
  const [selectedRec, setSelectedRec] = useState<Recommendation | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = (rec: Recommendation) => {
    // Allows raw download of the formal recommendation letter
    const element = document.createElement("a");
    const file = new Blob([
      `RECOMMENDATION LETTER\n`,
      `=====================\n\n`,
      `Date: ${rec.date}\n`,
      `Author: ${rec.author}\n`,
      `Title: ${rec.title}\n`,
      `Institution: ${rec.institution}\n`,
      `Relationship: ${rec.relationship}\n\n`,
      `-----------------------------------------------------\n\n`,
      rec.fullLetter
    ], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `Recommendation-${rec.author.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="recommendations" className="pt-32 pb-24 bg-[#0A0A0B] px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div id="rec-header" className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FAC700] font-semibold mb-3 block">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-100 tracking-tight leading-tight">
              Professional Endorsements
            </h2>
            <p className="mt-4 text-stone-400 text-sm md:text-base">
              Verbatim assessments from academic supervisors, global partners, and architectural firm directors highlighting design intelligence and collaborative execution.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-2 text-stone-500 font-mono text-xs">
            <ShieldCheck className="text-[#FAC700]/80" size={16} />
            <span>Verified Credentials</span>
          </div>
        </div>

        <div id="rec-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RECOMMENDATIONS.map((rec) => (
            <div
              key={rec.id}
              id={`rec-card-${rec.id}`}
              className="group relative bg-[#0F0F10] p-8 border border-white/5 hover:border-[#FAC700]/40 transition-all duration-300 flex flex-col justify-between rounded-sm cursor-pointer"
              onClick={() => setSelectedRec(rec)}
            >
              <div className="absolute top-0 right-8 transform -translate-y-1/2  bg-[#0A0A0B] border border-white/5 p-2 text-[#FAC700] group-hover:bg-[#FAC700] group-hover:text-stone-900 transition-colors">
                <FileText size={18} />
              </div>

              <div>
                <p className="font-serif italic text-stone-300 text-sm leading-relaxed mb-6 group-hover:text-stone-200 transition-colors">
                  "{rec.excerpt}"
                </p>
              </div>

              <div className="border-t border-white/5 pt-6 mt-4">
                <h4 className="font-sans text-sm font-semibold text-stone-100 tracking-wide">
                  {rec.author}
                </h4>
                <p className="font-mono text-xs text-[#FAC700] mt-1 font-medium">
                  {rec.title}
                </p>
                <p className="font-sans text-xs text-stone-500 mt-1">
                  {rec.institution}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">
                    {rec.relationship}
                  </span>
                  <span className="font-sans text-xs text-[#FAC700] font-semibold group-hover:underline flex items-center gap-1">
                    Read Letter
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Standard Simulated Institutional PDF Modal Layout */}
      <AnimatePresence>
        {selectedRec && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedRec(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white text-stone-900 w-full max-w-3xl rounded-sm shadow-2xl p-8 md:p-12 relative flex flex-col overflow-hidden max-h-[90vh] md:max-h-[94vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Toolbar */}
              <div className="flex justify-between items-center pb-6 border-b border-stone-200 sticky top-0 bg-white z-10 print:hidden">
                <div className="flex space-x-2">
                  <button
                    id="print-btn"
                    onClick={handlePrint}
                    className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 font-mono text-xs border border-stone-200 px-3 py-1.5 rounded bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer"
                  >
                    <Printer size={14} />
                    <span>Print as PDF</span>
                  </button>
                  <button
                    id="download-btn"
                    onClick={() => handleDownloadTxt(selectedRec)}
                    className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 font-mono text-xs border border-stone-200 px-3 py-1.5 rounded bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer"
                  >
                    <Download size={14} />
                    <span>Download TXT</span>
                  </button>
                </div>
                <button
                  id="close-btn"
                  onClick={() => setSelectedRec(null)}
                  className="p-1 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* The Official Printed Letterhead Container */}
              <div id="print-letterhead-content" className="flex-1 overflow-y-auto mt-6 print:m-0 print:p-0 font-serif text-stone-800 pr-2">
                {/* Print Header banner */}
                <div className="flex justify-between items-start border-b-2 border-stone-800 pb-8 mb-8">
                  <div>
                    <h3 className="font-sans font-bold tracking-widest text-xs text-stone-500 uppercase">
                      OFFICIAL TESTIMONIAL
                    </h3>
                    <h1 className="font-serif text-lg md:text-xl font-bold uppercase tracking-tight text-stone-900 mt-1">
                      {selectedRec.institution}
                    </h1>
                    <p className="font-sans text-[10px] text-stone-500 uppercase tracking-widest mt-0.5">
                      DEPARTMENT OF ARCHITECTURE & SPATIAL RESEARCH
                    </p>
                  </div>
                  <div className="text-right font-mono text-[10px] text-stone-500 flex flex-col items-end">
                    <span>REF: CS-2026-{selectedRec.id.toUpperCase()}</span>
                    <span>DATE: {selectedRec.date}</span>
                    <span className="text-amber-600 mt-1 flex items-center font-semibold gap-0.5">
                      <Award size={10} /> VERIFIED ORIGINAL
                    </span>
                  </div>
                </div>

                {/* Sub Metadata block */}
                <div className="mb-8 text-xs font-sans text-stone-600 bg-stone-50 p-4 border border-stone-200 flex flex-wrap justify-between pr-8">
                  <div>
                    <span className="font-semibold block text-stone-800">RECOMMENDER:</span>
                    <span>{selectedRec.author} ({selectedRec.title})</span>
                  </div>
                  <div className="border-l border-stone-300 pl-4">
                    <span className="font-semibold block text-stone-800">CONTEXT:</span>
                    <span>{selectedRec.relationship}</span>
                  </div>
                </div>

                {/* Opening greeting */}
                <p className="font-serif font-bold text-sm text-stone-950 mb-6">
                  TO WHOM IT MAY CONCERN / THE MEMBERS OF THE SELECTION COMMITTEE,
                </p>

                {/* Main Formal body content with standard paragraph wraps */}
                <div className="space-y-4 text-xs font-sans md:text-sm text-stone-800 leading-relaxed font-normal whitespace-pre-wrap">
                  {selectedRec.fullLetter}
                </div>

                {/* Closing signature */}
                <div className="mt-12 pt-8 border-t border-stone-100 flex justify-between items-end">
                  <div className="text-xs">
                    <p className="font-sans text-stone-500 uppercase tracking-widest">ENDORSED BY:</p>
                    <p className="font-serif font-bold text-stone-950 mt-1">{selectedRec.author}</p>
                    <p className="font-sans text-[11px] text-stone-500">{selectedRec.title}</p>
                    <p className="font-sans text-[11px] text-stone-500">{selectedRec.institution}</p>
                  </div>
                  
                  {/* Decorative Institutional stamp */}
                  <div className="text-right flex flex-col items-center opacity-65 translate-y-3">
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-stone-400 flex items-center justify-center text-[10px] text-stone-400 font-mono rotate-12 select-none">
                      <span className="text-center font-bold font-sans">APPROVED<br/>SEAL</span>
                    </div>
                    <span className="font-mono text-[9px] text-stone-400 mt-1">{selectedRec.institution.split(',')[0]}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
