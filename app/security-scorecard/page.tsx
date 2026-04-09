'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdSlot } from '@/components/AdSlot';
import { motion, AnimatePresence } from 'framer-motion';
import { CircleCheck as CheckCircle2, TriangleAlert as AlertTriangle, Shield, TrendingUp, ChartBar as BarChart3, Lock } from 'lucide-react';
import Link from 'next/link';

const questions = [
  {
    id: 1,
    question: 'Do you have multi-factor authentication (MFA) enabled for all user accounts?',
    options: ['Yes, all accounts', 'Most accounts (70-99%)', 'Some accounts (30-70%)', 'No or minimal usage'],
    scores: [10, 7, 3, 0]
  },
  {
    id: 2,
    question: 'How often do you conduct security awareness training for employees?',
    options: ['Quarterly or more', 'Annually', 'Occasionally', 'Never or unsure'],
    scores: [10, 7, 3, 0]
  },
  {
    id: 3,
    question: 'Do you have an incident response plan and regularly test it?',
    options: ['Yes, tested annually', 'Yes, but untested', 'In development', 'No'],
    scores: [10, 5, 2, 0]
  },
  {
    id: 4,
    question: 'What is your backup and disaster recovery strategy?',
    options: ['Tested backups, offsite copies, documented recovery time', 'Backups only, untested recovery', 'Limited backups', 'No formal strategy'],
    scores: [10, 6, 3, 0]
  },
  {
    id: 5,
    question: 'Are your systems regularly patched and updated?',
    options: ['Critical patches within 1 week, others monthly', 'Patched within 1 month', 'Patched occasionally', 'Rarely or never patched'],
    scores: [10, 6, 2, 0]
  }
];

export default function SecurityScorecardPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const totalScore = newAnswers.reduce((sum, answerIdx, idx) => {
        return sum + questions[idx].scores[answerIdx];
      }, 0);
      setScore(totalScore);
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const getScoreLevel = () => {
    if (score >= 45) return { level: 'Excellent', color: 'text-lime-400', bg: 'bg-lime-500/10', border: 'border-lime-500/20' };
    if (score >= 35) return { level: 'Good', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' };
    if (score >= 25) return { level: 'Fair', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' };
    return { level: 'Needs Improvement', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' };
  };

  const scoreLevel = getScoreLevel();
  const progressPercentage = showResults ? 100 : ((currentQuestion + 1) / questions.length) * 100;

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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                <BarChart3 className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold">Free Assessment</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Security Scorecard
              </h1>
              <p className="text-xl text-slate-300">
                Get a personalized security assessment in 2 minutes. Understand your security posture and receive customized recommendations.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="quiz-top" />
        </div>

        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-slate-400 text-sm font-mono">
                        Question {currentQuestion + 1} of {questions.length}
                      </span>
                      <span className="text-cyan-400 font-semibold">
                        {Math.round(progressPercentage)}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercentage}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-8">
                      {questions[currentQuestion].question}
                    </h2>

                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => handleAnswer(idx)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full text-left p-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all"
                        >
                          <span className="text-white font-medium">{option}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-slate-900 border border-cyan-500/20 rounded-xl p-8"
                >
                  <div className="text-center mb-8">
                    <Shield className="h-16 w-16 mx-auto mb-6 text-cyan-400" />
                    <h2 className="text-4xl font-bold text-white mb-4">
                      Your Security Score
                    </h2>
                  </div>

                  <div className={`${scoreLevel.bg} ${scoreLevel.border} border rounded-xl p-8 mb-8 text-center`}>
                    <div className={`text-6xl font-bold ${scoreLevel.color} font-mono mb-3`}>
                      {score}/50
                    </div>
                    <div className={`text-2xl ${scoreLevel.color} font-bold mb-2`}>
                      {scoreLevel.level}
                    </div>
                    <p className="text-slate-300">
                      {score >= 45
                        ? 'Your organization has strong security fundamentals. Continue maintaining these standards.'
                        : score >= 35
                        ? 'Good security practices in place. Focus on addressing identified gaps.'
                        : score >= 25
                        ? 'Moderate security posture. Prioritize implementing recommended improvements.'
                        : 'Critical security gaps identified. Immediate action required.'}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Recommendations</h3>
                    <div className="space-y-4">
                      {score < 30 && (
                        <>
                          <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                            <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-white font-semibold mb-1">Implement Multi-Factor Authentication</h4>
                              <p className="text-slate-400 text-sm">Start with critical administrative accounts immediately</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                            <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-white font-semibold mb-1">Establish Incident Response Plan</h4>
                              <p className="text-slate-400 text-sm">Critical for any security-conscious organization</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                            <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-white font-semibold mb-1">Conduct Penetration Testing</h4>
                              <p className="text-slate-400 text-sm">Identify vulnerabilities before attackers do</p>
                            </div>
                          </div>
                        </>
                      )}

                      {score >= 30 && score < 40 && (
                        <>
                          <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                            <TrendingUp className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-white font-semibold mb-1">Expand Security Training</h4>
                              <p className="text-slate-400 text-sm">Increase frequency and coverage of awareness training</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                            <TrendingUp className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-white font-semibold mb-1">Test Incident Response Plan</h4>
                              <p className="text-slate-400 text-sm">Run tabletop exercises or simulations</p>
                            </div>
                          </div>
                        </>
                      )}

                      {score >= 40 && (
                        <div className="flex items-start gap-3 p-4 bg-lime-500/10 border border-lime-500/20 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-lime-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-white font-semibold mb-1">Advanced Threat Hunting</h4>
                            <p className="text-slate-400 text-sm">Consider proactive threat hunting and managed security services</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-xl p-6 mb-8">
                    <h3 className="text-white font-semibold mb-3">Get a Full Security Audit</h3>
                    <p className="text-slate-400 mb-4">
                      Our comprehensive security assessment goes deeper to identify all vulnerabilities and provide a complete action plan.
                    </p>
                    <Link
                      href="/incident-report"
                      className="inline-block px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-all"
                    >
                      Schedule Full Audit
                    </Link>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all border border-slate-700"
                  >
                    Retake Assessment
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <AdSlot slot="quiz-bottom" />
        </div>
      </main>
      <Footer />
    </>
  );
}
