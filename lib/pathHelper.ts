// Helper to get correct path with basePath for GitHub Pages
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
};
