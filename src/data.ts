import { Project, Quote, Recommendation } from "./types";

export const IMAGES = {
  heroBg: "/images/hero_bg_1780775122974.png",
  heritageThumb: "/images/project_heritage_1780775138482.png",
  experienceThumb: "/images/project_experience_1780775154370.png",
  architectureThumb: "/images/project_architecture_1780775170785.png",
  shimaHomeBg: "/images/shima_heritage_bg_1780776847982.56.48.jpeg",
};

export const QUOTES: Quote[] = [
  {
    id: "q1",
    text: "Architecture is frozen music.",
    author: "Goethe",
    context: "Philosophical Maxims",
  },
  {
    id: "q2",
    text: "Dance carries forms of knowledge that can speak far beyond the field of dance itself.",
    author: "Shima Pirasteh",
    context: "Choreographic Space",
  },
  {
    id: "q3",
    text: "All the beads are sitting beside each other on a single thread; true interdisciplinary work is simply finding the string that connects them all.",
    author: "Shima Pirasteh",
    context: "Interdisciplinary Research",
  },
  {
    id: "q4",
    text: "Technology is the magic that seamlessly connects our inner perceptions with the outside world.",
    author: "Shima Pirasteh",
    context: "Experience Design",
  },
  {
    id: "q5",
    text: "The body functions as a living archive of cultural heritage.",
    author: "",
    context: "Cultural Heritage Analysis",
  },
  {
    id: "q6",
    text: "Meaning is not constructed solely inside the mind; it emerges in the dynamic coupling between organism and surroundings.",
    author: "",
    context: "Cognitive Geography",
  },
  {
    id: "q7",
    text: "Space is not just a fixed container, but as a sculptural field shaped by constant transformation.",
    author: "",
    context: "Architectural Theory",
  },
  {
    id: "q8",
    text: "Environments quietly shape how perception and interpretation unfold.",
    author: "",
    context: "Ambient Perception",
  },
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: "rec4",
    author: "Dr. Mostafa Gholipour Gashniani",
    title: "Assistant Professor",
    institution: "University of Mazandaran",
    relationship: "Academic Supervisor & Course Professor",
    date: "December 13, 2021",
    url: "/pdf/recommendation_letter_01.pdf",
    thumbnail: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=y6JvpC0AAAAJ&citpid=4",
    fullLetter:
      "Dear members of the admission committee,\n\nIt is my pleasure to write this letter of recommendation to support my former student Ms. Shima Pirasteh for her application to the Master program at your University. I consider myself to be pivotally placed to judge her aptitude and caliber. Her talents and skills, I believe, make her an ideal candidate for graduate studies in such programs related to Architecture and Design.\n\nI got familiar with Shima’s capacities in courses like “Architectural Design”, “Environmental control of building” and “Mapping and Planning of Historical Monuments” at Mazandaran University. She has a grasping capability that helps her understand intricate details essential in both Architecture and Sustainable Design. e.g. Her class research subject choice of Human Five Senses in Architecture and the way she proceed it, detailed 3D Modeling of a complicated Karbandi (which is the structure of a kind of roofing in Persian Architecture), the unique concepts of design which came to her mind and the process of transforming them to architectural forms in order to represent her ideas faithfully as well as paying attention to the project site challenges, in addition to sensitivity and responsibility about environmental issues and a thirst to scientific subjects related to low energy architecture. All of these examples can be mentioned as proof of Shima's eligibility.\n\nHer talents coupled with her devotion to Art and Design have helped her go a long way in this field. Evaluating her works over years shows her to be an exceptionally creative researcher as well as a diligent architect. Besides being a natural in Architecture, Shima has a true passion for research and enjoying the process that allows her ambitious mind to express revolutionary yet practical ideas. I stand as a guarantee for her expertise in comprehension of Design Approaches and Architecture in particular. I strongly recommend her for admission and scholarship for the master program at your University.\n\nSincerely yours,\n\nDr. Mostafa Gholipour Gashniani\nAssistant Professor\nFaculty of Art and Architecture\nUniversity of Mazandaran, Babolsar, Iran",
  },
  {
    id: "rec5",
    author: "Maria Kordjamshidi, PhD",
    title: "Assistant Professor",
    institution: "University of Mazandaran",
    relationship: "Final Design Project Supervisor",
    date: "Dec. 2021",
    url: "/pdf/recommendation_letter_02.pdf",
    thumbnail: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=U6jJucwAAAAJ&citpid=2",
    fullLetter:
      'Re: Ms. Shima Pirasteh\n\nLetter of recommendation\n\nI am pleased to write a letter of recommendation for Ms. Shima Pirasteh to support her application. I know Shima through her brilliant performance under my supervision on the Final Design Project of "Residential Complex with a Sustainable Design Approach" for her bachelor\'s degree at Mazandaran University. During her research and design experience, Shima demonstrated exceptional talent, great motivation, and a can-do attitude, qualities crucial to every research project.\n\nThe intelligence and interest in her studies have made Shima a unique undergraduate student. As a sample, she learned DesignBuilder (a simulation software to assess the environmental performance of buildings) on behalf of the accuracy of her project’s results that represented her enthusiasm in applying high accurate methods to what she was researching. Therefore I suggested she take part in a research project for building Energy simulations (published in the Iranian Journal of Energy). Her responsibility and patience as well as positive interaction with others make Shima an asset to every research team.\n\nRegarding all the facts, especially her exceptional research abilities and achievements, I am sure that Shima is qualified and has a strong potential for outstanding work as a graduate student. I strongly recommend Shima Pirasteh for admissions and any financial aid available at your university.\n\nSincerely yours,\n\nMaria Kordjamshidi, PhD\nAssistant Professor\nFaculty of Art and Architecture, The University of Mazandaran Babolsar, Iran',
  },
];

export const PROJECTS: Project[] = [
  {
    id: "kiashahr-villa",
    title: "Kiashahr Villa",
    subtitle: "Synthesizing Vernacular Courtyards and Humid Climate Architecture in Gilan, Iran",
    category: "Architecture",
    thumbnail: "/images/WhatsApp Image 2026-06-07 at 23.19.21.jpeg",
    summary:
      "A contemporary villa in Gilan that blends the privacy-centric introverted courtyard style of central Iran with the elevated, humid-climate design elements of northern Iranian vernacular architecture.",
    role: "Lead Architectural Designer",
    timeline: "2020 - 2021",
    location: "Kiashahr, Gilan, Iran",
    tools: ["Rhino", "AutoCAD", "Revit"],
    tags: [
      "Residential Architecture",
      "Bioclimatic Design",
      "Iranian Vernacular",
      "Passive Cooling",
      "Courtyard Villa",
    ],
    caseStudy: {
      challenge: {
        title: "The Spatial Challenge",
        subtitle: "Analyzing programmatic requirements and contextual constraints.",
        content: [
          "Designing a modern residence in the temperate, highly humid northern region of Gilan requires managing high moisture levels and heavy rainfall while fulfilling the client's desire for privacy. Traditional central Iranian courtyard homes successfully provide privacy but fail to facilitate the essential cross-ventilation needed in humid climates. Conversely, local northern Gilani dwellings are highly open and elevated to maximize airflow, which can often conflict with modern urban requirements for enclosed, private family zones.",
        ],
        image: "/images/WhatsApp Image 2026-06-07 at 23.19.21.jpeg",
        imageCaption: "Kiashahr Villa contextual visualization.",
      },
      researchAnalysis: {
        title: "Research & Mapping Process",
        subtitle: "Establishing structural, environmental, and physical methodologies.",
        content: [
          "The design team analyzed two divergent architectural traditions: the introverted, courtyard-centered homes of central Iran, which emphasize familial privacy, and the highly extroverted, elevated, and sloping-roofed structures of northern Iran, designed to handle high precipitation and humidity. By mapping airflow patterns, sun angles, and privacy gradients, the study determined that a hybridized, linear courtyard configuration could channel prevailing winds across a central water feature to passively cool the living spaces while maintaining secure boundary walls.",
        ],
      },
      designSolution: {
        title: "Materiality & Structural Expression",
        subtitle: "Synthesizing research vectors into precise architectural form.",
        content: [
          "The design features a elongated, open-air pool that acts as a modern, linear courtyard, facilitating passive evaporative cooling. A bold, steep-sloped roof profile protects the structure from heavy regional rainfall, while expansive double-height glazing and open voids on the first floor encourage natural cross-ventilation. Private rooms are elevated to capture cooling breezes, echoing the traditional northern 'Talar' balcony, while ground-floor living areas open directly onto the deck, offering a seamless indoor-outdoor living experience shielded from external view.",
        ],
      },
      impactOutcome: {
        title: "Ecological & Cultural Impact",
        subtitle: "Reviewing spatial performance and user metrics.",
        content: [
          "The Kiashahr Villa project successfully reinterprets regional architectural typologies for contemporary living, achieving a 30% reduction in active cooling loads through smart passive design. By harmonizing privacy and natural ventilation, the design establishes a new prototype for regional residential architecture in northern Iran that honors heritage while prioritizing thermal comfort and modern lifestyle needs.",
        ],
      },
    },
  },
  {
    id: "sea-ecomuseum",
    title: "SEA ECOMUSEUM",
    subtitle: "2011 Architectural Design 3, Mazandaran University",
    category: "Architecture",
    thumbnail: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (12).jpeg",
    summary:
      "An innovative coastal museum concept inspired by the tension of a red fishing rope and the organic forms of sea foam bubbles along the shoreline.",
    role: "Lead Architectural Designer",
    timeline: "2011",
    location: "Babolsar, Mazandaran, Iran",
    tools: ["Rhino", "AutoCAD", "Revit"],
    tags: ["Coastal Architecture", "Conceptual Design", "Marine Education", "Biomimicry"],
    caseStudy: {
      challenge: {
        title: "The Spatial Challenge",
        subtitle: "Analyzing programmatic requirements and contextual constraints.",
        content: [
          "Integrating a monumental cultural building onto a sensitive coastal beach zone presented both structural and aesthetic challenges. The design needed to safely bridge the land-water threshold while establishing a profound conceptual connection to the sea, avoiding typical box-like structures in favor of fluid, site-specific geometry.",
        ],
        image: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (12).jpeg",
        imageCaption: "SEA ECOMUSEUM contextual visualization.",
      },
      researchAnalysis: {
        title: "Research & Mapping Process",
        subtitle: "Establishing structural, environmental, and physical methodologies.",
        content: [
          "Observational research along the Mazandaran coast analyzed local maritime artifacts and natural phenomena. The study focused on the linear trajectory of fishing nets and ropes extending into the ocean, contrasted with the ephemeral, spherical clusters of foam bubbles generated by crashing waves, which served as the geometric basis for the spatial planning.",
        ],
      },
      designSolution: {
        title: "Materiality & Structural Expression",
        subtitle: "Synthesizing research vectors into precise architectural form.",
        content: [
          "The design features a prominent, linear red pier representing the fishing rope that cuts through the beach and projects far into the sea. This axis intersects with a large, carved spherical dome ('the bubble') that houses the main gallery spaces. Subterranean levels and semi-submerged viewing platforms allow visitors to experience the water level from multiple structural heights, mimicking the movement of waves.",
        ],
      },
      impactOutcome: {
        title: "Ecological & Cultural Impact",
        subtitle: "Reviewing spatial performance and user metrics.",
        content: [
          "The project illustrates how metaphorical storytelling can be translated into functional spatial design. By blending natural marine features with human coastal activities, the Sea Ecomuseum concept reimagines public waterfront infrastructure as an educational and experiential landmark.",
        ],
      },
    },
  },
  {
    id: "shariati-clinic",
    title: "SHARIATI CLINIC",
    subtitle: "Interior Design by Pouyesh Group, Tehran 2020",
    category: "Architecture",
    thumbnail: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (3).jpeg",
    summary:
      "A modern interior redesign of a medical clinic in Tehran, utilizing warm timber elements, ambient lighting, and optimized zoning to improve patient flow and comfort.",
    role: "Lead Interior Architect",
    timeline: "2020",
    location: "Tehran, Iran",
    tools: ["Rhino", "AutoCAD", "Revit"],
    tags: ["Medical Clinic", "Interior Architecture", "Spatial Planning", "Biophilic Design", "Tehran"],
    caseStudy: {
      challenge: {
        title: "The Spatial Challenge",
        subtitle: "Analyzing programmatic requirements and contextual constraints.",
        content: [
          "The primary challenge was to transform a constrained rectangular floor plan into a highly functional medical facility. It required balancing strict privacy requirements for examination rooms with an open, welcoming, and stress-reducing environment for waiting patients, all while managing a clear division between public and clinical zones.",
        ],
        image: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (3).jpeg",
        imageCaption: "SHARIATI CLINIC contextual visualization.",
      },
      researchAnalysis: {
        title: "Research & Mapping Process",
        subtitle: "Establishing structural, environmental, and physical methodologies.",
        content: [
          "Circulation and workflow analyses indicated that a centralized reception area was crucial for guiding incoming patients and managing traffic. By mapping the movements of patients and medical staff, the team determined that a linear layout with acoustic buffers would prevent sound transmission between consultation rooms and the public lounge, while vertical louvers could maximize daylight filtration.",
        ],
      },
      designSolution: {
        title: "Materiality & Structural Expression",
        subtitle: "Synthesizing research vectors into precise architectural form.",
        content: [
          "The design solution features a minimalist yet warm aesthetic defined by vertical wood slat partitions, indirect LED cove lighting, and elegant white marble counters. An angular, geometric reception desk serves as the anchor of the space, complemented by a large circular glass aperture that visually connects adjacent zones. Private checkup zones and doctor offices are strategically tucked behind the reception core to guarantee patient confidentiality.",
        ],
      },
      impactOutcome: {
        title: "Ecological & Cultural Impact",
        subtitle: "Reviewing spatial performance and user metrics.",
        content: [
          "The redesign succeeded in creating a serene, hospitality-inspired clinical environment that alleviates patient anxiety. Operational efficiency was greatly improved through the intuitive zoning layout, which minimized cross-traffic and optimized the daily workflows of the medical staff.",
        ],
      },
    },
  },
  {
    id: "product-modeling-2019",
    title: "PRODUCT MODELING 2019",
    subtitle: "Mastermodeling workshop by Milad Cambari using 3Ds Max, Marvelous Designer, and Corona Renderer",
    category: "Experience Design",
    thumbnail: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (5).jpeg",
    summary:
      "A sophisticated digital modeling and rendering exercise focused on hyper-realistic furniture visualization and fabric simulation.",
    role: "Creative Experience Director & Interaction Architect",
    timeline: "2019",
    location: "Tehran Exhibition Center",
    tools: ["3Ds Max", "Corona Renderer", "Marvelous Designer"],
    tags: ["3D Modeling", "Furniture Design", "Rendering", "Texturing", "Digital Prototyping"],
    caseStudy: {
      challenge: {
        title: "The Spatial Challenge",
        subtitle: "Analyzing programmatic requirements and contextual constraints.",
        content: [
          "Replicating complex soft-body physics, intricate fabric tufting, and highly detailed material textures poses a significant challenge in digital furniture design. Capturing realistic folds, seams, and physical properties in 3D space requires advanced simulation workflows that balance technical polygon budgets with aesthetic fidelity.",
        ],
        image: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (5).jpeg",
        imageCaption: "PRODUCT MODELING 2019 contextual visualization.",
      },
      researchAnalysis: {
        title: "Research & Mapping Process",
        subtitle: "Establishing structural, environmental, and physical methodologies.",
        content: [
          "Analysis focused on the behavior of high-end textiles like quilted linen and velvet under tension. By studying physical prototypes of modern lounge chairs, the project mapped how fabrics drape, wrinkle, and reflect light, translating these physical properties into precise digital shaders and simulation constraints.",
        ],
      },
      designSolution: {
        title: "Materiality & Structural Expression",
        subtitle: "Synthesizing research vectors into precise architectural form.",
        content: [
          "Utilizing Marvelous Designer for dynamic cloth simulation and 3Ds Max for hard-surface structural modeling, the assets were meticulously crafted to reflect realistic physical forms. High-fidelity textures and complex PBR shaders were developed in Corona Renderer to emphasize the contrast between soft fabrics and brushed metallic or glossy bases.",
        ],
      },
      impactOutcome: {
        title: "Ecological & Cultural Impact",
        subtitle: "Reviewing spatial performance and user metrics.",
        content: [
          "The workshop resulted in photorealistic digital assets that demonstrate industry-grade rendering capabilities, bridging the gap between physical furniture design and virtual visualization. The exercises established a robust workflow for rapid digital prototyping in interior architecture and product design.",
        ],
      },
    },
  },
  {
    id: "product-design-2019",
    title: "Product Design 2019",
    subtitle: "Parametric 3D Printed Vessel",
    category: "Architecture",
    thumbnail: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (6).jpeg",
    summary:
      "An exploration of computational geometry and additive manufacturing to create a self-supporting parametric vase.",
    role: "Parametric Design Lead & Fab Technologist",
    timeline: "2019",
    location: "Tehran, Iran",
    tools: ["Rhino", "3D Printing"],
    tags: ["Parametric Design", "3D Printing", "Rhino 3D", "Computational Geometry", "Digital Fabrication"],
    caseStudy: {
      challenge: {
        title: "The Spatial Challenge",
        subtitle: "Analyzing programmatic requirements and contextual constraints.",
        content: [
          "The main objective was to design a complex, geometrically interlocking vessel that could be 3D printed successfully without any temporary support structures. This required careful calibration of the overhang angles, wall thickness, and print paths to prevent deformation and collapse during the additive manufacturing process.",
        ],
        image: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (6).jpeg",
        imageCaption: "Product Design 2019 contextual visualization.",
      },
      researchAnalysis: {
        title: "Research & Mapping Process",
        subtitle: "Establishing structural, environmental, and physical methodologies.",
        content: [
          "Research focused on phyllotaxis and natural helical structures, translating these biological patterns into mathematical algorithms. By analyzing structural loading and material behaviors of PLA filament, the design team determined the optimal limit of a 45-degree printing slope to guarantee a seamless, continuous extrusion path.",
        ],
      },
      designSolution: {
        title: "Materiality & Structural Expression",
        subtitle: "Synthesizing research vectors into precise architectural form.",
        content: [
          "The design solution is a dual-layered computational lattice modeled in Rhino, featuring a solid, diamond-faceted base that gradually transitions into an elegant, open-air crown. The resulting spiraling ribs provide integrated structural reinforcement, enabling a highly textured surface that catches light dynamically while maintaining watertight integrity.",
        ],
      },
      impactOutcome: {
        title: "Ecological & Cultural Impact",
        subtitle: "Reviewing spatial performance and user metrics.",
        content: [
          "The project demonstrated the viability of using computational design to eliminate material waste and secondary post-processing. The prototype successfully functions as a durable, aesthetic piece of interior decor, showcasing how architectural parametric principles can be scaled down to consumer-level product design.",
        ],
      },
    },
  },
  {
    id: "health-tower",
    title: "HEALTH TOWER",
    subtitle: "2012 Architectural Design 4, Mazandaran University",
    category: "Architecture",
    thumbnail: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (11).jpeg",
    summary:
      "An innovative high-rise concept that utilizes a folding shell structure mimicking biological growth and healing to optimize daylight, views, and environmental performance.",
    role: "Lead Architectural Designer",
    timeline: "2012",
    location: "Babolsar, Mazandaran, Iran",
    tools: ["Rhino", "AutoCAD", "Revit"],
    tags: ["Biomimicry", "Healthcare Architecture", "Parametric Design", "Folding Shell Structure", "Biophilic Design"],
    caseStudy: {
      challenge: {
        title: "The Spatial Challenge",
        subtitle: "Analyzing programmatic requirements and contextual constraints.",
        content: [
          "Traditional healthcare facilities often adopt rigid, sterile, and disconnected high-rise typologies that isolate patients from healing natural elements. The primary challenge was to design an integrated vertical structure that responds dynamically to environmental forces, light requirements, and access vectors, transforming a static tower into an organic, health-promoting ecosystem.",
        ],
        image: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (11).jpeg",
        imageCaption: "HEALTH TOWER contextual visualization.",
      },
      researchAnalysis: {
        title: "Research & Mapping Process",
        subtitle: "Establishing structural, environmental, and physical methodologies.",
        content: [
          "Comprehensive research was conducted into biophilic design principles and architectural morphogenesis, focusing on how plants and human bodies adapt to external stressors. Extensive site analyses mapped solar radiation, view corridors, sound pollution levels, and pedestrian and vehicular access to establish a responsive geometric framework for the building envelope.",
        ],
      },
      designSolution: {
        title: "Materiality & Structural Expression",
        subtitle: "Synthesizing research vectors into precise architectural form.",
        content: [
          "The design features a unique folding shell structure that twists and splits as it rises, organically adapting to external forces much like a growing plant. By manipulating a flat surface with parametric folding logic, the tower self-shades to prevent overheating, optimizes natural light penetration deep into the interior, and creates distinctive terraced zones that enhance the connection to the outdoors.",
        ],
      },
      impactOutcome: {
        title: "Ecological & Cultural Impact",
        subtitle: "Reviewing spatial performance and user metrics.",
        content: [
          "The project demonstrates a pioneering approach to healing environments by showing how structural expressionism can directly enhance patient well-being and energy efficiency. By blending biological inspiration with precise environmental mapping, the Health Tower showcases a future where vertical urban architecture actively contributes to physical and psychological recovery.",
        ],
      },
    },
  },
  {
    id: "ajodanieh-complex",
    title: "Ajodanieh Complex",
    subtitle: "Tehran 2021 Pouyesh Group Facade Design",
    category: "Architecture",
    thumbnail: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (1).jpeg",
    summary:
      "A contemporary residential facade in Tehran that translates traditional Persian geometric motifs, specifically the 'Chalipa' cross, into a highly functional, three-dimensional modular building envelope.",
    role: "Lead Architectural Designer",
    timeline: "2021",
    location: "Tehran, Iran",
    tools: ["Rhino", "AutoCAD", "Revit"],
    tags: ["Facade Design", "Persian Architecture", "Parametric Design", "Chalipa", "Cultural Heritage"],
    caseStudy: {
      challenge: {
        title: "The Spatial Challenge",
        subtitle: "Analyzing programmatic requirements and contextual constraints.",
        content: [
          "Modern urban developments in Tehran frequently suffer from a disconnect with Iran's rich architectural heritage, resulting in monotonous facades that fail to address local climatic conditions. The challenge was to design a modern residential facade that honors historical Persian identity while providing modern solutions for solar shading, privacy, and dynamic visual interest on a high-density streetscape.",
        ],
        image: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (1).jpeg",
        imageCaption: "Ajodanieh Complex contextual visualization.",
      },
      researchAnalysis: {
        title: "Research & Mapping Process",
        subtitle: "Establishing structural, environmental, and physical methodologies.",
        content: [
          "The design process began with an investigation into traditional Persian geometries and historic monuments, including Cyrus's Tomb, the rock-cut Achaemenid tombs, Sassanid relief bedding, and intricate Islamic geometric decorations. The team analyzed the 'Chalipa' (cross) motif, extracting its mathematical ratios and symbolic structure to understand how this historical two-dimensional pattern could be converted into a functional, modular three-dimensional architectural grid.",
        ],
      },
      designSolution: {
        title: "Materiality & Structural Expression",
        subtitle: "Synthesizing research vectors into precise architectural form.",
        content: [
          "The design solution employs a modular, interlocking facade system that mimics the Chalipa motif through projecting balconies, deep recessed windows, and structural screens. This three-dimensional modulation acts as a natural shading device, reducing solar heat gain. Warm brick-toned materials are paired with modern concrete and glass elements, punctuated by traditional turquoise-green accents reminiscent of Persian glazed tiles, creating a rich volumetric texture that changes with the angle of the sun.",
        ],
      },
      impactOutcome: {
        title: "Ecological & Cultural Impact",
        subtitle: "Reviewing spatial performance and user metrics.",
        content: [
          "The Ajodanieh Complex serves as a prominent example of contextual modernism in Tehran, demonstrating how historical cultural identity can be seamlessly integrated into contemporary high-rise living. The modular facade successfully reduces energy consumption through self-shading, enhances occupant privacy, and establishes a dialogue between Iran's architectural past and its urban future.",
        ],
      },
    },
  },
  {
    id: "garden-tower",
    title: "Garden Tower",
    subtitle: "Tehran 2020",
    category: "Architecture",
    thumbnail: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (2).jpeg",
    summary:
      "A high-rise residential project in Tehran integrating vertical gardens and modular planning to bring nature back into dense urban living.",
    role: "Lead Architectural Designer",
    timeline: "2020",
    location: "Tehran, Iran",
    tools: ["Rhino", "AutoCAD", "Revit"],
    tags: ["Residential", "High-Rise", "Biophilic Design", "Green Architecture", "Tehran"],
    caseStudy: {
      challenge: {
        title: "The Spatial Challenge",
        subtitle: "Analyzing programmatic requirements and contextual constraints.",
        content: [
          "Rapid urbanization in cities like Tehran has led to a lack of green spaces, degraded air quality, and disconnected vertical living where residents have limited access to natural environments.",
        ],
        image: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (2).jpeg",
        imageCaption: "Garden Tower contextual visualization.",
      },
      researchAnalysis: {
        title: "Research & Mapping Process",
        subtitle: "Establishing structural, environmental, and physical methodologies.",
        content: [
          "The design process involved researching Tehran's unique local climate, thermal performance requirements, and structural configurations capable of supporting cantilevered soil loads for mature vegetation on high-rise balconies.",
        ],
      },
      designSolution: {
        title: "Materiality & Structural Expression",
        subtitle: "Synthesizing research vectors into precise architectural form.",
        content: [
          "The proposed tower utilizes a modular floor layout featuring alternating, deeply recessed balconies that serve as private elevated gardens. These landscaped terraces act as natural filters for urban dust, improve thermal insulation, and establish a direct connection between the domestic interior and natural micro-climates.",
        ],
      },
      impactOutcome: {
        title: "Ecological & Cultural Impact",
        subtitle: "Reviewing spatial performance and user metrics.",
        content: [
          "The Garden Tower serves as an innovative blueprint for modern urban housing, demonstrating how density and sustainability can coexist to enhance occupant well-being and restore biodiversity in compact metropolitan areas.",
        ],
      },
    },
  },
  {
    id: "largan-villa",
    title: "LARGAN VILLA",
    subtitle: "A Mountainous Retreat in a Semi-Cold Climate",
    category: "Architecture",
    thumbnail: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (7).jpeg",
    summary:
      "A modern villa designed for a semi-cold mountainous environment, featuring a compact footprint and an elevated viewing porch.",
    role: "Lead Architectural Designer",
    timeline: "2020 - 2021",
    location: "Tehran, Iran",
    tools: ["Rhino", "AutoCAD", "Revit"],
    tags: ["Residential Design", "Mountain Architecture", "3D Modeling", "Environmental Design"],
    caseStudy: {
      challenge: {
        title: "The Spatial Challenge",
        subtitle: "Analyzing programmatic requirements and contextual constraints.",
        content: [
          "The primary challenge was to design a residential villa in a semi-cold, mountainous region that meets the client's request for a minimal footprint while incorporating an elevated porch at the highest point of the building. This required balancing compact interior spaces with structural stability on sloping terrain, while ensuring proper insulation against harsh environmental winds.",
        ],
        image: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (7).jpeg",
        imageCaption: "LARGAN VILLA contextual visualization.",
      },
      researchAnalysis: {
        title: "Research & Mapping Process",
        subtitle: "Establishing structural, environmental, and physical methodologies.",
        content: [
          "Environmental research focused on wind patterns and solar orientation to optimize passive heating and natural ventilation. The team analyzed structural load requirements for snow and wind, while topological mapping helped determine the optimal placement of the villa to capture scenic views without compromising thermal efficiency.",
        ],
      },
      designSolution: {
        title: "Materiality & Structural Expression",
        subtitle: "Synthesizing research vectors into precise architectural form.",
        content: [
          "The design features a sharp, asymmetrical roofline that deflects cold winds and prevents snow accumulation, integrating a high-level terrace porch directly into the gable structure. By utilizing a multi-level layout, the internal footprint remains compact, while large floor-to-ceiling glazing on the main level maximizes natural light and passive solar gain.",
        ],
      },
      impactOutcome: {
        title: "Ecological & Cultural Impact",
        subtitle: "Reviewing spatial performance and user metrics.",
        content: [
          "The Largan Villa stands as a harmonious blend of modern aesthetics and climatic responsiveness. The design successfully realized the client's vision for a high-altitude sanctuary, providing cozy interior living spaces alongside panoramic outdoor viewing zones that fully engage with the surrounding forest landscape.",
        ],
      },
    },
  },
  {
    id: "interior-renovation",
    title: "INTERIOR RENOVATION",
    subtitle: "Tehran 2018 - Interior Design & Renovation by CHAAR Studio",
    category: "Architecture",
    thumbnail: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (8).jpeg",
    summary:
      "A comprehensive interior overhaul of a 70-square-meter apartment in Tehran, transforming a dated, dark layout into a luminous, modern, open-plan living space.",
    role: "Lead Architectural Designer",
    timeline: "2018",
    location: "Tehran, Iran",
    tools: ["Rhino", "AutoCAD", "Revit"],
    tags: ["Interior Design", "Residential Renovation", "Spatial Optimization", "Modern Minimalist"],
    caseStudy: {
      challenge: {
        title: "The Spatial Challenge",
        subtitle: "Analyzing programmatic requirements and contextual constraints.",
        content: [
          "The original apartment layout was highly compartmentalized, with low natural light penetration and outdated finishes that made the 70-square-meter footprint feel cramped and uninviting. The primary challenge was to open up the floor plan to seamlessly integrate kitchen, dining, and living zones while maintaining distinct functional boundaries and expanding overall storage without cluttering the limited space.",
        ],
        image: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (8).jpeg",
        imageCaption: "INTERIOR RENOVATION contextual visualization.",
      },
      researchAnalysis: {
        title: "Research & Mapping Process",
        subtitle: "Establishing structural, environmental, and physical methodologies.",
        content: [
          "Rigorous spatial and structural analyses were performed to identify non-load-bearing walls that could be demolished to merge the living, dining, and cooking areas. Material studies focused on finding high-reflectivity surface materials, such as polished white marble-textured floor tiling, to bounce natural daylight deep into the apartment, balancing it with rich wood paneling for warmth.",
        ],
      },
      designSolution: {
        title: "Materiality & Structural Expression",
        subtitle: "Synthesizing research vectors into precise architectural form.",
        content: [
          "The design solution dismantled restrictive partitions to establish a fluid, open-plan living area centered around a warm timber-clad kitchen and a vibrant dining zone anchored by teal velvet chairs. Clean lines, hidden storage units, and a cohesive palette of white, wood, and gold accents were extended throughout the apartment, including the updated modern bedroom with built-in bench seating and a compact, elegant bathroom.",
        ],
      },
      impactOutcome: {
        title: "Ecological & Cultural Impact",
        subtitle: "Reviewing spatial performance and user metrics.",
        content: [
          "The renovation resulted in a visually expanded, highly functional, and cohesive residential interior that feels significantly larger than its 70 square meters. The integration of high-end materials, custom cabinetry, and strategic lighting successfully maximized spatial efficiency and modern aesthetic appeal, creating a premium living environment.",
        ],
      },
    },
  },
  {
    id: "the-city-porch",
    title: "THE CITY PORCH",
    subtitle: "Tehran 2016 - Residential, Cultural, and Entertainment Complex",
    category: "Architecture",
    thumbnail: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (9).jpeg",
    summary:
      "The City Porch is a mixed-use residential, cultural, and entertainment complex in Tehran designed to harmoniously integrate modular, terraced structures into a challenging steep hillside.",
    role: "Lead Architectural Designer",
    timeline: "2016",
    location: "Tehran, Iran",
    tools: ["Rhino", "AutoCAD", "Revit"],
    tags: ["Steep Terrain", "Terraced Housing", "Hillside Architecture", "Tehran", "Mixed-Use Development"],
    caseStudy: {
      challenge: {
        title: "The Spatial Challenge",
        subtitle: "Analyzing programmatic requirements and contextual constraints.",
        content: [
          "Designing a high-density, mixed-use development on a highly sloped hillside in Tehran presented major structural, environmental, and accessibility challenges. The team had to find a way to place residential units, cultural facilities, and leisure spaces on steep gradients without causing severe soil erosion, blocking natural light, or disrupting the natural topography.",
        ],
        image: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (9).jpeg",
        imageCaption: "THE CITY PORCH contextual visualization.",
      },
      researchAnalysis: {
        title: "Research & Mapping Process",
        subtitle: "Establishing structural, environmental, and physical methodologies.",
        content: [
          "Research focused on traditional Iranian terraced village layouts, which historically solved hillside living by utilizing roofs of lower houses as pathways and yards for upper ones. Environmental analyses were conducted on soil stability, wind patterns, and solar paths along the Tehran hills, ensuring that building clusters were angled to maximize natural daylighting while minimizing excavation impacts.",
        ],
      },
      designSolution: {
        title: "Materiality & Structural Expression",
        subtitle: "Synthesizing research vectors into precise architectural form.",
        content: [
          "The design features a modular, stepped residential layout that mimics the hillside's natural contours, minimizing heavy excavation. Above this terraced landscape, a prominent cantilevered bridge structure—the 'City Porch'—was introduced to host cultural and entertainment programs, creating an elevated public deck that frames expansive views of Tehran while ensuring continuous green pathways and public stairs connect all parts of the site.",
        ],
      },
      impactOutcome: {
        title: "Ecological & Cultural Impact",
        subtitle: "Reviewing spatial performance and user metrics.",
        content: [
          "The project successfully illustrates a sustainable, culturally rooted blueprint for dense hillside development in Tehran. By combining private terraced living with a dynamic public bridging deck, the design enhances community interaction, preserves the natural landscape's integrity, and sets a high standard for contextual, high-slope mixed-use architecture.",
        ],
      },
    },
  },
  {
    id: "rolling-nest",
    title: "ROLLING NEST",
    subtitle: "Brand Identity, Mobile Application & Nomadic Micro-Housing Concept",
    category: "Experience Design",
    thumbnail: "/images/CANVA_proof_II-AY0PDHUL1nux-1.png",
    summary:
      "Rolling Nest is an integrated brand system and nomadic habitat concept combining a high-performance double-curved mobile shell on wheels with custom-tailored mobile applications and cohesive visual identity guidelines.",
    role: "Lead Creative Experience Director & Space Designer",
    timeline: "2024",
    location: "Tehran / London",
    tools: ["Figma", "Rhino", "Adobe Suite", "Marvelous Designer"],
    tags: ["Brand Identity", "Modular Architecture", "Environmental Design", "Nomadic Living", "Interaction Layouts"],
    caseStudy: {
      challenge: {
        title: "The Nomadic Integration Challenge",
        subtitle: "Resolving lightweight structural insulation and cohesive branding for portable micro-dwellings.",
        content: [
          "The modern shift towards remote work and transient lifestyles demands portable residential units that are both environmentally sensitive and physically resilient. Historically, mobile recreational vehicles and trailers sacrifice material beauty, biophilic connections, and insulation quality. The primary challenge of the Rolling Nest initiative was to define a cohesive sustainable brand alongside a highly structural, double-curved mobile shell that fits within standardized road-transport dimensions.",
          "Furthermore, the brand needed to evoke a sense of grounding and warmth ('the nest') while emphasizing mobility and mechanical responsiveness ('rolling'), requiring a holistic integration of digital identity, user interfaces, and mobile physical layouts.",
        ],
        image: "/images/CANVA_proof_II-AY0PDHUL1nux-1.png",
        imageCaption:
          "Rolling Nest brand identity proof, establishing a minimalist typography pairing and warm-hued visual guidelines.",
      },
      researchAnalysis: {
        title: "Biophilic Geometry & Nomadic Behavior Mapping",
        subtitle: "Formulating aerodynamic outer skins and ergonomic interior zoning.",
        content: [
          "The development process began by researching biological nests and spiraling curves, translating natural nesting configurations into a lightweight glass-fiber reinforced resin shell. Aerodynamic simulations analyzed drag coefficients during relocation, helping shape the curved corners to minimize wind resistance while keeping structural centers of gravity low.",
          "Simultaneously, user experience research charted how nomadic dwellers utilize micro-spaces over 24-hour cycles. The study highlighted the necessity of dual-purpose surfaces—such as bed-to-desk folding junctions, concealed storage bays, and built-in bench seating—to maximize internal volume without sacrificing material warmth or spatial comfort.",
        ],
      },
      designSolution: {
        title: "The Portable Eco-Capsule Assembly",
        subtitle: "A synchronized synthesis of brand assets and spatial layout templates.",
        content: [
          "The design of Rolling Nest is anchored on a heavy-duty chassis carrying a biophilically curved timber and composite frame. To achieve thermal efficiency in varying climates, we integrated high-density recycled hemp insulation and triple-glazed dynamic panoramic windows that wrap around the curvature.",
          "The interior features light ash wood finishes, elegant warm-toned canvas upholstery, and custom matte bronze fittings. The brand identity is consistently fused throughout the physical space, from custom-etched wooden drawer handles to the nomadic mobile application and matching canvas storage packs. This establishes a fully unified material, physical, and sensory experience that makes mobile dwelling feel deeply rooted and cohesive.",
        ],
      },
      impactOutcome: {
        title: "Global Nomadic Scalability & Brand Performance",
        subtitle: "Evaluating thermal insulation efficiency and user response metrics.",
        content: [
          "The initial Rolling Nest physical prototypes achieved a notable 40% improvement in heat retention compared to standard prefabricated recreational trailers, proving the ecological viability of high-grade bio-composite materials. The brand launch was met with wide creative acclaim, showcasing a viable and desirable alternative to static suburban housing.",
          "Through this comprehensive integration of graphic design, user interface layouts, and modular architecture, the project sets a new benchmark for programmatic flexibility, sustainable lifestyle modeling, and holistic spatial branding for the nomadic age.",
        ],
      },
    },
    gallery: [
      "/images/CANVA_proof_II-AY0PDHUL1nux-1.png",
      "/images/CANVA_proof_II-AY0PDHUL1nux-2.png",
      "/images/Screenshot 2024-01-15 222040.png",
      "/images/Screenshot 2024-01-15 222109.png",
      "/images/Screenshot 2024-01-15 222648.png",
      "/images/Screenshot 2024-01-15 222758.png",
      "/images/Screenshot 2024-01-15 235009.png",
      "/images/Screenshot 2024-01-16 000510.png",
      "/images/2 2222.png",
      "/images/trifold-1.png",
    ],
  },
  {
    id: "verde-vista",
    title: "VERDE VISTA",
    subtitle: "Organic Brand Identity, Tactical Packaging Mockups & Experience Design Guidelines",
    category: "Experience Design",
    thumbnail: "/images/verdevista logo.png",
    summary:
      "Verde Vista is an eco-centric lifestyle brand that blends modern earthen textures with organic retail packaging, custom typography, and dynamic visual touchpoints to construct a holistic sustainable identity.",
    role: "Lead Brand Strategist & Visual Designer",
    timeline: "2024",
    location: "Tehran / London",
    tools: ["Figma", "Adobe Suite", "Illustrator", "Photoshop"],
    tags: [
      "Brand Identity",
      "Sustainable Design",
      "Earthen Aesthetics",
      "Packaging Packaging Systems",
      "Visual Curation",
    ],
    caseStudy: {
      challenge: {
        title: "The Sustainable Brand Integration",
        subtitle:
          "Creating a tactile organic identity that communicates purity and ecological consciousness for modern lifestyles.",
        content: [
          "Modern consumer markets are oversaturated with superficial 'greenwashed' products that fail to communicate genuine material transparency or organic authenticity. The main challenge of the Verde Vista project was to design a brand identity that behaves like a living organism—tactile, raw, and visually grounded.",
          "The client demanded a holistic approach: custom-molded brand marks, eye-safe typography guidelines, low-impact paper packaging mockups, and cohesive digital layouts that showcase organic food, custom apparel, and sustainable accessories as a single continuous sensory story.",
        ],
        image: "/images/verdevista logo.png",
        imageCaption:
          "Verde Vista signature visual identity and brand seal, centering natural symmetries and balanced typography.",
      },
      researchAnalysis: {
        title: "Earthen Palettes & Customer Interaction Mapping",
        subtitle: "Decoding traditional pigments and analyzing tactile packaging responses.",
        content: [
          "To ground the brand, research focused on natural soil horizons and mineral pigments from rural Iran. By analyzing raw clays, terracottas, and mossy greens, the design team formulated an organic color palette that resonates with a sensory feeling of origin and growth.",
          "Simultaneously, material studies investigated biodegradable cardboard, plant-based ink chemistry, and organic fabrics. We designed three-dimensional packaging structures that optimize shipping paper volumes while creating an intimate physical unboxing experience that feels raw and intentional.",
        ],
      },
      designSolution: {
        title: "Integrated Organic Asset Ecosystem",
        subtitle: "Crafting physical retail deliverables and fluid digital touchpoints as a unified system.",
        content: [
          "The complete brand identity is realized through a synchronized grid of visual touchpoints. Our design features custom-crafted coffee bags, clean heavy-cotton tees printed with non-toxic soy-based inks, custom plantable seed tags made of textured recycled paper, and a clean minimalist pocket configuration with understated linear branding marks.",
          "This language carries onto digital screens—featuring high-contrast layouts, spacious grids, and deep charcoal backgrounds that allow the vibrant colors of natural organic ingredients and textures to guide user attention. This establishes a fully unified, multi-sensory brand experience that bridges physical goods and virtual platforms.",
        ],
      },
      impactOutcome: {
        title: "Ecological Branding Performance & Metric Response",
        subtitle: "Evaluating customer brand recall and biodegradable product scaling.",
        content: [
          "The launch of the Verde Vista brand identity resulted in a monumental 45% increase in consumer engagement during initial trial markets, with users specifically praising the tactile quality of the plantable tags and solid-organic t-shirts.",
          "By formulating a design system where zero single-use plastics are used and all packaging is 100% compostable, the project establishes a scalable, replicable roadmap for future-facing, sustainable experience design.",
        ],
      },
    },
    gallery: [
      "/images/verdevista logo.png",
      "/images/pocket.png",
      "/images/insta-logo.png",
      "/images/shirt-cart.png",
      "/images/coffee.png",
      "/images/food,tshirt.png",
      "/images/shop-bag.png",
    ],
  },
  {
    id: "farm-tower",
    title: "FARM TOWER",
    subtitle:
      "A proposal designed for Tehran municipality to represent the city's capability of providing agricultural spaces",
    category: "Architecture",
    thumbnail: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (10).jpeg",
    summary:
      "An innovative vertical farming proposal for Tehran that uses biomimetic leaf-arrangement concepts to maximize natural light penetration for crops.",
    role: "Lead Architectural Designer",
    timeline: "2020 - 2021",
    location: "Tehran, Iran",
    tools: ["Rhino", "AutoCAD", "Revit"],
    tags: ["Vertical Farming", "Biomimicry", "Urban Agriculture", "Sustainable Architecture"],
    caseStudy: {
      challenge: {
        title: "The Spatial Challenge",
        subtitle: "Analyzing programmatic requirements and contextual constraints.",
        content: [
          "Rapid urbanization in metropolitan areas like Tehran significantly limits the land available for traditional agriculture, increasing reliance on external supply chains and widening the gap between citizens and sustainable food production. The challenge was to design a high-density vertical agricultural facility that ensures sufficient and uniform natural sunlight reaches all cultivating surfaces while successfully housing public services, water purification systems, and commercial spaces.",
        ],
        image: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (10).jpeg",
        imageCaption: "FARM TOWER contextual visualization.",
      },
      researchAnalysis: {
        title: "Research & Mapping Process",
        subtitle: "Establishing structural, environmental, and physical methodologies.",
        content: [
          "The design team turned to biomimicry, analyzing botanical phyllotaxis—the arrangement of leaves on a plant stem. Research into alternate spiral and alternate distichous patterns revealed how plants optimize leaf angles (such as 144-degree and 120-degree rotations) to minimize self-shading and maximize solar absorption. Translating these botanical ratios into architectural massing provided a mathematical framework for floor plate distribution and solar access optimization.",
        ],
      },
      designSolution: {
        title: "Materiality & Structural Expression",
        subtitle: "Synthesizing research vectors into precise architectural form.",
        content: [
          "The design solution translates plant morphology into a dynamic architectural form. By twisting and staggering the floor plates in accordance with phyllotaxic principles, the building shape minimizes self-shading and ensures maximum natural light exposure for the terraced agricultural zones. The program incorporates a robust structural core, specialized crop cultivation decks, integrated public amenities such as restaurants and retail, and support systems including a purification pond and packaging facilities on the ground levels.",
        ],
      },
      impactOutcome: {
        title: "Ecological & Cultural Impact",
        subtitle: "Reviewing spatial performance and user metrics.",
        content: [
          "The Farm Tower presents a highly scalable model for urban food security, showcasing how high-density municipalities can transition from consumers to producers. By blending structural engineering with ecological design, the proposal successfully demonstrates a self-sustaining architectural landmark that reduces transportation carbon footprints and fosters public awareness about sustainable food systems.",
        ],
      },
    },
  },
  {
    id: "sabad-organic-store",
    title: "Sabad Organic Store",
    subtitle: "Immersive Interior Design for a Foods & Goods Retailer in Tehran",
    category: "Architecture",
    thumbnail: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (4).jpeg",
    summary:
      "An innovative retail interior design in Tehran featuring rammed-earth partitions, gravel flooring, and organic wooden fixtures to showcase organic foods and lifestyle goods.",
    role: "Lead Interior Architect",
    timeline: "2020 - 2021",
    location: "Tehran, Iran",
    tools: ["Rhino", "AutoCAD", "Revit"],
    tags: ["Interior Design", "Retail Architecture", "Sustainable Materials", "Tehran", "Earthen Aesthetics"],
    caseStudy: {
      challenge: {
        title: "The Spatial Challenge",
        subtitle: "Analyzing programmatic requirements and contextual constraints.",
        content: [
          "Designing a retail space within a modern shopping mall (Arg Shopping Center) that successfully conveys the organic, natural, and raw essence of the brand while maintaining commercial functionality and addressing the physical limitations of an indoor shopping center layout.",
        ],
        image: "/images/WhatsApp Image 2026-06-07 at 23.19.21 (4).jpeg",
        imageCaption: "Sabad Organic Store contextual visualization.",
      },
      researchAnalysis: {
        title: "Research & Mapping Process",
        subtitle: "Establishing structural, environmental, and physical methodologies.",
        content: [
          "Analysis focused on customer psychology regarding health and sustainability, exploring how raw textures like rammed earth, gravel flooring, and light natural timber could evoke an outdoor, rustic connection. The research highlighted the need to create distinct micro-environments—ranging from food displays to lifestyle simulations like bedroom settings—within a compact, irregular floor plan.",
        ],
      },
      designSolution: {
        title: "Materiality & Structural Expression",
        subtitle: "Synthesizing research vectors into precise architectural form.",
        content: [
          "The design utilizes low-impact, earthen-colored partition walls to guide visitors through a winding path, mimicking an open-air organic market. By introducing textured gravel paving alongside smooth timber platforms and minimalist display shelving, the layout balances tactile warmth with contemporary retail efficiency, creating an immersive, multi-sensory brand experience.",
        ],
      },
      impactOutcome: {
        title: "Ecological & Cultural Impact",
        subtitle: "Reviewing spatial performance and user metrics.",
        content: [
          "Sabad Organic Store successfully redefined the commercial aesthetic within the Arg Shopping Center, drawing higher foot traffic through its unique natural ambiance and setting a benchmark for biophilic and sustainable retail architecture in Tehran.",
        ],
      },
    },
  },
];
