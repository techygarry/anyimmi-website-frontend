import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageLayout from '@/components/InnerPageLayout';
import CategoryIcon from '@/components/CategoryIcon';
import CheckoutLink from '@/components/CheckoutLink';
import { getCategories, resolveImageUrl } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Asset Categories — AnyImmi Bundle',
  description: 'Browse all categories of professionally designed immigration marketing assets. PSD files for social media, brochures, flyers, business cards, and more.',
};

const ACCENT = '#573CFF';

export default async function CategoriesPage() {
  const categories = await getCategories();
  const totalAssets = categories.reduce((sum, c) => sum + (c.assetCount || 0), 0);

  return (
    <InnerPageLayout>
      {/* Breadcrumb */}
      <div className="breadcrumb1 section-bg overflow-hidden">
        <div className="container rr-container-1600">
          <div className="breadcrumb1__top">
            <div className="breadcrumb1__top-left">Asset Categories</div>
            <div className="breadcrumb1__top-right">
              <div className="breadcrumb1__top-right-text">{categories.length} Categories · {totalAssets}+ Premium Assets</div>
            </div>
          </div>
          <h1 className="breadcrumb1__title">Browse All {categories.length} Asset Categories — Find Exactly What You Need</h1>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="about-area8 section-spacing">
        <div className="container-1600">
          {/* Intro text */}
          <div className="row d-flex justify-content-center mb-5">
            <div className="col-xl-8 text-center">
              <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.7 }}>
                Every category includes fully layered PSD files editable in Photoshop and Adobe Illustrator.
                All assets are 100% IRCC-compliant and ready for print &amp; digital use.
              </p>
            </div>
          </div>

          {/* Category Cards */}
          <div className="row g-4">
            {categories.map((cat, i) => {
              const firstPreview = cat.previewImages?.[0] || cat.image;
              return (
                <div className="col-xl-3 col-lg-4 col-md-6" key={cat._id}>
                  <Link href={`/categories/${cat.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                    <div className="wow fadeInUp" data-wow-delay={`${0.05 * (i % 6)}s`} style={{
                      background: '#fff',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      cursor: 'pointer',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid rgba(0,0,0,0.06)',
                    }}>
                      {/* Preview Image */}
                      {firstPreview ? (
                        <div style={{
                          height: '200px',
                          overflow: 'hidden',
                          background: 'linear-gradient(135deg, #f5f1ec 0%, #ede6dc 100%)',
                          position: 'relative',
                        }}>
                          <img
                            src={resolveImageUrl(firstPreview)}
                            alt={cat.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                          />
                          {/* Asset count overlay */}
                          <div style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            background: 'rgba(0,0,0,0.7)',
                            backdropFilter: 'blur(8px)',
                            color: '#fff',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: 700,
                          }}>
                            {cat.assetCount || cat.fileCount || 0} items
                          </div>
                        </div>
                      ) : (
                        <div style={{
                          height: '160px',
                          background: 'linear-gradient(135deg, #0F2B46 0%, #1a3f5c 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                        }}>
                          {cat.icon ? (
                            <CategoryIcon name={cat.icon} size={56} className="text-white" />
                          ) : (
                            <span style={{
                              fontSize: '36px',
                              fontWeight: 700,
                              color: 'rgba(255,255,255,0.2)',
                              textTransform: 'uppercase',
                              letterSpacing: '4px',
                            }}>
                              {cat.name.slice(0, 3)}
                            </span>
                          )}
                          <div style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            background: 'rgba(255,255,255,0.15)',
                            color: '#fff',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: 700,
                          }}>
                            {cat.assetCount || cat.fileCount || 0} items
                          </div>
                        </div>
                      )}

                      {/* Card Body */}
                      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        {/* Icon + Title row */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                          {cat.icon && (
                            <div style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '10px',
                              background: 'rgba(87,60,255,0.08)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}>
                              <CategoryIcon name={cat.icon} size={20} className="text-[#573CFF]" />
                            </div>
                          )}
                          <h3 style={{
                            fontSize: '20px',
                            fontWeight: 700,
                            color: '#0F2B46',
                            margin: 0,
                            lineHeight: 1.3,
                          }}>
                            {cat.name}
                          </h3>
                        </div>

                        {/* Description */}
                        {cat.description && (
                          <p style={{
                            fontSize: '15px',
                            color: '#666',
                            lineHeight: 1.6,
                            margin: 0,
                            marginBottom: '16px',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}>
                            {cat.description}
                          </p>
                        )}

                        {/* Features pills */}
                        {cat.features.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                            {cat.features.slice(0, 3).map((f, idx) => (
                              <span key={idx} style={{
                                background: '#f5f1ec',
                                color: '#0F2B46',
                                borderRadius: '12px',
                                padding: '3px 10px',
                                fontSize: '12px',
                                fontWeight: 500,
                              }}>
                                {f}
                              </span>
                            ))}
                            {cat.features.length > 3 && (
                              <span style={{
                                color: '#999',
                                fontSize: '12px',
                                padding: '3px 4px',
                              }}>
                                +{cat.features.length - 3} more
                              </span>
                            )}
                          </div>
                        )}

                        {/* Footer */}
                        <div style={{
                          marginTop: 'auto',
                          paddingTop: '16px',
                          borderTop: '1px solid rgba(0,0,0,0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                          <span style={{ fontSize: '14px', color: ACCENT, fontWeight: 600 }}>
                            Explore Category <i className="fa-regular fa-arrow-right" style={{ marginLeft: '4px' }}></i>
                          </span>
                          {cat.fileCount && (
                            <span style={{
                              fontSize: '12px',
                              fontWeight: 700,
                              color: ACCENT,
                              background: 'rgba(87,60,255,0.08)',
                              borderRadius: '20px',
                              padding: '3px 10px',
                            }}>
                              {cat.fileCount} files
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-5 pt-4 wow fadeInUp" data-wow-delay="0.3s" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <p style={{ fontSize: '20px', fontWeight: 600, marginBottom: '20px', color: '#0F2B46' }}>
              All {categories.length} categories included in every AnyImmi Bundle plan
            </p>
            <CheckoutLink className="rr-btn-border btn-purple">
              <span className="text">GET INSTANT ACCESS</span>
              <span className="icon"><i className="fa-regular fa-arrow-right"></i></span>
            </CheckoutLink>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
