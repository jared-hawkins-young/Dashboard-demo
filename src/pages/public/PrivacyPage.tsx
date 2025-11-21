import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

/**
 * PrivacyPage - Comprehensive privacy policy for Voice Agent platform
 * Owner: Lost Star Technology
 */
export default function PrivacyPage() {
  const lastUpdated = "January 1, 2024"

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Voice Agent</title>
        <meta name="description" content="Privacy Policy for Voice Agent by Lost Star Technology. Learn how we collect, use, and protect your data." />
        <link rel="canonical" href="https://voiceagent.com/privacy" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Lost Star Technology ("we," "our," or "us") operates the Voice Agent platform (the "Service"). 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                  you use our AI voice agent services, website, and related applications.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1.1 Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><strong>Account Information:</strong> Name, email address, phone number, business information</li>
                  <li><strong>Business Data:</strong> Restaurant/business details, operating hours, menu information, pricing</li>
                  <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party providers)</li>
                  <li><strong>Configuration Data:</strong> AI agent settings, custom responses, business rules</li>
                  <li><strong>Communication:</strong> Messages sent through our platform, support requests, feedback</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">1.2 Information We Collect Automatically</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><strong>Call Data:</strong> Phone calls handled by AI agents, call recordings, transcripts, call metadata</li>
                  <li><strong>Usage Information:</strong> How you interact with our Service, features used, time spent</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong>Log Data:</strong> Server logs, error reports, performance metrics</li>
                  <li><strong>Analytics Data:</strong> User behavior, conversion rates, system performance</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">1.3 Third-Party Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Authentication:</strong> Information from Google OAuth if you sign in with Google</li>
                  <li><strong>Integrations:</strong> Data from connected services (phone systems, CRM platforms)</li>
                  <li><strong>Public Information:</strong> Publicly available business information for verification</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1 Service Provision</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Operate and maintain AI voice agents for your business</li>
                  <li>Process and respond to customer calls automatically</li>
                  <li>Provide real-time call monitoring and analytics</li>
                  <li>Generate call reports and business insights</li>
                  <li>Facilitate reservations, bookings, and customer service</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2 Improvement and Personalization</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Train and improve AI models and voice recognition</li>
                  <li>Customize AI responses to your business needs</li>
                  <li>Analyze call patterns to optimize performance</li>
                  <li>Develop new features and capabilities</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">2.3 Communication and Support</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Provide customer support and technical assistance</li>
                  <li>Send service notifications and updates</li>
                  <li>Respond to inquiries and requests</li>
                  <li>Send marketing communications (with consent)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">2.4 Legal and Security</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Comply with legal obligations and regulations</li>
                  <li>Protect against fraud, abuse, and security threats</li>
                  <li>Enforce our Terms of Service</li>
                  <li>Respond to legal requests and court orders</li>
                </ul>
              </div>

              {/* Call Recording and AI Training */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Call Recording and AI Training</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <p className="text-blue-900 font-semibold mb-2">Important Notice:</p>
                  <p className="text-blue-800">
                    By using our Service, you acknowledge that calls may be recorded and used to train our AI systems. 
                    You are responsible for complying with applicable call recording laws in your jurisdiction and 
                    obtaining necessary consent from callers.
                  </p>
                </div>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Call recordings are used to improve AI accuracy and performance</li>
                  <li>Recordings may be analyzed to identify patterns and optimize responses</li>
                  <li>Personal information in recordings is anonymized when possible</li>
                  <li>You can disable call recording in your account settings</li>
                  <li>Recordings are retained according to our data retention policy</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">4. How We Share Your Information</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">4.1 Service Providers</h3>
                <p className="text-gray-700 mb-4">
                  We share information with trusted third-party service providers who assist in operating our Service:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><strong>Cloud Infrastructure:</strong> AWS, Google Cloud, Microsoft Azure</li>
                  <li><strong>Payment Processing:</strong> Stripe, PayPal (PCI DSS compliant)</li>
                  <li><strong>Communication:</strong> Twilio, SendGrid for voice and email services</li>
                  <li><strong>Analytics:</strong> Google Analytics, Mixpanel (anonymized data)</li>
                  <li><strong>Support:</strong> Zendesk, Intercom for customer service</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">4.2 Business Transfers</h3>
                <p className="text-gray-700 mb-6">
                  If Lost Star Technology is involved in a merger, acquisition, or sale of assets, 
                  your information may be transferred as part of that transaction.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">4.3 Legal Requirements</h3>
                <p className="text-gray-700 mb-6">
                  We may disclose information when required by law, court order, or to protect our rights, 
                  safety, or the rights of others.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">4.4 With Your Consent</h3>
                <p className="text-gray-700">
                  We may share information for other purposes with your explicit consent.
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement comprehensive security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Encryption:</strong> Data encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                  <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication</li>
                  <li><strong>Monitoring:</strong> 24/7 security monitoring and incident response</li>
                  <li><strong>Compliance:</strong> SOC 2 Type II, GDPR, and industry best practices</li>
                  <li><strong>Regular Audits:</strong> Security assessments and penetration testing</li>
                  <li><strong>Data Minimization:</strong> Collect and retain only necessary information</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Your Rights and Choices</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">6.1 Account Management</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Update your account information and preferences</li>
                  <li>Control AI agent settings and configurations</li>
                  <li>Enable or disable call recording</li>
                  <li>Manage notification preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">6.2 Data Rights (GDPR/CCPA)</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                  <li><strong>Objection:</strong> Object to certain uses of your information</li>
                  <li><strong>Restriction:</strong> Request limitation of processing</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">6.3 Marketing Communications</h3>
                <p className="text-gray-700">
                  You can opt out of marketing emails by clicking the unsubscribe link or contacting us. 
                  You'll continue to receive essential service communications.
                </p>
              </div>

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Data Retention</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Account Data:</strong> Retained while your account is active</li>
                  <li><strong>Call Recordings:</strong> 90 days by default (configurable up to 7 years)</li>
                  <li><strong>Analytics Data:</strong> Aggregated data retained for 5 years</li>
                  <li><strong>Billing Information:</strong> 7 years for tax and accounting purposes</li>
                  <li><strong>Deleted Accounts:</strong> Personal data deleted within 30 days</li>
                  <li><strong>Legal Holds:</strong> Data retained longer if required by law</li>
                </ul>
              </div>

              {/* International Transfers */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">8. International Data Transfers</h2>
                <p className="text-gray-700 mb-4">
                  Lost Star Technology is based in the United States. If you're located outside the US, 
                  your information may be transferred to and processed in the US or other countries where 
                  our service providers operate.
                </p>
                <p className="text-gray-700">
                  We ensure appropriate safeguards are in place for international transfers, including 
                  Standard Contractual Clauses and adequacy decisions where applicable.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Children's Privacy</h2>
                <p className="text-gray-700">
                  Our Service is not intended for individuals under 18 years of age. We do not knowingly 
                  collect personal information from children under 18. If you become aware that a child 
                  has provided us with personal information, please contact us, and we will take steps 
                  to remove such information.
                </p>
              </div>

              {/* Changes to Privacy Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any material 
                  changes by posting the new Privacy Policy on this page and updating the "Last updated" 
                  date. For significant changes, we may also send email notifications.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-900 font-semibold mb-2">Lost Star Technology</p>
                  <p className="text-gray-700 mb-1">Privacy Officer</p>
                  <p className="text-gray-700 mb-1">Email: privacy@loststar.tech</p>
                  <p className="text-gray-700 mb-1">Phone: (555) 123-4567</p>
                  <p className="text-gray-700 mb-3">
                    Address: 123 Tech Street, Suite 456<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                  <p className="text-gray-700">
                    <strong>Data Protection Officer (EU):</strong> dpo@loststar.tech
                  </p>
                </div>
              </div>

              {/* Back to Top */}
              <div className="text-center pt-8 border-t border-gray-200">
                <Link 
                  to="/" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  ← Return to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
