// Melted-chocolate edge from the logo. Sits on the bottom of a section and hangs into the next one.
const drips = [
  { x: 90, h: 44 }, { x: 210, h: 82 }, { x: 330, h: 34 }, { x: 470, h: 100 },
  { x: 600, h: 48 }, { x: 720, h: 74 }, { x: 860, h: 36 }, { x: 980, h: 92 },
  { x: 1100, h: 54 }, { x: 1230, h: 80 }, { x: 1350, h: 40 },
];

export function ChocolateDrip() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 130"
      preserveAspectRatio="xMidYMin slice"
      className="pointer-events-none absolute bottom-0 left-0 z-10 h-[92px] w-full translate-y-[calc(100%-1px)]"
    >
      <defs>
        <linearGradient id="cocoa" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#4a2616" />
          <stop offset="1" stopColor="#3a1d12" />
        </linearGradient>
        <filter id="goo" x="-5%" y="-20%" width="110%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
          />
        </filter>
      </defs>
      <g filter="url(#goo)" fill="url(#cocoa)">
        <rect x="-30" y="-20" width="1500" height="42" />
        {drips.map((d) => (
          <g key={d.x}>
            <rect x={d.x - 8} y="10" width="16" height={d.h} rx="8" />
            <circle cx={d.x} cy={10 + d.h} r="10" />
          </g>
        ))}
      </g>
    </svg>
  );
}
