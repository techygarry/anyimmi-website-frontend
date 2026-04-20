import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency – Trexa',
  description: 'Award-Winning Digital Marketing Agency defined by Results – SEO, social media, PPC, and content marketing.',
};

export default function DigitalMarketingPage() {
  return (
    <InnerPageLayout>
      {/* Hero Section */}
      <section className="hero-section-5">
        <div className="hero-section-5__wrapper" style={{ backgroundImage: "url('/assets/imgs/bg/banner-bg_01.png')" }}>
          <div className="container container-1800">
            <div className="hero-section-5__wrap">
              <div className="hero-section-5__content">
                <span className="hero-section-5__subtitle">Agency of digital marketing</span>
                <h1 className="hero-section-5__title wow fadeInUp" data-wow-delay="0.4s">
                  Award-Winning <strong> Digital <img src="/assets/imgs/icon/falk-arrow.svg" alt="icon not found" /> <br />
                    Marketing Agency</strong> defined <br /> by Results
                </h1>
                <div className="hero-section-5__btn wow fadeInUp" data-wow-delay="0.3s">
                  <a href="/contact" className="rr-btn-green btn-black">Contact Us Today</a>
                </div>
                {/* Rating & Review */}
                <div className="hero-section-5__rating">
                  <div className="hero-section-5__rating-box">
                    <span className="score"> <span className="odometer" data-count="4.9"> 0 </span> </span>
                    <ul className="rating-star wow fadeInUp" data-wow-delay="0.4s">
                      <li><i className="fa fa-solid fa-star"></i></li>
                      <li><i className="fa fa-solid fa-star"></i></li>
                      <li><i className="fa fa-solid fa-star"></i></li>
                      <li><i className="fa fa-solid fa-star"></i></li>
                      <li><i className="fa fa-solid fa-star"></i></li>
                    </ul>
                  </div>
                  <div className="hero-section-5__author">
                    <div className="author-thumb">
                      <img src="/assets/imgs/hero/author-5_01.png" alt="img not found" />
                    </div>
                    <div className="author-content wow fadeInUp" data-wow-delay="0.4s">
                      <h5 className="name">Marco Brown</h5>
                      <p className="desg">Product Manager</p>
                      <p className="desc"> Duis aute irure dolor in reprehenderit in voluptate
                        esse cillum, dolore fugiat nulla pariatur. excepteur
                        sint occaecat cupidatat</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-section-5__thumb">
                <img className="rotate-spin circle-shape" src="/assets/imgs/hero/hero-5_01.png" alt="img not fund" />
                <a className="zoom-pin" href="#service">Scroll Down <i className="fa-light fa-arrow-right"></i></a>
                <img className="zoom-thumb" src="/assets/imgs/home-5/parallax.jpg" alt="png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="service-section-5 rr-bg-primary section-spacing">
        <div className="container container-1800">
          <div className="service-section-5__wrapper">
            <h5 className="service-section-5__subtitle wow fadeInUp" data-wow-delay="0.3s">OUR SERVICES</h5>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                <div className="accordion-box">
                  <h2 className="accordion-number">1</h2>
                </div>
                <div className="accordion-content">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Search Engine <span> Optimization</span>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatate
                      proident, sunt in culpa qui officia
                    </div>
                    <ul className="accordion-list">
                      <li>Keyword Optimization</li>
                      <li>On-Page SEO</li>
                      <li>Technical SEO</li>
                      <li>Quality Backlinks</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="accordion-box">
                  <h2 className="accordion-number">2</h2>
                </div>
                <div className="accordion-content">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Social Media <span>Marketing (SMM)</span>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatate
                      proident, sunt in culpa qui officia
                    </div>
                    <ul className="accordion-list">
                      <li>Keyword Optimization</li>
                      <li>On-Page SEO</li>
                      <li>Technical SEO</li>
                      <li>Quality Backlinks</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item wow fadeInUp" data-wow-delay="0.7s">
                <div className="accordion-box">
                  <h2 className="accordion-number">3</h2>
                </div>
                <div className="accordion-content">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Pay-Per-Click (PPC) <span>Advertising</span>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatate
                      proident, sunt in culpa qui officia
                    </div>
                    <ul className="accordion-list">
                      <li>Keyword Optimization</li>
                      <li>On-Page SEO</li>
                      <li>Technical SEO</li>
                      <li>Quality Backlinks</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item wow fadeInUp" data-wow-delay="0.9s">
                <div className="accordion-box">
                  <h2 className="accordion-number">4</h2>
                </div>
                <div className="accordion-content">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Pay-Per-Click (PPC) <span>Advertising</span>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatate
                      proident, sunt in culpa qui officia
                    </div>
                    <ul className="accordion-list">
                      <li>Keyword Optimization</li>
                      <li>On-Page SEO</li>
                      <li>Technical SEO</li>
                      <li>Quality Backlinks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-5__area section-spacing-top-120">
        <div className="container container-1800">
          <div className="about-us-5__wrapper">
            <h2 className="about-us-5__title wow fadeInUp" data-wow-delay="0.3s">TREXA</h2>
            <p className="about-us-5__subtitle wow fadeInUp" data-wow-delay="0.4s"><strong>Delivering innovative trexa digital marketing </strong>
              solutions with proven
              expertise, personalized strategies, &amp; a passion for driving measurable
              business <strong>growth worldwide.</strong></p>
          </div>
          <div className="about-us-5__wrap">
            <div className="about-us-5__item">
              <div className="about-us-5__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="42" viewBox="0 0 60 42" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M1.56 12.96C0.01 16.8 -0.4 21.02 0.39 25.1c0.79 4.07 2.75 7.81 5.62 10.75 2.87 2.94 6.53 4.94 10.51 5.75 3.98 0.81 8.11 0.39 11.86-1.2 3.75-1.59 6.96-4.28 9.21-7.74V42h1.58c4.06 0 8.03-1.23 11.4-3.54 3.38-2.31 6.01-5.59 7.56-9.43 1.55-3.84 1.95-8.07 1.15-12.15-0.79-4.08-2.75-7.82-5.62-10.76C51.12 3.21 47.46 1.21 43.48 0.4c-3.98-0.81-8.11-0.39-11.86 1.19-3.75 1.59-6.96 4.28-9.21 7.74V0h-1.58c-4.06 0-8.03 1.23-11.4 3.54-3.38 2.31-6.01 5.59-7.55 9.42Z"
                    fill="black" />
                </svg>
              </div>
              <h4 className="about-us-5__text wow fadeInUp" data-wow-delay="0.3s">Accelerate <span>your business <br />
                  growth online</span></h4>
              <p className="about-us-5__desc wow fadeInUp" data-wow-delay="0.4s">Duis aute irure dolor in reprehenderit ratione <br />
                esse cillum, dolore fugiat </p>
            </div>
            <div className="about-us-5__item">
              <div className="about-us-5__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M10.5 0C16.3 0 21 4.7 21 10.5V0H31.5C37.3 0 42 4.7 42 10.5S37.3 21 31.5 21c5.8 0 10.5 4.7 10.5 10.5 0 2.9-1.2 5.5-3.1 7.4-1.9 1.9-4.5 3.1-7.4 3.1s-5.5-1.2-7.4-3.1C22.1 36.9 21 34.4 21 31.5 21 37.3 16.3 42 10.5 42S0 37.3 0 31.5V21h10.5C4.7 21 0 16.3 0 10.5S4.7 0 10.5 0Z"
                    fill="black" />
                </svg>
              </div>
              <h4 className="about-us-5__text wow fadeInUp" data-wow-delay="0.3s">Increase sales <span> with smart <br />
                  marketing</span></h4>
              <p className="about-us-5__desc wow fadeInUp" data-wow-delay="0.4s">Duis aute irure dolor in reprehenderit ratione <br />
                esse cillum, dolore fugiat </p>
            </div>
            <div className="about-us-5__item">
              <div className="about-us-5__icon">
                <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M14.0575 0.528809C11.7447 0.528809 9.52666 1.44701 7.89128 3.08141L0 10.9679V14.5779C0 17.1283 1.09618 19.4229 2.84336 21.0166C1.09618 22.6103 0 24.9049 0 27.4553V31.0653L7.89128 38.9518C9.52666 40.5862 11.7447 41.5044 14.0575 41.5044C16.6094 41.5044 18.9053 40.4089 20.5 38.6627C22.0947 40.4089 24.3906 41.5044 26.9425 41.5044C29.2553 41.5044 31.4733 40.5862 33.1087 38.9518L41 31.0653V27.4553C41 24.9049 39.9039 22.6103 38.1567 21.0166C39.9039 19.4229 41 17.1283 41 14.5779V10.9679L33.1087 3.08141C31.4733 1.44701 29.2553 0.528809 26.9425 0.528809C24.3906 0.528809 22.0947 1.62433 20.5 3.37047C18.9053 1.62433 16.6094 0.528809 14.0575 0.528809Z"
                    fill="black" />
                </svg>
              </div>
              <h4 className="about-us-5__text wow fadeInUp" data-wow-delay="0.3s">Drive organic <span>website traffic <br />
                  consistently</span></h4>
              <p className="about-us-5__desc wow fadeInUp" data-wow-delay="0.6s">Duis aute irure dolor in reprehenderit ratione <br />
                esse cillum, dolore fugiat </p>
            </div>
            <div className="about-us-5__item">
              <div className="about-us-5__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="42" viewBox="0 0 60 42" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M1.56 12.96C0.01 16.8 -0.4 21.02 0.39 25.1c0.79 4.07 2.75 7.81 5.62 10.75 2.87 2.94 6.53 4.94 10.51 5.75 3.98 0.81 8.11 0.39 11.86-1.2 3.75-1.59 6.96-4.28 9.21-7.74V42h1.58c4.06 0 8.03-1.23 11.4-3.54 3.38-2.31 6.01-5.59 7.56-9.43 1.55-3.84 1.95-8.07 1.15-12.15-0.79-4.08-2.75-7.82-5.62-10.76C51.12 3.21 47.46 1.21 43.48 0.4c-3.98-0.81-8.11-0.39-11.86 1.19-3.75 1.59-6.96 4.28-9.21 7.74V0h-1.58c-4.06 0-8.03 1.23-11.4 3.54-3.38 2.31-6.01 5.59-7.55 9.42Z"
                    fill="black" />
                </svg>
              </div>
              <h4 className="about-us-5__text wow fadeInUp" data-wow-delay="0.3s">Target <span>the right audience <br />
                  effectively</span></h4>
              <p className="about-us-5__desc wow fadeInUp" data-wow-delay="0.5s">Duis aute irure dolor in reprehenderit ratione <br />
                esse cillum, dolore fugiat </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section-5__area rr-bg-primary section-spacing-top-120">
        <div className="container container-1800">
          <div className="portfolio-section-5__wrapper">
            <div className="portfolio-section-5__heading-wrap">
              <h2 className="portfolio-section-5__heading-title wow fadeInUp" data-wow-delay="0.3s"><span>Explore our</span> creative portfolio
                <span>showcasing</span> impactful
                campaigns, <span>successful strategies, and results-driven</span>
                digital marketing solutions.
              </h2>
              <h5 className="portfolio-section-5__subtitle">View Our Works</h5>
            </div>
            <div className="portfolio-section-5__thumb rr-ov-hidden">
              <img data-speed="0.7" src="/assets/imgs/portfolio/portfolio-01.jpg" alt="image not found" />
              <div className="portfolio-section-5__content">
                <div className="portfolio-section-5__item">
                  <span className="portfolio-section-5__date">26 Mar 2023</span>
                  <div className="portfolio-section-5__text">
                    <h4 className="portfolio-section-5__title">Social Media Marketing</h4>
                    <p className="portfolio-section-5__desc">Social Media Influencer Campaign</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-section-5__btn">
                <a href="/portfolio/details" className="rr-btn">See <br /> Details</a>
              </div>
            </div>
            <div className="portfolio-section-5__thumb rr-ov-hidden">
              <img data-speed="0.7" src="/assets/imgs/portfolio/portfolio-02.jpg" alt="image not found" />
              <div className="portfolio-section-5__content">
                <div className="portfolio-section-5__item">
                  <span className="portfolio-section-5__date">26 Mar 2023</span>
                  <div className="portfolio-section-5__text">
                    <h4 className="portfolio-section-5__title">Social Media Marketing</h4>
                    <p className="portfolio-section-5__desc">Social Media Influencer Campaign</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-section-5__btn">
                <a href="/portfolio/details" className="rr-btn">See <br /> Details</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="award-section-5 rr-bg-primary section-spacing">
        <div className="container container-1800">
          <h5 className="award-section-5__subtitle">Our Awards</h5>
          <div className="award-section-5__list">
            <div className="award-section-5__item">
              <span className="award-section-5__source">AWWWARDS</span>
              <span className="award-section-5__title">SOTY 2023 - 1st Winner</span>
              <span className="award-section-5__date">MAY 2024</span>
            </div>
            <div className="award-section-5__item">
              <span className="award-section-5__source">CSS AWWWARDS</span>
              <span className="award-section-5__title">Top 5 Best of eCommerce Websites 2023</span>
              <span className="award-section-5__date">MAY 2023</span>
            </div>
            <div className="award-section-5__item">
              <span className="award-section-5__source">AWWWARDS</span>
              <span className="award-section-5__title">Winner - US Behance Portfolio Review 2024</span>
              <span className="award-section-5__date">MAY 2022</span>
            </div>
            <div className="award-section-5__item">
              <span className="award-section-5__source">AWWWARDS</span>
              <span className="award-section-5__title">SOTY 2022 - 2nd Winner</span>
              <span className="award-section-5__date">MAY 2021</span>
            </div>
            <div className="award-section-5__item">
              <span className="award-section-5__source">AWWWARDS</span>
              <span className="award-section-5__title">SOTY 2023 - 1st Winner</span>
              <span className="award-section-5__date">MAY 2020</span>
            </div>
          </div>
        </div>
      </section>

      {/* Text Brand Slider Section */}
      <section className="brand-5__area section-spacing">
        <div className="brand-5__wrapper">
          <div className="widget-collection__slider-1">
            <div className="widget-collection__inner">
              <div className="widget-collection__item"><h2>strategy</h2></div>
              <div className="widget-collection__item"><h2><span>marketing</span></h2></div>
              <div className="widget-collection__item"><h2>analysis</h2></div>
              <div className="widget-collection__item"><h2>strategy</h2></div>
              <div className="widget-collection__item"><h2><span>marketing</span></h2></div>
              <div className="widget-collection__item"><h2>analysis</h2></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="fact-5__area">
        <div className="fact-5__wrapper" style={{ backgroundImage: "url('/assets/imgs/bg/fact-bg-01.jpg')" }}>
          <div className="fact-5__wrap">
            <div className="fact-5__item">
              <h2>
                <span className="odometer" data-count="1.9">0</span>
                <span className="symbol">M</span>
              </h2>
              <p>We helped to get companies with <br />
                $300M+ funding.</p>
            </div>
            <div className="fact-5__item">
              <h2>
                <span className="odometer" data-count="260">0</span>
                <span className="symbol">+</span>
              </h2>
              <p>Crafted responsive, user-centered <br />
                website &amp; app.</p>
            </div>
            <div className="fact-5__item">
              <h2>
                <span className="odometer" data-count="16">0</span>
                <span className="symbol">+</span>
              </h2>
              <p>We have had quite a run in our 12+ <br />
                years of working.</p>
            </div>
            <div className="fact-5__item">
              <h2>
                <span className="odometer" data-count="98">0</span>
                <span className="symbol">%</span>
              </h2>
              <p>Average 99% clients satisfaction <br />
                with expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-5__area section-spacing">
        <div className="container container-1800">
          <div className="testimonial-5__wrapper">
            <div className="swiper testimonial-5__active">
              <div className="swiper-wrapper">
                {[1, 2, 3].map((i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="testimonial-5__item">
                      <div className="testimonial-5__quote">
                        <svg width="138" height="109" viewBox="0 0 138 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M58.8991 7.77194L53.8918 0C19.247 23.5085 0 52.0721 0 75.5806C0 98.3119 16.5556 109 30.6044 109C48.3117 109 60.8207 93.8416 60.8207 77.9122C60.8207 64.5072 52.352 53.042 40.9948 48.7644C37.7242 47.5955 34.6447 46.6255 34.6447 40.9923C34.6447 33.8049 39.843 23.1231 58.8991 7.77194ZM135.308 7.77194L130.301 0C96.0383 23.5085 76.4094 52.0721 76.4094 75.5806C76.4094 98.3119 93.3468 109 107.396 109C125.294 109 138 93.8416 138 77.9122C138 64.5072 129.34 53.042 117.595 48.7644C114.325 47.5955 111.436 46.6255 111.436 40.9923C111.436 33.8049 116.825 23.1168 135.302 7.76573L135.308 7.77194Z"
                            fill="#F3FF0A" />
                        </svg>
                      </div>
                      <p className="testimonial-5__desc">They revamped our entire digital presence with an
                        amazing website, smart SEO, and brilliant content
                        marketing. The impact was immediate</p>
                      <div className="testimonial-5__author">
                        <div className="testimonial-5__thumb">
                          <img src="/assets/imgs/testimonial/author-5-01.png" alt="image not found" />
                        </div>
                        <h5 className="testimonial-5__name">Daniel K., SaaS Founder</h5>
                      </div>
                    </div>
                  </div>
                ))}
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
      <div className="brand-slide-5__area">
        <div className="container container-1800">
          <div dir="rtl" className="brand-section-5__slide">
            <div className="swiper brand-section-5__active">
              <div className="swiper-wrapper">
                {['brand-5_01', 'brand-5_02', 'brand-5_03', 'brand-5_04', 'brand-5_05', 'brand-5_06'].map((brand, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="brand-section-5__item">
                      <img src={`/assets/imgs/brand/${brand}.png`} alt="brand not found" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div dir="ltr" className="brand-section-5__slide">
            <div className="swiper brand-section-5__active">
              <div className="swiper-wrapper">
                {['brand-5_07', 'brand-5_08', 'brand-5_09', 'brand-5_10', 'brand-5_11', 'brand-5_12'].map((brand, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="brand-section-5__item">
                      <img src={`/assets/imgs/brand/${brand}.png`} alt="brand not found" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="video-section-5__area wow fadeInUp" data-wow-delay="0.3s">
        <div className="container container-1800">
          <div className="video-section-5__headding-wrap section-spacing-top-120">
            <h5 className="video-section-5__subtitle wow fadeInUp" data-wow-delay="0.3s">Let&apos;s Connect &amp; Create, Reach Out Today!</h5>
            <h3 className="video-section-5__title wow fadeInUp" data-wow-delay="0.4s">Collaborate with passionate experts <span>to build</span>
              innovative strategies, <span>craft</span> stunning designs,
              <span>achieve</span> impactful digital results <span>that elevate
                your brand.</span>
            </h3>
            <div className="video-section-5__btn">
              <a href="/contact" className="rr-btn-green btn-black">CONTACT US TODAY</a>
            </div>
          </div>
          <div className="video-section-5__wrap section-spacing rr-ov-hidden">
            <div className="video-section-5__play" data-speed="0.8" style={{ backgroundImage: "url('/assets/imgs/video/video-bg-5-01.jpg')" }}>
              <a className="popup-video" href="https://www.youtube.com/watch?v=JcXKbUIebrU">play</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-5__area">
        <div className="container container-1800">
          <div className="why-choose-us-5__wrapper">
            <h5 className="why-choose-us-5__subtitle">Why choose us</h5>
            <div className="why-choose-us-5__wrap section-spacing">
              <div className="why-choose-us-5__thumb">
                <img src="/assets/imgs/why-choose-us/why-choose-us-5-img-01.png" alt="img not found" />
              </div>
              <div className="why-choose-us-5__box">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Data-Driven Decision
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their model
                        search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions
                        have evolved over the years, sometimes by accident
                        <div className="accordion-icon">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Multi-Channel Expertise
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse show"
                      data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their model
                        search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions
                        have evolved over the years, sometimes by accident
                        <div className="accordion-icon">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                        aria-controls="flush-collapseThree">
                        Social Media Mastery
                      </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their model
                        search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions
                        have evolved over the years, sometimes by accident
                        <div className="accordion-icon">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour" aria-expanded="false"
                        aria-controls="flush-collapseThree">
                        Social Media Mastery
                      </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their model
                        search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions
                        have evolved over the years, sometimes by accident
                        <div className="accordion-icon">
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section-5__area">
        <div className="blog-section-5__wrapper section-spacing">
          <div className="container rr-container-1800">
            <div className="blog-section__headding-wrap">
              <h2 className="blog-section__title rr-title-anim-2">Stay up to date with the <b>latest news ,</b> insights,
                trends, &amp; industry <b>updates</b> that drive success</h2>
              <div className="blog-section-5__btn">
                <a href="#" className="rr-btn-button2 btn-purple">
                  <span className="text">VIEW ALL BLOGS</span>
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <g clipPath="url(#clip0_246_218_dm)">
                        <path d="M22.0004 11C16.6011 11 12.2227 6.07578 12.2227 0" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                        <path d="M12.2227 22C12.2227 15.9258 16.5997 11 22.0004 11" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                        <path d="M22.0005 11H0.000488281" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_246_218_dm">
                          <rect width="22" height="22" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="blog-section-5__wrap">
              {[
                { img: 'blog-5-img-01.jpg', title: 'Building Trust Online: The Role of Web Design in Establishing Credibility.', delay: '0.3s' },
                { img: 'blog-5-img-02.jpg', title: 'Visual Credibility: How Color, Typography & Imagery Impact User Trust', delay: '0.6s' },
                { img: 'blog-5-img-03.jpg', title: 'First Impressions Matter: How Design Shapes Online Trust & Loyalty', delay: '0.9s' },
              ].map(({ img, title, delay }, i) => (
                <div className="blog-section-5__item wow fadeInUp" data-wow-delay={delay} key={i}>
                  <div className="blog-section-5__meta">
                    <span className="blog-section-5__catagory">Insight</span>
                    <span className="blog-section-5__time">6 min read</span>
                  </div>
                  <h3 className="blog-section-5__title"><a href="/blog/details">{title}</a></h3>
                  <div className="blog-section-5__thumb rr-ov-hidden">
                    <a href="/blog/details"><img data-speed="1" src={`/assets/imgs/blog/${img}`} alt="img not found" /></a>
                    <span className="blog-section-5__date">April 16, 2025</span>
                  </div>
                  <div className="blog-section-5__icon">
                    <a href="/blog/details"><i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-5-area">
        <div className="footer-widget-5-wrapper" style={{ backgroundImage: "url('/assets/imgs/bg/footer-bg_01.png')" }}>
          <div className="footer-widget-5-wrap">
            <div className="footer-widget-5-box">
              <div className="footer-widget-5-social">
                <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.facebook.com/"><i className="fa-brands fa-dribbble"></i></a>
                <a href="https://www.facebook.com/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/"><i className="fa-brands fa-x-twitter"></i></a>
              </div>
            </div>
            <div className="footer-widget-5-box">
              <div className="footer-widget-5-content">
                <div className="footer-widget-5-info">
                  <a href="tel:+1234456-00-99">+1 234 456-00-99</a>
                  <a href="mailto:INFO@trexa.COM">INFO@trexa.COM</a>
                </div>
                <ul className="footer-widget-5-nav-list">
                  <li><a href="/">HOME</a></li>
                  <li><a href="/portfolio">PORTFOLIO</a></li>
                  <li><a href="/contact">CONTACT</a></li>
                </ul>
                <div className="footer-widget-5-copyright">
                  <div className="footer-widget-5-year">
                    <h4 className="footer-widget-5-title">2025:</h4>
                    <p>Trexa, All Rights Reserved</p>
                  </div>
                  <div className="footer-widget-5-address">
                    <h4 className="footer-widget-5-title">address</h4>
                    <p>Level 1, 12 Sample St, Sydney</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-widget-5-box">
              <div className="footer-widget-5-btn">
                <a href="/contact"><i className="fa fa-light fa-arrow-right"></i>CONTACT US TODAY</a>
              </div>
            </div>
          </div>
          <div className="footer-widget-5-bottom">
            <h2 className="title wow fadeInUp" data-wow-delay="0.2">Let&apos;s Build Together</h2>
          </div>
        </div>
      </footer>
    </InnerPageLayout>
  );
}
