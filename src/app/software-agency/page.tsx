import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Software Agency – Trexa',
  description: 'Where Innovation Becomes Scalable Reality – custom software development, mobile apps, cloud & DevOps solutions.',
};

export default function SoftwareAgencyPage() {
  const checkSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M11.4341 0.15781C11.641 0.295733 11.7846 0.510175 11.8333 0.753967C11.8821 0.99776 11.832 1.25094 11.6941 1.45781L5.44411 10.8328C5.36714 10.9481 5.26554 11.0449 5.14665 11.1162C5.02776 11.1875 4.89454 11.2316 4.75657 11.2452C4.6186 11.2589 4.47933 11.2417 4.34878 11.195C4.21824 11.1484 4.09967 11.0733 4.00161 10.9753L0.251615 7.22531C0.0860148 7.04759 -0.00413921 6.81253 0.000146059 6.56966C0.00443133 6.32678 0.102821 6.09505 0.274588 5.92328C0.446354 5.75152 0.678085 5.65313 0.920961 5.64884C1.16384 5.64456 1.3989 5.73471 1.57661 5.90031L4.51786 8.84156L10.1341 0.41656C10.2722 0.209907 10.4868 0.0665612 10.7305 0.0180398C10.9743 -0.0304816 11.2274 0.0197929 11.4341 0.15781Z"
        fill="white" />
    </svg>
  );

  const arrowBtnSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M22 11C16.6 11 12.2 6.08 12.2 0" stroke="white" strokeWidth="2" />
      <path d="M12.2 22C12.2 15.93 16.6 11 22 11" stroke="white" strokeWidth="2" />
      <path d="M22 11H0" stroke="white" strokeWidth="2" />
    </svg>
  );

  return (
    <InnerPageLayout>
      {/* Intro Section */}
      <div className="intro-area4 section-spacing overflow-hidden" style={{ backgroundImage: "url('/assets/imgs/home-4/intro/introbg-thumb1_1.jpg')" }}>
        <div className="container rr-container-1800">
          <div className="row g-60 justify-content-between">
            <div className="col-xl-6 col-lg-6">
              <div className="intro-area4__content">
                <div className="intro-area4__content-subtitle wow fadeInUp" data-wow-delay=".3s">Welcome to Trexa Company</div>
                <h1 className="intro-area4__content-title wow fadeInUp" data-wow-delay=".5s">Where Innovation Becomes Scalable Reality</h1>
                <div className="intro-area4__content-items">
                  <div className="intro-area4__content-items-image">
                    <img src="/assets/imgs/home-4/intro/mentro-image1_1.png" alt="image" />
                  </div>
                  <p className="intro-area4__content-items-text wow fadeInUp" data-wow-delay=".7s">Duis aute irure dolor in
                    reprehenderit in voluptate velit officia cillum dolore in fugiat nulla pariatur excepteur sints
                    occaecat
                    cupidatat non proident,</p>
                </div>
                <div className="intro-area4__content-newsletter">
                  <form action="#" className="intro-area4__content-newsletter-box">
                    <input type="email" name="email" id="email" placeholder="Scale Your Innovation Today" />
                    <button className="intro-area4__content-newsletter-button">
                      <span className="intro-area4__content-newsletter-button-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="26" viewBox="0 0 44 26" fill="none">
                          <path
                            d="M29.3333 0C29.3333 1.36033 30.6772 3.39167 32.0375 5.09667C33.7865 7.29667 35.8765 9.21617 38.2727 10.681C40.0693 11.7792 42.2473 12.8333 44 12.8333M44 12.8333C42.2473 12.8333 40.0675 13.8875 38.2727 14.9857C35.8765 16.4523 33.7865 18.3718 32.0375 20.5682C30.6772 22.275 29.3333 24.31 29.3333 25.6667M44 12.8333H0"
                            stroke="black" strokeWidth="2" />
                        </svg>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="intro-area4__info">
                <div className="intro-area4__info-thumb rr-ov-hidden">
                  <img data-speed="0.6" src="/assets/imgs/home-4/intro/intro-thumb1_1.jpg" alt="thumb" />
                </div>
                <div className="intro-area4__info-counter-area">
                  <div className="intro-area4__info-counter-area-items wow fadeInUp" data-wow-delay=".3s">
                    <h2><span className="count">10k</span>+</h2>
                    <p className="intro-area4__info-counter-area-items-text">Daily Interactions at Scale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-area4 section-spacing rr-ov-hidden">
        <div className="container rr-container-1800">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-area4__items">
                <div className="about-area4__items-thumb rr-ov-hidden">
                  <img data-speed="0.8" className="wow fadeInLeft" data-wow-delay=".3s" src="/assets/imgs/home-4/about/about-thumb1_1.jpg" alt="thumb" />
                </div>
                <div className="section-top4">
                  <div className="section-top4__subtitle wow fadeInUp" data-wow-delay=".3s">WHO WE ARE</div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="about-area4__content">
                <p className="about-area4__content-subtitle rr-title-anim-2"> The team driving innovation at software agency
                  with passion, expertise, and scalable solutions to empower businesses,
                  embrace changes, and build future-ready technology for smarter, faster
                  ready technology digital world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Feature Section */}
      <div className="about-feature section-spacing rr-ov-hidden pt-0">
        <div className="container rr-container-1600">
          <div className="about-feature-wrapper">
            <div className="row g-4 d-flex justify-content-center">
              {/* Left Side: Tab Images */}
              <div className="col-xl-5 col-lg-6">
                <div className="tab-content" id="aboutFeatureContent">
                  <div className="tab-pane fade show active" id="about-plan1" role="tabpanel">
                    <div className="about-feature__thumb rr-ov-hidden">
                      <img data-speed="0.9" src="/assets/imgs/home-4/about/about-thumb1_2.jpg" alt="thumb" />
                    </div>
                    <div className="about-feature__button">
                      <a href="#" className="rr-btn-button4 btn-purple">
                        <span className="text">EXPLORE MORE</span>
                        <span className="icon">{arrowBtnSvg}</span>
                      </a>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="about-plan2" role="tabpanel">
                    <div className="about-feature__thumb rr-ov-hidden">
                      <img data-speed="0.9" src="/assets/imgs/home-4/about/about-thumb1_2.jpg" alt="thumb" />
                    </div>
                    <div className="about-feature__button">
                      <a href="#" className="rr-btn-button4 btn-purple">
                        <span className="text">EXPLORE MORE</span>
                        <span className="icon">{arrowBtnSvg}</span>
                      </a>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="about-plan3" role="tabpanel">
                    <div className="about-feature__thumb rr-ov-hidden">
                      <img data-speed="0.9" src="/assets/imgs/home-4/about/about-thumb1_2.jpg" alt="thumb" />
                    </div>
                    <div className="about-feature__button wow fadeInUp" data-wow-delay="0.5s">
                      <a href="#" className="rr-btn-button4 btn-purple">
                        <span className="text">EXPLORE MORE</span>
                        <span className="icon">{arrowBtnSvg}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Side: Tab Buttons */}
              <div className="col-xl-6 col-lg-6">
                <div className="about-feature-tab-header">
                  <div className="nav flex-column" id="aboutFeatureTabs" role="tablist">
                    <button className="nav-link active wow fadeInUp" data-wow-delay="0.3s" id="tab1" data-bs-toggle="tab" data-bs-target="#about-plan1"
                      type="button" role="tab" aria-controls="about-plan1" aria-selected="true">
                      <span className="title">Innovation at Our Core</span>
                      <span className="subtitle">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. neque porro quisquam, in qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit,</span>
                    </button>
                    <button className="nav-link wow fadeInUp" data-wow-delay="0.5s" id="tab2" data-bs-toggle="tab" data-bs-target="#about-plan2" type="button"
                      role="tab" aria-controls="about-plan2" aria-selected="false">
                      <span className="title">Built Around Your Goals</span>
                      <span className="subtitle">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. neque porro quisquam, in qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit,</span>
                    </button>
                    <button className="nav-link wow fadeInUp" data-wow-delay="0.7s" id="tab3" data-bs-toggle="tab" data-bs-target="#about-plan3" type="button"
                      role="tab" aria-controls="about-plan3" aria-selected="false">
                      <span className="title">Engineered for the Future</span>
                      <span className="subtitle">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. neque porro quisquam, in qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit,</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Area Section */}
      <section className="service-area4 rr-ov-hidden" style={{ backgroundImage: "url('/assets/imgs/home-4/service/service-bg-thumb1_1.png')" }}>
        <div className="container rr-container-1800">
          <div className="row">
            <div className="col-xl-7">
              <div className="section-top4">
                <div className="section-top4__subtitle wow fadeInUp" data-wow-delay=".3s">Choose Your Best Plan</div>
              </div>
            </div>
          </div>
          <div className="row g-4 gy-5 d-flex justify-content-between">
            <div className="col-xl-8 col-lg-7">
              <div className="service-area4__content">
                <h2 className="service-area4__content-title1">Custom Software Development</h2>
                <h2 className="service-area4__content-title2">Mobile App Development</h2>
                <h2 className="service-area4__content-title1">Mobile App Development</h2>
                <h2 className="service-area4__content-title2">Cloud &amp; DevOps Solutions</h2>
                <h2 className="service-area4__content-title1">Software Maintenance &amp; Support</h2>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5">
              <div className="service-area4__items">
                <div className="service-area4__items-thumb rr-ov-hidden">
                  <img data-speed="0.8" src="/assets/imgs/home-4/service/service-thumb1_1.jpg" alt="thumb" />
                </div>
                <div className="service-area4__items-content">
                  <p className="service-area4__items-content-subtitle">Nor again is there anyone who loves pursues
                    desires to obtain pain of itself, because upon
                    because occasionally </p>
                  <ul className="service-area4__items-content-info">
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <line x1="12.9346" y1="2.18556e-08" x2="12.9346" y2="10.1739" stroke="white" />
                        <line x1="12.9346" y1="15.8262" x2="12.9346" y2="26.0001" stroke="white" />
                        <line x1="15.8262" y1="13.0652" x2="26.0001" y2="13.0652" stroke="white" />
                        <line y1="13.0652" x2="10.1739" y2="13.0652" stroke="white" />
                      </svg>
                      Native (Swift, Kotlin)
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <line x1="12.9346" y1="2.18556e-08" x2="12.9346" y2="10.1739" stroke="white" />
                        <line x1="12.9346" y1="15.8262" x2="12.9346" y2="26.0001" stroke="white" />
                        <line x1="15.8262" y1="13.0652" x2="26.0001" y2="13.0652" stroke="white" />
                        <line y1="13.0652" x2="10.1739" y2="13.0652" stroke="white" />
                      </svg>
                      Cross-Platform Apps (Flutter &amp; RN)
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <line x1="12.9346" y1="2.18556e-08" x2="12.9346" y2="10.1739" stroke="white" />
                        <line x1="12.9346" y1="15.8262" x2="12.9346" y2="26.0001" stroke="white" />
                        <line x1="15.8262" y1="13.0652" x2="26.0001" y2="13.0652" stroke="white" />
                        <line y1="13.0652" x2="10.1739" y2="13.0652" stroke="white" />
                      </svg>
                      App Store Launch &amp; Support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Area Section */}
      <section className="project-area4 section-spacing rr-ov-hidden">
        <div className="container rr-container-1800">
          <div className="row g-4 d-flex justify-content-center align-items-center justify-content-between">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="project-area4__thumb" data-speed="1.2" data-lag="0">
                <img src="/assets/imgs/home-4/project/project-thumb1_1.jpg" alt="thumb" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 d-flex justify-content-end">
              <div className="project-area4__thumb" data-speed="1.4" data-lag="0">
                <img src="/assets/imgs/home-4/project/project-thumb1_2.jpg" alt="thumb" />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12">
              <div className="project-area4__content">
                <h2 className="project-area4__content-text">recent works</h2>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 d-flex align-items-center justify-content-center">
              <div className="project-area4__thumb3" data-speed="1.2" data-lag="0">
                <img src="/assets/imgs/home-4/project/project-thumb1_3.jpg" alt="thumb" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <div className="wcu-area4 section-spacing rr-ov-hidden pb-0">
        <div className="container">
          <div className="row g-5 d-flex justify-content-center">
            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="wcu-area4-thumb rr-ov-hidden">
                <img data-speed="0.9" src="/assets/imgs/home-4/wcu/wcu-thumb1_1.jpg" alt="thumb" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="wcu-area4-content">
                <div className="section-top4">
                  <div className="section-top4__subtitle wow fadeInUp">Why Choose Us</div>
                  <div className="section-top4__title wow fadeInUp rr-title-anim-2" data-wow-delay=".3s">Trexa where team wellness meets
                    smarter, sustainable business growth.</div>
                  <p className="section-top4__text wow fadeInUp" data-wow-delay=".5s">Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                    nesciunt in quisquam qui dolorem ipsum quia dolor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Section */}
      <div className="brand-area4 section-spacing">
        <div className="container rr-container-1800">
          <div className="brand-area4-wrapper">
            <div className="swiper brand-slider">
              <div className="swiper-wrapper">
                {['brand-thumb1_1', 'brand-thumb1_2', 'brand-thumb1_3', 'brand-thumb1_4', 'brand-thumb1_5', 'brand-thumb1_6'].map((brand, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="brand-area4__image">
                      <img src={`/assets/imgs/home-4/brand/${brand}.png`} alt="brand-img" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="testimonial-area4 section-spacing rr-ov-hidden">
        <div className="container rr-container-1600">
          <div className="row gy-5 d-flex justify-content-center">
            <div className="col-xl-7 d-flex justify-content-center">
              <div className="section-top4 text-center">
                <div className="section-top4__subtitle wow fadeInUp" data-wow-delay=".3s">Positive Feedback</div>
                <div className="section-top4__title mb-0 wow fadeInUp rr-title-anim-2" data-wow-delay=".5s">Real stories from people –
                  see what we do and how we help succeed</div>
              </div>
            </div>
          </div>
          <div className="row gy-5 d-flex justify-content-between">
            <div className="col-xl-9 col-lg-8">
              <div className="swiper testimonial4-slider">
                <div className="swiper-wrapper">
                  {[1, 2, 3, 4].map((i) => (
                    <div className="swiper-slide" key={i}>
                      <div className="testimonial-area4__card">
                        <div className="video-box">
                          <a href="#" className="video-buttton">
                            <div className="arrow-button">
                              <img src="/assets/imgs/home-4/testimonial/video-icon1_1.png" alt="icon" />
                            </div>
                            <img src="/assets/imgs/home-4/testimonial/circle-text.png" alt="text-img" className="text-circle" />
                          </a>
                        </div>
                        <div className="testimonial-area4__card-items">
                          <div className="testimonial-area4__card-items-content">
                            <p className="testimonial-area4__card-items-content-subtitle">Nam libero tempore, cum soluta nobis
                              est eligendi optio
                              cumque nihil impedit quo minus a quod maxime placeat
                              facere possimus, omnis voluptas assumenda aut, omnis
                              dolor repellendus temporibus</p>
                          </div>
                          <div className="testimonial-area4__card-items-mentor-items">
                            <div className="testimonial-area4__card-items-mentor-items-info">
                              <div className="testimonial-area4__card-items-mentor-items-info-thumb">
                                <img src="/assets/imgs/home-4/testimonial/testimonial-image1_1.png" alt="image" />
                              </div>
                              <div className="testimonial-area4__card-items-mentor-items-info-content">
                                <h5 className="testimonial-area4__card-items-mentor-items-info-content-title">Brooklyn Simmons</h5>
                                <p className="testimonial-area4__card-items-mentor-items-info-content-subtitle">Ceo and Founder</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="testimonial-area4__controls">
                <div className="testimonial-area4__controls-arrowRight">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                    <path d="M16.6154 21V7.7H2.65985L7.91169 13.0088L6.93138 14.0084L0 7L6.92308 0L7.91169 0.9996L2.65846 6.3H18V21H16.6154Z" fill="white" />
                  </svg>
                </div>
                <div className="testimonial-area4__controls-arrowLeft">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                    <path d="M1.38461 21V7.7H15.3402L10.0883 13.0088L11.0686 14.0084L18 7L11.0769 0L10.0883 0.9996L15.3415 6.3H0V21H1.38461Z" fill="black" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="testimonial-area4__content wow fadeInUp" data-wow-delay=".3s">
                <h4 className="testimonial-area4__content-title">50+ Repeat Clients</h4>
                <div className="testimonial-area4__content-thumb">
                  <img src="/assets/imgs/home-4/testimonial/testimonial-client-image1_1.png" alt="image" />
                </div>
                <p className="testimonial-area4__content-subtitle">Trexa delivers solutions that surpass client goals,
                  building trust, innovation, &amp; lasting partnerships
                  for sustainable growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Area Section */}
      <section className="video-area4 rr-ov-hidden" style={{ backgroundImage: "url('/assets/imgs/home-4/video/video-bg-thumb1_1.png')" }}>
        <div className="container rr-container-1800">
          <div className="row g-4 d-flex justify-content-between">
            <div className="col-xl-8 col-lg-7">
              <div className="video-area4__items">
                <h3 className="video-area4__items-title rr-title-anim-2">Creative apps and monetization tools
                  for modern creators to launch scale &amp;
                  succeed effortlessly</h3>
                <div className="video-area4__items-thumb rr-ov-hidden">
                  <img data-speed="0.8" src="/assets/imgs/home-4/video/video-thumb1_1.jpg" alt="thumb" />
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 d-flex justify-content-end">
              <div className="video-area4-info">
                <div className="video-area4-info__counter wow fadeInUp" data-wow-delay="0.6s">
                  <h2 className="video-area4-info__counter-title"><span className="odometer count" data-count="98">0</span>%</h2>
                  <p className="video-area4-info__counter-text">Average clients satisfied and repeating</p>
                </div>
                <div className="video-area4-info__counter wow fadeInUp" data-wow-delay="0.7s">
                  <h2 className="video-area4-info__counter-title"><span className="odometer count" data-count="90">0</span>%</h2>
                  <p className="video-area4-info__counter-text">Successfully projects done in 24 countries</p>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="video-area4__content wow fadeInUp" data-wow-delay="0.3s">
                <h2 className="video-area4__content-title">Explore Video</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="wp-area4 section-spacing rr-ov-hidden">
        <div className="container rr-container-1600">
          <div className="row g-4 d-flex justify-content-between">
            <div className="col-xl-5 col-lg-7">
              <div className="section-top4">
                <div className="section-top4__subtitle wow fadeInUp">What We Do</div>
                <div className="section-top4__title wow fadeInUp" data-wow-delay=".3s">Unlock Insights with Advanced
                  Business Analytics for Smarter Decisions, Growth,</div>
                <p className="section-top4__text wow fadeInUp" data-wow-delay=".5s">Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit sed magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, </p>
              </div>
              <div className="wp-area4-wrapper">
                <div className="wp-area4-wrapper__progress-wrap">
                  <div className="wp-area4-wrapper__progress-wrap-pro-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="pro-head">
                      <h6 className="title">Software Development</h6>
                      <span className="point"><span className="odometer" data-count="98">0</span>%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-value style-one"></div>
                    </div>
                  </div>
                  <div className="wp-area4-wrapper__progress-wrap-pro-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="pro-head">
                      <h6 className="title">Data Integration</h6>
                      <span className="point"><span className="odometer" data-count="78">0</span>%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-value style-four"></div>
                    </div>
                  </div>
                  <div className="wp-area4-wrapper__progress-wrap-pro-items wow fadeInUp" data-wow-delay=".7s">
                    <div className="pro-head">
                      <h6 className="title">Analytics Success</h6>
                      <span className="point"><span className="odometer" data-count="88">0</span>%</span>
                    </div>
                    <div className="progress mb-0">
                      <div className="progress-value style-three"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="wp-area4__items">
                <div className="wp-area4__items-thumb">
                  <img src="/assets/imgs/home-4/wp/wp-thumb1_1.png" alt="thumb" />
                </div>
                <a href="#" className="rr-btn-button4 btn-purple wow fadeInUp" data-wow-delay="0.3s">
                  <span className="text">EXPLORE MORE</span>
                  <span className="icon">{arrowBtnSvg}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-area4 section-spacing rr-ov-hidden">
        <div className="container rr-container-1600">
          <div className="row gy-5 d-flex justify-content-center">
            <div className="col-xl-7 d-flex justify-content-center">
              <div className="section-top4 text-center">
                <div className="section-top4__subtitle wow fadeInUp" data-wow-delay=".3s">Choose Your Best Plan</div>
                <div className="section-top4__title mb-0 wow fadeInUp rr-title-anim-2" data-wow-delay=".5s">Choose Your Best Plan for
                  Growth, Value, Flexibility, and Success</div>
              </div>
            </div>
          </div>
          <div className="pricing-area4__wrapper">
            <div className="row g-4 d-flex justify-content-center">
              {[
                { plan: 'Professional', price: '185$', delay: '.3s' },
                { plan: 'Premium', price: '285$', delay: '.6s', active: true },
                { plan: 'Advanced', price: '385$', delay: '.8s' },
              ].map(({ plan, price, delay, active }) => (
                <div className="col-xl-4 col-lg-6 col-md-6" key={plan}>
                  <div className={`pricing-area4__items${active ? ' active' : ' wow fadeInUp'}`} data-wow-delay={delay}>
                    <div className="pricing-area4__items-header">
                      <span className="pricing-area4__items-header-subtitle">{plan}</span>
                      <h3 className="pricing-area4__items-header-title">
                        {price}
                        <sub>/ per mo</sub>
                      </h3>
                    </div>
                    <div className="pricing-area4__items-info">
                      <ul className="pricing-area4__items-info-list">
                        <li>{checkSvg} Social media advertising</li>
                        <li>{checkSvg} Quality performance</li>
                        <li>{checkSvg} Keyword research</li>
                        <li>{checkSvg} Free custom domain</li>
                        <li>{checkSvg} Customizable registration</li>
                      </ul>
                    </div>
                    <div className="pricing-area4__items-button">
                      <a href="#" className="pricing-area4__items-button-pricing-btn mt-4">Choose Your Plan</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-area4 section-spacing rr-ov-hidden">
        <div className="container rr-container-1600">
          <div className="row gy-5 d-flex align-items-center justify-content-between">
            <div className="col-xl-7 d-flex justify-content-start">
              <div className="section-top4">
                <div className="section-top4__subtitle wow fadeInUp" data-wow-delay=".3s">Recent News</div>
                <div className="section-top4__title mb-0 wow fadeInUp" data-wow-delay=".5s">Our latest news &amp; articles
                  on technology, innovation and software industry insights</div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="blog-area4__button">
                <a href="#" className="rr-btn-button btn-purple">
                  <span className="text">Explore All Posts</span>
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <g clipPath="url(#clip0_246_218)">
                        <path d="M22.0004 11C16.6011 11 12.2227 6.07578 12.2227 0" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M12.2227 22C12.2227 15.9258 16.5997 11 22.0004 11" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M22.0005 11H0.000488281" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      </g>
                      <defs>
                        <clipPath id="clip0_246_218">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="blog-area4-wrapper">
            <div className="swiper blog-slider">
              <div className="swiper-wrapper">
                {[
                  { thumb: 'blog-thumb1_1', clip: '1901' },
                  { thumb: 'blog-thumb1_2', clip: '1902' },
                  { thumb: 'blog-thumb1_1', clip: '1903' },
                  { thumb: 'blog-thumb1_2', clip: '1930' },
                ].map(({ thumb, clip }, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="blog-area4__card">
                      <div className="blog-area4__card-content">
                        <ul className="blog-area4__card-content-list">
                          <li>Software</li>
                          <li>July 25, 2025</li>
                        </ul>
                        <h3 className="blog-area4__card-content-title">How Custom Software Solutions Drive Business Growth in 2025</h3>
                        <p className="blog-area4__card-content-subtitle">Nemo enim ipsam voluptatem quia voluptas doror odit aut
                          fugit, sed quia consequuntur magni eos in ratione voluptatem</p>
                        <a className="blog-area4__card-content-link" href="/blog/details">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath={`url(#clip0_246_190)`}>
                              <path d="M23.2462 7.96095C19.4712 11.8212 12.8893 11.5088 8.54541 7.26074" stroke="#F0F2F4" strokeWidth="2" strokeMiterlimit="10" />
                              <path d="M24.2746 22.643C19.9319 18.3961 19.4704 11.8228 23.2465 7.96148" stroke="#F0F2F4" strokeWidth="2" strokeMiterlimit="10" />
                              <path d="M23.2465 7.96141L7.86475 23.6904" stroke="#F0F2F4" strokeWidth="2" strokeMiterlimit="10" />
                            </g>
                            <defs>
                              <clipPath id={`clip0_246_190`}>
                                <rect width="22" height="22" fill="white" transform="translate(0 16) rotate(-45.6395)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </div>
                      <div className="blog-area4__card-thumb">
                        <img src={`/assets/imgs/home-4/blog/${thumb}.jpg`} alt="thumb" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-area4-wrapper-controls">
              <div className="blog-area4-wrapper-controls__arrowRight">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                  <path d="M16.6154 21V7.7H2.65985L7.91169 13.0088L6.93138 14.0084L0 7L6.92308 0L7.91169 0.9996L2.65846 6.3H18V21H16.6154Z" fill="white" />
                </svg>
              </div>
              <div className="blog-area4-wrapper-controls__arrowLeft">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                  <path d="M1.38461 21V7.7H15.3402L10.0883 13.0088L11.0686 14.0084L18 7L11.0769 0L10.0883 0.9996L15.3415 6.3H0V21H1.38461Z" fill="black" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="marque-section4 rr-ov-hidden">
        <div className="marquee-wrapper text-slider-1">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider-1">Work with us</span><span className="text-slider-1">-</span>
                <span className="text-slider-2">Let&apos;s Chat</span><span className="text-slider-2">-</span>
                <span className="text-slider-1">Work with</span><span className="text-slider-1">-</span>
                <span className="text-slider-2">Let&apos;s Chat</span><span className="text-slider-2">-</span>
                <span className="text-slider-1">Work with</span><span className="text-slider-1">-</span>
                <span className="text-slider-2">Let&apos;s Chat</span><span className="text-slider-2">-</span>
                <span className="text-slider-1">Work with</span><span className="text-slider-1">-</span>
                <span className="text-slider-2">Let&apos;s Chat</span><span className="text-slider-2">-</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-area4 rr-ov-hidden">
        <div className="container rr-container-1600">
          <div className="footer-area4-main">
            <div className="row g-5 d-flex justify-content-center justify-content-between">
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="footer-area4-widget">
                  <div className="footer-area4-widget__title">About Company</div>
                  <p className="footer-area4-widget__text">With a passionate team of developers, designers and strategists
                    we help startups enterprises, and visionary brands turn ideas into powerful digital products whether
                    it&apos;s a custom </p>
                  <div className="footer-area4-widget__social">
                    <div className="footer-area4-widget__social-link">
                      <a href="#"> <span><i className="fa-brands fa-facebook-f"></i></span> </a>
                      <a href="#"> <span><i className="fa-brands fa-twitter"></i></span> </a>
                      <a href="#"> <span><i className="fa-brands fa-linkedin-in"></i></span> </a>
                      <a href="#"> <span><i className="fa-brands fa-instagram"></i></span> </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="footer-area4-widget">
                  <div className="footer-area4-widget__title">Special Links</div>
                  <div className="footer-area4-widget__nav">
                    <a className="footer-area4-widget__nav-link" href="#">About Us</a>
                    <a className="footer-area4-widget__nav-link" href="#">Contact Us</a>
                    <a className="footer-area4-widget__nav-link" href="#">Portfolio</a>
                    <a className="footer-area4-widget__nav-link" href="#">Latest Blog</a>
                    <a className="footer-area4-widget__nav-link" href="#">Pricing Plan</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                <div className="footer-area4-widget">
                  <div className="footer-area4-widget__title">Resources</div>
                  <div className="footer-area4-widget__nav">
                    <a className="footer-area4-widget__nav-link" href="#">Support Area</a>
                    <a className="footer-area4-widget__nav-link" href="#">Support Policy</a>
                    <a className="footer-area4-widget__nav-link" href="#">Terms &amp; Conditions</a>
                    <a className="footer-area4-widget__nav-link" href="#">Privacy Policy</a>
                    <a className="footer-area4-widget__nav-link" href="#">Career Success</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                <div className="footer-area4-widget">
                  <div className="footer-area4-widget__title">Subscribe to our newsletter</div>
                  <div className="footer-area4-widget__newsletter">
                    <form action="#" className="footer-area4-widget__newsletter-box">
                      <input type="email" name="email" id="emails" placeholder="Enter Your Email" />
                      <button><i className="fa-solid fa-arrow-right"></i></button>
                    </form>
                  </div>
                  <div className="footer-area4-widget">
                    <a href="#" className="rr-btn-2 btn-purple">
                      <span className="btn-wrap">
                        <span className="text-one">SUBSCRIBE</span>
                        <span className="text-two">SUBSCRIBE</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-area4-bottom">
          <div className="container">
            <div className="row g-5 d-flex align-items-center justify-content-center">
              <div className="col-xl-11">
                <div className="footer-area4-bottom__wrapper">
                  <div className="footer-area4-bottom__copyright text-center wow fadeInLeft" data-wow-delay=".9s">
                    Copyright &copy; 2025 Trexa, All Rights Reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </InnerPageLayout>
  );
}
