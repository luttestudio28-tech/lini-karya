import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(98% 0.01 250)",
        foreground: "oklch(20% 0.01 250)",
        accent: "oklch(70% 0.1 250)",
        muted: "oklch(90% 0.01 250)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      spacing: {
        'section': '8rem',
        'container': '2rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
