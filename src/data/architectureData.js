export const architectureTopics = [
  {
    id: "microservices",
    title: "Microservices Architecture & Spring Cloud",
    subtitle: "Enterprise Distributed Architecture at Keltron ITBG",
    badge: "Distributed Systems",
    summary:
      "A decoupled microservice topology deployed for the Kerala Government Animal Husbandry and Analytical Laboratory enterprise systems. Leverages Spring Cloud API Gateway, Eureka Service Discovery, and localized database instances.",
    diagramType: "microservices",
    components: [
      {
        name: "React Single Page Client",
        role: "Frontend Presentation",
        desc: "Component-driven SPA communicating exclusively via secure HTTPS REST contracts with dynamic token attachments."
      },
      {
        name: "Spring Cloud API Gateway",
        role: "Edge Reverse Proxy",
        desc: "Single ingress entry point handling route mapping, CORS negotiation, preliminary rate limiting, and JWT header forwarding."
      },
      {
        name: "Netflix Eureka Service Registry",
        role: "Dynamic Service Discovery",
        desc: "Decouples hardcoded service addresses; microservice instances register heartbeats dynamically for client-side load balancing."
      },
      {
        name: "Spring Cloud Config Server",
        role: "Centralized Configuration",
        desc: "Central repository delivering profile-specific application properties (dev, staging, prod) across all microservices without redeployment."
      },
      {
        name: "Business Domain Microservices",
        role: "Isolated Core Services",
        desc: "Independent services for Pet Shop Licensing, Animal Breeder Records, Citizen Registrations, and Laboratory Indents."
      },
      {
        name: "PostgreSQL Database Layer",
        role: "ACID Relational Storage",
        desc: "Dedicated relational schemas maintaining data isolation, foreign key constraints, and transactional consistency."
      }
    ],
    technicalHighlights: [
      "Zero direct client-to-service coupling through unified Spring Cloud API Gateway reverse proxy routing.",
      "Eureka heartbeat mechanisms automatically deregister unhealthy microservice instances.",
      "Profile-driven configurations (PostgreSQL URLs, JWT secrets, logging levels) managed centrally.",
      "Defensive REST contracts with standardized ResponseEntity responses and ProblemDetails error objects."
    ]
  },
  {
    id: "security",
    title: "Authentication Flow & Role-Based Access Control",
    subtitle: "Stateless JWT Security with Spring Security 6",
    badge: "Security & Auth",
    summary:
      "Stateless authorization architecture enforcing strict separation of privileges across Citizen applicants, Pet Shop owners, Field Veterinary Inspectors, and State Department Administrators.",
    diagramType: "security",
    components: [
      {
        name: "Client Authentication Request",
        role: "Credentials Dispatch",
        desc: "Encrypted transmission of user credentials to the authentication controller over TLS."
      },
      {
        name: "Authentication Manager & UserDetailsService",
        role: "Identity Verification",
        desc: "Verifies salted BCrypt password hashes against stored credentials in the database."
      },
      {
        name: "JWT Token Provider",
        role: "Claims & Signature Minting",
        desc: "Generates signed HMAC-SHA256 tokens encapsulating user ID, roles, issued-at, and expiration claims."
      },
      {
        name: "JwtAuthenticationFilter (OncePerRequestFilter)",
        role: "Bearer Token Interception",
        desc: "Extracts Bearer token from the Authorization header on every request, validates signature and expiration, and establishes SecurityContext."
      },
      {
        name: "SecurityFilterChain & Method Security",
        role: "RBAC Access Control",
        desc: "Declarative method-level authorization using @PreAuthorize('hasRole(...)') guarding sensitive enterprise endpoints."
      }
    ],
    technicalHighlights: [
      "Completely stateless session policy (SessionCreationPolicy.STATELESS) ensuring horizontal scalability.",
      "BCrypt password hashing with high work-factor salts preventing rainbow-table compromises.",
      "Granular role hierarchy (ROLE_CITIZEN, ROLE_PET_SHOP, ROLE_INSPECTOR, ROLE_DEPT_ADMIN).",
      "Centralized AuthenticationEntryPoint returning RFC 7807 compliant 401 Unauthorized and 403 Forbidden responses."
    ]
  },
  {
    id: "transactions",
    title: "Database Transactions & ACID Data Integrity",
    subtitle: "Enterprise Relational Persistence with Spring Data JPA & Hibernate",
    badge: "Data Integrity",
    summary:
      "Mission-critical transaction management ensuring complete consistency across complex multi-table operations such as lab chemical inventory issues and multi-tier approval workflows.",
    diagramType: "transactions",
    components: [
      {
        name: "HTTP Request & Validation Layer",
        role: "Payload Sanitization",
        desc: "Jakarta Bean Validation (@NotNull, @Valid, @Size) rejecting malformed inputs before touching the transaction boundary."
      },
      {
        name: "Service Boundary (@Transactional)",
        role: "Atomicity Guard",
        desc: "Declarative Spring transaction boundary ensuring all database operations either commit together or roll back completely on failure."
      },
      {
        name: "Hibernate ORM & First-Level Cache",
        role: "Entity State Management",
        desc: "Maps relational tables to domain entities, manages dirty-checking, and generates optimized batch SQL statements."
      },
      {
        name: "HikariCP Connection Pool",
        role: "High-Performance Pooling",
        desc: "Production-grade JDBC connection pool minimizing latency and preventing database connection exhaustion."
      },
      {
        name: "PostgreSQL Database Engine",
        role: "ACID Enforcement",
        desc: "Enforces foreign key referential integrity, unique constraints, and Write-Ahead Logging (WAL) for durability."
      }
    ],
    technicalHighlights: [
      "Strict rollback semantics configured via @Transactional(rollbackFor = Exception.class).",
      "Pessimistic and Optimistic locking strategies preventing race conditions during concurrent chemical inventory updates.",
      "Prepared statements parameterized at the JDBC driver level eliminating SQL injection vulnerabilities.",
      "Audit logging listeners (@EntityListeners(AuditingEntityListener.class)) capturing createdBy, createdDate, lastModifiedBy."
    ]
  },
  {
    id: "lab-workflow",
    title: "Laboratory Procurement & Inventory Workflow",
    subtitle: "Analytical Laboratory Management System Architecture",
    badge: "Business Domain Flow",
    summary:
      "Enterprise workflow coordination connecting laboratory chemical requisitions, hierarchical departmental approvals, stock inventory transactions, and equipment calibration tracking.",
    diagramType: "workflow",
    components: [
      {
        name: "Requisition Indent Creation",
        role: "Lab Technician",
        desc: "Submits formal purchase requisition detailing chemical purity specifications, quantities, and urgency."
      },
      {
        name: "Hierarchical Approval Pipeline",
        role: "Procurement Officers & Directors",
        desc: "Multi-tier approval workflow verifying budget availability and stock necessity before purchase order generation."
      },
      {
        name: "Stock Receipt & Batch Logging",
        role: "Inventory Storekeeper",
        desc: "Receives delivered goods, logs batch numbers, manufacturer certificates, and expiry dates into the database."
      },
      {
        name: "Stock Allocation & Threshold Alerts",
        role: "System Automation",
        desc: "Automated triggers notifying managers when dangerous chemicals or critical consumables drop below safety reserve thresholds."
      },
      {
        name: "Asset Registry & Calibration Scheduling",
        role: "Maintenance Coordinator",
        desc: "Tracks spectrometer and autoclave lifecycles, maintenance service requests, and mandatory calibration schedules."
      }
    ],
    technicalHighlights: [
      "Multi-stage status machine (DRAFT -> SUBMITTED -> PENDING_VERIFICATION -> APPROVED -> DISPATCHED).",
      "Immutable audit trails recording all chemical receipts, issues, and departmental handovers.",
      "Automated stock deduction with atomic check-and-decrement preventing inventory discrepancies.",
      "Scheduled Spring @Scheduled jobs monitoring expiring reagent batches and dispatching email warnings."
    ]
  }
];
