type IconProps = { className?: string };
const base = "h-6 w-6";

export function IconRadar({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" opacity="0.35" />
      <circle cx="12" cy="12" r="5.5" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <path d="M12 3V1.5M21 12h1.5M12 21v1.5M1.5 12H3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconChip({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9.5 7V3.5M14.5 7V3.5M9.5 20.5V17M14.5 20.5V17M7 9.5H3.5M7 14.5H3.5M20.5 9.5H17M20.5 14.5H17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconBars({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 20V11M12 20V4M19 20V14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 20H21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function IconTarget({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
      <path d="M17 7L21 3M21 3H17.5M21 3V6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function IconInstitution({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 9.5L12 4L20 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 10V19M9.5 10V19M14.5 10V19M18.5 10V19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M3.5 19.5H20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconBroadcast({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="16" r="2" fill="currentColor" />
      <path d="M8.5 13.5C7 15 7 17 8.5 18.5M15.5 13.5C17 15 17 17 15.5 18.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5.5 10.5C2.5 13.5 2.5 18 5.5 21M18.5 10.5C21.5 13.5 21.5 18 18.5 21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <path d="M12 4L12 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8 4H16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconNetworkPin({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21C12 21 18 14.8 18 10A6 6 0 0 0 6 10C6 14.8 12 21 12 21Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.3" fill="currentColor" />
    </svg>
  );
}

export function IconLayers({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3L21 8L12 13L3 8L12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      <path d="M3 16L12 21L21 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
    </svg>
  );
}
