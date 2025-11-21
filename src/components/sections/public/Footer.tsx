import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

interface FooterLink {
  label: string
  href: string
  external?: boolean
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  companyName?: string
  description?: string
  sections?: FooterSection[]
  contactInfo?: {
    email?: string
    phone?: string
    address?: string
  }
  socialLinks?: {
    twitter?: string
    linkedin?: string
    facebook?: string
  }
  showNewsletter?: boolean
}

const defaultSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Demo", href: "/demo" },
      { label: "API Documentation", href: "/docs", external: true }
    ]
  },
  {
    title: "Company", 
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers", external: true },
      { label: "Press Kit", href: "/press", external: true }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help", external: true },
      { label: "System Status", href: "/status", external: true },
      { label: "Security", href: "/security" },
      { label: "Privacy Policy", href: "/privacy" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "GDPR", href: "/gdpr" }
    ]
  }
]

export function Footer({
  companyName = "SOPzilla",
  description = "AI-powered Standard Operating Procedure management platform. Streamline your business operations with intelligent SOP creation and management.",
  sections = defaultSections,
  contactInfo = {
    email: "hello@sopzilla.com",
    phone: "(555) 123-4567",
    address: "123 Business Blvd, Suite 100, Innovation City, IC 12345"
  },
  socialLinks = {
    twitter: "https://twitter.com/sopzilla",
    linkedin: "https://linkedin.com/company/sopzilla"
  },
  showNewsletter = true
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-chart-1 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SZ</span>
              </div>
              <span className="font-bold text-xl">{companyName}</span>
            </div>
            
            <p className="text-muted-foreground max-w-md">
              {description}
            </p>

            {/* Contact info */}
            <div className="space-y-2 text-sm">
              {contactInfo.email && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-foreground">
                    {contactInfo.email}
                  </a>
                </div>
              )}
              
              {contactInfo.phone && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-foreground">
                    {contactInfo.phone}
                  </a>
                </div>
              )}
              
              {contactInfo.address && (
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>{contactInfo.address}</span>
                </div>
              )}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.twitter && (
                <a 
                  href={socialLinks.twitter} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Footer sections */}
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        {showNewsletter && (
          <div className="border-t border-border pt-8 mb-8">
            <div className="max-w-md">
              <h3 className="font-semibold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get the latest news and updates about SOP management and AI-powered business operations.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © {currentYear} {companyName}. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/cookies" className="hover:text-foreground">Cookies</Link>
            <span>Made with ❤️ in the USA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
