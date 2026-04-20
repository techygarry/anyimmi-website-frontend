const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/** Resolve image URL — prepends API_URL for local /uploads paths */
export function resolveImageUrl(url: string): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${API_URL}${url}`;
}

// ─── Shared cached fetch (dedup parallel server-side calls) ─
const _cache = new Map<string, { data: unknown; ts: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 min in-memory

async function cachedFetch<T>(url: string, revalidate: number): Promise<T | null> {
  const now = Date.now();
  const hit = _cache.get(url);
  if (hit && now - hit.ts < CACHE_TTL) return hit.data as T;

  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) return null;
  const json = await res.json();
  const data = json.data ?? null;
  _cache.set(url, { data, ts: now });
  return data as T;
}

// ─── Categories ────────────────────────────────────────────

export interface CategoryData {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  longDescription?: string;
  icon?: string;
  image?: string;
  fileCount?: string;
  features: string[];
  previewImages: string[];
  useCases: string[];
  assetCount: number;
  sortOrder: number;
  isLocked?: boolean;
  unlockTier?: string;
}

export async function getCategories(): Promise<CategoryData[]> {
  return (await cachedFetch<CategoryData[]>(`${API_URL}/api/assets/categories`, 300)) ?? [];
}

export async function getCategoryBySlug(slug: string): Promise<CategoryData | null> {
  return cachedFetch<CategoryData>(`${API_URL}/api/assets/categories/${slug}`, 300);
}

// ─── Bundle Plans ──────────────────────────────────────────

export interface BundlePlanData {
  id: string;
  name: string;
  price: number;
  valuePrice: number;
  portalProMonths: number;
  features: string[];
  delivery: string;
  highlight: boolean;
  active: boolean;
  valueAnchor?: string;
  tagline?: string;
  topTierEntitlements?: string[];
}

export async function getBundlePlans(): Promise<BundlePlanData[]> {
  return (await cachedFetch<BundlePlanData[]>(`${API_URL}/api/payments/bundle-plans`, 60)) ?? [];
}

// ─── Founder Counter ───────────────────────────────────────

export interface FounderCounterData {
  current: number;
  target: number;
  remaining: number;
}

export async function getFounderCounter(): Promise<FounderCounterData | null> {
  return cachedFetch<FounderCounterData>(`${API_URL}/api/content/founder-counter`, 60);
}

// ─── Bonus Countdown ───────────────────────────────────────

export interface BonusCountdownData {
  expiresAt: string;
  bonusDescription: string;
  secondsRemaining: number;
}

export async function getBonusCountdown(): Promise<BonusCountdownData | null> {
  return cachedFetch<BonusCountdownData>(`${API_URL}/api/content/bonus-countdown`, 60);
}

// ─── Slider Images ──────────────────────────────────────────

export interface SliderImageData {
  _id: string;
  title: string;
  imageUrl: string;
}

export async function getSliderImages(): Promise<SliderImageData[]> {
  return (await cachedFetch<SliderImageData[]>(`${API_URL}/api/content/slider-images`, 300)) ?? [];
}

// ─── Testimonials ──────────────────────────────────────────

export interface TestimonialData {
  _id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatarColor: string;
}

export async function getTestimonials(): Promise<TestimonialData[]> {
  return (await cachedFetch<TestimonialData[]>(`${API_URL}/api/content/testimonials`, 300)) ?? [];
}

// ─── Sub-Categories ─────────────────────────────────────────

export interface SubCategoryData {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  format?: string;
  previewImages: string[];
  sortOrder: number;
}

export interface SubCategoryDetail extends SubCategoryData {
  category: {
    _id: string;
    name: string;
    slug: string;
    icon?: string;
  };
}

export async function getSubCategories(slug: string): Promise<SubCategoryData[]> {
  return (await cachedFetch<SubCategoryData[]>(`${API_URL}/api/content/categories/${slug}/subcategories`, 300)) ?? [];
}

export async function getSubCategory(id: string): Promise<SubCategoryDetail | null> {
  return cachedFetch<SubCategoryDetail>(`${API_URL}/api/content/subcategories/${id}`, 300);
}

// ─── Category Items (public asset listing) ─────────────────

export interface CategoryItemData {
  _id: string;
  name: string;
  description: string;
  fileFormat: string;
  previewUrl?: string;
  tags: string[];
}

export interface CategoryItemDetail extends CategoryItemData {
  category: {
    _id: string;
    name: string;
    slug: string;
    icon?: string;
  };
}

export async function getCategoryItems(slug: string): Promise<CategoryItemData[]> {
  return (await cachedFetch<CategoryItemData[]>(`${API_URL}/api/content/categories/${slug}/items`, 300)) ?? [];
}

export async function getCategoryItem(id: string): Promise<CategoryItemDetail | null> {
  return cachedFetch<CategoryItemDetail>(`${API_URL}/api/content/items/${id}`, 300);
}

// ─── Checkout ──────────────────────────────────────────────

/**
 * Start a Stripe checkout session for a bundle tier.
 *
 * `justBought` is passed through to the backend so it can append
 * `?just-bought=<tier>` to the Stripe success_url. That query param then
 * drives the 24-hour post-checkout upgrade modal on /thank-you.
 */
export async function bundleCheckout(
  tier: string,
  justBought?: "toolkit" | "firm",
): Promise<string> {
  const res = await fetch(`${API_URL}/api/payments/bundle-checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tier, justBought }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Checkout failed");
  }

  const data = await res.json();
  return data.data.url;
}
