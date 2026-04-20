import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import InnerPageLayout from '@/components/InnerPageLayout';
import CategoryIcon from '@/components/CategoryIcon';
import CheckoutLink from '@/components/CheckoutLink';
import { getSubCategory, resolveImageUrl } from '@/lib/api';

export async function generateMetadata({ params }: { params: Promise<{ slug: string; itemId: string }> }): Promise<Metadata> {
  const { itemId } = await params;
  const sub = await getSubCategory(itemId);
  if (!sub) return { title: 'Not Found — AnyImmi' };
  return {
    title: `${sub.name} — AnyImmi Bundle`,
    description: sub.description?.slice(0, 160),
  };
}

export default async function SubCategoryDetailPage({ params }: { params: Promise<{ slug: string; itemId: string }> }) {
  const { slug, itemId } = await params;
  const sub = await getSubCategory(itemId);
  if (!sub) notFound();

  const catName = sub.category?.name || 'Category';
  const catSlug = sub.category?.slug || slug;

  return (
    <InnerPageLayout>
      {/* Breadcrumb */}
      <div className="breadcrumb1 section-bg overflow-hidden">
        <div className="container rr-container-1600">
          <div className="breadcrumb1__top">
            <div className="breadcrumb1__top-left">
              <Link href="/categories" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>Categories</Link>
              {' / '}
              <Link href={`/categories/${catSlug}`} style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>{catName}</Link>
              {' / '}{sub.name}
            </div>
            <div className="breadcrumb1__top-right">
              <div className="breadcrumb1__top-right-text">
                {sub.previewImages.length > 0 ? `${sub.previewImages.length} Preview Images` : ''}
              </div>
            </div>
          </div>
          <h1 className="breadcrumb1__title">{sub.name}</h1>
        </div>
      </div>

      <div className="about-area8 section-spacing">
        <div className="container-1600">

          {/* Preview Images Gallery or Icon Fallback */}
          <div className="mb-5">
            {sub.previewImages.length > 0 ? (
              sub.previewImages.length === 1 ? (
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
                      <img
                        src={resolveImageUrl(sub.previewImages[0])}
                        alt={sub.name}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="row g-3">
                  {sub.previewImages.map((img, i) => (
                    <div className={sub.previewImages.length <= 2 ? "col-xl-6" : "col-xl-4 col-md-6"} key={i}>
                      <div
                        className="wow fadeInUp"
                        data-wow-delay={`${0.1 * i}s`}
                        style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}
                      >
                        <img
                          src={resolveImageUrl(img)}
                          alt={`${sub.name} preview ${i + 1}`}
                          style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <div className="row justify-content-center">
                <div className="col-xl-6">
                  <div style={{
                    background: 'linear-gradient(135deg, #0F2B46 0%, #1a3f5c 100%)',
                    borderRadius: '16px', padding: '60px 40px', textAlign: 'center',
                  }}>
                    {sub.category?.icon ? (
                      <CategoryIcon name={sub.category.icon} size={64} className="text-white" />
                    ) : (
                      <i className="fa-regular fa-file-lines" style={{ fontSize: '64px', color: 'rgba(255,255,255,0.4)' }}></i>
                    )}
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginTop: '16px', marginBottom: 0 }}>
                      Preview images coming soon
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Description & Details */}
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                <h2 className="section-title text-black rr-title-anim-2" style={{ fontSize: '32px' }}>
                  {sub.name}
                </h2>

                {/* Description */}
                {sub.description && (
                  <p style={{ fontSize: '17px', color: '#444', lineHeight: 1.7, marginBottom: '32px' }}>
                    {sub.description}
                  </p>
                )}

                {/* Info box */}
                <div style={{
                  background: 'rgba(87,60,255,0.04)', border: '1px solid rgba(87,60,255,0.12)',
                  borderRadius: '12px', padding: '20px', marginBottom: '32px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#573CFF"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg>
                    <span style={{ fontSize: '15px', fontWeight: 600, color: '#573CFF' }}>Included in AnyImmi Bundle</span>
                  </div>
                  <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: 1.5 }}>
                    This item is part of the {catName} category. Get instant access when you purchase any AnyImmi bundle plan.
                  </p>
                </div>

                {/* CTA */}
                <div className="d-flex gap-3 flex-wrap">
                  <CheckoutLink className="rr-btn-border btn-purple">
                    <span className="text">GET THE BUNDLE</span>
                    <span className="icon"><i className="fa-regular fa-arrow-right"></i></span>
                  </CheckoutLink>
                  <Link href={`/categories/${catSlug}`} className="rr-btn-border">
                    <span className="text">BACK TO {catName.toUpperCase()}</span>
                    <span className="icon"><i className="fa-regular fa-arrow-left"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </InnerPageLayout>
  );
}
