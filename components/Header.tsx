'use client';

import Link from 'next/link';
import { Logo, LogoText } from './Logo';
import { Shield, Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Logo className="h-10 w-10" />
            <LogoText />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors">
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-cyan-500/20 rounded-lg shadow-xl p-2">
                  <Link
                    href="/services/penetration-testing"
                    className="block px-4 py-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded transition-colors"
                  >
                    Penetration Testing
                  </Link>
                  <Link
                    href="/services/managed-endpoint-security"
                    className="block px-4 py-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded transition-colors"
                  >
                    Managed Endpoint Security
                  </Link>
                  <Link
                    href="/compliance/soc2-readiness"
                    className="block px-4 py-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded transition-colors"
                  >
                    SOC2 Compliance
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-slate-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/security-scorecard" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Security Scorecard
            </Link>
            <Link href="/incident-report" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Report Incident
            </Link>
          </nav>

          <a
            href="tel:+15793969008"
            className="hidden lg:flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all glow-red"
          >
            <Phone className="h-5 w-5" />
            <span>Emergency Response</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-cyan-400"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            <Link
              href="/services/penetration-testing"
              className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Penetration Testing
            </Link>
            <Link
              href="/services/managed-endpoint-security"
              className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Managed Endpoint Security
            </Link>
            <Link
              href="/compliance/soc2-readiness"
              className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              SOC2 Compliance
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/security-scorecard"
              className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Security Scorecard
            </Link>
            <Link
              href="/incident-report"
              className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Report Incident
            </Link>
            <a
              href="tel:+15793969008"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-lg font-semibold mt-4"
            >
              <Phone className="h-5 w-5" />
              <span>Emergency: +1 579-396-9008</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
