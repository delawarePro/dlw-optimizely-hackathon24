import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addBase }: PluginAPI) {
      addBase({
        'h1': {
          '@apply mt-2 text-3xl font-semibold tracking-tight sm:text-4xl': {},
        },
        'h2': {
          '@apply mt-2 text-2xl font-semibold tracking-tight sm:text-xl': {},
        },
        'h3': {
          '@apply mt-2 text-xl font-semibold tracking-tight sm:text-lg': {},
        },
        'h4': {
          '@apply font-bold tracking-tight sm:text-base': {},
        }
      });
    },
  ]
};
export default config;
