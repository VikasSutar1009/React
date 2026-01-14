/** {import('taiwindcss ).Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fixify Brand Palette
        fixify: {
          blue: '#3B82F6',    // Trust & Electrical
          dark: '#0F172A',    // Professional background
          steel: '#45569',    // Fabrication
          accent: '#FACC15',  // Highlights/Electician sparks
        }
      },
      animation: {
        'flicker': 'flicker 3s linear infinite',
        'shine': 'shine 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999': { opacity: '0.4' },
        },
        shine: {
          '0%': { left: '-100' },
          '100%': {left: '100%'},
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'brush-stroke': "url('/assets/brush-reveal.png')",
      }
    },
  },
  Plugin: []
}