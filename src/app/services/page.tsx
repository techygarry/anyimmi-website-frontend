import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Services – Trexa',
  description: 'Explore our full range of IT and technology services including AI, blockchain, data engineering, and cybersecurity.',
};

export default function ServicesPage() {
  return (
    <InnerPageLayout>
      {/* Breadcrumb Section */}
      <div className="breadcrumb1 section-bg overflow-hidden">
        <div className="container rr-container-1600">
          <div className="breadcrumb1__top">
            <div className="breadcrumb1__top-left">our services</div>
            <div className="breadcrumb1__top-right">
              <div className="breadcrumb1__top-right-img">
                <img src="/assets/imgs/inner/breadcrumb/breadcrumb-img1_1.png" alt="thumb" />
              </div>
              <div className="breadcrumb1__top-right-text">More then 25K clients reviews</div>
            </div>
          </div>
          <h1 className="breadcrumb1__title">We are Flawless — Our expert team blends data, experience, and innovation to fuel your business success.</h1>
        </div>
        <div className="breadcrumb1__thumb rr-ov-hidden">
          <img data-speed="0.9" src="/assets/imgs/inner/breadcrumb/breadcrumb-thumb1_2.jpg" alt="thumb" />
        </div>
      </div>

      <div className="inner-page section-bg">
        <div className="container rr-container-1800">
          <div className="inner-page__title">our services</div>
        </div>
      </div>

      {/* Service-page Section */}
      <section
        className="service-section-3__area rr-bg-primary section-spacing"
        style={{ backgroundImage: 'url(/assets/imgs/service/service-3-bg.png)' }}
      >
        <div className="container rr-container-1800">
          <div className="service-section-3__top">
            <div className="section-heading__wrap_3">
              <h4 className="section__subtitle"><span></span>our services</h4>
            </div>
          </div>
          <div className="service-section-3__wrapper">
            <div className="service-section-3__item">
              <div className="service-section-3__number">
                <span>01.</span>
              </div>
              <div className="service-section-3__info">
                <h3 className="service-section-3__title"><a href="/services/details">AI and machine learning</a></h3>
                <div className="service-section-3__list">
                  <ul>
                    <li><span></span>Robotics software</li>
                    <li><span></span>Computer vision</li>
                    <li><span></span>Smart AI &amp; chatbots</li>
                    <li><span></span>AI security</li>
                  </ul>
                </div>
              </div>
              <div className="service-section-3__thumb">
                <img src="/assets/imgs/service/service-3_01.jpg" alt="image not found" />
              </div>
            </div>
            <div className="service-section-3__item">
              <div className="service-section-3__number">
                <span>02.</span>
              </div>
              <div className="service-section-3__info">
                <h3 className="service-section-3__title"><a href="/services/details">Blockchain development</a></h3>
                <div className="service-section-3__list">
                  <ul>
                    <li><span></span>Robotics software</li>
                    <li><span></span>Computer vision</li>
                    <li><span></span>Smart AI &amp; chatbots</li>
                    <li><span></span>AI security</li>
                  </ul>
                </div>
              </div>
              <div className="service-section-3__thumb">
                <img src="/assets/imgs/service/service-3_01.jpg" alt="image not found" />
              </div>
            </div>
            <div className="service-section-3__item">
              <div className="service-section-3__number">
                <span>03.</span>
              </div>
              <div className="service-section-3__info">
                <h3 className="service-section-3__title"><a href="/services/details">Data and analytics engineering</a></h3>
                <div className="service-section-3__list">
                  <ul>
                    <li><span></span>Robotics software</li>
                    <li><span></span>Computer vision</li>
                    <li><span></span>Smart AI &amp; chatbots</li>
                    <li><span></span>AI security</li>
                  </ul>
                </div>
              </div>
              <div className="service-section-3__thumb">
                <img src="/assets/imgs/service/service-3_01.jpg" alt="image not found" />
              </div>
            </div>
            <div className="service-section-3__item">
              <div className="service-section-3__number">
                <span>04.</span>
              </div>
              <div className="service-section-3__info">
                <h3 className="service-section-3__title"><a href="/services/details">IT Services and Cybersecurity</a></h3>
                <div className="service-section-3__list">
                  <ul>
                    <li><span></span>Robotics software</li>
                    <li><span></span>Computer vision</li>
                    <li><span></span>Smart AI &amp; chatbots</li>
                    <li><span></span>AI security</li>
                  </ul>
                </div>
              </div>
              <div className="service-section-3__thumb">
                <img src="/assets/imgs/service/service-3_01.jpg" alt="image not found" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Achievement Section */}
      <div className="team-achievement section-bg section-spacing rr-ov-hidden pb-0 overflow-hidden">
        <div className="container rr-container-1800">
          <div className="row g-4 d-flex justify-content-center">
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="team-achievement__card">
                <div className="team-achievement__card-title"><span className="odometer" data-count="100">0</span>K</div>
                <p className="team-achievement__card-text">We have 100+ satisfied clients</p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6">
              <div className="team-achievement__card">
                <div className="team-achievement__card-title"><span className="odometer" data-count="100">0</span>+</div>
                <p className="team-achievement__card-text">Projects success rate 99% guaranteed</p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6">
              <div className="team-achievement__card">
                <div className="team-achievement__card-title"><span className="odometer" data-count="366">0</span>+</div>
                <p className="team-achievement__card-text">We helped companies secure $25M+ in funding</p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="team-achievement__card">
                <div className="team-achievement__card-title"><span className="odometer" data-count="19">0</span>+</div>
                <p className="team-achievement__card-text">Award for Outstanding Digital Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Area */}
      <div className="wp-area7 section-spacing overflow-hidden">
        <div className="rr-container-1800 container">
          <div className="wp-area7__thumb rr-ov-hidden rounded-3">
            <a className="popup-video icon" href="https://www.youtube.com/watch?v=8oON21G1Bqg">
              <img className="rotate-spin" src="/assets/imgs/home-7/wp/wp-video.png" alt="img" />
            </a>
            <img data-speed="0.9" className="rounded-3" src="/assets/imgs/home-7/wp/wcu-thumb1_1.jpg" alt="thumb" />
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="testimonial-5__area section-spacing pb-0 bg-white overflow-hidden">
        <div className="container container-1800">
          <div className="testimonial-5__wrapper">
            <div className="swiper testimonial-5__active">
              <div className="swiper-wrapper">
                {[1, 2, 3].map((i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="testimonial-5__item">
                      <div className="testimonial-5__quote">
                        <svg width="138" height="109" viewBox="0 0 138 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M58.8991 7.77194L53.8918 0C19.247 23.5085 0 52.0721 0 75.5806C0 98.3119 16.5556 109 30.6044 109C48.3117 109 60.8207 93.8416 60.8207 77.9122C60.8207 64.5072 52.352 53.042 40.9948 48.7644C37.7242 47.5955 34.6447 46.6255 34.6447 40.9923C34.6447 33.8049 39.843 23.1231 58.8991 7.77194ZM135.308 7.77194L130.301 0C96.0383 23.5085 76.4094 52.0721 76.4094 75.5806C76.4094 98.3119 93.3468 109 107.396 109C125.294 109 138 93.8416 138 77.9122C138 64.5072 129.34 53.042 117.595 48.7644C114.325 47.5955 111.436 46.6255 111.436 40.9923C111.436 33.8049 116.825 23.1168 135.302 7.76573L135.308 7.77194Z" fill="#F3FF0A" />
                        </svg>
                      </div>
                      <p className="testimonial-5__desc">They revamped our entire digital presence with an amazing website, smart SEO, and brilliant content marketing. The impact was immediate</p>
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
      <div className="brand-slide-5__area section-spacing bg-white overflow-hidden">
        <div className="container container-1800">
          <div dir="rtl" className="brand-section-5__slide">
            <div className="swiper brand-section-5__active">
              <div className="swiper-wrapper">
                {['brand-5_01', 'brand-5_02', 'brand-5_03', 'brand-5_04', 'brand-5_05', 'brand-5_06'].map((brand) => (
                  <div className="swiper-slide" key={brand}>
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
                {['brand-5_07', 'brand-5_08', 'brand-5_09', 'brand-5_10', 'brand-5_11', 'brand-5_12'].map((brand) => (
                  <div className="swiper-slide" key={brand}>
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

      {/* Marquee Section */}
      <div className="marque-section6 rr-ov-hidden">
        <div className="marquee-wrapper text-slider-1">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider-3">strategy</span>
                <span className="text-slider-4">marketing</span>
                <span className="text-slider-3">analysis</span>
                <span className="text-slider-4">marketing</span>
                <span className="text-slider-3">strategy</span>
                <span className="text-slider-4">marketing</span>
                <span className="text-slider-3">analysis</span>
                <span className="text-slider-4">marketing</span>
                <span className="text-slider-3">strategy</span>
                <span className="text-slider-4">marketing</span>
                <span className="text-slider-3">analysis</span>
                <span className="text-slider-4">marketing</span>
                <span className="text-slider-3">strategy</span>
                <span className="text-slider-4">marketing</span>
                <span className="text-slider-3">analysis</span>
                <span className="text-slider-4">marketing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
