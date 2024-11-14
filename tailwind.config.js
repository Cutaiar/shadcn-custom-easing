/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      transitionTimingFunction: {
        "ease-in-quad": "var(--ease-in-quad)",
        "ease-in-cubic": "var(--ease-in-cubic)",
        "ease-in-quart": "var(--ease-in-quart)",
        "ease-in-quint": "var(--ease-in-quint)",
        "ease-in-expo": "var(--ease-in-expo)",
        "ease-in-circ": "var(--ease-in-circ)",
        "ease-out-quad": "var(--ease-out-quad)",
        "ease-out-cubic": "var(--ease-out-cubic)",
        "ease-out-quart": "var(--ease-out-quart)",
        "ease-out-quint": "var(--ease-out-quint)",
        "ease-out-expo": "var(--ease-out-expo)",
        "ease-out-circ": "var(--ease-out-circ)",
        "ease-in-out-quad": "var(--ease-in-out-quad)",
        "ease-in-out-cubic": "var(--ease-in-out-cubic)",
        "ease-in-out-quart": "var(--ease-in-out-quart)",
        "ease-in-out-quint": "var(--ease-in-out-quint)",
        "ease-in-out-expo": "var(--ease-in-out-expo)",
        "ease-in-out-circ": "var(--ease-in-out-circ)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
