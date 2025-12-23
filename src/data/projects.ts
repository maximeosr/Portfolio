export type Project = {
    title: string;
    period?: string;
    subtitle?: string;
    description: string;
    highlights?: string[];
    tech: string[];
    github?: string;
    demo?: string;
  };
  
  export const projects: Project[] = [
    {
      title: "Accessibilité aux soins en zone rurale",
      period: "Sept 2025 – Mar 2026 (en cours)",
      subtitle: "Projet web à impact • ESIEA",
      description:
        "Conception d’un site facilitant la mise en relation entre mairies et médecins afin d’organiser des consultations ponctuelles en zones rurales.",
      highlights: [
        "Conception fonctionnelle",
        "Mise en relation acteurs / planning",
        "Approche orientée besoins terrain",
      ],
      tech: ["Web", "JavaScript", "Conception", "Organisation"],
    },
    {
      title: "Panier de basket intelligent pour le tri des déchets",
      period: "Oct 2024 – dec 2024",
      subtitle: "Projet IA & vision • UQAC",
      description:
        "Conception d’un dispositif de tri ludique basé sur la reconnaissance d’objets. Participation à la conception, à l’intégration hardware et au développement logiciel.",
      highlights: [
        "Reconnaissance automatique d’objets",
        "Intégration Raspberry Pi + caméra",
        "Pipeline de traitement d’images",
      ],
      tech: ["Python", "OpenCV", "Machine Learning", "Raspberry Pi"],
      // github: "https://github.com/ton_user/ton_repo",
      // demo: "https://ton_user.github.io/ton_site",
    },
    {
  title: "Coffre-fort STM32",
  period: "Avril 2025 – Juin 2025",
  subtitle: "Projet scientifique & technique • ESIEA",
  description:
    "Conception d’un coffre-fort électronique basé sur STM32 NUCLEO-L053R8, intégrant un clavier matriciel, un servo-moteur pour la porte, et un affichage LCD.",
  highlights: [
    "Intégration du clavier matriciel et du servo-moteur",
    "Affichage de l’état sur écran LCD",
    "Contrôle du servo via PWM en C ",
    "Simulation et test de séquences",
  ],
  tech: ["STM32", "C", "PWM", "Clavier matriciel", "Servo-moteur", "Afficheur LCD"],
},
    
    {
      title: "Portfolio personnel",
      subtitle: "Vitrine professionnelle",
      description:
        "Création d’un site portfolio pour présenter mon profil, mes compétences et mes projets de façon claire et professionnelle.",
      highlights: ["One-page responsive", "Cartes projets", "Contact rapide"],
      tech: ["React", "TypeScript", "Vite"],
      // github: "https://github.com/ton_user/portfolio",
      // demo: "https://ton_user.github.io/portfolio/",
    },
  ];
  