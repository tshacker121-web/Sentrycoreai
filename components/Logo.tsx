export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <path
        d="M50 5L85 20V45C85 65 75 80 50 95C25 80 15 65 15 45V20L50 5Z"
        fill="url(#shieldGradient)"
        stroke="#22d3ee"
        strokeWidth="2"
      />
      <path
        d="M50 25L65 32V48C65 58 60 65 50 75C40 65 35 58 35 48V32L50 25Z"
        fill="#020617"
        stroke="#22d3ee"
        strokeWidth="1.5"
      />
      <circle cx="50" cy="50" r="8" fill="#22d3ee" />
      <path
        d="M47 50L49 52L53 48"
        stroke="#020617"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <span className={`font-bold text-xl tracking-tight ${className}`}>
      <span className="text-cyan-400">Sentry</span>
      <span className="text-white">Core</span>
      <span className="text-cyan-400 ml-1 text-base">AI</span>
    </span>
  );
}
