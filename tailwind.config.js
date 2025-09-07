/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { extend: {} },
  plugins: [],
  safelist: [
    "bg-red-600",
    "bg-neutral-800",
    "bg-teal-600",
    "bg-white",
    "text-white",
    "text-neutral-900",
    "ring-2",
    "ring-neutral-800",
  ],
};
