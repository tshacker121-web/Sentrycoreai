'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-white mb-4"
            >
              Privacy Policy
            </motion.h1>
            <p className="text-slate-400 text-lg">Effective Date: January 1, 2026</p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
            <div className="space-y-8 text-slate-300">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">1. Introduction</h2>
                <p>
                  SentryCore AI ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our website and use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Personal Information You Provide</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Name, email address, and phone number</li>
                      <li>Company name and business information</li>
                      <li>Incident details and security vulnerability information</li>
                      <li>Payment and billing information</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Automatically Collected Information</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Browser and device information</li>
                      <li>IP address and location data</li>
                      <li>Pages visited and time spent on site</li>
                      <li>Referral source and analytics data</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide and improve our cybersecurity services</li>
                  <li>Respond to your inquiries and incident reports</li>
                  <li>Conduct security assessments and audits</li>
                  <li>Send service updates and security notifications</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">4. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your information, including encryption, access controls, and regular security audits. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">5. Third-Party Sharing</h2>
                <p>
                  We do not sell your personal information. We may share information with:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>Service providers and technical partners</li>
                  <li>Legal authorities when required by law</li>
                  <li>Incident response partners (with your consent)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate data</li>
                  <li>Right to request deletion (subject to legal requirements)</li>
                  <li>Right to opt-out of marketing communications</li>
                  <li>Right to data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">7. GDPR Compliance</h2>
                <p>
                  For EU residents, we comply with the General Data Protection Regulation (GDPR). You have additional rights including the right to withdraw consent and file complaints with your supervisory authority.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">8. CCPA Compliance</h2>
                <p>
                  For California residents, we comply with the California Consumer Privacy Act (CCPA) and provide the rights and protections outlined in that law.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">9. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar technologies to enhance your experience. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy periodically. We will notify you of material changes by updating the effective date and posting the revised policy on our website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">11. Contact Us</h2>
                <p>
                  For privacy concerns or requests, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-slate-800 rounded-lg">
                  <p className="font-semibold">Email: privacy@sentrycore.ai</p>
                  <p className="font-semibold">Phone: +1 579-396-9008</p>
                  <p>SentryCore AI - Global Operations Center</p>
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
