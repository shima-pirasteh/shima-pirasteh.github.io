import { RECOMMENDATIONS } from "../data";
import { Download, ShieldCheck, FileText } from "lucide-react";

export default function Recommendations() {
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
            <a
              key={rec.id}
              href={rec.url}
              download
              className="group relative bg-[#0F0F10] p-8 border border-white/5 hover:border-[#FAC700]/40 transition-all duration-300 flex flex-col justify-between rounded-sm"
            >
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#0A0A0B] border border-white/5 p-2 text-[#FAC700] group-hover:bg-[#FAC700] group-hover:text-stone-900 transition-colors">
                <Download size={18} />
              </div>

              {/* PDF Preview */}
              <div className="w-full h-48 overflow-hidden rounded-sm mb-6 bg-stone-900 border border-white/5 relative">
                {/* PDF badge */}
                <div className="absolute top-0 left-0 z-10 bg-[#FAC700] text-stone-900 font-mono text-[10px] font-bold px-2 py-1 rounded-br-sm tracking-widest">
                  PDF
                </div>

                <iframe
                  src={`${rec.url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title={`${rec.author} recommendation letter preview`}
                  className="w-full h-full pointer-events-none"
                  style={{ border: "none" }}
                  loading="lazy"
                  aria-hidden="true"
                  onError={(e) => {
                    // Hide iframe and show fallback on error
                    (e.currentTarget as HTMLIFrameElement).style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />

                {/* Fallback if iframe fails (e.g. browser blocks inline PDF) */}
                <div
                  className="absolute inset-0 hidden items-center justify-center flex-col gap-2 bg-stone-900"
                  aria-hidden="true"
                >
                  <FileText size={32} className="text-stone-600" />
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">
                    Letter of Recommendation
                  </span>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 mt-4">
                <h4 className="font-sans text-sm font-semibold text-stone-100 tracking-wide">{rec.author}</h4>
                <p className="font-mono text-xs text-[#FAC700] mt-1 font-medium">{rec.title}</p>
                <p className="font-sans text-xs text-stone-500 mt-1">{rec.institution}</p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">
                    {rec.relationship}
                  </span>
                  <span className="font-sans text-xs text-[#FAC700] font-semibold group-hover:underline flex items-center gap-1">
                    Download Letter
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
