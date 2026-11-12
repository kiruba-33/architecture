/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Architecture: Burgundy + Silver + Ivory
        burgundy: {
          DEFAULT: '#542638',       // Deep Burgundy (Primary Brand)
          hover: '#3F1C2A',         // Rich deeper burgundy for active/hover
          light: '#6B3147',
        },
        wine: {
          DEFAULT: '#875467',       // Muted Wine (Secondary / Link / Hover)
          hover: '#734455',
        },
        mauve: '#A99AA5',           // Mauve Grey (Subtle decorative accent)
        ivory: {
          DEFAULT: '#F5F1ED',       // Main warm background
          light: '#FAF8F5',
        },
        silver: {
          DEFAULT: '#D9D8DC',       // Borders, separators, subtle neutral
          light: '#EBEAEF',
          dark: '#C5C3CA',
        },
        charcoal: {
          DEFAULT: '#29252A',       // Main text & strong contrast
          dark: '#1A171B',
          muted: '#524C54',
        },
        // Semantic design tokens
        primary: {
          DEFAULT: '#542638',
          hover: '#3F1C2A',
        },
        secondary: {
          DEFAULT: '#875467',
          hover: '#734455',
        },
        accent: '#A99AA5',
        background: '#F5F1ED',
        surface: '#FFFFFF',
        'text-primary': '#29252A',
        'text-secondary': '#6D6770',
        border: '#D9D8DC',

        // Backward compatibility mappings transitioning to the new luxury palette
        ak: {
          green: '#542638',         // Deep Burgundy (Primary Brand)
          'green-dark': '#3F1C2A',  // Rich Deep Burgundy
          'green-light': '#875467', // Muted Wine
          charcoal: '#29252A',      // Charcoal Dark
          'charcoal-light': '#3A343C',
          yellow: '#875467',        // Muted Wine Accent
          'yellow-hover': '#542638',// Deep Burgundy
          light: '#F5F1ED',         // Ivory warm background
          border: '#D9D8DC',        // Silver border
          muted: '#6D6770',         // Muted Slate Text
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        condensed: ['"Roboto Condensed"', 'sans-serif-condensed', 'Arial Narrow', 'sans-serif'],
      },
      fontSize: {
        'hero-h1': ['clamp(2.5rem, 4.5vw + 1.25rem, 4.625rem)', { lineHeight: '1.02', letterSpacing: '-0.02em', fontWeight: '800' }],
        'section-h2': ['clamp(2rem, 2.5vw + 1rem, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.015em', fontWeight: '700' }],
        'card-h3': ['clamp(1.5rem, 1.25vw + 1rem, 1.875rem)', { lineHeight: '1.18', letterSpacing: '-0.01em', fontWeight: '700' }],
        'eyebrow': ['clamp(0.75rem, 0.5vw + 0.625rem, 0.875rem)', { lineHeight: '1.2', letterSpacing: '0.18em', fontWeight: '700' }],
        'body-lg': ['clamp(1rem, 0.5vw + 0.875rem, 1.125rem)', { lineHeight: '1.65' }],
        'body-reg': ['clamp(0.9375rem, 0.25vw + 0.875rem, 1rem)', { lineHeight: '1.6' }],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
}
