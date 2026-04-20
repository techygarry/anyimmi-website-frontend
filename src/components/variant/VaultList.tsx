import Link from 'next/link';
import type { CategoryData } from '@/lib/api';
import { V, MAX } from './tokens';

// Priority-ordered fallback matching the brief.
const FALLBACK: Array<Pick<CategoryData, 'name' | 'slug' | 'assetCount' | 'description'>> = [
  { name: 'A Million Dollar Bonus', slug: 'million-dollar-bonus', assetCount: 16, description: 'Founder-only. The 16 pieces we built for $1M+ firms.' },
  { name: 'High Impact Foundational Assets', slug: 'high-impact-foundational', assetCount: 16, description: 'The hero starting set — what we deploy on day one.' },
  { name: 'Professional Checklists', slug: 'professional-checklists', assetCount: 6, description: 'Client-facing checklists that survive CICC scrutiny.' },
  { name: 'Immigration Guides', slug: 'immigration-guides', assetCount: 32, description: 'Program-by-program guides your clients actually read.' },
  { name: 'Branding Assets', slug: 'branding-assets', assetCount: 17, description: 'PSDs, logos, color kits — your visual identity, solved.' },
  { name: 'Social Media Content', slug: 'social-media-content', assetCount: 15, description: 'Reels, carousels, posts — 90 days queued.' },
  { name: 'Content Calendar & AI', slug: 'content-calendar-ai', assetCount: 3, description: 'Never wonder what to post next.' },
  { name: 'Admin Related', slug: 'admin-related', assetCount: 11, description: 'Office templates that make the firm run itself.' },
  { name: 'Email Templates', slug: 'email-templates', assetCount: 10, description: 'Trigger emails + sequences tuned for RCIC flows.' },
  { name: 'Presentations & Video', slug: 'presentations-video', assetCount: 7, description: 'Keynote decks and client pitch videos.' },
  { name: 'Premium Marketing Engine', slug: 'premium-marketing-engine', assetCount: 36, description: 'Funnel + landing page assets you can ship today.' },
  { name: 'Trust Builders', slug: 'trust-builders', assetCount: 5, description: 'Testimonial systems and case-study scaffolding.' },
  { name: 'Unique Bonuses', slug: 'unique-bonuses', assetCount: 2, description: 'Misc high-value extras we slip in quietly.' },
  { name: 'Module A — Lead Conversion & Sales', slug: 'module-a-lead-conversion', assetCount: 20, description: 'Scripts + objection handlers from 1,200 consultations.' },
  { name: 'Module B — Client Experience', slug: 'module-b-client-experience', assetCount: 22, description: 'Welcome kits, onboarding, retention.' },
  { name: 'Module C — Marketing Content Packs', slug: 'module-c-content-packs', assetCount: 20, description: 'Hooks, carousels, polls — organized.' },
  { name: 'Module D — Ads, Funnels & Growth', slug: 'module-d-ads-funnels', assetCount: 20, description: 'Paid-ad templates that actually ran.' },
  { name: 'Module E — Ops, SOPs & Quality', slug: 'module-e-ops', assetCount: 20, description: 'Firm operations, end to end.' },
  { name: 'Expansion Assets', slug: 'expansion-assets', assetCount: 18, description: 'Future-facing scale kit for when you hire.' },
  { name: 'Claude Code Kit', slug: 'claude-code-kit', assetCount: 30, description: 'AI infrastructure for your practice.' },
  { name: 'AI Prompt Arsenal', slug: 'ai-prompt-arsenal', assetCount: 12, description: '237 prompts tuned for RCIC work.' },
  { name: 'CICC Compliance', slug: 'cicc-compliance', assetCount: 19, description: 'Regulator-facing playbooks. No guessing.' },
  { name: 'Ghost Consultant Differentiation', slug: 'ghost-consultant-differentiation', assetCount: 6, description: 'Why licensed wins. Scripted.' },
  { name: 'Immigration Data & Analytics', slug: 'immigration-data-analytics', assetCount: 16, description: 'Datasets + calculators with sources.' },
  { name: 'Client Matter Kits', slug: 'client-matter-kits', assetCount: 28, description: 'Program-specific intake kits.' },
  { name: 'Business Playbooks', slug: 'business-playbooks', assetCount: 6, description: 'Firm scaling playbooks from the 1% firms.' },
  { name: 'Video Production Kit', slug: 'video-production-kit', assetCount: 18, description: 'Reel scripts + shot lists for immigration topics.' },
];

export function VaultList({ categories }: { categories: CategoryData[] }) {
  const list = (categories && categories.length > 0 ? categories : FALLBACK) as Array<Pick<CategoryData, 'name' | 'slug' | 'assetCount' | 'description'>>;

  return (
    <section
      id="arsenal"
      style={{
        background: V.bg,
        padding: '140px 32px',
        borderBottom: `1px solid ${V.divider}`,
      }}
    >
      <div style={{ maxWidth: MAX, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
            gap: 64,
            marginBottom: 80,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: V.mono,
                fontSize: 11,
                letterSpacing: '0.22em',
                color: V.gold,
                textTransform: 'uppercase',
                marginBottom: 24,
              }}
            >
              THE ARSENAL · 27 VAULTS · 305 ASSETS
            </div>
            <h2
              style={{
                fontFamily: V.serif,
                fontWeight: 600,
                fontSize: 'clamp(40px, 6vw, 72px)',
                lineHeight: 1.0,
                letterSpacing: '-0.025em',
                color: V.cream,
                margin: 0,
              }}
            >
              What&apos;s inside.
            </h2>
          </div>
          <p
            style={{
              fontFamily: V.sans,
              fontSize: 18,
              lineHeight: 1.6,
              color: V.mutedSoft,
              margin: 0,
              alignSelf: 'end',
            }}
          >
            Every vault is hand-assembled, CICC-aware, and tested in live practice.
            Click a vault to preview the assets inside.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: 0,
            borderTop: `1px solid ${V.divider}`,
          }}
        >
          {list.slice(0, 27).map((c, i) => {
            const locked = /million.dollar/i.test(c.name) || /million-dollar/i.test(c.slug);
            const n = String(i + 1).padStart(2, '0');
            return (
              <Link
                key={c.slug}
                href={`/categories/${c.slug}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr auto',
                  alignItems: 'baseline',
                  gap: 20,
                  padding: '28px 24px',
                  borderBottom: `1px solid ${V.divider}`,
                  borderLeft: locked ? `3px solid ${V.gold}` : '3px solid transparent',
                  textDecoration: 'none',
                  color: V.cream,
                  background: locked ? V.goldDim : 'transparent',
                }}
              >
                <div
                  style={{
                    fontFamily: V.mono,
                    fontSize: 13,
                    color: V.muted,
                    letterSpacing: '0.1em',
                  }}
                >
                  {n}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: V.serif,
                      fontWeight: 600,
                      fontSize: 22,
                      color: V.cream,
                      letterSpacing: '-0.01em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    {locked && <span aria-hidden style={{ color: V.gold, fontSize: 16 }}>🔒</span>}
                    {c.name}
                    {locked && (
                      <span
                        style={{
                          fontFamily: V.mono,
                          fontSize: 10,
                          letterSpacing: '0.15em',
                          color: V.gold,
                          background: 'rgba(212,175,55,0.12)',
                          padding: '3px 8px',
                          borderRadius: 2,
                          textTransform: 'uppercase',
                          fontWeight: 500,
                        }}
                      >
                        Founder-only
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: V.sans,
                      fontSize: 14,
                      color: V.mutedSoft,
                      marginTop: 8,
                      lineHeight: 1.5,
                    }}
                  >
                    {c.description || '—'}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: V.mono,
                    fontSize: 12,
                    color: V.gold,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {c.assetCount ?? 0} assets →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
