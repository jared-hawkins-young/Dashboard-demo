import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Factory,
  Building,
  Stethoscope,
  ShoppingCart,
  Plane,
  BarChart3,
  Users,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function UseCasesPage() {
  return (
    <>
      <Helmet>
        <title>Use Cases - Industry-Specific SOP Solutions | SOPzilla</title>
        <meta name="description" content="Discover how SOPzilla transforms operations across manufacturing, healthcare, financial services, retail, technology, and more industries." />
        <meta name="keywords" content="SOP use cases, industry applications, manufacturing SOPs, healthcare procedures, financial compliance, retail operations" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800 border-blue-200">
            🏭 Industry Solutions
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            SOPzilla for Every 
            <span className="text-blue-600 block">Industry & Role</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From manufacturing floors to hospital wards, see how organizations across industries 
            use SOPzilla to standardize operations and preserve critical knowledge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700">
                See Industry Examples
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-gray-300">
                Calculate Your ROI
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored for your industry's unique requirements and compliance needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <Factory className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Standardize safety procedures, equipment maintenance, quality control, and regulatory compliance across all facilities.
                </CardDescription>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Safety protocol documentation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Equipment maintenance SOPs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Quality assurance procedures</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>ISO 9001 compliance ready</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded text-sm">
                  <strong>ROI Impact:</strong> 67% reduction in safety incidents, 45% faster onboarding
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <Stethoscope className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle className="text-xl">Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Ensure consistent patient care with standardized medical procedures, emergency protocols, and compliance workflows.
                </CardDescription>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Patient care protocols</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Emergency response procedures</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Medical device operations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>HIPAA compliance workflows</span>
                  </div>
                </div>
                <div className="bg-red-50 p-3 rounded text-sm">
                  <strong>ROI Impact:</strong> 52% improvement in care consistency, 38% faster staff training
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <Building className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Financial Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Navigate complex regulations with automated compliance procedures, audit trails, and risk management protocols.
                </CardDescription>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Regulatory compliance procedures</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Audit preparation workflows</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Risk assessment protocols</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Customer onboarding SOPs</span>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded text-sm">
                  <strong>ROI Impact:</strong> 73% faster audit preparation, 100% compliance rate
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Deliver consistent customer experiences across all locations with standardized store operations and service protocols.
                </CardDescription>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Store opening/closing procedures</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Customer service standards</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Inventory management SOPs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Seasonal procedure updates</span>
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded text-sm">
                  <strong>ROI Impact:</strong> 34% increase in customer satisfaction, 28% reduction in training time
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <Plane className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-xl">Travel & Hospitality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Ensure exceptional guest experiences with comprehensive service protocols, safety procedures, and operational standards.
                </CardDescription>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Guest service protocols</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Safety and security procedures</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Booking and reservation SOPs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Multi-language support</span>
                  </div>
                </div>
                <div className="bg-orange-50 p-3 rounded text-sm">
                  <strong>ROI Impact:</strong> 41% improvement in guest satisfaction, 55% faster staff onboarding
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle className="text-xl">Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Scale operations efficiently with documented development workflows, incident responses, and deployment procedures.
                </CardDescription>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Incident response procedures</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Deployment and release SOPs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Security protocols</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>API integration workflows</span>
                  </div>
                </div>
                <div className="bg-indigo-50 p-3 rounded text-sm">
                  <strong>ROI Impact:</strong> 62% faster incident resolution, 49% reduction in deployment errors
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Role-Based Benefits */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Solutions by Role</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how different roles benefit from SOPzilla's capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-center text-2xl">Operations Managers</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg mb-6">
                  Standardize processes across teams and locations for consistent operations
                </CardDescription>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Process Standardization:</strong> Ensure consistent execution across all teams and locations
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Performance Tracking:</strong> Monitor SOP adoption and identify improvement areas
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Gap Analysis:</strong> Automatically identify missing procedures and process gaps
                    </div>
                  </li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800">"SOPzilla reduced our process variation by 78% across 12 locations"</p>
                  <p className="text-sm text-blue-600 mt-1">- Sarah M., Operations Director</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-center text-2xl">Compliance Officers</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg mb-6">
                  Ensure regulatory adherence with automated compliance documentation
                </CardDescription>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Regulatory Compliance:</strong> Auto-generate compliant SOPs for industry standards
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Audit Readiness:</strong> Maintain complete audit trails and version histories
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Risk Management:</strong> Identify and document risk mitigation procedures
                    </div>
                  </li>
                </ul>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-800">"Passed our ISO audit with zero findings thanks to SOPzilla"</p>
                  <p className="text-sm text-green-600 mt-1">- Mike C., Quality Manager</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-center text-2xl">Training Teams</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg mb-6">
                  Create consistent onboarding materials and training programs
                </CardDescription>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Onboarding Acceleration:</strong> Standardized training materials for faster ramp-up
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Knowledge Retention:</strong> Convert expert knowledge into teachable procedures
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Consistency:</strong> Ensure every new hire learns the same best practices
                    </div>
                  </li>
                </ul>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold text-purple-800">"New employee productivity up 3x faster with SOPzilla training"</p>
                  <p className="text-sm text-purple-600 mt-1">- Lisa R., HR Director</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-center text-2xl">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg mb-6">
                  Document testing procedures and review workflows for consistent quality
                </CardDescription>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Testing Procedures:</strong> Standardize QA processes across all products and services
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Review Workflows:</strong> Create consistent review and approval processes
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Continuous Improvement:</strong> Track and optimize quality metrics
                    </div>
                  </li>
                </ul>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-800">"Quality defects down 85% since implementing SOPzilla"</p>
                  <p className="text-sm text-orange-600 mt-1">- David K., QA Lead</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-24 px-4 bg-blue-600">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Calculate Your ROI</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            See how much time and money SOPzilla can save your organization based on your industry and company size.
          </p>
          
          <div className="bg-white p-8 rounded-lg max-w-md mx-auto mb-8 text-gray-900">
            <h3 className="font-semibold text-lg mb-4">Quick ROI Calculator</h3>
            <div className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium mb-1">Company Size</label>
                <select className="w-full p-2 border rounded">
                  <option>1-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-1000 employees</option>
                  <option>1000+ employees</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Industry</label>
                <select className="w-full p-2 border rounded">
                  <option>Manufacturing</option>
                  <option>Healthcare</option>
                  <option>Financial Services</option>
                  <option>Retail</option>
                  <option>Technology</option>
                  <option>Other</option>
                </select>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Calculate ROI
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100">
                See Industry Examples
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/auth/signin">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
