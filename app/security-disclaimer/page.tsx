'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { TriangleAlert as AlertTriangle } from 'lucide-react';

export default function SecurityDisclaimerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-4"
            >
              <AlertTriangle className="h-12 w-12 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h1 className="text-5xl font-bold text-white mb-4">
                  Security Disclaimer
                </h1>
                <p className="text-slate-400 text-lg">Important Information Regarding Cybersecurity Services</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
            <div className="space-y-8 text-slate-300">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6" />
                  Critical Disclaimer
                </h2>
                <p className="text-red-200">
                  The information provided on this website and through SentryCore AI services is for informational and educational purposes only. While we strive to provide accurate and up-to-date information regarding cybersecurity best practices and threats, we make no warranties regarding the accuracy, completeness, or applicability of this information to your specific situation.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">1. Professional Advice Disclaimer</h2>
                <p>
                  Information provided through our website and general services does not constitute professional legal, financial, or cybersecurity advice. Before implementing any security recommendations, consult with qualified professionals specific to your organization's needs and legal jurisdiction.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">2. No Guarantee Against Breaches</h2>
                <p>
                  While SentryCore AI implements industry-leading security measures and best practices, no cybersecurity solution can guarantee 100% protection against all threats. Cyber attacks are constantly evolving, and sophisticated threat actors may discover new vulnerabilities despite our best efforts.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">3. Responsibility for Implementation</h2>
                <p>
                  Clients are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>Properly implementing recommended security controls</li>
                  <li>Maintaining their systems and software updates</li>
                  <li>Training employees on security awareness</li>
                  <li>Complying with applicable laws and regulations</li>
                  <li>Maintaining appropriate insurance coverage</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                <p>
                  SentryCore AI shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>Any data breaches or cyber attacks not directly caused by our negligence</li>
                  <li>Third-party vulnerabilities or zero-day exploits</li>
                  <li>User error or improper implementation of recommendations</li>
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of business, data, or revenue resulting from security incidents</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">5. Evolving Threat Landscape</h2>
                <p>
                  The cybersecurity landscape is constantly evolving. Recommendations and assessments are based on current threat intelligence and industry standards at the time of service delivery. Threats, vulnerabilities, and best practices change rapidly. Regular reassessments and updates are essential.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">6. Third-Party Services</h2>
                <p>
                  SentryCore AI may recommend or integrate with third-party security tools and services. We are not responsible for the security, functionality, or compliance of third-party services. Users should review those providers' terms and security practices independently.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">7. Compliance Not Guaranteed</h2>
                <p>
                  While SentryCore AI helps organizations work toward compliance with standards like SOC2, ISO 27001, HIPAA, and GDPR, compliance ultimately remains the client's responsibility. Third-party auditors make final compliance determinations.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">8. Incident Response Limitations</h2>
                <p>
                  During incident response engagements, SentryCore AI:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>Provides best-effort response based on available information</li>
                  <li>Cannot guarantee complete threat removal or data recovery</li>
                  <li>Works within client-provided access and permissions</li>
                  <li>May not have visibility into all systems or network segments</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">9. No Warranties</h2>
                <p>
                  Services are provided "as-is" without warranties of any kind, expressed or implied, including fitness for a particular purpose or non-infringement. We make no promises regarding uptime, response times, or specific security outcomes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">10. Reporting Obligations</h2>
                <p>
                  Clients are responsible for reporting confirmed security incidents to relevant regulatory authorities, customers, and affected parties as required by law. SentryCore AI will assist with technical assessments but cannot provide legal advice regarding reporting obligations.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">11. Insurance Recommendations</h2>
                <p>
                  SentryCore AI strongly recommends that all organizations maintain appropriate cyber liability and data breach insurance. Security services should complement, not replace, professional insurance coverage.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">12. Acknowledgment</h2>
                <p>
                  By using SentryCore AI services, you acknowledge that you have read and understand this Security Disclaimer and accept the limitations and risks described herein.
                </p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">For Questions or Concerns</h3>
                <p>
                  Contact us immediately if you have concerns about any aspect of our services or recommendations:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="font-semibold">Email: security@sentrycore.ai</p>
                  <p className="font-semibold">Phone: +1 579-396-9008</p>
                  <p>24/7 Emergency Response Team Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
