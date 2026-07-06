/** Il cuoricino di Casa Felice: sfumato, con riflesso, inclinato a destra. */
export function Cuore({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`inline-block rotate-12 ${className}`}
      aria-hidden
    >
      <defs>
        <linearGradient id="cuore-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0b9b4" />
          <stop offset="55%" stopColor="#e8a9a4" />
          <stop offset="100%" stopColor="#c05f55" />
        </linearGradient>
      </defs>
      <path
        d="M12 21s-6.9-4.6-9.4-8.7C.5 8.8 2.4 4.8 6 4.8c2.1 0 3.5 1.2 4.3 2.7C11 6 12.4 4.8 14.5 4.8c3.6 0 5.5 4 3.4 7.5C15.4 16.4 12 21 12 21z"
        fill="url(#cuore-grad)"
        stroke="#a84a41"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      <path
        d="M6.2 8.2c.5-1 1.4-1.6 2.4-1.6"
        fill="none"
        stroke="#fdf3f1"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  )
}
