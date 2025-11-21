# SOPzilla - AI-Powered SOP Management - Architecture & Component Guidelines

## Project Architecture

### SOPzilla Repository Structure
```
src/
├── components/
│   ├── layout/
│   │   └── PublicLayout.tsx       # Public pages layout with header/footer
│   ├── sections/
│   │   ├── public/               # Public marketing sections
│   │   └── onboarding/           # Onboarding wizard sections
│   ├── system/
│   │   └── ErrorBoundary.tsx     # Global error boundary
│   ├── ui/                       # shadcn/ui components
│   ├── app-sidebar.tsx           # App navigation sidebar
│   ├── site-header.tsx           # App header component
│   ├── nav-main.tsx              # Main navigation component
│   ├── nav-documents.tsx         # Documents navigation
│   ├── nav-secondary.tsx         # Secondary navigation
│   ├── nav-user.tsx              # User navigation menu
│   ├── section-cards.tsx         # Dashboard section cards
│   ├── chart-area-interactive.tsx # Interactive charts
│   ├── data-table.tsx            # Data table component
│   └── VoiceDemo.tsx             # Voice demo component
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
│   ├── onboarding/
│   │   └── ...                   # Onboarding wizard pages
│   └── app/
│       ├── DashboardPage.tsx     # Main authenticated dashboard
│       ├── DashboardPageNew.tsx  # New dashboard implementation
│       ├── UploadPage.tsx        # Document upload
│       ├── EnginePage.tsx        # SOP generation engine
│       ├── KnowledgeBasePage.tsx # Knowledge base management
│       ├── GapsPage.tsx          # Knowledge gaps analysis
│       ├── AccountPage.tsx       # Account management
│       ├── SOPsPage.tsx          # SOP management
│       ├── TemplatesPage.tsx     # SOP templates
│       └── AnalyticsPage.tsx     # Analytics dashboard
├── lib/
│   ├── supabase.ts              # Supabase client
│   ├── supabaseEdge.ts          # Edge functions client
│   ├── auth.ts                  # Authentication utilities
│   ├── auth-new.ts              # New auth implementation
│   ├── utils.ts                 # General utilities
│   ├── api.ts                   # API utilities
│   ├── elevenlabs.ts            # Voice API integration
│   └── bookingTypes.ts          # Booking type definitions
├── hooks/
│   ├── useAuth.ts               # Authentication hook
│   └── use-mobile.ts            # Mobile detection hook
├── types/
│   ├── auth.ts                  # Authentication types
│   ├── agent.ts                 # Agent types
│   └── organization.ts          # Organization types
└── index.css                    # Global styles with CSS variables
```

### SOPzilla Component Hierarchy Details
```
src/components/
├── layout/
│   └── PublicLayout.tsx      # Public pages layout with header/footer
├── sections/
│   ├── public/               # Public marketing sections
│   │   ├── Hero.tsx          # Landing page hero with CTA
│   │   ├── BlogGrid.tsx      # Blog/resources grid
│   │   ├── ContactBlock.tsx  # Contact information
│   │   ├── ContactForm.tsx   # Contact form component
│   │   ├── CTASection.tsx    # Call-to-action sections
│   │   ├── FAQ.tsx           # Frequently asked questions
│   │   ├── FeatureShowcase.tsx # Features showcase
│   │   ├── PricingTiers.tsx  # Pricing tier display
│   │   ├── ProcessTimeline.tsx # Process flow timeline
│   │   ├── ServiceCards.tsx  # Service offerings cards
│   │   ├── TeamShowcase.tsx  # Team member showcase
│   │   └── Testimonials.tsx  # Customer testimonials
│   └── onboarding/           # Onboarding wizard sections
├── system/
│   └── ErrorBoundary.tsx     # Global error boundary
├── app-sidebar.tsx           # Main app navigation sidebar
├── site-header.tsx           # App header component
├── nav-main.tsx              # Main navigation
├── nav-documents.tsx         # Documents navigation
├── nav-secondary.tsx         # Secondary navigation
├── nav-user.tsx              # User menu navigation
├── section-cards.tsx         # Dashboard overview cards
├── chart-area-interactive.tsx # Interactive analytics charts
├── data-table.tsx            # Reusable data table
├── VoiceDemo.tsx             # Voice interaction demo
└── ui/                       # All shadcn/ui components (button, card, table, etc.)
```

### SOPzilla Page Composition Pattern
Pages are composed using SOPzilla specific sections from `@/components/sections/*`:

```tsx
import { Helmet } from "react-helmet";
import { Hero } from "@/components/sections/public/Hero";
import { FeatureShowcase } from "@/components/sections/public/FeatureShowcase";
import { PricingTiers } from "@/components/sections/public/PricingTiers";
// ... other imports

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>SOPzilla - AI-Powered SOP Management Platform</title>
        <meta name="description" content="Transform your business operations with AI-generated Standard Operating Procedures. Streamline processes and ensure consistency across your organization." />
        <link rel="canonical" href="https://sopzilla.com/" />
        {/* Additional SEO meta tags */}
      </Helmet>
      
      <Hero />
      <FeatureShowcase />
      <PricingTiers />
    </>
  );
}
```

---

## SOPzilla Navigation Configuration

### Route Structure
Routes are handled directly in `src/App.tsx` using React Router. The navigation configuration files have been removed in favor of direct routing:

```tsx
// Routes are defined directly in App.tsx
<Routes>
  <Route path="/" element={<PublicLayout><Outlet /></PublicLayout>}>
    <Route index element={<LandingPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="pricing" element={<PricingPage />} />
    <Route path="features" element={<FeaturesPage />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="privacy" element={<PrivacyPage />} />
    <Route path="terms" element={<TermsPage />} />
  </Route>
  
  <Route path="/auth">
    <Route path="signin" element={<SignInPage />} />
    <Route path="signin-email" element={<SignInEmailPage />} />
    <Route path="signup-email" element={<SignUpEmailPage />} />
    <Route path="callback" element={<CallbackPage />} />
  </Route>
  
  <Route path="/app" element={<ProtectedRoute />}>
    <Route path="dashboard" element={<DashboardPage />} />
    <Route path="upload" element={<UploadPage />} />
    <Route path="engine" element={<EnginePage />} />
    <Route path="knowledge-base" element={<KnowledgeBasePage />} />
    <Route path="gaps" element={<GapsPage />} />
    <Route path="account" element={<AccountPage />} />
  </Route>
</Routes>
```

### Adding New SOPzilla Pages
1. Create component in appropriate folder: `src/pages/[category]/NewPage.tsx`
2. Import component in `App.tsx`: `import NewPage from "@/pages/[category]/NewPage";`
3. Add route to appropriate section in App.tsx
4. Update `public/sitemap.xml` with new route (public pages only)
5. Follow the established nested folder structure
6. Ensure proper SEO meta tags for public pages

---

## SOPzilla Component Usage Guidelines

### Available SOPzilla Sections
Based on the planned `src/components/sections/` folder structure:

**Public Marketing Sections:**
- **Hero**: Landing page hero with SOP management CTAs
- **FeatureShowcase**: SOP management features and capabilities
- **PricingTiers**: Subscription pricing display
- **ProcessTimeline**: SOP creation process flow
- **FAQ**: Frequently asked questions about SOP management
- **Testimonials**: Customer success stories
- **ContactForm**: Contact form for sales inquiries

**Dashboard Sections:**
- **SectionCards**: Dashboard overview cards with metrics
- **ChartAreaInteractive**: Interactive analytics charts

**Onboarding Sections:**
- Various wizard components for user onboarding

### SOPzilla Components
Core application components:
- **DataTable**: Reusable data table with sorting and filtering
- **VoiceDemo**: Voice interaction demonstration
### SOPzilla Navigation Components
Navigation components for the application:
- **AppSidebar**: Main sidebar navigation for authenticated users
- **SiteHeader**: Top header for authenticated app pages
- **NavMain**: Primary navigation menu
- **NavDocuments**: Document-specific navigation
- **NavSecondary**: Secondary navigation items
- **NavUser**: User profile and account navigation

### Component Props
- Always check prop types in `src/components/sections/*`
- Use existing sections exactly as typed
- Don't modify component interfaces
- Follow established patterns

### Layout Principles - CRITICAL STYLING RULES

**🚫 ABSOLUTELY FORBIDDEN: Hard Borders on Layout Containers**
- **NEVER** use `border`, `border-*`, `outline`, or any hard line borders on layout containers
- **NEVER** use `border-t`, `border-b`, `border-l`, `border-r` on sections, divs, or layout elements
- **NEVER** use `ring-*` classes for layout separation

**✅ APPROVED: Spacing and Visual Separation Techniques**
- Use spacing (`gap-*`, `p-*`, `m-*`, `space-y-*`, `space-x-*`) for separation
- Apply shadows (`shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`) for depth
- Use rounded corners (`rounded-*`) for modern appearance
- Implement background tokens:
  - `bg-background` - Main background color
  - `bg-muted` - Subtle background for sections
  - `bg-muted/50` - Semi-transparent muted background
  - `bg-card` - Card backgrounds
  - `bg-accent` - Accent sections
- Use gradients for visual interest:
  - `bg-gradient-to-*` with theme colors
  - Linear gradients with muted colors
- Use opacity and transparency for layering:
  - `bg-opacity-*` or `/50` syntax for transparency

**Visual Hierarchy Without Borders:**
- Different background colors/shades for section separation
- Consistent padding and margin patterns
- Shadow depth to create layers
- Typography scale for content hierarchy
- Color contrast using theme tokens

---

## SOPzilla Pages Structure

### SOPzilla Pages
All pages are in `src/pages/` organized by purpose and use react-helmet for SEO:

**Public Pages** (`src/pages/public/`):
- **LandingPage.tsx**: Main marketing landing page with Hero, Features, Pricing
- **AboutPage.tsx**: Company information and SOP management details
- **PricingPage.tsx**: Detailed pricing page with subscription tiers
- **FeaturesPage.tsx**: Comprehensive features showcase
- **ContactPage.tsx**: Contact form for sales inquiries and support
- **PrivacyPage.tsx**: Privacy policy page
- **TermsPage.tsx**: Terms of service page

**Authentication Pages** (`src/pages/auth/`):
- **SignInPage.tsx**: Main authentication sign in page
- **SignInEmailPage.tsx**: Email-based sign in
- **SignUpEmailPage.tsx**: Email-based registration
- **CallbackPage.tsx**: OAuth callback handler with loading state

**Onboarding Pages** (`src/pages/onboarding/`):
- Various onboarding wizard components for new users

**Application Pages** (`src/pages/app/`):
- **DashboardPage.tsx**: Main authenticated dashboard with overview
- **DashboardPageNew.tsx**: New dashboard implementation
- **UploadPage.tsx**: Document upload and processing
- **EnginePage.tsx**: AI SOP generation engine
- **KnowledgeBasePage.tsx**: Knowledge base management
- **GapsPage.tsx**: Knowledge gap analysis and reporting
- **AccountPage.tsx**: User account and billing management
- **SOPsPage.tsx**: SOP management and organization
- **TemplatesPage.tsx**: SOP templates library
- **AnalyticsPage.tsx**: Usage analytics and reporting

### SOPzilla User Flow
1. **Landing Page** → Sign up → **Onboarding** (first-time users)
2. **Landing Page** → Sign in → **Dashboard** (returning users)
3. **Protected App** with sidebar navigation between Dashboard, Upload, Engine, Knowledge Base, etc.
4. **SOP Management** workflow: Upload → Generate → Review → Organize

### SOPzilla Page Composition Pattern
SOPzilla pages are composed using sections from `@/components/sections/[category]/*`:

```tsx
import { Helmet } from "react-helmet";
import { Hero } from "@/components/sections/public/Hero";
import { FeatureShowcase } from "@/components/sections/public/FeatureShowcase";
import { PricingTiers } from "@/components/sections/public/PricingTiers";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>SOPzilla - AI-Powered SOP Management Platform</title>
        <meta name="description" content="Transform your business operations with AI-generated Standard Operating Procedures. Streamline processes and ensure consistency." />
        <link rel="canonical" href="https://sopzilla.com/" />
        <meta property="og:title" content="SOPzilla - SOP Management Platform" />
        <meta property="og:description" content="AI-powered SOP generation and management" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Hero />
      <FeatureShowcase />
      <PricingTiers />
    </>
  );
}
```

```tsx
// Dashboard page example
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SectionCards } from "@/components/section-cards";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <SectionCards />
        {/* Dashboard content */}
      </SidebarInset>
    </SidebarProvider>
  );
}
```

---

## SOPzilla State Management
- Use React's built-in state (`useState`, `useEffect`) for component-level data
- Custom hooks in `src/hooks/` for SOPzilla specific stateful logic:
  - `useAuth.ts` - Authentication state and user management
  - `use-mobile.ts` - Mobile device detection
- Supabase client for authentication and database operations
- Edge functions for AI processing and SOP generation
- Local state for UI interactions and form management

## SOPzilla Styling & Theme System
- **CSS Variables**: All theming handled through CSS variables in `index.css`
- **Color System**: Uses oklch color space for consistent theming
  - `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`
  - `--chart-1` through `--chart-5` for data visualization
  - `--background`, `--foreground`, `--card`, `--border`
- **Dark Mode**: Automatic theme switching via CSS variables
- **No Hardcoded Colors**: All components must use CSS variable classes
- **Component Styling**: Use Tailwind classes with theme variables

## SOPzilla Performance Considerations
- Use responsive images with proper `srcSet` and sizing for marketing pages
- Implement efficient data fetching patterns for SOP management
- Optimize dashboard components with proper React patterns (memo, useMemo, useCallback)
- Keep bundle size optimized through tree-shaking
- Implement proper loading states for authentication flows
- Cache user and organization data appropriately
- Lazy load heavy components like charts and tables

## SOPzilla File Organization Best Practices
- Follow the strict nested folder structure for SOPzilla components
- Separate public, auth, onboarding, and app concerns clearly
- Use TypeScript for all components with SOPzilla specific types
- Import paths use `@/` alias for clean imports from src/
- Group SOPzilla functionality in appropriate nested folders
- Use consistent naming conventions (PascalCase for components, camelCase for utilities)
- Maintain clear separation between marketing and application concerns
- **No config files**: Routes handled directly in App.tsx, theming via CSS
