# SOPzilla - AI-Powered SOP Management Platform - Coding Standards & Guidelines

## Project Structure Requirements

### **CURRENT PROJECT STRUCTURE**
All files follow this organization (cleaned and optimized):

```
src/
├── components/
│   ├── layout/
│   │   └── PublicLayout.tsx       # Public pages layout with header/footer
│   ├── sections/
│   │   ├── public/                # Marketing sections
│   │   │   ├── Hero.tsx           # Landing page hero
│   │   │   ├── FeatureShowcase.tsx # Features showcase
│   │   │   ├── PricingTiers.tsx   # Pricing section
│   │   │   ├── ProcessTimeline.tsx # Process flow
│   │   │   ├── FAQ.tsx            # Frequently asked questions
│   │   │   ├── Testimonials.tsx   # Customer testimonials
│   │   │   ├── ContactForm.tsx    # Contact form
│   │   │   └── ...               # Other marketing sections
│   │   └── onboarding/            # Onboarding wizard sections
│   ├── system/
│   │   └── ErrorBoundary.tsx     # Global error boundary
│   ├── ui/                       # shadcn/ui components
│   ├── app-sidebar.tsx           # Main app navigation sidebar
│   ├── site-header.tsx           # Application header
│   ├── nav-main.tsx              # Main navigation
│   ├── nav-documents.tsx         # Documents navigation
│   ├── nav-secondary.tsx         # Secondary navigation
│   ├── nav-user.tsx              # User menu
│   ├── section-cards.tsx         # Dashboard overview cards
│   ├── chart-area-interactive.tsx # Interactive charts
│   ├── data-table.tsx            # Reusable data table
│   └── VoiceDemo.tsx             # Voice interaction demo
├── pages/
│   ├── public/
│   │   ├── LandingPage.tsx       # Main marketing landing page
│   │   ├── AboutPage.tsx         # Company information
│   │   ├── PricingPage.tsx       # Detailed pricing page
│   │   ├── FeaturesPage.tsx      # Features showcase
│   │   ├── ContactPage.tsx       # Contact form page
│   │   ├── PrivacyPage.tsx       # Privacy policy
│   │   └── TermsPage.tsx         # Terms of service
│   ├── auth/
│   │   ├── SignInPage.tsx        # Authentication sign in
│   │   ├── SignInEmailPage.tsx   # Email sign in
│   │   ├── SignUpEmailPage.tsx   # Email sign up
│   │   └── CallbackPage.tsx      # Auth callback handler
│   ├── onboarding/               # User onboarding flow
│   └── app/
│       ├── DashboardPage.tsx     # Main authenticated dashboard
│       ├── DashboardPageNew.tsx  # New dashboard implementation
│       ├── UploadPage.tsx        # Document upload
│       ├── EnginePage.tsx        # AI SOP generation
│       ├── KnowledgeBasePage.tsx # Knowledge base management
│       ├── GapsPage.tsx          # Knowledge gap analysis
│       ├── AccountPage.tsx       # Account management
│       ├── SOPsPage.tsx          # SOP management
│       ├── TemplatesPage.tsx     # SOP templates
│       └── AnalyticsPage.tsx     # Analytics dashboard
├── lib/
│   ├── supabase.ts              # Supabase client
│   ├── supabaseEdge.ts          # Edge functions client
│   ├── auth.ts                  # Authentication utilities
│   ├── auth-new.ts              # New auth implementation
│   ├── api.ts                   # API utilities
│   ├── utils.ts                 # General utilities
│   └── bookingTypes.ts          # Booking type definitions
├── hooks/
│   ├── useAuth.ts               # Authentication hook
│   └── use-mobile.ts            # Mobile detection hook
├── types/
│   ├── auth.ts                  # Authentication types
│   ├── agent.ts                 # Legacy types (to be cleaned)
│   └── organization.ts          # Organization types
└── index.css                    # Global styles with CSS variables
```

## Development Roadmap - SOPzilla COMPLETE

### **Phase 1: Foundation & Auth** ✅ COMPLETE
- [x] Update App.tsx with SOPzilla routing structure
- [x] Create authentication utilities in `src/lib/auth.ts`
- [x] Create base layout components (`PublicLayout.tsx`)
- [x] Create authentication pages (`SignInPage.tsx`, `SignInEmailPage.tsx`, `SignUpEmailPage.tsx`, `CallbackPage.tsx`)
- [x] Implement CSS variables theming system
- **Checkpoint**: ✅ Authentication flow works end-to-end

### **Phase 2: Public Marketing Site** ✅ COMPLETE
- [x] `src/pages/public/LandingPage.tsx` - Hero, features, SOP management CTA
- [x] `src/pages/public/AboutPage.tsx` - Company information and SOP technology
- [x] `src/pages/public/PricingPage.tsx` - SOP management pricing tiers
- [x] `src/pages/public/FeaturesPage.tsx` - Features showcase
- [x] `src/pages/public/ContactPage.tsx` - Contact form for sales
- [x] `src/pages/public/PrivacyPage.tsx` - Privacy policy
- [x] `src/pages/public/TermsPage.tsx` - Terms of service
- [x] `src/components/sections/public/` - All marketing sections
- [x] SEO optimization (meta tags, structured data)
- **Checkpoint**: ✅ Complete marketing funnel for SOP platform

### **Phase 3: Core Dashboard & Navigation** ✅ COMPLETE
- [x] `src/pages/app/DashboardPage.tsx` - Main authenticated dashboard
- [x] `src/pages/app/DashboardPageNew.tsx` - Enhanced dashboard
- [x] `src/components/app-sidebar.tsx` - Main navigation sidebar
- [x] `src/components/site-header.tsx` - Application header
- [x] `src/components/nav-*.tsx` - Navigation components
- [x] Dashboard metrics and overview cards
- **Checkpoint**: ✅ Navigation and dashboard working seamlessly

### **Phase 4: SOP Management Pages** ✅ COMPLETE
- [x] `src/pages/app/UploadPage.tsx` - Document upload and processing
- [x] `src/pages/app/EnginePage.tsx` - AI SOP generation engine
- [x] `src/pages/app/KnowledgeBasePage.tsx` - Knowledge base management
- [x] `src/pages/app/GapsPage.tsx` - Knowledge gap analysis
- [x] `src/pages/app/SOPsPage.tsx` - SOP management and organization
- [x] `src/pages/app/TemplatesPage.tsx` - SOP templates library
- [x] `src/pages/app/AnalyticsPage.tsx` - Usage analytics
- **Checkpoint**: ✅ Complete SOP management workflow

### **Phase 5: User Management & Settings** ✅ COMPLETE
- [x] `src/pages/app/AccountPage.tsx` - User account and billing management
- [x] User profile management and team settings
- [x] Organization configuration and preferences
- [x] Usage tracking and analytics integration
- **Checkpoint**: ✅ Complete user and account management

### **Phase 6: Polish & Optimization** ✅ COMPLETE
- [x] CSS variables implementation across all components
- [x] Remove hardcoded colors and use theme system
- [x] Dark/light mode consistency
- [x] Component cleanup and legacy file removal
- [x] Performance optimization and error handling
- **Checkpoint**: ✅ Production-ready SOPzilla platform

## File Modification Rules

### ✅ **ALLOWED FILES FOR SOPzilla PROJECT**

**Core Application Files:**
- `src/App.tsx` - Main application component with SOPzilla routing
- `src/main.tsx` - Application entry point
- `src/index.css` - Global CSS variables and theming

**SOPzilla Structure (MUST FOLLOW STRUCTURE ABOVE):**
- `src/lib/**/*.ts` - Utilities, API clients, auth helpers, database types
- `src/hooks/**/*.ts` - Custom React hooks for SOP management features
- `src/types/**/*.ts` - TypeScript definitions for SOPzilla domain
- `src/components/**/*.tsx` - ALL component files following nested structure
- `src/pages/**/*.tsx` - ALL page components following nested structure

**Configuration & Assets:**
- `public/sitemap.xml` - SEO sitemap
- `public/robots.txt` - SEO robots file
- `package.json` - Dependencies for SOPzilla features
- `vite.config.ts` - Build configuration
- `components.json` - shadcn/ui configuration

### ❌ **PROHIBITED ACTIONS**
- Do **not** run scripts or configure CI/CD
- Do **not** modify ESLint or TypeScript configuration files
- Do **not** modify other tooling configurations not listed above

## STRICT DEVELOPMENT RULES

### **SOPzilla DEVELOPMENT COMPLIANCE**
- **ALL PHASES COMPLETE**: SOPzilla is production-ready
- **MAINTAIN STRUCTURE**: Follow the established nested folder structure
- **CSS VARIABLES ONLY**: Use theme system, no hardcoded colors
- **CLEAN CODEBASE**: Legacy files removed, optimized architecture
- **THEME CONSISTENCY**: Dark/light mode works across all components

### **SOPzilla ARCHITECTURE REQUIREMENTS**
```typescript
// Required data hierarchy: User -> Organization -> Departments -> SOPs
interface Organization {
  id: string;
  name: string;
  departments: Department[];
  settings: OrganizationSettings;
}

interface Department {
  id: string;
  organizationId: string;
  name: string;
  description: string;
  sops: SOP[];
}

interface SOP {
  id: string;
  departmentId: string;
  title: string;
  content: string;
  status: 'draft' | 'published' | 'archived';
  createdAt: Date;
  updatedAt: Date;
}
```

### **SOPzilla BUSINESS MODEL**
- **Subscription-based SaaS**: Multiple tiers based on team size and features
- **Target Market**: Small to medium businesses across all industries
- **Features**: AI-powered SOP generation, knowledge base management, gap analysis

---

## Code Style Guidelines

### Import Standards
```tsx
// Use absolute imports with @ alias
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";

// React Router for navigation
import { Link } from "react-router-dom";
```

### Component Structure
```tsx
export default function PageName() {
  return (
    <>
      <Helmet>
        {/* SEO meta tags */}
      </Helmet>
      
      {/* Page sections */}
    </>
  );
}
```

### TypeScript Requirements
- Always use TypeScript for new files
- Maintain strict type checking
- Use existing type definitions
- No `any` types without justification

### Styling Rules - SOPzilla Theme System

**✅ REQUIRED - CSS Variables Theme System:**
- **ALWAYS** use CSS variables defined in `index.css`
- **PRIMARY COLORS**: `bg-primary`, `text-primary`, `border-primary`
- **BACKGROUND SYSTEM**: `bg-background`, `bg-muted`, `bg-card`, `bg-accent`
- **TEXT HIERARCHY**: `text-foreground`, `text-muted-foreground`, `text-accent-foreground`
- **INTERACTIVE STATES**: `hover:bg-accent`, `focus:ring-ring`

**🚫 FORBIDDEN - Hardcoded Colors:**
- **NEVER** use hardcoded hex colors (e.g., `#3B82F6`, `bg-blue-600`)
- **NEVER** use raw Tailwind color classes (e.g., `text-blue-800`, `bg-gray-100`)
- **NEVER** mix theme variables with hardcoded colors
- **NEVER** override CSS variables without updating the theme system

**✅ VISUAL SEPARATION TECHNIQUES:**
- Use spacing classes: `gap-*`, `p-*`, `m-*`, `space-y-*`, `space-x-*`
- Apply shadows for depth: `shadow-sm`, `shadow-md`, `shadow-lg`
- Use rounded corners: `rounded-*` classes for modern appearance
- Implement theme backgrounds for section separation:
  - `bg-background` - Main page background
  - `bg-muted` - Subtle section backgrounds
  - `bg-card` - Card and panel containers
  - `bg-accent` - Accent sections and highlights

**Theme Consistency Requirements:**
- Dark/light mode must work seamlessly across all components
- Chart colors use CSS variables: `hsl(var(--chart-1))` through `hsl(var(--chart-5))`
- Interactive elements use `hover:` and `focus:` states with theme variables
- All components follow the established design system

### Router Requirements
- **Must use `react-router-dom`**
- No Next.js APIs or imports
- Use `<Link>` components for navigation
- Maintain consistent routing patterns

---

## Content Guidelines

### Marketing Copy - SOPzilla Focused
- **Tone**: Professional and solution-oriented
- Focus on operational efficiency and process improvement
- Highlight AI-powered SOP generation capabilities
- Emphasize knowledge management and gap analysis benefits
- Use action-oriented language around process optimization

### Images
- Unsplash URLs are allowed and encouraged
- Use descriptive `alt` text related to business operations
- Include relevant SOP and process management keywords
- Ensure images are responsive and theme-compatible

### Security
- No secrets, API keys, or private URLs
- Keep all content public-safe
- Use placeholder contact information for demos
- Avoid sensitive business data in examples
- Maintain data privacy best practices for SOP content
