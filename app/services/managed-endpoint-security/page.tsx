'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdSlot } from '@/components/AdSlot';
import { motion } from 'framer-motion';
import { Lock, CircleCheck as CheckCircle2, Activity, TriangleAlert as AlertTriangle, Zap, Eye, TrendingDown } from 'lucide-react';
import Link from 'next/link';

export default function ManagedEndpointSecurityPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
                <Lock className="h-4 w-4 text-red-400" />
                <span className="text-red-400 text-sm font-semibold">Critical Protection</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Managed Endpoint Security (EDR/XDR)
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                24/7 monitoring and threat response across all endpoints. Advanced EDR/XDR detection with AI-powered threat hunting and zero-trust architecture implementation.
              </p>
              <Link
                href="/incident-report"
                className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all glow-red"
              >
                Secure Your Endpoints
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="endpoint-top" />
        </div>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-12">Core Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">EDR (Endpoint Detection & Response)</h3>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Real-time process monitoring & execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Behavioral threat detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Forensic data collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Incident response automation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">XDR (Extended Detection & Response)</h3>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Cross-platform threat correlation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Network & server threat integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Cloud workload protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>AI-powered threat hunting</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Threat Hunting</h3>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Proactive threat search</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Indicator of compromise investigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Advanced persistence detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Monthly threat reports</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingDown className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Risk Reduction</h3>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Vulnerability patching automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Configuration hardening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Compliance enforcement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Zero-trust policy implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="endpoint-middle" />
        </div>

        <section className="py-20 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-12">Protected Assets</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                'Windows Desktops & Servers',
                'macOS & Linux Systems',
                'Mobile Devices (iOS/Android)',
                'Virtual Machines & Containers',
                'Cloud Workloads',
                'IoT Devices',
                'Network Appliances',
                'Printers & Peripherals'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-4">
                  <CheckCircle2 className="h-5 w-5 text-lime-400 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-12">Response Times</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-cyan-400 font-mono mb-2">&lt;5 min</div>
                <div className="text-slate-300">Alert Detection & Initial Response</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-cyan-400 font-mono mb-2">&lt;15 min</div>
                <div className="text-slate-300">Analyst Investigation & Containment</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-cyan-400 font-mono mb-2">&lt;1 hour</div>
                <div className="text-slate-300">Full Incident Assessment</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-red-500/5 to-orange-500/5 border-y border-red-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Enterprise-Grade Endpoint Protection
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Protect all your endpoints from ransomware, advanced threats, and insider threats with our 24/7 managed security service.
            </p>
            <Link
              href="/incident-report"
              className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all glow-red"
            >
              Enable EDR/XDR Today
            </Link>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="endpoint-bottom" />
        </div>
      </main>
      <Footer />
    </>
  );
}
