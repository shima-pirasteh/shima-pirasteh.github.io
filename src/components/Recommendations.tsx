import { RECOMMENDATIONS } from "../data";
import { Download, ShieldCheck, FileText, X, ZoomIn } from "lucide-react";
import { useState } from "react";

export default function Recommendations() {
  const [activePreview, setActivePreview] = useState<string | null>(null);

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
              Verbatim assessments from academic supervisors, global partners, and architectural firm directors
              highlighting design intelligence and collaborative execution.
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
              className="group relative bg-[#0F0F10] p-8 border border-white/5 hover:border-[#FAC700]/40 transition-all duration-300 flex flex-col justify-between rounded-sm"
            >
              <a
                href={rec.url}
                download
                onClick={(e) => e.stopPropagation()}
                className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#0A0A0B] border border-white/5 p-2 text-[#FAC700] hover:bg-[#FAC700] hover:text-stone-900 transition-colors z-10"
              >
                <Download size={18} />
              </a>

              <button
                onClick={() => setActivePreview(rec.url)}
                className="w-full h-48 overflow-hidden rounded-sm mb-6 bg-stone-900 border border-white/5 relative cursor-zoom-in"
              >
                <div className="absolute top-0 left-0 z-10 bg-[#FAC700] text-stone-900 font-mono text-[10px] font-bold px-2 py-1 rounded-br-sm tracking-widest">
                  PDF
                </div>
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="bg-[#0A0A0B]/80 border border-[#FAC700]/40 p-2 rounded-sm">
                    <ZoomIn size={20} className="text-[#FAC700]" />
                  </div>
                </div>
                <iframe
                  src={`${rec.url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title={`${rec.author} recommendation letter preview`}
                  className="w-full h-full pointer-events-none"
                  style={{ border: "none" }}
                  loading="lazy"
                  aria-hidden="true"
                  onError={(e) => {
                    (e.currentTarget as HTMLIFrameElement).style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  className="absolute inset-0 hidden items-center justify-center flex-col gap-2 bg-stone-900"
                  aria-hidden="true"
                >
                  <FileText size={32} className="text-stone-600" />
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">
                    Letter of Recommendation
                  </span>
                </div>
              </button>

              <div className="border-t border-white/5 pt-6 mt-4">
                <h4 className="font-sans text-sm font-semibold text-stone-100 tracking-wide">{rec.author}</h4>
                <p className="font-mono text-xs text-[#FAC700] mt-1 font-medium">{rec.title}</p>
                <p className="font-sans text-xs text-stone-500 mt-1">{rec.institution}</p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">
                    {rec.relationship}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {activePreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActivePreview(null)}
        >
          <div
            className="relative w-[90vw] max-w-4xl h-[90vh] bg-[#0F0F10] border border-white/10 rounded-sm shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/5">
              <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">Preview</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setActivePreview(null)}
                  className="text-stone-500 hover:text-stone-200 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <iframe
              src={`${activePreview}#toolbar=0&navpanes=0&view=FitH`}
              title="Recommendation letter full preview"
              className="w-full flex-1 rounded-b-sm"
              style={{ border: "none" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
