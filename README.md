# Eduardo Saes — Portfolio

Personal portfolio website for **Eduardo Argenis Saes Araujo**, AI Backend Engineer.

🌐 **Live site:** [saeseduardo.github.io/portfolio](https://saeseduardo.github.io/portfolio)

---

## ✨ Features

- **Bilingual** — Full Spanish / English toggle (persisted in `localStorage`)
- **Particle animation** — Interactive canvas with particle network
- **Scroll reveal** — Elements animate in as you scroll
- **Mouse parallax** — Subtle depth effect on the hero section
- **Responsive** — Mobile, tablet and desktop layouts
- **Zero dependencies** — Pure HTML, CSS and vanilla JavaScript
- **GitHub Pages ready** — No build step required

## 🗂 Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **About** | Profile photo, bio and professional summary |
| 02 | **Skills** | Tech stack: Languages, Frameworks, Databases, Cloud, AI & LLMs |
| 03 | **Projects** | Real GitHub repos with architecture diagrams and descriptions |
| 04 | **Experience** | Career timeline with roles and technologies |
| 05 | **Contact** | Contact info and social links |

## 🛠 Tech Stack (site itself)

- HTML5 + CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (ES2020+)
- Google Fonts — Inter + JetBrains Mono
- Canvas API for particle animation
- IntersectionObserver API for scroll reveal

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML with data-i18n attributes
├── styles.css          # All styles (variables, layout, components)
├── main.js             # Particles, scroll reveal, i18n, interactions
└── image/
    └── profile.png     # Profile photo
```

## 🌍 i18n System

The site uses a lightweight custom i18n solution:

- All translatable elements have a `data-i18n="key"` attribute
- `main.js` holds a `translations` object with `es` and `en` keys
- A single `applyLang(lang)` call updates all elements via `innerHTML`
- Selected language is saved to `localStorage` and restored on load

```js
// Toggle language
document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});
```

## 🚀 Deploy to GitHub Pages

1. Push this repository to `https://github.com/saeseduardo/portfolio`
2. Go to **Settings → Pages**
3. Source: `Deploy from a branch` → `main` → `/ (root)`
4. Save — the site will be live in ~1 minute

## 📬 Contact

- **Email:** eduardoargenis383@gmail.com
- **LinkedIn:** [linkedin.com/in/eduardosaes](https://linkedin.com/in/eduardosaes)
- **GitHub:** [github.com/saeseduardo](https://github.com/saeseduardo)

---

© 2026 Eduardo Argenis Saes Araujo
