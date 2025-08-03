# Privoxx - Instant Privacy Solutions

A modern, professional website for Privoxx - offering revolutionary foldable changing solutions for modern India.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with gradient backgrounds
- **Responsive**: Mobile-first design approach
- **Smooth Animations**: Framer Motion and CSS animations
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Analytics**: Google Analytics integration for user tracking
- **Error Handling**: React Error Boundaries for graceful error handling
- **Loading States**: Skeleton loaders and loading spinners
- **Testing**: Comprehensive test suite with Vitest
- **Performance**: Optimized with Vite for fast loading

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: shadcn/ui with Tailwind CSS
- **Backend**: Express.js with Nodemailer
- **Styling**: Tailwind CSS with custom animations
- **Testing**: Vitest + React Testing Library
- **Analytics**: Google Analytics 4
- **Deployment**: Ready for Vercel/Netlify

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Backend Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create environment file
cp env.example .env

# Edit .env file with your email credentials
# MAIL_USER=your-email@gmail.com
# MAIL_PASS=your-app-password

# Start server
npm start
```

## 🔧 Environment Variables

### Backend (.env)
```env
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password
PORT=5000
NODE_ENV=development
```

### Frontend Analytics
Replace `G-XXXXXXXXXX` in `src/App.tsx` with your actual Google Analytics Measurement ID.

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 📊 Analytics

The website includes comprehensive analytics tracking:

- **Page Views**: Automatic tracking of page visits
- **Button Clicks**: Track user interactions with CTA buttons
- **Form Submissions**: Monitor demo booking conversions
- **Scroll Depth**: Track user engagement levels
- **Product Interest**: Monitor product page interactions

## 🎨 Components

### Core Components
- `AnimatedNavbar`: Responsive navigation with mobile drawer
- `HeroSection`: Main landing section with animated content
- `ProductDetails`: Product showcase with media gallery
- `BookingForm`: Demo booking form with validation
- `ScrollingPrivacyBenefits`: Animated benefits section
- `Testimonials`: Customer reviews and testimonials
- `CompanyLeadership`: Team and company information
- `Footer`: Contact and social links

### UI Components
- `ErrorBoundary`: Graceful error handling
- `LoadingSpinner`: Loading states and spinners
- `ContentSkeleton`: Skeleton loading components

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for social sharing
- **Structured Data**: JSON-LD schema markup
- **Open Graph**: Facebook and Twitter sharing optimization
- **Canonical URLs**: Proper URL canonicalization
- **Sitemap**: Ready for search engine indexing

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Optimized images with proper alt tags
- **Lazy Loading**: Components load on demand
- **Bundle Analysis**: Built-in bundle analyzer
- **Caching**: Proper cache headers and strategies

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailwind CSS responsive breakpoints
- **Touch Friendly**: Optimized for touch interactions
- **Accessibility**: WCAG 2.1 AA compliance

## 🔧 Development

### Code Quality
```bash
# Lint code
npm run lint

# Format code (if using prettier)
npm run format
```

### Adding New Components
1. Create component in `src/components/`
2. Add TypeScript interfaces
3. Include loading states
4. Add analytics tracking
5. Write tests in `__tests__/` folder

### Adding New Pages
1. Create page in `src/pages/`
2. Add route in `src/App.tsx`
3. Include SEO meta tags
4. Add analytics tracking

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
```

### Backend (Railway/Render)
```bash
cd server
npm start
```

## 📈 Monitoring

- **Error Tracking**: Error boundaries with analytics
- **Performance**: Core Web Vitals monitoring
- **User Analytics**: Google Analytics 4 integration
- **Form Analytics**: Conversion tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📄 License

This project is proprietary software for Privoxx.

## 📞 Support

For support, email: privoxx.connect@gmail.com

---

**Built with ❤️ for Privoxx**
