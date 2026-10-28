export const personalInfo = {
  name: "Athul Krishna M S",
  shortName: "Athul",
  title: "Java Developer | Spring Boot | Microservices",
  location: "Trivandrum, Kerala, India",
  email: "athulkrishnams027@gmail.com",
  linkedIn: "https://linkedin.com/in/athulkrishnams",
  github: "https://github.com/athulkrishnams027",
  resumePath: "/Athul_Krishna_Resume.pdf",
  headline: "Building Reliable Software with Java.",
  supportingText:
    "I'm a Java Developer focused on building maintainable backend applications, REST APIs, and microservices using Java and Spring Boot, with React experience for full-stack development.",
  bio: [
    "I am a backend-focused Java Developer with over a year of hands-on experience designing, developing, and maintaining enterprise applications. My work primarily revolves around building robust RESTful APIs, scalable microservices, and secure relational database architectures using Java, Spring Boot, Spring Data JPA, Hibernate, PostgreSQL, and MySQL.",
    "During my tenure with the Java Team at Keltron ITBG, I contributed to high-impact enterprise systems for the Kerala Government—including the Animal Husbandry Management System and the Analytical Laboratory System. I handled 80+ development and production support tasks, implementing registration workflows, inventory systems, and approval pipelines.",
    "In addition to strong server-side engineering, I bring hands-on React frontend experience to build cohesive full-stack solutions. I value clean code principles, modular architecture, disciplined version control, and continuous learning to deliver dependable software."
  ],
  stats: [
    { label: "Hands-on Experience", value: "1+ Year" },
    { label: "Govt Enterprise Systems", value: "2 Systems" },
    { label: "Enterprise Tasks Resolved", value: "80+ Tasks" },
    { label: "Core Backend Stack", value: "Java & Spring" }
  ]
};

export const skillCategories = [
  {
    id: "backend",
    name: "Backend Development",
    icon: "Server",
    skills: [
      { name: "Spring Boot", level: "Core" },
      { name: "REST APIs / Web Services", level: "Core" },
      { name: "Spring Data JPA", level: "Core" },
      { name: "Hibernate", level: "Core" },
      { name: "Spring Security", level: "Proficient" }
    ]
  },
  {
    id: "languages",
    name: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Java", level: "Primary" },
      { name: "SQL", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Working" },
      { name: "Python", level: "Familiar" }
    ]
  },
  {
    id: "architecture",
    name: "Architecture & Design",
    icon: "Layers",
    skills: [
      { name: "Microservices", level: "Applied" },
      { name: "MVC Design Pattern", level: "Applied" },
      { name: "Layered Architecture", level: "Applied" },
      { name: "API Gateway", level: "Applied" },
      { name: "Service Registry (Eureka)", level: "Applied" },
      { name: "Config Server", level: "Applied" }
    ]
  },
  {
    id: "databases",
    name: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "Core" },
      { name: "MySQL", level: "Core" },
      { name: "Schema Design", level: "Proficient" },
      { name: "Query Optimization", level: "Working" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Proficient" },
      { name: "HTML5", level: "Proficient" },
      { name: "CSS3", level: "Proficient" },
      { name: "JavaScript", level: "Working" },
      { name: "Bootstrap", level: "Working" },
      { name: "jQuery (basic)", level: "Basic" }
    ]
  },
  {
    id: "tools",
    name: "Developer Tools & DevOps",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Daily" },
      { name: "GitHub", level: "Daily" },
      { name: "Docker", level: "Working" },
      { name: "Maven", level: "Daily" },
      { name: "Postman", level: "Daily" },
      { name: "Spring Tool Suite (STS)", level: "IDE" },
      { name: "IntelliJ IDEA", level: "IDE" },
      { name: "VS Code", level: "IDE" },
      { name: "DBeaver", level: "Database GUI" }
    ]
  }
];

export const experiences = [
  {
    id: "keltron",
    company: "Keltron ITBG",
    role: "Software Apprentice, Java Team",
    period: "February 2026 – Present",
    location: "Vellayambalam, Trivandrum",
    type: "Enterprise Engineering",
    description:
      "Contributing to large-scale enterprise applications for the Government of Kerala, focusing on backend microservices, database transactions, and live production stability.",
    highlights: [
      "Completed 80+ development and support tasks across two enterprise projects for the Kerala Government.",
      "Animal Husbandry System: developed Java backend features for pet shop and animal breeder registrations.",
      "Analytical Lab System: worked on purchase and inventory management of chemical-based lab items.",
      "Debugged issues and resolved support requests in live enterprise applications; supported frontend work."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "JPA / Hibernate",
      "PostgreSQL",
      "Microservices"
    ]
  },
  {
    id: "kompetenzen",
    company: "Kompetenzen and Technologies",
    role: "Full-Stack Development Intern",
    period: "June 2025 – February 2026",
    location: "Trivandrum",
    type: "Internship",
    description:
      "Trained and developed full-stack web applications using the Java, Spring Boot, MySQL, and React technology stack.",
    highlights: [
      "Developed a CRUD Movie Watchlist application end to end using Spring Boot REST APIs, MySQL and a React.js frontend.",
      "Managed frontend state with React Hooks and used Git for version control throughout the project."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "React.js",
      "MySQL",
      "Git"
    ]
  },
  {
    id: "techmagi",
    company: "TechMagi",
    role: "Campus Ambassador",
    period: "January 2022 – March 2025",
    location: "Kochi",
    type: "Leadership & Community",
    description:
      "Led student outreach and developer community engagement, bridging technical education and student communities.",
    highlights: [
      "Promoted technical workshops, certifications and internship programs to students for over 3 years, supporting 50+ events."
    ],
    technologies: ["Technical Workshops", "Certifications", "Student Outreach", "Event Coordination"]
  }
];

export const projects = [
  {
    id: "animal-husbandry",
    title: "Animal Husbandry Management System",
    subtitle: "Kerala Government Enterprise Application",
    role: "Java Developer",
    badge: "Government Enterprise",
    client: "Kerala State Department / Keltron ITBG",
    isGovernment: true,
    repoAvailable: false,
    demoAvailable: false,
    shortDescription:
      "A microservices-based enterprise platform covering Citizen, Pet Shop, and Dog Breeder modules with end-to-end registration and approval workflows.",
    fullDescription:
      "Developed and maintained a mission-critical, microservices-based government application for the Department of Animal Husbandry. The system handles citizen registrations, commercial pet shop licensing, and dog breeder certifications across Kerala. Contributed to core RESTful services, database layer design, status tracking, and React UI components.",
    responsibilities: [
      "Developed and maintained a microservices-based government application for animal husbandry services, including Citizen, Pet Shop, and Dog Breeder modules.",
      "Built RESTful APIs with Java, Spring Boot, Spring Data JPA, and Hibernate for registration, verification, approval, and status-tracking workflows.",
      "Developed React-based registration forms, dependent dropdowns, document uploads, and dashboard components.",
      "Integrated PostgreSQL and Spring Cloud (API Gateway, Service Registry, Config Server) to support distributed architecture.",
      "Applied Spring Security for authorization across citizen and departmental administrative tiers."
    ],
    architecture: [
      "Microservices architecture with Spring Cloud API Gateway",
      "Service Registry & centralized configuration management",
      "PostgreSQL relational database with JPA/Hibernate ORM",
      "React client interfacing with secure REST endpoints"
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "Spring Security",
      "React",
      "Microservices",
      "Spring Cloud"
    ]
  },
  {
    id: "analytical-lab",
    title: "Analytical Laboratory Management System",
    subtitle: "Enterprise Procurement & Asset Management",
    role: "Java Developer",
    badge: "Government Enterprise",
    client: "Kerala State Department / Keltron ITBG",
    isGovernment: true,
    repoAvailable: false,
    demoAvailable: false,
    shortDescription:
      "An enterprise microservices platform managing laboratory procurement, chemical inventory, asset tracking, and maintenance service workflows.",
    fullDescription:
      "Engineered backend services and frontend interfaces for an analytical laboratory enterprise platform. The system coordinates complex laboratory operations including requisition indent management, chemical and equipment stock receipts/issues, asset tracking, calibration scheduling, and multi-tier hierarchy approvals.",
    responsibilities: [
      "Developed and maintained a microservices-based enterprise application for laboratory procurement, inventory, asset management, and service workflows.",
      "Built and supported backend services using Java, Spring Boot, Spring Data JPA, and Hibernate for indent management, stock management, asset registration, service requests, and approval workflows.",
      "Developed React-based modules for indent management, stock receipt and issue, asset registration, dashboards, and reports.",
      "Integrated PostgreSQL and Spring Cloud (API Gateway, Service Registry, Config Server) to support the architecture.",
      "Enforced strict transactional integrity across chemical stock receipts and requisitions."
    ],
    architecture: [
      "Layered microservice domain architecture (Procurement, Inventory, Assets)",
      "Centralized Spring Cloud Config and Service Discovery",
      "PostgreSQL database with strict transactional boundaries (@Transactional)",
      "React SPA dashboard with real-time inventory and status views"
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "Spring Security",
      "React",
      "Microservices",
      "Spring Cloud"
    ]
  },
  {
    id: "student-tracker",
    title: "Student Tracker Application",
    subtitle: "Full-Stack Record Management & Containerization",
    role: "Java Developer",
    badge: "Full-Stack & DevOps",
    client: "Personal / Academic Project",
    isGovernment: false,
    repoAvailable: true,
    githubUrl: "https://github.com/athulkrishnams027",
    demoAvailable: false,
    shortDescription:
      "A complete student record management system with Spring Boot REST APIs, React client, custom exception handling, and multi-stage Docker deployment.",
    fullDescription:
      "Designed and implemented a full-stack student management application providing complete CRUD operations, record filtering, and chronological sorting. Containerized the entire backend using multi-stage Docker builds to streamline deployment across environments.",
    responsibilities: [
      "Built a student record management application with Spring Boot REST APIs, Spring Data JPA, Hibernate and PostgreSQL, and a React.js frontend.",
      "Implemented REST endpoints to create, view, update and delete student records, with custom exception handling for missing records and sorted listing by creation time.",
      "Built React UI for add, view, edit and delete workflows using React Router, Axios and Bootstrap.",
      "Containerized the backend with a multi-stage Dockerfile (Maven build, OpenJDK 17) for portable deployments."
    ],
    architecture: [
      "Layered Spring Boot architecture (Controller -> Service -> Repository)",
      "Spring Data JPA repository patterns and custom JPQL queries",
      "PostgreSQL database containerized with persistent volumes",
      "Client-side routing and asynchronous HTTP client with Axios"
    ],
    technologies: [
      "Java 17",
      "Spring Boot",
      "REST APIs",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "React",
      "Bootstrap",
      "Axios",
      "Docker",
      "Maven",
      "Git"
    ]
  },
  {
    id: "movie-watchlist",
    title: "Movie Watchlist CRUD System",
    subtitle: "Full-Stack CRUD Application",
    role: "Full-Stack Intern",
    badge: "Full-Stack",
    client: "Kompetenzen and Technologies",
    isGovernment: false,
    repoAvailable: true,
    githubUrl: "https://github.com/athulkrishnams027",
    demoAvailable: false,
    shortDescription:
      "A responsive full-stack movie tracker built with Spring Boot REST APIs, MySQL persistence, and dynamic React Hooks state management.",
    fullDescription:
      "Built during full-stack internship training to master end-to-end web engineering. Facilitates creating, reviewing, rating, and managing personal movie collections with real-time UI state updates.",
    responsibilities: [
      "Developed a CRUD Movie Watchlist application end to end using Spring Boot REST APIs, MySQL and a React.js frontend.",
      "Managed frontend state with React Hooks and used Git for version control throughout the project.",
      "Constructed clean Spring Boot REST controllers following RESTful conventions and HTTP status semantics.",
      "Implemented relational database persistence using MySQL and Spring Data JPA."
    ],
    architecture: [
      "Standard MVC design pattern with decoupled React frontend",
      "RESTful API communication with JSON payloads",
      "MySQL relational database schema"
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "React",
      "MySQL",
      "Git"
    ]
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "MG College of Engineering",
    location: "Vandithadam, Trivandrum",
    period: "2021 – 2025",
    focus: "Core Computer Science, Data Structures, OOP, Software Engineering, Database Systems."
  },
  {
    degree: "Higher Secondary (HSE) — Computer Science & Mathematics",
    institution: "St Joseph's HSS General Hospital",
    location: "General Hospital Jn., Trivandrum",
    period: "2019 – 2021",
    focus: "Mathematics, Computer Science, Physics, Chemistry."
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "St Mary's HSS Pattom",
    location: "Pattom, Trivandrum",
    period: "2018 – 2019",
    focus: "General Secondary Education with distinction in Mathematics and Sciences."
  }
];

export const certifications = [
  {
    name: "Microservices with Java Spring Cloud",
    issuer: "Udemy",
    tag: "Microservices & Cloud"
  },
  {
    name: "Full Stack Java Development",
    issuer: "Kompetenzen Technologies",
    tag: "Full Stack Java"
  },
  {
    name: "Data Science with Python",
    issuer: "TechMagi",
    tag: "Data Science"
  },
  {
    name: "Python Django Framework",
    issuer: "Cadpoint",
    tag: "Web Development"
  }
];

export const achievements = [
  {
    title: "Sports Vice President",
    organization: "MG College of Engineering",
    description:
      "Elected to student leadership to coordinate athletic meets, inter-college sports tournaments, and team logistics for hundreds of participating students."
  },
  {
    title: "Head Boy for Class 10",
    organization: "St Mary's HSS Pattom",
    description:
      "Selected as Head Boy for Class 10 at St Mary's HSS Pattom; served the school for one year."
  }
];

export const codeSample = {
  filename: "PetShopController.java",
  language: "java",
  code: `@RestController
@RequestMapping("/api/v1/pet-shops")
@RequiredArgsConstructor
public class PetShopController {

    private final PetShopRegistrationService registrationService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<RegistrationResponse> registerPetShop(
            @Valid @RequestBody PetShopRegistrationRequest request) {
        RegistrationResponse response = registrationService.processRegistration(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/{id}/status")
    public ResponseEntity<VerificationStatusDto> getApplicationStatus(
            @PathVariable("id") Long id) {
        return ResponseEntity.ok(registrationService.fetchStatus(id));
    }
}`
};

