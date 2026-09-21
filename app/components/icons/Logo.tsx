export default function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 6L44 6L24 42Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="20" r="4.2" fill="currentColor" />
    </svg>
  );
}
