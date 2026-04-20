import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'About Us – AnyImmi',
  description: 'AnyImmi — the ultimate marketing bundle for Canadian immigration consultants. 227+ premium PSD assets across 17 categories.',
};

export default function AboutPage() {
  return (
    <InnerPageLayout>

      {/* Breadcrumb Section */}
      <div className="breadcrumb1 section-bg overflow-hidden">
        <div className="container rr-container-1600">
          <div className="breadcrumb1__top">
            <div className="breadcrumb1__top-left">About Us</div>
            <div className="breadcrumb1__top-right">
              <div className="breadcrumb1__top-right-img">
                <img src="/assets/imgs/inner/breadcrumb/breadcrumb-img1_1.png" alt="thumb" />
              </div>
              <div className="breadcrumb1__top-right-text">Trusted by 500+ RCICs across Canada</div>
            </div>
          </div>
          <h1 className="breadcrumb1__title">We are AnyImmi — the ultimate marketing toolkit
            for Canadian immigration consultants.</h1>
        </div>
        <div className="breadcrumb1__abouttext">
          Agency <img src="/assets/imgs/inner/about/about-breadcumbthumb.jpg" alt="thumb" /> Award
        </div>
        {/* <div className="breadcrumb1__thumb rr-ov-hidden wow fadeInUp" data-wow-delay="0.3s">
          <img data-speed="0.9" src="/assets/imgs/inner/breadcrumb/breadcrumb-thumb1_2.jpg" alt="thumb" />
        </div> */}
      </div>

      {/* Value Section */}
      <div className="value  section-spacing overflow-hidden">
        <div className="container container-1800">
          <div className="section-top7">
            <div className="row gy-5 d-flex align-items-end justify-content-between">
              <div className="col-xl-10 d-flex justify-content-start">
                <div>
                  <div className="section-top7__subtitle wow fadeInUp" data-wow-delay=".3s">Our Mission
                  </div>
                  <div className="section-top7__title mb-0 wow fadeInUp" data-wow-delay=".5s">
                    We believe Canadian immigration consultants deserve world-class marketing tools.
                    AnyImmi exists to save you time, grow your practice, and help you serve more clients
                    — without breaking the bank.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="value__list-wrap">
            <div className="value__list active wow fadeInUp" data-wow-delay="0.3s">
              <div className="value__left">
                <div className="value__number">01.</div>
                <div className="value__title">
                  <img src="/assets/imgs/inner/about/value/value-thumb1.jpg" alt="thumb" />
                  <span>Built for Immigration Consultants</span>
                </div>
              </div>
              <div className="value__desc">
                Every asset in the AnyImmi bundle is designed specifically for Canadian immigration consultants.
                No generic marketing templates — everything is IRCC-compliant and immigration-focused.
              </div>
            </div>

            <div className="value__list wow fadeInUp" data-wow-delay="0.6s">
              <div className="value__left">
                <div className="value__number">02.</div>
                <div className="value__title">
                  <img src="/assets/imgs/inner/about/value/value-thumb2.jpg" alt="thumb" />
                  <span>Quality Over Quantity</span>
                </div>
              </div>
              <div className="value__desc">We don&apos;t pad our bundle with low-effort assets.
                Every PSD file is professionally designed, print-ready, and immediately usable.
                227+ assets across 17 categories — each one crafted with care.</div>
            </div>

            <div className="value__list wow fadeInUp" data-wow-delay="0.9s">
              <div className="value__left">
                <div className="value__number">03.</div>
                <div className="value__title">
                  <img src="/assets/imgs/inner/about/value/value-thumb3.jpg" alt="thumb" />
                  <span>AI-Powered Portal Access</span>
                </div>
              </div>
              <div className="value__desc">Beyond templates, we give you access to the AnyImmi Portal —
                an AI-powered platform with SOP Generator, CRS Calculator, Cover Letter Generator, and
                Eligibility Assessment tools. 3 months FREE with every bundle.</div>
            </div>

            <div className="value__list wow fadeInUp" data-wow-delay="0.3s">
              <div className="value__left">
                <div className="value__number">04.</div>
                <div className="value__title">
                  <img src="/assets/imgs/inner/about/value/value-thumb4.jpg" alt="thumb" />
                  <span>One-Time Price, Lifetime Value</span>
                </div>
              </div>
              <div className="value__desc">Pay $97 once and own your bundle forever.
                No subscriptions, no hidden fees, no recurring charges. Plus lifetime updates as
                new assets are added — at no extra cost.</div>
            </div>
          </div>

          {/* <div className="value__thumb section-spacing pb-0 wow fadeInUp" data-wow-delay="0.3s">
            <div className="value-thumb__one rr-ov-hidden rounded-5"><img className="rounded-5" data-speed="0.9"
              src="/assets/imgs/inner/about/value/value-big-thumb1.jpg" alt="thumb" /></div>
            <div className="value-thumb__two rr-ov-hidden rounded-5"><img className="rounded-5" data-speed="0.9"
              src="/assets/imgs/inner/about/value/value-big-thumb2.jpg" alt="thumb" /></div>
          </div> */}
        </div>
      </div>

      {/* Awards Section */}
      <div className="awards overflow-hidden">

        {/* Marquee Section */}
        <div className="marque-section6 rr-ov-hidden">
          <div className="marquee-wrapper text-slider-1">
            <div className="marquee-inner to-left">
              <ul className="marqee-list d-flex">
                <li className="marquee-item">
                  <span className="text-slider-1">strategy</span>
                  <span className="text-slider-2">marketing</span>
                  <span className="text-slider-1">analysis</span>
                  <span className="text-slider-2">marketing</span>
                  <span className="text-slider-1">strategy</span>
                  <span className="text-slider-2">marketing</span>
                  <span className="text-slider-1">analysis</span>
                  <span className="text-slider-2">marketing</span>
                  <span className="text-slider-1">strategy</span>
                  <span className="text-slider-2">marketing</span>
                  <span className="text-slider-1">analysis</span>
                  <span className="text-slider-2">marketing</span>
                  <span className="text-slider-1">strategy</span>
                  <span className="text-slider-2">marketing</span>
                  <span className="text-slider-1">analysis</span>
                  <span className="text-slider-2">marketing</span>
                  <span className="text-slider-1">strategy</span>
                  <span className="text-slider-2">marketing</span>
                  <span className="text-slider-1">analysis</span>
                  <span className="text-slider-2">marketing</span>
                  <span className="text-slider-1">strategy</span>
                  <span className="text-slider-2">marketing</span>
                  <span className="text-slider-1">analysis</span>
                  <span className="text-slider-2">marketing</span>
                  <span className="text-slider-1">analysis</span>
                  <span className="text-slider-2">marketing</span>
                  <span className="text-slider-1">analysis</span>
                  <span className="text-slider-2">marketing</span>
                  <span className="text-slider-1">analysis</span>
                  <span className="text-slider-2">marketing</span>
                  <span className="text-slider-1">analysis</span>
                  <span className="text-slider-2">marketing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container container-1800 ">
          <div className="awards__list-wrap section-spacing">
            <div className="awards__list">
              <div className="awards__name">BUNDLE</div>
              <div className="awards__topic">227+ Premium Assets Across 17 Categories</div>
              <div className="awards__date">$97</div>
            </div>
            <div className="awards__list">
              <div className="awards__name">PORTAL</div>
              <div className="awards__topic">3 Months FREE AnyImmi Portal Pro Access</div>
              <div className="awards__date">INCLUDED</div>
            </div>
            <div className="awards__list">
              <div className="awards__name">FORMATS</div>
              <div className="awards__topic">1,000+ Layered PSD Files — Photoshop &amp; Illustrator</div>
              <div className="awards__date">INSTANT</div>
            </div>
            <div className="awards__list">
              <div className="awards__name">GUARANTEE</div>
              <div className="awards__topic">30-Day Money-Back Guarantee</div>
              <div className="awards__date">NO RISK</div>
            </div>
            <div className="awards__list">
              <div className="awards__name">UPDATES</div>
              <div className="awards__topic">Lifetime Bundle Updates at No Extra Cost</div>
              <div className="awards__date">FOREVER</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="testimonial-5__area section-spacing pb-0 bg-white overflow-hidden">
        <div className="container container-1800">
          <div className="testimonial-5__wrapper">
            <div className="swiper testimonial-5__active">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-5__item">
                    <div className="testimonial-5__quote">
                      <svg width="138" height="109" viewBox="0 0 138 109" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M58.8991 7.77194L53.8918 0C19.247 23.5085 0 52.0721 0 75.5806C0 98.3119 16.5556 109 30.6044 109C48.3117 109 60.8207 93.8416 60.8207 77.9122C60.8207 64.5072 52.352 53.042 40.9948 48.7644C37.7242 47.5955 34.6447 46.6255 34.6447 40.9923C34.6447 33.8049 39.843 23.1231 58.8991 7.77194ZM135.308 7.77194L130.301 0C96.0383 23.5085 76.4094 52.0721 76.4094 75.5806C76.4094 98.3119 93.3468 109 107.396 109C125.294 109 138 93.8416 138 77.9122C138 64.5072 129.34 53.042 117.595 48.7644C114.325 47.5955 111.436 46.6255 111.436 40.9923C111.436 33.8049 116.825 23.1168 135.302 7.76573L135.308 7.77194Z"
                          fill="#F3FF0A" />
                      </svg>
                    </div>
                    <p className="testimonial-5__desc">AnyImmi saved me at least 20 hours a week on content creation.
                      The PSD templates are not only beautiful but also IRCC-compliant, which gives me peace of mind.
                      My social media engagement has increased by 300% since I started using these assets.</p>
                    <div className="testimonial-5__author">
                      <div className="testimonial-5__thumb">
                        <img src="/assets/imgs/testimonial/author-5-01.png" alt="image not found" />
                      </div>
                      <h5 className="testimonial-5__name">Priya Sharma, RCIC — Toronto</h5>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-5__item">
                    <div className="testimonial-5__quote">
                      <svg width="138" height="109" viewBox="0 0 138 109" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M58.8991 7.77194L53.8918 0C19.247 23.5085 0 52.0721 0 75.5806C0 98.3119 16.5556 109 30.6044 109C48.3117 109 60.8207 93.8416 60.8207 77.9122C60.8207 64.5072 52.352 53.042 40.9948 48.7644C37.7242 47.5955 34.6447 46.6255 34.6447 40.9923C34.6447 33.8049 39.843 23.1231 58.8991 7.77194ZM135.308 7.77194L130.301 0C96.0383 23.5085 76.4094 52.0721 76.4094 75.5806C76.4094 98.3119 93.3468 109 107.396 109C125.294 109 138 93.8416 138 77.9122C138 64.5072 129.34 53.042 117.595 48.7644C114.325 47.5955 111.436 46.6255 111.436 40.9923C111.436 33.8049 116.825 23.1168 135.302 7.76573L135.308 7.77194Z"
                          fill="#F3FF0A" />
                      </svg>
                    </div>
                    <p className="testimonial-5__desc">AnyImmi saved me at least 20 hours a week on content creation.
                      The PSD templates are not only beautiful but also IRCC-compliant, which gives me peace of mind.
                      My social media engagement has increased by 300% since I started using these assets.</p>
                    <div className="testimonial-5__author">
                      <div className="testimonial-5__thumb">
                        <img src="/assets/imgs/testimonial/author-5-01.png" alt="image not found" />
                      </div>
                      <h5 className="testimonial-5__name">Priya Sharma, RCIC — Toronto</h5>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-5__item">
                    <div className="testimonial-5__quote">
                      <svg width="138" height="109" viewBox="0 0 138 109" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M58.8991 7.77194L53.8918 0C19.247 23.5085 0 52.0721 0 75.5806C0 98.3119 16.5556 109 30.6044 109C48.3117 109 60.8207 93.8416 60.8207 77.9122C60.8207 64.5072 52.352 53.042 40.9948 48.7644C37.7242 47.5955 34.6447 46.6255 34.6447 40.9923C34.6447 33.8049 39.843 23.1231 58.8991 7.77194ZM135.308 7.77194L130.301 0C96.0383 23.5085 76.4094 52.0721 76.4094 75.5806C76.4094 98.3119 93.3468 109 107.396 109C125.294 109 138 93.8416 138 77.9122C138 64.5072 129.34 53.042 117.595 48.7644C114.325 47.5955 111.436 46.6255 111.436 40.9923C111.436 33.8049 116.825 23.1168 135.302 7.76573L135.308 7.77194Z"
                          fill="#F3FF0A" />
                      </svg>
                    </div>
                    <p className="testimonial-5__desc">AnyImmi saved me at least 20 hours a week on content creation.
                      The PSD templates are not only beautiful but also IRCC-compliant, which gives me peace of mind.
                      My social media engagement has increased by 300% since I started using these assets.</p>
                    <div className="testimonial-5__author">
                      <div className="testimonial-5__thumb">
                        <img src="/assets/imgs/testimonial/author-5-01.png" alt="image not found" />
                      </div>
                      <h5 className="testimonial-5__name">Priya Sharma, RCIC — Toronto</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-5__arrow">
                <div className="testimonial-5__swiper-button-prev"></div>
                <div className="testimonial-5__swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Slide Section */}
      {/* <div className="brand-slide-5__area section-spacing bg-white overflow-hidden">
        <div className="container container-1800">
          <div dir="rtl" className="brand-section-5__slide">
            <div className="swiper brand-section-5__active">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="brand-section-5__item">
                    <img src="/assets/imgs/brand/brand-5_01.png" alt="brand not found" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-section-5__item">
                    <img src="/assets/imgs/brand/brand-5_02.png" alt="brand not found" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-section-5__item">
                    <img src="/assets/imgs/brand/brand-5_03.png" alt="brand not found" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-section-5__item">
                    <img src="/assets/imgs/brand/brand-5_04.png" alt="brand not found" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-section-5__item">
                    <img src="/assets/imgs/brand/brand-5_05.png" alt="brand not found" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-section-5__item">
                    <img src="/assets/imgs/brand/brand-5_06.png" alt="brand not found" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div dir="ltr" className="brand-section-5__slide">
            <div className="swiper brand-section-5__active">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="brand-section-5__item">
                    <img src="/assets/imgs/brand/brand-5_07.png" alt="brand not found" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-section-5__item">
                    <img src="/assets/imgs/brand/brand-5_08.png" alt="brand not found" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-section-5__item">
                    <img src="/assets/imgs/brand/brand-5_09.png" alt="brand not found" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-section-5__item">
                    <img src="/assets/imgs/brand/brand-5_10.png" alt="brand not found" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-section-5__item">
                    <img src="/assets/imgs/brand/brand-5_11.png" alt="brand not found" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-section-5__item">
                    <img src="/assets/imgs/brand/brand-5_12.png" alt="brand not found" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Video Section */}
      {/* <div className="video__wrap overflow-hidden">
        <div className="container">
          <div className="video-thumb"><img src="/assets/imgs/inner/about/video/video-thumb.jpg" alt="thumb" />
          </div>
        </div>
        <div className="video bg-img" style={{ backgroundImage: "url('/assets/imgs/inner/about/video/video-bg.jpg')" }}>
          <div className="video-title">
            <span> lay video </span> <img className="rotate-spin"
              src="/assets/imgs/inner/about/video/video-icon.png" alt="icon" />
            <span> play vid</span>
          </div>
        </div>
      </div> */}

      {/* Team Achievement Section */}
      <div className="team-achievement section-bg section-spacing rr-ov-hidden pb-0 overflow-hidden">
        <div className="container rr-container-1800">
          <div className="row g-4 d-flex justify-content-center">
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="team-achievement__card">
                <div className="team-achievement__card-title"><span className="odometer"
                  data-count="500">0</span>+</div>
                <p className="team-achievement__card-text">RCICs &amp; immigration consultants trust AnyImmi</p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6">
              <div className="team-achievement__card">
                <div className="team-achievement__card-title"><span className="odometer"
                  data-count="227">0</span>+</div>
                <p className="team-achievement__card-text">Premium PSD assets across 17 categories</p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6">
              <div className="team-achievement__card">
                <div className="team-achievement__card-title"><span className="odometer"
                  data-count="1000">0</span>+</div>
                <p className="team-achievement__card-text">Editable PSD files included in the bundle</p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="team-achievement__card">
                <div className="team-achievement__card-title"><span className="odometer"
                  data-count="99">0</span>%</div>
                <p className="team-achievement__card-text">Customer satisfaction rate — backed by our 30-day guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="team section-spacing overflow-hidden">
        <div className="container">
          <div className="section-top7">
            <div className="row gy-5 d-flex align-items-end justify-content-between">
              <div className="col-xl-7 d-flex justify-content-start">
                <div>
                  <div className="section-top7__subtitle wow fadeInUp" data-wow-delay=".3s">Our TEAM</div>
                  <div className="section-top7__title mb-0 wow fadeInUp" data-wow-delay=".5s">
                    Real people who understand immigration marketing — your partners in growing your practice.</div>
                </div>
              </div>
              <div className="col-xl-5 d-flex justify-content-end">
                <a href="/team" className="rr-btn-border">
                  <span className="text">VIEW ALL MEMBERS</span>
                  <span className="icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_22_142)">
                      <path
                        d="M22.0004 10.9995C16.6011 10.9995 12.2227 6.07534 12.2227 -0.00044632"
                        stroke="#101010" strokeWidth="2" strokeMiterlimit="10"></path>
                      <path
                        d="M12.2227 21.9995C12.2227 15.9253 16.5997 10.9995 22.0004 10.9995"
                        stroke="#101010" strokeWidth="2" strokeMiterlimit="10"></path>
                      <path d="M22.0005 10.9995H0.000488281" stroke="#101010" strokeWidth="2"
                        strokeMiterlimit="10"></path>
                    </g>
                  </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="row g-4 d-flex justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="team-section__card">
                <div className="team-section__card-thumb rr-ov-hidden">
                  <img data-speed="0.9" src="/assets/imgs/inner/team/team-thumb1_2.jpg" alt="thumb" />
                </div>
                <div className="team-section__card-items">
                  <ul className="team-section__card-items-list">
                    <li>FACEBOOK</li>
                    <li>LINKEDIN</li>
                    <li>INSTAGRAM</li>
                    <li>DRIBBBLE</li>
                  </ul>
                </div>
                <div className="team-section__card-content">
                  <h4 className="team-section__card-content-title">
                    <a href="/team/details" className="team-section__card-content-title-name">Anna
                      Peterson</a>
                  </h4>
                  <p className="team-section__card-content-subtitle">Co-Founder, Technical Director</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="team-section__card">
                <div className="team-section__card-thumb rr-ov-hidden">
                  <img data-speed="0.9" src="/assets/imgs/inner/team/team-thumb1_3.jpg" alt="thumb" />
                </div>
                <div className="team-section__card-items">
                  <ul className="team-section__card-items-list">
                    <li>FACEBOOK</li>
                    <li>LINKEDIN</li>
                    <li>INSTAGRAM</li>
                    <li>DRIBBBLE</li>
                  </ul>
                </div>
                <div className="team-section__card-content">
                  <h4 className="team-section__card-content-title">
                    <a href="/team/details" className="team-section__card-content-title-name">Leon
                      Kowalski</a>
                  </h4>
                  <p className="team-section__card-content-subtitle">Co-Founder, Technical Director</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="team-section__card">
                <div className="team-section__card-thumb rr-ov-hidden">
                  <img data-speed="0.9" src="/assets/imgs/inner/team/team-thumb1_4.jpg" alt="thumb" />
                </div>
                <div className="team-section__card-items">
                  <ul className="team-section__card-items-list">
                    <li>FACEBOOK</li>
                    <li>LINKEDIN</li>
                    <li>INSTAGRAM</li>
                    <li>DRIBBBLE</li>
                  </ul>
                </div>
                <div className="team-section__card-content">
                  <h4 className="team-section__card-content-title">
                    <a href="/team/details" className="team-section__card-content-title-name">Thomas
                      Johnson</a>
                  </h4>
                  <p className="team-section__card-content-subtitle">Co-Founder, Technical Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Marquee Section */}
      <div className="marque-section6 rr-ov-hidden">
        <div className="marquee-wrapper text-slider-1">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider-1">strategy</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">strategy</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">strategy</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">strategy</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">strategy</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">strategy</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </InnerPageLayout>
  );
}
