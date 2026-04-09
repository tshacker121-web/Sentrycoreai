'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThreatMap } from '@/components/ThreatMap';
import { AdSlot } from '@/components/AdSlot';
import { Shield, Lock, Target, Zap, ArrowRight, CircleCheck as CheckCircle2, TriangleAlert as AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold">
                  Trusted by 500+ Enterprises
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Enterprise Cybersecurity
                <br />
                That Never Sleeps
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Advanced threat defense, penetration testing, and compliance solutions.
                Protect your business from evolving cyber threats with SentryCore AI.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/incident-report"
                  className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-lg transition-all glow-cyan flex items-center gap-2"
                >
                  <Shield className="h-5 w-5" />
                  Book Security Audit
                </Link>
                <Link
                  href="/security-scorecard"
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-cyan-500/20 transition-all flex items-center gap-2"
                >
                  <Target className="h-5 w-5" />
                  Free Security Assessment
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ThreatMap />
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="header-desktop" />
        </div>

        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Defense Solutions
              </h2>
              <p className="text-slate-400 text-lg">
                Multi-layered security approach protecting every aspect of your infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/40 transition-all"
              >
                <div className="w-14 h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Penetration Testing
                </h3>
                <p className="text-slate-400 mb-6">
                  Comprehensive vulnerability assessments using industry-standard frameworks. OWASP, NIST, and custom threat modeling.
                </p>
                <Link
                  href="/services/penetration-testing"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/40 transition-all"
              >
                <div className="w-14 h-14 bg-lime-400/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-lime-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  SOC2 Compliance
                </h3>
                <p className="text-slate-400 mb-6">
                  Achieve and maintain SOC2 Type II certification. Comprehensive audit preparation and continuous compliance monitoring.
                </p>
                <Link
                  href="/compliance/soc2-readiness"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/40 transition-all"
              >
                <div className="w-14 h-14 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="h-7 w-7 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Managed Endpoint Security
                </h3>
                <p className="text-slate-400 mb-6">
                  24/7 monitoring, threat detection, and rapid incident response. EDR, XDR, and zero-trust architecture implementation.
                </p>
                <Link
                  href="/services/managed-endpoint-security"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="after-services" />
        </div>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why Enterprises Trust SentryCore AI
                </h2>
                <p className="text-slate-400 mb-8 text-lg">
                  Founded by Muhammad Sameer, a leading expert in AI-powered defensive cybersecurity,
                  SentryCore AI combines cutting-edge automation with battle-tested security practices.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-lime-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">99.9% Threat Detection Rate</h3>
                      <p className="text-slate-400 text-sm">AI-powered systems identify threats before they escalate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-lime-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">15-Minute Response Time</h3>
                      <p className="text-slate-400 text-sm">Global SOC operations with instant incident escalation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-lime-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Zero Data Breaches</h3>
                      <p className="text-slate-400 text-sm">Perfect track record across 500+ client implementations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-lime-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Compliance Guaranteed</h3>
                      <p className="text-slate-400 text-sm">SOC2, ISO 27001, HIPAA, and GDPR expertise</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Zap className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Quick Stats</h3>
                    <p className="text-slate-400">Real-time metrics</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-cyan-500/10">
                    <div className="text-3xl font-bold text-cyan-400 font-mono mb-1">500+</div>
                    <div className="text-slate-400 text-sm">Protected Clients</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-cyan-500/10">
                    <div className="text-3xl font-bold text-lime-400 font-mono mb-1">24/7</div>
                    <div className="text-slate-400 text-sm">SOC Operations</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-cyan-500/10">
                    <div className="text-3xl font-bold text-yellow-400 font-mono mb-1">15M+</div>
                    <div className="text-slate-400 text-sm">Threats Blocked</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-cyan-500/10">
                    <div className="text-3xl font-bold text-red-400 font-mono mb-1">&lt;15m</div>
                    <div className="text-slate-400 text-sm">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border-y border-cyan-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AlertTriangle className="h-16 w-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Experiencing a Security Incident?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Our emergency response team is standing by 24/7 to contain and mitigate active threats.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+15793969008"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all glow-red flex items-center gap-2 text-lg"
              >
                Call Now: +1 579-396-9008
              </a>
              <Link
                href="/incident-report"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-cyan-500/20 transition-all"
              >
                Submit Incident Report
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="before-footer" />
        </div>
      </main>
      <Footer />
    </>
  );
}
