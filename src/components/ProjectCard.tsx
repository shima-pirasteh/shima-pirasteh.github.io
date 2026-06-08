import { Project } from "../types";
import { ArrowUpRight, Compass, Landmark, Lightbulb } from "lucide-react";
import { motion } from "motion/react";

interface ProjectCardProps {
  key?: string;
  project: Project;
  onSelect: (id: string) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  // Category indicators
  const categoryIcon = () => {
    switch (project.category) {
      case "Architecture":
        return <Compass size={14} className="text-[#FAC700]" />;
      case "Cultural Heritage":
        return <Landmark size={14} className="text-[#FAC700]" />;
      case "Experience Design":
        return <Lightbulb size={14} className="text-[#FAC700]" />;
    }
  };

  return (
    <motion.div
      id={`project-card-${project.id}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="group relative bg-[#0F0F10] overflow-hidden border border-white/5 hover:border-[#FAC700]/50 rounded-sm cursor-pointer"
      onClick={() => onSelect(project.id)}
    >
      {/* Aspect Ratio Box (4:3) with Zooming Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0A0B]">
        <img
          src={project.thumbnail}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover Dimming Overlay */}
        <div className="absolute inset-0 bg-[#0A0A0B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex flex-col justify-end p-6" />

        {/* Custom Slide-up overlay displaying quick overview on Hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out">
          <p className="font-sans text-xs text-stone-300 leading-relaxed mb-4 line-clamp-3">
            {project.summary}
          </p>
          <span className="font-mono text-xs text-[#FAC700] uppercase font-bold tracking-widest flex items-center gap-1">
            Read Case Study <ArrowUpRight size={14} />
          </span>
        </div>

        {/* Static Category Badge (Top Left) */}
        <div className="absolute top-4 left-4 bg-[#0A0A0B]/80 backdrop-blur border border-white/5 px-2.5 py-1 flex items-center gap-1.5 rounded-sm">
          {categoryIcon()}
          <span className="font-mono text-[10px] uppercase font-bold text-stone-300 tracking-wider">
            {project.category}
          </span>
        </div>
      </div>

      {/* Structural Card Details Base */}
      <div className="p-6">
        <h3 className="font-serif text-lg text-stone-100 group-hover:text-[#FAC700] transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="font-sans text-stone-400 text-xs mt-1 font-medium">
          {project.subtitle}
        </p>

        {/* Inline tool labels */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] uppercase bg-[#0A0A0B] text-stone-400 border border-white/5 px-2 py-0.5 rounded-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
