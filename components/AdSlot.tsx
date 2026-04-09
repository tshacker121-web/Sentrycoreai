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
      className={`w-full flex items-center justify-center ${className}`}
      data-ad-slot={slot}
    >
      {/* We removed the min-height, background, and borders.
          The div is now "invisible" but stays in the DOM 
          so the AdSense bot can still find the data-ad-slot attribute.
      */}
      <div className="hidden">
        Ad Space - {slot}
      </div>
    </div>
  );
}
