export const tokens = {
  colors: {
    bgPrimary: "var(--color-bg-primary)",
    bgSecondary: "var(--color-bg-secondary)",
    textPrimary: "var(--color-text-primary)",
    textInverse: "var(--color-text-inverse)",
    accentPrimary: "var(--color-accent-primary)",
    accentSuccess: "var(--color-accent-success)",
    accentError: "var(--color-accent-error)",
    colorPath:"var(--color-path)",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  radius: {
    sm: "0.375rem",
    md: "0.75rem",
    lg: "1rem",
    full: "9999px",
  },
} as const;

export type Tokens = typeof tokens;
