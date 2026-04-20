/**
 * Standalone stub of @anyimmi/platform-client.
 *
 * In the monorepo this package provides SSO + entitlement hooks used by
 * the unified dashboard. For the PUBLIC marketing site (this repo),
 * those hooks are no-ops — marketing pages are public and don't need
 * to know who the visitor is.
 *
 * The real package lives at:
 *   https://github.com/techygarry/anyimmi-platform/tree/main/packages/platform-client
 *
 * Google Stitch users / anyone building against this repo can keep
 * using the imports below exactly as they are — they just render
 * nothing.
 */

import type { ReactNode } from 'react';

export function PlatformProvider({ children }: { children: ReactNode }) {
  return children as JSX.Element;
}

interface ProductSwitcherProps {
  currentProduct?: string;
  className?: string;
}

export function ProductSwitcher(_props: ProductSwitcherProps): JSX.Element | null {
  return null;
}
