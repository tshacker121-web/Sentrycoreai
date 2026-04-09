'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TriangleAlert as AlertTriangle, Shield, Target } from 'lucide-react';

interface Threat {
  id: number;
  x: number;
  y: number;
  type: 'blocked' | 'detected' | 'critical';
  location: string;
}

export function ThreatMap() {
  const [threats, setThreats] = useState<Threat[]>([]);
  const [stats, setStats] = useState({
    blocked: 0,
    detected: 0,
    critical: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newThreat: Threat = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        type: ['blocked', 'detected', 'critical'][Math.floor(Math.random() * 3)] as Threat['type'],
        location: ['US-East', 'EU-West', 'APAC', 'US-West', 'EU-Central'][Math.floor(Math.random() * 5)]
      };

      setThreats(prev => [...prev.slice(-20), newThreat]);
      setStats(prev => ({
        ...prev,
        [newThreat.type]: prev[newThreat.type] + 1
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] bg-slate-900 rounded-xl border border-cyan-500/20 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30" />

      <div className="absolute top-4 left-4 z-10 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 space-y-3">
        <h3 className="text-cyan-400 font-semibold text-sm flex items-center gap-2">
          <Shield className="h-4 w-4" />
          Live Threat Monitor
        </h3>
        <div className="space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-400">Blocked:</span>
            <span className="text-lime-400 font-bold">{stats.blocked}</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-400">Detected:</span>
            <span className="text-yellow-400 font-bold">{stats.detected}</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-400">Critical:</span>
            <span className="text-red-400 font-bold">{stats.critical}</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {threats.map(threat => (
          <motion.div
            key={threat.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute"
            style={{
              left: `${threat.x}%`,
              top: `${threat.y}%`,
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className={`w-4 h-4 rounded-full ${
                threat.type === 'blocked'
                  ? 'bg-lime-400 glow-lime'
                  : threat.type === 'detected'
                  ? 'bg-yellow-400'
                  : 'bg-red-500 glow-red'
              }`}
            />
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-950/90 px-2 py-1 rounded text-xs font-mono border border-cyan-500/20">
              {threat.location}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-8 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg py-3 px-4">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 rounded-full bg-lime-400" />
          <span className="text-slate-300">Blocked</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="text-slate-300">Detected</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-slate-300">Critical</span>
        </div>
      </div>
    </div>
  );
}
