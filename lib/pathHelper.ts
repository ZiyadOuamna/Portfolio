// Helper to get correct path with basePath for GitHub Pages
// In dev (localhost), return plain path to avoid 404s.
export const getAssetPath = (path: string): string => {
  const isDev = typeof window !== 'undefined' && window.location.hostname === 'localhost';
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return isDev ? path : `${basePath}${path}`;
};
