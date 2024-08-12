import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        
        orange: '#ea580c',
        green: {
          light: '#15803d',
          dark: '#14532d'
        },
        gray: {
          'super-light': '#F3F4F6',
          light: '#9ca3af',
          normal: '#374151',
          dark: '#111827'
        }
      },
      borderWidth: {
        '1': '1px',
        '2': '2px'
      }
    },
    container: {
      screens: {
        sm: '600px',
        md: '608px',
        lg: '900px',
        '2xl': '1240px',
      },
    },
  },
  plugins: [],
};
export default config;
