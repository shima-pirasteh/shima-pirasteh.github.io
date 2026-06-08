import { Compass, Landmark, Settings, Award } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Compass className="text-amber-400" size={24} />,
      title: "Contextual Architecture",
      description: "Designing responsive physical spaces grounded in the environmental forces and materials of their local geography, with a strong focus on sustainable timber joinery and passive heating systems."
    },
    {
      icon: <Landmark className="text-amber-400" size={24} />,
      title: "Cultural Heritage Analysis",
      description: "Using non-destructive subsurface scanning, drone lithography, and advanced GIS spatial modeling to document, map, and preserve deteriorating historical ruins under climate duress."
    },
    {
      icon: <Settings className="text-amber-400" size={24} />,
      title: "Experience Design",
      description: "Bridging intangible local narratives and physical exhibitions. Translating complex geographic tracks and archaeological datasets into sensory tactile installations for public discovery."
    }
  ];

  return (
    <section id="about" className="pt-32 pb-24 bg-[#0F0F10] px-6 md:px-12 lg:px-24 text-stone-300 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div id="about-columns" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Editorial Bio */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FAC700] font-semibold mb-3 block">
                Philosophy & Vision
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-100 tracking-tight leading-tight">
                Synthesizing physical structures with historical memory.
              </h2>
            </div>

            <div className="mt-8 space-y-6 text-stone-400 font-sans text-sm md:text-base leading-relaxed">
              <p>
                I operate at the intersection of three distinct disciplines: contemporary bio-climatic architecture, regional GIS-based heritage mapping, and interactive experience design.
              </p>
              <p>
                To me, a building is never merely a shell; it is a structural vehicle of culture. Every site holds stored spatial memories, geographical lines, and climatic stories that have developed over centuries. My goal is to listen to these cues, translating raw local timber and stone into active, modern spaces.
              </p>
              <p>
                By linking traditional material craft (like Shou Sugi Ban charring and mortise-and-tenon framing) with contemporary sensor integrations, I build environments that feel highly structural, historically rooted, and completely alive.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-3 gap-4">
              <div>
                <span className="font-serif text-2xl md:text-3xl text-[#FAC700] block font-medium">8+</span>
                <span className="font-mono text-[10px] uppercase text-stone-500 tracking-widest mt-1 block">Years of Practice</span>
              </div>
              <div>
                <span className="font-serif text-2xl md:text-3xl text-[#FAC700] block font-medium">14</span>
                <span className="font-mono text-[10px] uppercase text-stone-500 tracking-widest mt-1 block">Preserved Sites</span>
              </div>
              <div>
                <span className="font-serif text-2xl md:text-3xl text-[#FAC700] block font-medium">120K</span>
                <span className="font-mono text-[10px] uppercase text-stone-500 tracking-widest mt-1 block">Exhibition Visitors</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Pillars & Skills */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#111112] p-8 border border-white/5 rounded-sm">
              <h3 className="font-serif text-xl text-stone-100 mb-6 flex items-center gap-2">
                <Award size={20} className="text-[#FAC700]" /> Core Practice Dimensions
              </h3>
              
              <div className="space-y-8">
                {pillars.map((p, idx) => (
                  <div key={idx} id={`pillar-${idx}`} className="flex gap-4 items-start pb-6 border-b border-white/5 last:border-none last:pb-0">
                    <div className="p-3 bg-[#0A0A0B] border border-white/5 rounded">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-[#f5f5f5] text-sm tracking-wide mb-1.5">
                        {p.title}
                      </h4>
                      <p className="font-sans text-stone-400 text-xs md:text-sm leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Software Competencies Grid */}
            <div className="bg-[#111112] p-8 border border-white/5 rounded-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#f0f0f0] mb-4 font-semibold">
                Core Software & Tools Architecture
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Revit (BIM)", "AutoCAD", "Rhino 3D", "Grasshopper", 
                  "ArcGIS", "QGIS", "Adobe Suite", "Figma", "Photogrammetry"
                ].map((tag) => (
                  <div 
                    key={tag} 
                    className="bg-[#0A0A0B] border border-white/5 px-3 py-2 text-stone-300 font-mono text-xs hover:border-[#FAC700]/40 hover:text-[#FAC700] transition-colors text-center cursor-default rounded-sm"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
