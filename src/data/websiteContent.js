export const BRAND = {
  name: "Blooming Era Preschools",
  tagline: "India's Flagship No-Book Experiential Preschool",
  motto: "Where Curiosity Blossoms Into Boundless Intelligence",
  phone: "+91 70044 14884",
  email: "info@bloomingera.com",
  admissionsEmail: "admissions@bloomingera.com",
  franchiseEmail: "franchise@bloomingera.com",
  address: "Corporate HQ: New Delhi | Operational Hub: Ranchi, Jharkhand",
  hours: "Mon – Fri: 8:30 AM – 6:30 PM | Sat: 9:00 AM – 2:00 PM",
  colors: {
    lime: "#ADF802",
    turquoise: "#60C8D4",
    navy: "#091E3A",
  }
};

export const KINDERMAGIC_WORLDS = [
  {
    id: "language",
    name: "Language Lab",
    subtitle: "Story Circles & Sand Phonics",
    color: "#60C8D4",
    badge: "Linguistic Joy",
    icon: "BookOpenCheck",
    // Joyful toddler child laughing with open storybook outdoors (zero adults)
    image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=700&q=80",
    description: "Children trace letters in scented beach sand and sing phonemic rhymes instead of writing boring worksheets.",
    materials: ["Sand Trays", "Puppet Theatre", "Phonics Mats", "Story Cards"],
    outcomes: ["Expressive speech", "Sound recognition", "Story confidence", "Active vocabulary"],
    cycleFocus: "Express through narrative play"
  },
  {
    id: "numbers",
    name: "Number Universe",
    subtitle: "Tactile Beads & Balance Scales",
    color: "#ADF802",
    badge: "Math Intuition",
    icon: "Compass",
    // Toddler hands moving tactile colorful wooden beads on wire maze (zero adults)
    image: "https://images.unsplash.com/photo-1485460535564-844461f37f77?auto=format&fit=crop&w=700&q=80",
    description: "Preschoolers touch physical beads, balance weights, and assemble 3D wooden blocks to discover numbers naturally.",
    materials: ["Bead Chains", "Balance Scales", "Wooden Rods", "Shape Puzzles"],
    outcomes: ["Counting 1-100", "Spatial balance", "Pattern finding", "Size estimation"],
    cycleFocus: "Explore with real quantities"
  },
  {
    id: "society",
    name: "Self & Society",
    subtitle: "Friendship & Emotional Heart",
    color: "#E91E63",
    badge: "Social Smiles",
    icon: "HeartHandshake",
    // Toddler boy with open storybook smiling joyfully (zero adults)
    image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=700&q=80",
    description: "Peace tables, cooperative games, emotion mirrors, and community dress-up cultivate empathy and sharing.",
    materials: ["Peace Table", "Emotion Mirrors", "Community Outfits", "Sharing Timers"],
    outcomes: ["Empathy & sharing", "Conflict resolution", "Confident smiles", "Team spirit"],
    cycleFocus: "Experience daily friendship"
  },
  {
    id: "movement",
    name: "Movement & Making",
    subtitle: "Organic Clay & Motor Agility",
    color: "#FA6400",
    badge: "Creative Hands",
    icon: "Sparkles",
    // 3-year-old preschooler joyfully finger-painting with bright colors (zero adults)
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=80",
    description: "Kids mold organic clay, thread wooden beads, and climb soft obstacle courses to build hand agility and strong posture.",
    materials: ["Organic Clay", "Wooden Beams", "Weaving Looms", "Pincer Pipettes"],
    outcomes: ["Pincer handwriting grip", "Body agility", "Dexterity & focus", "Creative expression"],
    cycleFocus: "Extend through physical craft"
  },
  {
    id: "nature",
    name: "Nature & Discovery",
    subtitle: "Living Plants & Weather Labs",
    color: "#76BC21",
    badge: "Little Scientists",
    icon: "Leaf",
    // Toddler exploring nature and living plants in warm sunlight (zero adults)
    image: "https://images.unsplash.com/photo-1471342051519-9621d25323fc?auto=format&fit=crop&w=700&q=80",
    description: "Preschoolers plant seeds, touch real soil, and observe magnifying prisms in our sunshine garden.",
    materials: ["Planter Beds", "Magnifiers", "Water Funnels", "Eco Stations"],
    outcomes: ["Plant life cycles", "Love for nature", "Curious observation", "Outdoor wonder"],
    cycleFocus: "Observe living ecosystems"
  },
  {
    id: "tomorrow",
    name: "Tomorrow Thinking",
    subtitle: "Screen-Free Wooden Coding",
    color: "#8E24AA",
    badge: "Smart Thinkers",
    icon: "Cpu",
    // Preschool child focused on wooden puzzle blocks and spatial reasoning (zero adults)
    image: "https://images.unsplash.com/photo-1489850846882-35ef10a4b480?auto=format&fit=crop&w=700&q=80",
    description: "Zero screens. Toddlers solve wooden directional tile mazes, gear puzzles, and sequence games.",
    materials: ["Coding Wooden Tiles", "Gear Sets", "Circuit Mazes", "Sequence Blocks"],
    outcomes: ["Step-by-step logic", "Debugging patience", "Spatial reasoning", "Problem-solving"],
    cycleFocus: "Extend logical sequencing"
  }
];

export const PROGRAMMES = [
  {
    id: "playgroup",
    name: "Playgroup",
    age: "2.0 – 3.0 Years",
    minAge: 2.0,
    maxAge: 3.0,
    ratio: "1:6 Ratio",
    hours: "9:00 AM – 11:30 AM",
    badge: "Gentle Start (2-3 Yrs)",
    // Actual 2-year-old toddler playing with wooden shape sorter & blocks on play mat (zero adults)
    image: "https://images.unsplash.com/photo-1477511614005-61bd8b91d218?auto=format&fit=crop&w=700&q=80",
    description: "Gentle sensory exploration, joyful circle rhymes, toilet confidence, and warm separation ease for 2-year-olds.",
    highlights: ["Sensory water & sand bins", "Morning circle finger plays", "Separation ease coaching", "Toddler soft obstacle courses"]
  },
  {
    id: "nursery",
    name: "Nursery",
    age: "3.0 – 4.0 Years",
    minAge: 3.0,
    maxAge: 4.0,
    ratio: "1:8 Ratio",
    hours: "9:00 AM – 12:30 PM",
    badge: "Curious Minds (3-4 Yrs)",
    // Actual 3-year-old smiling preschooler finger-painting (zero adults)
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=80",
    description: "Phonics rhythms, building 3D towers, practical pouring exercises, and cooperative sharing for 3-year-olds.",
    highlights: ["Sand phonics immersion", "Block architecture", "Living garden seedling care", "Emotional peace table"]
  },
  {
    id: "junior-kg",
    name: "Junior KG",
    age: "4.0 – 5.0 Years",
    minAge: 4.0,
    maxAge: 5.0,
    ratio: "1:10 Ratio",
    hours: "8:45 AM – 1:00 PM",
    badge: "Active Thinkers (4-5 Yrs)",
    // 4-5 year old preschool child building architectural wooden shapes (zero adults)
    image: "https://images.unsplash.com/photo-1489850846882-35ef10a4b480?auto=format&fit=crop&w=700&q=80",
    description: "Tactile number bonds, screen-free wooden maze coding, nature sketchbooks, and expressive drama for 4-year-olds.",
    highlights: ["Physical numbers to 50", "Screen-free coding tiles", "Nature mini-investigations", "Story journal sketches"]
  },
  {
    id: "senior-kg",
    name: "Senior KG",
    age: "5.0 – 6.0 Years",
    minAge: 5.0,
    maxAge: 6.0,
    ratio: "1:12 Ratio",
    hours: "8:30 AM – 1:30 PM",
    badge: "Grade 1 Ready (5-6 Yrs)",
    // 5-6 year old kindergarten child focused with pencil in classroom (zero adults)
    image: "https://images.unsplash.com/photo-1488254491307-10ca8fa174c8?auto=format&fit=crop&w=700&q=80",
    description: "Confident reading, hands-on math labs, scientific capstones, and primary school posture readiness for 5-6 year olds.",
    highlights: ["Phonics reading fluency", "Problem-solving math labs", "Executive function skills", "Zero test stress"]
  },
  {
    id: "daycare",
    name: "Daycare & Extended Care",
    age: "2.0 – 10.0 Years",
    minAge: 2.0,
    maxAge: 10.0,
    ratio: "1:6 Ratio",
    hours: "8:30 AM – 6:30 PM",
    badge: "Cozy After-School Care",
    // Toddler playing happily with wooden camera in playroom (zero adults)
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80",
    description: "Warm, CCTV-monitored after-school home with organic warm meals, resting cots, and creative hobby clubs.",
    highlights: ["Nutritious warm meals", "Sanitized sleep cots", "Music & taekwondo clubs", "Live mobile check-ins"]
  }
];

export const GALLERY_PHOTOS = [
  {
    url: "https://images.unsplash.com/photo-1477511614005-61bd8b91d218?auto=format&fit=crop&w=700&q=80",
    title: "Toddler Sensory Exploration",
    tag: "Playgroup (2-3 Yrs)"
  },
  {
    url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=80",
    title: "Curious Smiles & Sharing",
    tag: "Nursery (3-4 Yrs)"
  },
  {
    url: "https://images.unsplash.com/photo-1489850846882-35ef10a4b480?auto=format&fit=crop&w=700&q=80",
    title: "Hands-On Block Building",
    tag: "Junior KG (4-5 Yrs)"
  },
  {
    url: "https://images.unsplash.com/photo-1488254491307-10ca8fa174c8?auto=format&fit=crop&w=700&q=80",
    title: "Focused Classroom Drawing",
    tag: "Senior KG (5-6 Yrs)"
  },
  {
    url: "https://images.unsplash.com/photo-1471342051519-9621d25323fc?auto=format&fit=crop&w=700&q=80",
    title: "Botany Garden Wonders",
    tag: "Nature & Discovery"
  },
  {
    url: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=700&q=80",
    title: "Story Circles & Laughter",
    tag: "Language Lab"
  }
];

export const NO_BOOK_COMPARISON = [
  {
    category: "Learning Method",
    traditional: "Heavy workbooks and repetitive paper worksheets.",
    bloomingEra: "Sensory sand trays, 3D blocks, and living plant labs.",
    advantage: "Children remember 3.8x more through physical touch."
  },
  {
    category: "School Backpack",
    traditional: "Heavy 3-5 kg bag loaded with textbooks and stationary.",
    bloomingEra: "Zero heavy books. Just a light snack bag with total spine freedom.",
    advantage: "Guards child cervical posture and stops morning school fear."
  },
  {
    category: "Milestone Tracking",
    traditional: "Stressful tests, comparative ranks, and letter grades.",
    bloomingEra: "Continuous non-diagnostic milestone tracking (PARAKH HPC).",
    advantage: "Celebrates individual organic growth with zero shaming."
  },
  {
    category: "Screen Exposure",
    traditional: "Passive TV cartoons to keep kids quiet.",
    bloomingEra: "Zero passive screens. Algorithmic logic taught via wooden tiles.",
    advantage: "Protects young eyesight and attention span."
  }
];

export const LEADERSHIP = [
  {
    name: "Dr. Masuda Yasmin",
    role: "Founder & Chief Academic Officer",
    qualifications: "Ph.D. in Early Childhood Education, NCF-FS Specialist",
    bio: "Pioneer of the No-Book Experiential Framework that replaces rote copybooks with hands-on learning worlds.",
    quote: "Children are not empty vessels to be filled with textbook print; they are blazing fires of natural curiosity."
  },
  {
    name: "Dr. Shelly Bisht",
    role: "Director of Curriculum & Pedagogy",
    qualifications: "M.Ed, Child Psychology Researcher",
    bio: "Architect behind the Kindermagic PrimeX 6-World framework, connecting neuroscience with hands-on play.",
    quote: "True learning occurs through the hands. Touching reality builds permanent brain connections."
  },
  {
    name: "Ayaan Hossain",
    role: "Director of Strategy & Brand Growth",
    qualifications: "B.Tech, MBA (Operations)",
    bio: "Steers franchise architecture and 360-degree support across expanding city networks.",
    quote: "Our partners are academic stewards transforming early years across India."
  },
  {
    name: "Mohd. Neyaz Alam",
    role: "Director of Operations & Compliance",
    qualifications: "School Infrastructure Lead",
    bio: "Oversees child-safe infrastructure and educator bootcamps nationwide.",
    quote: "Child safety, non-toxic spaces, and world-class mentors are non-negotiable."
  }
];

export const TRACKER_SAMPLES = {
  cognitive: {
    domain: "Cognitive & Logic",
    color: "#60C8D4",
    status: "Mastered",
    milestone: "Solves 4-step sequence maze using directional wooden tiles without adult cues.",
    observation: "Aarav re-routed the marble path in 42 seconds with joyful concentration.",
    date: "Observed Oct 24, 2026",
    educator: "Lead Educator Priya S."
  },
  linguistic: {
    domain: "Language & Stories",
    color: "#ADF802",
    status: "Emerging Joyfully",
    milestone: "Narrates 3-part event sequence during circle time using rich descriptive words.",
    observation: "Used descriptive words 'glistening' and 'pebbled' when sharing sensory mud discoveries.",
    date: "Observed Oct 25, 2026",
    educator: "Lead Educator Anita M."
  },
  socioEmotional: {
    domain: "Friendship & Empathy",
    color: "#E91E63",
    status: "Consistently Observed",
    milestone: "Uses the Peace Table to resolve sharing turns independently.",
    observation: "Offered a 2-minute sand timer so both peers could share the balance beam smoothly.",
    date: "Observed Oct 26, 2026",
    educator: "Lead Educator Sunita R."
  },
  motor: {
    domain: "Motor Agility",
    color: "#FA6400",
    status: "Advanced Coordination",
    milestone: "Tri-finger pincer grip established with wooden tweezers and clay pipettes.",
    observation: "Transferred 20 water beads using pipettes without spilling, demonstrating steady hand balance.",
    date: "Observed Oct 27, 2026",
    educator: "Lead Educator Priya S."
  }
};
