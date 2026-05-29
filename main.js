/* ── i18n ── */
const translations = {
  es: {
    'nav.about':      'Sobre mí',
    'nav.skills':     'Skills',
    'nav.projects':   'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact':    'Contacto',
    'nav.hire':       'Contrátame',

    'hero.eyebrow': 'Hola, mundo',
    'hero.title':   'Soy <span class="gradient-text">Eduardo Saes</span><br/>AI Backend Engineer',
    'hero.sub':     'Más de 7 años construyendo arquitecturas backend escalables,<br/>APIs de alto rendimiento y sistemas cloud-native con foco creciente en AI.',
    'hero.cta1':    'Ver Proyectos',
    'hero.cta2':    'Hablemos',
    'hero.stat1':   'Años de exp.',
    'hero.stat2':   'Empresas internacionales',
    'hero.stat3':   'Remoto',
    'hero.scroll':  'Scroll',

    'about.label': '01. Sobre mí',
    'about.badge': 'Disponible para proyectos',
    'about.title': 'El motor detrás<br/>de sistemas modernos',
    'about.p1':    'Soy Ingeniero de Software con más de <strong>7 años de experiencia</strong> desarrollando arquitecturas backend escalables, APIs de alto rendimiento y sistemas distribuidos utilizando <strong>Node.js, NestJS, Laravel</strong> y tecnologías cloud-native.',
    'about.p2':    'Especializado en diseño de microservicios, automatización de procesos, integración de servicios de terceros y despliegues en <strong>AWS</strong> mediante Docker y pipelines CI/CD.',
    'about.p3':    'Actualmente enfocado en la evolución hacia sistemas backend impulsados por <strong>Inteligencia Artificial</strong>: integraciones con LLMs, automatización inteligente, arquitecturas RAG y servicios AI-ready para aplicaciones modernas.',
    'about.p4':    'Experiencia trabajando de forma remota con equipos internacionales en proyectos <strong>FinTech</strong>, plataformas empresariales y sistemas de alta disponibilidad.',
    'about.cv':    'Descargar CV',

    'skills.label':       '02. Skills',
    'skills.title':       'Tech Stack',
    'skills.sub':         'Tecnologías y herramientas con las que trabajo',
    'skills.lang.title':  'Lenguajes',
    'skills.lang.python': 'Python (AI)',
    'skills.fw.title':    'Frameworks & APIs',
    'skills.fw.micro':    'Microservicios',
    'skills.db.title':    'Bases de Datos',
    'skills.cloud.title': 'Cloud & DevOps',
    'skills.ai.title':    'AI & LLMs',
    'skills.ai.rag':      'Arquitecturas RAG',
    'skills.dist.title':  'Sistemas Distribuidos',
    'skills.dist.api':    'Integración de APIs',
    'skills.dist.auto':   'Automatización',

    'proj.label':   '03. Proyectos',
    'proj.title':   'Trabajo Destacado',
    'proj.sub':     'Sistemas y servicios que he construido',
    'proj.github':  'Ver en GitHub',
    'proj.code':    'Ver código',
    'proj.1.desc':  'API backend que permite a usuarios autenticados programar tareas futuras de tipo HTTP y SCRIPT. Arquitectura separada entre API y worker: la API encola trabajos en Redis/BullMQ y el worker los ejecuta registrando estado, logs y resultado en PostgreSQL. JWT de corta vida con refresh token rotativo, rate limiting, logs estructurados con Pino y CI/CD con GitHub Actions.',
    'proj.1.m1':    'auth + refresh',
    'proj.2.desc':  'Microservicio que recibe eventos vía webhooks HTTP o RabbitMQ y los distribuye por WebSockets (Socket.io + Redis Pub/Sub para escalabilidad horizontal), email y push. Gateway en namespace <code>/notifications</code> con rooms por usuario. Validación estricta con decorador personalizado <code>@HasAtLeastOneChannel()</code>, logs JSON compatibles con ELK/Datadog y CI/CD con SonarCloud.',
    'proj.3.chart': 'Billing events / seg',
    'proj.3.desc':  'Motor de facturación recurrente con ciclo de vida completo de suscripciones (trialing, active, past_due, canceled). Multi-gateway con patrón Strategy/Factory (Stripe/PayPal simulados), eventos desacoplados, generación de PDF, simulación de fallos de pago y audit trail financiero con Monolog. 5 servicios en Docker: PHP-FPM, Nginx, MySQL, Redis y queue worker dedicado.',
    'proj.3.m1':    'servicios Docker',
    'proj.3.m2':    'gateway payments',
    'proj.3.m3':    'calidad de código',

    'exp.label':    '04. Experiencia',
    'exp.title':    'Trayectoria',
    'exp.1.desc':   'Lideré el desarrollo de lógica backend para aplicaciones de alto rendimiento y servicios críticos. Diseñé APIs escalables orientadas a estabilidad, mantenibilidad y procesamiento eficiente de datos. Participé en arquitecturas distribuidas enfocadas en automatización de procesos y escalabilidad cloud-native.',
    'exp.2.desc':   'Diseñé e implementé módulos backend avanzados para plataformas corporativas internacionales usando NestJS y Laravel. Arquitecturas de microservicios y APIs REST con múltiples integraciones de terceros. Optimicé flujos de datos mejorando estabilidad y rendimiento operativo bajo metodologías ágiles.',
    'exp.3.desc':   'Desarrollé funcionalidades personalizadas y sistemas automatizados de reportes para clientes internacionales. Implementé soluciones backend y frontend enfocadas en disponibilidad y experiencia de usuario. Integraciones de APIs y automatización de flujos operativos en múltiples plataformas empresariales.',
    'exp.4.role':    'Desarrollador Web',
    'exp.4.company': 'Gobernación del Estado Mérida · Venezuela',
    'exp.4.desc':    'Desarrollé el sistema de gestión de personal para el área de Recursos Humanos. Implementé módulos administrativos que optimizaron el procesamiento y manejo de información de empleados. Mantenimiento evolutivo y soporte técnico del sistema institucional.',

    'contact.label':    '05. Contacto',
    'contact.title':    'Construyamos<br/>algo increíble',
    'contact.desc':     'Estoy disponible para roles backend senior, proyectos de consultoría e integraciones AI. Respondo en menos de 24 horas.',
    'contact.location': 'Venezuela · Disponible para trabajo remoto global',

    'footer.credit': '© 2026 Eduardo Argenis Saes Araujo · AI Backend Engineer',
  },
  en: {
    'nav.about':      'About',
    'nav.skills':     'Skills',
    'nav.projects':   'Projects',
    'nav.experience': 'Experience',
    'nav.contact':    'Contact',
    'nav.hire':       'Hire me',

    'hero.eyebrow': 'Hello, world',
    'hero.title':   'I\'m <span class="gradient-text">Eduardo Saes</span><br/>AI Backend Engineer',
    'hero.sub':     '7+ years building scalable backend architectures,<br/>high-performance APIs and cloud-native systems with a growing AI focus.',
    'hero.cta1':    'View Projects',
    'hero.cta2':    'Let\'s Talk',
    'hero.stat1':   'Years exp.',
    'hero.stat2':   'Intl. companies',
    'hero.stat3':   'Remote',
    'hero.scroll':  'Scroll',

    'about.label': '01. About',
    'about.badge': 'Available for opportunities',
    'about.title': 'The engine behind<br/>modern systems',
    'about.p1':    'I\'m a Software Engineer with over <strong>7 years of experience</strong> building scalable backend architectures, high-performance APIs and distributed systems using <strong>Node.js, NestJS, Laravel</strong> and cloud-native technologies.',
    'about.p2':    'Specialized in microservices design, process automation, third-party service integration and AWS deployments via Docker and CI/CD pipelines.',
    'about.p3':    'Currently focused on evolving towards <strong>AI-powered backend systems</strong>: LLM integrations, intelligent automation, RAG architectures and AI-ready services for modern applications.',
    'about.p4':    'Experience working remotely with international teams on <strong>FinTech</strong> projects, enterprise platforms and high-availability systems.',
    'about.cv':    'Download CV',

    'skills.label':       '02. Skills',
    'skills.title':       'Tech Stack',
    'skills.sub':         'Technologies and tools I work with daily',
    'skills.lang.title':  'Languages',
    'skills.lang.python': 'Python (AI)',
    'skills.fw.title':    'Frameworks & APIs',
    'skills.fw.micro':    'Microservices',
    'skills.db.title':    'Databases',
    'skills.cloud.title': 'Cloud & DevOps',
    'skills.ai.title':    'AI & LLMs',
    'skills.ai.rag':      'RAG Architectures',
    'skills.dist.title':  'Distributed Systems',
    'skills.dist.api':    'API Integration',
    'skills.dist.auto':   'Automation',

    'proj.label':   '03. Projects',
    'proj.title':   'Featured Work',
    'proj.sub':     'Systems and services I\'ve built',
    'proj.github':  'View on GitHub',
    'proj.code':    'View code',
    'proj.1.desc':  'Backend API that allows authenticated users to schedule future HTTP and SCRIPT tasks. Separated architecture between API and worker: the API enqueues jobs in Redis/BullMQ and the worker executes them, recording state, logs and results in PostgreSQL. Short-lived JWT with rotating refresh token, rate limiting, structured Pino logs and CI/CD with GitHub Actions.',
    'proj.1.m1':    'auth + refresh',
    'proj.2.desc':  'Microservice that receives events via HTTP webhooks or RabbitMQ and distributes them through WebSockets (Socket.io + Redis Pub/Sub for horizontal scaling), email and push. Gateway in <code>/notifications</code> namespace with per-user rooms. Strict DTO validation with custom <code>@HasAtLeastOneChannel()</code> decorator, ELK/Datadog-compatible JSON logs and CI/CD with SonarCloud.',
    'proj.3.chart': 'Billing events / sec',
    'proj.3.desc':  'Recurring billing engine with complete subscription lifecycle (trialing, active, past_due, canceled). Multi-gateway with Strategy/Factory pattern (simulated Stripe/PayPal), decoupled events, PDF generation, payment failure simulation and financial audit trail with Monolog. 5 Docker services: PHP-FPM, Nginx, MySQL, Redis and dedicated queue worker.',
    'proj.3.m1':    'Docker services',
    'proj.3.m2':    'gateway payments',
    'proj.3.m3':    'code quality',

    'exp.label':    '04. Experience',
    'exp.title':    'Career Timeline',
    'exp.1.desc':   'Led backend logic development for high-performance applications and critical services. Designed scalable APIs focused on stability, maintainability and efficient data processing. Participated in distributed architectures focused on process automation and cloud-native scalability.',
    'exp.2.desc':   'Designed and implemented advanced backend modules for international corporate platforms using NestJS and Laravel. Microservices architectures and REST APIs with multiple third-party integrations. Optimized data flows improving operational stability and performance under agile methodologies.',
    'exp.3.desc':   'Developed custom features and automated report systems for international clients. Implemented backend and frontend solutions focused on availability and user experience. API integrations and operational flow automation across multiple enterprise platforms.',
    'exp.4.role':    'Web Developer',
    'exp.4.company': 'Gobernación del Estado Mérida · Venezuela',
    'exp.4.desc':    'Developed the HR personnel management system. Implemented administrative modules optimizing employee information processing and management. Participated in evolutionary maintenance and technical support of the institutional system.',

    'contact.label':    '05. Contact',
    'contact.title':    'Let\'s build<br/>something great',
    'contact.desc':     'I\'m available for senior backend roles, consulting projects and AI integrations. I respond within 24 hours.',
    'contact.location': 'Venezuela · Available for global remote work',

    'footer.credit': '© 2026 Eduardo Argenis Saes Araujo · AI Backend Engineer',
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';
  document.documentElement.lang = lang;
  currentLang = lang;
  localStorage.setItem('lang', lang);
}

/* ── Navbar scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Hamburger ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ── Lang toggle ── */
document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

/* ── Active nav link ── */
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + e.target.id ? 'var(--text)' : '';
      });
    }
  });
}, { threshold: .4 });
sections.forEach(s => io.observe(s));

/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll(
  '.skill-card, .project-card, .tl-card, .about-text, .contact-left'
).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

document.querySelectorAll('.timeline-item').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.12}s`;
  revealObserver.observe(el);
});

/* ── Particle canvas ── */
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize, { passive: true });
resize();

function rand(min, max) { return Math.random() * (max - min) + min; }

class Particle {
  constructor() { this.reset(true); }
  reset(init = false) {
    this.x     = rand(0, W);
    this.y     = init ? rand(0, H) : H + 10;
    this.r     = rand(.6, 1.8);
    this.vx    = rand(-.2, .2);
    this.vy    = rand(-.5, -.15);
    this.alpha = rand(.2, .6);
    this.color = Math.random() > .5 ? '99,102,241' : '6,182,212';
  }
  update() { this.x += this.vx; this.y += this.vy; if (this.y < -10) this.reset(); }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
    ctx.fill();
  }
}

for (let i = 0; i < 90; i++) particles.push(new Particle());

function drawConnections() {
  const maxDist = 120;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d < maxDist) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(99,102,241,${(1 - d / maxDist) * .12})`;
        ctx.lineWidth = .6;
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  requestAnimationFrame(animate);
}
animate();

/* ── Mouse parallax ── */
const heroContent = document.querySelector('.hero-content');
document.addEventListener('mousemove', e => {
  if (!heroContent) return;
  const x = (e.clientX / W - .5) * 12;
  const y = (e.clientY / H - .5) * 8;
  heroContent.style.transform = `translate(${x}px, ${y}px)`;
}, { passive: true });

/* ── Animated bar chart ── */
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bar').forEach((bar, i) => {
        const h = bar.style.height;
        bar.style.height = '0';
        setTimeout(() => {
          bar.style.transition = `height .6s cubic-bezier(.4,0,.2,1) ${i * 60}ms`;
          bar.style.height = h;
        }, 100);
      });
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: .3 });
document.querySelectorAll('.chart-bars').forEach(el => barObserver.observe(el));

/* ── Smooth anchor scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' });
  });
});

/* ── Apply saved language on load ── */
applyLang(currentLang);
