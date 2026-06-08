import { useState, useMemo } from "react";
import { PROJECTS } from "../data";
import ProjectCard from "./ProjectCard";
import { Filter, RotateCcw, Tag } from "lucide-react";
import { AnimatePresence } from "motion/react";

interface ProjectsSectionProps {
  onSelectProject: (id: string) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedTools, setSelectedTools] = useState<string[]>([]);

  // Collect all unique tools across our local data to construct filter buttons dynamically
  const uniqueTools = useMemo(() => {
    const toolsSet = new Set<string>();
    PROJECTS.forEach((p) => {
      p.tools.forEach((t) => toolsSet.add(t));
    });
    return Array.from(toolsSet);
  }, []);

  // Filter project lists
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((v) => {
      // Filter by Type (Category)
      const matchesType = selectedType === "All" || v.category === selectedType;
      // Filter by Tools tags (Cumulative AND or matches any)
      const matchesTools =
        selectedTools.length === 0 ||
        selectedTools.every((tool) => v.tools.includes(tool));
      return matchesType && matchesTools;
    });
  }, [selectedType, selectedTools]);

  const handleToolToggle = (tool: string) => {
    setSelectedTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  };

  const resetFilters = () => {
    setSelectedType("All");
    setSelectedTools([]);
  };

  return (
    <section id="projects" className="pt-32 pb-24 bg-[#0A0A0B] px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Block */}
        <div id="projects-desc" className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FAC700] font-semibold mb-3 block">
            Selected Works
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-100 tracking-tight leading-none">
            Structural & Spatial Catalog
          </h2>
          <p className="mt-4 text-stone-400 text-sm md:text-base max-w-2xl">
            A comprehensive overview of architectural models, computational heritage preservation grids, and interactive narrative spaces. Filter below by work dimension or production tool.
          </p>
        </div>

        {/* Dynamic Filter Tray Panel */}
        <div 
          id="filters-panel" 
          className="bg-[#111112] p-6 border border-white/5 rounded-sm mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="space-y-4 flex-1">
            {/* Filter Category 1: Practice Types */}
            <div>
              <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest block mb-2 font-medium flex items-center gap-1.5">
                <Filter size={10} /> Filter by Discipline
              </span>
              <div className="flex flex-wrap gap-2">
                {["All", "Architecture", "Cultural Heritage", "Experience Design"].map((type) => (
                  <button
                    key={type}
                    id={`filter-type-${type.replace(/\s+/g, "_")}`}
                    onClick={() => setSelectedType(type)}
                    className={`font-mono text-xs px-3.5 py-1.5 border transition-all duration-300 rounded-sm cursor-pointer ${
                      selectedType === type
                        ? "bg-[#FAC700] border-[#FAC700] text-stone-950 font-semibold"
                        : "border-white/5 hover:border-[#FAC700] text-stone-400 hover:text-stone-200"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Category 2: Software / Tools tags */}
            <div>
              <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest block mb-1.5 font-medium flex items-center gap-1.5">
                <Tag size={10} /> Filter by Project Tools
              </span>
              <div className="flex flex-wrap gap-1.5">
                {uniqueTools.map((tool) => (
                  <button
                    key={tool}
                    id={`filter-tool-${tool.replace(/\s+/g, "_")}`}
                    onClick={() => handleToolToggle(tool)}
                    className={`font-mono text-[10px] px-2.5 py-1.5 border transition-all duration-200 rounded-sm cursor-pointer ${
                      selectedTools.includes(tool)
                        ? "border-[#FAC700]/85 bg-[#FAC700]/10 text-[#FAC700]"
                        : "border-white/5 bg-[#0F0F10] hover:border-[#FAC700]/40 text-stone-400 hover:text-stone-300"
                    }`}
                  >
                    {tool} {selectedTools.includes(tool) && "✕"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Reset Action */}
          {(selectedType !== "All" || selectedTools.length > 0) && (
            <button
              id="reset-filters-btn"
              onClick={resetFilters}
              className="font-mono text-xs text-stone-500 hover:text-[#FAC700] transition-colors flex items-center gap-1.5 cursor-pointer py-2 px-3 border border-white/5 hover:border-[#FAC700] bg-[#0A0A0B]/40 rounded-sm self-start md:self-center"
            >
              <RotateCcw size={12} />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Projects Grid Container with motion items layout */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} onSelect={onSelectProject} />
            ))}
          </AnimatePresence>

          {/* Zero results container */}
          {filteredProjects.length === 0 && (
            <div id="zero-state-view" className="col-span-full py-16 flex flex-col items-center justify-center text-center">
              <span className="font-serif italic text-lg text-stone-500">
                No matching projects conform to your selected categories.
              </span>
              <button
                onClick={resetFilters}
                className="mt-4 font-mono text-xs text-[#FAC700] hover:underline flex items-center gap-1 cursor-pointer"
              >
                Clear active filter requirements
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
