'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdSlot } from '@/components/AdSlot';
import { motion } from 'framer-motion';
import { Target, CircleCheck as CheckCircle2, Shield, Zap, TrendingUp, Lock, TriangleAlert } from 'lucide-react';
import Link from 'next/link';

export default function PenetrationTestingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                <Target className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold">Professional Service</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Penetration Testing & Vulnerability Assessment
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Identify security vulnerabilities before attackers do. Our comprehensive penetration testing services use industry-standard methodologies (OWASP, NIST, PTES) to assess your entire attack surface.
              </p>
              <Link
                href="/incident-report"
                className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-lg transition-all glow-cyan"
              >
                Schedule Assessment
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="service-top" />
        </div>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-12">Our Testing Methodology</h2>
            <div className="space-y-8">
              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Reconnaissance</h3>
                    <p className="text-slate-400">
                      Thorough information gathering using both passive and active techniques. We map your infrastructure, identify web applications, DNS records, and potential entry points.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Scanning & Enumeration</h3>
                    <p className="text-slate-400">
                      Network scanning, service enumeration, and vulnerability discovery. We use industry tools (Nessus, Qualys, Burp Suite) to identify weaknesses in your security posture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Exploitation & Validation</h3>
                    <p className="text-slate-400">
                      Actual attack simulation to confirm vulnerabilities are exploitable. We prove impact by demonstrating real-world attack chains and business risk.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Reporting & Remediation</h3>
                    <p className="text-slate-400">
                      Detailed executive and technical reports with prioritized findings, CVSS scoring, and actionable remediation recommendations. Ongoing support included.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-12">What We Test</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Web Applications',
                'API Security',
                'Network Infrastructure',
                'Cloud Environments (AWS, Azure, GCP)',
                'Mobile Applications',
                'Wireless Networks',
                'Social Engineering',
                'Physical Security'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-lime-400 flex-shrink-0" />
                  <span className="text-white text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="service-middle" />
        </div>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-12">Standards & Certifications</h2>
            <div className="space-y-6">
              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">OWASP Top 10</h3>
                <p className="text-slate-400">Testing aligned with the OWASP Top 10 web application security risks</p>
              </div>
              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">NIST Framework</h3>
                <p className="text-slate-400">Cybersecurity framework compliance testing and assessment</p>
              </div>
              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">PTES (Penetration Testing Execution Standard)</h3>
                <p className="text-slate-400">Industry-standard methodology for comprehensive testing</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border-y border-cyan-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Assess Your Security?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Schedule your penetration testing engagement today. Our team will work with you to develop a customized testing plan.
            </p>
            <Link
              href="/incident-report"
              className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-lg transition-all glow-cyan"
            >
              Start Your Assessment
            </Link>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="service-bottom" />
        </div>
      </main>
      <Footer />
    </>
  );
}
