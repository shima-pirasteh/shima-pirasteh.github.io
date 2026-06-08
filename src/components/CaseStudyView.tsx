import { useEffect, useState } from "react";
import { Project } from "../types";
import { PROJECTS } from "../data";
import { ArrowLeft, ArrowRight, Home, MapPin, Calendar, Briefcase, Cpu, X, ZoomIn, Award, ChevronDown, ChevronUp, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const RECRUITER_SPEC_MAPPING: Record<string, {
  category: string;
  badge: string;
  summary: string;
  items: { requirement: string; explanation: string }[];
  toolsUsed: string[];
}> = {
  "the-city-porch": {
    category: "3D Modeling & Digital Sculpting",
    badge: "Core Technical Mastery",
    summary: "Demonstrates advanced structural modeling and parametric hillside terrain optimization required for rapid urban prototyping.",
    items: [
      {
        requirement: "3D Modeling & Mesh Curation (Rhino, 3ds Max)",
        explanation: "Utilized Rhino and 3ds Max for steep hillside massing, implementing complex modular building shells that conform with extreme topographic gradients of the Tehran hillside without causing soil disruption."
      },
      {
        requirement: "Real-time Optimization",
        explanation: "Engineered clean, low-polygon mesh topologies for the complex cantilevered bridge structures, facilitating rapid design changes and smooth client-side rendering during iterative reviews."
      },
      {
        requirement: "Product & Furniture Geometry",
        explanation: "Integrated scaled-down modular components and structural joints acting as custom spatial elements within the double-height hillside cultural pavilions."
      }
    ],
    toolsUsed: ["Rhino", "3ds Max", "AutoCAD", "V-Ray"]
  },
  "health-tower": {
    category: "Digital Sculpting & Biomimetic Environments",
    badge: "Core Technical Mastery",
    summary: "Exemplifies advanced organic modeling, spatial sculpting of natural systems, and interactive sun-path simulation.",
    items: [
      {
        requirement: "Digital Sculpting (Environments, Artifacts, Characters)",
        explanation: "Sculpted dynamic, biomorphic folding envelope geometry mimicking plant-growth tissues, modeling organic surface stretching and smooth mesh transitions that respond to thermal loads."
      },
      {
        requirement: "Real-time Optimization",
        explanation: "Optimized complex shell surface geometry to lower computational load on the system, keeping viewport frame-rates high and facilitating smooth walkthroughs."
      },
      {
        requirement: "Environmental Animation (Lumion)",
        explanation: "Produced cinematic, highly detailed time-lapsed sun-path evaluations in Lumion, charting shadow shifts and thermal facade reactions across varying seasons."
      }
    ],
    toolsUsed: ["Rhino", "ZBrush/Vray", "Lumion", "Revit", "AutoCAD"]
  },
  "shariati-clinic": {
    category: "Redshift Physically-Based Rendering & Optimization",
    badge: "Core Photorealistic Rendering",
    summary: "Demonstrates meticulous clinical space planning and warm biophilic material mapping using industry-leading physically based engines.",
    items: [
      {
        requirement: "Redshift Physically-Based Render Engine",
        explanation: "Configured hyper-realistic PBR shaders (refraction tracking on circular glass dividers, physical light scattering on warm vertical wood slats, and ambient occlusion on medical desk modules)."
      },
      {
        requirement: "Real-time Optimization",
        explanation: "Maintained a lightweight, clean polygon layout for interior clinical zones to allow rapid animation rendering, reducing frame computation time significantly."
      },
      {
        requirement: "Meticulous Detail Curation",
        explanation: "Engineered stress-reducing spatial acoustics, functional lighting fixtures, and ambient indirect light setups that promote patient psychological recovery."
      }
    ],
    toolsUsed: ["Redshift", "Rhino 3D", "Revit", "AutoCAD", "V-Ray"]
  },
  "interior-renovation": {
    category: "PBR Materials & Spatial Volume Renovation",
    badge: "Advanced Interior Design",
    summary: "Highlights capability to maximize constrained spatial volumes through open-floor plans and detailed material reflections in Redshift.",
    items: [
      {
        requirement: "Redshift Physically-Based Rendering",
        explanation: "Simulated realistic interior daylight bounces across polished stone floorings and customized brushed-brass metal frames, producing publication-quality renders for CHAAR Studio portfolio."
      },
      {
        requirement: "Real-time Optimization",
        explanation: "Converted heavy high-poly furniture assets of the dining and bedroom areas into clean, low-poly proxied formats for seamless digital walkthroughs."
      },
      {
        requirement: "Commercial Design Workflow (Sabad)",
        explanation: "Applied the same systematic real-time rendering and motion practices developed for the Sabad project to render rapid walk-through simulations of apartment transitions."
      }
    ],
    toolsUsed: ["Redshift", "Rhino 3D", "AutoCAD", "Photoshop"]
  },
  "kiashahr-villa": {
    category: "Energy-Efficient Visual Rendering & Passive Design",
    badge: "Sustainable Architecture Mastery",
    summary: "Fuses northern Iranian humid-climate vernacular architecture with high-fidelity, meticulously detailed environmental renders.",
    items: [
      {
        requirement: "Visual Rendering (Meticulously Detailed)",
        explanation: "Rendered highly precise architectural light angles and water reflecting surfaces, illustrating exactly how wind tracks across the linear courtyard pool."
      },
      {
        requirement: "Energy-Efficient Modeling",
        explanation: "Simulated passive bioclimatic cooling models that reduce active mechanical HVAC reliance by 30% through calculated wind channeling and thermodynamic courtyard ratios."
      },
      {
        requirement: "Vernacular Integration",
        explanation: "Blended the privacy-centric introverted central courtyard typology with an elevated northern Gilani Talar balcony footprint."
      }
    ],
    toolsUsed: ["Rhino", "Revit", "AutoCAD", "Lumion", "Passive Cooling Specs"]
  },
  "largan-villa": {
    category: "Energy-Efficient Visual Rendering & Mountain Design",
    badge: "Tactical Spatial Solutions",
    summary: "Addresses harsh high-altitude climates through severe snow wind modeling, sharp asymmetric gables, and thermal compact footprints.",
    items: [
      {
        requirement: "Visual Rendering (Meticulously Detailed)",
        explanation: "Produced photorealistic alpine scenes illustrating extreme snow loads and winter solar gains. Calculated wind-deflecting gable profiles in 3D."
      },
      {
        requirement: "Compact Footprint Modeling",
        explanation: "Optimized internal programmatic volumes, centering layout flow around an outstanding elevated viewing porch that maximizes surrounding forestry vistas."
      },
      {
        requirement: "Climatic Thermal Optimization",
        explanation: "Configured microclimate thermal envelopes to resist cold mountain downdrafts, demonstrating energy-efficient design metrics."
      }
    ],
    toolsUsed: ["Rhino", "AutoCAD", "Revit", "Lumion", "PBR Shaders"]
  },
  "sabad-organic-store": {
    category: "Graphic Design, Branding & Adobe Illustrator",
    badge: "Brand Identity & Motion Mastery",
    summary: "Maintains a pristine brand system, combining vector branding guidelines and commercial computer motion designs.",
    items: [
      {
        requirement: "Adobe Illustrator (Identity & Branding)",
        explanation: "Designed the absolute brand mark, vector typography frameworks, visual logos, packaging seals, and commercial business tags using hand-crafted organic guidelines in Illustrator."
      },
      {
        requirement: "Computer Animation (Sabad Animation Project)",
        explanation: "Created dynamic, moving typographic advertisements and video trailers simulating product shelf-placements and visual walkthroughs of the stores."
      },
      {
        requirement: "Earthen Wayfinding Curation",
        explanation: "Designed clean wooden directional signs, rammed-earth display dividers, and path-finding systems that guide customers organically across separate room settings."
      }
    ],
    toolsUsed: ["Adobe Illustrator", "Photoshop", "Rhino", "3ds Max", "Sabad Animation"]
  },
  "garden-tower": {
    category: "Graphic Design, Branding & Presentation Systems",
    badge: "Editorial & Branding Design",
    summary: "Integrates complex high-rise programmatic layout templates into highly professional municipal design packages.",
    items: [
      {
        requirement: "Adobe Illustrator & Editorial Layout",
        explanation: "Created extensive proposal guides, incorporating site analysis infographics, customized typography vectors, and modular housing floor diagrams."
      },
      {
        requirement: "Adobe InDesign (Presentation 06 Standards)",
        explanation: "Synthesized advanced master plans and high-capacity architectural presentation books ('Eyvane Shahr Presentation 06') for municipal committees, upholding beautiful print layout standards."
      },
      {
        requirement: "Branding and Visual Presentation",
        explanation: "Established a cohesive branding package for the residential tower, translating complex green architecture metrics into elegant, human-centric visual guidelines."
      }
    ],
    toolsUsed: ["Adobe Illustrator", "Adobe InDesign", "Photoshop", "Rhino 3D", "Revit"]
  },
  "sea-ecomuseum": {
    category: "Wayfinding & Inclusive Museum Experience Design",
    badge: "Advanced Human Experience Curation",
    summary: "Highlights master-level architectural storytelling and intuitive wayfinding systems designed to make cultural environments universally navigable.",
    items: [
      {
        requirement: "Spatial Wayfinding (Museum Design)",
        explanation: "Engineered a fluid pedestrian navigation sequence inspired by maritime ropes. Used a prominent linear red pier that acts as a physical wayfinding spine, drawing visitors seamlessly from the high-tide shore into spherical gallery nodes."
      },
      {
        requirement: "Universal Design Principles (Accessibility/UDL)",
        explanation: "Implemented high-contrast directional paths, non-glare interior galleries, sound-damped exhibition walls, and graduated floor heights to guarantee seamless navigation for senior, neurodivergent, and physically-impaired individuals."
      },
      {
        requirement: "Fluid Coastal Geometry",
        explanation: "Translated high-friction beach-water thresholds into curved, accessible ramp networks, ensuring standard compliance while retaining poetic structural grace."
      }
    ],
    toolsUsed: ["Rhino 3D", "AutoCAD", "Revit", "CorelDraw", "Wayfinding Mockups"]
  },
  "rolling-nest": {
    category: "Branding, WebGL, AR/VR & Inclusive Narrative Design",
    badge: "Immersive Universal Design",
    summary: "Combines modular micro-housing engineering with digital identity systems, WebGL viewport 3D optimization, and senior-friendly physical accessibility.",
    items: [
      {
        requirement: "Editorial Graphic Design & Branding",
        explanation: "Created corporate branding cards, comprehensive business plan layouts, and customized English trifold booklets. Established typographic grids on heavy textured linen canvas."
      },
      {
        requirement: "WebGL & AR/VR Mobile Integration",
        explanation: "Optimized complex 3D shell meshes (under 15k polylines) for real-time WebGL portfolio viewer rendering. Developed UI parameters for AR companion apps to let nomads visualize spatial overlays on real-world sites."
      },
      {
        requirement: "Universal Design & Inclusive Narratives",
        explanation: "Applied strict Universal Design (UDL) guidelines inside the UI/UX layout (large tap areas, customizable typography weights, and light/dark contrasting interfaces) paired with physiological grounding elements in the interior layout."
      }
    ],
    toolsUsed: ["Figma", "Rhino 3D", "Adobe Suite (Illustrator/InDesign)", "Marvelous Designer", "WebGL/WebXR Preview"]
  },
  "verde-vista": {
    category: "Organic Experience Design & Tactile Branding Systems",
    badge: "Sustainable Experiential Design",
    summary: "A world-class organic brand identity fusing deep soil pigments with compostable physical product layouts and senior-friendly digital grids.",
    items: [
      {
        requirement: "Adobe Illustrator & Packaging Systems",
        explanation: "Engineered custom vector seals, whole-bean coffee bags, plantable seed tags made of course recycled paper, and high-contrast minimal garment details."
      },
      {
        requirement: "Universal & Inclusive Design (UDL)",
        explanation: "Formulated highly legible visual grids with ample breathing space and eye-safe, thick typography to enhance readability for elder and neurodiverse patrons in retail settings."
      },
      {
        requirement: "Earthen Brand Strategy",
        explanation: "Analyzed native soil profiles and mineral clay horizons to curate a grounding rustic terracotta-and-moss brand palette, defying surface level 'greenwashing'."
      }
    ],
    toolsUsed: ["Figma", "Adobe Illustrator", "Photoshop", "Packaging Dies", "Material Mockups"]
  },
  "product-modeling-2019": {
    category: "3D Modeling & Furniture Sculpting",
    badge: "Industrial & Asset Modeling",
    summary: "Demonstrates detailed 3D assets, custom textile wrinkling, structural joints, and high-fidelity rendering outputs using 3ds Max.",
    items: [
      {
        requirement: "3D Modeling (3ds Max & V-Ray/Corona)",
        explanation: "Modeled ergonomic and structurally precise parametric furniture designs, specializing in complex organic folds and fabric textures."
      },
      {
        requirement: "Real-time Optimization",
        explanation: "Optimized mesh subdivision levels to preserve raw hardware performance during large-scale digital interior walkthroughs."
      }
    ],
    toolsUsed: ["3ds Max", "Corona Renderer", "V-Ray", "Photoshop"]
  },
  "product-design-2019": {
    category: "Parametric Product Sculpting",
    badge: "Computational Manufacturing",
    summary: "Demonstrates parametric modeling and additive manufacturing design, translating numerical curves into structural ceramic assets in Rhino.",
    items: [
      {
        requirement: "Rhino + Parametric Modeling",
        explanation: "Engineered asymmetric physical clay/ceramic vessels using generative algorithms in Rhino, calculating material thicknesses and stress factors."
      },
      {
        requirement: "Additive Sculpting & Rapid Prototyping",
        explanation: "Prepared low-polygon optimized watertight STL files for clay 3D printing, avoiding print stress collapse."
      }
    ],
    toolsUsed: ["Rhino", "Keyshot", "Grasshopper", "3D Printing Profile"]
  },
  "farm-tower": {
    category: "Biomimetic Architectural Engineering",
    badge: "Sustainable Urban Infrastructure",
    summary: "Fuses vertical architectural farming geometries with computational phyllotaxis, optimizing layout structures for Tehran municipality.",
    items: [
      {
        requirement: "Biomimetic Digital Sculpting",
        explanation: "Modeled floorplate patterns rotating by precise plant phyllotaxic angles (120-144 degrees in Rhino) to minimize self-shading."
      },
      {
        requirement: "Environmental Design Integration",
        explanation: "Simulated natural sun-ray routes to evaluate food product growth output, demonstrating advanced ecological modeling capabilities."
      }
    ],
    toolsUsed: ["Rhino", "AutoCAD", "Revit", "V-Ray"]
  },
  "ajodanieh-complex": {
    category: "Computational Heritage Envelope Curation",
    badge: "Structural Architectural Design",
    summary: "Translates traditional Persian geometric patterns into deep parametric facade systems.",
    items: [
      {
        requirement: "Generative Pattern Modeling",
        explanation: "Engineered parametric dynamic facades based on traditional Chalipa motifs in Rhino, simulating direct sunlight insulation variables."
      },
      {
        requirement: "Real-time Optimization",
        explanation: "Restructured heavy decorative curves into lightweight modular panels, protecting 3D viewer memory performance."
      }
    ],
    toolsUsed: ["Rhino", "Grasshopper", "AutoCAD", "V-Ray"]
  }
};

interface CaseStudyViewProps {
  projectId: string;
  onBack: () => void;
  onNavigate: (id: string) => void;
}

export default function CaseStudyView({ projectId, onBack, onNavigate }: CaseStudyViewProps) {
  const project = PROJECTS.find((p) => p.id === projectId);
  const [activeLightbox, setActiveLightbox] = useState<{ src: string; caption: string } | null>(null);
  const [specExpanded, setSpecExpanded] = useState(true);

  // Auto scroll to top when mounting a new case study
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  // Escape key handler to close the photo lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightbox(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!project) {
    return (
      <div className="py-32 text-center text-stone-400 bg-[#0A0A0B] min-h-screen flex flex-col items-center justify-center">
        <p className="font-serif italic text-lg">Case study or project layout not found.</p>
        <button
          onClick={onBack}
          className="mt-6 font-mono text-xs text-[#FAC700] border border-white/5 px-4 py-2 hover:bg-[#0F0F10] transition-colors cursor-pointer"
        >
          Return to home
        </button>
      </div>
    );
  }

  // Find index to support Next project iteration
  const currentIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div id="case-study-route-root" className="bg-[#0A0A0B] text-stone-300 min-h-screen pb-24 selection:bg-[#FAC700] selection:text-stone-950">
      
      {/* Minimal Sticky Nav header */}
      <nav id="case-study-nav" className="sticky top-0 z-40 bg-[#0A0A0B]/90 backdrop-blur border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <button
          id="cs-back-home"
          onClick={onBack}
          className="flex items-center space-x-2 font-mono text-xs uppercase tracking-wider text-stone-400 hover:text-[#FAC700] transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Home & Catalog</span>
        </button>
        
        <span className="font-serif text-sm italic text-stone-500 hidden md:inline">
          {project.category} / {project.title}
        </span>

        <button
          id="cs-jump-next"
          onClick={() => onNavigate(nextProject.id)}
          className="flex items-center space-x-1.5 font-mono text-xs uppercase tracking-wider text-[#FAC700] hover:text-[#FAC700]/80 transition-colors cursor-pointer"
        >
          <span>Next Project</span>
          <ArrowRight size={14} />
        </button>
      </nav>

      {/* Hero Banner Area */}
      <header 
        id="cs-hero" 
        className="relative aspect-[16/6] md:aspect-[16/5] bg-[#0A0A0B] w-full overflow-hidden cursor-zoom-in group"
        onClick={() => setActiveLightbox({ src: project.thumbnail, caption: `${project.title} - Hero Showcase` })}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/50 to-transparent z-10" />
        <img
          src={project.thumbnail}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover grayscale opacity-90 scale-100 transition-transform duration-[1200ms] group-hover:scale-101 group-hover:opacity-100 transition-all duration-700 ease-out"
        />
        <div className="absolute bottom-8 left-6 md:left-12 lg:left-24 z-20 max-w-4xl pr-6 pointer-events-none select-none">
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#FAC700] bg-[#0A0A0B]/80 px-2.5 py-1 rounded border border-white/5">
            {project.category}
          </span>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-stone-100 tracking-tight leading-tight mt-4">
            {project.title}
          </h1>
          <p className="mt-2 text-stone-400 text-sm md:text-lg font-sans">
            {project.subtitle}
          </p>
        </div>
        <div className="absolute top-4 right-4 z-20 bg-[#0A0A0B]/85 backdrop-blur-sm border border-white/5 rounded-sm px-2.5 py-1 flex items-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <ZoomIn size={10} className="text-[#FAC700]" />
          <span className="font-mono text-[8px] text-[#FAC700] uppercase tracking-widest font-semibold">Click to enlarge Hero</span>
        </div>
      </header>

      {/* Main Structural Body */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mt-12 animate-fade-in">
        
        {/* Recruiter Specs Match Dashboard */}
        {(() => {
          const spec = RECRUITER_SPEC_MAPPING[project.id];
          if (!spec) return null;
          return (
            <div id="recruiter-alignment-card" className="mb-12 border border-[#FAC700]/15 bg-[#111112]/90 rounded-sm overflow-hidden shadow-lg select-none">
              <button
                onClick={() => setSpecExpanded(!specExpanded)}
                className="w-full flex items-center justify-between p-6 bg-[#FAC700]/5 hover:bg-[#FAC700]/10 transition-colors text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-sm bg-[#FAC700]/10 border border-[#FAC700]/20 text-[#FAC700]">
                    <Award size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-stone-500 font-bold">Hiring Manager Tool</span>
                      <span className="font-mono text-[8px] uppercase tracking-wider bg-[#FAC700]/10 text-[#FAC700] px-1.5 py-0.5 rounded font-black border border-[#FAC700]/20">{spec.badge}</span>
                    </div>
                    <h3 className="font-serif text-lg text-stone-100 mt-0.5 tracking-tight font-medium">
                      Career Criteria & Compliance Alignment
                    </h3>
                  </div>
                </div>
                <div className="text-stone-400 font-mono text-xs flex items-center space-x-2">
                  <span className="hidden sm:inline">{specExpanded ? "Collapse Details" : "Inspect Compliance Matches"}</span>
                  {specExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {specExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <div className="p-6 md:p-8 space-y-6">
                      {/* Summary Paragraph */}
                      <div className="space-y-1.5">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#FAC700] block">Professional Alignment Context</span>
                        <p className="text-stone-300 text-sm leading-relaxed font-sans max-w-4xl">
                          {spec.summary}
                        </p>
                      </div>

                      {/* Requirements Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                        {spec.items.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3 bg-[#0A0A0B]/60 p-4 border border-white/5 rounded-sm">
                            <div className="mt-0.5 p-1 rounded-sm bg-stone-900 border border-[#FAC700]/10 text-[#FAC700]">
                              <Check size={12} strokeWidth={3} />
                            </div>
                            <div className="space-y-1">
                              <span className="font-serif text-[13px] text-stone-100 font-semibold block">{item.requirement}</span>
                              <p className="text-stone-400 text-xs font-sans leading-relaxed">
                                {item.explanation}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tools Demonstrated Tag List */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-stone-500 font-semibold">Verified Toolchain:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {spec.toolsUsed.map((tool, idx) => (
                            <span 
                              key={idx} 
                              className="font-mono text-[9px] px-2 py-0.5 rounded-sm bg-[#1A1A1C] border border-white/5 text-stone-300 font-medium"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })()}

        <div id="cs-layout-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Metadata Grid (Left column for Desktop, full for mobile) */}
          <section id="cs-metadata" className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 self-start">
            <div className="bg-[#111112] border border-white/5 p-6 rounded-sm space-y-6">
              <h3 className="font-mono text-xs uppercase text-[#FAC700] tracking-widest font-bold border-b border-white/5 pb-3">
                Project Parameters
              </h3>

              <div id="meta-role" className="flex items-start space-x-3 text-xs md:text-sm">
                <Briefcase size={16} className="text-stone-500 mt-0.5" />
                <div>
                  <span className="font-mono text-[10px] text-stone-500 block uppercase tracking-wider font-semibold">My Role / Mandate</span>
                  <span className="text-stone-200 mt-0.5 block font-sans font-medium">{project.role}</span>
                </div>
              </div>

              <div id="meta-timeline" className="flex items-start space-x-3 text-xs md:text-sm">
                <Calendar size={16} className="text-stone-500 mt-0.5" />
                <div>
                  <span className="font-mono text-[10px] text-stone-500 block uppercase tracking-wider font-semibold">Timeline Span</span>
                  <span className="text-stone-200 mt-0.5 block font-sans font-medium">{project.timeline}</span>
                </div>
              </div>

              <div id="meta-location" className="flex items-start space-x-3 text-xs md:text-sm">
                <MapPin size={16} className="text-stone-500 mt-0.5" />
                <div>
                  <span className="font-mono text-[10px] text-stone-500 block uppercase tracking-wider font-semibold">Site Location</span>
                  <span className="text-stone-200 mt-0.5 block font-sans font-medium">{project.location}</span>
                </div>
              </div>

              <div id="meta-tools" className="flex items-start space-x-3 text-xs md:text-sm">
                <Cpu size={16} className="text-stone-500 mt-0.5" />
                <div>
                  <span className="font-mono text-[10px] text-stone-500 block uppercase tracking-wider font-semibold">Design Toolchain</span>
                  <span className="text-stone-200 mt-0.5 block font-sans font-medium leading-relaxed font-mono text-xs">
                    {project.tools.join(" // ")}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick quote representation */}
            <div className="border-l border-[#FAC700] pl-4 py-2 text-stone-400 text-xs italic font-serif">
              "We must design spatial experiences that bridge historical friction and modern fluidity."
            </div>
          </section>

          {/* Narrative Flow (Right Column with Key Visuals) */}
          <section id="cs-narrative" className="lg:col-span-8 space-y-12">
            
            {/* Short dynamic overview card */}
            <div className="bg-[#111112]/40 border border-white/5 p-6 md:p-8 rounded-sm space-y-3">
              <span className="font-mono text-[9px] uppercase text-[#FAC700] font-bold tracking-widest">
                Concept Summary
              </span>
              <p className="text-stone-200 text-sm md:text-base leading-relaxed font-sans">
                {project.summary}
              </p>
            </div>

            {/* Detailed inline image showing designed outcome caption */}
            {project.caseStudy.challenge.image && (
              <div className="space-y-3">
                <span className="font-mono text-[9px] uppercase text-stone-500 font-bold tracking-widest block">
                  Primary Architectural Visualization
                </span>
                <div 
                  className="aspect-[16/10] overflow-hidden bg-[#0A0A0B] border border-white/5 cursor-zoom-in group relative"
                  onClick={() => setActiveLightbox({ src: project.caseStudy.challenge.image!, caption: project.caseStudy.challenge.imageCaption || project.title })}
                >
                  <img
                    src={project.caseStudy.challenge.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-3 right-3 bg-[#0A0A0B]/85 backdrop-blur-sm border border-white/5 rounded-sm px-2.5 py-1 select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-1.5 z-10">
                    <ZoomIn size={10} className="text-[#FAC700]" />
                    <span className="font-mono text-[8px] text-[#FAC700] uppercase tracking-widest font-semibold shadow">
                      Expand View
                    </span>
                  </div>
                </div>
                {project.caseStudy.challenge.imageCaption && (
                  <p className="text-stone-500 text-xs italic font-sans">
                    {project.caseStudy.challenge.imageCaption}
                  </p>
                )}
              </div>
            )}

            {/* Simulated Technical Blueprint Drawing Graphic (Vector based) */}
            <article id="cs-blueprint-drawing" className="bg-[#111112]/40 p-6 border border-white/5 rounded-sm space-y-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-3">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#FAC700] bg-[#FAC700]/5 border border-[#FAC700]/15 px-2 py-0.5 rounded-sm">
                    FIG-01 // COMPUTATIONAL ELEVATION
                  </span>
                  <h4 className="font-serif text-stone-200 mt-2 text-sm tracking-wide font-medium">
                    Simulated Spatial Projection & Load Paths
                  </h4>
                </div>
                <span className="font-mono text-[9px] text-stone-500 mt-2 md:mt-0">
                  REF: S-PLAN // VECTOR 3.8
                </span>
              </div>

              {/* Blueprint Vector Drawing Canvas */}
              <div className="relative border border-white/5 bg-[#0A0A0B] p-4 aspect-[16/8] flex items-center justify-center overflow-hidden">
                {/* Thin technical grids */}
                <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-5 pointer-events-none">
                  {Array.from({ length: 72 }).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-[#FAC700]"></div>
                  ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <div className="w-64 h-64 border-2 border-dashed border-[#FAC700] rounded-full animate-spin-slow"></div>
                  <div className="absolute w-44 h-44 border border-dashed border-[#FAC700] rounded-full"></div>
                </div>

                {/* Styled blueprint vector drawing representing the project */}
                <svg className="w-full h-full text-[#FAC700]/70 opacity-80" viewBox="0 0 160 90">
                  <g stroke="currentColor" strokeWidth="0.5" fill="none">
                    {/* Horizon line */}
                    <line x1="10" y1="75" x2="150" y2="75" strokeDasharray="3,3" />

                    {/* Left blueprint tower elevation */}
                    <polygon points="25,75 25,30 50,30 50,75" />
                    <line x1="25" y1="41" x2="50" y2="41" />
                    <line x1="25" y1="52" x2="50" y2="52" />
                    <line x1="25" y1="63" x2="50" y2="63" />
                    <circle cx="37.5" cy="46.5" r="3" strokeDasharray="1,1" />

                    {/* Central spatial structure span / arches */}
                    <path d="M 50 75 Q 80 15 110 75" />
                    <path d="M 50 75 Q 80 23 110 75" strokeWidth="0.25" strokeDasharray="3,2" />
                    <line x1="80" y1="15" x2="80" y2="75" strokeWidth="0.25" strokeDasharray="2,2" />

                    {/* Right pavilion block */}
                    <polygon points="105,45 140,35 140,75 105,75" />
                    <line x1="105" y1="45" x2="140" y2="45" strokeWidth="0.25" />

                    {/* Load lines representation */}
                    <line x1="80" y1="45" x2="105" y2="45" strokeWidth="0.25" strokeDasharray="1,2" />
                    <line x1="80" y1="45" x2="50" y2="45" strokeWidth="0.25" strokeDasharray="1,2" />

                    {/* Crosshair annotations */}
                    <circle cx="80" cy="45" r="1.5" fill="currentColor" />
                    <circle cx="105" cy="45" r="1" fill="currentColor" />
                    <circle cx="50" cy="45" r="1" fill="currentColor" />
                  </g>
                </svg>

                <div className="absolute bottom-2 left-2 text-[8px] font-mono text-stone-500 uppercase">
                  Isometric Ground Load Projection // Lat-Persian Standard
                </div>
              </div>

              <p className="text-stone-500 font-sans text-xs italic">
                A draft elevation demonstrating the load vector paths, computational massing, and functional axes configured for topological harmony.
              </p>
            </article>

          </section>

        </div>

        {/* Dynamic Project Gallery Showcase Integration */}
        {project.gallery && project.gallery.length > 0 && (
          <section id="project-gallery-showcase" className="mt-20 pt-16 border-t border-stone-900 space-y-8">
            <div id="gallery-header" className="max-w-3xl">
              <span className="font-mono text-[9px] uppercase text-[#FAC700] font-bold tracking-widest bg-[#FAC700]/5 border border-[#FAC700]/15 px-2.5 py-1 rounded">
                Portfolio Deliverables
              </span>
              <h2 className="font-serif text-2xl text-stone-100 tracking-tight mt-3">
                Visual Artifacts & Technical Layouts
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {project.gallery.map((imgUrl, index) => {
                let customCaption = `Design deliverable model #${index + 1}`;
                if (imgUrl.includes("CANVA_proof_II-AY0PDHUL1nux-1")) {
                  customCaption = "Primary corporate branding card, delineating visual rules, minimal margins, and grid alignments.";
                } else if (imgUrl.includes("CANVA_proof_II-AY0PDHUL1nux-2")) {
                  customCaption = "Packaging design layouts, typographic specimen listings, and natural clay-and-forest color swatches.";
                } else if (imgUrl.includes("Screenshot 2024-01-15 222040")) {
                  customCaption = "Mobile dashboard interface - mapping active journey logs, member settings, and localized network resources.";
                } else if (imgUrl.includes("Screenshot 2024-01-15 222109")) {
                  customCaption = "Sustainable environment controls and automated micro-dwelling spatial configurations within the app.";
                } else if (imgUrl.includes("Screenshot 2024-01-15 222648")) {
                  customCaption = "Nomadic mobile application wireframe - managing member registrations, profile states, and metrics.";
                } else if (imgUrl.includes("Screenshot 2024-01-15 222758")) {
                  customCaption = "Interaction layout mapping connected micro-homes, live occupancy schedules, and key bookings.";
                } else if (imgUrl.includes("Screenshot 2024-01-15 235009")) {
                  customCaption = "Structural elevation and clearance curves simulating portable trailer towing ratios and wind loads.";
                } else if (imgUrl.includes("Screenshot 2024-01-16 000510")) {
                  customCaption = "The master Figma workspace layout, housing UI components, button states, and screen flow charts.";
                } else if (imgUrl.includes("2 2222")) {
                  customCaption = "Comprehensive workspace assets, tracking wireframe assemblies and logo typography prototypes.";
                } else if (imgUrl.includes("trifold-1")) {
                  customCaption = "Trifold brand brochure detailing the nomadic housing layouts, floor plan configurations, and system services.";
                } else if (imgUrl.includes("verdevista logo")) {
                  customCaption = "Verde Vista signature visual identity and brand seal, centering natural symmetries and balanced typography.";
                } else if (imgUrl.includes("pocket")) {
                  customCaption = "Minimalist cotton pocket detail featuring the hand-stitched branding badge and brand alignment guide.";
                } else if (imgUrl.includes("insta-logo")) {
                  customCaption = "The secondary social media representation, utilizing standard grid alignments and minimal margins.";
                } else if (imgUrl.includes("shirt-cart")) {
                  customCaption = "Ecommerce shopping interface showing the solid-cotton organic t-shirts packaging.";
                } else if (imgUrl.includes("coffee")) {
                  customCaption = "Organic retail packaging mockup for seasonal whole-bean coffee, constructed on textured biodegradable craft paper.";
                } else if (imgUrl.includes("food,tshirt")) {
                  customCaption = "Tactile brand material catalog pairing fresh ingredients with selected garments and raw textures.";
                } else if (imgUrl.includes("shop-bag")) {
                  customCaption = "The durable earthen-colored shopping bag constructed from recycled biodegradable paper fibers.";
                }

                return (
                  <div 
                    key={index}
                    id={`gallery-item-${index}`}
                    className="group bg-[#111112]/40 border border-stone-900 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#FAC700]/40 shadow-md cursor-zoom-in"
                    onClick={() => setActiveLightbox({ src: imgUrl, caption: customCaption })}
                  >
                    <div className="aspect-[4/3] bg-stone-950 overflow-hidden relative flex items-center justify-center">
                      <img
                        src={imgUrl}
                        alt={customCaption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-101 transition-all duration-500 ease-out"
                      />
                      <div className="absolute top-3 left-3 bg-[#0A0A0B]/80 backdrop-blur-sm border border-white/5 rounded-sm px-2 py-0.5 pointer-events-none select-none z-10">
                        <span className="font-mono text-[8px] text-stone-400 uppercase tracking-widest font-semibold">
                          Asset {project.id === "rolling-nest" ? "RN" : project.id === "verde-vista" ? "VV" : "PR"}-0{index + 1}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-[#0A0A0B]/85 backdrop-blur-sm border border-white/5 rounded-sm px-2 py-1 select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center space-x-1">
                        <ZoomIn size={10} className="text-[#FAC700]" />
                        <span className="font-mono text-[8px] text-[#FAC700] uppercase tracking-widest font-semibold">
                          Expand
                        </span>
                      </div>
                    </div>
                    <div className="p-5 bg-[#111112]/60 border-t border-stone-900/40">
                      <p className="text-stone-300 text-xs font-sans leading-relaxed">
                        {customCaption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Bottom Multi-page Navigator pagination loops */}
        <footer id="cs-outro-nav" className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <button
            onClick={onBack}
            className="group flex items-center space-x-2 font-mono text-xs uppercase tracking-widest text-[#f5f5f5] border border-white/5 px-4 py-3 hover:border-[#FAC700] hover:text-[#FAC700] transition-colors cursor-pointer rounded-sm bg-transparent"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Return to Collective Works</span>
          </button>

          <button
            onClick={() => onNavigate(nextProject.id)}
            className="group w-full md:w-auto bg-[#111112] border border-white/5 p-6 flex flex-row items-center justify-between gap-12 hover:border-[#FAC700] transition-all cursor-pointer rounded-sm text-left"
          >
            <div>
              <span className="font-mono text-[9px] uppercase text-stone-500 tracking-widest block font-semibold">
                Up next in series
              </span>
              <span className="font-serif text-stone-100 group-hover:text-[#FAC700] transition-colors text-base md:text-lg tracking-tight font-semibold mt-1 block">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight size={20} className="text-[#FAC700] group-hover:translate-x-1 transition-transform" />
          </button>
        </footer>

      </main>

      {/* Clean Interactive Photo-Lightbox Overlay */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0B]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8 cursor-zoom-out"
            onClick={() => setActiveLightbox(null)}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors cursor-pointer bg-white/5 hover:bg-white/10 rounded-full p-2.5 border border-white/5 z-55"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="max-w-5xl w-full flex flex-col items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={activeLightbox.src}
                  alt={activeLightbox.caption}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] md:max-h-[82vh] max-w-full object-contain rounded-sm select-none border border-white/10 shadow-2xl"
                />
              </div>
              
              <div className="mt-6 text-center px-4 max-w-2xl bg-[#0F0F10]/50 backdrop-blur-sm border border-white/5 rounded-sm p-4">
                <p className="text-stone-300 text-xs md:text-sm font-sans leading-relaxed">
                  {activeLightbox.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
