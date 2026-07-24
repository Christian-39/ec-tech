/**
 * Eze Christian Portfolio - Dynamic Architecture & Interactions
 * Vanilla ES6+ Implementation
 */

'use strict';

// 1. Projects Data Array
const projects = [
  {
    title: "Chris Gadgets",
    description: "A modern electronics e-commerce platform for selling phones, laptops, accessories, solar panels, inverter batteries, and other gadgets. Features product marketplace, cart and checkout, user authentication, orders and tracking, Payuee Escrow API integration, wallet management, admin dashboard, inventory management, and Backblaze B2 media storage.",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop",
    url: "https://chris-gadgets.onrender.com",
    technologies: ["Django", "Python", "JavaScript", "Payuee API", "Backblaze B2", "MySQL"]
  },
  {
    "title": "Chris Lux & Accessories",
    "description": "A luxury women's hair accessories e-commerce store featuring dynamic collection filtering, rich product detail views, category browsing for hairpieces, extensions, and styling tools, modern luxury UI, and seamless payment integration.",
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    "url": "https://chris-lux.onrender.com",
    "technologies": ["Django", "Python", "JavaScript", "Backblaze B2", "MySQL", "CSS3"]
  },
  {
    title: "Payuee Marketplace",
    description: "A secure marketplace ecosystem powered by escrow technology. Features product sourcing, secure transactions, escrow payment handling, order creation and verification, wallet management, and transaction tracking.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
    url: "https://payuee.com",
    technologies: ["Django", "Python", "PAYUEE Escrow API", "PAYUEE Wallet System", "JavaScript"]
  },
  {
    title: "Tobaz Autos",
    description: "A robust commercial platform for automotive inventory tracking, vehicle listings, car showcase, vehicle details, spare parts management, and delivery logistics.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop",
    url: "https://tobaz-autos.onrender.com",
    technologies: ["Django", "Python", "MySQL", "Backblaze B2", "JavaScript", "CSS3"]
  },
  {
    title: "Cineverse",
    description: "A movie discovery and entertainment platform featuring movie browsing, cinema-style interface, movie information display, and an entertainment-focused UI.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
    url: "https://christian-39.github.io/cineverse-/gemini.html",
    technologies: ["HTML5", "CSS3", "JavaScript", "Movie API"]
  },
  {
    title: "EC TECH",
    description: "Technology company website and developer brand platform. Showcases web development services, company branding, portfolio presentation, and project highlights.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    url: "https://ec-tech.onrender.com/",
    technologies: ["Django", "Python", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "My Portfolio",
    description: "My personal developer portfolio displaying completed projects, showcasing technical skills, and highlighting web development experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    url: "https://christian-39.github.io/payuee/portfolio.html",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    title: "OYA Management System",
    description: "A complete organization and member management platform for Okpo Youths Association. Features member registration, executive management, dues tracking, prepaid records, finance management, notifications, projects management, taskforce management, motorcycle inventory tracking, and role-based access control.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    url: "https://okpo.onrender.com",
    technologies: ["Django", "Python", "MySQL", "Backblaze B2", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Homes Effect Global Enterprises",
    description: "A corporate business website for Homes Effect Global Enterprises Ltd. Features business information, service presentation, company branding, and professional online presence.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    url: "https://christian-39.github.io/homes-effect-global-enterprises-ltd/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Backblaze B2", "Corporate Design"]
  },
  {
    title: "TrustSwap",
    description: "A peer-to-peer cryptocurrency marketplace featuring user authentication, crypto trading workflow, wallet-related operations, transaction management, and real-time communication architecture.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800&auto=format&fit=crop",
    url: "#",
    technologies: ["Django", "Python", "WebSocket", "Crypto API", "JavaScript"]
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

  items.forEach((project, index) => {
    const hasLiveUrl = project.url && project.url !== '#';
    const card = document.createElement('a');
    card.href = project.url || '#';
    if (hasLiveUrl) {
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }
    card.className = "project-card";
    card.setAttribute('aria-label', `${project.title} - ${hasLiveUrl ? 'Opens live site in new tab' : 'Project details'}`);

    const techBadges = project.technologies
      .map(tech => `<span class="tech-badge">${escapeHTML(tech)}</span>`)
      .join('');

    const actionLabel = hasLiveUrl ? 'View Live Site' : 'View Details';
    const actionIcon = hasLiveUrl
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`
      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>`;

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
            ${actionLabel}
            ${actionIcon}
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
    card.style.transitionDelay = `${index * 0.08}s`;
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