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
    'hero.title':   'Soy <span class="gradient-text">Eduardo Saes</span><br/>Backend Engineer',
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
    'about.p1':    'Ingeniero Backend con más de <strong>7 años</strong> diseñando y operando APIs REST, microservicios y sistemas distribuidos en <strong>NestJS, Node.js, Python (FastAPI) y Laravel</strong>.',
    'about.p2':    'He entregado soluciones de producción para clientes <strong>FinTech</strong> y enterprise en EE.UU., Panamá y Latinoamérica, con resultados medibles: <strong>35% menos latencia de API</strong>, 10.000+ requests concurrentes sin degradación, <strong>99,5% de uptime</strong> y automatización que eliminó 20+ horas semanales de trabajo manual.',
    'about.p3':    'Sólido en diseño de sistemas, optimización de bases de datos, caching y pipelines <strong>CI/CD sobre AWS</strong>.',
    'about.p4':    'Actualmente incorporando <strong>Go</strong> para servicios cloud-native de alto rendimiento y baja latencia.',

    'skills.label':       '02. Skills',
    'skills.title':       'Tech Stack',
    'skills.sub':         'Tecnologías y herramientas con las que trabajo',
    'skills.lang.title':  'Lenguajes',
    'skills.lang.python': 'Python (AI)',
    'skills.lang.go':     'Go (en aprendizaje)',
    'skills.fw.title':    'Frameworks & APIs',
    'skills.fw.micro':    'Microservicios',
    'skills.fw.graphql':  'GraphQL',
    'skills.fw.eda':      'Event-Driven Architecture',
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

    'proj.4.title': 'AI Customer Service Platform',
    'proj.4.desc':  'Plataforma que automatiza el soporte al cliente vía WhatsApp usando GPT-4o con arquitectura hexagonal (Ports & Adapters). Detecta clientes frustrados y escala automáticamente a agentes humanos generando tickets con resumen AI y prioridad por sentimiento. Dashboard de analytics con tasas de automatización y resolución. Reduce la carga de soporte hasta un 70%.',
    'proj.4.m1':    'reducción de carga',
    'proj.4.m2':    'escalación inteligente',
    'proj.4.m3':    'arquitectura',

    'proj.5.title': 'RAG Support System',
    'proj.5.desc':  'Sistema de soporte técnico basado en RAG (Retrieval-Augmented Generation) con tres estrategias de chunking configurables (fixed, semantic, recursive) sobre documentación en Markdown/PDF. Incluye suite de evaluación RAGAS y benchmarks de latencia, costo y precisión de recuperación contra gemini-2.5-flash.',
    'proj.5.m1':    'score de recuperación',
    'proj.5.m2':    'latencia p50',
    'proj.5.m3':    'estrategias de chunking',

    'exp.label':    '04. Experiencia',
    'exp.title':    'Trayectoria',
    'exp.1.desc':   'Reduje 35% el tiempo de respuesta de API optimizando NestJS + PostgreSQL, sosteniendo 10.000+ requests concurrentes sin degradación. Construí pipelines CI/CD en AWS (ECS + CodePipeline) que bajaron el tiempo de despliegue de 45 a menos de 8 minutos. Automaticé 5 flujos operativos, eliminando errores recurrentes en producción.',
    'exp.2.desc':   'Re-arquitecturé microservicios de 3 sistemas críticos alcanzando 99,5% de uptime y eliminando caídas semanales. Desarrollé 12+ módulos backend para plataformas enterprise internacionales, reduciendo el tiempo de integración con terceros de 2 semanas a 4 días. Optimicé queries SQL y caching con Redis, logrando dashboards 60% más rápidos para 500+ usuarios activos.',
    'exp.3.desc':   'Entregué proyectos para 8+ clientes internacionales con Laravel y Vue.js, manteniendo 99%+ de uptime en plataformas 24/7 y resolviendo incidentes críticos en menos de 4 horas promedio. Automaticé 6 flujos vía integraciones con APIs externas, eliminando 15+ horas semanales de trabajo manual.',
    'exp.4.role':    'Desarrollador Web',
    'exp.4.company': 'Gobernación del Estado Mérida · Venezuela',
    'exp.4.desc':    'Construí desde cero un sistema de gestión de RRHH, digitalizando expedientes de 1.200+ empleados antes gestionados en papel. Reduje 70% el tiempo de procesamiento de nómina; el sistema operó 18 meses sin incidentes críticos.',

    'contact.label':    '05. Contacto',
    'contact.title':    'Construyamos<br/>algo increíble',
    'contact.desc':     'Estoy disponible para roles backend senior, proyectos de consultoría e integraciones AI. Respondo en menos de 24 horas.',
    'contact.location': 'Venezuela · Disponible para trabajo remoto global',

    'footer.credit': '© 2026 Eduardo Argenis Saes Araujo · Backend Engineer',
  },
  en: {
    'nav.about':      'About',
    'nav.skills':     'Skills',
    'nav.projects':   'Projects',
    'nav.experience': 'Experience',
    'nav.contact':    'Contact',
    'nav.hire':       'Hire me',

    'hero.eyebrow': 'Hello, world',
    'hero.title':   'I\'m <span class="gradient-text">Eduardo Saes</span><br/>Backend Engineer',
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
    'about.p1':    'Backend Engineer with over <strong>7 years</strong> designing and operating REST APIs, microservices and distributed systems in <strong>NestJS, Node.js, Python (FastAPI) and Laravel</strong>.',
    'about.p2':    'I\'ve delivered production solutions for <strong>FinTech</strong> and enterprise clients across the US, Panama and Latin America, with measurable results: <strong>35% lower API latency</strong>, 10,000+ concurrent requests without degradation, <strong>99.5% uptime</strong> and automation that eliminated 20+ hours of manual work per week.',
    'about.p3':    'Solid background in systems design, database optimization, caching and <strong>CI/CD pipelines on AWS</strong>.',
    'about.p4':    'Currently incorporating <strong>Go</strong> for high-performance, low-latency cloud-native services.',

    'skills.label':       '02. Skills',
    'skills.title':       'Tech Stack',
    'skills.sub':         'Technologies and tools I work with daily',
    'skills.lang.title':  'Languages',
    'skills.lang.python': 'Python (AI)',
    'skills.lang.go':     'Go (learning)',
    'skills.fw.title':    'Frameworks & APIs',
    'skills.fw.micro':    'Microservices',
    'skills.fw.graphql':  'GraphQL',
    'skills.fw.eda':      'Event-Driven Architecture',
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

    'proj.4.title': 'AI Customer Service Platform',
    'proj.4.desc':  'Platform that automates WhatsApp customer support using GPT-4o with Hexagonal Architecture (Ports & Adapters). Detects frustrated customers and automatically escalates to human agents, generating AI-summarized tickets with sentiment-based priority. Analytics dashboard tracking automation and resolution rates. Reduces support workload by up to 70%.',
    'proj.4.m1':    'workload reduction',
    'proj.4.m2':    'smart escalation',
    'proj.4.m3':    'architecture',

    'proj.5.title': 'RAG Support System',
    'proj.5.desc':  'RAG-based (Retrieval-Augmented Generation) technical support system with three configurable chunking strategies (fixed, semantic, recursive) over Markdown/PDF documentation. Includes a RAGAS evaluation suite and benchmarks for latency, cost and retrieval accuracy against gemini-2.5-flash.',
    'proj.5.m1':    'retrieval score',
    'proj.5.m2':    'p50 latency',
    'proj.5.m3':    'chunking strategies',

    'exp.label':    '04. Experience',
    'exp.title':    'Career Timeline',
    'exp.1.desc':   'Cut API response time by 35% by optimizing NestJS + PostgreSQL, sustaining 10,000+ concurrent requests without degradation. Built CI/CD pipelines on AWS (ECS + CodePipeline), cutting deployment time from 45 minutes to under 8. Automated 5 operational workflows, eliminating recurring production errors.',
    'exp.2.desc':   'Re-architected microservices across 3 critical systems, reaching 99.5% uptime and eliminating weekly outages. Built 12+ backend modules for international enterprise platforms, cutting third-party integration time from 2 weeks to 4 days. Optimized SQL queries and Redis caching, making dashboards 60% faster for 500+ active users.',
    'exp.3.desc':   'Delivered projects for 8+ international clients using Laravel and Vue.js, maintaining 99%+ uptime on 24/7 platforms and resolving critical incidents in under 4 hours on average. Automated 6 workflows via third-party API integrations, eliminating 15+ hours of manual work per week.',
    'exp.4.role':    'Web Developer',
    'exp.4.company': 'Gobernación del Estado Mérida · Venezuela',
    'exp.4.desc':    'Built an HR management system from scratch, digitizing records for 1,200+ employees previously handled on paper. Cut payroll processing time by 70%; the system ran 18 months without critical incidents.',

    'contact.label':    '05. Contact',
    'contact.title':    'Let\'s build<br/>something great',
    'contact.desc':     'I\'m available for senior backend roles, consulting projects and AI integrations. I respond within 24 hours.',
    'contact.location': 'Venezuela · Available for global remote work',

    'footer.credit': '© 2026 Eduardo Argenis Saes Araujo · Backend Engineer',
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
