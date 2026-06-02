export const SKILLS = [
  {
    cat: "Développement",
    icon: "Code2",
    items: [
      { name: "Javascript", pct: 90 },
      { name: "Python", pct: 80 },
      { name: "PHP", pct: 75 },
      { name: "Django", pct: 78 },
      { name: "React", pct: 85 },
      { name: "React Native", pct: 85 },
      { name: "Node.js", pct: 80 },
    ],
  },
  {
    cat: "Bases de données",
    icon: "Database",
    items: [
      { name: "PostgreSQL", pct: 82 },
      { name: "MySQL", pct: 80 },
      { name: "MongoDB", pct: 80 },
      { name: "SQLite", pct: 78 },
    ],
  },
  {
    cat: "Outils",
    icon: "Wrench",
    items: [
      { name: "Git / GitHub", pct: 88 },
      { name: "WampServer", pct: 80 },
      { name: "Postman", pct: 82 },
    ],
  },
];

export const EDUCATION = [
  {
    id: "edu-1",
    year: "2025",
    degree: "Master II en Informatique",
    specialty: "Développeur web & mobile",
    school: "Ecole Nationale d'Informatique",
  },
  {
    id: "edu-2",
    year: "2023",
    degree: "Licence en Informatique",
    specialty: "Développeur web & mobile",
    school: "Ecole Nationale d'Informatique",
  },
  {
    id: "edu-3",
    year: "2019",
    degree: "Baccalauréat serie C",
    specialty: "",
    school: "Saint Joseph de Cluny",
  },
];

export const LANGUAGES = [
  { name: "Malagasy", level: "Langue maternelle" },
  { name: "Français", level: "Lire, écrire et parler" },
  { name: "Anglais", level: "Lire et écrire" },
];

export const QUALITIES = [
  "Pensée analytique et esprit orienté solution",
  "Capacité d'adaptation dans des environnements professionnels variés",
  "Bon relationnel et sens du service",
  "Capacité d'adaptation ",
];

export const EXPS = [
  {
    company: "Direction Général des Impôts",
    role: "Stagiaire Développeur web et solutions intélligentes",
    period: "juin – décembre 2025",
    icon: "Code",
    desc: "Conception et développement d'un assistant fiscal intélligent pour aider les gens à mieux comprendre les textes fiscal ",
    tags: ["React JS", "Django Rest Framework", "GroqAPI", "RAG", "PostgreSQL"],
  },
  {
    company: "Caisse d'Epargne de Madagascar",
    role: "Stagiaire Développeur ERP",
    period: "Septembre – Décembre 2023",
    icon: "Code",
    desc: "Mise en oeuvre d'un ERP Axelor. Analyse de l'ERP Axelor pour connaitre son structure et implémentation d'un module avec le No Code",
    tags: ["ERP", "Axelor", "No code", "Low Code"],
  },
  {
    company: "DIR-MNDPT Fianarantsoa",
    role: "Stagiaire Développeur web",
    period: "Septembre – Décembre 2022",
    icon: "Code",
    desc: "Conception et développement d'un système de pointage par QR Code",
    tags: ["React JS", "Express JS", "Mysql"],
  },
];

export const PROJECTS = [
  {
    name: "Task Manager",
    icon: "Lock",
    color: "var(--bg3)",
    desc: "Réalisation d'un tableau de gestion de tâches (inspiré de Trello) permettant de créer, modifier et déplacer des cartes par glisser-déposer entre trois colonnes. Implémentation d'une API REST avec Express et PostgreSQL, et d'un frontend React utilisant la bibliothèque dnd-kit. Le projet inclut l'authentification des utilisateurs et la persistance complète des données.",
    techs: ["React Js", "Express Js", "dnd-kit", "PostgreSQL", "JWT"],
    category: "Full Stack",
  },
  {
    name: "G-Stock",
    icon: "Package",
    color: "var(--bg3)",
    desc: "Application de gestion de magasin. Gestion produits, catégories, fournisseurs, clients et magasins. Gestion ventes, achats et mouvements stock. Gestion caisse (apports, dépenses). Tableau de bord avec statistiques.",
    techs: ["Django", "Python", "SQLite"],
    category: "Web App",
  },
  {
    name: "TIKERA",
    icon: "Ticket",
    color: "var(--bg3)",
    desc: "Plateforme de billetterie en ligne. Interface utilisateur dynamique. Système d'envoi d'emails (notifications). Gestion des utilisateurs. Gestion complète des billets.",
    techs: ["React", "Node.js", "PostgreSQL"],
    category: "Full Stack",
  },
  {
    name: "Job Auto Apply",
    icon: "FileText",
    color: "var(--bg3)",
    desc: "Application d'envoi automatisé de candidatures. Gestion des entreprises et des emails. Génération dynamique de lettres de motivation. Tableau de bord avec statistiques.",
    techs: ["React", "Node.js", "Express.js"],
    category: "Automation",
  },
  {
    name: "Système 1-3-5",
    icon: "CheckCircle",
    color: "var(--bg3)",
    desc: "Gestion de stratégie de paris basée sur la roulette. Gestion des mises et logique métier. Interface utilisateur moderne. Projet freelance avec client réel.",
    techs: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    category: "Finance",
  },
];
