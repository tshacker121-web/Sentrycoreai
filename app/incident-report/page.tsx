'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdSlot } from '@/components/AdSlot';
import { motion } from 'framer-motion';
import { TriangleAlert as AlertTriangle, Send, CircleCheck as CheckCircle2, Loader } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default function IncidentReportPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactEmail: '',
    contactPhone: '',
    infrastructureType: 'network',
    threatLevel: 'high',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('incident_reports')
        .insert([{
          infrastructure_type: formData.infrastructureType,
          threat_level: formData.threatLevel,
          company_name: formData.companyName,
          contact_email: formData.contactEmail,
          contact_phone: formData.contactPhone,
          description: formData.description
        }]);

      if (submitError) {
        throw submitError;
      }

      setSubmitted(true);
      setFormData({
        companyName: '',
        contactEmail: '',
        contactPhone: '',
        infrastructureType: 'network',
        threatLevel: 'high',
        description: ''
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to submit report. Please try again or call +1 579-396-9008 for immediate assistance.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                <span className="text-red-400 text-sm font-semibold">Emergency Response</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Security Incident Report
              </h1>
              <p className="text-xl text-slate-300 mb-4">
                Submit a security incident immediately. Our incident response team will contact you within 15 minutes.
              </p>
              <p className="text-red-400 font-semibold flex items-center justify-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                For active emergencies: Call +1 579-396-9008
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="form-top" />
        </div>

        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-8 p-6 bg-lime-500/10 border border-lime-500/20 rounded-xl flex items-start gap-4"
              >
                <CheckCircle2 className="h-6 w-6 text-lime-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-lime-400 mb-1">Report Submitted Successfully</h3>
                  <p className="text-slate-300">
                    Your incident report has been received. Our emergency response team will contact you within 15 minutes at the number you provided.
                  </p>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-8 p-6 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-4"
              >
                <AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-red-400 mb-1">Error</h3>
                  <p className="text-slate-300">{error}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="security@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Infrastructure Type
                    </label>
                    <select
                      name="infrastructureType"
                      value={formData.infrastructureType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="network">Network</option>
                      <option value="cloud">Cloud</option>
                      <option value="on-premise">On-Premise</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Threat Level
                    </label>
                    <select
                      name="threatLevel"
                      value={formData.threatLevel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Incident Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Describe the security incident in detail. Include what happened, when it was discovered, and any systems affected..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white font-bold rounded-lg transition-all glow-red flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader className="h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Submit Incident Report
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="py-20 bg-slate-900/50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">What Happens Next</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400">
                  1
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Immediate Response</h3>
                  <p className="text-slate-400">Our emergency team will contact you within 15 minutes of report submission</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400">
                  2
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Initial Assessment</h3>
                  <p className="text-slate-400">We'll perform a rapid assessment of the threat level and scope of the incident</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400">
                  3
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Containment</h3>
                  <p className="text-slate-400">We'll immediately begin containment and mitigation of the active threat</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400">
                  4
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Full Investigation</h3>
                  <p className="text-slate-400">Detailed forensic analysis and full incident report within 48 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="form-bottom" />
        </div>
      </main>
      <Footer />
    </>
  );
}
