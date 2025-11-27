const portfolioData = {
    profile: {
        name: "Mattys Lourdault",
        role: "Computer Science student",
        tagline: "Computer Science student",
        welcomeTitle: "Hi – Welcome to my portfolio website",
        welcomeText: "Second-year Computer Science student. Passionate about creating meaningful digital experiences.",
        cvLink: "cv/CV_LOURDAULT_Mattys.pdf",
        email: "mattys.lourdault@etu.univ-smb.fr",
        github: "https://github.com/lourdama",
        linkedin: "https://www.linkedin.com/in/mattys-lourdault/",
        avatar: "pp/profile.webp"
    },
    skills: [
        { name: "C# / WPF", level: 95 },
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript / Phaser", level: 85 },
        { name: "PHP / Laravel", level: 85 },
        { name: "SQL / Databases", level: 90 },
        { name: "Python", level: 65 }
    ],
    projects: [
        {
            id: "p1",
            title: "Medieval Platformer – WPF Game",
            status: "Completed",
            statusClass: "finished",
            category: ["csharp", "wpf"],
            tags: ["C#", "WPF"],
            thumb: "project/p1/ph/ph_bq1.webp",
            summary: "2-week team project — C# WPF platformer with shooting mechanics and semi-intelligent enemy.",
            github: "https://github.com/lourdama/SAE_1.01_1.02",
            date: "December 2024",
            description: "A 2-week team project (2 students) developed using <strong>WPF in C#</strong>. The theme was <strong>imposed: “bille” (marble)</strong>, which we reinterpreted as a medieval fantasy universe where the main character is a magical marble knight. The game features movement, platforming mechanics, ranged attacks, and an enemy with <strong>semi-intelligent behaviour</strong>.",
            gallery: [
                { src: "project/p1/img/bq1.webp", caption: "Gameplay - Shooting mechanics" },
                { src: "project/p1/img/bq2.webp", caption: "Settings Menu" },
                { src: "project/p1/img/bq3.webp", caption: "Level Design" },
                { src: "project/p1/img/bq4.webp", caption: "Enemies & Collectibles" }
            ],
            detailsSections: [
                {
                    title: "About the Project",
                    text: "The objective was to design a complete platformer game loop from scratch using WPF. This included physics, movement, collisions, animations, and ranged combat. We also implemented a <strong>semi-intelligent enemy</strong> capable of detecting the player, chasing them."
                },
                {
                    title: "Core Features",
                    list: [
                        "2D platformer movement (jump, fall, collision)",
                        "Projectile-based ranged combat",
                        "Medieval fantasy UI & sprites",
                        "Game loop implemented manually in C#"
                    ]
                },
                {
                    title: "Teamwork",
                    list: [
                        "Group of 2 students",
                        "Shared responsibilities: UI, gameplay logic, enemy behaviour",
                        "Testing sessions"
                    ]
                }
            ]
        },
        {
            id: "p2",
            title: "Team project – Hunimalis Web App",
            status: "In progress",
            statusClass: "in-progress",
            category: ["php", "laravel", "web"],
            tags: ["Laravel", "PostgreSQL", "UML"],
            thumb: "project/p2/ph/ph_hw1.webp",
            summary: "Agile team project — Laravel web application with UML modeling and GDPR (Privacy by Design) compliance.",
            github: "https://github.com/lourdama/SAE_3.01-Hunimalis",
            date: "October 2025 – Present",
            description: "A collaborative academic project focused on designing and building a complete fictive web application based on the company: <strong>Hunimalis</strong>. The development follows an Agile approach (SCRUM) with iterative sprints, UML modelling, and compliance with GDPR through Privacy by Design principles.",
            gallery: [
                // { src: "project/p2/img/hw1.webp", caption: "Hunimalis Logo & Branding" }
                { src: "project/p2/img/hw2.webp", caption: "DashBoard" },
                { src: "project/p2/img/hw3.webp", caption: "Benefits management" },
                { src: "project/p2/img/hw4.webp", caption: "Animal profile modification" },
            ],
            detailsSections: [
                {
                    title: "About the Project",
                    text: "This application is built as part of a university teamwork course, following a professional development workflow. It simulates the creation of a complete fictive tool based on the company <strong>Hunimalis</strong> — requiring authentication, role management, secure API endpoints, and personal data protection (GDPR)."
                },
                {
                    title: "Agile Workflow",
                    list: [
                        "SCRUM-based team organization",
                        "Fixed sprints with sprint reviews & retrospectives",
                        "Daily stand-ups to monitor progress",
                        "Continuous integration and version control"
                    ]
                },
                {
                    title: "Technical Focus",
                    list: [
                        "MVC architecture with Laravel",
                        "Secure user authentication & RBAC",
                        "UML diagrams (Use cases, Class diagrams, Sequence diagrams)",
                        "Database migrations & Eloquent ORM",
                        "GDPR compliance — Privacy by Design"
                    ]
                }
            ]
        },
        {
            id: "p3",
            title: "Pilot Sales Manager — WPF App",
            status: "Completed",
            statusClass: "finished",
            category: ["csharp", "wpf", "sql"],
            tags: ["C#", "WPF", "SQL", "UML"],
            thumb: "project/p3/ph/ph_pa1.webp",
            summary: "Group project (3 students) — C# WPF management app for orders, products and retailers.",
            github: "https://github.com/lourdama/SAE_2.01",
            date: "May 2025",
            description: "A full-featured management application developed in <strong>C# WPF</strong>, inspired by the real company <strong>Pilot</strong> but built for a fictive scenario. Developed in a group of <strong>3 students</strong>, the goal was to design a complete sales workflow: product catalog, order creation, commercial authentication, and inventory management.",
            gallery: [
                { src: "project/p3/img/pa1.webp", caption: "Login screen" },
                { src: "project/p3/img/pa2.webp", caption: "Product search catalog" },
                { src: "project/p3/img/pa3.webp", caption: "Order details" },
                { src: "project/p3/img/pa4.webp", caption: "Cart & Quantities" }
            ],
            detailsSections: [
                {
                    title: "About the Project",
                    text: "The application manages the main business workflow of a Pilot-like company: <strong>creating orders for retailers</strong> and <strong>managing the product catalog</strong>. It includes authentication, advanced search filters, editable retailer data, and complete CRUD actions on products."
                },
                {
                    title: "Key Features",
                    list: [
                        "Secure login (Commercial / Production Manager)",
                        "Product search by category, type, tip type, color, keyword",
                        "Order creation (products, quantities, transport mode)",
                        "Retailer search, modification, creation",
                        "Order history overview with filters"
                    ]
                },
                {
                    title: "Technical Work",
                    list: [
                        "WPF UI with MVVM design principles",
                        "UML: Use Cases, Sequence Diagrams, Class Diagram",
                        "MCD → MPD → SQL schema + scripts"
                    ]
                }
            ]
        },
        {
            id: "p4",
            title: "Interactive Portfolio Website",
            status: "In progress",
            statusClass: "in-progress",
            category: ["html", "css", "javascript"],
            tags: ["HTML", "CSS", "JS"],
            thumb: "project/p4/ph/ph_pf1.webp",
            summary: "A fully custom responsive portfolio — animations, neural background, and soft neon design.",
            github: "https://github.com/lourdama/SAE_2.07-Portfolio",
            date: "October 2025 – Present",
            description: "A fully handcrafted personal portfolio designed to showcase my skills, academic projects, and experience. The site includes custom animations, a neural-network inspired animated background, light/dark mode, responsive design, project galleries, and an overall soft neon art direction.",
            gallery: [
                { src: "project/p4/img/pf1.webp", caption: "Homepage & Hero Section" }
            ],
            detailsSections: [
                {
                    title: "Project Description",
                    text: "This portfolio is built from scratch with no framework, using clean and understandable HTML, CSS and vanilla JavaScript. The goal was to design a site that feels alive, elegant, and functional."
                },
                {
                    title: "Key Features",
                    list: [
                        "Animated neural-network style background",
                        "Light/Dark mode with smooth transitions",
                        "Section titles rendered with typing animation",
                        "Responsive layout for all devices",
                        "Project pages with modal gallery system"
                    ]
                }
            ]
        },
        {
            id: "p5",
            title: "D&D Shooter – Phaser Game",
            status: "Completed",
            statusClass: "finished",
            category: ["javascript", "phaser", "game"],
            tags: ["JavaScript", "Phaser 3", "Game Dev"],
            thumb: "project/p5/ph/ph_dd1.webp",
            summary: "Arcade top-down shooter game made with Phaser 3. Features wave survival and dice-based ammo mechanics.",
            github: "https://github.com/lourdama/RES_3.05",
            date: "Octobre 2025",
            description: "A dynamic <strong>top-down shooter</strong> developed using <strong>JavaScript and the Phaser 3 framework</strong>. The game combines arcade action with RPG elements: the player fights waves of enemies using fireballs, and ammunition is determined by a <strong>dice roll mechanic</strong>.",
            gallery: [
                { src: "project/p5/img/dd1.webp", caption: "Gameplay - Combat & Shooting" },
                { src: "project/p5/img/dd2.webp", caption: "Wave System" },
                { src: "project/p5/img/dd3.webp", caption: "Game Over & Score" }
            ],
            detailsSections: [
                {
                    title: "About the Project",
                    text: "The goal was to create a complete 2D browser game using Phaser. The player controls a mage who must survive endless waves of enemies. The core loop involves shooting, dodging, and managing resources based on RNG (dice rolls)."
                },
                {
                    title: "Gameplay Features",
                    list: [
                        "Top-down movement with Sprint (Shift key)",
                        "Mouse-aimed fireball projectiles",
                        "Unique ammo system: Dice roll gives 1-6 shots",
                        "Wave management: Health restores every 5 waves",
                        "Score tracking system"
                    ]
                },
                {
                    title: "Technical Stack",
                    list: [
                        "Phaser 3 Framework (Physics, Sprites, Audio)",
                        "Vanilla JavaScript",
                        "Asset management (Audio/Visual resources)"
                    ]
                }
            ]
        }

    ],
    education: [
        {
            date: "2024 – Present",
            title: "BUT Informatique – University of Savoy / IUT Annecy",
            place: "",
            desc: "3-year Technical Bachelor's Degree in Computer Science – (second year in progress)."
        },
        {
            date: "2021 – 2024",
            title: "French Baccalaureate – STI2D (SIN) / Lycée Jean Monnet",
            place: "",
            desc: "Specialization in Science & Digital Systems – Awarded with High Honors."
        }
    ],
    experience: [
        {
            date: "Oct. 2025 – Present",
            title: "Team Project – University of Savoy / IUT Annecy",
            place: "",
            desc: "Design & development of a web application using Scrum methodology, UML modeling, and Laravel framework. Focused on GDPR-compliant design patterns."
        },
        {
            date: "Sep. 2025 – Present",
            title: "Teaching Assistant – University of Savoy / IUT Annecy",
            place: "",
            desc: "Weekly support sessions for first-year students in programming fundamentals and web development."
        },
        {
            date: "Automne 2021",
            title: "Volunteer – Emmaüs Thonon Chablais",
            place: "",
            desc: "Logistics and social support during National Universal Service (SNU) – sorting operations and community solidarity actions."
        }
    ],
    languages: [
        "French – Native",
        "English – B2 (Upper-Intermediate)",
        "Spanish – B1 (Intermediate)"
    ],
    softSkills: [
        "Time management & Organization",
        "Teamwork & Collaboration",
        "Curious & Eager to learn",
        "Responsible & Detail-oriented"
    ],
    hobbies: [
        { title: "Alpine skiing", tags: "Downhill • Freestyle", image: "hobbies/ski1.webp" },
        { title: "Climbing", tags: "Rock climbing • Indoor", image: "hobbies/climb1.webp" },
        { title: "Reading", tags: "Fantasy • SF", image: "hobbies/read2.webp" }
    ],
    references: [
        {
            name: "Pascal COLIN",
            role: "UML and SQL teacher",
            place: "University of Savoy / IUT Annecy",
            email: "pascal.colin@etu.univ-smb.fr"
        },
        {
            name: "Luc DAMAS",
            role: "Programming Associate Professor",
            place: "University of Savoy / IUT Annecy",
            email: "luc.damas@etu.univ-smb.fr"
        }
    ],
};