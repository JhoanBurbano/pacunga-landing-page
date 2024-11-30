interface DividerProps {
  className?: string
}

export default function Divider({ className }: DividerProps) {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={`w-full ${className}`}
    >
      <path
        d="M1200 0L0 0 892.25 114.72 1200 0z"
        className="shape-fill"
        fill="currentColor"
        fillOpacity="1"
      ></path>
    </svg>
  )
}
