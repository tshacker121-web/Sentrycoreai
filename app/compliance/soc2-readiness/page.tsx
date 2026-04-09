'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdSlot } from '@/components/AdSlot';
import { motion } from 'framer-motion';
import { Shield, CircleCheck as CheckCircle2, Lock, FileCheck, TrendingUp, ChartBar as BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function SOC2ReadinessPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-400/10 border border-lime-400/20 rounded-full mb-6">
                <FileCheck className="h-4 w-4 text-lime-400" />
                <span className="text-lime-400 text-sm font-semibold">Compliance Service</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6">
                SOC2 Type II Compliance
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Achieve SOC2 Type II certification with our comprehensive compliance program. We guide you through every phase of the audit process and maintain your compliance year-round.
              </p>
              <Link
                href="/incident-report"
                className="inline-block px-8 py-4 bg-lime-400 hover:bg-lime-500 text-slate-950 font-bold rounded-lg transition-all glow-lime"
              >
                Start Compliance Journey
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="compliance-top" />
        </div>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-12">Our SOC2 Framework</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Security (CC Trust Service Criteria)</h3>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Access controls & user authentication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Encryption and data protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Threat detection and response</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Availability (A Trust Service Criteria)</h3>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>System uptime & availability monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Disaster recovery & business continuity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Change management processes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Processing Integrity (PI Trust Service Criteria)</h3>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Complete and accurate processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>System monitoring and logging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Error handling procedures</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Confidentiality & Privacy</h3>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Data confidentiality controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Privacy policy compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>GDPR & CCPA alignment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="compliance-middle" />
        </div>

        <section className="py-20 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-12">Our SOC2 Roadmap</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Assessment & Gap Analysis</h3>
                  <p className="text-slate-400">We evaluate your current security posture and identify gaps against SOC2 requirements.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Documentation & Policies</h3>
                  <p className="text-slate-400">We help develop comprehensive security policies, procedures, and documentation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">System Implementation</h3>
                  <p className="text-slate-400">We implement necessary controls and systems to meet SOC2 requirements.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Evidence Collection & Testing</h3>
                  <p className="text-slate-400">We gather evidence and conduct testing to demonstrate control effectiveness (6-12 months).</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Audit & Certification</h3>
                  <p className="text-slate-400">We coordinate with auditors and manage the SOC2 audit process to certification.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ongoing Compliance</h3>
                  <p className="text-slate-400">We provide continuous monitoring and support to maintain your SOC2 certification.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-lime-500/5 to-green-500/5 border-y border-lime-400/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-400 font-mono mb-2">12-16</div>
                <div className="text-slate-400">Weeks to Certification</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-400 font-mono mb-2">99%</div>
                <div className="text-slate-400">First-Time Approval Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-400 font-mono mb-2">24/7</div>
                <div className="text-slate-400">Post-Audit Support</div>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Get Your SOC2 Type II Certification
              </h2>
              <Link
                href="/incident-report"
                className="inline-block px-8 py-4 bg-lime-400 hover:bg-lime-500 text-slate-950 font-bold rounded-lg transition-all glow-lime"
              >
                Begin Your Compliance Program
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="compliance-bottom" />
        </div>
      </main>
      <Footer />
    </>
  );
}
