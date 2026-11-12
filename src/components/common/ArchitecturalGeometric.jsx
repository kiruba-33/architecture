/**
 * Original Architectural Geometric Composition.
 * Designed for inner page hero sections.
 *
 * Luxury Architecture Palette:
 * - Deep Burgundy (#542638)
 * - Muted Wine (#875467)
 * - Mauve Grey (#A99AA5)
 * - Ivory (#F5F1ED)
 * - Silver (#D9D8DC)
 * - Charcoal (#29252A)
 * - Pure White (#FFFFFF)
 *
 * Distinct original composition featuring dynamic cantilever diagonals,
 * precision drafting angles, and structural engineering facets.
 * Strictly original — does not reproduce any trademark or third-party logo.
 */
export default function ArchitecturalGeometric({ className = '' }) {
  return (
    <div
      className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 520 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md"
      >
        <defs>
          {/* Subtle architectural hatching pattern in Burgundy for engineering texture */}
          <pattern
            id="drafting-hatch"
            width="12"
            height="12"
            patternTransform="rotate(45 0 0)"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="12"
              stroke="#542638"
              strokeWidth="1.2"
              strokeOpacity="0.18"
            />
          </pattern>

          {/* Linear gradient for primary structural facet - Deep Burgundy */}
          <linearGradient id="facet-burgundy" x1="120" y1="40" x2="380" y2="360" gradientUnits="userSpaceOnUse">
            <stop stopColor="#542638" />
            <stop offset="1" stopColor="#3F1C2A" />
          </linearGradient>

          {/* Linear gradient for secondary facet - Muted Wine */}
          <linearGradient id="facet-wine" x1="280" y1="80" x2="480" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#875467" />
            <stop offset="1" stopColor="#6E3D4F" />
          </linearGradient>
        </defs>

        {/* 1. Background Drafting Grid Accent in Silver */}
        <g opacity="0.65">
          <line x1="40" y1="200" x2="480" y2="200" stroke="#D9D8DC" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="260" y1="40" x2="260" y2="360" stroke="#D9D8DC" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="260" cy="200" r="140" stroke="#D9D8DC" strokeWidth="1" strokeDasharray="3 6" />
        </g>

        {/* 2. Textured Engineering Shadow Plane */}
        <polygon
          points="80,320 220,100 320,100 180,320"
          fill="url(#drafting-hatch)"
        />

        {/* 3. Primary Angled Cantilever Block (Deep Burgundy) */}
        <polygon
          points="130,340 310,60 410,60 230,340"
          fill="url(#facet-burgundy)"
        />

        {/* 4. Structural White Precision Reveal Line */}
        <line
          x1="128"
          y1="342"
          x2="308"
          y2="62"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="square"
        />

        {/* 5. Interlocking Geometric Wedge (Rich Charcoal / Dark Burgundy Depth) */}
        <polygon
          points="230,340 370,120 440,230 300,340"
          fill="#3F1C2A"
        />

        {/* 6. Dynamic Muted Wine Accent Chevron */}
        <polygon
          points="290,100 450,100 380,210 220,210"
          fill="url(#facet-wine)"
        />

        {/* 7. Secondary Crisp Ivory/White Intersecting Void */}
        <polygon
          points="285,150 330,80 345,105 300,175"
          fill="#F5F1ED"
        />

        {/* 8. Mauve Grey Structural Block Anchor */}
        <polygon
          points="390,260 460,260 410,340 340,340"
          fill="#A99AA5"
        />

        {/* 9. Minimal Technical Registration Marks in Mauve & Burgundy */}
        <g stroke="#875467" strokeWidth="2">
          <line x1="475" y1="50" x2="495" y2="50" />
          <line x1="485" y1="40" x2="485" y2="60" />

          <line x1="60" y1="350" x2="80" y2="350" />
          <line x1="70" y1="340" x2="70" y2="360" />
        </g>
      </svg>
    </div>
  )
}
