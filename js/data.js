const portfolioData = {
    currentLang: 'fr',

    profile: {
        fr: {
            name: "Mattys BEAUFORT LOURDAULT",
            role: "Étudiant en Informatique",
            tagline: "Étudiant en Informatique",
            welcomeTitle: "Bonjour – Bienvenue sur mon portfolio",
            welcomeText: "Étudiant en deuxième année de BUT Informatique. Passionné par la création d'expériences numériques.",
            email: "mattys.lourdault@etu.univ-smb.fr",
            github: "https://github.com/lourdama",
            linkedin: "https://www.linkedin.com/in/mattys-lourdault/",
            avatar: "pp/profile.webp"
        },
        en: {
            name: "Mattys BEAUFORT LOURDAULT",
            role: "Computer Science Student",
            tagline: "Computer Science Student",
            welcomeTitle: "Hi – Welcome to my portfolio website",
            welcomeText: "Second-year Computer Science student. Passionate about creating meaningful digital experiences.",
            email: "mattys.lourdault@etu.univ-smb.fr",
            github: "https://github.com/lourdama",
            linkedin: "https://www.linkedin.com/in/mattys-lourdault/",
            avatar: "pp/profile.webp"
        }
    },

    cvLinks: {
        fr: {
            label: "CV Français",
            url: "cv/CV_BEAUFORT_LOURDAULT_Mattys_FR.pdf"
        },
        intFr: {
            label: "CV International (FR)",
            url: "cv/CV_BEAUFORT_LOURDAULT_Mattys_INT_FR.pdf"
        },
        intEn: {
            label: "CV International (EN)",
            url: "cv/CV_BEAUFORT_LOURDAULT_Mattys_INT_EN.pdf"
        }
    },

    labels: {
        fr: {
            downloadCV: "Télécharger CV",
            viewProjects: "Voir Projets",
            getInTouch: "Me Contacter",
            skills: "Compétences",
            projects: "Projets",
            education: "Formation",
            experiences: "Expériences",
            languagesSkills: "Langues & Soft Skills",
            languages: "Langues",
            softSkills: "Soft Skills",
            hobbies: "Loisirs",
            references: "Références",
            contact: "Contact",
            contactDesc: "Envoyez-moi un email pour collaborations, stages ou questions",
            sendMessage: "Envoyer",
            all: "Tous",
            details: "Détails",
            backToProjects: "← Retour aux projets",
            gallery: "Galerie",
            completed: "Terminé",
            inProgress: "En cours",
            name: "Nom",
            emailPlaceholder: "Email",
            messagePlaceholder: "Message"
        },
        en: {
            downloadCV: "Download CV",
            viewProjects: "View Projects",
            getInTouch: "Get in Touch",
            skills: "Skills",
            projects: "Projects",
            education: "Education",
            experiences: "Experiences",
            languagesSkills: "Languages & Soft Skills",
            languages: "Languages",
            softSkills: "Soft Skills",
            hobbies: "Hobbies",
            references: "References",
            contact: "Contact",
            contactDesc: "Email me for collaboration, internships, or project inquiries",
            sendMessage: "Send Message",
            all: "All",
            details: "Details",
            backToProjects: "← Back to Projects",
            gallery: "Gallery",
            completed: "Completed",
            inProgress: "In progress",
            name: "Name",
            emailPlaceholder: "Email",
            messagePlaceholder: "Message"
        }
    },

    skills: [
        { name: "C# / WPF", level: 95 },
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript / Phaser", level: 85 },
        { name: "PHP / Laravel", level: 92 },
        { name: "SQL / Databases", level: 90 },
        { name: "Python", level: 75 }
    ],

    projects: [
        {
            id: "p1",
            title: { fr: "Platformer Médiéval – Jeu WPF", en: "Medieval Platformer – WPF Game" },
            status: { fr: "Terminé", en: "Completed" },
            statusClass: "finished",
            category: ["csharp", "wpf"],
            tags: ["C#", "WPF"],
            thumb: "project/p1/ph/ph_bq1.webp",
            summary: {
                fr: "Projet d'équipe de 2 semaines — Platformer C# WPF avec mécaniques de tir et ennemi semi-intelligent.",
                en: "2-week team project — C# WPF platformer with shooting mechanics and semi-intelligent enemy."
            },
            github: "https://github.com/lourdama/SAE_1.01_1.02",
            date: { fr: "Décembre 2024", en: "December 2024" },
            description: {
                fr: "Un projet d'équipe de 2 semaines (2 étudiants) développé en <strong>WPF en C#</strong>. Le thème était <strong>imposé : \"bille\"</strong>, que nous avons réinterprété comme un univers médiéval fantastique où le personnage principal est un chevalier de bille magique. Le jeu propose des mouvements, des mécaniques de plateforme, des attaques à distance et un ennemi avec un <strong>comportement semi-intelligent</strong>.",
                en: "A 2-week team project (2 students) developed using <strong>WPF in C#</strong>. The theme was <strong>imposed: \"bille\" (marble)</strong>, which we reinterpreted as a medieval fantasy universe where the main character is a magical marble knight. The game features movement, platforming mechanics, ranged attacks, and an enemy with <strong>semi-intelligent behaviour</strong>."
            },
            gallery: [
                { src: "project/p1/img/bq1.webp", caption: { fr: "Gameplay - Mécaniques de tir", en: "Gameplay - Shooting mechanics" } },
                { src: "project/p1/img/bq2.webp", caption: { fr: "Menu des paramètres", en: "Settings Menu" } },
                { src: "project/p1/img/bq3.webp", caption: { fr: "Design des niveaux", en: "Level Design" } },
                { src: "project/p1/img/bq4.webp", caption: { fr: "Ennemis & Collectibles", en: "Enemies & Collectibles" } }
            ],
            detailsSections: [
                {
                    title: { fr: "À propos du projet", en: "About the Project" },
                    text: {
                        fr: "L'objectif était de concevoir une boucle de jeu platformer complète à partir de zéro avec WPF. Cela incluait la physique, les mouvements, les collisions, les animations et le combat à distance. Nous avons également implémenté un <strong>ennemi semi-intelligent</strong> capable de détecter le joueur et de le poursuivre.",
                        en: "The objective was to design a complete platformer game loop from scratch using WPF. This included physics, movement, collisions, animations, and ranged combat. We also implemented a <strong>semi-intelligent enemy</strong> capable of detecting the player, chasing them."
                    }
                },
                {
                    title: { fr: "Fonctionnalités principales", en: "Core Features" },
                    list: {
                        fr: [
                            "Mouvement platformer 2D (saut, chute, collision)",
                            "Combat à distance basé sur les projectiles",
                            "UI & sprites médiévaux fantastiques",
                            "Boucle de jeu implémentée manuellement en C#"
                        ],
                        en: [
                            "2D platformer movement (jump, fall, collision)",
                            "Projectile-based ranged combat",
                            "Medieval fantasy UI & sprites",
                            "Game loop implemented manually in C#"
                        ]
                    }
                },
                {
                    title: { fr: "Travail d'équipe", en: "Teamwork" },
                    list: {
                        fr: [
                            "Groupe de 2 étudiants",
                            "Responsabilités partagées : UI, logique de jeu, comportement des ennemis",
                            "Sessions de tests"
                        ],
                        en: [
                            "Group of 2 students",
                            "Shared responsibilities: UI, gameplay logic, enemy behaviour",
                            "Testing sessions"
                        ]
                    }
                }
            ]
        },
        {
            id: "p2",
            title: { fr: "Projet d'équipe – Application Web Hunimalis", en: "Team project – Hunimalis Web App" },
            status: { fr: "Terminé", en: "Completed" },
            statusClass: "finished",
            category: ["php", "laravel", "web"],
            tags: ["Laravel", "PostgreSQL", "UML"],
            thumb: "project/p2/ph/ph_hw1.webp",
            summary: {
                fr: "Projet d'équipe Agile — Application web Laravel avec modélisation UML et conformité RGPD (Privacy by Design).",
                en: "Agile team project — Laravel web application with UML modeling and GDPR (Privacy by Design) compliance."
            },
            github: "https://github.com/lourdama/SAE_3.01-Hunimalis-public",
            date: { fr: "Octobre 2025 – Janvier 2026", en: "October 2025 – January 2026" },
            description: {
                fr: "Un projet académique collaboratif axé sur la conception et la création d'une application web fictive complète basée sur l'entreprise : <strong>Hunimalis</strong>. Le développement suit une approche Agile (SCRUM) avec des sprints itératifs, une modélisation UML et une conformité RGPD par les principes de Privacy by Design.",
                en: "A collaborative academic project focused on designing and building a complete fictive web application based on the company: <strong>Hunimalis</strong>. The development follows an Agile approach (SCRUM) with iterative sprints, UML modelling, and compliance with GDPR through Privacy by Design principles."
            },
            gallery: [
                { src: "project/p2/img/hw1.webp", caption: { fr: "Tableau de bord Client", en: "Client Dashboard" } },
                { src: "project/p2/img/hw2.webp", caption: { fr: "Tableau de bord Professionnel", en: "Professional Dashboard" } },
                { src: "project/p2/img/hw3.webp", caption: { fr: "Gestion des Produits & Stocks", en: "Products & Stock Management" } },
                { src: "project/p2/img/hw4.webp", caption: { fr: "Carte des Professionnels & Assistant", en: "Professionals Map & Assistant" } }
            ],
            detailsSections: [
                {
                    title: { fr: "À propos du projet", en: "About the Project" },
                    text: {
                        fr: "Cette application est construite dans le cadre d'un cours universitaire de travail d'équipe, suivant un flux de développement professionnel. Elle simule la création d'un outil fictif complet basé sur l'entreprise <strong>Hunimalis</strong> — nécessitant authentification, gestion des rôles, endpoints API sécurisés et protection des données personnelles (RGPD).",
                        en: "This application is built as part of a university teamwork course, following a professional development workflow. It simulates the creation of a complete fictive tool based on the company <strong>Hunimalis</strong> — requiring authentication, role management, secure API endpoints, and personal data protection (GDPR)."
                    }
                },
                {
                    title: { fr: "Flux de travail Agile", en: "Agile Workflow" },
                    list: {
                        fr: [
                            "Organisation d'équipe basée sur SCRUM",
                            "Sprints fixes avec revues et rétrospectives",
                            "Stand-ups quotidiens pour suivre la progression",
                            "Intégration continue et contrôle de version"
                        ],
                        en: [
                            "SCRUM-based team organization",
                            "Fixed sprints with sprint reviews & retrospectives",
                            "Daily stand-ups to monitor progress",
                            "Continuous integration and version control"
                        ]
                    }
                },
                {
                    title: { fr: "Focus technique", en: "Technical Focus" },
                    list: {
                        fr: [
                            "Architecture MVC avec Laravel",
                            "Authentification sécurisée & RBAC",
                            "Diagrammes UML (Cas d'usage, Classes, Séquences)",
                            "Migrations de base de données & Eloquent ORM",
                            "Conformité RGPD — Privacy by Design"
                        ],
                        en: [
                            "MVC architecture with Laravel",
                            "Secure user authentication & RBAC",
                            "UML diagrams (Use cases, Class diagrams, Sequence diagrams)",
                            "Database migrations & Eloquent ORM",
                            "GDPR compliance — Privacy by Design"
                        ]
                    }
                }
            ]
        },
        {
            id: "p3",
            title: { fr: "Pilot Sales Manager — Application WPF", en: "Pilot Sales Manager — WPF App" },
            status: { fr: "Terminé", en: "Completed" },
            statusClass: "finished",
            category: ["csharp", "wpf", "sql"],
            tags: ["C#", "WPF", "SQL", "UML"],
            thumb: "project/p3/ph/ph_pa1.webp",
            summary: {
                fr: "Projet de groupe (3 étudiants) — Application de gestion C# WPF pour commandes, produits et détaillants.",
                en: "Group project (3 students) — C# WPF management app for orders, products and retailers."
            },
            github: "https://github.com/lourdama/SAE_2.01",
            date: { fr: "Mai 2025", en: "May 2025" },
            description: {
                fr: "Une application de gestion complète développée en <strong>C# WPF</strong>, inspirée de la vraie entreprise <strong>Pilot</strong> mais construite pour un scénario fictif. Développée en groupe de <strong>3 étudiants</strong>, l'objectif était de concevoir un flux de vente complet : catalogue produits, création de commandes, authentification commerciale et gestion des stocks.",
                en: "A full-featured management application developed in <strong>C# WPF</strong>, inspired by the real company <strong>Pilot</strong> but built for a fictive scenario. Developed in a group of <strong>3 students</strong>, the goal was to design a complete sales workflow: product catalog, order creation, commercial authentication, and inventory management."
            },
            gallery: [
                { src: "project/p3/img/pa1.webp", caption: { fr: "Écran de connexion", en: "Login screen" } },
                { src: "project/p3/img/pa2.webp", caption: { fr: "Catalogue de recherche produits", en: "Product search catalog" } },
                { src: "project/p3/img/pa3.webp", caption: { fr: "Détails de la commande", en: "Order details" } },
                { src: "project/p3/img/pa4.webp", caption: { fr: "Panier & Quantités", en: "Cart & Quantities" } }
            ],
            detailsSections: [
                {
                    title: { fr: "À propos du projet", en: "About the Project" },
                    text: {
                        fr: "L'application gère le flux de travail principal d'une entreprise type Pilot : <strong>création de commandes pour les détaillants</strong> et <strong>gestion du catalogue produits</strong>. Elle inclut l'authentification, des filtres de recherche avancés, des données de détaillant éditables et des actions CRUD complètes sur les produits.",
                        en: "The application manages the main business workflow of a Pilot-like company: <strong>creating orders for retailers</strong> and <strong>managing the product catalog</strong>. It includes authentication, advanced search filters, editable retailer data, and complete CRUD actions on products."
                    }
                },
                {
                    title: { fr: "Fonctionnalités clés", en: "Key Features" },
                    list: {
                        fr: [
                            "Connexion sécurisée (Commercial / Responsable production)",
                            "Recherche produit par catégorie, type, type de pointe, couleur, mot-clé",
                            "Création de commande (produits, quantités, mode de transport)",
                            "Recherche, modification, création de détaillant",
                            "Historique des commandes avec filtres"
                        ],
                        en: [
                            "Secure login (Commercial / Production Manager)",
                            "Product search by category, type, tip type, color, keyword",
                            "Order creation (products, quantities, transport mode)",
                            "Retailer search, modification, creation",
                            "Order history overview with filters"
                        ]
                    }
                },
                {
                    title: { fr: "Travail technique", en: "Technical Work" },
                    list: {
                        fr: [
                            "UI WPF avec principes de design MVVM",
                            "UML : Cas d'usage, Diagrammes de séquence, Diagramme de classes",
                            "MCD → MPD → Schéma SQL + scripts"
                        ],
                        en: [
                            "WPF UI with MVVM design principles",
                            "UML: Use Cases, Sequence Diagrams, Class Diagram",
                            "MCD → MPD → SQL schema + scripts"
                        ]
                    }
                }
            ]
        },
        {
            id: "p4",
            title: { fr: "Site Portfolio Interactif", en: "Interactive Portfolio Website" },
            status: { fr: "Terminé", en: "Completed" },
            statusClass: "finished",
            category: ["html", "css", "javascript"],
            tags: ["HTML", "CSS", "JS", "PHP"],
            thumb: "project/p4/ph/ph_pf1.webp",
            summary: {
                fr: "Un portfolio entièrement personnalisé et responsive — animations, fond neural, et design néon doux.",
                en: "A fully custom responsive portfolio — animations, neural background, and soft neon design."
            },
            github: "https://github.com/lourdama/RES_3.12",
            date: { fr: "Octobre 2025 – Janvier 2026", en: "October 2025 – January 2026" },
            description: {
                fr: "Un portfolio personnel entièrement fait main conçu pour présenter mes compétences, projets académiques et expériences. Le site inclut des animations personnalisées, un fond animé inspiré des réseaux neuronaux, mode clair/sombre, design responsive, galeries de projets, formulaire de contact fonctionnel et une direction artistique néon douce.",
                en: "A fully handcrafted personal portfolio designed to showcase my skills, academic projects, and experience. The site includes custom animations, a neural-network inspired animated background, light/dark mode, responsive design, project galleries, working contact form, and an overall soft neon art direction."
            },
            gallery: [
                { src: "project/p4/img/pf1.webp", caption: { fr: "Page d'accueil & Section Hero", en: "Homepage & Hero Section" } }
            ],
            detailsSections: [
                {
                    title: { fr: "Description du projet", en: "Project Description" },
                    text: {
                        fr: "Ce portfolio est construit de zéro sans framework, utilisant du HTML, CSS et JavaScript vanilla propres et compréhensibles. L'objectif était de concevoir un site qui semble vivant, élégant et fonctionnel, tout en étant performant et accessible.",
                        en: "This portfolio is built from scratch with no framework, using clean and understandable HTML, CSS and vanilla JavaScript. The goal was to design a site that feels alive, elegant, and functional while being performant and accessible."
                    }
                },
                {
                    title: { fr: "Fonctionnalités clés", en: "Key Features" },
                    list: {
                        fr: [
                            "Fond animé style réseau neuronal (Canvas 2D)",
                            "Mode clair/sombre avec transitions fluides",
                            "Support multilingue complet (FR / EN)",
                            "Titres de sections avec animation de frappe",
                            "Mise en page responsive pour tous les appareils",
                            "Pages de projet avec système de galerie modale",
                            "Formulaire de contact fonctionnel (PHPMailer)"
                        ],
                        en: [
                            "Animated neural-network style background (Canvas 2D)",
                            "Light/Dark mode with smooth transitions",
                            "Full multilingual support (FR / EN)",
                            "Section titles rendered with typing animation",
                            "Responsive layout for all devices",
                            "Project pages with modal gallery system",
                            "Working contact form (PHPMailer)"
                        ]
                    }
                },
                {
                    title: { fr: "Stack technique", en: "Technical Stack" },
                    list: {
                        fr: [
                            "HTML5 sémantique & CSS3 personnalisé",
                            "JavaScript Vanilla (ES6+)",
                            "Canvas 2D pour le fond animé",
                            "PHP & PHPMailer pour le formulaire de contact",
                            "Lucide Icons pour l'iconographie",
                            "Déploiement sur hébergement Infomaniak"
                        ],
                        en: [
                            "Semantic HTML5 & custom CSS3",
                            "Vanilla JavaScript (ES6+)",
                            "Canvas 2D for animated background",
                            "PHP & PHPMailer for contact form",
                            "Lucide Icons for iconography",
                            "Deployed on Infomaniak hosting"
                        ]
                    }
                }
            ]
        },
        {
            id: "p5",
            title: { fr: "D&D Shooter – Jeu Phaser", en: "D&D Shooter – Phaser Game" },
            status: { fr: "Terminé", en: "Completed" },
            statusClass: "finished",
            category: ["javascript", "phaser", "game"],
            tags: ["JavaScript", "Phaser 3", "Game Dev"],
            thumb: "project/p5/ph/ph_dd1.webp",
            summary: {
                fr: "Jeu de tir arcade vue de dessus avec Phaser 3. Survie par vagues et mécaniques de munitions basées sur les dés.",
                en: "Arcade top-down shooter game made with Phaser 3. Features wave survival and dice-based ammo mechanics."
            },
            github: "https://github.com/lourdama/RES_3.05",
            date: { fr: "Octobre 2025", en: "October 2025" },
            description: {
                fr: "Un <strong>shooter vue de dessus</strong> dynamique développé avec <strong>JavaScript et le framework Phaser 3</strong>. Le jeu combine action arcade et éléments RPG : le joueur combat des vagues d'ennemis avec des boules de feu, et les munitions sont déterminées par un <strong>mécanisme de lancer de dé</strong>.",
                en: "A dynamic <strong>top-down shooter</strong> developed using <strong>JavaScript and the Phaser 3 framework</strong>. The game combines arcade action with RPG elements: the player fights waves of enemies using fireballs, and ammunition is determined by a <strong>dice roll mechanic</strong>."
            },
            gallery: [
                { src: "project/p5/img/dd1.webp", caption: { fr: "Gameplay - Combat & Tir", en: "Gameplay - Combat & Shooting" } },
                { src: "project/p5/img/dd2.webp", caption: { fr: "Système de vagues", en: "Wave System" } },
                { src: "project/p5/img/dd3.webp", caption: { fr: "Game Over & Score", en: "Game Over & Score" } }
            ],
            detailsSections: [
                {
                    title: { fr: "À propos du projet", en: "About the Project" },
                    text: {
                        fr: "L'objectif était de créer un jeu 2D navigateur complet avec Phaser. Le joueur contrôle un mage qui doit survivre à des vagues infinies d'ennemis. La boucle principale implique tirer, esquiver et gérer les ressources basées sur le RNG (lancers de dés).",
                        en: "The goal was to create a complete 2D browser game using Phaser. The player controls a mage who must survive endless waves of enemies. The core loop involves shooting, dodging, and managing resources based on RNG (dice rolls)."
                    }
                },
                {
                    title: { fr: "Fonctionnalités de gameplay", en: "Gameplay Features" },
                    list: {
                        fr: [
                            "Mouvement vue de dessus avec Sprint (touche Shift)",
                            "Projectiles boule de feu visés à la souris",
                            "Système de munitions unique : Le dé donne 1-6 tirs",
                            "Gestion des vagues : La santé se restaure toutes les 5 vagues",
                            "Système de suivi du score"
                        ],
                        en: [
                            "Top-down movement with Sprint (Shift key)",
                            "Mouse-aimed fireball projectiles",
                            "Unique ammo system: Dice roll gives 1-6 shots",
                            "Wave management: Health restores every 5 waves",
                            "Score tracking system"
                        ]
                    }
                },
                {
                    title: { fr: "Stack technique", en: "Technical Stack" },
                    list: {
                        fr: [
                            "Framework Phaser 3 (Physique, Sprites, Audio)",
                            "JavaScript Vanilla",
                            "Gestion des assets (Ressources Audio/Visuelles)"
                        ],
                        en: [
                            "Phaser 3 Framework (Physics, Sprites, Audio)",
                            "Vanilla JavaScript",
                            "Asset management (Audio/Visual resources)"
                        ]
                    }
                }
            ]
        },
        {
            id: "p6",
            title: { fr: "PeakPulse – Station de ski intelligente", en: "PeakPulse – Smart Ski Resort" },
            status: { fr: "Terminé", en: "Completed" },
            statusClass: "finished",
            category: ["html", "css", "php", "javascript", "python", "arduino", "sql", "iot"],
            tags: ["Arduino", "Python", "PHP", "SQL", "Web"],
            thumb: "project/p6/ph/ph_peakpulse1.webp",
            summary: {
                fr: "Projet de fin d'études STI2D — Système IoT complet pour la gestion intelligente d'une station de ski (Portique, BDD, Dashboard Web).",
                en: "STI2D final project — Complete IoT system for smart ski resort management (Gate, Database, Web Dashboard)."
            },
            github: "https://github.com/lourdama/PeakPulse",
            date: { fr: "Printemps 2024", en: "Spring 2024" },
            description: {
                fr: "Projet de terminale STI2D (spécialité SIN) développé en binôme. <strong>PeakPulse</strong> est une maquette fonctionnelle de station de ski intelligente exploitant l'IoT pour optimiser l'énergie en fonction de l'affluence. J'étais en charge de la conception matérielle du <strong>portique de remontée mécanique (Arduino, RFID, Servomoteur)</strong>, de l'architecture de la <strong>base de données MySQL</strong>, et du développement de <strong>l'interface web administrateur en PHP</strong>.",
                en: "Senior high school project (STI2D SIN) developed in pairs. <strong>PeakPulse</strong> is a functional smart ski resort mockup using IoT to optimize energy based on crowds. I was responsible for the hardware design of the <strong>ski lift gate (Arduino, RFID, Servomotor)</strong>, the <strong>MySQL database</strong> architecture, and developing the <strong>PHP admin web interface</strong>."
            },
            gallery: [
                { src: "project/p6/img/peakpulse1.webp", caption: { fr: "Dashboard Administrateur Web", en: "Web Admin Dashboard" } },
                { src: "project/p6/img/peakpulse2.webp", caption: { fr: "Maquette du portique Arduino", en: "Arduino gate mockup" } },
                { src: "project/p6/img/peakpulse3.webp", caption: { fr: "Base de données", en: "Database" } },
                { 
                    type: "video", 
                    src: "project/p6/vid/peakpulse1.mp4", 
                    thumb: "project/p6/img/peakpulse4.webp", 
                    caption: { fr: "Démonstration vidéo", en: "Video demonstration" } 
                }
            ],
            detailsSections: [
                {
                    title: { fr: "À propos du projet", en: "About the Project" },
                    text: {
                        fr: "L'objectif principal de PeakPulse était d'étudier l'économie d'énergie permise par la gestion intelligente de la vitesse des remontées mécaniques selon l'affluence. Le système fournit un écosystème autonome limitant l'intervention humaine, tout en informant sur l'état des pistes, la météo et l'affluence via une interface centralisée.",
                        en: "The main goal of PeakPulse was to study the energy savings achieved by intelligently managing ski lift speeds based on crowd density. The system provides an autonomous ecosystem limiting human intervention, while providing information on slope conditions, weather, and crowds via a centralized interface."
                    }
                },
                {
                    title: { fr: "Mes missions principales", en: "My Core Responsibilities" },
                    list: {
                        fr: [
                            "Réalisation et test d'un portique Arduino (Écran LCD I2C, IR, RFID, LED RGB, Servomoteur)",
                            "Développement de scripts Python assurant la communication bidirectionnelle entre l'Arduino et la base de données",
                            "Mise en place de la base de données MySQL pour le stockage des forfaits et des mesures",
                            "Création d'un site web applicatif (PHP) permettant à l'administrateur de lire et modifier les informations de la station"
                        ],
                        en: [
                            "Creation and testing of an Arduino gate (I2C LCD, IR, RFID, RGB LED, Servomotor)",
                            "Development of Python scripts ensuring bidirectional communication between Arduino and the database",
                            "Setup of the MySQL database to store ski passes and sensor measurements",
                            "Creation of a web application (PHP) allowing the admin to read and modify resort information"
                        ]
                    }
                },
                {
                    title: { fr: "Stack Technique", en: "Technical Stack" },
                    list: {
                        fr: [
                            "Matériel : Arduino Uno/Mega, Lecteur RFID, Capteurs IoT divers",
                            "Logiciel embarqué : C++ (IDE Arduino)",
                            "Middleware : Scripts Python (Port série & connecteurs SQL)",
                            "Back-end & Base de données : PHP natif, requêtes SQL, MySQL",
                            "Front-end : HTML, CSS, JavaScript (Dashboard)"
                        ],
                        en: [
                            "Hardware: Arduino Uno/Mega, RFID Reader, various IoT sensors",
                            "Embedded Software: C++ (Arduino IDE)",
                            "Middleware: Python scripts (Serial port & SQL connectors)",
                            "Backend & Database: Native PHP, SQL queries, MySQL",
                            "Frontend: HTML, CSS, JavaScript (Dashboard)"
                        ]
                    }
                }
            ]
        }
    ],

    education: [
        {
            date: { fr: "2024 – Présent", en: "2024 – Present" },
            title: { fr: "BUT Informatique – Université Savoie Mont Blanc / IUT Annecy", en: "BUT Informatique – University of Savoy / IUT Annecy" },
            place: "",
            desc: {
                fr: "Licence Professionnelle en Informatique sur 3 ans – (deuxième année en cours).",
                en: "3-year Technical Bachelor's Degree in Computer Science – (second year in progress)."
            }
        },
        {
            date: { fr: "2021 – 2024", en: "2021 – 2024" },
            title: { fr: "Baccalauréat Français – STI2D (SIN) / Lycée Jean Monnet", en: "French Baccalaureate – STI2D (SIN) / Lycée Jean Monnet" },
            place: "",
            desc: {
                fr: "Spécialisation en Systèmes d'Information et Numérique – Obtenu avec Mention Très Bien.",
                en: "Specialization in Science & Digital Systems – Awarded with High Honors."
            }
        }
    ],

    experience: [
        {
            date: { fr: "Oct. 2025 – Jan. 2026", en: "Oct. 2025 – Jan. 2026" },
            title: { fr: "Projet d'équipe – Université Savoie Mont Blanc / IUT Annecy", en: "Team Project – University of Savoy / IUT Annecy" },
            place: "",
            desc: {
                fr: "Conception & développement d'une application web utilisant la méthodologie Scrum, modélisation UML et framework Laravel. Focus sur les modèles de conception conformes RGPD.",
                en: "Design & development of a web application using Scrum methodology, UML modeling, and Laravel framework. Focused on GDPR-compliant design patterns."
            }
        },
        {
            date: { fr: "Sep. 2025 – Présent", en: "Sep. 2025 – Present" },
            title: { fr: "Assistant d'enseignement – Université Savoie Mont Blanc / IUT Annecy", en: "Teaching Assistant – University of Savoy / IUT Annecy" },
            place: "",
            desc: {
                fr: "Sessions de soutien hebdomadaires pour les étudiants de première année en fondamentaux de programmation et développement web.",
                en: "Weekly support sessions for first-year students in programming fundamentals and web development."
            }
        },
        {
            date: { fr: "Automne 2021", en: "Autumn 2021" },
            title: { fr: "Bénévole – Emmaüs Thonon Chablais", en: "Volunteer – Emmaüs Thonon Chablais" },
            place: "",
            desc: {
                fr: "Logistique et soutien social pendant le Service National Universel (SNU) – opérations de tri et actions de solidarité communautaire.",
                en: "Logistics and social support during National Universal Service (SNU) – sorting operations and community solidarity actions."
            }
        }
    ],

    languages: {
        fr: [
            "Français – Natif",
            "Anglais – B2 (Intermédiaire supérieur)",
            "Espagnol – B1 (Intermédiaire)"
        ],
        en: [
            "French – Native",
            "English – B2 (Upper-Intermediate)",
            "Spanish – B1 (Intermediate)"
        ]
    },

    softSkills: {
        fr: [
            "Gestion du temps & Organisation",
            "Travail d'équipe & Collaboration",
            "Curieux & Désireux d'apprendre",
            "Responsable & Soucieux du détail"
        ],
        en: [
            "Time management & Organization",
            "Teamwork & Collaboration",
            "Curious & Eager to learn",
            "Responsible & Detail-oriented"
        ]
    },

    hobbies: {
        fr: [
            { title: "Ski alpin", tags: "Descente • Freestyle", image: "hobbies/ski1.webp" },
            { title: "Escalade", tags: "Escalade • Indoor", image: "hobbies/climb1.webp" },
            { title: "Lecture", tags: "Fantasy • SF", image: "hobbies/read2.webp" }
        ],
        en: [
            { title: "Alpine skiing", tags: "Downhill • Freestyle", image: "hobbies/ski1.webp" },
            { title: "Climbing", tags: "Rock climbing • Indoor", image: "hobbies/climb1.webp" },
            { title: "Reading", tags: "Fantasy • SF", image: "hobbies/read2.webp" }
        ]
    },

    references: [
        {
            name: "Pascal COLIN",
            role: { fr: "Enseignant UML et SQL", en: "UML and SQL teacher" },
            place: { fr: "Université Savoie Mont Blanc / IUT Annecy", en: "University of Savoy / IUT Annecy" },
            email: "pascal.colin@etu.univ-smb.fr"
        },
        {
            name: "Luc DAMAS",
            role: { fr: "Maître de conférences en programmation", en: "Programming Associate Professor" },
            place: { fr: "Université Savoie Mont Blanc / IUT Annecy", en: "University of Savoy / IUT Annecy" },
            email: "luc.damas@etu.univ-smb.fr"
        }
    ]
};

function getText(obj, lang) {
    if (typeof obj === 'string') return obj;
    if (obj && typeof obj === 'object' && (obj.fr || obj.en)) {
        return obj[lang] || obj.en || obj.fr;
    }
    return obj;
}