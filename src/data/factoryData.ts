import {
  StatItem,
  CapabilityItem,
  FacilityZone,
  FoodSolutionCategory,
  BrandItem,
  TimelineMilestone,
  QualityCertification,
  NewsArticle,
  SustainabilityMetric,
} from '../types';

export const GALLERY_IMAGES = [
  {
    id: 'gal-1',
    category: 'Food Manufacturing',
    title: 'High-Throughput Continuous Cooking Lines',
    description: 'Tilting steam jackets and computerized portioning at Bulebel.',
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-2',
    category: 'Bakery & Pastry',
    title: 'Artisan Stone-Deck Sourdough Baking',
    description: 'Traditional slow-fermentation loaves and Maltese crusty breads.',
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-3',
    category: 'Healthcare Catering',
    title: 'Clinical Dietary Management',
    description: 'Nutritionally balanced hospital patient meals with digital traceability.',
    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-4',
    category: 'Ready Meals',
    title: 'Freshly Prepared Mediterranean Recipes',
    description: 'MAP sealed single-portion and family-size meals for supermarket retail.',
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-5',
    category: 'Banqueting & Gala',
    title: 'James Caterers Luxury State Hospitality',
    description: 'State banquets, international summits, and grand wedding catering.',
    src: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-6',
    category: 'Pastry & Patisserie',
    title: 'Layered French Viennoiserie & Desserts',
    description: 'Pure cultured butter croissants and artisan banqueting confections.',
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-7',
    category: 'R&D Laboratory',
    title: 'Sensory Science & Shelf-Life Testing',
    description: 'Biochemical food analysis, micro-testing, and clean-label formulation.',
    src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-8',
    category: 'Packaging Automation',
    title: 'Hermetic MAP Sealing Systems',
    description: 'Gas-flush barrier packaging locking in freshness without additives.',
    src: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-9',
    category: 'Artisanal Gelato',
    title: 'Ciao Bella Italian Gelato & Sorbets',
    description: 'Sicilian pistachios, local fresh milk, and pure natural fruit purees.',
    src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-10',
    category: 'Cold-Chain Warehousing',
    title: 'Multi-Temperature Logistics Hub',
    description: '4,500 pallet high-bay warehouse and telematics fleet dispatch.',
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-11',
    category: 'Fresh Salads',
    title: 'Ozonated Produce & Ancient Grain Bowls',
    description: 'Triple-washed Mediterranean greens and protein-packed bowls.',
    src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-12',
    category: 'Culinary Team',
    title: 'Master Chefs & Food Technologists',
    description: 'Culinary excellence driven by passionate chefs in immaculate cleanrooms.',
    src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
  },
];

export const COMPANY_CONTACT = {
  name: 'The Food Factory',
  location: 'BLB009Y, Bulebel Industrial Estate, Bulebel, Malta',
  addressLine1: 'BLB009Y, Bulebel Industrial Estate',
  addressLine2: 'Bulebel, ZTN 3000, Malta',
  phone: '+356 2567 6500',
  email: 'info@thefoodfactory.com.mt',
  openingHours: 'Mon - Fri: 08:00 - 17:30 CET',
  operatingStatus: '24/7 Continuous Production Facility',
};

export const CORE_STATS: StatItem[] = [
  {
    id: 'facilities-sqm',
    value: 35000,
    suffix: ' SQ M',
    label: 'OF FACILITIES',
    detail: 'State-of-the-art European production complex at Bulebel, including a 6,000 sqm multi-level expansion.',
  },
  {
    id: 'meals-daily',
    value: 34500,
    label: 'MEALS PREPARED DAILY',
    detail: 'Delivering precision nutrition to hospitals, airlines, institutions, supermarkets, and private labels.',
  },
  {
    id: 'countries',
    value: 10,
    label: 'COUNTRIES',
    detail: 'Global export reach spanning Europe, the Mediterranean basin, offshore operations, and maritime corridors.',
  },
  {
    id: 'brands',
    value: 17,
    label: 'BRANDS',
    detail: 'An integrated portfolio catering to gourmet banqueting, calorie-conscious retail, artisan gelato, and institutional dining.',
  },
  {
    id: 'companies',
    value: 22,
    label: 'COMPANIES',
    detail: 'A diversified corporate group spanning food manufacturing, healthcare hospitality, logistics, and marine catering.',
  },
  {
    id: 'employees',
    value: 5000,
    prefix: '',
    suffix: '+',
    label: 'EMPLOYEES',
    detail: 'Culinary innovators, food technologists, HACCP managers, logistics engineers, and service professionals.',
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'manufacturing',
    title: 'FOOD MANUFACTURING',
    tagline: 'High-throughput culinary engineering with precision recipe replication.',
    description:
      'Continuous production systems combining high-capacity steam kettles, automated braising units, automated portioning, and multi-format MAP packaging.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    specs: ['Automated cook-chill lines', 'Modified Atmosphere Packaging', 'Positive-pressure cleanrooms'],
  },
  {
    id: 'ready-meals',
    title: 'READY MEALS',
    tagline: 'Fresh, chilled, and frozen gourmet meals engineered for modern lifestyles.',
    description:
      'From traditional Mediterranean slow-cooked classics to clean, single-serving portioned diet meals for supermarkets and retail chains across Europe.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    specs: ['Extended chill shelf-life', 'Microwave & oven-safe trays', 'Strict nutritional profiling'],
  },
  {
    id: 'bakery-pastry',
    title: 'BAKERY & PASTRY',
    tagline: 'European artisan traditions elevated through industrial scale.',
    description:
      'Stone-hearth automated lines baking authentic Maltese crusty sourdough, layered French viennoiserie, and bespoke patisserie for five-star hospitality.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    specs: ['Multi-deck deck ovens', 'Spiral flash-freezing', 'Custom laminating lines'],
  },
  {
    id: 'healthcare',
    title: 'HEALTHCARE CATERING',
    tagline: 'Clinical nutrition delivered with medical rigor and gourmet warmth.',
    description:
      'Serving Malta’s premier healthcare institutions and public-private partnerships with strictly monitored therapeutic, renal, allergen-free, and texture-modified diets.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    specs: ['Ward-level digital tracking', 'ISO 22000 certified lines', 'Therapeutic menu variants'],
  },
  {
    id: 'private-label',
    title: 'PRIVATE LABEL',
    tagline: 'End-to-end bespoke development for international supermarket chains.',
    description:
      'We transform brand concepts into market-ready retail products: formula development, sensory tasting, packaging design, nutritional certification, and scalable manufacturing.',
    image: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=1200&q=80',
    specs: ['Custom SKU formulation', 'Private branding & compliance', 'Flexible batch run scale'],
  },
  {
    id: 'outside-catering',
    title: 'OUTSIDE CATERING',
    tagline: 'State banquets, VIP galas, and national summit hospitality.',
    description:
      'Rooted in the heritage of James Caterers, our culinary logistics infrastructure supports luxury banqueting for gatherings of 10 to 5,000+ guests simultaneously.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    specs: ['Mobile temperature-controlled fleet', '5,000+ guest simultaneous capacity', 'State banquet protocols'],
  },
  {
    id: 'rd',
    title: 'R&D & INNOVATION',
    tagline: 'Where culinary art meets biological and food science.',
    description:
      'Our dedicated testing laboratory and development kitchen fine-tune recipes, optimize natural preservation methods, and prototype future-facing functional food products.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    specs: ['Microbiological stability labs', 'Sensory tasting booths', 'Thermal curve profiling'],
  },
  {
    id: 'specialised',
    title: 'SPECIALISED FOOD PRODUCTION',
    tagline: 'Dedicated segregated lines for cleanroom allergens and dietary requirements.',
    description:
      'State-of-the-art isolated facilities engineered specifically for certified gluten-free, Halal, dairy-free, and pediatric dietary manufacturing.',
    image: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=1200&q=80',
    specs: ['Zero-cross-contamination zones', 'Dedicated air-handling HVAC', 'Halal & gluten-free certified'],
  },
];

export const FACILITY_ZONES: FacilityZone[] = [
  {
    id: 'healthcare-unit',
    name: 'HEALTHCARE CATERING DIVISION',
    headline: 'High-Precision Nutrition for Public & Private Hospitals',
    sqm: '6,500 SQM',
    temperature: 'Zoned +4°C to +12°C',
    capacity: '14,000 patient meals / day',
    description:
      'Engineered specifically to support Malta’s national healthcare system and private clinics. Features barcode-tracked computerized meal assembly lines, texture-modified food processing, and hospital ward distribution temperature integrity.',
    features: [
      'Digital prescription-to-plate dietary software integration',
      'Automated tray conveyor assembly with photo verification',
      'Dedicated allergen and renal diet preparation kitchens',
      'Blast chillers maintaining HACCP compliance down to +3°C within 90 minutes',
    ],
    image: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'industrial-kitchen',
    name: 'CENTRAL INDUSTRIAL KITCHEN',
    headline: 'Large-Batch Culinary Powerhouse',
    sqm: '8,200 SQM',
    temperature: 'Precision Climate Control',
    capacity: '20,000+ cooked portions / day',
    description:
      'The industrial nerve center of The Food Factory. Outfitted with high-capacity tilting steam jackets, automated continuous pasta cookers, pressure bratt pans, and multi-tier combi-steamer banks operated by master culinary chefs.',
    features: [
      'Automated variable-speed mixing steam kettles (300L - 1000L capacity)',
      'Continuous conveyor braising and searing tunnels',
      'Vacuum cooling systems ensuring pristine ingredient texture retention',
      'Direct pipeline connection to clean cold-room packaging lines',
    ],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bakery-pastry-zone',
    name: 'BAKERY & PATISSERIE PAVILION',
    headline: 'Artisanal Craftsmanship at Industrial Scale',
    sqm: '5,400 SQM',
    temperature: 'Controlled 18°C / 65% Humidity',
    capacity: '45,000 baked items / day',
    description:
      'A multi-tiered bakery producing both crusty Maltese sourdough loaves and delicate Viennoiserie. High-precision dough lamination lines, proofing chambers with automated humidity cycles, and stone-sole continuous baking tunnels.',
    features: [
      'Automated laminating line producing 128 micro-layers of butter pastry',
      'Thermal oil stone-deck tunnel ovens with steam injection',
      'Spiral blast-freezers for bake-off par-baked distribution',
      'Dedicated artisan confectionery and chocolate enrobing station',
    ],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'high-volume-packaging',
    name: 'HIGH-VOLUME PACKAGING & DISPATCH',
    headline: 'Automation, MAP Sealing & Cold Chain Dispatch',
    sqm: '4,800 SQM',
    temperature: '+2°C to +4°C Cold Chain',
    capacity: '60,000 units sealed daily',
    description:
      'Equipped with state-of-the-art tray sealing machinery, thermoforming packaging lines, automated checkweighers, X-ray foreign body inspection units, and direct hermetic dock levelers.',
    features: [
      'Modified Atmosphere Packaging (MAP) extending shelf-life naturally',
      'Integrated X-ray & optical label verification sensors',
      'Automatic robotic case packing and palletizing',
      'Docking bays with sealed inflatable shelter seals',
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'rd-laboratory',
    name: 'R&D INNOVATION & TESTING LAB',
    headline: 'Culinary Science, Sensory Booths & Quality Control',
    sqm: '2,200 SQM',
    temperature: 'Laboratory Cleanroom ISO 8',
    capacity: '120+ active formulation projects',
    description:
      'Where food scientists, executive chefs, and dietitians collaborate. Complete with private sensory testing cubicles, spectrophotometers, water activity meters, and accelerated shelf-life stability test cabinets.',
    features: [
      'Pilot plant replication line for sample batch testing',
      'Microbiological testing laboratory verifying zero pathogen presence',
      'Nutritional analysis and automated calorific calculation engines',
      'Client sensory evaluation suite with controlled lighting spectrums',
    ],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gluten-free-cleanroom',
    name: 'DEDICATED GLUTEN-FREE FACILITY',
    headline: 'Isolated Cleanroom for Allergen-Free Manufacturing',
    sqm: '2,000 SQM',
    temperature: 'Positive Pressure Airflow Filtration',
    capacity: 'Certified <5ppm gluten threshold',
    description:
      'A physically segregated production building with independent air handling units, employee shower airlocks, and separate ingredient storage to eliminate any risk of gluten or allergen cross-contact.',
    features: [
      'HEPA-filtered positive pressure ventilation avoiding airborne flour dust',
      'Independent raw material receiving and quarantined loading bays',
      'Certified under AOECS standard for gluten-free foods',
      'Dedicated cleaning cycles with rapid ATP surface swab verification',
    ],
    image: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'warehousing-logistics',
    name: 'COLD-CHAIN WAREHOUSING & LOGISTICS',
    headline: 'Automated Multi-Temperature Storage Hub',
    sqm: '5,900 SQM',
    temperature: '+4°C / -18°C / -25°C Ultra-Low',
    capacity: '4,500 pallet positions',
    description:
      'High-bay warehouse utilizing mobile racking systems, temperature monitoring telemetry with real-time GSM alarms, and seamless interface with Malta’s deep-water port and international airport.',
    features: [
      'High-density mobile electric racking maximizing volumetric efficiency',
      'Redundant ammonia-free low-GWP refrigeration systems',
      'Automated WMS warehouse management with real-time batch traceability',
      'Fleet of 45+ multi-temperature telematics-equipped delivery vehicles',
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
];

export const FOOD_SOLUTIONS: FoodSolutionCategory[] = [
  {
    id: 'ready-meals-solution',
    title: 'READY MEALS',
    tagline: 'High-convenience, gourmet recipes prepared for retail and catering.',
    description:
      'Single-portion and multi-portion prepared meals engineered with precise thermal balancing so every vegetable maintains crispness and sauces remain velvety.',
    applications: ['Retail supermarkets', 'Convenience chains', 'Institutional dining', 'Aviation catering'],
    shelfLife: 'Up to 21 days chilled / 12 months frozen',
    temperatureRegime: 'Chilled (+2°C to +4°C) or Frozen (-18°C)',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cook-serve',
    title: 'COOK & SERVE',
    tagline: 'Immediate culinary service for large-scale venues and events.',
    description:
      'Freshly prepared hot food transported in advanced thermal induction holding carts, engineered for state banquets, luxury weddings, and major corporate conventions.',
    applications: ['VIP galas', 'Conference centers', 'Hospitality events', 'Executive dining'],
    shelfLife: 'Immediate service (< 4 hours hold)',
    temperatureRegime: 'Holding core temperature > +65°C',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cook-chill',
    title: 'COOK & CHILL',
    tagline: 'Rapid temperature descent locking in micro-nutrients and flavor.',
    description:
      'Food cooked to exact pasteurization parameters, immediately dropped from +70°C to +3°C within 90 minutes using high-velocity blast chillers.',
    applications: ['Hospital networks', 'Elderly care residences', 'Centralized school lunches'],
    shelfLife: '5 to 28 days depending on packaging',
    temperatureRegime: '+1°C to +4°C strictly maintained',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cook-freeze',
    title: 'COOK & FREEZE',
    tagline: 'Cryogenic and spiral blast-freezing for export stability.',
    description:
      'Ultra-rapid freezing generates micro-crystalline ice structures that preserve cellular integrity, ensuring pristine mouthfeel and texture upon regeneration.',
    applications: ['Offshore oil & gas rigs', 'Cruise liners', 'International export distributors'],
    shelfLife: '12 to 18 months at -18°C',
    temperatureRegime: '-18°C or below',
    image: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bakery-artisan',
    title: 'BAKERY & BREADS',
    tagline: 'Traditional sourdough fermentation meets continuous baking.',
    description:
      'From authentic Maltese ftira and crusty loaves to par-baked baguettes, sandwich rolls, and specialty multigrain varieties.',
    applications: ['Hotels & resorts', 'Supermarket bake-off stations', 'Food service distributors'],
    shelfLife: 'Daily fresh or 9 months par-baked frozen',
    temperatureRegime: 'Ambient fresh or -18°C deep-frozen',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'pastry-patisserie',
    title: 'PASTRY & VIENNOISERIE',
    tagline: 'Pure butter croissants, Danish pastries, and traditional sweets.',
    description:
      'Layered pastry dough made with premium European cultured butter, proofed to exact parameters, and frozen unbaked or fully baked for quick service.',
    applications: ['Cafes and coffee house chains', 'Airlines', 'Hotel breakfast banquets'],
    shelfLife: '6 months unbaked frozen',
    temperatureRegime: '-18°C frozen dough',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'filled-pasta',
    title: 'FILLED PASTA',
    tagline: 'Durum wheat semolina stuffed with local ricotta and gourmet fillings.',
    description:
      'Ravioli, tortelloni, and agnolotti manufactured on Italian automated pasta lines with delicate dough elasticity and rich natural fillings without artificial binders.',
    applications: ['Fine dining restaurants', 'Retail branded packages', 'Contract food service'],
    shelfLife: '14 days MAP chilled / 12 months frozen',
    temperatureRegime: '+3°C chilled or -18°C frozen',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'desserts',
    title: 'DESSERTS & CAKES',
    tagline: 'Individual glass verrines, plated desserts, and celebratory cakes.',
    description:
      'Master pastry chef designs scaled for banquets: chocolate ganache tarts, cheesecakes, tiramisu, and classical Maltese desserts crafted in high volumes.',
    applications: ['Events catering', 'Restaurant chains', 'Retail dessert cabinets'],
    shelfLife: '7 days chilled / 6 months frozen',
    temperatureRegime: '+2°C to +4°C chilled or -18°C',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'salads',
    title: 'FRESH SALADS & BOWLS',
    tagline: 'Ozonated triple-washed greens, grain bowls, and high-protein meals.',
    description:
      'Locally sourced Mediterranean produce, ancient grains, and sous-vide proteins assembled under strict positive-pressure atmospheric conditions.',
    applications: ['Office grab-and-go kiosks', 'Supermarket delis', 'Corporate dining'],
    shelfLife: '4 to 7 days chilled',
    temperatureRegime: '+2°C to +4°C chilled',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'sandwiches',
    title: 'SANDWICHES & WRAPS',
    tagline: 'High-speed automated sandwich assembly with barrier-film packaging.',
    description:
      'Club sandwiches, focaccias, brioche rolls, and artisan wraps sealed in gas-flushed packaging maintaining bread moisture while preserving salad crispness.',
    applications: ['Airlines', 'Train operators', 'Convenience hubs', 'Campus canteens'],
    shelfLife: '5 to 7 days chilled',
    temperatureRegime: '+2°C to +4°C chilled',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'special-dietary',
    title: 'SPECIAL DIETARY REQUIREMENTS',
    tagline: 'Clinically calibrated meals for vulnerable medical profiles.',
    description:
      'Diabetic, low-sodium, renal, dysphagia IDDSI level 4-7 texture-modified meals, alongside 100% Halal and allergen-controlled recipes.',
    applications: ['Hospitals', 'Specialized care clinics', 'Rehabilitation centers'],
    shelfLife: 'Custom based on application',
    temperatureRegime: '+2°C to +4°C or -18°C',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'private-label-sol',
    title: 'PRIVATE LABEL DEVELOPMENT',
    tagline: 'Your brand, backed by our world-class manufacturing infrastructure.',
    description:
      'We co-create proprietary recipes, design regulatory-compliant European food labelling, validate shelf-life curves, and scale continuous supply runs.',
    applications: ['National supermarket chains', 'QSR franchises', 'Health food startups'],
    shelfLife: 'Bespoke specification',
    temperatureRegime: 'Ambient, chilled, or frozen',
    image: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=1200&q=80',
  },
];

export const BRANDS: BrandItem[] = [
  {
    id: 'james-caterers',
    name: 'James Caterers',
    tagline: 'Pioneers of Luxury Catering & State Hospitality in Malta',
    category: 'High-End Banqueting & Event Services',
    founded: '1989',
    description:
      'Founded by James Barbara, James Caterers is Malta’s most prestigious event catering institution. Renowned for catering head-of-state banquets, CHOGM summits, international royalty, and high-profile luxury weddings.',
    highlights: [
      'Official caterer for historic state summits and royal visits',
      'Full-service logistics capable of managing events for up to 5,000+ guests',
      'Custom pastry, wine pairing, and bespoke menu design',
    ],
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    website: 'https://jamescaterers.com',
  },
  {
    id: 'waistnot',
    name: 'Waistnot',
    tagline: 'Nutritious, Calorie-Controlled Ready Meals with Zero Compromise',
    category: 'Healthy Retail & Fitness Nutrition',
    founded: '2019',
    description:
      'Waistnot was created to answer the modern demand for clean, macro-balanced, and dietitian-approved prepared meals. Cooked fresh daily at The Food Factory without artificial preservatives, high sodium, or refined sugars.',
    highlights: [
      'Precise macro-nutrient breakdown (protein, carbs, healthy fats)',
      'Vacuum-sealed freshness with extended chilled shelf-life',
      'Distributed in leading supermarkets and direct home subscriptions',
    ],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    website: 'https://waistnot.com.mt',
  },
  {
    id: 'ciao-bella',
    name: 'Ciao Bella',
    tagline: 'Artisanal Italian Gelato, Sorbets & Frozen Delicacies',
    category: 'Premium Gelato & Frozen Confectionery',
    description:
      'Crafted using traditional Italian churn methods combined with pure Sicilian pistachios, Piedmont hazelnuts, and fresh local Maltese milk. Available in bulk gastronomy tubs and retail pints.',
    highlights: [
      '100% natural fruit sorbets with zero dairy',
      'Ultra-dense texture with minimal overrun',
      'Supplied to luxury resorts, beach clubs, and retail supermarkets',
    ],
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'crust-bakery',
    name: 'Crust Bakery & Patisserie',
    tagline: 'Heritage Sourdough & Continental Viennoiserie',
    category: 'Commercial & Retail Bakery',
    description:
      'Crust combines centuries-old slow fermentation methods with high-capacity automated stone-deck baking. Supplying hotel chains, cafes, and supermarkets across Malta and Gozo.',
    highlights: [
      'Natural wild yeast starters nurtured for decades',
      'Maltese traditional ftira and sourdough baguettes',
      'Frozen par-baked solutions for commercial food service',
    ],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'navigare-supplies',
    name: 'Navigare Supplies',
    tagline: 'Global Maritime, Offshore & Aviation Provisioning',
    category: 'Export, Marine & Aviation Logistics',
    founded: '2021',
    description:
      'The international distribution arm of The Food Factory. Specializes in bonded marine provisioning, offshore containerized victualing, airline tray services, and export across the Mediterranean.',
    highlights: [
      'Direct customs clearance and bonded warehouse logistics',
      'Supply chain access to major commercial shipping lines and yachts',
      'Export distribution to 10+ Mediterranean and European markets',
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'fortina-food',
    name: 'Fortina Food Solutions',
    tagline: 'Institutional Catering & Hospitality Management',
    category: 'Healthcare & Public-Private Partnerships',
    description:
      'Providing turnkey institutional catering infrastructure for major hospitals, government residential complexes, and private clinic networks with strict ISO 22000 governance.',
    highlights: [
      'Manages 14,000+ daily clinical meal deliveries',
      'Digital ward bedside ordering interface',
      'Dietary and nutritional compliance audits',
    ],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gourmandise',
    name: 'Gourmandise',
    tagline: 'Fine Confectionery, Artisan Pralines & Luxury Pastry',
    category: 'Chocolaterie & High Patisserie',
    description:
      'Dedicated to the fine art of chocolate craftsmanship, handcrafted pralines, macarons, and bespoke festive hampers for corporate gifting and boutique hospitality.',
    highlights: [
      'Single-origin cocoa beans sourced ethically',
      'Custom corporate branding and bespoke packaging',
      'Temperature-controlled artisanal finishing studio',
    ],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'barbara-delicacies',
    name: 'Barbara Delicacies',
    tagline: 'The Authentic Roots of Maltese Savoury Heritage',
    category: 'Heritage Pastry & Traditional Savouries',
    founded: '1989',
    description:
      'Honoring the humble 1989 origins of James Barbara, this brand produces traditional Maltese qassatat, pastizzi, timpana, and savoury party delicacies according to time-honored secret recipes.',
    highlights: [
      'Authentic sheep’s milk ricotta and slow-simmered pea fillings',
      'Distributed through local bakeries and frozen retail supermarkets',
      'Traditional handmade folding techniques preserved at scale',
    ],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
  },
];

export const TIMELINE: TimelineMilestone[] = [
  {
    year: '1989',
    title: 'HUMBLE GENESIS',
    headline: 'Handmade Delicacies from Home',
    description:
      'James Barbara begins producing and distributing traditional Maltese party delicacies and pastry items directly from his family home, establishing an uncompromising standard for quality ingredients.',
    significance: 'The spark that launched what would become Malta’s largest culinary manufacturing enterprise.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
  },
  {
    year: '1991',
    title: 'FIRST DEDICATED CPU',
    headline: 'Establishing Commercial Manufacturing',
    description:
      'Demand quickly outgrows residential scale. James opens the first dedicated Central Production Unit (CPU) with commercial ovens, blast chillers, and organized distribution delivery routes.',
    significance: 'Transition from domestic artisan production to formal commercial food service.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    year: '1994',
    title: 'AVIATION BREAKTHROUGH',
    headline: 'First Major Airline Contract',
    description:
      'Secures its first significant airline-related catering contract, meeting rigorous international aviation food hygiene benchmarks and strict departure dispatch schedules.',
    significance: 'Entered high-specification institutional food service requiring micro-precision timing.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
  {
    year: '1998',
    title: 'SCALE & EXPANSION',
    headline: 'Major Central Production Unit Upgrade',
    description:
      'Commissioned a comprehensive CPU expansion, investing in automated dough laminators, commercial steam kettles, and computerized cold storage systems.',
    significance: 'Tripled daily production capacity to serve large state and corporate events.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    year: '2001',
    title: 'PUBLIC HEALTHCARE ENTRY',
    headline: 'Major OPH Catering Contract',
    description:
      'Awarded the landmark contract for catering at St. Luke’s Hospital (OPH), introducing advanced cook-chill methodologies and strict nutritional guidelines for inpatients.',
    significance: 'Marked the group’s transition into high-volume clinical dietary management.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    year: '2006',
    title: 'NATIONAL RECOGNITION',
    headline: 'Major Healthcare & National Airline Contracts',
    description:
      'Secured contracts to cater Malta’s newly inaugurated state-of-the-art national hospital alongside high-volume catering for the national airline carrier.',
    significance: 'Firmly positioned the company as Malta’s dominant food logistics provider.',
    image: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    year: '2009',
    title: 'CAPACITY MULTIPLICATION',
    headline: 'Further CPU Infrastructure Expansion',
    description:
      'Expanded production footprint once again to accommodate rapid growth in supermarket ready meals, corporate hospitality, and private-label retail contracts.',
    significance: 'Strengthened in-house food science, microbiological testing, and automated portioning.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    year: '2013',
    title: 'DIVERSIFICATION',
    headline: 'Strategic Acquisition & Healthcare Integration',
    description:
      'Acquisition of specialized healthcare hospitality operations, broadening group capabilities into full facility management, therapeutic nutrition, and clinical dietary services.',
    significance: 'Transformed the group from a pure food producer into an integrated multi-service corporation.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
  },
  {
    year: '2017',
    title: 'THE FOOD FACTORY LAUNCH',
    headline: 'A Modern Food Manufacturing Powerhouse',
    description:
      'Inaugurated the purpose-built 35,000 sqm multi-level facility at Bulebel Industrial Estate, representing one of the largest single private food manufacturing investments in Maltese history.',
    significance: 'Brought healthcare catering, bakery, industrial cooking, R&D, and warehousing under one roof.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
  {
    year: '2020',
    title: 'PUBLIC-PRIVATE RESILIENCE',
    headline: 'PPP Hospital Opening & Crisis Response',
    description:
      'Successfully launched food operations for landmark PPP hospital facilities while providing uninterrupted food supply to frontline healthcare during global pandemic conditions.',
    significance: 'Demonstrated exceptional operational continuity and institutional trust.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    year: '2021',
    title: 'GLOBAL HORIZONS',
    headline: 'Navigare Supplies Becomes Export Arm',
    description:
      'Consolidated international export and maritime logistics under Navigare Supplies, expanding supply contracts across Europe, the Mediterranean, and offshore maritime routes.',
    significance: 'Exporting Maltese food quality and industrial precision to 10+ countries worldwide.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    year: '2026',
    title: 'THE FUTURE OF FOOD',
    headline: '6,000 SQM Extension & Sustainable Zero-Waste Milestone',
    description:
      'Completion of the new 6,000 sqm facility extension, expansion of 2,000 PV solar panels, state-of-the-art heat-recovery loops, and automated robotics in cold packaging.',
    significance: 'Solidifying The Food Factory as a world-class European benchmark in sustainable food manufacturing.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
  },
];

export const CERTIFICATIONS: QualityCertification[] = [
  {
    id: 'haccp',
    code: 'HACCP',
    name: 'Hazard Analysis & Critical Control Points',
    scope: 'Universal System Architecture',
    body: 'Verified Independent Audit & Food Safety Authority',
    status: 'Continuously Active & Audited',
    summary:
      'Systematic preventive approach to food safety from biological, chemical, physical, and allergen hazards throughout the production lifecycle.',
  },
  {
    id: 'iso-22000',
    code: 'ISO 22000',
    name: 'Food Safety Management Systems',
    scope: 'End-to-End Processing & Logistics',
    body: 'International Organization for Standardization',
    status: 'Certified & Re-accredited',
    summary:
      'Demonstrates our ability to control food safety hazards to ensure food is safe at the time of human consumption across all facilities.',
  },
  {
    id: 'iso-9001',
    code: 'ISO 9001',
    name: 'Quality Management Systems',
    scope: 'Corporate Governance & Manufacturing Operations',
    body: 'International Organization for Standardization',
    status: 'Certified & Re-accredited',
    summary:
      'Rigorous framework for consistent quality standards, continuous process enhancement, and customer satisfaction metrics.',
  },
  {
    id: 'fssc-22000',
    code: 'FSSC 22000',
    name: 'Food Safety System Certification',
    scope: 'Food & Ingredient Manufacturing',
    body: 'Global Food Safety Initiative (GFSI) Recognized',
    status: 'Fully Accredited Tier 1',
    summary:
      'Global benchmark certification incorporating ISO 22000 and sector-specific prerequisite programs (PRPs) for high-risk food manufacturing.',
  },
  {
    id: 'ifs-food',
    code: 'IFS FOOD',
    name: 'International Featured Standard Food',
    scope: 'Retail Brand & Food Processing Safety',
    body: 'GFSI Recognized Global Standard',
    status: 'Audited Higher Level',
    summary:
      'Strict audit standard for assessing product safety and quality of food manufacturers when supplying tier-1 European supermarket chains.',
  },
  {
    id: 'brc-food',
    code: 'BRC FOOD SAFETY',
    name: 'BRC Global Standard for Food Safety',
    scope: 'Manufacturing, Packing & Dispatch',
    body: 'Brand Reputation Compliance Global Standards',
    status: 'Grade A Certified',
    summary:
      'The leading international benchmark for food safety assurance, hygiene best practices, traceability, and supply chain transparency.',
  },
  {
    id: 'halal',
    code: 'HALAL CERTIFIED',
    name: 'Halal Food Production Certification',
    scope: 'Dedicated Production Lines & Sourcing',
    body: 'Recognized Islamic Religious Authority',
    status: 'Certified Dedicated Lines',
    summary:
      'Independent verification that dedicated production runs adhere strictly to Islamic dietary laws, with zero contact with prohibited substances.',
  },
];

export const SUSTAINABILITY_METRICS: SustainabilityMetric[] = [
  {
    id: 'solar',
    value: '2,000',
    metric: 'PHOTOVOLTAIC PANELS',
    impact: 'Generating Clean On-Site Renewable Energy',
    description:
      'Our rooftop solar array offsets a major portion of our electrical power demand, turning Malta’s 300+ days of annual sunshine into clean energy.',
  },
  {
    id: 'heat-recovery',
    value: '100%',
    metric: 'HEAT RECOVERY CAPTURE',
    impact: 'Reclaimed Waste Thermal Energy for Water Heating',
    description:
      'Closed-loop thermal exchangers capture waste heat produced by continuous refrigeration compressors and divert it to pre-heat boiler wash water.',
  },
  {
    id: 'ventilation',
    value: 'PASSIVE',
    metric: 'NATURAL VENTILATION & ARCHITECTURE',
    impact: 'Engineered Thermal Envelope & Airflow',
    description:
      'Architectural airflow louvers and high-efficiency thermal insulation minimize HVAC cooling requirements across non-refrigerated building zones.',
  },
  {
    id: 'inverter-pumps',
    value: 'VARIABLE',
    metric: 'INVERTER-DRIVEN SYSTEMS',
    impact: 'Dynamic Load Matching Across All Fluid Loops',
    description:
      'Every major circulation pump, chiller, and ventilation fan operates on intelligent variable-frequency drives, eliminating baseline power waste.',
  },
  {
    id: 'gravity-drainage',
    value: 'ZERO-PUMP',
    metric: 'GRAVITY-DRIVEN DRAINAGE',
    impact: 'Reduced Pumping Power & Enhanced Hygiene',
    description:
      'Facility grade engineering uses gravity-assisted stainless steel drain channels, substantially lowering pumping energy and eliminating maintenance hot-spots.',
  },
  {
    id: 'water-stewardship',
    value: 'OPTIMIZED',
    metric: 'WATER & ENERGY OPTIMISATION',
    impact: 'Smart Sub-Metering & Clean-in-Place (CIP)',
    description:
      'Advanced computerized Clean-in-Place cycles recycle sanitizing rinses, slashing freshwater intake while upholding immaculate hygiene standards.',
  },
];

export const SUSTAINABILITY_AWARDS = [
  {
    year: '2026',
    title: 'Malta Business Awards — Sustainable Manufacturing Winner',
    organization: 'Malta Chamber of Commerce / Business First',
    detail: 'Recognized for the 6,000 sqm zero-carbon expansion initiative and closed-loop heat recovery deployment.',
  },
  {
    year: '2024',
    title: 'National Energy & Water Conservation Excellence Award',
    organization: 'Energy & Water Agency Malta',
    detail: 'Honored for 40% reduction in water intensity per ton of finished product via intelligent CIP engineering.',
  },
  {
    year: '2023',
    title: 'Sustainable Enterprise Accreditation (Category: Heavy Food Industry)',
    organization: 'Ministry for the Environment & Enterprise Malta',
    detail: 'Verified audit of the 2,000 PV solar installations, waste heat exchangers, and organic composting integration.',
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'facility-extension-2026',
    featured: true,
    title: 'The Food Factory Inaugurates 6,000 SQM Expansion to Meet Surging European Export Demand',
    category: 'Expansion & Capital Investment',
    date: 'February 2026',
    readTime: '4 min read',
    excerpt:
      'A multi-million euro extension adds advanced automated MAP packaging lines, segregated cleanroom suites for allergen-free products, and expanded cold chain capacity.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    fullText: [
      'The Food Factory Malta has officially commissioned its landmark 6,000 square meter expansion at the Bulebel Industrial Estate, bringing the total complex footprint to over 35,000 square meters.',
      'Designed to satisfy surging export contracts for chilled and frozen ready meals across Southern Europe, the expanded wing features state-of-the-art automated tray sealing systems, robotic palletizing, and positive-pressure cleanroom environments.',
      'The expansion also integrates an additional array of high-efficiency rooftop photovoltaic panels and closed-loop thermal heat recovery units, reinforcing the group’s pledge toward climate-resilient industrial food production.',
      '“This investment marks a defining chapter in our mission to bring Maltese culinary precision to the global table,” commented Chairman James Barbara.',
    ],
  },
  {
    id: 'sustainability-award-2026',
    featured: false,
    title: 'The Food Factory Named Sustainable Manufacturing Leader at Malta Business Awards',
    category: 'Corporate Sustainability',
    date: 'January 2026',
    readTime: '3 min read',
    excerpt:
      'Judges praised the company’s 2,000-panel rooftop solar farm, heat-recovery ventilation, and gravity-assisted stainless drainage infrastructure.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    fullText: [
      'The Food Factory has been awarded top honors in Sustainable Manufacturing at the national Malta Business Awards.',
      'The prestigious recognition acknowledges the facility’s holistic environmental engineering: utilizing waste heat from massive refrigeration chillers to preheat operational wash water, harnessing solar energy to generate megawatt-hours of clean electricity, and recycling CIP sanitizing fluids.',
      'The facility operates as a living laboratory for European industrial sustainability, proving that high-volume food manufacturing can operate with deep ecological stewardship.',
    ],
  },
  {
    id: 'rd-clean-label-2025',
    featured: false,
    title: 'R&D Division Unveils Breakthrough in Clean-Label Extended Shelf-Life for Chilled Meals',
    category: 'Research & Development',
    date: 'November 2025',
    readTime: '3 min read',
    excerpt:
      'Combining high-barrier recyclable packaging with natural Mediterranean plant antioxidants extends chilled retail shelf-life without chemical preservatives.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    fullText: [
      'Food scientists and culinary technologists at The Food Factory’s Bulebel R&D Laboratory have finalized a 14-month research project into clean-label natural preservation.',
      'By pairing optimized Modified Atmosphere Packaging (MAP) with natural polyphenols derived from Mediterranean rosemary and olive extracts, the team demonstrated a 40% shelf-life extension in chilled ready-to-eat dishes.',
      'This breakthrough unlocks expanded maritime and air freight export windows for fresh meals heading to European retail shelves while keeping ingredients 100% natural and transparent.',
    ],
  },
  {
    id: 'navigare-mediterranean-growth',
    featured: false,
    title: 'Navigare Supplies Expands Marine Provisioning Network Across 10 Mediterranean Ports',
    category: 'Export & Maritime Logistics',
    date: 'September 2025',
    readTime: '3 min read',
    excerpt:
      'From cruise lines to commercial container vessels, our international logistics arm delivers temperature-guaranteed victualing and bonded food supplies.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    fullText: [
      'Navigare Supplies, the international supply and distribution entity of The Food Factory, has broadened its maritime victualing coverage across 10 strategic ports in the Mediterranean basin.',
      'Leveraging Malta’s central geostrategic position along major international shipping lanes, Navigare provides 24/7 provisioning of chef-prepared blast-frozen meals, bakery goods, and bonded stores directly to vessel berths and offshore platforms.',
      'The service guarantees unbroken cold-chain provenance backed by real-time GPS telemetry and digital quality certifications.',
    ],
  },
];
