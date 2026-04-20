import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import InnerPageLayout from '@/components/InnerPageLayout';
import CategoryIcon from '@/components/CategoryIcon';
import CheckoutLink from '@/components/CheckoutLink';
import { getCategories, getCategoryBySlug, getSubCategories, resolveImageUrl } from '@/lib/api';

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = await getCategoryBySlug(slug);
  if (!cat) return { title: 'Category Not Found — AnyImmi' };
  return {
    title: `${cat.name} — AnyImmi Bundle`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [cat, subCategories] = await Promise.all([
    getCategoryBySlug(slug),
    getSubCategories(slug),
  ]);
  if (!cat) notFound();

  return (
    <InnerPageLayout>
      {/* Breadcrumb */}
      <div className="breadcrumb1 section-bg overflow-hidden">
        <div className="container rr-container-1600">
          <div className="breadcrumb1__top">
            <div className="breadcrumb1__top-left">
              <Link href="/categories" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>Categories</Link>
              {' / '}{cat.name}
            </div>
            <div className="breadcrumb1__top-right">
              <div className="breadcrumb1__top-right-text">{subCategories.length > 0 ? `${subCategories.length} Sub-Categories` : cat.fileCount || ''}</div>
            </div>
          </div>
          <h1 className="breadcrumb1__title">{cat.name} — Professional Templates for Immigration Consultants</h1>
        </div>
      </div>

      <div className="about-area8 section-spacing">
        <div className="container-1600">

          {/* Preview Images */}
          {cat.previewImages.length > 0 && (
            <div className="row g-3 mb-5">
              {cat.previewImages.map((img, i) => (
                <div className="col-xl-3 col-md-6" key={i}>
                  <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} className="wow fadeInUp" data-wow-delay={`${0.1 * i}s`}>
                    <img src={resolveImageUrl(img)} alt={`${cat.name} preview ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Category Info */}
          <div className="mb-5">
            <h2 className="section-title text-black rr-title-anim-2">{cat.name}</h2>
            {cat.longDescription && (
              <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.7, marginBottom: '24px', maxWidth: '800px' }}>{cat.longDescription}</p>
            )}

            {(cat.features.length > 0 || cat.useCases.length > 0) && (
              <div className="row gy-4 mb-4">
                {cat.features.length > 0 && (
                  <div className={cat.useCases.length > 0 ? "col-xl-6" : "col-xl-12"}>
                    <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#0F2B46' }}>What&apos;s Included</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {cat.features.map((f, idx) => (
                        <span key={`${f}-${idx}`} style={{
                          background: 'rgba(87,60,255,0.08)', color: '#573CFF',
                          borderRadius: '20px', padding: '6px 16px', fontSize: '14px', fontWeight: 600,
                        }}>
                          <i className="fa-solid fa-check" style={{ marginRight: '6px' }}></i>{f}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {cat.useCases.length > 0 && (
                  <div className={cat.features.length > 0 ? "col-xl-6" : "col-xl-12"}>
                    <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#0F2B46' }}>What You Can Do</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {cat.useCases.map((uc, idx) => (
                        <li key={`${uc}-${idx}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none" style={{ flexShrink: 0 }}>
                            <path d="M15.1244 5.03705C15.2054 4.95436 15.3021 4.88867 15.4089 4.84382C15.5156 4.79898 15.6302 4.77588 15.746 4.77588C15.8618 4.77588 15.9764 4.79898 16.0832 4.84382C16.1899 4.88867 16.2866 4.95436 16.3677 5.03705C16.7073 5.38024 16.7121 5.9348 16.3796 6.28393L9.35787 14.5846C9.27815 14.6721 9.18141 14.7425 9.07356 14.7913C8.96571 14.8402 8.84903 14.8665 8.73064 14.8688C8.61226 14.871 8.49467 14.849 8.38506 14.8043C8.27545 14.7595 8.17614 14.6928 8.09319 14.6083L3.82056 10.2787C3.65578 10.1106 3.56348 9.88466 3.56348 9.6493C3.56348 9.41394 3.65578 9.18797 3.82056 9.01993C3.9016 8.93724 3.99833 8.87154 4.10507 8.8267C4.21182 8.78185 4.32643 8.75875 4.44222 8.75875C4.558 8.75875 4.67262 8.78185 4.77936 8.8267C4.88611 8.87154 4.98283 8.93724 5.06387 9.01993L8.68812 12.6929L15.1006 5.06318L15.1244 5.03705Z" fill="#573CFF"/>
                          </svg>
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sub-Categories Grid */}
          {subCategories.length > 0 && (
            <div className="mb-5">
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0F2B46', marginBottom: '24px' }}>
                All Sub-Categories ({subCategories.length})
              </h3>
              <div className="row g-4">
                {subCategories.map((sub, i) => (
                  <div className="col-xl-3 col-lg-4 col-md-6" key={sub._id}>
                    <Link href={`/categories/${slug}/${sub._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="anyimmi-subcat-card wow fadeInUp" data-wow-delay={`${0.05 * (i % 8)}s`}>
                        <div className="anyimmi-subcat-card__icon-box">
                          <i className="fa-regular fa-file-lines"></i>
                          <span className="anyimmi-subcat-card__num">#{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        <h4 className="anyimmi-subcat-card__title">{sub.name}</h4>
                        {sub.description && (
                          <p className="anyimmi-subcat-card__desc">{sub.description}</p>
                        )}
                        <div className="anyimmi-subcat-card__footer">
                          {sub.format && (
                            <span className="anyimmi-subcat-card__format">{sub.format}</span>
                          )}
                          <span className="anyimmi-subcat-card__arrow">
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA + Navigation */}
          <div className="text-center mt-5 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <p style={{ fontSize: '16px', color: '#777', marginBottom: '16px' }}>
              All items in this category are included in the AnyImmi Bundle.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link href="/categories" className="rr-btn-border">
                <span className="text">BROWSE ALL CATEGORIES</span>
                <span className="icon"><i className="fa-regular fa-arrow-right"></i></span>
              </Link>
              <CheckoutLink className="rr-btn-border btn-purple">
                <span className="text">GET BUNDLE</span>
                <span className="icon"><i className="fa-regular fa-arrow-right"></i></span>
              </CheckoutLink>
            </div>
          </div>

        </div>
      </div>
    </InnerPageLayout>
  );
}
