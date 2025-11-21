import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction and Acceptance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Lost Star Technology's AI Voice Agent platform ("Service"). These Terms of Service ("Terms") 
                constitute a legally binding agreement between you ("Customer," "you," or "your") and Lost Star Technology 
                ("Company," "we," "us," or "our").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing, using, or registering for our Service, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms. If you do not agree to these Terms, you may not use our Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms apply to all users of the Service, including businesses, organizations, and individuals 
                who access or use our AI voice agent technology for customer service automation.
              </p>
            </section>

            {/* Service Description */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lost Star Technology provides an AI-powered voice agent platform that enables businesses to automate 
                customer interactions through intelligent voice technology. Our Service includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>AI voice agents for customer service automation</li>
                <li>Call management and routing capabilities</li>
                <li>Real-time call monitoring and analytics</li>
                <li>Multi-location support for businesses</li>
                <li>Integration tools and APIs</li>
                <li>Customer dashboard and management interface</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, 
                with or without notice, though we will make reasonable efforts to provide advance notice of 
                material changes.
              </p>
            </section>

            {/* Account Registration */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Account Registration and Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use our Service, you must create an account and provide accurate, complete, and current information. 
                You are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access or security breach</li>
                <li>Ensuring all account information remains accurate and up-to-date</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You must be at least 18 years old and have the legal authority to enter into this agreement 
                on behalf of your business or organization.
              </p>
            </section>

            {/* Acceptable Use */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to use our Service only for lawful purposes and in accordance with these Terms. 
                You shall not:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Use the Service for any illegal, harmful, or fraudulent activities</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Use the Service to transmit malicious code, viruses, or harmful content</li>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Use the Service for spam, harassment, or unsolicited communications</li>
                <li>Reverse engineer, decompile, or attempt to derive source code</li>
                <li>Use the Service beyond the scope of your subscription plan</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to suspend or terminate your account if you violate this Acceptable Use Policy.
              </p>
            </section>

            {/* Subscription and Billing */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Subscription and Billing Terms</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Subscription Plans</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Service is offered on a subscription basis with the following standard pricing:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Monthly Subscription: $250 per month per location</li>
                <li>One-time Setup Fee: $150 per location</li>
                <li>Custom enterprise plans available upon request</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Billing and Payment</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Subscriptions are billed monthly in advance</li>
                <li>Setup fees are due upon account activation</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>Payments are processed automatically using your designated payment method</li>
                <li>You are responsible for any applicable taxes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Late Payments and Suspension</h3>
              <p className="text-gray-700 leading-relaxed">
                If payment is not received within 10 days of the due date, we may suspend your access to the Service. 
                Accounts with payments overdue by 30 days may be terminated, and all data may be deleted.
              </p>
            </section>

            {/* Data and Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibent text-gray-900 mb-4">6. Data Handling and Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy and data security are important to us. Our data handling practices are governed by 
                our Privacy Policy, which is incorporated by reference into these Terms.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Customer Data</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>You retain ownership of all data you provide to the Service</li>
                <li>We process your data only as necessary to provide the Service</li>
                <li>Call recordings and transcripts are stored securely and encrypted</li>
                <li>You are responsible for obtaining necessary consents for call recording</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Data Retention</h3>
              <p className="text-gray-700 leading-relaxed">
                We retain your data for as long as your account is active and for a reasonable period thereafter 
                as required for business, legal, or regulatory purposes. Upon account termination, data will be 
                deleted within 90 days unless legally required to retain it longer.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property Rights</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Our Rights</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Service, including all software, technology, algorithms, and AI models, is owned by Lost Star 
                Technology and protected by intellectual property laws. You are granted a limited, non-exclusive, 
                non-transferable license to use the Service during your subscription term.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Customer Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You retain ownership of your business information, customer data, and content. By using our Service, 
                you grant us a limited license to process this content solely to provide the Service.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3 Feedback</h3>
              <p className="text-gray-700 leading-relaxed">
                Any feedback, suggestions, or improvements you provide regarding our Service become our property 
                and may be used to enhance our offerings without compensation or attribution.
              </p>
            </section>

            {/* Service Level Agreement */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Service Level Agreement</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Uptime Commitment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to maintain 99.9% uptime for our Service, calculated monthly. Planned maintenance 
                windows and circumstances beyond our control are excluded from this calculation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Support</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Technical support available during business hours (9 AM - 6 PM EST, Monday-Friday)</li>
                <li>Emergency support for critical issues available 24/7</li>
                <li>Response times: Critical issues within 2 hours, standard issues within 24 hours</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">8.3 Service Credits</h3>
              <p className="text-gray-700 leading-relaxed">
                If our uptime falls below 99.9% in any given month, you may be eligible for service credits 
                equivalent to a prorated portion of your monthly fee for the affected period.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, LOST STAR TECHNOLOGY SHALL NOT BE LIABLE FOR ANY 
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED 
                TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATING TO THE SERVICE SHALL NOT EXCEED 
                THE AMOUNT YOU PAID FOR THE SERVICE IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of 
                the above limitations may not apply to you.
              </p>
            </section>

            {/* Warranties and Disclaimers */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Warranties and Disclaimers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS 
                OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF 
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive for accuracy, we do not warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>The Service will be uninterrupted or error-free</li>
                <li>AI voice agents will perform perfectly in all situations</li>
                <li>All customer interactions will be handled to your satisfaction</li>
                <li>The Service will meet all your specific business requirements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You acknowledge that AI technology has inherent limitations and may not be suitable for all 
                customer service scenarios.
              </p>
            </section>

            {/* Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">11.1 Termination by You</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may terminate your subscription at any time by providing 30 days written notice. 
                Termination will be effective at the end of your current billing period. No refunds 
                will be provided for partial months.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">11.2 Termination by Us</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate your account immediately if you:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Violate these Terms or our Acceptable Use Policy</li>
                <li>Fail to pay fees when due after notice and cure period</li>
                <li>Engage in fraudulent or illegal activities</li>
                <li>Pose a security risk to our systems or other customers</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">11.3 Effect of Termination</h3>
              <p className="text-gray-700 leading-relaxed">
                Upon termination, your access to the Service will cease immediately. Your data will be 
                retained for 90 days to allow for potential account reactivation, after which it will 
                be permanently deleted.
              </p>
            </section>

            {/* Indemnification */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless Lost Star Technology, its officers, 
                directors, employees, and agents from any claims, damages, losses, or expenses arising from:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Your use of the Service in violation of these Terms</li>
                <li>Your violation of any applicable laws or regulations</li>
                <li>Your breach of any third-party rights</li>
                <li>Any content or data you provide through the Service</li>
                <li>Your failure to obtain necessary consents for call recording</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This indemnification obligation will survive termination of these Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law and Dispute Resolution</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">13.1 Governing Law</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms are governed by and construed in accordance with the laws of the State of Delaware, 
                without regard to conflict of law principles.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">13.2 Dispute Resolution</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any disputes arising from these Terms will be resolved through binding arbitration administered 
                by the American Arbitration Association under its Commercial Arbitration Rules. The arbitration 
                will be conducted in Delaware, and judgment on the award may be entered in any court having jurisdiction.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">13.3 Class Action Waiver</h3>
              <p className="text-gray-700 leading-relaxed">
                You agree that any arbitration or legal proceeding will be conducted on an individual basis only 
                and not as part of a class, collective, or representative action.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update these Terms from time to time to reflect changes in our Service, legal requirements, 
                or business practices. We will provide notice of material changes by:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Posting the updated Terms on our website</li>
                <li>Sending email notification to registered users</li>
                <li>Providing in-app notifications</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Your continued use of the Service after such changes constitutes acceptance of the new Terms. 
                If you do not agree to the updated Terms, you must discontinue use of the Service.
              </p>
            </section>

            {/* Miscellaneous */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Miscellaneous Provisions</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">15.1 Entire Agreement</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms, together with our Privacy Policy and any additional agreements you enter into 
                with us, constitute the entire agreement between you and Lost Star Technology regarding the Service.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">15.2 Severability</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining 
                provisions will continue in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">15.3 Assignment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not assign or transfer your rights under these Terms without our written consent. 
                We may assign our rights and obligations without restriction.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">15.4 Force Majeure</h3>
              <p className="text-gray-700 leading-relaxed">
                Neither party will be liable for delays or failures in performance resulting from circumstances 
                beyond their reasonable control, including but not limited to natural disasters, government actions, 
                or network outages.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about these Terms or need to contact us regarding legal matters, please reach out:
              </p>
              <div className="text-gray-700 space-y-2">
                <p><strong>Lost Star Technology</strong></p>
                <p>Email: legal@loststar.tech</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Technology Lane, Suite 100, Innovation City, IC 12345</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                For technical support or general inquiries, please use the contact information provided in 
                your customer dashboard or visit our support center.
              </p>
            </section>

            {/* Acknowledgment */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Acknowledgment</h3>
              <p className="text-blue-800">
                By using our Service, you acknowledge that you have read, understood, and agree to be bound by 
                these Terms of Service. If you are entering into this agreement on behalf of a business or 
                organization, you represent that you have the authority to bind that entity to these Terms.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">Contact Legal Team</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/privacy">View Privacy Policy</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TermsPage
