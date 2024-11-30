interface HexagonProps {
  className?: string
  children?: React.ReactNode
  with: string
}

export default function Hexagon({ className, children }: HexagonProps) {
  return (
    <figure className={`relative flex flex-col w-min ${className}`}>
      <main className="absolute h-full w-[164px] left-14 p-4 flex flex-col justify-center items-center">
        {children}
      </main>
      <svg
        id="Capa_10"
        data-name="Capa 10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 222.25 165.28"
        className="w-[223px] h-[165px]"
      >
        <polygon
          fill="#543f21"
          points="174.54 0 143.13 0 79.12 0 47.71 0 0 82.64 47.71 165.28 79.12 165.28 143.13 165.28 174.54 165.28 222.25 82.64 174.54 0"
        />
        <polygon
          fill="#ffc84d"
          points="80.68 162.57 172.98 162.57 219.13 82.64 172.98 2.71 80.68 2.71 34.53 82.64 80.68 162.57"
        />
      </svg>
    </figure>
  )
}
