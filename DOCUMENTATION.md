# EC-TECH Website Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Folder Structure](#folder-structure)
3. [File Descriptions](#file-descriptions)
4. [CSS Architecture](#css-architecture)
5. [JavaScript Features](#javascript-features)
6. [Animations Guide](#animations-guide)
7. [Responsive Design](#responsive-design)
8. [How to Edit](#how-to-edit)
9. [Deployment Guide](#deployment-guide)
10. [Troubleshooting](#troubleshooting)

---

## Project Overview

**EC-TECH** is a modern, high-end professional website for a digital developer and technology consultant. The website showcases services, portfolio, and contact information with smooth animations and a premium design aesthetic.

### Key Features
- Modern tech studio design with purple accent colors
- 100% responsive (desktop, tablet, mobile)
- Smooth scroll animations using AOS library
- Floating WhatsApp button
- Contact form with validation
- Portfolio showcase with hover effects
- Mobile-friendly navigation
- SEO optimized with meta tags

---

## Folder Structure

```
ec-tech-website/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # JavaScript functionality
├── images/
│   ├── og-thumbnail.jpg   # Social media preview image
│   ├── portfolio-1.jpg    # Portfolio project images
│   ├── portfolio-2.jpg
│   ├── portfolio-3.jpg
│   ├── portfolio-4.jpg
│   ├── portfolio-5.jpg
│   └── portfolio-6.jpg
├── icons/                 # Custom icons (if needed)
├── assets/
│   └── logo.svg          # Website logo and favicon
└── DOCUMENTATION.md       # This file
```

---

## File Descriptions

### index.html
The main HTML file containing all website sections:
- **Navigation**: Fixed navbar with smooth scroll links
- **Hero Section**: Main banner with CTA buttons and stats
- **About Section**: Business benefits cards
- **Services Section**: 8 service cards with icons
- **Industries Section**: 10 industry cards
- **Portfolio Section**: 6 project showcase cards
- **Why Choose Section**: Feature list with image
- **Contact Section**: Contact info and form
- **Footer**: Links, social icons, copyright

### css/style.css
Complete stylesheet with:
- CSS custom properties (variables)
- Reset and base styles
- Component styles (buttons, cards, forms)
- Section-specific styles
- Animations and keyframes
- Responsive breakpoints

### js/script.js
JavaScript functionality including:
- AOS animation initialization
- Mobile menu toggle
- Smooth scrolling
- Active nav link highlighting
- Back to top button
- Contact form handling
- Counter animations
- Notification system

---

## CSS Architecture

### CSS Variables
Located at the top of `style.css`:

```css
:root {
    --primary-color: #6B46C1;      /* Main purple */
    --primary-dark: #553C9A;       /* Darker purple */
    --primary-light: #9F7AEA;      /* Lighter purple */
    --secondary-color: #1A202C;    /* Dark gray */
    --accent-color: #D2AE6D;       /* Gold accent */
    --text-primary: #1A202C;       /* Main text */
    --text-secondary: #4A5568;     /* Secondary text */
    --text-light: #718096;         /* Light text */
    --bg-primary: #FFFFFF;         /* White background */
    --bg-secondary: #F7FAFC;       /* Light gray background */
    --bg-dark: #1A202C;            /* Dark background */
    --border-color: #E2E8F0;       /* Border color */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.15);
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
    --border-radius: 12px;
    --border-radius-lg: 20px;
    --container-width: 1200px;
}
```

### How to Change Colors
To change the primary color scheme, edit the CSS variables:

1. Open `css/style.css`
2. Find the `:root` section at the top
3. Change the color values
4. Save and refresh

Example - Changing to blue theme:
```css
:root {
    --primary-color: #3182CE;
    --primary-dark: #2C5282;
    --primary-light: #63B3ED;
}
```

---

## JavaScript Features

### 1. AOS (Animate On Scroll) Library
Initialized in `script.js`:
```javascript
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
    delay: 0
});
```

**Usage in HTML:**
```html
<div data-aos="fade-up" data-aos-delay="200">
    Content here
</div>
```

**Available animations:**
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `slide-up`, `slide-down`

### 2. Mobile Menu Toggle
Hamburger menu functionality for mobile screens.

### 3. Smooth Scrolling
Clicking navigation links smoothly scrolls to sections.

### 4. Active Navigation Link
Highlights the current section in the navbar.

### 5. Back to Top Button
Appears after scrolling 500px, smoothly scrolls to top.

### 6. Contact Form
- Validates all fields
- Email format validation
- Shows success/error notifications
- Simulates form submission

### 7. Counter Animation
Animates stat numbers when they come into view.

### 8. Notification System
Displays toast notifications for user feedback.

---

## Animations Guide

### CSS Animations

#### 1. Floating Shapes (Hero Section)
```css
@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(5deg); }
}
```
**Location**: Hero background shapes
**Effect**: Gentle floating motion

#### 2. Bounce Animation
```css
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}
```
**Location**: Hero badge icon, scroll indicator
**Effect**: Subtle bouncing

#### 3. Pulse Animation
```css
@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.1); opacity: 0.5; }
}
```
**Location**: Hero shape-3
**Effect**: Pulsing glow effect

#### 4. Floating Cards
```css
@keyframes floatCard {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}
```
**Location**: Cards on hero image
**Effect**: Cards float independently

### Hover Effects

#### Card Hover
```css
.card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}
```

#### Button Hover
```css
.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(107, 70, 193, 0.5);
}
```

#### Image Hover (Portfolio)
```css
.portfolio-card:hover img {
    transform: scale(1.1);
}
```

---

## Responsive Design

### Breakpoints

| Breakpoint | Width | Target Devices |
|------------|-------|----------------|
| Default | > 1024px | Desktop |
| Large Tablet | ≤ 1024px | Small laptops, tablets |
| Tablet | ≤ 768px | Tablets, large phones |
| Mobile | ≤ 480px | Mobile phones |

### Responsive Patterns

#### Desktop (> 1024px)
- Hero: 2 columns (text + image)
- Services: 4 columns
- Portfolio: 3 columns
- Industries: 5 columns
- About: 3 columns

#### Tablet (768px - 1024px)
- Hero: 1 column, centered
- Services: 2 columns
- Portfolio: 2 columns
- Industries: 3 columns
- About: 2 columns

#### Mobile (< 768px)
- All sections: 1 column
- Hamburger menu appears
- Stats stack vertically
- Contact form full width
- Images: 1 per row

### Testing Responsive Design

1. Open the website in a browser
2. Press `F12` to open Developer Tools
3. Click the device toggle icon (or press `Ctrl+Shift+M`)
4. Select different device presets
5. Test all breakpoints

---

## How to Edit

### Changing Text Content

1. Open `index.html`
2. Find the text you want to change
3. Edit between the HTML tags
4. Save and refresh browser

Example:
```html
<!-- Before -->
<h1>Helping Businesses Grow</h1>

<!-- After -->
<h1>Transform Your Business Today</h1>
```

### Changing Contact Information

1. Open `index.html`
2. Find the Contact section (around line 500)
3. Update phone number and email:

```html
<!-- Phone -->
<a href="tel:08021480055" class="contact-link">08021480055</a>

<!-- Email -->
<a href="mailto:ezechristian1999@gmail.com" class="contact-link">ezechristian1999@gmail.com</a>

<!-- WhatsApp -->
<a href="https://wa.me/2348021480055" target="_blank">+234 802 148 0055</a>
```

### Adding New Portfolio Items

1. Open `index.html`
2. Find the Portfolio section
3. Copy an existing portfolio card:

```html
<div class="portfolio-card" data-aos="fade-up" data-aos-delay="100">
    <div class="portfolio-image">
        <img src="images/portfolio-7.jpg" alt="New Project">
        <div class="portfolio-overlay">
            <a href="#contact" class="portfolio-btn">
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    </div>
    <div class="portfolio-content">
        <span class="portfolio-category">Category</span>
        <h3>Project Title</h3>
        <p>Project description here.</p>
    </div>
</div>
```

4. Add your image to the `images/` folder
5. Update the content

### Changing Colors

1. Open `css/style.css`
2. Find the `:root` section
3. Update CSS variables:

```css
:root {
    --primary-color: #YOUR_COLOR;
    --primary-dark: #YOUR_DARK_COLOR;
    --primary-light: #YOUR_LIGHT_COLOR;
}
```

### Adding New Services

1. Open `index.html`
2. Find the Services section
3. Copy an existing service card
4. Update the icon, title, and description

### Changing Images

1. Add your new image to the `images/` folder
2. Open `index.html`
3. Find the image tag you want to change
4. Update the `src` attribute:

```html
<img src="images/your-new-image.jpg" alt="Description">
```

---

## Deployment Guide

### Deploying to Render

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/ec-tech-website.git
   git push -u origin main
   ```

2. **Sign up for Render**
   - Go to https://render.com
   - Sign up with GitHub

3. **Create New Static Site**
   - Click "New +" → "Static Site"
   - Connect your GitHub repository
   - Select the repository

4. **Configure Build Settings**
   - Name: `ec-tech-website`
   - Branch: `main`
   - Build Command: (leave empty)
   - Publish Directory: `./`

5. **Deploy**
   - Click "Create Static Site"
   - Render will automatically deploy your website

6. **Get Your URL**
   - After deployment, Render provides a URL like:
     `https://ec-tech-website.onrender.com`

### Deploying to Netlify

1. **Drag and Drop**
   - Go to https://netlify.com
   - Drag your project folder to the deploy area
   - Get instant URL

2. **GitHub Integration**
   - Connect GitHub repository
   - Auto-deploy on every push

### Deploying to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   cd ec-tech-website
   vercel
   ```

3. Follow the prompts

---

## Troubleshooting

### Common Issues

#### 1. Images Not Loading
**Problem**: Images show as broken
**Solution**: 
- Check file paths are correct
- Ensure images are in the `images/` folder
- Verify file extensions match (.jpg, .png, etc.)

#### 2. CSS Not Applying
**Problem**: Website looks unstyled
**Solution**:
- Check CSS file path in HTML: `css/style.css`
- Clear browser cache (Ctrl+F5)
- Verify CSS file exists

#### 3. JavaScript Not Working
**Problem**: Animations/interactions not working
**Solution**:
- Check browser console for errors (F12)
- Verify JavaScript file path: `js/script.js`
- Ensure jQuery/AOS libraries are loading

#### 4. Mobile Menu Not Working
**Problem**: Hamburger menu doesn't open
**Solution**:
- Check that `script.js` is loaded
- Verify no JavaScript errors in console
- Test on actual mobile device

#### 5. Contact Form Not Sending
**Problem**: Form submits but no email received
**Solution**:
- This is a frontend demo form
- To make it functional, connect to backend (PHP, Node.js, etc.)
- Or use Formspree: `<form action="https://formspree.io/f/YOUR_ID">`

### Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 80+ | ✅ Fully Supported |
| Firefox | 75+ | ✅ Fully Supported |
| Safari | 13+ | ✅ Fully Supported |
| Edge | 80+ | ✅ Fully Supported |
| IE 11 | - | ❌ Not Supported |

### Performance Tips

1. **Optimize Images**
   - Compress images using TinyPNG
   - Use WebP format for better compression
   - Implement lazy loading

2. **Minify Files**
   - Minify CSS: https://cssminifier.com
   - Minify JS: https://javascript-minifier.com

3. **Enable Gzip**
   - Configure server to compress files

4. **Use CDN**
   - Host images on CDN for faster loading

---

## Contact & Support

For questions or support:
- Email: ezechristian1999@gmail.com
- Phone: 08021480055
- WhatsApp: +234 802 148 0055

---

## License

This website template is created for EC-TECH.
All rights reserved.

---

**Last Updated**: 2024
**Version**: 1.0
