export default function JarvisMark({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 8H20L13 15L6 8Z" fill="currentColor" />
      <path d="M6 22H20L13 15L6 22Z" fill="currentColor" opacity="0.55" />
      <path
        d="M23 10C26 11.5 26 19 22.5 21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
