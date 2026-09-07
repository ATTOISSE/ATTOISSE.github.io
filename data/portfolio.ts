// Données centrales du portfolio.
// Modifiez ce fichier pour mettre à jour le contenu du site sans toucher aux composants.

export const profile = {
  name: "ATTOISSE Mohamed",
  roleLine: ["Fondateur de Ksilog Academy", "Data Engineer", "Software Engineer & Formateur"],
  location: "Dakar, Sénégal",
  email: "attoissemohamed@gmail.com",
  phone: "+221 76 666 04 68",
  socials: {
    linkedin: "https://www.linkedin.com/in/attoisse-mohamed-24b6a026a",
    github: "https://github.com/ATTOISSE",
    ksilog: "https://ksilog.com",
  },
  bio: "Fondateur de Ksilog Academy, Data Engineer par passion et développeur de formation, je transforme la donnée en solutions intelligentes. Fort d'un solide ancrage en ingénierie logicielle et de plus de 3 ans d'expérience dans l'enseignement de la programmation à l'ISI, j'allie rigueur technique et pédagogie. Aujourd'hui, je conçois et développe mes propres projets data : pipelines efficaces, feature engineering, systèmes d'optimisation... J'expérimente, je bâtis et j'innove — toujours animé par l'ambition de repousser les limites de la Data et de l'IA.",
};

export const highlights = [
  { value: "3+", label: "ans d'enseignement à l'ISI" },
  { value: "1", label: "académie fondée — Ksilog" },
  { value: "M2", label: "Data Science & IA" },
  { value: "3", label: "domaines maîtrisés : Data, Software, Pédagogie" },
];

export type Experience = {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  current: boolean;
  points: string[];
};

export const experiences: Experience[] = [
  {
    id: "ksilog",
    role: "Fondateur & Lead Formateur",
    org: "Ksilog Academy",
    period: "2026 — Présent",
    location: "Dakar, Sénégal",
    current: true,
    points: [
      "Création de programmes de formation en Data & Software Engineering.",
      "Animation de sessions d'apprentissage et accompagnement de la communauté.",
      "Gestion et développement de la plateforme éducative.",
    ],
  },
  {
    id: "isi",
    role: "Instructeur en Programmation / Algorithmique",
    org: "Institut Supérieur d'Informatique (ISI), Dakar",
    period: " Avril 2023 — Présent",
    location: "Dakar, Sénégal",
    current: true,
    points: [
      "Enseignement des algorithmes et de la programmation",
      "Encadrement des projets étudiants et conception de supports pédagogiques.",
    ],
  },
  {
    id: "cerbs",
    role: "Vice-Secrétaire Général",
    org: "CERBS",
    period: "Janvier 2022 — Décembre 2022",
    location: "Dakar, Sénégal",
    current: false,
    points: [
      "Gestion administrative, organisation d'événements et leadership associatif.",
    ],
  },
];

export type Education = {
  id: string;
  degree: string;
  school: string;
  period: string;
  detail?: string;
};

export const education: Education[] = [
  {
    id: "m2",
    degree: "Master 2 — Data Science & IA",
    school: "Institut Supérieur d'Informatique (ISI), Dakar",
    period: "2024 — 2025",
    detail: "Machine Learning, Python, Big Data, Pipelines ETL.",
  },
  {
    id: "pedago",
    degree: "Attestation en Ingénierie Pédagogique",
    school: "Ministère de la Formation Professionnelle, de l'Apprentissage et de l'Insertion",
    period: "2024",
  },
  {
    id: "licence",
    degree: "Licence — Génie Logiciel",
    school: "Institut Supérieur d'Informatique (ISI), Dakar",
    period: "2023",
    detail: "Java, Architecture logicielle, DevOps, POO.",
  },
  {
    id: "anglais",
    degree: "Certification Anglais A1/B1",
    school: "Baptist Center, Dakar",
    period: "2022",
  },
];

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "data-ai",
    title: "Data & AI",
    description: "De la donnée brute au modèle en production.",
    skills: ["Python", "Machine Learning", "Pipelines ETL/ELT", "Feature Engineering", "Big Data"],
  },
  {
    id: "software",
    title: "Software Engineering",
    description: "Des fondations solides pour des systèmes fiables.",
    skills: ["ML", "Python", "JavaScript","Langage C", "Git / GitHub", "DevOps basics"],
  },
  {
    id: "pedagogy",
    title: "Pédagogie & Leadership",
    description: "Transmettre pour faire grandir une communauté technique.",
    skills: ["Enseignement", "Gestion de projets", "Leadership communautaire", "Création de contenu tech"],
  },
];

export type ProjectCategory = "Data Engineering" | "Software" | "Ksilog Academy";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
  href?: string;
};

// Remplacez ces entrées par vos projets réels (liens GitHub / démo) quand ils seront prêts.
export const projects: Project[] = [
  {
    id: "etl-pipeline",
    title: "Pipeline ETL modulaire",
    category: "Data Engineering",
    description:
      "Chaîne d'extraction, transformation et chargement conçue pour être rejouable et observable, avec gestion des erreurs et des schémas évolutifs.",
    stack: ["Python", "ETL", "Airflow", "PostgreSQL","dbt"],
  },
  {
    id: "feature-store",
    title: "Feature Engineering Toolkit",
    category: "Data Engineering",
    description:
      "Bibliothèque interne de transformations réutilisables pour préparer des jeux de données destinés à des modèles de Machine Learning.",
    stack: ["Python", "Pandas", "Scikit-learn"],
  },
  {
    id: "architecture-poo",
    title: "Socle applicatif Java modulaire",
    category: "Software",
    description:
      "Architecture logicielle orientée objet, pensée pour la maintenabilité, avec séparation claire des responsabilités et tests unitaires.",
    stack: ["Java", "POO", "Architecture logicielle"],
  },
  {
    id: "devops-workflow",
    title: "Chaîne d'intégration continue",
    category: "Software",
    description:
      "Mise en place d'un workflow Git structuré et d'automatisations DevOps pour fiabiliser les livraisons de projets étudiants.",
    stack: ["Git", "GitHub Actions", "DevOps"],
  },
  {
    id: "ksilog-platform",
    title: "Plateforme éducative Ksilog",
    category: "Ksilog Academy",
    description:
      "Conception et développement de la plateforme d'apprentissage de Ksilog Academy : parcours, contenus et suivi des apprenants.",
    stack: ["Next.js", "TypeScript", "Pédagogie"],
  },
  {
    id: "ksilog-curriculum",
    title: "Software Engineering",
    category: "Ksilog Academy",
    description:
      "Formation complète en ingénierie logicielle  maîtrisez les fondamentaux de la programmation et la conception d'applications robustes",
    stack: ["JavaScript", "Python", "Langage C"],
  },
];

export const projectFilters: ProjectCategory[] = ["Data Engineering", "Software", "Ksilog Academy"];

export const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#experience", label: "Expériences" },
  { href: "#education", label: "Formation" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];
