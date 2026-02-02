# Jainshree DIGITAL — One-Page Landing Page

A modern, dark-themed, responsive one-page landing website built for **Jainshree DIGITAL**, focused on performance, clean UI/UX, and conversion.

This project was developed as part of an assessment to demonstrate front-end skills, design sensibility, performance optimization, and basic SEO setup.

---

## 🔗 Live Demo

👉 **Live URL:** https://[<your-netlify-site>.netlify.app](https://jainshree-digital.netlify.app/#home)  
👉 **Repository:** https://github.com/deepjsr/jainshree-digital-agency.git

---

## 🧩 Features Implemented

### Core Sections

- Hero section with strong value proposition & CTA
- Services section with animated cards
- About section with credibility stats
- Contact section with Netlify Form integration
- WhatsApp click-to-chat floating action button
- Footer with quick links and contact details

### UI / UX

- Dark, modern, agency-style design
- Mobile-first responsive layout
- Smooth micro-interactions and animations
- Clear visual hierarchy and spacing

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** CSS / Utility classes
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Deployment:** Netlify
- **Netlify Forms** (contact form handling)
- **WhatsApp Click-to-Chat**

---

## ⚡ Performance & Optimization

**Build & Minification**

- Production build created using Vite

- JavaScript and CSS minified via esbuild

- Tree-shaking enabled to remove unused code

- Source maps disabled in production to reduce bundle size

**Bundle Optimization**

- Manual chunk splitting for large dependencies:

- React & React DOM

- Framer Motion

- Icon libraries

- Improves caching and reduces initial load cost

**Rendering Optimizations**

- Static hero heading for faster First Contentful Paint (FCP)

- Animations applied only to non-critical elements

- Progressive rendering for visuals

- Explicit image dimensions to prevent layout shifts

**Image Optimization**

- WebP image format

- Lazy loading for non-critical images

- Async image decoding

- Skeleton loader for better perceived loading

---

## 🔍 SEO & Accessibility

Basic SEO best practices applied:

- Semantic HTML structure
- Single `<h1>` on page
- Proper heading hierarchy
- Meta title and description
- Accessible buttons and focus states
- Optimized anchor links for navigation

---

## 💬 WhatsApp Integration

A floating WhatsApp chat button is implemented using WhatsApp’s official **click-to-chat (wa.me)** deep linking.

This allows users to instantly start a conversation without backend dependencies or APIs, ensuring fast performance and better conversions.

---

## 📨 Contact Form

The contact form is configured to use **Web3Forms** for serverless email delivery (Vercel compatible).

### Setup Instructions

1.  Go to [Web3Forms](https://web3forms.com/) and generate a free **Access Key** (sent to your email).
2.  Open `src/components/ContactForm.jsx`.
3.  Replace `YOUR_ACCESS_KEY_HERE` with your actual Access Key.
    ```javascript
    formDataObj.append("access_key", "YOUR_ACCESS_KEY_HERE");
    ```
4.  That's it! Submissions will now be sent directly to your email.

---

## 📂 Project Structure

```
src/
├── components/
│ ├── Header.jsx
│ ├── Hero.jsx
│ ├── Services.jsx
│ ├── About.jsx
│ ├── Contact.jsx
│ ├── Footer.jsx
│ └── WhatsAppChat.jsx
├── styles/
├── App.jsx
└── main.jsx

```

---

## 🚀 Deployment

The project is deployed on **Netlify** using a static build.

### Build Command

```
npm run build

```

---

## 📝 Notes

- This project is **original work** (no copied templates).
- Design inspiration was adapted, not replicated.
- Built intentionally as a **one-page landing**, not a multi-page app.
- Focused on clarity, performance, and real-world usability.

---

📌 Notes

Lighthouse scores may vary depending on animations and visual effects.

The project prioritizes real-world UX and perceived performance over synthetic lab metrics.

All code is original and custom-built (no templates used).

---

## 👤 Author

**Deep Jyoti Sarma**  
Front-End Developer
