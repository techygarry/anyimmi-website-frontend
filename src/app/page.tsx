import type { Metadata } from 'next';
import Loader from '@/components/Loader';
import ProgressBar from '@/components/ProgressBar';
import SideToggle from '@/components/SideToggle';
import Header from '@/components/Header';
import CheckoutButton from '@/components/CheckoutButton';
import CheckoutLink from '@/components/CheckoutLink';
import CountdownTimer from '@/components/CountdownTimer';
import CategoryIcon from '@/components/CategoryIcon';
import ImageSlider from '@/components/ImageSlider';
import TestimonialSlider from '@/components/TestimonialSlider';
import Link from 'next/link';
import { getCategories, getBundlePlans } from '@/lib/api';

export const metadata: Metadata = {
  title: 'AnyImmi — The Ultimate Marketing Bundle for Canadian Immigration Consultants',
  description: 'Get 1,000+ professionally designed, IRCC-compliant marketing assets for immigration consultants. PSD files, social media, brochures & more. Instant download.',
};

export default async function Home() {
  const [categories, plans] = await Promise.all([getCategories(), getBundlePlans()]);
  return (
    <div style={{ background: '#f6f0e9' }}>
      <Loader />
      <ProgressBar />
      <SideToggle />
          <Header
            logoSrc="/assets/imgs/home-8/logo/dark-logo.png"
            containerClass="rr-container-1800"
          />

          <main>

            {/* Hero area start */}
            <div className="intro-area8" id="hero">
              <div className="intro-area8__shape1"><img src="/assets/imgs/home-8/intro/intro-gradient1.png" alt="decorative shape" /></div>
              <div className="intro-area8__shape2"><img src="/assets/imgs/home-8/intro/intro-gradient2.png" alt="decorative shape" /></div>
              <div className="intro-area8__shape3"><img src="/assets/imgs/home-8/intro/intro-gradient3.png" alt="decorative shape" /></div>
              <div className="intro-area8__shape4"><img src="/assets/imgs/home-8/intro/intro-gradient4.png" alt="decorative shape" /></div>
              <div className="intro-area8__shape5"><img src="/assets/imgs/home-8/intro/intro-shape1.png" alt="decorative shape" /></div>
              <div className="intro-area8__shape6"><img src="/assets/imgs/home-8/intro/intro-shape2.png" alt="decorative shape" /></div>
              <div className="container">
                <div className="row display-flex justify-content-center align-items-center">
                  <div className="col-xl-9">
                    <div className="intro-area8__content">
                      <div className="intro-area8__review">
                        <div className="intro-area8__review-thumbs">
                          <img src="/assets/imgs/home-8/hero/review-thumb6_1.png" alt="Immigration consultant" />
                          <img src="/assets/imgs/home-8/hero/review-thumb6_2.png" alt="Immigration consultant" />
                          <img src="/assets/imgs/home-8/hero/review-thumb6_3.png" alt="Immigration consultant" />
                        </div>
                        <p className="intro-area8__review-text">Trusted by 500+ RCICs across Canada</p>
                      </div>
                      <h1 className="intro-area8__title rr-title-anim-2">The Ultimate Marketing Bundle
                        for Canadian <span>Immigration</span> Consultants</h1>
                      <p className="intro-area8__text wow fadeInUp" data-wow-delay="0.3s">1,000+ professionally designed,
                        IRCC-compliant PSD marketing assets for immigration consultants. Editable in Photoshop &amp; Adobe Illustrator. Instant download.
                        Save 50+ hours on content creation.</p>
                      <CountdownTimer />
                      <CheckoutLink className="rr-btn-border btn-purple wow fadeInUp" data-wow-delay="0.4s">
                        <span className="text">GET INSTANT ACCESS — $97</span>
                        <span className="icon"><i className="fa-regular fa-arrow-right"></i></span>
                      </CheckoutLink>
                      <a href="#whats-inside" className="intro-area8__link">See What&apos;s Inside</a>

                      <div className="intro-area8__features">
                        <div className="intro-area8__feature">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 0L10.12 5.88L16 8L10.12 10.12L8 16L5.88 10.12L0 8L5.88 5.88L8 0Z" fill="#573CFF"/>
                          </svg>
                          <span>1,000+ Files</span>
                        </div>
                        <div className="intro-area8__feature">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 0L10.12 5.88L16 8L10.12 10.12L8 16L5.88 10.12L0 8L5.88 5.88L8 0Z" fill="#573CFF"/>
                          </svg>
                          <span>IRCC Compliant</span>
                        </div>
                        <div className="intro-area8__feature">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 0L10.12 5.88L16 8L10.12 10.12L8 16L5.88 10.12L0 8L5.88 5.88L8 0Z" fill="#573CFF"/>
                          </svg>
                          <span>PSD Editable</span>
                        </div>
                        <div className="intro-area8__feature">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 0L10.12 5.88L16 8L10.12 10.12L8 16L5.88 10.12L0 8L5.88 5.88L8 0Z" fill="#573CFF"/>
                          </svg>
                          <span>Instant Download</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero area end */}

            {/* Thumbnail preview start */}
            <div className="thumb-area8 rr-ov-hidden rounded-5">
              <div className="container">
                <img data-speed="0.7" className="rounded-5" src="/assets/imgs/home-8/thumb/thumb6.jpg" alt="AnyImmi marketing bundle preview - social media templates, brochures, and business cards for immigration consultants" />
              </div>
            </div>
            {/* Thumbnail preview end */}
            {/* Social Media Slider */}
            {/* General Slider — below intro image */}
            <ImageSlider
              sliderType="social-media"
              title="Design Gallery"
              subtitle="Browse through our professionally crafted marketing assets designed specifically for immigration consultants."
            />

            {/* Problem-Solution area start */}
            <div className="about-area8 section-spacing">
              <div className="container-1600">
                <div className="about-area8__thumb">
                  <img src="/assets/imgs/home-8/about/about-shape1_1.png" alt="decorative shape" />
                  <img src="/assets/imgs/home-8/about/about-shape1_2.png" alt="decorative shape" />
                  <img src="/assets/imgs/home-8/about/about-shape1_3.png" alt="decorative shape" />
                </div>
                <h2 className="about-area8__title rr-title-anim-2">
                  Stop spending 20+ hours creating marketing materials from scratch.
                  AnyImmi gives you 227+ ready-to-use, professionally designed assets
                  across 17 categories — built specifically for Canadian immigration consultants.
                </h2>
                <div className="about-area8__bottom section-spacing pb-0">
                  <div className="row gy-4">
                    <div className="col-xl-7">
                      <div className="about-area8__project wow fadeInUp" data-wow-delay="0.3s">
                        <div className="about-area8__project-content">
                          <h3 className="about-area8__project-title">The Problem We Solve</h3>
                          <p className="about-area8__project-text">As an immigration consultant, you spend more time on marketing
                            than on serving clients. Creating compliant, professional-looking content is expensive
                            and time-consuming. Your competitors already look polished — you should too.</p>
                          <div className="about-area8__feature">
                            <div className="about-area8__feature-item">
                              <div className="about-area8__feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                                  <path d="M20 5.32L23.09 14.03L32.5 14.55L25.36 20.38L27.64 29.57L20 24.58L12.36 29.57L14.64 20.38L7.5 14.55L16.91 14.03L20 5.32Z" fill="black"/>
                                </svg>
                              </div>
                              <p className="about-area8__feature-text">PSD &amp; AI Editable Files</p>
                            </div>
                            <div className="about-area8__feature-item">
                              <div className="about-area8__feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" fill="none">
                                  <path d="M21 3.82L24.77 14.18L36.04 14.82L27.47 22.06L30.27 33.13L21 27.13L11.73 33.13L14.53 22.06L5.96 14.82L17.23 14.18L21 3.82Z" fill="black"/>
                                </svg>
                              </div>
                              <p className="about-area8__feature-text">100% IRCC Compliant</p>
                            </div>
                          </div>
                          <CheckoutLink className="rr-btn-border btn-purple">
                            <span className="text">GET YOUR BUNDLE NOW</span>
                            <span className="icon"><i className="fa-regular fa-arrow-right"></i></span>
                          </CheckoutLink>
                        </div>
                        <div className="about-area8__project-thumb">
                          <img src="/assets/imgs/home-8/about/about-project-thumb1.jpg" alt="Immigration marketing templates preview" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="about-area8__counters">
                        <div className="about-area8__counters-item">
                          <div className="about-area8__counter">
                            <div className="about-area8__counter-number"><span className="odometer" data-count="500">0</span>+</div>
                            <p className="about-area8__counter-text wow fadeInUp" data-wow-delay="0.2s">Consultants Trust Us</p>
                          </div>
                          <div className="about-area8__counter-features">
                            <div className="about-area8__counter-feature">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                  <path d="M15.1244 5.03705C15.2054 4.95436 15.3021 4.88867 15.4089 4.84382C15.5156 4.79898 15.6302 4.77588 15.746 4.77588C15.8618 4.77588 15.9764 4.79898 16.0832 4.84382C16.1899 4.88867 16.2866 4.95436 16.3677 5.03705C16.7073 5.38024 16.7121 5.9348 16.3796 6.28393L9.35787 14.5846C9.27815 14.6721 9.18141 14.7425 9.07356 14.7913C8.96571 14.8402 8.84903 14.8665 8.73064 14.8688C8.61226 14.871 8.49467 14.849 8.38506 14.8043C8.27545 14.7595 8.17614 14.6928 8.09319 14.6083L3.82056 10.2787C3.65578 10.1106 3.56348 9.88466 3.56348 9.6493C3.56348 9.41394 3.65578 9.18797 3.82056 9.01993C3.9016 8.93724 3.99833 8.87154 4.10507 8.8267C4.21182 8.78185 4.32643 8.75875 4.44222 8.75875C4.558 8.75875 4.67262 8.78185 4.77936 8.8267C4.88611 8.87154 4.98283 8.93724 5.06387 9.01993L8.68812 12.6929L15.1006 5.06318L15.1244 5.03705Z" fill="white"/>
                                </svg>
                              </span>
                              Social Media Ready
                            </div>
                            <div className="about-area8__counter-feature">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                  <path d="M15.1244 5.03705C15.2054 4.95436 15.3021 4.88867 15.4089 4.84382C15.5156 4.79898 15.6302 4.77588 15.746 4.77588C15.8618 4.77588 15.9764 4.79898 16.0832 4.84382C16.1899 4.88867 16.2866 4.95436 16.3677 5.03705C16.7073 5.38024 16.7121 5.9348 16.3796 6.28393L9.35787 14.5846C9.27815 14.6721 9.18141 14.7425 9.07356 14.7913C8.96571 14.8402 8.84903 14.8665 8.73064 14.8688C8.61226 14.871 8.49467 14.849 8.38506 14.8043C8.27545 14.7595 8.17614 14.6928 8.09319 14.6083L3.82056 10.2787C3.65578 10.1106 3.56348 9.88466 3.56348 9.6493C3.56348 9.41394 3.65578 9.18797 3.82056 9.01993C3.9016 8.93724 3.99833 8.87154 4.10507 8.8267C4.21182 8.78185 4.32643 8.75875 4.44222 8.75875C4.558 8.75875 4.67262 8.78185 4.77936 8.8267C4.88611 8.87154 4.98283 8.93724 5.06387 9.01993L8.68812 12.6929L15.1006 5.06318L15.1244 5.03705Z" fill="white"/>
                                </svg>
                              </span>
                              Print &amp; Digital
                            </div>
                            <div className="about-area8__counter-feature">
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                  <path d="M15.1244 5.03705C15.2054 4.95436 15.3021 4.88867 15.4089 4.84382C15.5156 4.79898 15.6302 4.77588 15.746 4.77588C15.8618 4.77588 15.9764 4.79898 16.0832 4.84382C16.1899 4.88867 16.2866 4.95436 16.3677 5.03705C16.7073 5.38024 16.7121 5.9348 16.3796 6.28393L9.35787 14.5846C9.27815 14.6721 9.18141 14.7425 9.07356 14.7913C8.96571 14.8402 8.84903 14.8665 8.73064 14.8688C8.61226 14.871 8.49467 14.849 8.38506 14.8043C8.27545 14.7595 8.17614 14.6928 8.09319 14.6083L3.82056 10.2787C3.65578 10.1106 3.56348 9.88466 3.56348 9.6493C3.56348 9.41394 3.65578 9.18797 3.82056 9.01993C3.9016 8.93724 3.99833 8.87154 4.10507 8.8267C4.21182 8.78185 4.32643 8.75875 4.44222 8.75875C4.558 8.75875 4.67262 8.78185 4.77936 8.8267C4.88611 8.87154 4.98283 8.93724 5.06387 9.01993L8.68812 12.6929L15.1006 5.06318L15.1244 5.03705Z" fill="white"/>
                                </svg>
                              </span>
                              English &amp; French
                            </div>
                          </div>
                        </div>

                        <div className="about-area8__counters-item wow fadeInUp" data-wow-delay="0.3s">
                          <div className="about-area8__counter-two">
                            <div className="about-area8__counter-title"><span className="odometer" data-count="17">0</span></div>
                            <p className="about-area8__counter-desc">Asset categories covering
                              every marketing need</p>
                          </div>
                          <div className="about-area8__counter-three">
                            <div className="about-area8__counter-number"><span className="odometer" data-count="227">0</span>+</div>
                            <p className="about-area8__counter-text">Premium Assets Included</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Problem-Solution area end */}

            {/* Templates Slider */}
            <ImageSlider
              sliderType="templates"
              title="Professional Templates"
              subtitle="Editable PSD templates for flyers, brochures, business cards, and presentations — professionally designed for immigration consultants."
            />

            {/* What's Inside area start */}
            <div className="anyimmi-inside-section section-spacing" id="whats-inside">
              <div className="container-1600">
                <div className="text-center" style={{ marginBottom: '48px' }}>
                  <h2 className="section-title rr-title-anim-2" style={{ color: '#fff' }}>Everything You Need in One Bundle</h2>
                  <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.55)', maxWidth: '600px', margin: '0 auto' }}>
                    {categories.length} categories, 1,000+ professionally designed files for immigration consultants.
                  </p>
                </div>
                <div className="row g-4">
                  {categories.map((cat, i) => (
                    <div className="col-xl-3 col-lg-4 col-md-6" key={cat._id}>
                      <Link href={`/categories/${cat.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                        <div className="anyimmi-cat-card anyimmi-cat-card--dark wow fadeInUp" data-wow-delay={`${0.05 * (i % 8)}s`}>
                          <div className="anyimmi-cat-card__icon">
                            {cat.icon ? <CategoryIcon name={cat.icon} size={28} /> : null}
                          </div>
                          <h3 className="anyimmi-cat-card__title">{cat.name}</h3>
                          <p className="anyimmi-cat-card__desc">{cat.description}</p>
                          <div className="anyimmi-cat-card__footer">
                            {(cat.assetCount > 0 || cat.fileCount) && (
                              <span className="anyimmi-cat-card__count">
                                {cat.assetCount || cat.fileCount} items
                              </span>
                            )}
                            <span className="anyimmi-cat-card__arrow">
                              <i className="fa-regular fa-arrow-right"></i>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-5 wow fadeInUp" data-wow-delay="0.3s">
                  <Link href="/categories" className="rr-btn-border" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                    <span className="text">BROWSE ALL ASSETS</span>
                    <span className="icon"><i className="fa-regular fa-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
            {/* What's Inside area end */}

            {/* Branding Slider */}
            <ImageSlider
              sliderType="branding"
              title="Branding Assets"
              subtitle="Complete branding kits including logos, letterheads, email signatures, and brand guidelines — everything to build a professional identity."
            />

            {/* Social Proof area start */}
            <TestimonialSlider />
            {/* Social Proof area end */}

            {/* Feature Deep-Dive area start */}
            <div className="feature-area8 section-spacing pt-0">
              <div className="container-1600">
                <div className="feature-area8__wrap">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="feature-area8__thumb rr-ov-hidden">
                        <img data-speed="0.9" src="/assets/imgs/home-8/feature/feature-thumb6_1.jpg" alt="AnyImmi PSD editable template preview" />
                        <div className="feature-area8__thumb-two rr-ov-hidden">
                          <img data-speed="0.9" src="/assets/imgs/home-8/feature/feature-thumb6_2.jpg" alt="Immigration marketing template samples" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="feature-area8__content">
                        <h2 className="section-title text-black text-start rr-title-anim-2">Why Immigration Consultants
                          Choose AnyImmi</h2>

                        <div className="feature-area8__list wow fadeInUp" data-wow-delay="0.3s">
                          <div className="feature-area8__item">
                            <h6 className="feature-area8__item-title">
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#573CFF" />
                              </svg>
                              PSD Editable — Works in Photoshop &amp; Illustrator
                            </h6>
                            <p className="feature-area8__item-text">Every template is a fully layered PSD file. Open in Photoshop or Adobe Illustrator,
                              customize with your brand colors and logo, and export in any format. No subscription needed.</p>
                          </div>
                          <div className="feature-area8__item">
                            <h6 className="feature-area8__item-title">
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#573CFF" />
                              </svg>
                              100% IRCC-Compliant Content
                            </h6>
                            <p className="feature-area8__item-text">All content has been reviewed for regulatory compliance. No misleading claims,
                              no unauthorized practice — just professional, compliant marketing.</p>
                          </div>
                          <div className="feature-area8__item">
                            <h6 className="feature-area8__item-title">
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#573CFF" />
                              </svg>
                              Instant Download &amp; Access
                            </h6>
                            <p className="feature-area8__item-text">Get immediate access to your entire bundle after purchase. No waiting,
                              no shipping — start using templates within minutes.</p>
                          </div>
                          <div className="feature-area8__item">
                            <h6 className="feature-area8__item-title">
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#573CFF" />
                              </svg>
                              Multilingual Ready — English &amp; French
                            </h6>
                            <p className="feature-area8__item-text">Templates available in both English and French to serve clients across
                              all Canadian provinces, including Quebec.</p>
                          </div>
                          <div className="feature-area8__item">
                            <h6 className="feature-area8__item-title">
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#573CFF" />
                              </svg>
                              Optimized for Print &amp; Digital
                            </h6>
                            <p className="feature-area8__item-text">Every template is optimized for both screen display and print quality.
                              Use them on social media, your website, or print for client meetings.</p>
                          </div>
                          <div className="feature-area8__item">
                            <h6 className="feature-area8__item-title">
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#573CFF" />
                              </svg>
                              Lifetime Updates Included
                            </h6>
                            <p className="feature-area8__item-text">Immigration rules change — so do our templates. Get free lifetime updates as
                              regulations evolve, ensuring your content stays current and compliant.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature Deep-Dive area end */}

            {/* Marketing Slider */}
            <ImageSlider
              sliderType="marketing"
              title="Marketing Materials"
              subtitle="Email templates, landing pages, ad creatives, and promotional materials — designed to attract and convert clients."
            />

            {/* AnyImmi Portal area start */}
            <div className="whychoose-area8 section-spacing pt-0">
              <div className="container-1600">
                <div className="whychoose-area8__wrap">
                  <div className="row align-items-center justify-content-between gy-4 gy-lg-0">

                    <div className="col-lg-6">
                      <h2 className="section-title text-start text-black mb-4 rr-title-anim-2">
                        Included with Every Bundle — Meet the AnyImmi Portal
                      </h2>
                      <p className="wow fadeInUp" data-wow-delay="0.2s" style={{ fontSize: '17px', marginBottom: '24px', color: '#555' }}>
                        Your bundle purchase includes 3 months FREE access to our AI-powered immigration tools platform.
                        Work smarter, not harder.
                      </p>

                      <div className="accordion whychoose-area8__accordion" id="whychooseAccordion">
                        <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.3s">
                          <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button whychoose-area8__item-header" type="button"
                              data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                              aria-controls="collapseOne">
                              <span className="whychoose-area8__item-title">SOP Generator</span>
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#whychooseAccordion">
                            <div className="accordion-body whychoose-area8__item-body">
                              <p className="whychoose-area8__item-desc">
                                AI-crafted Statements of Purpose tailored to each application type. Generate compelling,
                                client-specific SOPs in minutes — not hours.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.4s">
                          <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed whychoose-area8__item-header" type="button"
                              data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                              aria-controls="collapseTwo">
                              <span className="whychoose-area8__item-title">CRS Calculator</span>
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#whychooseAccordion">
                            <div className="accordion-body whychoose-area8__item-body">
                              <p className="whychoose-area8__item-desc">
                                Calculate and optimize your client&apos;s CRS score with AI-powered recommendations.
                                Identify the best pathways to maximize their Express Entry points.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.5s">
                          <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed whychoose-area8__item-header" type="button"
                              data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                              aria-controls="collapseThree">
                              <span className="whychoose-area8__item-title">Cover Letter Generator</span>
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#whychooseAccordion">
                            <div className="accordion-body whychoose-area8__item-body">
                              <p className="whychoose-area8__item-desc">
                                Professional cover letters for any immigration program — generated by AI, reviewed by you.
                                Tailored to each client&apos;s profile and application type.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.55s">
                          <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed whychoose-area8__item-header" type="button"
                              data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                              aria-controls="collapseFour">
                              <span className="whychoose-area8__item-title">Eligibility Assessment</span>
                            </button>
                          </h2>
                          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#whychooseAccordion">
                            <div className="accordion-body whychoose-area8__item-body">
                              <p className="whychoose-area8__item-desc">
                                Assess your client&apos;s qualification across 15+ immigration pathways instantly.
                                Deliver clear, data-backed recommendations in every consultation.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 wow fadeInUp" data-wow-delay="0.6s">
                        <CheckoutLink className="rr-btn-border btn-purple">
                          <span className="text">GET BUNDLE + PORTAL ACCESS</span>
                          <span className="icon"><i className="fa-regular fa-arrow-right"></i></span>
                        </CheckoutLink>
                      </div>
                    </div>

                    <div className="col-lg-5">
                      <div className="whychoose-area8__image rr-ov-hidden">
                        <img data-speed="0.9" src="/assets/imgs/home-8/wcu/wcu-thumb6_1.jpg" alt="AnyImmi Portal dashboard preview" />
                        <div className="whychoose-area8__image-two wow fadeInUp" data-wow-delay="0.3s">
                          <img src="/assets/imgs/home-8/wcu/wcu-thumb6_2.png" alt="AnyImmi Portal features" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            {/* AnyImmi Portal area end */}

            {/* Website Slider */}
            <ImageSlider
              sliderType="website"
              title="Website Designs"
              subtitle="Modern, responsive website templates and page designs — built to showcase your immigration consulting services."
            />

            {/* Pricing area start */}
            <div className="pricing-area8 section-spacing" id="pricing"
              style={{ backgroundImage: "url('/assets/imgs/home-8/pricing/pricing-bg6_1.jpg')" }}>
              <div className="container-1600">
                <div className="row g-4 d-flex justify-content-center">
                  <div className="col-xl-8 text-center">
                    <h2 className="section-title rr-title-anim-2">
                      Choose Your Bundle — Pay Once, Use Forever.
                    </h2>
                    <p className="wow fadeInUp text-white" data-wow-delay="0.2s" style={{ fontSize: '18px', marginBottom: '10px' }}>
                      No subscriptions. No hidden fees. Pay once, use forever.
                    </p>
                  </div>
                </div>
                <div className="row g-4 justify-content-center">
                  {plans.length === 0 && (
                    <div className="col-xl-6 text-center">
                      <div className="pricing-area8__card wow fadeInUp" data-wow-delay="0.3s">
                        <p style={{ fontSize: '18px', color: '#999', padding: '40px 0' }}>
                          No plans available at the moment. Please check back soon.
                        </p>
                      </div>
                    </div>
                  )}
                  {plans.map((plan, i) => (
                    <div className={plans.length === 1 ? "col-xl-5 col-lg-6 col-md-8" : "col-xl-4 col-lg-6 col-md-8"} key={plan.id}>
                      <div className={`pricing-area8__card${plan.highlight ? ' pricing-area8__card--bg-active' : ''} wow fadeInUp`} data-wow-delay={`${0.3 + i * 0.15}s`}>
                        <div className="pricing-area8__card-header">
                          {plan.highlight && (
                            <span className="badge bg-warning text-dark mb-2" style={{ fontSize: '12px', padding: '4px 12px', borderRadius: '20px' }}>BEST VALUE</span>
                          )}
                          <h3 className="pricing-area8__card-title">{plan.name}</h3>
                          <p className="pricing-area8__card-subtitle">{plan.delivery}</p>
                        </div>
                        <div className="pricing-area8__card-price">
                          <span style={{ fontSize: '16px', color: '#999', textDecoration: 'line-through', display: 'block', marginBottom: '4px' }}>Value: ${plan.valuePrice.toLocaleString()}</span>
                          <span className="pricing-area8__amount">${plan.price}</span><span className="pricing-area8__period"> USD one-time</span>
                        </div>
                        <div className="pricing-area8__card-bill">One-Time Payment — Lifetime Access</div>
                        <CheckoutButton tier={plan.id} label={`Get Instant Access — $${plan.price}`} className="pricing-area8__card-btn w-100" />
                        <div className="pricing-area8__features">
                          <h4 className="pricing-area8__features-title">What&apos;s Included:</h4>
                          <ul className="pricing-area8__features-list">
                            {plan.features.map((f) => (
                              <li key={f} className="pricing-area8__features-item">{f}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Pricing area end */}

            {/* Guarantee area start */}
            <div className="integration-area8 section-spacing">
              <div className="container-1600">
                <div className="integration-area8__wrap section-spacing text-center">
                  <h2 className="section-title text-black rr-title-anim-2">30-Day Money-Back Guarantee — No Questions Asked</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s" style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto 30px' }}>
                    We&apos;re confident you&apos;ll love AnyImmi. If you&apos;re not completely satisfied within 30 days,
                    we&apos;ll refund every penny. No questions asked, no hassle.
                  </p>
                  <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap wow fadeInUp" data-wow-delay="0.4s">
                    <div className="text-center">
                      <i className="fa-solid fa-shield-halved" style={{ fontSize: '40px', color: '#573CFF', display: 'block', marginBottom: '8px' }}></i>
                      <span style={{ fontWeight: 600 }}>Secure Checkout</span>
                    </div>
                    <div className="text-center">
                      <i className="fa-solid fa-lock" style={{ fontSize: '40px', color: '#573CFF', display: 'block', marginBottom: '8px' }}></i>
                      <span style={{ fontWeight: 600 }}>SSL Encrypted</span>
                    </div>
                    <div className="text-center">
                      <i className="fa-solid fa-bolt" style={{ fontSize: '40px', color: '#573CFF', display: 'block', marginBottom: '8px' }}></i>
                      <span style={{ fontWeight: 600 }}>Instant Access</span>
                    </div>
                    <div className="text-center">
                      <i className="fa-solid fa-rotate-left" style={{ fontSize: '40px', color: '#573CFF', display: 'block', marginBottom: '8px' }}></i>
                      <span style={{ fontWeight: 600 }}>30-Day Refund</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Guarantee area end */}

            {/* FAQ area start */}
            <div className="blog-area8 section-spacing pt-0" id="faq">
              <div className="container-1600">
                <div className="row d-flex justify-content-center">
                  <div className="col-xl-8 text-center">
                    <h2 className="section-title text-black rr-title-anim-2 mb-5">Frequently Asked Questions</h2>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <div className="accordion" id="faqAccordion">
                      <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.1s">
                        <h2 className="accordion-header">
                          <button className="accordion-button whychoose-area8__item-header" type="button"
                            data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true">
                            <span className="whychoose-area8__item-title">What exactly is included in the AnyImmi Bundle?</span>
                          </button>
                        </h2>
                        <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                          <div className="accordion-body whychoose-area8__item-body">
                            <p className="whychoose-area8__item-desc">The AnyImmi Starter Bundle includes 227+ premium marketing assets across all 17 categories, 1,000+ fully layered and editable PSD files, instant delivery, 3 months FREE AnyImmi Portal Pro access, and lifetime bundle updates.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.15s">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed whychoose-area8__item-header" type="button"
                            data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false">
                            <span className="whychoose-area8__item-title">Who is this bundle designed for?</span>
                          </button>
                        </h2>
                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body whychoose-area8__item-body">
                            <p className="whychoose-area8__item-desc">This bundle is designed specifically for Canadian immigration consultants (RCICs), immigration lawyers, immigration agencies, and anyone who supports clients through the Canadian immigration process and needs professional marketing materials.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.2s">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed whychoose-area8__item-header" type="button"
                            data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false">
                            <span className="whychoose-area8__item-title">Do I need design skills to use these templates?</span>
                          </button>
                        </h2>
                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body whychoose-area8__item-body">
                            <p className="whychoose-area8__item-desc">Basic familiarity with Photoshop or Adobe Illustrator helps, but the PSD files are fully layered and organized so even intermediate users can easily swap text, colors, and logos. No advanced design skills required.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.25s">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed whychoose-area8__item-header" type="button"
                            data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false">
                            <span className="whychoose-area8__item-title">How do I receive my files after purchase?</span>
                          </button>
                        </h2>
                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body whychoose-area8__item-body">
                            <p className="whychoose-area8__item-desc">Delivery is instant. After purchase, you&apos;ll receive a download link via email within minutes. All files are organized by category in a zip archive, ready to open in Photoshop or Adobe Illustrator.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.3s">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed whychoose-area8__item-header" type="button"
                            data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false">
                            <span className="whychoose-area8__item-title">What file formats are included?</span>
                          </button>
                        </h2>
                        <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body whychoose-area8__item-body">
                            <p className="whychoose-area8__item-desc">All templates are provided as layered PSD files (Adobe Photoshop). Many assets also include AI files (Adobe Illustrator) for vector editing. You can export in any format — PNG, JPG, PDF, SVG — depending on your needs.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.35s">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed whychoose-area8__item-header" type="button"
                            data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false">
                            <span className="whychoose-area8__item-title">Can I customize the templates with my own branding?</span>
                          </button>
                        </h2>
                        <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body whychoose-area8__item-body">
                            <p className="whychoose-area8__item-desc">Absolutely. Every PSD file is fully layered so you can change colors, fonts, images, text, and add your logo. Templates are designed to be easily rebranded to match your unique business identity.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.4s">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed whychoose-area8__item-header" type="button"
                            data-bs-toggle="collapse" data-bs-target="#faq7" aria-expanded="false">
                            <span className="whychoose-area8__item-title">What is the AnyImmi Portal and how do I get access?</span>
                          </button>
                        </h2>
                        <div id="faq7" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body whychoose-area8__item-body">
                            <p className="whychoose-area8__item-desc">The AnyImmi Portal is our AI-powered immigration tools platform featuring SOP Generator, CRS Calculator, Cover Letter Generator, and Eligibility Assessment for 15+ immigration pathways. Every bundle purchase includes 3 months of FREE Portal Pro access, activated after purchase.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.45s">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed whychoose-area8__item-header" type="button"
                            data-bs-toggle="collapse" data-bs-target="#faq8" aria-expanded="false">
                            <span className="whychoose-area8__item-title">Is there a money-back guarantee?</span>
                          </button>
                        </h2>
                        <div id="faq8" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body whychoose-area8__item-body">
                            <p className="whychoose-area8__item-desc">Yes. We offer a 30-day money-back guarantee. If you&apos;re not satisfied with the bundle for any reason, contact our support team and we&apos;ll process a full refund — no questions asked.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.5s">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed whychoose-area8__item-header" type="button"
                            data-bs-toggle="collapse" data-bs-target="#faq9" aria-expanded="false">
                            <span className="whychoose-area8__item-title">Do I get lifetime access to the templates?</span>
                          </button>
                        </h2>
                        <div id="faq9" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body whychoose-area8__item-body">
                            <p className="whychoose-area8__item-desc">Yes. It&apos;s a one-time payment for lifetime access. You own your bundle forever and receive lifetime updates as new templates are added — at no extra cost.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.55s">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed whychoose-area8__item-header" type="button"
                            data-bs-toggle="collapse" data-bs-target="#faq10" aria-expanded="false">
                            <span className="whychoose-area8__item-title">Can I use these templates for multiple clients?</span>
                          </button>
                        </h2>
                        <div id="faq10" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body whychoose-area8__item-body">
                            <p className="whychoose-area8__item-desc">The Starter Bundle license covers use within your own practice. You can create customized versions for different clients, but redistribution or resale of the raw templates is not permitted.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.6s">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed whychoose-area8__item-header" type="button"
                            data-bs-toggle="collapse" data-bs-target="#faq11" aria-expanded="false">
                            <span className="whychoose-area8__item-title">Are the templates compliant with Canadian immigration regulations?</span>
                          </button>
                        </h2>
                        <div id="faq11" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body whychoose-area8__item-body">
                            <p className="whychoose-area8__item-desc">Yes. All content has been reviewed to ensure it does not contain misleading claims or unauthorized practice language. Templates follow IRCC guidelines and RCIC code of ethics for marketing materials.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item whychoose-area8__item wow fadeInUp" data-wow-delay="0.65s">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed whychoose-area8__item-header" type="button"
                            data-bs-toggle="collapse" data-bs-target="#faq12" aria-expanded="false">
                            <span className="whychoose-area8__item-title">How do the AI tools in the AnyImmi Portal work?</span>
                          </button>
                        </h2>
                        <div id="faq12" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body whychoose-area8__item-body">
                            <p className="whychoose-area8__item-desc">The AnyImmi Portal uses advanced AI to generate SOPs, cover letters, and CRS recommendations based on your client&apos;s specific profile and immigration goals. You input the details, the AI drafts the content, and you review and finalize — saving hours per client.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FAQ area end */}

          </main>

          {/* Final CTA area start */}
          <div className="cta-area8">
            <div className="container-1600">
              <div className="cta-area8__wrap section-spacing bg-img"
                style={{ backgroundImage: "url('/assets/imgs/home-8/cta/cta-bg6.jpg')" }}>
                <div className="row justify-content-center text-center">
                  <div className="col-lg-8">
                    <div className="cta-area8__members rr-ov-hidden">
                      <img data-speed="0.9" src="/assets/imgs/home-8/cta/cta-avatar6_1.png" alt="Immigration consultants using AnyImmi" className="cta-area8__members-img" />
                      500+ RCICs already using AnyImmi
                    </div>
                    <h2 className="cta-area8__title">
                      Don&apos;t Let Another Client Slip Away.<br />Get Your Marketing Bundle Now.
                    </h2>
                    <div className="mt-4">
                      <CheckoutLink className="rr-btn-border btn-black">
                        <span className="text">GET INSTANT ACCESS — $97</span>
                        <span className="icon"><i className="fa-regular fa-arrow-right"></i></span>
                      </CheckoutLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Final CTA area end */}

          {/* Footer area start */}
          <footer className="footer-area8 bg-img" style={{ backgroundImage: "url('/assets/imgs/home-8/footer/footer-bg6.jpg')" }}>
            <div className="container-1600">
              <div className="row gy-4 gy-lg-0 footer-area8__top">
                <div className="col-lg-3 col-md-6 footer-area8__brand">
                  <h3 className="footer-area8__logo"><img src="/assets/imgs/logo/footer-logo8.png" alt="AnyImmi logo" style={{ maxHeight: '38px', width: 'auto' }} /></h3>
                  <p className="footer-area8__desc rr-title-anim-2">
                    The ultimate marketing toolkit for Canadian immigration consultants. 227+ premium assets,
                    17 categories, one-time payment.
                  </p>
                  <div className="footer-area8__social d-flex gap-2">
                    <a href="#" className="footer-area8__social-link">Fb</a>
                    <a href="#" className="footer-area8__social-link">In</a>
                    <a href="#" className="footer-area8__social-link">X</a>
                    <a href="#" className="footer-area8__social-link">Ig</a>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 footer-area8__column">
                  <h4 className="footer-area8__heading">Quick Links</h4>
                  <ul className="footer-area8__list wow fadeInUp" data-wow-delay="0.3s">
                    <li className="footer-area8__item"><a href="#whats-inside">What&apos;s Inside</a></li>
                    <li className="footer-area8__item"><a href="/categories">Assets</a></li>
                    <li className="footer-area8__item"><a href="#pricing">Pricing</a></li>
                    <li className="footer-area8__item"><a href="#faq">FAQ</a></li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 footer-area8__column">
                  <h4 className="footer-area8__heading">Company</h4>
                  <ul className="footer-area8__list wow fadeInUp" data-wow-delay="0.4s">
                    <li className="footer-area8__item"><a href="/about">About Us</a></li>
                    <li className="footer-area8__item"><a href="/contact">Contact Us</a></li>
                    <li className="footer-area8__item"><a href="#">Privacy Policy</a></li>
                    <li className="footer-area8__item"><a href="#">Terms of Service</a></li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 footer-area8__column">
                  <h4 className="footer-area8__heading">Legal</h4>
                  <ul className="footer-area8__list wow fadeInUp" data-wow-delay="0.5s">
                    <li className="footer-area8__item"><a href="#">Refund Policy</a></li>
                    <li className="footer-area8__item"><a href="#">Cookie Policy</a></li>
                    <li className="footer-area8__item"><a href="#">Disclaimer</a></li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-area8__column">
                  <h4 className="footer-area8__heading">Get In Touch</h4>
                  <ul className="footer-area8__list wow fadeInUp" data-wow-delay="0.6s">
                    <li className="footer-area8__item"><i className="fa-solid fa-envelope" style={{ marginRight: '8px' }}></i> support@anyimmi.com</li>
                    <li className="footer-area8__item"><i className="fa-solid fa-location-dot" style={{ marginRight: '8px' }}></i> Toronto, ON, Canada</li>
                    <li className="footer-area8__item"><a href="#" style={{ color: 'inherit' }}>AnyImmi Portal</a></li>
                  </ul>
                </div>
              </div>

              <div className="footer-area8__bottom text-center">
                <p className="footer-area8__copy mb-0">
                  &copy; 2026 AnyImmi. All Rights Reserved.
                </p>
              </div>
            </div>
          </footer>
          {/* Footer area end */}

    </div>
  );
}
