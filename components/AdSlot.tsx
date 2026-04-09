'use client';

export function AdSlot({
  slot,
  className = ""
}: {
  slot: string;
  className?: string;
}) {
  return (
    <div
      className={`min-h-[280px] w-full flex items-center justify-center bg-slate-900/50 border border-slate-800 rounded-lg ${className}`}
      data-ad-slot={slot}
    >
      <div className="text-slate-600 text-sm font-mono">
        Ad Space - {slot}
      </div>
    </div>
  );
}
