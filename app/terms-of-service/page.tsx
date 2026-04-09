'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
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
              Terms of Service
            </motion.h1>
            <p className="text-slate-400 text-lg">Effective Date: January 1, 2026</p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
            <div className="space-y-8 text-slate-300">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the SentryCore AI website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on the SentryCore AI website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  <li>Use the materials for purposes other than those authorized</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">3. Disclaimer</h2>
                <p>
                  The materials on SentryCore AI's website are provided on an "as is" basis. SentryCore AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">4. Limitations</h2>
                <p>
                  In no event shall SentryCore AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the SentryCore AI website, even if SentryCore AI or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on the SentryCore AI website could include technical, typographical, or photographic errors. SentryCore AI does not warrant that any of the materials on the website are accurate, complete, or current. SentryCore AI may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">6. Links</h2>
                <p>
                  SentryCore AI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SentryCore AI of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">7. Modifications</h2>
                <p>
                  SentryCore AI may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">8. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where SentryCore AI operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">9. Service Level Agreement</h2>
                <p>
                  SentryCore AI endeavors to provide 99.9% uptime for its services. However, we do not guarantee uninterrupted service and shall not be liable for downtime resulting from scheduled maintenance, security patches, or events beyond our reasonable control.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">10. User Responsibilities</h2>
                <p>
                  Users are responsible for maintaining the confidentiality of their account information and passwords. Users agree to accept responsibility for all activities that occur under their account. Users must immediately notify SentryCore AI of any unauthorized use of their account.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">11. Intellectual Property Rights</h2>
                <p>
                  All content, features, and functionality of the website and services are owned by SentryCore AI, its licensors, or other providers of such material and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">12. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact:
                </p>
                <div className="mt-4 p-4 bg-slate-800 rounded-lg">
                  <p className="font-semibold">Email: legal@sentrycore.ai</p>
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
