import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addBase }) {
      addBase({
        'h1': {
          '@apply mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl': {},
        },
      });
    },
  ]
};
export default config;
