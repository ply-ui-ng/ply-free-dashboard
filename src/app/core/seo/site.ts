/** Canonical public site URL (Cloudflare Pages production). */
export const SITE_URL = 'https://demo.ply-ui.com';

export const SITE_NAME = 'Ply Free Dashboard';

export const SITE_DESCRIPTION =
  'Free Angular 22 + Tailwind CSS 4 SaaS admin dashboard template powered by Ply. Includes mock auth, app shell, users CRUD, settings, and a full free-component gallery.';

export const SITE_KEYWORDS = [
  'Angular dashboard',
  'Angular 22',
  'Tailwind CSS 4',
  'Ply',
  'admin template',
  'free dashboard',
  'SaaS starter',
  'component gallery',
  'open source',
].join(', ');

export const GITHUB_REPO_URL = 'https://github.com/ply-ui-ng/ply-free-dashboard';

export const BASE_UI_URL = 'https://ply-ui.com';

export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

export const SITE_AUTHOR = 'Ply / Lussos';

export interface SeoRouteData {
  title?: string;
  description?: string;
  /** When true, emit noindex,nofollow (useful for private app chrome). */
  noIndex?: boolean;
}
