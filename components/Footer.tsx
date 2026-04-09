import Link from 'next/link';
import { Logo, LogoText } from './Logo';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-10 w-10" />
              <LogoText />
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Enterprise-grade cybersecurity solutions for modern businesses. Protecting your digital assets 24/7.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Shield className="h-4 w-4 text-cyan-400" />
              <span>SOC 2 Type II Certified</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/penetration-testing" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link href="/services/managed-endpoint-security" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Managed Endpoint Security
                </Link>
              </li>
              <li>
                <Link href="/compliance/soc2-readiness" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  SOC2 Compliance
                </Link>
              </li>
              <li>
                <Link href="/security-scorecard" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Security Assessment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security-disclaimer" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Security Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Emergency Contact</h3>
            <div className="space-y-3">
              <a href="tel:+15793969008" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group">
                <Phone className="h-4 w-4 text-red-500 group-hover:text-red-400" />
                <span className="text-sm">+1 579-396-9008</span>
              </a>
              <a href="mailto:security@sentrycore.ai" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">security@sentrycore.ai</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>24/7 Global Operations Center</span>
              </div>
            </div>
            <Link
              href="/incident-report"
              className="mt-4 inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded transition-all glow-red"
            >
              Report Security Incident
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} SentryCore AI. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Developed by <span className="text-cyan-400">Muhammad Sameer</span> - AI Automation & Defensive Cybersecurity Expert
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
