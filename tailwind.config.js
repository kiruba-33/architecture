/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ESKY Architects Official Brand Palette (Extracted from Logo)
        coral: {
          DEFAULT: '#F57B54',       // Primary Coral Orange
          hover: '#E0653E',         // Richer coral for active/hover
          light: '#F89678',
          tint: '#FDEEE9',
        },
        burgundy: {
          DEFAULT: '#F57B54',       // Mapped to ESKY Coral Orange
          hover: '#E0653E',         // Richer coral hover
          light: '#F89678',
        },
        wine: {
          DEFAULT: '#6D6D6D',       // Mapped to ESKY Charcoal Grey
          hover: '#525252',
        },
        mauve: '#8C8C8C',           // Muted secondary accent
        ivory: {
          DEFAULT: '#F8F6F2',       // Main warm off-white foundation
          light: '#FFFFFF',
          dark: '#EFECE6',
        },
        silver: {
          DEFAULT: '#E8E5DF',       // Subtle borders, separators
          light: '#F2EFEB',
          dark: '#D5D1C9',
        },
        charcoal: {
          DEFAULT: '#29252A',       // Main text & strong contrast
          dark: '#1A171B',
          muted: '#6D6D6D',
        },
        // Semantic design tokens
        primary: {
          DEFAULT: '#F57B54',
          hover: '#E0653E',
        },
        secondary: {
          DEFAULT: '#6D6D6D',
          hover: '#525252',
        },
        accent: '#F57B54',
        background: '#F8F6F2',
        surface: '#FFFFFF',
        'text-primary': '#29252A',
        'text-secondary': '#6D6D6D',
        border: '#E8E5DF',

        // Backward compatibility mappings transitioning to the ESKY Architects brand palette
        ak: {
          green: '#F57B54',         // ESKY Coral Orange
          'green-dark': '#E0653E',  // Rich Coral Hover
          'green-light': '#6D6D6D', // Charcoal Grey
          charcoal: '#29252A',      // Charcoal Dark
          'charcoal-light': '#3A343C',
          yellow: '#6D6D6D',        // Muted Charcoal Grey
          'yellow-hover': '#F57B54',// Coral Orange
          light: '#F8F6F2',         // Warm off-white background
          border: '#E8E5DF',        // Subtle border
          muted: '#6D6D6D',         // Muted Charcoal Text
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        condensed: ['"Roboto Condensed"', 'sans-serif-condensed', 'Arial Narrow', 'sans-serif'],
      },
      fontSize: {
        'hero-h1': ['clamp(2rem, 4.5vw + 1rem, 4.625rem)', { lineHeight: '1.04', letterSpacing: '-0.02em', fontWeight: '800' }],
        'section-h2': ['clamp(1.75rem, 2.5vw + 0.875rem, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.015em', fontWeight: '700' }],
        'card-h3': ['clamp(1.25rem, 1.25vw + 0.875rem, 1.875rem)', { lineHeight: '1.18', letterSpacing: '-0.01em', fontWeight: '700' }],
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
