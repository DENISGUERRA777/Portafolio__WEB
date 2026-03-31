# Denis Guerra | Portafolio Web

A single-page personal portfolio website — one of my first projects as I was beginning my career as a web developer. It was built to practice front-end fundamentals and to serve as a professional showcase of my work and skills.

## 🌐 Live Demo

Deployed via GitHub Pages: [https://denisguerra777.github.io/Portafolio__WEB](https://denisguerra777.github.io/Portafolio__WEB)

## 📋 Description

This portfolio website presents Denis Guerra as a web developer. It includes an image carousel in the hero section, a project gallery with modal image viewer, an about section with animated skill progress bars, a contact form, and social media links in the footer. The content is written in Spanish.

## 🗂️ Sections

| Section | Description |
|---|---|
| **Header / Carousel** | Hero area with a 3-slide image carousel and the main navigation |
| **Portafolio** | Gallery of 7 project images; clicking an image opens it in a modal |
| **Acerca de** | Profile photo, short bio, and skill progress bars (HTML 95%, CSS 100%, JS 85%) |
| **Contacto** | Contact form with name, email, and message fields |
| **Footer** | Social media links (Twitter, Instagram, Facebook) and copyright notice |

## 🛠️ Technologies Used

- **HTML5** — semantic markup (`lang="es"`)
- **CSS3** — custom styles with responsive design
- **JavaScript (Vanilla)** — modal viewer, smooth scroll, and active nav highlighting on scroll
- **Bootstrap 5** — responsive grid, carousel, and modal components
- **Fontello** — custom icon font (briefcase, user, mail, social icons)
- **Google Fonts** — Open Sans (weights 300, 400, 600, 800)
- **gh-pages** — GitHub Pages deployment via npm

## 📁 Project Structure

```
Portafolio__WEB/
├── css/
│   ├── bootstrap.min.css      # Bootstrap 5
│   ├── fontello.css           # Custom icon font styles
│   └── style.css              # Custom application styles
├── font/                      # Fontello icon font files
├── img/                       # Profile photo, carousel slides, portfolio images
├── js/
│   ├── bootstrap.bundle.min.js
│   └── scripts.js             # Gallery modal, smooth scroll, active nav
├── index.html                 # Single-page application entry point
└── package.json
```

## 🚀 Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/DENISGUERRA777/Portafolio__WEB.git
   cd Portafolio__WEB
   ```

2. Open `index.html` directly in a browser, **or** use a local development server such as VS Code Live Server (pre-configured on port 5501):
   ```
   Install the "Live Server" VS Code extension, then click "Go Live"
   ```

## 📦 Deploying to GitHub Pages

```bash
npm install
npx gh-pages -d .
```

## 📄 License

© 2024 Denis Guerra. All rights reserved.
