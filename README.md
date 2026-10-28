# Athul Krishna M S — Professional Java Developer Portfolio

A modern, high-performance, dark-themed personal portfolio website built with **React**, **Vite**, and **Modern CSS3**. Tailored specifically for **Athul Krishna M S**, positioning him as a **backend-focused Java Developer** with enterprise microservices experience and full-stack capabilities.

---

## 🚀 Live Preview & Overview

- **Developer:** Athul Krishna M S
- **Role:** Java Developer | Spring Boot | Microservices
- **Location:** Trivandrum, Kerala, India
- **Email:** [athulkrishnams027@gmail.com](mailto:athulkrishnams027@gmail.com)
- **Phone:** [+91-9207591476](tel:+919207591476)
- **LinkedIn:** [linkedin.com/in/athulkrishnams](https://linkedin.com/in/athulkrishnams)
- **GitHub:** [github.com/athulkrishnams027](https://github.com/athulkrishnams027)

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | React 18 (JSX, Functional Components, Hooks) |
| **Build Tool & Dev Server** | Vite 6 |
| **Icons** | Lucide React |
| **Styling** | Modern CSS3 (CSS Variables, Flexbox, CSS Grid, Media Queries) |
| **Typography** | Inter & JetBrains Mono (Google Fonts) |
| **Accessibility** | ARIA dialogs, semantic HTML5, focus states, reduced-motion queries |
| **Deployment Target** | Static Hosting (Vercel, Netlify, GitHub Pages, AWS S3 / CloudFront) |

---

## 📁 Project Structure

```text
Potfolio/
├── index.html                   # HTML entry point, SEO meta tags, Google Fonts
├── package.json                 # Dependencies and npm scripts
├── vite.config.js               # Vite configuration and dev server settings
├── public/
│   ├── Athul_Krishna_Resume.pdf # Downloadable resume PDF
│   └── favicon.svg              # Custom developer monogram favicon
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Main application orchestrator
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all content & projects
│   ├── styles/
│   │   └── index.css            # Global CSS variables, reset, theme & typography
│   └── components/
│       ├── Navbar.jsx           # Responsive header, active spy, mobile drawer
│       ├── Navbar.css
│       ├── Hero.jsx             # Hero section with interactive Java code preview
│       ├── Hero.css
│       ├── About.jsx            # Professional narrative, metrics & core pillars
│       ├── About.css
│       ├── Skills.jsx           # Categorized skill cards with filter tabs
│       ├── Skills.css
│       ├── Experience.jsx       # Career timeline (Keltron ITBG, Kompetenzen, TechMagi)
│       ├── Experience.css
│       ├── Projects.jsx         # Project cards with enterprise confidentiality badges
│       ├── Projects.css
│       ├── ProjectModal.jsx     # Accessible dialog for in-depth project inspection
│       ├── ProjectModal.css
│       ├── Education.jsx        # Education timeline, certifications & achievements
│       ├── Education.css
│       ├── Contact.jsx          # Working mailto/tel, copy-email & direct message composer
│       ├── Contact.css
│       ├── Footer.jsx           # Footer with dynamic year & back-to-top button
│       └── Footer.css
└── README.md                    # Project documentation & operational guide
```

---

## 📋 Prerequisites

Before running this project, ensure you have:
- **Node.js**: v18.0.0 or later (tested on v20.19.1)
- **npm**: v9.0.0 or later (tested on 10.8.2)

---

## ⚡ Quick Start & Commands

### 1. Installation
Clone or navigate to the project directory and install dependencies:
```bash
npm install
```

### 2. Local Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the URL displayed in the terminal).

### 3. Production Build
Compile and bundle optimized static assets for production:
```bash
npm run build
```
The output will be generated inside the `dist/` folder.

### 4. Preview Production Build
Preview the generated production build locally:
```bash
npm run preview
```

---

## 📄 Managing Your Resume PDF

The portfolio includes a **Download Resume** button configured to download `Athul_Krishna_Resume.pdf`.

- The current resume file is located at:
  ```text
  public/Athul_Krishna_Resume.pdf
  ```
- **To update with a new version of your PDF:**
  1. Simply copy your updated PDF file into the `public/` folder.
  2. Ensure the filename is named exactly:
     `Athul_Krishna_Resume.pdf`
  3. Rebuild or reload the application. No code edits are required!

---

## ✏️ Updating Profile Information & Projects

All data is decoupled from the UI components and maintained centrally inside:
```text
src/data/portfolioData.js
```

### Updating Personal Details
Edit `personalInfo` in `src/data/portfolioData.js`:
- Contact information (Email, Phone, Location)
- Headline and introduction statements
- Social profiles (LinkedIn, GitHub)

### Adding or Updating Projects
Edit the `projects` array in `src/data/portfolioData.js`:
```javascript
{
  id: "your-project-id",
  title: "Project Title",
  subtitle: "Architecture or Domain",
  role: "Java Developer",
  badge: "Full-Stack",
  client: "Client or Organization",
  isGovernment: false,
  repoAvailable: true,
  githubUrl: "https://github.com/athulkrishnams027/your-repo",
  shortDescription: "Brief description for card view",
  fullDescription: "Detailed breakdown for modal view",
  responsibilities: [
    "Feature 1 implemented with Spring Boot",
    "Feature 2 implemented with PostgreSQL"
  ],
  architecture: [
    "Layered architecture with Controller, Service, and Repository"
  ],
  technologies: ["Java 17", "Spring Boot", "React", "PostgreSQL"]
}
```

### Adding Project Screenshots
To add screenshots to any project card or modal:
1. Place image files inside `public/projects/` (e.g. `public/projects/student-tracker.png`).
2. Reference them in `src/data/portfolioData.js` by adding an `image: "/projects/student-tracker.png"` property.

---

## 🚢 Deployment Instructions

Because this is a modern, pure static frontend application, you can deploy it for free on popular platforms:

### Vercel
1. Push this repository to your GitHub account (`https://github.com/athulkrishnams027`).
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. Framework Preset: **Vite** (detected automatically).
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**.

### Netlify
1. Sign in to [Netlify](https://netlify.com) and click **"Add new site"** &rarr; **"Import an existing project"**.
2. Select your GitHub repository.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Click **Deploy Site**.

### GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. In `vite.config.js`, add `base: '/Potfolio/'` (or repository name).
3. In `package.json`, add `"deploy": "gh-pages -d dist"`.
4. Run `npm run build && npm run deploy`.

---

## 🔒 Confidentiality & Enterprise Compliance

This portfolio explicitly complies with professional government enterprise confidentiality standards:
- Internal proprietary Kerala Government code from Keltron ITBG is kept secure without fabricated public repository links.
- High-level architectural descriptions, workflows, and core technical contributions are presented accurately without exposing internal government databases or non-public credentials.

---

© 2026 Athul Krishna M S. Built with React & Vite.

