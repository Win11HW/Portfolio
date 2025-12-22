/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#A855F7",
        secondary: "#D1D5DB",
        background: "#0a0a0f",
        card: "#12121a",
        "card-hover": "#1a1a25",
        hover: "#374151",
        white: "#FFFFFF",
        accent: {
          purple: "#a855f7",
          blue: "#3b82f6",
          cyan: "#06b6d4",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
        'glow-purple': 'radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(168, 85, 247, 0.15)',
        'glow-lg': '0 0 60px rgba(168, 85, 247, 0.2)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 40px rgba(168, 85, 247, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

