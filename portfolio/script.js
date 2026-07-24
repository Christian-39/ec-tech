/**
 * Eze Christian Portfolio - Main Application Script
 * Clean, performant ES6+ Vanilla JS without external dependencies.
 */

'use strict';

// 1. Projects Data Structure
const projects = [
  {
    title: "Enterprise Analytics Dashboard",
    description: "Real-time metrics visualization platform built for large scale SaaS operations with sub-second data streaming.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    url: "https://example.com/project-1",
    technologies: ["React", "TypeScript", "Django", "Python", "REST API", "Tailwind CSS"]
  },
  {
    title: "AI Canvas & Design Tool",
    description: "Browser-based vector graphic editor powered by WebAssembly and AI assisted design generation.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    url: "https://example.com/project-2",
    technologies: ["JavaScript", "HTML", "CSS", "WebAssembly", "React", "Node.js"]
  },
  {
    title: "Fintech Mobile Application",
    description: "Cross-platform mobile banking solution offering secure transaction histories and instant peer payments.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    url: "https://example.com/project-3",
    technologies: ["React", "JavaScript", "MySQL", "REST API", "CSS"]
  },
  {
    title: "E-Commerce Micro-Frontend Engine",
    description: "Scalable multi-storefront platform capable of handling peak holiday traffic with zero latency degradation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    url: "https://example.com/project-4",
    technologies: ["Django", "Python", "JavaScript", "React", "MySQL"]
  },
  {
    title: "Developer Documentation Hub",
    description: "Blazing fast documentation site featuring interactive API playgounds, code snippet generators, and search.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    url: "https://example.com/project-5",
    technologies: ["HTML", "CSS", "JavaScript", "REST API"]
  },
  {
    title: "Cloud Infrastructure Console",
    description: "Intuitive cloud management portal providing container metrics, log streaming, and deployment pipelines.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop",
    url: "https://example.com/project-6",
    technologies: ["React", "TypeScript", "Python", "Django", "MySQL"]
  },
  {
    title: "Real-Time Collaboration Suite",
    description: "Workplace communication app integrating document editing, video conferencing, and task assignment.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    url: "https://example.com/project-7",
    technologies: ["JavaScript", "HTML", "CSS", "REST API", "Node.js"]
  },
  {
    title: "Crypto Asset Tracker",
    description: "Decentralized finance dashboard tracking liquidity pools, dynamic yields, and portfolio market performance.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop",
    url: "https://example.com/project-8",
    technologies: ["React", "JavaScript", "REST API", "CSS"]
  }
];

// 2. DOM Ready Initializer
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initDynamicYear();
  renderProjectCards(projects);
  initCursorGlow();
  initIntersectionObserver();
  initBackToTop();
  initButtonRipples();
});

// 3. Preloader Functionality
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  
  window.addEventListener('load', () => {
    preloader.classList.add('hidden');
  });
}

// 4. Update Copyright Year Automatically
function initDynamicYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// 5. Dynamic DOM Generation for Project Cards
function renderProjectCards(items) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const fragment = document.createDocumentFragment();

  items.forEach((project, index) => {
    const formattedNumber = String(index + 1).padStart(2, '0');
    
    // Create card element
    const card = document.createElement('a');
    card.href = project.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.className = 'project-card';
    card.setAttribute('aria-label', `${project.title} (Opens in a new tab)`);

    // Build internal HTML safely
    const techBadgesHTML = project.technologies
      .map(tech => `<span class="tech-badge">${escapeHTML(tech)}</span>`)
      .join('');

    card.innerHTML = `
      <span class="card-number">${formattedNumber}</span>
      <div class="card-image-wrapper">
        <img 
          class="card-image" 
          src="${escapeHTML(project.image)}" 
          alt="${escapeHTML(project.title)} Preview" 
          loading="lazy" 
          width="800" 
          height="500" 
        />
      </div>
      <div class="card-content">
        <h3 class="card-title">${escapeHTML(project.title)}</h3>
        <p class="card-description">${escapeHTML(project.description)}</p>
        <div class="card-tech-stack">
          ${techBadgesHTML}
        </div>
        <div class="card-action">
          <span class="card-button">
            View Project <span class="arrow" aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </div>
    `;

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

// Utility to sanitize HTML strings preventing XSS
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

// 6. Custom Mouse Glow Following Feature
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || window.matchMedia('(max-width: 640px)').matches) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    
    glow.style.left = `${currentX}px`;
    glow.style.top = `${currentY}px`;

    requestAnimationFrame(animateGlow);
  }

  animateGlow();
}

// 7. Scroll Animations via IntersectionObserver
function initIntersectionObserver() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        card.classList.add('is-visible');
        obs.unobserve(card);
      }
    });
  }, observerOptions);

  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${(index % 4) * 0.08}s`;
    observer.observe(card);
  });
}

// 8. Back to Top Button Control
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 9. Interactive Button Ripple Effect
function initButtonRipples() {
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    card.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
}
