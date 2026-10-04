export type CurriculumUnit = {
  title: string;
  topics: string[];
};

export type ClassCurriculum = Record<string, CurriculumUnit[]>;

export const curriculumSource = 'https://cbseacademic.nic.in/curriculum_2027.html';

// Broad CBSE/NCERT-aligned topic map for exploration. Exact course combinations,
// chapter inclusion, and assessment scope must be checked against the official
// curriculum for the student's academic session and school.
export const curriculumByClass: Record<string, ClassCurriculum> = {
  'Class 9': {
    Mathematics: [
      { title: 'Number Systems', topics: ['Real numbers and irrational numbers', 'Real number line and decimal expansions', 'Laws of exponents for real numbers'] },
      { title: 'Polynomials', topics: ['Polynomials in one variable', 'Zeros of a polynomial', 'Remainder theorem', 'Factorisation and algebraic identities'] },
      { title: 'Coordinate Geometry', topics: ['Cartesian plane', 'Coordinates of a point', 'Plotting points in four quadrants'] },
      { title: 'Linear Equations in Two Variables', topics: ['Solutions of a linear equation', 'Graphs of linear equations', 'Equations of the form ax + by + c = 0'] },
      { title: 'Introduction to Euclid’s Geometry', topics: ['Definitions, axioms and postulates', 'Euclid’s five postulates', 'Equivalent versions of Euclid’s fifth postulate'] },
      { title: 'Lines and Angles', topics: ['Intersecting and parallel lines', 'Pairs of angles', 'Angle sum property and transversal results'] },
      { title: 'Triangles', topics: ['Congruence criteria', 'Properties of triangles', 'Inequalities in a triangle'] },
      { title: 'Quadrilaterals', topics: ['Angle sum property', 'Properties of parallelograms', 'Midpoint theorem'] },
      { title: 'Circles', topics: ['Chords and arcs', 'Angles subtended by chords', 'Cyclic quadrilaterals'] },
      { title: 'Heron’s Formula', topics: ['Area using the semi-perimeter', 'Applications to triangles and quadrilaterals'] },
      { title: 'Surface Areas and Volumes', topics: ['Surface area and volume of cuboids and cylinders', 'Cones and spheres', 'Unit conversions and composite solids'] },
      { title: 'Statistics', topics: ['Collection and presentation of data', 'Frequency tables and histograms', 'Mean, median and mode'] },
      { title: 'Probability', topics: ['Experimental probability', 'Outcomes and events', 'Probability from repeated trials'] },
    ],
    Science: [
      { title: 'Matter in Our Surroundings', topics: ['Particle nature of matter', 'States of matter', 'Change of state and latent heat', 'Evaporation and factors affecting it'] },
      { title: 'Is Matter Around Us Pure?', topics: ['Mixtures and pure substances', 'Solutions, suspensions and colloids', 'Separation techniques', 'Physical and chemical changes'] },
      { title: 'Atoms and Molecules', topics: ['Laws of chemical combination', 'Atomic and molecular mass', 'Mole concept', 'Writing chemical formulae'] },
      { title: 'Structure of the Atom', topics: ['Subatomic particles', 'Thomson, Rutherford and Bohr models', 'Electronic configuration', 'Valency, isotopes and isobars'] },
      { title: 'The Fundamental Unit of Life', topics: ['Cell theory and cell structure', 'Cell membrane and transport', 'Cell organelles', 'Plant and animal cells'] },
      { title: 'Tissues', topics: ['Plant tissues', 'Animal tissues', 'Structure and function relationships'] },
      { title: 'Motion', topics: ['Distance and displacement', 'Speed and velocity', 'Acceleration', 'Distance-time and velocity-time graphs', 'Equations of motion'] },
      { title: 'Force and Laws of Motion', topics: ['Balanced and unbalanced forces', 'Newton’s laws', 'Inertia and momentum', 'Conservation of momentum'] },
      { title: 'Gravitation', topics: ['Universal law of gravitation', 'Free fall and acceleration due to gravity', 'Mass and weight', 'Thrust, pressure and buoyancy'] },
      { title: 'Work and Energy', topics: ['Work and its scientific meaning', 'Kinetic and potential energy', 'Power', 'Conservation of energy'] },
      { title: 'Sound', topics: ['Production and propagation of sound', 'Frequency, amplitude and pitch', 'Reflection and echo', 'Ultrasound and applications'] },
      { title: 'Why Do We Fall Ill?', topics: ['Health and disease', 'Infectious and non-infectious diseases', 'Means of spread', 'Principles of prevention and treatment'] },
      { title: 'Natural Resources', topics: ['Air, water and soil', 'Biogeochemical cycles', 'Greenhouse effect and ozone layer', 'Sustainable resource use'] },
      { title: 'Improvement in Food Resources', topics: ['Crop variety improvement', 'Crop production and protection', 'Animal husbandry', 'Sustainable agriculture'] },
    ],
    'Social Science': [
      { title: 'The French Revolution', topics: ['French society before 1789', 'Outbreak and events of the revolution', 'Constitutional monarchy and republic', 'Legacy and political symbols'] },
      { title: 'Socialism in Europe and the Russian Revolution', topics: ['Liberalism and socialism', 'Russian society and 1917 revolutions', 'Civil war and collectivisation', 'Changes under Stalin'] },
      { title: 'Nazism and the Rise of Hitler', topics: ['Weimar Republic', 'Rise of Nazism', 'Nazi ideology and youth', 'Persecution and the Holocaust'] },
      { title: 'India: Size and Location', topics: ['India’s location and extent', 'Neighbours', 'Standard meridian and time'] },
      { title: 'Physical Features of India', topics: ['Himalayas', 'Northern plains', 'Peninsular plateau', 'Indian desert, coastal plains and islands'] },
      { title: 'Drainage', topics: ['Drainage basins', 'Himalayan and Peninsular rivers', 'Lakes and river pollution'] },
      { title: 'Climate', topics: ['Weather and climate', 'Controls of climate', 'Monsoon mechanism', 'Seasons and rainfall distribution'] },
      { title: 'Natural Vegetation and Wildlife', topics: ['Vegetation types', 'Wildlife distribution', 'Conservation and protected areas'] },
      { title: 'Population', topics: ['Population size and distribution', 'Density and growth', 'Age composition and migration'] },
      { title: 'Democracy and Constitutional Design', topics: ['Meaning of democracy', 'South Africa and constitutional design', 'Preamble and key values'] },
      { title: 'Electoral Politics and Working of Institutions', topics: ['Elections and representation', 'Parliament and executive', 'Political institutions and decision-making'] },
      { title: 'People as Resource', topics: ['Human capital', 'Education and health', 'Unemployment and economic activity'] },
      { title: 'Poverty as a Challenge', topics: ['Poverty line and measurement', 'Vulnerable groups', 'Causes and anti-poverty measures'] },
      { title: 'Food Security in India', topics: ['Availability, accessibility and affordability', 'Buffer stock and public distribution', 'Food security challenges'] },
    ],
    English: [
      { title: 'Reading Skills', topics: ['Unseen factual and discursive passages', 'Inference and interpretation', 'Vocabulary in context'] },
      { title: 'Writing Skills', topics: ['Descriptive paragraph', 'Diary entry', 'Story writing', 'Formal and informal communication'] },
      { title: 'Grammar', topics: ['Tenses', 'Modals', 'Subject–verb concord', 'Determiners', 'Reported speech'] },
      { title: 'Beehive: Prose', topics: ['The Fun They Had', 'The Sound of Music', 'The Little Girl', 'A Truly Beautiful Mind', 'The Snake and the Mirror', 'My Childhood', 'Reach for the Top', 'Kathmandu', 'If I Were You'] },
      { title: 'Beehive: Poetry', topics: ['The Road Not Taken', 'Wind', 'Rain on the Roof', 'The Lake Isle of Innisfree', 'A Legend of the Northland', 'No Men Are Foreign', 'On Killing a Tree', 'A Slumber Did My Spirit Seal'] },
      { title: 'Moments: Supplementary Reader', topics: ['The Lost Child', 'The Adventures of Toto', 'Iswaran the Storyteller', 'In the Kingdom of Fools', 'The Happy Prince', 'Weathering the Storm in Ersama', 'The Last Leaf', 'A House Is Not a Home', 'The Beggar'] },
    ],
    Hindi: [
      { title: 'अपठित बोध', topics: ['अपठित गद्यांश', 'मुख्य विचार और निष्कर्ष', 'शब्दार्थ और व्याख्या'] },
      { title: 'व्याकरण', topics: ['शब्द और पद', 'अनुस्वार और अनुनासिक', 'उपसर्ग और प्रत्यय', 'विराम-चिह्न', 'अर्थ के आधार पर वाक्य-भेद'] },
      { title: 'लेखन', topics: ['अनुच्छेद लेखन', 'पत्र लेखन', 'संवाद लेखन', 'चित्र-वर्णन'] },
      { title: 'क्षितिज और कृतिका', topics: ['गद्य-पाठ का आशय और पात्र', 'कविता का भावार्थ और काव्य-सौंदर्य', 'पूरक पाठों का कथ्य', 'संदर्भ सहित व्याख्या'] },
    ],
    'Computer Applications': [
      { title: 'Computer Systems', topics: ['Hardware and software', 'Input, output and storage', 'Operating systems and file management'] },
      { title: 'Internet and Digital Documentation', topics: ['Networks and internet services', 'Digital communication', 'Word processing and presentation'] },
      { title: 'Spreadsheets and Presentations', topics: ['Cells, formulas and charts', 'Data organisation', 'Slide design and communication'] },
      { title: 'Cyber Safety', topics: ['Privacy and personal data', 'Cyber threats and safe practices', 'Digital citizenship and responsible use'] },
    ],
    'Artificial Intelligence': [
      { title: 'AI Reflection and Project Cycle', topics: ['Problem scoping', 'Data acquisition and exploration', 'Modelling and evaluation', 'Ethics and impact'] },
      { title: 'Data Literacy', topics: ['Data types and sources', 'Visualisation', 'Bias and responsible data use'] },
      { title: 'AI Domains', topics: ['Data science', 'Computer vision', 'Natural language processing', 'Applications and limitations'] },
      { title: 'Employability Skills', topics: ['Communication', 'Self-management', 'ICT skills', 'Entrepreneurial and green skills'] },
    ],
  },
  'Class 10': {
    Mathematics: [
      { title: 'Real Numbers', topics: ['Euclid’s division algorithm', 'Fundamental theorem of arithmetic', 'Irrationality proofs', 'Decimal expansions of rational numbers'] },
      { title: 'Polynomials', topics: ['Geometrical meaning of zeros', 'Relationship between zeros and coefficients', 'Division algorithm for polynomials'] },
      { title: 'Pair of Linear Equations in Two Variables', topics: ['Graphical and algebraic solutions', 'Substitution and elimination', 'Consistency of a pair', 'Word problems'] },
      { title: 'Quadratic Equations', topics: ['Factorisation and quadratic formula', 'Discriminant and nature of roots', 'Word problems'] },
      { title: 'Arithmetic Progressions', topics: ['Common difference and nth term', 'Sum of first n terms', 'Applications'] },
      { title: 'Triangles', topics: ['Similarity criteria', 'Basic proportionality theorem', 'Areas of similar triangles', 'Pythagoras theorem'] },
      { title: 'Coordinate Geometry', topics: ['Distance formula', 'Section formula', 'Area of a triangle'] },
      { title: 'Introduction to Trigonometry', topics: ['Trigonometric ratios', 'Standard angle values', 'Identities', 'Heights and distances'] },
      { title: 'Circles', topics: ['Tangents to a circle', 'Number of tangents', 'Tangent properties'] },
      { title: 'Areas Related to Circles', topics: ['Circumference and area', 'Sector and segment', 'Combined plane figures'] },
      { title: 'Surface Areas and Volumes', topics: ['Combinations of solids', 'Frustum of a cone', 'Conversion between solids'] },
      { title: 'Statistics and Probability', topics: ['Mean, median and mode of grouped data', 'Cumulative frequency and ogives', 'Classical probability and complement events'] },
    ],
    Science: [
      { title: 'Chemical Reactions and Equations', topics: ['Writing and balancing equations', 'Combination, decomposition and displacement', 'Oxidation and reduction', 'Corrosion and rancidity'] },
      { title: 'Acids, Bases and Salts', topics: ['Indicators and pH', 'Reactions of acids and bases', 'Neutralisation', 'Common salts and their uses'] },
      { title: 'Metals and Non-metals', topics: ['Physical and chemical properties', 'Reactivity series', 'Ionic compounds', 'Extraction and corrosion prevention'] },
      { title: 'Carbon and Its Compounds', topics: ['Covalent bonding', 'Versatile nature of carbon', 'Hydrocarbons and homologous series', 'Functional groups', 'Ethanol and ethanoic acid', 'Soaps and detergents'] },
      { title: 'Life Processes', topics: ['Nutrition', 'Respiration', 'Transportation in humans and plants', 'Excretion'] },
      { title: 'Control and Coordination', topics: ['Nervous system', 'Reflex action', 'Hormones', 'Plant movements and tropisms'] },
      { title: 'How Do Organisms Reproduce?', topics: ['Asexual reproduction', 'Sexual reproduction in plants and humans', 'Reproductive health'] },
      { title: 'Heredity', topics: ['Inherited traits', 'Mendel’s experiments', 'Sex determination'] },
      { title: 'Light: Reflection and Refraction', topics: ['Spherical mirrors', 'Mirror formula and magnification', 'Refraction and refractive index', 'Lenses and lens formula'] },
      { title: 'The Human Eye and the Colourful World', topics: ['Structure and accommodation', 'Vision defects and correction', 'Dispersion', 'Atmospheric refraction and scattering'] },
      { title: 'Electricity', topics: ['Current, potential difference and resistance', 'Ohm’s law', 'Series and parallel circuits', 'Heating effect and electric power'] },
      { title: 'Magnetic Effects of Electric Current', topics: ['Magnetic field and field lines', 'Field due to current', 'Force on a current-carrying conductor', 'Domestic circuits'] },
      { title: 'Our Environment', topics: ['Ecosystems and food chains', 'Trophic levels', 'Biodegradable and non-biodegradable materials', 'Ozone layer'] },
    ],
    'Social Science': [
      { title: 'History: India and the Contemporary World II', topics: ['The Rise of Nationalism in Europe', 'Nationalism in India', 'The Making of a Global World', 'The Age of Industrialisation', 'Print Culture and the Modern World'] },
      { title: 'Geography: Contemporary India II', topics: ['Resources and Development', 'Forest and Wildlife Resources', 'Water Resources', 'Agriculture', 'Minerals and Energy Resources', 'Manufacturing Industries', 'Lifelines of National Economy'] },
      { title: 'Political Science: Democratic Politics II', topics: ['Power Sharing', 'Federalism', 'Gender, Religion and Caste', 'Political Parties', 'Outcomes of Democracy'] },
      { title: 'Economics: Understanding Economic Development', topics: ['Development', 'Sectors of the Indian Economy', 'Money and Credit', 'Globalisation and the Indian Economy', 'Consumer Rights'] },
      { title: 'Map Skills and Project Work', topics: ['History map locations', 'Geography resource and industry locations', 'Project investigation and source use'] },
    ],
    English: [
      { title: 'Reading Skills', topics: ['Discursive and case-based unseen passages', 'Inference, analysis and vocabulary'] },
      { title: 'Writing and Grammar', topics: ['Formal letters', 'Analytical paragraphs', 'Tenses and subject–verb agreement', 'Modals, reported speech and determiners'] },
      { title: 'First Flight: Prose', topics: ['A Letter to God', 'Nelson Mandela: Long Walk to Freedom', 'Two Stories about Flying', 'From the Diary of Anne Frank', 'Glimpses of India', 'Mijbil the Otter', 'Madam Rides the Bus', 'The Sermon at Benares', 'The Proposal'] },
      { title: 'First Flight: Poetry', topics: ['Dust of Snow', 'Fire and Ice', 'A Tiger in the Zoo', 'How to Tell Wild Animals', 'The Ball Poem', 'Amanda!', 'The Trees', 'Fog', 'The Tale of Custard the Dragon', 'For Anne Gregory'] },
      { title: 'Footprints Without Feet', topics: ['A Triumph of Surgery', 'The Thief’s Story', 'The Midnight Visitor', 'A Question of Trust', 'Footprints Without Feet', 'The Making of a Scientist', 'The Necklace', 'Bholi', 'The Book That Saved the Earth'] },
    ],
    Hindi: [
      { title: 'अपठित बोध', topics: ['अपठित गद्यांश और काव्यांश', 'भाव-बोध और निष्कर्ष'] },
      { title: 'व्याकरण', topics: ['रचना के आधार पर वाक्य-भेद', 'वाच्य', 'पद-परिचय', 'अलंकार', 'समास और मुहावरे'] },
      { title: 'लेखन', topics: ['अनुच्छेद', 'औपचारिक पत्र', 'सूचना और विज्ञापन', 'ई-मेल और लघुकथा'] },
      { title: 'क्षितिज और कृतिका', topics: ['गद्य-पाठ और पात्र-चित्रण', 'कविता का भावार्थ', 'पूरक पाठों का आशय', 'संदर्भ और भाषा-सौंदर्य'] },
    ],
    'Information Technology': [
      { title: 'Employability Skills', topics: ['Communication', 'Self-management', 'ICT', 'Entrepreneurial skills', 'Green skills'] },
      { title: 'Digital Documentation', topics: ['Styles and templates', 'Images and tables', 'Table of contents and collaboration'] },
      { title: 'Electronic Spreadsheet', topics: ['Advanced formulas', 'Scenarios and goal seek', 'Macros and data consolidation'] },
      { title: 'Database Management', topics: ['Relational database concepts', 'Tables, queries, forms and reports'] },
      { title: 'Web Applications and Security', topics: ['Internet services', 'Secure browsing', 'Cyber threats and data protection'] },
    ],
    'Artificial Intelligence': [
      { title: 'AI Project Cycle', topics: ['Problem scoping', 'Data acquisition and exploration', 'Modelling', 'Evaluation and responsible AI'] },
      { title: 'Advanced Python', topics: ['Data structures', 'Functions and modules', 'Working with data'] },
      { title: 'AI Domains and Applications', topics: ['Computer vision', 'Natural language processing', 'Data science', 'Ethical and societal impacts'] },
    ],
  },
  'Class 11': {
    'English Core': [
      { title: 'Reading and Writing Skills', topics: ['Unseen comprehension', 'Note-making and summary', 'Notice and poster', 'Classified advertisement', 'Speech and debate'] },
      { title: 'Hornbill: Prose', topics: ['The Portrait of a Lady', 'We’re Not Afraid to Die…', 'Discovering Tut', 'Landscape of the Soul', 'The Ailing Planet', 'The Browning Version', 'The Adventure', 'Silk Road'] },
      { title: 'Hornbill: Poetry', topics: ['A Photograph', 'The Laburnum Top', 'The Voice of the Rain', 'Childhood', 'Father to Son'] },
      { title: 'Snapshots', topics: ['The Summer of the Beautiful White Horse', 'The Address', 'Ranga’s Marriage', 'Albert Einstein at School', 'Mother’s Day', 'The Ghat of the Only World', 'Birth', 'The Tale of Melon City'] },
    ],
    Physics: [
      { title: 'Physical World and Measurement', topics: ['Scope of physics', 'Units and dimensions', 'Significant figures', 'Errors in measurement'] },
      { title: 'Kinematics', topics: ['Motion in a straight line', 'Position-time and velocity-time graphs', 'Vectors and motion in a plane', 'Projectile and circular motion'] },
      { title: 'Laws of Motion', topics: ['Newton’s laws', 'Free-body diagrams', 'Friction', 'Circular motion'] },
      { title: 'Work, Energy and Power', topics: ['Work by constant and variable forces', 'Kinetic and potential energy', 'Conservation of mechanical energy', 'Power and collisions'] },
      { title: 'System of Particles and Rotational Motion', topics: ['Centre of mass', 'Torque and angular momentum', 'Moment of inertia', 'Rolling motion'] },
      { title: 'Gravitation', topics: ['Universal law', 'Acceleration due to gravity', 'Gravitational potential energy', 'Satellites and escape speed'] },
      { title: 'Properties of Bulk Matter', topics: ['Elasticity', 'Fluid pressure and flow', 'Surface tension', 'Thermal properties and heat transfer'] },
      { title: 'Thermodynamics and Kinetic Theory', topics: ['Thermal equilibrium', 'First law of thermodynamics', 'Heat engines', 'Kinetic model of gases'] },
      { title: 'Oscillations and Waves', topics: ['Simple harmonic motion', 'Pendulum', 'Wave motion', 'Sound waves and superposition'] },
    ],
    Chemistry: [
      { title: 'Some Basic Concepts of Chemistry', topics: ['Laws of chemical combination', 'Mole concept and stoichiometry', 'Concentration terms', 'Significant figures'] },
      { title: 'Structure of Atom', topics: ['Electromagnetic radiation', 'Bohr model', 'Quantum numbers', 'Orbitals and electronic configuration'] },
      { title: 'Classification and Periodicity', topics: ['Modern periodic law', 'Periodic trends', 'Atomic and ionic radii', 'Ionisation enthalpy and electronegativity'] },
      { title: 'Chemical Bonding', topics: ['Ionic and covalent bonds', 'Lewis structures', 'VSEPR theory', 'Hybridisation and molecular orbital theory'] },
      { title: 'States of Matter', topics: ['Gas laws', 'Ideal gas equation', 'Kinetic theory', 'Intermolecular forces and liquids'] },
      { title: 'Thermodynamics', topics: ['System and surroundings', 'First law', 'Enthalpy changes', 'Entropy and spontaneity'] },
      { title: 'Equilibrium', topics: ['Chemical equilibrium', 'Equilibrium constant', 'Le Chatelier’s principle', 'Ionic equilibrium and pH'] },
      { title: 'Redox Reactions', topics: ['Oxidation number', 'Balancing redox equations', 'Applications of redox'] },
      { title: 'Organic Chemistry: Basic Principles', topics: ['Nomenclature', 'Isomerism', 'Electronic effects', 'Reaction intermediates and mechanisms'] },
      { title: 'Hydrocarbons', topics: ['Alkanes', 'Alkenes and alkynes', 'Aromatic hydrocarbons', 'Preparation and reactions'] },
    ],
    Mathematics: [
      { title: 'Sets and Functions', topics: ['Sets and operations', 'Relations and functions', 'Trigonometric functions and identities'] },
      { title: 'Algebra', topics: ['Complex numbers and quadratic equations', 'Linear inequalities', 'Permutations and combinations', 'Binomial theorem', 'Sequences and series'] },
      { title: 'Coordinate Geometry', topics: ['Straight lines', 'Conic sections', 'Circle, parabola, ellipse and hyperbola', 'Introduction to three-dimensional geometry'] },
      { title: 'Calculus', topics: ['Limits and derivatives', 'Derivative as a rate of change', 'Basic differentiation'] },
      { title: 'Statistics and Probability', topics: ['Measures of dispersion', 'Variance and standard deviation', 'Random experiments', 'Probability axioms and events'] },
    ],
    Biology: [
      { title: 'Diversity of Living Organisms', topics: ['The living world', 'Biological classification', 'Plant kingdom', 'Animal kingdom'] },
      { title: 'Structural Organisation', topics: ['Morphology of flowering plants', 'Anatomy of flowering plants', 'Animal tissues and organisation'] },
      { title: 'Cell: Structure and Function', topics: ['Cell theory and cell structure', 'Biomolecules and enzymes', 'Cell cycle and cell division'] },
      { title: 'Plant Physiology', topics: ['Transport in plants', 'Mineral nutrition', 'Photosynthesis', 'Respiration', 'Plant growth and development'] },
      { title: 'Human Physiology', topics: ['Digestion and absorption', 'Breathing and exchange of gases', 'Body fluids and circulation', 'Excretory products', 'Locomotion', 'Neural and chemical coordination'] },
    ],
    History: [
      { title: 'Early Societies and Civilisations', topics: ['Writing and city life in Mesopotamia', 'An empire across three continents', 'Nomadic empires and the Mongols'] },
      { title: 'Early Modern Worlds', topics: ['The three orders in medieval Europe', 'Changing cultural traditions', 'Confrontation of cultures in the Americas'] },
      { title: 'Modernisation and Historical Inquiry', topics: ['The Industrial Revolution', 'Paths to modernisation in China and Japan', 'Working with historical sources and timelines'] },
    ],
    Geography: [
      { title: 'Fundamentals of Physical Geography', topics: ['Origin and evolution of the Earth', 'Interior of the Earth', 'Landforms and geomorphic processes', 'Atmosphere, climate and oceans'] },
      { title: 'India: Physical Environment', topics: ['Structure and physiography', 'Drainage systems', 'Climate and natural vegetation', 'Soils and natural hazards'] },
      { title: 'Practical Geography', topics: ['Map scales and projections', 'Topographical maps', 'Weather instruments and data', 'Fieldwork and mapping'] },
    ],
    'Political Science': [
      { title: 'Political Theory', topics: ['Political theory and freedom', 'Equality, social justice and rights', 'Citizenship, nationalism and secularism'] },
      { title: 'Constitution at Work', topics: ['Constitutional philosophy', 'Election and representation', 'Legislature, executive and judiciary', 'Federalism and local government'] },
    ],
    Economics: [
      { title: 'Statistics for Economics', topics: ['Collection and organisation of data', 'Presentation of data', 'Measures of central tendency', 'Correlation and index numbers'] },
      { title: 'Indian Economic Development', topics: ['Indian economy on the eve of independence', 'Indian economy 1950–1990', 'Liberalisation and reforms', 'Poverty, human capital and rural development', 'Employment, infrastructure and environment'] },
    ],
    Sociology: [
      { title: 'Introducing Sociology', topics: ['Sociology and society', 'Social groups and institutions', 'Culture and socialisation', 'Social change and social order'] },
      { title: 'Understanding Society', topics: ['Social structure and stratification', 'Social processes', 'Environment and society', 'Western and Indian sociological thinkers'] },
    ],
    Psychology: [
      { title: 'Foundations of Psychology', topics: ['Methods of enquiry', 'Human development', 'Sensation, attention and perception', 'Learning and memory'] },
      { title: 'Individual and Social Behaviour', topics: ['Thinking and language', 'Motivation and emotion', 'Personality and intelligence', 'Self and personality in context'] },
    ],
    Accountancy: [
      { title: 'Introduction to Accounting', topics: ['Meaning and objectives', 'Accounting concepts and standards', 'Accounting equation and double entry'] },
      { title: 'Recording and Classifying Transactions', topics: ['Journal and ledger', 'Cash book and subsidiary books', 'Bank reconciliation statement'] },
      { title: 'Trial Balance and Depreciation', topics: ['Trial balance and errors', 'Depreciation methods', 'Provisions and reserves'] },
      { title: 'Financial Statements', topics: ['Trading and profit and loss account', 'Balance sheet', 'Adjustments and closing entries'] },
    ],
    'Business Studies': [
      { title: 'Foundations of Business', topics: ['Nature and purpose of business', 'Forms of business organisation', 'Public, private and global enterprises', 'Business services and emerging modes'] },
      { title: 'Business Finance and Trade', topics: ['Social responsibility and business ethics', 'Sources of business finance', 'Small business', 'Internal and international trade'] },
    ],
    'Computer Science': [
      { title: 'Computer Systems and Networks', topics: ['Computer organisation', 'Memory and storage', 'Software and operating systems', 'Number systems and Boolean logic'] },
      { title: 'Computational Thinking and Programming', topics: ['Problem-solving and algorithms', 'Python basics and data types', 'Conditionals and loops', 'Strings, lists and dictionaries', 'Functions'] },
      { title: 'Society, Law and Ethics', topics: ['Digital footprints', 'Cyber safety', 'Intellectual property', 'Open-source software and privacy'] },
    ],
  },
  'Class 12': {
    'English Core': [
      { title: 'Reading and Writing Skills', topics: ['Unseen comprehension', 'Notice and invitation', 'Formal reply', 'Letter and article writing', 'Report and job application'] },
      { title: 'Flamingo: Prose', topics: ['The Last Lesson', 'Lost Spring', 'Deep Water', 'The Rattrap', 'Indigo', 'Poets and Pancakes', 'The Interview', 'Going Places'] },
      { title: 'Flamingo: Poetry', topics: ['My Mother at Sixty-six', 'Keeping Quiet', 'A Thing of Beauty', 'A Roadside Stand', 'Aunt Jennifer’s Tigers'] },
      { title: 'Vistas', topics: ['The Third Level', 'The Tiger King', 'Journey to the End of the Earth', 'The Enemy', 'On the Face of It', 'Memories of Childhood'] },
    ],
    Physics: [
      { title: 'Electrostatics', topics: ['Electric charges and fields', 'Gauss’s law', 'Electric potential and capacitance', 'Dielectrics and capacitor combinations'] },
      { title: 'Current Electricity', topics: ['Current and drift velocity', 'Ohm’s law and resistivity', 'Cells and internal resistance', 'Kirchhoff’s rules and bridge circuits'] },
      { title: 'Magnetism and Magnetic Effects', topics: ['Biot–Savart law', 'Ampere’s law', 'Force on charges and conductors', 'Moving coil galvanometer', 'Magnetism and matter'] },
      { title: 'Electromagnetic Induction and AC', topics: ['Faraday and Lenz laws', 'Self and mutual inductance', 'Alternating current circuits', 'Transformers and power'] },
      { title: 'Electromagnetic Waves', topics: ['Displacement current', 'Electromagnetic spectrum', 'Properties and applications'] },
      { title: 'Optics', topics: ['Reflection and refraction', 'Optical instruments', 'Wavefronts and interference', 'Diffraction and polarisation'] },
      { title: 'Dual Nature, Atoms and Nuclei', topics: ['Photoelectric effect', 'Matter waves', 'Atomic models and spectra', 'Nuclear properties and radioactivity', 'Nuclear energy'] },
      { title: 'Electronic Devices', topics: ['Semiconductors', 'Diodes and rectifiers', 'Transistors and logic gates'] },
    ],
    Chemistry: [
      { title: 'Solutions', topics: ['Concentration terms', 'Solubility and vapour pressure', 'Raoult’s law', 'Colligative properties'] },
      { title: 'Electrochemistry', topics: ['Electrochemical cells', 'Nernst equation', 'Conductance', 'Electrolysis and batteries'] },
      { title: 'Chemical Kinetics', topics: ['Rate of reaction', 'Rate law and order', 'Integrated rate equations', 'Arrhenius equation'] },
      { title: 'd- and f-Block Elements', topics: ['Transition element trends', 'Important compounds', 'Lanthanoids and actinoids'] },
      { title: 'Coordination Compounds', topics: ['Nomenclature and bonding', 'Isomerism', 'Crystal field theory', 'Applications'] },
      { title: 'Organic Compounds with Functional Groups', topics: ['Haloalkanes and haloarenes', 'Alcohols, phenols and ethers', 'Aldehydes, ketones and carboxylic acids', 'Amines'] },
      { title: 'Biomolecules', topics: ['Carbohydrates', 'Proteins and enzymes', 'Vitamins', 'Nucleic acids'] },
    ],
    Mathematics: [
      { title: 'Relations and Functions', topics: ['Types of relations', 'One-one and onto functions', 'Composition and inverse of functions'] },
      { title: 'Algebra', topics: ['Matrices and operations', 'Determinants', 'Inverse and applications of matrices'] },
      { title: 'Calculus', topics: ['Continuity and differentiability', 'Applications of derivatives', 'Integrals and applications', 'Differential equations'] },
      { title: 'Vectors and Three-Dimensional Geometry', topics: ['Vectors and products', 'Lines and planes in space', 'Angles and distances'] },
      { title: 'Linear Programming', topics: ['Constraints and feasible region', 'Graphical solution', 'Optimisation'] },
      { title: 'Probability', topics: ['Conditional probability', 'Multiplication theorem', 'Bayes’ theorem', 'Random variables and distributions'] },
    ],
    Biology: [
      { title: 'Reproduction', topics: ['Sexual reproduction in flowering plants', 'Human reproduction', 'Reproductive health'] },
      { title: 'Genetics and Evolution', topics: ['Mendelian inheritance', 'Molecular basis of inheritance', 'Evolution and evidence'] },
      { title: 'Biology and Human Welfare', topics: ['Human health and disease', 'Immunity and pathogens', 'Microbes in human welfare'] },
      { title: 'Biotechnology', topics: ['Principles and processes', 'Recombinant DNA technology', 'Applications in health and agriculture'] },
      { title: 'Ecology and Environment', topics: ['Organisms and populations', 'Ecosystem and energy flow', 'Biodiversity and conservation', 'Environmental issues'] },
    ],
    Economics: [
      { title: 'Introductory Macroeconomics', topics: ['National income accounting', 'Money and banking', 'Determination of income and employment', 'Government budget', 'Balance of payments'] },
      { title: 'Indian Economic Development', topics: ['Indian economy 1950–1990', 'Economic reforms since 1991', 'Human capital and rural development', 'Employment and sustainable development', 'Comparative development experiences'] },
    ],
    Accountancy: [
      { title: 'Accounting for Partnership Firms', topics: ['Partnership fundamentals', 'Admission, retirement and death of a partner', 'Dissolution of partnership'] },
      { title: 'Company Accounts', topics: ['Issue and forfeiture of shares', 'Issue of debentures'] },
      { title: 'Analysis of Financial Statements', topics: ['Financial statement analysis', 'Accounting ratios', 'Cash flow statement'] },
    ],
    'Business Studies': [
      { title: 'Principles and Functions of Management', topics: ['Nature and principles of management', 'Business environment', 'Planning and organising', 'Staffing and directing', 'Controlling'] },
      { title: 'Business Finance and Marketing', topics: ['Financial management', 'Financial markets', 'Marketing management', 'Consumer protection'] },
    ],
    'Computer Science': [
      { title: 'Computational Thinking and Programming II', topics: ['Python revision and functions', 'Data structures', 'File handling', 'Exception handling'] },
      { title: 'Computer Networks', topics: ['Network types and topologies', 'Protocols and layers', 'Internet and web services'] },
      { title: 'Database Management', topics: ['Relational databases', 'SQL queries and joins', 'Python database connectivity'] },
      { title: 'Society, Law and Ethics', topics: ['Cybercrime and safety', 'Intellectual property', 'Digital footprints, privacy and accessibility'] },
    ],
    'Informatics Practices': [
      { title: 'Data Handling using Pandas', topics: ['Series and DataFrames', 'Data import and export', 'Indexing and filtering', 'Data visualisation'] },
      { title: 'Database Query using SQL', topics: ['SQL functions', 'Grouping and ordering', 'Joins and data manipulation'] },
      { title: 'Computer Networks and Societal Impacts', topics: ['Network devices and protocols', 'Internet services', 'Cyber safety, ethics and digital footprints'] },
    ],
    History: [
      { title: 'Themes in Indian History I', topics: ['Harappan civilisation', 'Political and economic history: Mauryan to Gupta periods', 'Kinship, caste and class', 'Thinkers, beliefs and buildings'] },
      { title: 'Themes in Indian History II', topics: ['Through the eyes of travellers', 'Bhakti-Sufi traditions', 'An imperial capital: Vijayanagara', 'Peasants, zamindars and the state'] },
      { title: 'Themes in Indian History III', topics: ['Mughal court chronicles', 'Colonialism and the countryside', 'Rebels and the Raj', 'Mahatma Gandhi and the nationalist movement', 'Framing the Constitution'] },
      { title: 'Historical Enquiry and Map Work', topics: ['Source analysis', 'Comparing historical interpretations', 'Locating key sites and events'] },
    ],
    Geography: [
      { title: 'Fundamentals of Human Geography', topics: ['Human geography and population', 'Human development', 'Primary, secondary and tertiary activities', 'Transport, communication and trade'] },
      { title: 'India: People and Economy', topics: ['Population and migration', 'Human settlements', 'Land and water resources', 'Mineral and energy resources', 'Planning and sustainable development', 'Transport and international trade'] },
      { title: 'Practical Geography', topics: ['Data processing and representation', 'Maps and spatial analysis', 'Field study and project work'] },
    ],
    'Political Science': [
      { title: 'Contemporary World Politics', topics: ['The end of bipolarity', 'Contemporary centres of power', 'South Asia and international organisations', 'Security and environment', 'Globalisation'] },
      { title: 'Politics in India Since Independence', topics: ['Nation-building and planned development', 'India’s external relations', 'Challenges to and restoration of the Congress system', 'Regional aspirations', 'Recent developments in Indian politics'] },
    ],
    Sociology: [
      { title: 'Indian Society', topics: ['Demographic structure', 'Social institutions and their change', 'Patterns of social inequality and exclusion', 'Challenges of cultural diversity'] },
      { title: 'Social Change and Development in India', topics: ['Structural and cultural change', 'The Constitution and social change', 'Rural and industrial change', 'Globalisation, mass media and social movements'] },
    ],
    Psychology: [
      { title: 'Variations in Psychological Attributes', topics: ['Individual differences and assessment', 'Intelligence and aptitude', 'Personality and assessment'] },
      { title: 'Psychological Processes and Applications', topics: ['Stress and coping', 'Psychological disorders and treatment', 'Attitudes and social cognition', 'Group processes and applications'] },
    ],
    'Physical Education': [
      { title: 'Human Body and Movement', topics: ['Physical fitness and wellness', 'Anatomy and physiology in sport', 'Kinesiology and biomechanics'] },
      { title: 'Training and Performance', topics: ['Sports psychology', 'Training methods and planning', 'Nutrition and performance', 'Testing and measurement'] },
      { title: 'Yoga, Inclusion and Sport', topics: ['Yoga and lifestyle', 'Physical education for diverse learners', 'Rules, skills and event organisation'] },
    ],
    'Applied Mathematics': [
      { title: 'Numbers, Algebra and Calculus', topics: ['Numbers and quantification', 'Matrices and determinants', 'Differentiation and its applications', 'Integration and differential equations'] },
      { title: 'Financial Mathematics and Data', topics: ['Financial mathematics', 'Probability distributions', 'Inferential statistics', 'Time-based and index data'] },
      { title: 'Business and Coordinate Applications', topics: ['Linear programming', 'Transportation and assignment models', 'Index numbers and time series'] },
    ],
    'Legal Studies': [
      { title: 'Legal Institutions and Processes', topics: ['Meaning and sources of law', 'Legal institutions and dispute resolution', 'Structure and role of the judiciary'] },
      { title: 'Rights, Responsibilities and Contemporary Law', topics: ['Human rights and constitutional rights', 'Family and civil law', 'Criminal justice', 'International law and legal professions'] },
    ],
  },
};

export const classes = Object.keys(curriculumByClass);

export function subjectsForClass(className: string) {
  return Object.keys(curriculumByClass[className] ?? curriculumByClass['Class 10']);
}

export function unitsFor(className: string, subject: string) {
  const subjectMap = curriculumByClass[className] ?? curriculumByClass['Class 10'];
  return subjectMap[subject] ?? subjectMap[Object.keys(subjectMap)[0]] ?? [];
}