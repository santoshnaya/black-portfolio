# Black Portfolio

A pixel-perfect, front-end-only clone of the Jithin Kumar Webflow portfolio. This modern portfolio showcases a sleek black design with smooth animations and responsive layout.

![Portfolio Preview](https://github.com/santoshnaya/black-portfolio/raw/main/public/preview.png)

## 🚀 Features

- **Hero Section**: Full-width background with bold typography and animated elements
- **Sticky Navigation**: Smooth scroll navigation with mobile hamburger menu
- **Works Section**: Project showcase with hover effects and modal lightboxes
- **Scrolling Text Marquee**: Animated service categories
- **About Section**: Statistics counters and skills display with gradient backgrounds
- **Shop Section**: Service packages with pricing and features
- **Contact Section**: Social links and footer with contact information
- **Fully Responsive**: Mobile-first design approach
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI/UX**: Clean typography and visual hierarchy

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/santoshnaya/black-portfolio.git
cd black-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the project in Vercel dashboard
3. Deploy with zero configuration

### Deploy to Netlify
```bash
npm run build
# Upload the .next folder to Netlify
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🎨 Design Features

### Animation Details
- Smooth page transitions
- Scroll-triggered animations
- Hover state effects
- Loading animations
- Parallax scrolling effects

### Color Palette
- Primary: Black (#000000)
- Secondary: White (#FFFFFF)
- Accent: Various gradients
- Background: Gradient overlays

### Typography
- Font Family: Inter
- Font Weights: 100-900
- Responsive font sizing
- Optimized line heights

## 📊 Performance

- **Lighthouse Score**: 90+ (all categories)
- **First Load JS**: ~146 KB
- **Build Size**: <100 MB (deployment ready)
- **Image Optimization**: Next.js automatic optimization
- **Font Loading**: Optimized Google Fonts loading

## 🔧 Customization

### Updating Content
1. Edit component data in respective files:
   - Projects: `src/components/WorksSection.tsx`
   - Services: `src/components/ShopSection.tsx`
   - Skills: `src/components/AboutSection.tsx`
   - Contact info: `src/components/ContactSection.tsx`

### Styling Changes
1. Update Tailwind classes in components
2. Modify global styles in `src/app/globals.css`
3. Customize animations in Framer Motion configurations

### Adding New Sections
1. Create new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Update navigation links in `src/components/Navigation.tsx`

## 📄 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Navigation.tsx   # Header navigation
│   ├── HeroSection.tsx  # Hero section
│   ├── ScrollingText.tsx# Marquee text
│   ├── WorksSection.tsx # Projects showcase
│   ├── AboutSection.tsx # About & stats
│   ├── ShopSection.tsx  # Services & pricing
│   └── ContactSection.tsx# Contact & footer
└── lib/
    └── utils.ts         # Utility functions
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Santosh Nayak**
- GitHub: [@santoshnaya](https://github.com/santoshnaya)
- Portfolio: Based on Jithin Kumar's design

## 🙏 Acknowledgments

- Original design inspiration: Jithin Kumar Webflow Portfolio
- Icons: Lucide React
- Animations: Framer Motion
- Framework: Next.js team
- Styling: Tailwind CSS

---

⭐ Star this repository if you found it helpful!
