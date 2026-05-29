// Color Palette
export const colors = {
  primary: "#3b82f6",
  primaryDark: "#1e40af",
  secondary: "#2563eb",
  accent: "#60a5fa",
  light: "#e8f4ff",
  lightBg: "#eff6ff",
  border: "#bfdbfe",
  borderLight: "#dbeafe",
  borderLighter: "#93c5fd",
  text: "#374151",
  success: "#22c55e",
  successLight: "#dcfce7",
  successBorder: "#86efac",
  warning: "#f59e0b",
  error: "#f43f5e",
  info: "#0ea5e9",
  purple: "#8b5cf6",
  cyan: "#06b6d4",
};

// Utility function to create icon box style with color
export const getIconBoxStyle = (color) => ({
  width: 52,
  height: 52,
  borderRadius: "16px",
  background: `linear-gradient(145deg, ${color}22, ${color}44)`,
  boxShadow: `3px 3px 0px ${color}55, inset 0 1px 0 rgba(255,255,255,0.8)`,
  border: `2px solid ${color}44`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 22,
  flexShrink: 0,
});

// Utility function to create stat card style with color
export const getStatCardStyle = (color) => ({
  background: `linear-gradient(145deg, ${color}11, ${color}22)`,
  borderRadius: "16px",
  border: `2px solid ${color}33`,
  boxShadow: `3px 3px 0px ${color}33`,
  padding: "12px 8px",
  textAlign: "center",
});
