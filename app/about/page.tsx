'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdSlot } from '@/components/AdSlot';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Users, Award, CircleCheck as CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
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
              <h1 className="text-5xl font-bold text-white mb-6">
                About SentryCore AI
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl">
                Enterprise cybersecurity solutions powered by AI automation and human expertise. Founded with a mission to make enterprise-grade security accessible to organizations of all sizes.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="about-top" />
        </div>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Founder</h2>
                <p className="text-slate-400 mb-4 text-lg">
                  SentryCore AI was founded by <span className="text-cyan-400 font-semibold">Muhammad Sameer</span>, an AI automation and defensive cybersecurity expert with 15+ years of experience protecting enterprise infrastructure.
                </p>
                <p className="text-slate-400 mb-4 text-lg">
                  Muhammad's career spans Fortune 500 companies, government agencies, and leading security firms. He recognized a critical gap: most organizations lack access to enterprise-grade security expertise at an affordable price point.
                </p>
                <p className="text-slate-400 text-lg">
                  SentryCore AI combines cutting-edge AI automation with battle-tested security practices to deliver professional-grade threat defense to every organization, regardless of size or budget.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-cyan-400" />
                    <span className="text-white font-semibold">15+ Years Security Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-cyan-400" />
                    <span className="text-white font-semibold">Fortune 500 Background</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-cyan-400" />
                    <span className="text-white font-semibold">AI Automation Specialist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-cyan-400" />
                    <span className="text-white font-semibold">Threat Intelligence Expert</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-cyan-500/20 rounded-xl p-12">
              <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
              <div className="space-y-6 text-lg">
                <p className="text-slate-300">
                  To empower organizations with enterprise-grade cybersecurity solutions that protect against evolving threats while remaining accessible and practical.
                </p>
                <p className="text-slate-300">
                  We believe that security should not be a luxury. Through intelligent automation and AI-powered threat detection, we democratize access to top-tier security expertise.
                </p>
                <p className="text-slate-300">
                  Our commitment is to be your trusted partner in the digital arms race, staying ahead of threats and ensuring your business continuity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="about-middle" />
        </div>

        <section className="py-20 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose SentryCore AI</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert-Led</h3>
                <p className="text-slate-400">
                  Founded and led by industry veterans with decades of combined security experience across enterprises and government.
                </p>
              </div>

              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
                <p className="text-slate-400">
                  Advanced machine learning models detect threats faster and more accurately than humans alone, 24/7.
                </p>
              </div>

              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Customer-Focused</h3>
                <p className="text-slate-400">
                  Transparent communication, dedicated support, and customized solutions for your specific security needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Track Record</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
                <div className="text-4xl font-bold text-cyan-400 font-mono mb-2">500+</div>
                <div className="text-slate-300">Protected Organizations</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
                <div className="text-4xl font-bold text-lime-400 font-mono mb-2">15M+</div>
                <div className="text-slate-300">Threats Blocked</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
                <div className="text-4xl font-bold text-yellow-400 font-mono mb-2">0</div>
                <div className="text-slate-300">Data Breaches</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
                <div className="text-4xl font-bold text-red-400 font-mono mb-2">&lt;15m</div>
                <div className="text-slate-300">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border-y border-cyan-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's secure your organization with enterprise-grade cybersecurity solutions built for the modern threat landscape.
            </p>
            <Link
              href="/incident-report"
              className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-lg transition-all glow-cyan"
            >
              Get Started Today
            </Link>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="about-bottom" />
        </div>
      </main>
      <Footer />
    </>
  );
}
