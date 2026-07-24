/**
 * Eze Christian Portfolio - Dynamic Architecture & Interactions
 * Vanilla ES6+ Implementation
 */

'use strict';

// 1. Projects Data Array
const projects = [
  {
    title: "HighlightsHub",
    description: "A responsive global sports application displaying global football highlights, featuring filtering options by leagues and clubs.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
    url: "https://example.com/highlightshub",
    technologies: ["HTML5", "CSS3", "JavaScript", "Django", "Sports API"]
  },
  {
    title: "CHRIS LUX & Accessories",
    description: "A luxury e-commerce application featuring dynamic collection filtering, rich product detail views, and seamless navigation.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    url: "https://example.com/chrislux",
    technologies: ["HTML5", "CSS3", "JavaScript", "Django", "MySQL"]
  },
  {
    title: "CRAVINGS Restaurant Platform",
    description: "A mobile-first online food ordering interface with automated chat pre-fills and dynamic menu item routing.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    url: "https://example.com/cravings",
    technologies: ["HTML5", "CSS3", "JavaScript", "WhatsApp API"]
  },
  {
    title: "Tobaz Autos & Logistics",
    description: "A robust commercial platform for automotive inventory tracking, spare parts management, and delivery logistics.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
    url: "https://example.com/tobaz-autos",
    technologies: ["Django", "Python", "MySQL", "JavaScript", "CSS3"]
  }
];

// 2. DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderProjects(projects);
  initScrollAnimations();
  setCurrentYear();
});

// 3. Render Dynamic Project Cards
function renderProjects(items) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const fragment = document.createDocumentFragment();

  items.forEach(project => {
    const card = document.createElement('a');
    card.href = project.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.className = "project-card";
    card.setAttribute('aria-label', `${project.title} - Opens live site in new tab`);

    const techBadges = project.technologies
      .map(tech => `<span class="tech-badge">${escapeHTML(tech)}</span>`)
      .join('');

    card.innerHTML = `
      <div class="card-image-container">
        <img 
          src="${escapeHTML(project.image)}" 
          alt="${escapeHTML(project.title)} Preview" 
          class="card-image"
          loading="lazy" 
          width="800"
          height="450"
        />
      </div>
      <div class="card-content">
        <h3 class="card-title">${escapeHTML(project.title)}</h3>
        <p class="card-description">${escapeHTML(project.description)}</p>
        <div class="card-tech-stack">
          ${techBadges}
        </div>
        <div class="card-action">
          <span class="card-button-label">
            View Live Site
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </span>
        </div>
      </div>
    `;

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

// Helper to escape HTML tags for security
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// 4. Scroll Reveal Observer
function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });
}

// 5. Dynamic Year Calculation
function setCurrentYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
