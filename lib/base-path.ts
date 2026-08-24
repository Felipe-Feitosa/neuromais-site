/**
 * Mirrors the basePath logic in next.config.ts. next/image's `unoptimized`
 * mode does not auto-prefix local image src paths with basePath the way it
 * does for _next/* build assets, so every hardcoded "/foo.png" passed to
 * <Image> must go through this helper to resolve correctly once deployed
 * under /neuromais-site/ on GitHub Pages.
 */
export const basePath = process.env.GITHUB_ACTIONS === "true" ? "/neuromais-site" : "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
