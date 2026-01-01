# ODOS Summer Camp Blog

A beautiful, responsive portfolio-style blog website showcasing my ODOS Summer Camp journey.

## 🎨 Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Cute & Warm Aesthetic**: Soft colors, rounded corners, smooth animations
- **Multi-page Navigation**: Home, Journey, About ODOS, Gallery
- **Timeline Layout**: Interactive journey timeline with 4 sections
- **Photo Gallery**: Masonry-style photo layout with lightbox
- **Contact Dropdown**: Easy Instagram links in navbar
- **Smooth Animations**: Hover effects and transitions throughout

## 🎨 Color Palette

### Primary Colors

- Pink: `#E4568B`
- Soft Blue: `#A7C7E4`
- Green: `#5D7B3D`

### Secondary Colors

- Yellow: `#F6C94D`
- Light Pink: `#F29BB9`

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:5173` (or the port shown in terminal)

## 📁 Project Structure

```
jaoprim_blog/
├── public/                 # Static assets
│   ├── logo.svg           # Website logo
│   ├── hero-image.jpg     # Hero section image (add your own)
│   ├── photos/            # Home page photo highlights
│   ├── gallery/           # Gallery page photos
│   └── blog/              # Blog post images
├── src/
│   ├── components/
│   │   └── navbar.jsx     # Navigation with dropdown
│   ├── pages/
│   │   ├── Home.jsx       # Landing page
│   │   ├── Journey.jsx    # Timeline page
│   │   ├── BlogPost.jsx   # Individual blog posts
│   │   ├── AboutOdos.jsx  # About ODOS page
│   │   └── Gallery.jsx    # Photo gallery
│   └── App.jsx            # Main app with routing
└── IMAGE_GUIDE.md         # Guide for adding images
```

## 📸 Adding Your Images

See [IMAGE_GUIDE.md](./IMAGE_GUIDE.md) for detailed instructions on adding your photos.

### Quick Start:

1. Place your images in the correct folders (`public/photos/`, `public/gallery/`, `public/blog/`)
2. Use the naming conventions specified in IMAGE_GUIDE.md
3. Images will automatically appear on the website

## 📝 Customizing Content

### Update Blog Content

Edit `src/pages/BlogPost.jsx` to customize your journey stories:

- Before China
- Study Life
- Travel
- Reflection

### Update Contact Links

Edit `src/components/navbar.jsx` to add your Instagram links:

```jsx
<a href="https://instagram.com/yourusername">
```

### About ODOS Link

The external link to ODOS website is in `src/pages/AboutOdos.jsx`

## 🛠️ Built With

- **React** - UI framework
- **React Router** - Page navigation
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Custom CSS** - Component-specific styling

## 📱 Pages Overview

1. **Home** - Hero section, journey preview cards, photo highlights
2. **My เจอนี่ (Journey)** - Interactive timeline with 4 journey sections
3. **Journey Details** - Individual blog posts for each timeline section
4. **About ODOS** - Information about ODOS program with external link
5. **Gallery** - Photo gallery with masonry layout and lightbox

## 🎯 Key Features

### Navigation

- Fixed navbar with smooth scrolling
- Hamburger menu for mobile
- Contact dropdown with Instagram links
- Responsive on all devices

### Animations

- Smooth hover effects on cards and buttons
- Page transitions
- Image zoom effects
- Timeline animations

### Responsive Design

- Mobile-first approach
- Adapts to all screen sizes
- Touch-friendly on mobile devices

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder, ready to deploy to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 👥 Contact

Update the Instagram links in the navbar to your own accounts!

---

Built with 💖 for the ODOS Summer Camp experience

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
