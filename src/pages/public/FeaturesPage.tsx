import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Brain, 
  Users, 
  Zap, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Eye,
  GitBranch,
  Code,
  Lock,
  BarChart3,
  MessageSquare
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <>
      <Helmet>
        <title>Features - AI-Powered SOP Creation & Management | SOPzilla</title>
        <meta name="description" content="Discover SOPzilla's powerful features: AI-powered SOP generation, knowledge gap detection, collaborative management, and enterprise integration capabilities." />
        <meta name="keywords" content="SOP features, AI documentation, gap detection, collaborative editing, version control, enterprise integration" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
            🚀 Complete SOP Management Platform
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Powerful Features for 
            <span className="text-primary block">Modern SOP Management</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Everything you need to create, manage, and optimize your Standard Operating Procedures 
            with AI-powered intelligence and collaborative workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                Try These Features Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-border">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI-Powered SOP Generation */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">AI-Powered SOP Generation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform any business content into structured, professional SOPs in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Smart Content Extraction</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-chart-1/20 rounded-full p-3 flex items-center justify-center flex-shrink-0 border border-chart-1/30">
                    <FileText className="h-6 w-6 text-chart-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">Multi-Format Input Support</h4>
                    <p className="text-muted-foreground">Upload transcripts, audio recordings, video files, PDFs, or existing documents. Our AI processes them all.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-chart-3/20 rounded-full p-3 flex items-center justify-center flex-shrink-0 border border-chart-3/30">
                    <Brain className="h-6 w-6 text-chart-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">Intelligent Structure Recognition</h4>
                    <p className="text-muted-foreground">AI automatically identifies processes, procedures, and workflows within your content.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-chart-5/20 rounded-full p-3 flex items-center justify-center flex-shrink-0 border border-chart-5/30">
                    <Zap className="h-6 w-6 text-chart-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-foreground">Automated Organization</h4>
                    <p className="text-muted-foreground">Content is automatically organized into logical sections, steps, and sub-procedures.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border shadow-lg">
              <div className="bg-background p-6 rounded-lg shadow-sm mb-4 border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-chart-4 rounded-full"></div>
                  <div className="w-3 h-3 bg-chart-5 rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground mb-2">📁 Input: Meeting Recording</div>
                <div className="text-xs text-muted-foreground mb-4">"So the customer onboarding process starts when they sign up..."</div>
                
                <div className="border-l-4 border-primary pl-4">
                  <div className="font-semibold text-sm mb-2 text-foreground">📋 Generated SOP: Customer Onboarding</div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>1. Initial Contact & Welcome</div>
                    <div>2. Account Setup Process</div>
                    <div>3. Documentation Collection</div>
                    <div>4. System Training & Access</div>
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-muted-foreground">AI Processing in Action</div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Gap Detection */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Knowledge Gap Detection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Never miss critical processes or operational blind spots with AI-powered analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-center">Automated Gap Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  AI scans your existing SOPs and identifies missing procedures, incomplete steps, and potential process gaps.
                </CardDescription>
                <ul className="mt-4 text-sm text-gray-600 space-y-2 text-left">
                  <li>• Missing decision points</li>
                  <li>• Incomplete workflows</li>
                  <li>• Undefined responsibilities</li>
                  <li>• Missing documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-center">Severity Ranking</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Gaps are automatically prioritized based on impact, frequency, and risk to help you focus on what matters most.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="bg-red-100 p-2 rounded text-sm">🔴 Critical: Safety procedures</div>
                  <div className="bg-yellow-100 p-2 rounded text-sm">🟡 Medium: Process delays</div>
                  <div className="bg-green-100 p-2 rounded text-sm">🟢 Low: Documentation gaps</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-center">Resolution Tracking</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Track progress on closing gaps with automated reporting and team collaboration features.
                </CardDescription>
                <div className="mt-4 bg-gray-100 p-4 rounded">
                  <div className="text-sm font-medium mb-2">Gap Resolution Progress</div>
                  <div className="bg-green-500 h-2 rounded" style={{width: '75%'}}></div>
                  <div className="text-xs text-gray-600 mt-1">15 of 20 gaps resolved</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaborative Management */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Collaborative Management</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enable seamless teamwork with powerful collaboration and workflow management tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Team Editing & Review Workflows</h4>
                  <p className="text-gray-600">Multiple team members can collaborate on SOPs with real-time editing, comments, and approval workflows.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-full p-3 flex items-center justify-center flex-shrink-0">
                  <GitBranch className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Version Control & Audit Trails</h4>
                  <p className="text-gray-600">Complete history of changes with who made what modifications and when, ensuring compliance and accountability.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-3 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Department-Based Organization</h4>
                  <p className="text-gray-600">Organize SOPs by department, role, or function with appropriate access controls and permissions.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Sample Workflow</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600">1</div>
                  <div className="text-sm">Sarah creates draft SOP</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-sm font-semibold text-yellow-600">2</div>
                  <div className="text-sm">Mike reviews and adds comments</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-sm font-semibold text-purple-600">3</div>
                  <div className="text-sm">Lisa makes revisions</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-semibold text-green-600">4</div>
                  <div className="text-sm">Manager approves for deployment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Integration */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise Integration</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Seamlessly integrate with your existing tools and workflows for maximum efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-center">API Access</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-4">
                  Full REST API access for custom integrations and automated workflows.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>• Create SOPs programmatically</li>
                  <li>• Export to existing systems</li>
                  <li>• Automated reporting</li>
                  <li>• Custom dashboards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Lock className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-center">SSO & Security</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-4">
                  Enterprise-grade security with Single Sign-On and advanced access controls.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>• SAML 2.0 / OAuth integration</li>
                  <li>• Role-based permissions</li>
                  <li>• SOC 2 Type II compliant</li>
                  <li>• Data encryption at rest</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-center">Bulk Processing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-4">
                  Process large volumes of content efficiently with enterprise-scale capabilities.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>• Batch file processing</li>
                  <li>• Automated workflows</li>
                  <li>• Priority processing queues</li>
                  <li>• Dedicated support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Demo CTA */}
      <section className="py-24 px-4 bg-blue-600">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Experience SOPzilla in Action</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            See how these powerful features work together to transform your business operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/demo">
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100">
                Try Interactive Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Live Demo
              </Button>
            </Link>
          </div>
          
          <p className="text-sm opacity-75">
            No signup required for interactive demo • Full platform access in live demo
          </p>
        </div>
      </section>
    </>
  );
}
