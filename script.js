// --- Constants and State ---
const skillsData = {
    developer: [
        { id: 'html', name: 'HTML', icon: 'fab fa-html5', mastered: true, year: '2017-Present', level: 1, position: { x: 220, y: 180 }, description: 'Proficient in HTML5 structure and semantics for modern web development. Used extensively in all web projects.', experience: 'Used HTML5 in multiple web development projects when working as a dev, creating responsive and semantically correct web pages.', connections: [] },
        { id: 'css', name: 'CSS', icon: 'fab fa-css3-alt', mastered: true, year: '2017-Present', level: 1, position: { x: 400, y: 180 }, description: 'Advanced CSS3 styling, including flexbox, grid, animations, and responsive design techniques.', experience: 'Applied CSS3 styling for various client projects while working as a Full Stack Developer', connections: ['html'] },
        { id: 'bootstrap', name: 'Bootstrap', icon: 'fab fa-bootstrap', mastered: true, year: '2018-Present', level: 2, position: { x: 280, y: 340 }, description: 'Expertise in using Bootstrap framework for rapid responsive web development with consistent UI components.', experience: 'Implemented Bootstrap in multiple projects to create responsive designs quickly and efficiently.', connections: ['css'] },
        { id: 'js', name: 'JavaScript ES6', icon: 'fab fa-js', mastered: true, year: '2018-Present', level: 2, position: { x: 460, y: 340 }, description: 'Proficient in modern JavaScript (ES6+) programming including promises, async/await, arrow functions and other advanced concepts.', experience: 'Used JavaScript extensively in front-end development to create interactive web applications.', connections: ['html', 'css'] },
        { id: 'python', name: 'Python', icon: 'fab fa-python', mastered: true, year: '2019-Present', level: 3, position: { x: 280, y: 500 }, description: 'Python programming for backend development, data analysis, and automation scripts.', experience: 'Used Python in conjunction with Django for web application development.', connections: ['js'] },
        { id: 'aiml', name: 'AI & ML', icon: 'fas fa-brain', mastered: true, year: '2019-Present', level: 3, position: { x: 460, y: 500 }, description: 'Machine Learning and Deep Neural Networks including CNN, RNN, LSTM, and Transformer models for computer vision and NLP tasks.', experience: 'Applied deep learning techniques for handwriting recognition in dissertation research, developing ensemble models combining CRNN and TrOCR approaches.', connections: ['python'] },
        { id: 'ruby', name: 'Ruby', icon: 'fas fa-gem', mastered: true, year: '2021-Present', level: 4, position: { x: 280, y: 660 }, description: 'Ruby programming language fundamentals and advanced concepts.', experience: 'Learned Ruby programming as part of the Le Wagon Full Stack Web Development course.', connections: ['python'] },
        { id: 'rails', name: 'Ruby on Rails', icon: 'fas fa-train', mastered: true, year: '2021-Present', level: 4, position: { x: 460, y: 660 }, description: 'Building web applications with Ruby on Rails framework following MVC architecture.', experience: 'Applied Ruby on Rails in projects following the Le Wagon bootcamp curriculum.', connections: ['ruby'] },
        { id: 'sql', name: 'SQL', icon: 'fas fa-database', mastered: true, year: '2018-Present', level: 4, position: { x: 370, y: 820 }, description: 'Database design, queries, and management with SQL across different database systems.', experience: 'Used SQL for data management in various projects and integrated databases with web applications.', connections: ['aiml', 'rails'] }
    ],
    designer: [
        { id: 'figma', name: 'Figma', icon: 'fab fa-figma', mastered: true, year: '2020-Present', level: 1, position: { x: 700, y: 240 }, description: 'Design and prototyping with Figma to create UI mockups and interactive prototypes.', experience: 'Used Figma to create wireframes and prototypes for client projects', connections: [] },
        { id: 'uiux', name: 'UI/UX Basics', icon: 'fas fa-pencil-ruler', mastered: true, year: '2022-Present', level: 2, position: { x: 700, y: 400 }, description: 'Understanding of user interface and experience design principles, including usability, accessibility, and user-centered design.', experience: 'Applied UI/UX principles in web development projects, focusing on creating intuitive and accessible interfaces.', connections: ['figma'] },
        { id: 'wordpress', name: 'WordPress', icon: 'fab fa-wordpress', mastered: true, year: '2024-Present', level: 3, position: { x: 820, y: 320 }, description: 'Content management system for creating and managing websites with customizable themes and plugins.', experience: 'Developed and maintained WordPress sites for clients working as a dev', connections: ['uiux'] },
        { id: 'php', name: 'PHP', icon: 'fab fa-php', mastered: true, year: '2023-Present', level: 3, position: { x: 700, y: 560 }, description: 'Server-side scripting language designed for web development and creating dynamic web pages.', experience: 'Developed backend systems and web applications using PHP for various client projects.', connections: ['wordpress'] },
        { id: 'laravel', name: 'Laravel', icon: 'fab fa-laravel', mastered: true, year: '2024-Present', level: 4, position: { x: 700, y: 720 }, description: 'PHP web application framework following the MVC architectural pattern.', experience: 'Developed and maintained platforms using Laravel as a dev.', connections: ['uiux','php'] }
    ],
    engineer: [
        { id: 'autocad', name: 'AutoCAD', icon: 'fas fa-drafting-compass', mastered: true, year: '2017-Present', level: 1, position: { x: 1040, y: 180 }, description: 'Proficient in AutoCAD for creating precise 2D and 3D technical drawings for engineering projects.', experience: 'Used AutoCAD extensively during time as a Pre-registration Civil Engineer at the Ministry of Infrastructure and Ministry of Environment.', connections: [] },
        { id: 'revit', name: 'Revit', icon: 'fas fa-building', mastered: true, year: '2018-Present', level: 1, position: { x: 1220, y: 180 }, description: 'Building Information Modeling (BIM) with Autodesk Revit for architectural and structural design.', experience: 'Applied Revit in engineering projects at the Ministry of Infrastructure for building modeling and documentation.', connections: [] },
        { id: 'prokon', name: 'PROKON', icon: 'fas fa-calculator', mastered: true, year: '2018-Present', level: 2, position: { x: 1130, y: 340 }, description: 'Structural analysis and design software for civil engineering applications.', experience: 'Used PROKON for structural engineering analysis during work at the Ministry of Infrastructure.', connections: ['autocad', 'revit'] },
        { id: 'building', name: 'Building Constr.', icon: 'fas fa-hard-hat', mastered: true, year: '2017-2024', level: 3, position: { x: 1040, y: 500 }, description: 'Extensive knowledge of building construction principles, materials, and techniques.', experience: 'As Quality Engineer at Fairstone - Evaco Group, managed quality assurance, checklists and documentation. Previously taught Building Construction as a Lecturer at the Polytechnic Institute of Guy Forget.', connections: ['prokon'] },
        { id: 'site', name: 'Site Management', icon: 'fas fa-tasks', mastered: true, year: '2017-2024', level: 3, position: { x: 1220, y: 500 }, description: 'Planning, coordinating, and overseeing construction sites to ensure projects are completed on time and within budget.', experience: 'At Fairstone - Evaco Group, enhanced site efficiency, supervised subcontractors and oversaw resource utilization and contractor compliance. Previously taught Site Management at Polytechnic Institute of Guy Forget.', connections: ['prokon'] },
        { id: 'quantity', name: 'Quantity Surv.', icon: 'fas fa-chart-line', mastered: true, year: '2019-2024', level: 4, position: { x: 1130, y: 660 }, description: 'Cost estimation, budgeting, and quantity takeoff for construction projects.', experience: 'Gained experience at Transinvest - Colas Group handling project cost management, budgeting, and cost compliance. Previously taught Quantity Surveying as a lecturer at Polytechnic Institute of Guy Forget, educating students on cost management techniques in construction.', connections: ['building', 'site'] }
    ],
    projectManager: [
        { id: 'planning', name: 'Proj. Planning', icon: 'fas fa-clipboard-list', mastered: true, year: '2017-Present', level: 1, position: { x: 1430, y: 240 }, description: 'Developing comprehensive project plans including scope, schedule, resources, and risk management.', experience: 'Applied project planning techniques during work at the Ministry of Infrastructure and Environment, and continued to develop these skills through MSc in Project Management.', connections: [] },
        { id: 'budget', name: 'Budget Tracking', icon: 'fas fa-coins', mastered: true, year: '2019-Present', level: 2, position: { x: 1430, y: 400 }, description: 'Monitoring and controlling project expenses to ensure adherence to budget constraints.', experience: 'Assisted with budget tracking for civil engineering projects at the Ministry of Infrastructure as a Pre-registration Civil Engineer.', connections: ['planning'] },
        { id: 'team', name: 'Team Coord.', icon: 'fas fa-users', mastered: true, year: '2017-Present', level: 2, position: { x: 1550, y: 320 }, description: 'Leading and coordinating teams to achieve project objectives efficiently.', experience: 'Collaborated with teams of engineers and contractors at both Ministry positions to complete projects on time and within budget.', connections: ['planning'] },
        { id: 'vm', name: 'VM Management', icon: 'fas fa-server', mastered: true, year: '2024-Present', level: 3, position: { x: 1550, y: 480 }, description: 'Managing virtual machines and development environments for web applications.', experience: 'Managed virtual machines and updated environments for web platforms when working as a dev.', connections: ['team'] },
        { id: 'git-workflow', name: 'Git Workflows', icon: 'fab fa-git-alt', mastered: true, year: '2018-Present', level: 3, position: { x: 1430, y: 560 }, description: 'Version control management with Git, including branching strategies and collaborative workflows.', experience: 'Monitored projects through Git, ensuring version control and verified backups for data integrity.', connections: ['vm', 'budget'] },
        { id: 'client', name: 'Client Mgmt.', icon: 'fas fa-user-tie', mastered: true, year: '2024-Present', level: 4, position: { x: 1430, y: 720 }, description: 'Analyzing client requirements, creating specifications and providing technical support.', experience: 'Analyzed client requirements, created project specifications, and provided technical support to resolve issues and enhance functionality.', connections: ['git-workflow'] }
    ],
    scholar: [
        { id: 'bsc-civil', name: 'BSc Civil Eng.', icon: 'fas fa-graduation-cap', mastered: true, year: '2017', level: 1, position: { x: 1770, y: 240 }, description: 'Bachelor of Science in Civil Engineering from University of Engineering and Technology, Lahore.', experience: 'Foundational education in civil engineering principles, structural design, construction materials, and project management.', connections: [] },
        { id: 'msc-pm', name: 'MSc Proj. Mgmt.', icon: 'fas fa-award', mastered: true, year: '2019', level: 2, position: { x: 1770, y: 400 }, description: 'Master of Science in Project Management from University of Central Lancashire.', experience: 'Advanced education in project planning, risk management, leadership, and strategic project implementation.', connections: ['bsc-civil'] },
        { id: 'digital-marketing', name: 'Digital Marketing', icon: 'fas fa-bullhorn', mastered: true, year: '2021', level: 3, position: { x: 1770, y: 560 }, description: 'Certificate Programme in Digital Marketing from DPU - Dr. D.Y. Patil Vidyapeeth Centre for Online Learning.', experience: 'Training in digital marketing strategies, social media management, content creation, and online advertising techniques.', connections: ['msc-pm'] },
        { id: 'le-wagon', name: 'Full Stack Dev.', icon: 'fas fa-laptop-code', mastered: true, year: '2022', level: 3, position: { x: 1890, y: 480 }, description: 'RNCP Niveau 6 - Full Stack Web Development from Le Wagon coding bootcamp.', experience: 'Intensive training in web development technologies including Ruby on Rails, JavaScript, SQL, and more.', connections: ['msc-pm'] },
        { id: 'msc-cs', name: 'MSc Comp. Sci.', icon: 'fas fa-microscope', mastered: false, year: 'In Progress', level: 4, position: { x: 1830, y: 720 }, description: 'Master of Science in Computer Science with Emerging Technologies at University of Technology, Mauritius. Currently in progress.', experience: 'Advanced studies in computer science concepts, emerging technologies, and cutting-edge computing paradigms.', connections: ['digital-marketing', 'le-wagon'] }
    ],
    communicator: [
        { id: 'training', name: 'Construction Ed.', icon: 'fas fa-chalkboard-teacher', mastered: true, year: '2021-2024', level: 1, position: { x: 2070, y: 240 }, description: 'Developing and delivering technical training programs for students on various topics.', experience: 'Developed and delivered training programs for students on Building and Construction topics as a Lecturer at Polytechnic Institute of Guy Forget.', connections: [] },
        { id: 'guidance', name: 'Tech. Support', icon: 'fas fa-hands-helping', mastered: true, year: '2024-Present', level: 2, position: { x: 2070, y: 400 }, description: 'Providing technical guidance and support to clients and colleagues.', experience: 'Provided technical support and troubleshooting for client web applications and platforms as a dev. Assisted with implementation issues and guided clients through system functionalities.', connections: ['training'] },
        { id: 'independent', name: 'Independent Work', icon: 'fas fa-user-ninja', mastered: true, year: '2017-Present', level: 3, position: { x: 2070, y: 560 }, description: 'Self-motivated and able to work independently on complex projects.', experience: 'Demonstrated ability to work independently across all professional roles, as noted in Skills & Attributes section of CV.', connections: ['guidance'] },
        { id: 'pressure', name: 'Pressure Mgmt.', icon: 'fas fa-tachometer-alt', mastered: true, year: '2017-Present', level: 4, position: { x: 2070, y: 720 }, description: 'Ability to thrive under pressure and meet tight deadlines.', experience: 'Consistently demonstrated ability to thrive under pressure across all professional roles, as highlighted in Skills & Attributes section.', connections: ['independent'] }
    ]
};

const categoryNames = {
    developer: 'Developer Skills',
    designer: 'Design & UX',
    engineer: 'Engineering',
    projectManager: 'Management',
    scholar: 'Education',
    communicator: 'Communication'
};

const categoryColors = {
    developer: 'var(--color-developer)',
    designer: 'var(--color-designer)',
    engineer: 'var(--color-engineer)',
    projectManager: 'var(--color-manager)',
    scholar: 'var(--color-scholar)',
    communicator: 'var(--color-communicator)'
};

// Education Badges Data
const educationBadges = [
    { id: "bsc-civil", frontImage: "./Assets/Images/bsc front.png", backImage: "./Assets/Images/bsc back.png", title: "BSc Civil Engineering", year: "2017", institution: "University of Engineering and Technology, Lahore" },
    { id: "msc-pm", frontImage: "./Assets/Images/pm front.png", backImage: "./Assets/Images/pm back.png", title: "MSc Project Management", year: "2019", institution: "University of Central Lancashire" },
    { id: "digital-marketing", frontImage: "./Assets/Images/dm front.png", backImage: "./Assets/Images/dm back.png", title: "Digital Marketing Certificate", year: "2021", institution: "DPU - Dr. D.Y. Patil Vidyapeeth" },
    { id: "full-stack", frontImage: "./Assets/Images/dev front.png", backImage: "./Assets/Images/dev back.png", title: "Full Stack Web Development", year: "2022", institution: "Le Wagon Coding Bootcamp" },
    { id: "msc-cs", frontImage: "./Assets/Images/msc cs front.png", backImage: "./Assets/Images/msc cs back.png", title: "MSc Computer Science", year: "In Progress", institution: "University of Technology, Mauritius", inProgress: true }
];

// --- Experience Carousel Data ---
const experienceData = [
    { // Index 0
        role: "TRAINER / LECTURER", class: "Educator", faction: "Polytechnic Institute", years: "3",
        imgSrc: "./Assets/Images/trainer.gif", imgStaticSrc: "./Assets/Images/trainer.png",
        stats: [ { name: "TEACHING", value: "6/7", bars: 6 }, { name: "KNOWLEDGE", value: "5/7", bars: 5 }, { name: "MENTORING", value: "6/7", bars: 6 } ],
        trait: { name: "Mind Sculptor", description: "Shapes young minds with technical expertise and practical wisdom in construction education." }
    },
    { // Index 1
        role: "FULL STACK DEVELOPER", class: "Developer", faction: "Tech Solutions", years: "2",
        imgSrc: "./Assets/Images/web dev.gif", imgStaticSrc: "./Assets/Images/web-dev.png",
        stats: [ { name: "FRONTEND", value: "6/7", bars: 6 }, { name: "BACKEND", value: "5/7", bars: 5 }, { name: "PROBLEM SOLVING", value: "6/7", bars: 6 } ],
        trait: { name: "Code Weaver", description: "Bridges design and functionality with elegant solutions and efficient architecture." }
    },
    { // Index 2
        role: "PRE-REG ENGINEER", class: "Civil Engineer", faction: "Government Works", years: "4",
        imgSrc: "./Assets/Images/pre reg.gif", imgStaticSrc: "./Assets/Images/pre-reg.png",
        stats: [ { name: "STRUCTURE", value: "6/7", bars: 6 }, { name: "DRAFTING", value: "5/7", bars: 5 }, { name: "COLLAB SKILL", value: "5/7", bars: 5 } ],
        trait: { name: "Foundation Builder", description: "Lays down the base for major public works with precision and grit." }
    },
    { // Index 3 - Combined QE/QS
        role: "QUALITY ENGINEER/QUANTITY SURVEYOR", class: "Project Specialist", faction: "Construction Groups", years: "1",
        imgSrc: "./Assets/Images/qs.gif", imgStaticSrc: "./Assets/Images/qs.png",
        stats: [ { name: "QUALITY ASSURANCE", value: "6/7", bars: 6 }, { name: "COST CONTROL", value: "6/7", bars: 6 }, { name: "CONTRACT MGMT", value: "5/7", bars: 5 } ],
        trait: { name: "Value Guardian", description: "Ensures project integrity and financial viability through meticulous oversight and analysis." }
    }
];

// --- State Variables ---
let activeFilter = 'all';
let selectedSkillNode = null;
let viewTransform = { scale: 1, x: 0, y: 0 };
let isDragging = false;
let dragStartPosition = { x: 0, y: 0 };
let lastMousePosition = { x: 0, y: 0 };
let miniMapScale = 1;
let currentActiveTabId = 'skills';
let clockIntervalId = null;
let currentExperienceIndex = 2;

// --- DOM Element References ---
const loadingScreen = document.getElementById('loadingScreen');
const loadingBar = document.getElementById('loadingBar');
const loadingStatus = document.getElementById('loadingStatus');
const mainContainer = document.getElementById('mainContainer');
const tooltip = document.getElementById('tooltip');
const tabContainer = document.querySelector('.tabs');
const tabs = tabContainer.querySelectorAll('.tab');
const sections = document.querySelectorAll('.main-content > .section');
const categoryFilter = document.getElementById('categoryFilter');
const skillTreeWrapper = document.querySelector('.skill-tree-wrapper');
const skillTreeContainer = document.getElementById('skillTreeContainer');
const skillTree = document.getElementById('skillTree');
const navigationControls = document.querySelector('.navigation-controls');
const miniMap = document.getElementById('miniMap');
const miniMapViewport = document.getElementById('miniMapViewport');
const miniMapContent = document.createElement('div');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const resetViewBtn = document.getElementById('resetViewBtn');
const detailPanel = document.getElementById('detailPanel');
const detailClose = document.getElementById('detailClose');
const detailIconEl = document.getElementById('detailIcon')?.querySelector('i');
const detailIconBgEl = document.getElementById('detailIconBg');
const detailTitleEl = document.getElementById('detailTitle');
const detailBannerBgEl = document.getElementById('detailBannerBg');
const detailOverlayIconEl = document.getElementById('detailOverlayIcon')?.querySelector('i');
const detailStatusEl = document.getElementById('detailStatus');
const detailTimeframeEl = document.getElementById('detailTimeframe');
const detailLevelEl = document.getElementById('detailLevel');
const detailCategoryEl = document.getElementById('detailCategory');
const detailDescriptionEl = document.getElementById('detailDescription');
const progressionPathsEl = document.getElementById('progressionPaths');
const detailExperienceEl = document.getElementById('detailExperience');
const educationBadgesGrid = document.getElementById('educationBadgesGrid');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const experienceSection = document.getElementById('experience');
const expCarousel = experienceSection?.querySelector('.exp-carousel');
const expCharacters = experienceSection?.querySelectorAll('.exp-character');
const expNextBtn = experienceSection?.querySelector('.exp-next');
const expPrevBtn = experienceSection?.querySelector('.exp-prev');
const expRole = experienceSection?.querySelector('.exp-role');
const expInfoRows = experienceSection?.querySelectorAll('.info-row');
const expStatRows = experienceSection?.querySelectorAll('.stat-row');
const expTraitLabel = experienceSection?.querySelector('.trait-label');
const expTraitDesc = experienceSection?.querySelector('.trait-desc');
const expCarouselContainer = experienceSection?.querySelector('.exp-carousel-container');
const skillsOnlyElements = [ categoryFilter, skillTreeWrapper, navigationControls, detailPanel ];

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
     if (loadingScreen && loadingBar && loadingStatus && mainContainer) { simulateLoading(); }
     else { console.error("Loading screen elements not found! Cannot initialize."); document.body.innerHTML = '<p style="color: white; text-align: center; padding-top: 50px;">Error: Could not initialize application. Required loading elements are missing.</p>'; }
});

// --- Loading Simulation ---
function simulateLoading() {
    let progress = 0;
    const stages = [ { limit: 20, text: "Loading core components..." }, { limit: 45, text: "Analyzing skill matrix..." }, { limit: 65, text: "Parsing experience data..." }, { limit: 85, text: "Rendering nodes & assets..." }, { limit: 100, text: "Finalizing interface..." } ];
    let currentStage = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 5 + 2;
        if (progress >= 100) {
            progress = 100; clearInterval(interval);
            if (loadingBar) loadingBar.style.width = `${progress}%`;
            if (loadingStatus) loadingStatus.textContent = "SKILL MATRIX INITIALIZED";
            try {
                setupEventListeners();
                initializeSkillTree();
                createParticles(60);
                initializeMiniMap();
                centerView();
                createEducationBadges();
                initializeExperienceCarousel();
                // --- ADDED: Calls for background effects ---
                addTwinklingStars();
                createSkyrimInspiredElements();
                // createCosmicEnhancement(); // Optional
                // createRefinedCosmicElements(); // Optional
                // --- END ADDED ---
                switchTab('skills');
                 requestAnimationFrame(() => { if (loadingScreen) loadingScreen.classList.add('hidden'); if (mainContainer) mainContainer.classList.add('visible'); });
            } catch (error) {
                console.error("Error during initialization:", error);
                if (loadingStatus) loadingStatus.textContent = "Error during initialization. Check console.";
                 if (loadingScreen) loadingScreen.classList.remove('hidden');
                 if (mainContainer) mainContainer.classList.remove('visible');
            }
        } else {
             if (loadingBar) loadingBar.style.width = `${progress}%`;
             if (loadingStatus && progress >= stages[currentStage].limit && currentStage < stages.length - 1) { currentStage++; loadingStatus.textContent = stages[currentStage].text; }
        }
    }, 100);
}

// --- Particle System ---
function createParticles(count) { const container = skillTreeWrapper; if (!container) return; container.querySelectorAll(':scope > .particle').forEach(p => p.remove()); const fragment = document.createDocumentFragment(); for (let i = 0; i < count; i++) { const particle = document.createElement('div'); particle.className = 'particle'; const size = Math.random() * 2.5 + 0.5; particle.style.width = `${size}px`; particle.style.height = `${size}px`; particle.style.left = `${Math.random() * 100}%`; particle.style.top = `${Math.random() * 100}%`; particle.style.animationDelay = `${Math.random() * 10}s`; particle.style.animationDuration = `${Math.random() * 40 + 30}s`; fragment.appendChild(particle); } container.appendChild(fragment); }

// --- Education Badges Creation ---
function createEducationBadges() { if (!educationBadgesGrid) return; educationBadgesGrid.innerHTML = ''; educationBadges.forEach((badge, index) => { const badgeDiv = document.createElement('div'); badgeDiv.className = 'education-badge'; if (badge.inProgress) badgeDiv.classList.add('in-progress'); badgeDiv.setAttribute('data-id', badge.id); const delay = index * 0.2 + 0.5; badgeDiv.style.setProperty('--delay', `${delay}s`); badgeDiv.innerHTML = ` <div class="badge-inner"> <div class="badge-front"><img src="${badge.frontImage}" alt="${badge.title} - Front" loading="lazy"></div> <div class="badge-back"><img src="${badge.backImage}" alt="${badge.title} - Back" loading="lazy"></div> </div> <div class="badge-year">${badge.year}</div> <div class="badge-institution">${badge.institution}</div> ${badge.inProgress ? `<div class="locked-badge"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>` : ''} `; badgeDiv.style.animation = `unlock 1s ${delay}s forwards, float 6s infinite ease-in-out ${delay + 1}s`; educationBadgesGrid.appendChild(badgeDiv); }); }

// --- Experience Carousel Initialization & Functions ---
function initializeExperienceCarousel() { if (!expCarouselContainer || !expCharacters || !expNextBtn || !expPrevBtn) { console.warn("Essential Experience Carousel elements missing. Skipping initialization."); return; } updateExperienceCarousel(); expNextBtn.addEventListener('click', () => navigateExperience(1)); expPrevBtn.addEventListener('click', () => navigateExperience(-1)); let touchStartX = 0; let touchEndX = 0; expCarouselContainer.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true }); expCarouselContainer.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; handleExperienceGesture(touchStartX, touchEndX); }, { passive: true }); document.addEventListener('keydown', handleExperienceKeyboard); }
function handleExperienceKeyboard(e) { if (currentActiveTabId === 'experience') { if (e.key === 'ArrowRight') navigateExperience(1); else if (e.key === 'ArrowLeft') navigateExperience(-1); } }
function navigateExperience(direction) { const numCharacters = experienceData.length; if (numCharacters === 0) return; currentExperienceIndex = (currentExperienceIndex + direction + numCharacters) % numCharacters; updateExperienceCarousel(); }
function handleExperienceGesture(startX, endX) { if (endX < startX - 50) navigateExperience(1); else if (endX > startX + 50) navigateExperience(-1); }
function updateExperienceCarousel() { if (!expCharacters || expCharacters.length === 0) return; const numCharacters = experienceData.length; expCharacters.forEach((character, htmlIndex) => { const dataIndex = htmlIndex; if (dataIndex >= numCharacters) { character.style.display = 'none'; return; } const charData = experienceData[dataIndex]; const imgElement = character.querySelector('.character-img'); if (!charData || !imgElement) return; let position = dataIndex - currentExperienceIndex; const halfway = Math.ceil(numCharacters / 2); if (position > halfway) position -= numCharacters; if (position < -halfway) position += numCharacters; const displayPosition = Math.max(-2, Math.min(position, 2)); character.setAttribute('data-position', displayPosition); const isActive = (position === 0); character.classList.toggle('active', isActive); if (isActive) { if (imgElement.src !== charData.imgSrc) imgElement.src = charData.imgSrc; } else { if (imgElement.src !== charData.imgStaticSrc) imgElement.src = charData.imgStaticSrc; } character.style.display = (Math.abs(displayPosition) > 2 && !isActive) ? 'none' : ''; }); updateExperienceInfoPanel(); }
function createStatBars(containerEl, filledValue) { if (!containerEl) return; containerEl.innerHTML = ''; const barsContainer = document.createElement('div'); barsContainer.className = 'stat-bars'; const totalBars = 7; for (let i = 0; i < totalBars; i++) { const bar = document.createElement('div'); bar.className = 'stat-bar'; if (i < Math.floor(filledValue)) { bar.classList.add('filled'); } else if (i === Math.floor(filledValue) && filledValue % 1 !== 0) { bar.classList.add('half-filled'); } else { bar.classList.add('empty'); } barsContainer.appendChild(bar); } containerEl.appendChild(barsContainer); }
function updateExperienceInfoPanel() { if (!expRole || !expInfoRows || !expStatRows || !expTraitLabel || !expTraitDesc) { console.warn("One or more Experience Info Panel elements not found."); return; } const data = experienceData[currentExperienceIndex]; if (!data) return; expRole.textContent = data.role; if (expInfoRows[0]) expInfoRows[0].innerHTML = `Class: <span>${data.class}</span>`; if (expInfoRows[1]) expInfoRows[1].innerHTML = `Faction: <span>${data.faction}</span>`; if (expInfoRows[2]) expInfoRows[2].innerHTML = `Years Active: <span>${data.years}</span>`; expStatRows.forEach((row, index) => { const statData = data.stats[index]; if (statData) { const nameEl = row.querySelector('.stat-name'); const barsContainerEl = row.querySelector('.stat-bars-container'); const valueEl = row.querySelector('.stat-value'); if (nameEl) nameEl.textContent = statData.name; if (valueEl) valueEl.textContent = statData.value; if (barsContainerEl) createStatBars(barsContainerEl, statData.bars); row.style.display = ''; } else { row.style.display = 'none'; } }); expTraitLabel.textContent = `Trait Unlocked: '${data.trait.name}'`; expTraitDesc.textContent = data.trait.description; }

// --- Skill Tree Initialization ---
function initializeSkillTree() { if (skillTree) { createSkillNodes(); createConnections(); } else { console.warn("Skill tree container not found during initialization."); } }
function createSkillNodes() { if (!skillTree) return; skillTree.innerHTML = ''; const fragment = document.createDocumentFragment(); for (const category in skillsData) { skillsData[category].forEach(skill => { const node = document.createElement('div'); node.className = `skill-node ${category} ${skill.mastered ? 'mastered' : 'locked'}`; node.setAttribute('data-skill-id', skill.id); node.setAttribute('data-category', category); node.style.left = `${skill.position.x}px`; node.style.top = `${skill.position.y}px`; const iconClass = skill.icon || 'fas fa-question-circle'; node.innerHTML = ` <div class="hex-container"> <div class="hex-layer hex-outer"></div> <div class="hex-layer hex-bg"></div> <div class="hex-layer hex-inner"> <div class="node-icon"><i class="${iconClass}"></i></div> </div> </div> <div class="skill-title">${skill.name}</div> ${!skill.mastered ? '<div class="skill-plus">+</div>' : ''} `; node.addEventListener('click', (e) => { e.stopPropagation(); handleNodeClick(skill, category, node); }); node.addEventListener('mouseenter', (e) => showTooltip(e, `${skill.name} (${skill.year})`)); node.addEventListener('mouseleave', hideTooltip); fragment.appendChild(node); }); } skillTree.appendChild(fragment); }
function createConnections() { if (!skillTree) return; const fragment = document.createDocumentFragment(); for (const category in skillsData) { skillsData[category].forEach(skill => { skill.connections.forEach(connectionId => { const connectedSkillData = findSkillDataById(connectionId); if (connectedSkillData) { const connectedSkill = connectedSkillData.skill; const connection = document.createElement('div'); connection.className = `connection ${skill.mastered && connectedSkill.mastered ? 'active' : ''}`; connection.setAttribute('data-from', skill.id); connection.setAttribute('data-to', connectionId); connection.setAttribute('data-category', category); const computedStyle = window.getComputedStyle(document.documentElement); const nodeWidth = parseFloat(computedStyle.getPropertyValue('--node-width') || '110'); const hexHeight = parseFloat(computedStyle.getPropertyValue('--hex-height') || '98'); const fromX = skill.position.x + nodeWidth / 2; const fromY = skill.position.y + hexHeight / 2; const toX = connectedSkill.position.x + nodeWidth / 2; const toY = connectedSkill.position.y + hexHeight / 2; const length = Math.hypot(toX - fromX, toY - fromY); const angle = Math.atan2(toY - fromY, toX - fromX) * (180 / Math.PI); connection.style.width = `${length}px`; connection.style.left = `${fromX}px`; connection.style.top = `${fromY}px`; connection.style.transform = `rotate(${angle}deg)`; fragment.appendChild(connection); } }); }); } skillTree.appendChild(fragment); }

// --- Clock Function ---
function updateClockHands() { if (!hourHand || !minuteHand || !secondHand || currentActiveTabId !== 'achievements') return; const now = new Date(); const seconds = now.getSeconds(); const minutes = now.getMinutes(); const hours = now.getHours(); const secondsDegrees = (seconds / 60) * 360; const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6; const hoursDegrees = ((hours % 12) / 12) * 360 + (minutes / 60) * 30; requestAnimationFrame(() => { if (hourHand && currentActiveTabId === 'achievements') hourHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`; if (minuteHand && currentActiveTabId === 'achievements') minuteHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`; if (secondHand && currentActiveTabId === 'achievements') secondHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`; }); }

// --- Mini-Map Logic ---
function calculateMiniMapScale() { let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity; const computedStyle = window.getComputedStyle(document.documentElement); const nodeWidth = parseFloat(computedStyle.getPropertyValue('--node-width') || '110'); const nodeHeight = parseFloat(computedStyle.getPropertyValue('--node-height') || '130'); for (const category in skillsData) { skillsData[category].forEach(skill => { minX = Math.min(minX, skill.position.x); minY = Math.min(minY, skill.position.y); maxX = Math.max(maxX, skill.position.x + nodeWidth); maxY = Math.max(maxY, skill.position.y + nodeHeight); }); } const padding = 100; minX -= padding; minY -= padding; maxX += padding; maxY += padding; const contentWidth = maxX - minX; const contentHeight = maxY - minY; if (!miniMap) return; const mapWidth = miniMap.clientWidth; const mapHeight = miniMap.clientHeight; if (contentWidth <= 0 || contentHeight <= 0 || mapWidth <= 0 || mapHeight <= 0) { miniMapScale = 0; return; } miniMapScale = Math.min(mapWidth / contentWidth, mapHeight / contentHeight); if (miniMapContent) { miniMapContent.style.width = `${contentWidth}px`; miniMapContent.style.height = `${contentHeight}px`; miniMapContent.style.transform = `scale(${miniMapScale})`; miniMapContent.style.left = `${(mapWidth - contentWidth * miniMapScale) / 2 - minX * miniMapScale}px`; miniMapContent.style.top = `${(mapHeight - contentHeight * miniMapScale) / 2 - minY * miniMapScale}px`; } }
function initializeMiniMap() { if (!miniMap || !miniMapContent) return; miniMapContent.innerHTML = ''; miniMapContent.className = 'mini-map-content'; miniMapContent.style.position = 'absolute'; miniMapContent.style.transformOrigin = 'top left'; miniMapContent.style.pointerEvents = 'none'; for (const category in skillsData) { skillsData[category].forEach(skill => { const miniNode = document.createElement('div'); miniNode.style.position = 'absolute'; miniNode.style.width = '5px'; miniNode.style.height = '5px'; miniNode.style.borderRadius = '50%'; miniNode.style.backgroundColor = getCategoryColor(category) || '#fff'; miniNode.style.left = `${skill.position.x}px`; miniNode.style.top = `${skill.position.y}px`; miniNode.style.opacity = skill.mastered ? '0.8' : '0.4'; miniMapContent.appendChild(miniNode); }); } miniMap.appendChild(miniMapContent); calculateMiniMapScale(); miniMap.addEventListener('click', handleMiniMapClick); updateMiniMapViewport(); }
function handleMiniMapClick(e) { if (currentActiveTabId !== 'skills' || !miniMapScale || miniMapScale <= 0 || !miniMap || !miniMapContent || !skillTreeContainer) return; e.stopPropagation(); const rect = miniMap.getBoundingClientRect(); const mapClickX = e.clientX - rect.left; const mapClickY = e.clientY - rect.top; const contentRect = miniMapContent.getBoundingClientRect(); const contentOffsetX = contentRect.left - rect.left; const contentOffsetY = contentRect.top - rect.top; const clickX = (mapClickX - contentOffsetX) / miniMapScale; const clickY = (mapClickY - contentOffsetY) / miniMapScale; const containerWidth = skillTreeContainer.clientWidth; const containerHeight = skillTreeContainer.clientHeight; viewTransform.x = containerWidth / 2 - clickX * viewTransform.scale; viewTransform.y = containerHeight / 2 - clickY * viewTransform.scale; applyTransform(true); updateMiniMapViewport(); }
function updateMiniMapViewport() { if (!miniMap || !miniMapViewport || !miniMapContent || !skillTreeContainer) return; if (!miniMapScale || miniMapScale <= 0) { calculateMiniMapScale(); if (!miniMapScale || miniMapScale <= 0) return; } const containerWidth = skillTreeContainer.clientWidth; const containerHeight = skillTreeContainer.clientHeight; if (containerWidth === 0 || containerHeight === 0) return; const visibleWidth = containerWidth / viewTransform.scale; const visibleHeight = containerHeight / viewTransform.scale; const visibleLeft = -viewTransform.x / viewTransform.scale; const visibleTop = -viewTransform.y / viewTransform.scale; const mapViewportWidth = visibleWidth * miniMapScale; const mapViewportHeight = visibleHeight * miniMapScale; const mapViewportLeft = visibleLeft * miniMapScale; const mapViewportTop = visibleTop * miniMapScale; const contentStyle = getComputedStyle(miniMapContent); const contentLeft = parseFloat(contentStyle.left || '0'); const contentTop = parseFloat(contentStyle.top || '0'); miniMapViewport.style.width = `${mapViewportWidth}px`; miniMapViewport.style.height = `${mapViewportHeight}px`; miniMapViewport.style.left = `${contentLeft + mapViewportLeft}px`; miniMapViewport.style.top = `${contentTop + mapViewportTop}px`; }

// --- Event Handling ---
function setupEventListeners() { if (categoryFilter) categoryFilter.addEventListener('click', (e) => { if (currentActiveTabId === 'skills' && e.target.tagName === 'BUTTON') toggleCategoryFilter(e.target.dataset.category, e.target); }); if (detailClose) detailClose.addEventListener('click', closeDetailPanel); document.querySelectorAll('.social-link[data-tooltip]').forEach(link => { link.addEventListener('mouseenter', (e) => showTooltip(e, link.dataset.tooltip)); link.addEventListener('mouseleave', hideTooltip); }); if (tabContainer) tabContainer.addEventListener('click', (e) => { const clickedTab = e.target.closest('.tab'); if (clickedTab && !clickedTab.classList.contains('active')) switchTab(clickedTab.dataset.id); }); document.addEventListener('click', (e) => { if (currentActiveTabId === 'skills' && detailPanel?.classList.contains('visible') && !detailPanel.contains(e.target) && !e.target.closest('.skill-node')) closeDetailPanel(); }); document.addEventListener('mousemove', positionTooltip); zoomInBtn?.addEventListener('click', () => { if (currentActiveTabId === 'skills') zoomSkillTree(1.25); }); zoomOutBtn?.addEventListener('click', () => { if (currentActiveTabId === 'skills') zoomSkillTree(0.8); }); resetViewBtn?.addEventListener('click', () => { if (currentActiveTabId === 'skills') resetView(); }); setupPanZoom(); window.addEventListener('resize', () => { calculateMiniMapScale(); updateMiniMapViewport(); }); }

// --- Tab Switching Function ---
function switchTab(tabId) { if (!tabId || !tabContainer) return; const newActiveTab = tabContainer.querySelector(`.tab[data-id="${tabId}"]`); const newActiveSection = document.getElementById(tabId); if (currentActiveTabId === 'achievements' && tabId !== 'achievements') { if (clockIntervalId) { clearInterval(clockIntervalId); clockIntervalId = null; } } tabContainer.querySelector('.tab.active')?.classList.remove('active'); sections.forEach(sec => sec.classList.remove('active')); skillsOnlyElements.forEach(el => el?.classList.remove('active')); if (newActiveTab) newActiveTab.classList.add('active'); if (newActiveSection) newActiveSection.classList.add('active'); if (tabId === 'skills') { skillsOnlyElements.forEach(el => el?.classList.add('active')); requestAnimationFrame(() => { calculateMiniMapScale(); updateMiniMapViewport(); }); } else { if (detailPanel?.classList.contains('visible')) closeDetailPanel(); } if (tabId === 'achievements' && !clockIntervalId) { updateClockHands(); clockIntervalId = setInterval(updateClockHands, 1000); } if (tabId === 'experience') { updateExperienceCarousel(); } currentActiveTabId = tabId; }

// --- Pan and Zoom Setup ---
function setupPanZoom() { if (!skillTreeContainer || !skillTree) return; skillTreeContainer.addEventListener('mousedown', (e) => { if (currentActiveTabId !== 'skills' || e.button !== 0) return; if (e.target === skillTreeContainer || e.target === skillTree) { isDragging = true; skillTreeContainer.style.cursor = 'grabbing'; dragStartPosition = { x: e.clientX - viewTransform.x, y: e.clientY - viewTransform.y }; lastMousePosition = { x: e.clientX, y: e.clientY }; skillTree.style.transition = 'none'; e.preventDefault(); } }); document.addEventListener('mousemove', (e) => { if (currentActiveTabId !== 'skills' || !isDragging) return; const dx = e.clientX - lastMousePosition.x; const dy = e.clientY - lastMousePosition.y; viewTransform.x += dx; viewTransform.y += dy; lastMousePosition = { x: e.clientX, y: e.clientY }; applyTransform(); updateMiniMapViewport(); }); document.addEventListener('mouseup', (e) => { if (e.button !== 0 || !isDragging) return; isDragging = false; if(skillTreeContainer) skillTreeContainer.style.cursor = 'grab'; }); document.addEventListener('mouseleave', () => { if (isDragging) { isDragging = false; if(skillTreeContainer) skillTreeContainer.style.cursor = 'grab'; } }); skillTreeContainer.addEventListener('wheel', (e) => { if (currentActiveTabId !== 'skills') return; e.preventDefault(); e.stopPropagation(); const zoomFactor = e.deltaY < 0 ? 1.15 : 1 / 1.15; const minScale = 0.2; const maxScale = 2.0; const containerRect = skillTreeContainer.getBoundingClientRect(); const mouseX = e.clientX - containerRect.left; const mouseY = e.clientY - containerRect.top; const pointX = (mouseX - viewTransform.x) / viewTransform.scale; const pointY = (mouseY - viewTransform.y) / viewTransform.scale; viewTransform.scale = Math.max(minScale, Math.min(viewTransform.scale * zoomFactor, maxScale)); viewTransform.x = mouseX - pointX * viewTransform.scale; viewTransform.y = mouseY - pointY * viewTransform.scale; applyTransform(); updateMiniMapViewport(); }, { passive: false }); }

// --- Transform Functions ---
function applyTransform(useTransition = false) { if (!skillTree) return; skillTree.style.transition = useTransition ? 'transform 0.5s ease-out' : 'none'; skillTree.style.transform = `translate(${viewTransform.x}px, ${viewTransform.y}px) scale(${viewTransform.scale})`; if (useTransition) { requestAnimationFrame(() => { setTimeout(() => { if (!isDragging && skillTree) skillTree.style.transition = 'none'; }, 500); }); } }
function zoomSkillTree(factor) { if (!skillTreeContainer) return; const containerRect = skillTreeContainer.getBoundingClientRect(); if (containerRect.width === 0 || containerRect.height === 0) return; const centerX = containerRect.width / 2; const centerY = containerRect.height / 2; const minScale = 0.2; const maxScale = 2.0; const pointX = (centerX - viewTransform.x) / viewTransform.scale; const pointY = (centerY - viewTransform.y) / viewTransform.scale; viewTransform.scale = Math.max(minScale, Math.min(viewTransform.scale * factor, maxScale)); viewTransform.x = centerX - pointX * viewTransform.scale; viewTransform.y = centerY - pointY * viewTransform.scale; applyTransform(true); updateMiniMapViewport(); }
function resetView() { centerView(true); }
function centerView(useTransition = false) { let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity; const computedStyle = window.getComputedStyle(document.documentElement); const nodeWidth = parseFloat(computedStyle.getPropertyValue('--node-width') || '110'); const nodeHeight = parseFloat(computedStyle.getPropertyValue('--node-height') || '130'); let nodeCount = 0; for (const category in skillsData) { skillsData[category].forEach(skill => { minX = Math.min(minX, skill.position.x); minY = Math.min(minY, skill.position.y); maxX = Math.max(maxX, skill.position.x + nodeWidth); maxY = Math.max(maxY, skill.position.y + nodeHeight); nodeCount++; }); } if (nodeCount === 0 || !skillTreeContainer || skillTreeContainer.clientWidth === 0 || skillTreeContainer.clientHeight === 0) { viewTransform.scale = 0.8; viewTransform.x = 50; viewTransform.y = 50; applyTransform(useTransition); updateMiniMapViewport(); return; } const padding = 150; minX -= padding; minY -= padding; maxX += padding; maxY += padding; const contentWidth = maxX - minX; const contentHeight = maxY - minY; if (contentWidth <= 0 || contentHeight <= 0) return; const contentCenterX = (minX + maxX) / 2; const contentCenterY = (minY + maxY) / 2; const containerWidth = skillTreeContainer.clientWidth; const containerHeight = skillTreeContainer.clientHeight; const scaleX = containerWidth / contentWidth; const scaleY = containerHeight / contentHeight; viewTransform.scale = Math.min(scaleX, scaleY, 1); viewTransform.x = containerWidth / 2 - contentCenterX * viewTransform.scale; viewTransform.y = containerHeight / 2 - contentCenterY * viewTransform.scale; applyTransform(useTransition); updateMiniMapViewport(); }

// --- Node Interaction ---
function handleNodeClick(skill, category, nodeElement) { if (currentActiveTabId !== 'skills' || !detailPanel) return; if (selectedSkillNode === nodeElement && detailPanel.classList.contains('visible')) { closeDetailPanel(); return; } if (selectedSkillNode && selectedSkillNode !== nodeElement) selectedSkillNode.classList.remove('highlight'); document.querySelectorAll('.connection.highlight').forEach(c => c.classList.remove('highlight')); nodeElement.classList.add('highlight'); selectedSkillNode = nodeElement; showSkillDetail(skill, category); highlightRelatedConnections(skill); ensureNodeVisible(skill); }
function ensureNodeVisible(skill) { if (currentActiveTabId !== 'skills' || !skillTreeContainer || skillTreeContainer.clientWidth === 0 || skillTreeContainer.clientHeight === 0) return; const computedStyle = window.getComputedStyle(document.documentElement); const nodeWidth = parseFloat(computedStyle.getPropertyValue('--node-width') || '110'); const nodeHeight = parseFloat(computedStyle.getPropertyValue('--node-height') || '130'); const nodeCenterX = skill.position.x + nodeWidth / 2; const nodeCenterY = skill.position.y + nodeHeight / 2; const containerRect = skillTreeContainer.getBoundingClientRect(); const containerWidth = containerRect.width; const containerHeight = containerRect.height; const viewportX = nodeCenterX * viewTransform.scale + viewTransform.x; const viewportY = nodeCenterY * viewTransform.scale + viewTransform.y; const marginX = containerWidth * 0.2; const marginY = containerHeight * 0.2; if (viewportX < marginX || viewportX > containerWidth - marginX || viewportY < marginY || viewportY > containerHeight - marginY) { const targetX = containerWidth / 2 - nodeCenterX * viewTransform.scale; const targetY = containerHeight / 2 - nodeCenterY * viewTransform.scale; viewTransform.x = targetX; viewTransform.y = targetY; applyTransform(true); updateMiniMapViewport(); } }

// --- Filtering Logic ---
function toggleCategoryFilter(category, button) { if (!categoryFilter || !button) return; categoryFilter.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active')); button.classList.add('active'); activeFilter = category; applyFilterVisuals(); if (detailPanel?.classList.contains('visible')) closeDetailPanel(); }
function applyFilterVisuals() { if (!skillTree) return; const allNodes = skillTree.querySelectorAll('.skill-node'); const allConnections = skillTree.querySelectorAll('.connection'); const showAll = activeFilter === 'all'; allNodes.forEach(node => { const nodeCategory = node.dataset.category; node.classList.toggle('filtered-out', !(showAll || nodeCategory === activeFilter)); }); allConnections.forEach(conn => { const fromId = conn.dataset.from; const fromSkillData = findSkillDataById(fromId); conn.classList.toggle('filtered-out', !(showAll || (fromSkillData && fromSkillData.category === activeFilter))); }); }

// --- Detail Panel Logic ---
function showSkillDetail(skill, category) { if (!detailTitleEl || !detailStatusEl || !detailTimeframeEl || !detailLevelEl || !detailCategoryEl || !detailDescriptionEl || !detailExperienceEl || !detailIconEl || !detailOverlayIconEl || !detailIconBgEl || !detailPanel || !progressionPathsEl) return; detailTitleEl.textContent = skill.name; detailStatusEl.textContent = skill.mastered ? 'Mastered' : (skill.year === 'In Progress' ? 'In Progress' : 'Learning'); detailTimeframeEl.textContent = skill.year; detailLevelEl.textContent = `Tier ${skill.level}`; detailCategoryEl.textContent = categoryNames[category] || category; detailDescriptionEl.textContent = skill.description || 'No description available.'; detailExperienceEl.textContent = skill.experience || 'No specific experience detailed.'; const iconClass = skill.icon || 'fas fa-code'; detailIconEl.className = ''; detailIconEl.classList.add(...iconClass.split(' ')); detailOverlayIconEl.className = ''; detailOverlayIconEl.classList.add(...iconClass.split(' ')); const categoryGradientVar = `--gradient-${category.replace('projectManager', 'manager')}`; detailIconBgEl.style.background = `var(${categoryGradientVar}, linear-gradient(145deg, #888, #555))`; detailPanel.setAttribute('data-category', category.replace('projectManager', 'manager')); populateProgressionPaths(skill, category); detailPanel.classList.add('visible'); detailPanel.querySelector('.detail-content')?.scrollTo(0, 0); }
function closeDetailPanel() { if (detailPanel) { detailPanel.classList.remove('visible'); detailPanel.removeAttribute('data-category'); } if (selectedSkillNode) { selectedSkillNode.classList.remove('highlight'); selectedSkillNode = null; } document.querySelectorAll('.connection.highlight').forEach(c => c.classList.remove('highlight')); }
function populateProgressionPaths(skill, category) { if (!progressionPathsEl) return; progressionPathsEl.innerHTML = ''; const prerequisites = skill.connections.map(id => findSkillDataById(id)).filter(Boolean); if (prerequisites.length > 0) { const items = prerequisites.map(item => `<span class="path-link" data-skill-id="${item.skill.id}" title="Go to ${item.skill.name}">${item.skill.name}</span>`).join(', '); progressionPathsEl.innerHTML += `<div class="path-item"><i class="fas fa-arrow-left"></i> Requires: ${items}</div>`; } const unlocks = []; for (const cat in skillsData) { skillsData[cat].forEach(s => { if (s.connections.includes(skill.id)) { unlocks.push({ skill: s, category: cat }); } }); } if (unlocks.length > 0) { const items = unlocks.map(item => `<span class="path-link" data-skill-id="${item.skill.id}" title="Go to ${item.skill.name}">${item.skill.name}</span>`).join(', '); progressionPathsEl.innerHTML += `<div class="path-item"><i class="fas fa-arrow-right"></i> Unlocks: ${items}</div>`; } if (progressionPathsEl.innerHTML === '') { progressionPathsEl.innerHTML = `<div class="path-item"><i class="fas fa-info-circle"></i> No direct connections listed.</div>`; } progressionPathsEl.querySelectorAll('.path-link').forEach(link => { link.addEventListener('click', () => { if (currentActiveTabId !== 'skills') return; const skillId = link.dataset.skillId; const skillData = findSkillDataById(skillId); if (skillData) { const node = document.querySelector(`.skill-node[data-skill-id="${skillId}"]`); if (node) handleNodeClick(skillData.skill, skillData.category, node); } }); link.style.cssText = 'cursor: pointer; color: var(--color-accent); text-decoration: underline; font-weight: 600;'; }); }

// --- Highlighting Logic ---
function highlightRelatedConnections(skill) { document.querySelectorAll(`.connection[data-to="${skill.id}"], .connection[data-from="${skill.id}"]`).forEach(conn => { conn.classList.add('highlight'); }); }

// --- Tooltip Logic ---
// let tooltipTimeout; // Already declared in state variables
function showTooltip(event, text) { if (!tooltip) return; clearTimeout(tooltipTimeout); tooltip.textContent = text; tooltip.style.display = 'block'; positionTooltip(event); tooltipTimeout = setTimeout(() => { if (tooltip) tooltip.classList.add('visible'); }, 10); }
function hideTooltip() { if (!tooltip) return; clearTimeout(tooltipTimeout); tooltip.classList.remove('visible'); }
function positionTooltip(e) { if (!tooltip || (!tooltip.classList.contains('visible') && tooltip.style.display !== 'block')) return; const x = e.clientX; const y = e.clientY; const tooltipRect = tooltip.getBoundingClientRect(); const viewportWidth = window.innerWidth; const viewportHeight = window.innerHeight; let adjustedX = x + 15; let adjustedY = y - tooltipRect.height - 10; if (adjustedX + tooltipRect.width > viewportWidth - 10) adjustedX = x - tooltipRect.width - 15; if (adjustedX < 10) adjustedX = 10; if (adjustedY < 10) adjustedY = y + 20; if (adjustedY + tooltipRect.height > viewportHeight - 10) adjustedY = viewportHeight - tooltipRect.height - 10; tooltip.style.left = `${adjustedX}px`; tooltip.style.top = `${adjustedY}px`; }

// --- Helper Functions ---
function findSkillDataById(id) { for (const category in skillsData) { const skill = skillsData[category].find(s => s.id === id); if (skill) return { skill, category }; } return null; }
function getCategoryColor(categoryKey) { if (!categoryKey) return '#ffffff'; const categoryVarName = categoryColors[categoryKey.replace('projectManager', 'manager')]; if (!categoryVarName) return '#ffffff'; const cssVar = categoryVarName.substring(4, categoryVarName.length - 1); return getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim() || '#ffffff'; }

// --- Cosmic Background Effect Functions ---
function addTwinklingStars() {
    const container = document.querySelector('.main-content');
    if (!container) return;
    const starCount = 15;
    // Ensure not adding duplicates if called multiple times
    container.querySelectorAll(':scope > .cosmic-star').forEach(s => s.remove());
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div'); star.className = 'cosmic-star';
        const size = Math.random() * 2 + 1; star.style.width = `${size}px`; star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`; star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 4}s`; star.style.animationDuration = `${Math.random() * 3 + 3}s`;
        container.appendChild(star);
    }
}
function createSkyrimInspiredElements() {
    const container = document.querySelector('.main-content');
    if (!container) return;
    // Ensure not adding duplicates if called multiple times
    container.querySelectorAll(':scope > .skyrim-nebula, :scope > .diamond-star').forEach(el => el.remove());
    for (let i = 0; i < 4; i++) {
        const nebula = document.createElement('div'); nebula.className = 'skyrim-nebula';
        nebula.style.width = `${Math.random() * 400 + 300}px`; nebula.style.height = `${Math.random() * 400 + 300}px`;
        const positions = [{x: Math.random() * 20 + 5, y: Math.random() * 20 + 5},{x: Math.random() * 20 + 75, y: Math.random() * 20 + 5},{x: Math.random() * 20 + 5, y: Math.random() * 20 + 75},{x: Math.random() * 20 + 75, y: Math.random() * 20 + 75}];
        const pos = positions[i]; nebula.style.left = `${pos.x}%`; nebula.style.top = `${pos.y}%`;
        const colors = ['rgba(64, 127, 191, 0.03)','rgba(76, 41, 146, 0.03)','rgba(0, 176, 155, 0.03)','rgba(95, 44, 130, 0.03)'];
        nebula.style.backgroundColor = colors[i]; nebula.style.animationDelay = `${Math.random() * 10}s`; nebula.style.animationDuration = `${Math.random() * 20 + 40}s`;
        container.appendChild(nebula);
    }
    for (let i = 0; i < 15; i++) {
        const star = document.createElement('div'); star.className = 'diamond-star';
        const size = (i < 4) ? Math.random() * 2.5 + 1.5 : Math.random() * 1.5 + 0.8;
        star.style.width = `${size}px`; star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 90 + 5}%`; star.style.top = `${Math.random() * 90 + 5}%`;
        star.style.animationDelay = `${Math.random() * 5}s`; star.style.animationDuration = `${Math.random() * 3 + 5}s`;
        if (i < 4) star.style.boxShadow = `0 0 8px 3px rgba(255, 255, 255, 0.6)`;
        container.appendChild(star);
    }
}
function createCosmicEnhancement() {
    const container = document.querySelector('.main-content');
    if (!container) return;
    container.querySelectorAll(':scope > .cosmic-nebula').forEach(el => el.remove()); // Clear previous
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div'); star.className = 'cosmic-star';
        const size = Math.random() * 2 + 1; star.style.width = `${size}px`; star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`; star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`; star.style.animationDuration = `${Math.random() * 3 + 3}s`;
        container.appendChild(star);
    }
    for (let i = 0; i < 4; i++) {
        const nebula = document.createElement('div'); nebula.className = 'cosmic-nebula';
        nebula.style.width = `${Math.random() * 300 + 200}px`; nebula.style.height = `${Math.random() * 300 + 200}px`;
        nebula.style.left = `${Math.random() * 80 + 10}%`; nebula.style.top = `${Math.random() * 80 + 10}%`;
        const hue = Math.floor(Math.random() * 60) + 220; nebula.style.backgroundColor = `hsla(${hue}, 70%, 30%, 0.03)`;
        nebula.style.animationDelay = `${Math.random() * 10}s`; nebula.style.animationDuration = `${Math.random() * 20 + 30}s`;
        container.appendChild(nebula);
    }
}
function createRefinedCosmicElements() {
    const container = document.querySelector('.main-content');
    if (!container) return;
    container.querySelectorAll(':scope > .refined-star').forEach(el => el.remove()); // Clear previous
    for (let i = 0; i < 8; i++) {
        const star = document.createElement('div'); star.className = 'refined-star';
        const size = Math.random() * 1.5 + 0.5; star.style.width = `${size}px`; star.style.height = `${size}px`;
        let xPos = Math.random(); let yPos = Math.random();
        if (xPos > 0.3 && xPos < 0.7) xPos = Math.random() > 0.5 ? xPos + 0.2 : xPos - 0.2;
        if (yPos > 0.3 && yPos < 0.7) yPos = Math.random() > 0.5 ? yPos + 0.2 : yPos - 0.2;
        star.style.left = `${xPos * 100}%`; star.style.top = `${yPos * 100}%`;
        star.style.animationDelay = `${Math.random() * 8}s`; star.style.animationDuration = `${Math.random() * 4 + 6}s`;
        container.appendChild(star);
    }
}