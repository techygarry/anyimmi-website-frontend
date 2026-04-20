import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'SEO Agency – Trexa',
  description: 'SEO marketing for brand visibility. Strategic SEO and digital marketing expertise.',
};

export default function SeoAgencyPage() {
  return (
    <InnerPageLayout>
      {/* Header area start */}
      <header className="header-area header-area-6">
        <div className="header-main">
          <div className="container rr-container-1800">
            <div className="header-area-6__inner">
              <div className="header__logo">
                <a href="/">
                  <img src="/assets/imgs/logo/logo-white6.png" className="normal-logo" alt="Site Logo" />
                </a>
              </div>
              <div className="header__nav">
                <nav className="main-menu">
                  <ul>
                    <li className="menu-item-has-children">
                      <a href="#">Home</a>
                      <ul className="dp-menu column-2">
                        <li><a href="/ai-agency">Ai Agency</a></li>
                        <li><a href="/ai-robotic">Ai Robotics</a></li>
                        <li><a href="/it-solution">It Solution</a></li>
                        <li><a href="/software-agency">Software Agency</a></li>
                        <li><a href="/digital-marketing">Marketing Agency</a></li>
                        <li><a href="/seo-agency">Seo Agency</a></li>
                        <li><a href="/cyber-security">Cyber Security Agency</a></li>
                        <li><a href="/saas">Sass &amp; Startup</a></li>
                      </ul>
                    </li>
                    <li><a href="/about">About Us</a></li>
                    <li className="menu-item-has-children">
                      <a href="#">Service</a>
                      <ul className="dp-menu">
                        <li><a href="/services">Services</a></li>
                        <li><a href="/services/details">Services Details</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Shop</a>
                      <ul className="dp-menu">
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/shop/details">Shop Details</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/checkout">Checkout</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul className="dp-menu">
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/blog/list">Blog List</a></li>
                        <li><a href="/blog/details">Blog Details</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="dp-menu">
                        <li><a href="/portfolio">Portfolio Grid</a></li>
                        <li><a href="/portfolio/list">Portfolio List</a></li>
                        <li><a href="/portfolio/details">Portfolio Details</a></li>
                        <li><a href="/team">Team</a></li>
                        <li><a href="/team/details">Team Details</a></li>
                        <li><a href="/faq">Faq</a></li>
                        <li><a href="/_not-found">Error Page</a></li>
                      </ul>
                    </li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <ul className="header-social">
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                </ul>
                <div className="header__navicon d-xl-none">
                  <div className="side-toggle">
                    <a className="bar-icon" href="#">
                      <span className="bg-white"></span>
                      <span className="bg-white"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header area end */}

      <main>

        {/* Intro Section START */}
        <div className="intro-area6 section-spacing overflow-hidden" data-bg-src="/assets/imgs/home-6/intro/intro-bg1_1.jpg">
          <div className="container rr-container-1800">
            <div className="row g-4">
              <div className="col-xl-12">
                <h1 className="intro-area6__title">SEO <img src="/assets/imgs/home-6/intro/intro-icon1_1.png" alt="icon" />
                  marketing
                  <span className="intro-area6__title-title2 rr-title-anim-2">for Brand Visibility</span>
                </h1>
              </div>
            </div>
            <div className="row g-4 d-flex justify-content-between">
              <div className="col-xl-5 col-lg-6">
                <div className="intro-area6__content">
                  <div className="intro-area6__content-subtitle wow fadeInUp" data-wow-delay=".3s">Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cilum dolore in fugiat nulla pariatur excepteur sint occaecat
                    cupidatat non proident,</div>
                  <div className="intro-area6__content-newsletter">
                    <form action="#" className="intro-area6__content-newsletter-box">
                      <input type="email" name="email" id="email" placeholder="Email" />
                      <button className="intro-area6__content-newsletter-button">
                        <span className="intro-area6__content-newsletter-button-text">Next</span>
                      </button>
                    </form>
                  </div>
                  <div className="intro-area6__content-items">
                    <div className="intro-area6__content-items-count">
                      <div className="intro-area6__content-items-count-list">4.9</div>
                      <p className="intro-area6__content-items-count-subtitle">(32 reviews)</p>
                    </div>
                    <div className="intro-area6__content-items-area">
                      <p className="intro-area6__content-items-area-subtitle">(Average Rating)</p>
                      <div className="intro-area6__content-items-area-star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="intro-area6__content-plane">
                    <img src="/assets/imgs/home-6/intro/intro-plane1_1.png" alt="icon" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="intro-area6__info">
                  <div className="intro-area6__info-thumb rr-ov-hidden">
                    <img data-speed="0.9" src="/assets/imgs/home-6/intro/intro-thumb1_1.jpg" alt="thumb" />
                  </div>
                  <div className="intro-area6__info-button">
                    <a href="#" className="rr-btn-button2 btn-purple">
                      <span className="text">more about us</span>
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
            </div>
          </div>
        </div>

        {/* About Section START */}
        <section className="about-area6 section-spacing rr-ov-hidden">
          <div className="container rr-container-1600">
            <div className="about-area6__wrapper">
              <div className="row g-4 d-flex justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="about-area6__number">
                    <h3 className="about-area6__number-title">15</h3>
                    <span className="about-area6__number-button">Years of Experience</span>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="about-area6__content">
                    <div className="about-area6__content-thumb">
                      <img src="/assets/imgs/home-6/about/leader-imag1_1.png" alt="leader-imge" />
                    </div>
                    <p className="about-area6__content-subtitle">(Trusted by industry leaders)</p>
                    <div className="about-area6__content-star">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h3 className="about-area6__content-title rr-title-anim-2">We build strong, productive market
                      increase your sales growth through
                      strategic SEO and digital marketing
                      expertise.</h3>
                    <div className="about-area6__content-image-shape">
                      <img src="/assets/imgs/home-6/about/icon1_1.png" alt="icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-xl-12">
                <div className="about-area6__thumb rr-ov-hidden">
                  <img data-speed="0.7" src="/assets/imgs/home-6/about/about-thumb1_1.jpg" alt="thumb" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section START */}
        <section className="feature-area6 section-spacing rr-ov-hidden pt-0">
          <div className="container rr-container-1600">
            <div className="row gy-5 d-flex justify-content-center">
              <div className="col-xl-6">
                <div className="section-top6 text-center">
                  <div className="section-top6__title text-center mb-0 wow fadeInUp" data-wow-delay=".5s">Creating
                    Productive Markets to Boost Your Business Success</div>
                </div>
              </div>
            </div>
            <div className="feature-area6-wrapper">
              <div className="feature-area6-wrapper__line">
                <img src="/assets/imgs/home-6/feature/feature-line1_1.png" alt="line-img" />
              </div>
              <div className="row g-4 d-flex justify-content-between justify-content-center">
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="feature-area6__content">
                    <div className="feature-area6__content-icon">
                      <img src="/assets/imgs/home-6/feature/feature-icon1_1.png" alt="icon" />
                    </div>
                    <h5 className="feature-area6__content-title">Productivity</h5>
                    <p className="feature-area6__content-subtitle">Nam libero tempore, cum soluta nobis est
                      optio cumque nihil impedit quo minus id
                      maxime placeat facere</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="feature-area6__content">
                    <div className="feature-area6__content-icon">
                      <img src="/assets/imgs/home-6/feature/feature-icon1_2.png" alt="icon" />
                    </div>
                    <h5 className="feature-area6__content-title">Strategy</h5>
                    <p className="feature-area6__content-subtitle">Nam libero tempore, cum soluta nobis est optio cumque
                      nihil impedit quo minus id maxime placeat facere</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="feature-area6__content">
                    <div className="feature-area6__content-icon">
                      <img src="/assets/imgs/home-6/feature/feature-icon1_3.png" alt="icon" />
                    </div>
                    <h5 className="feature-area6__content-title">Research</h5>
                    <p className="feature-area6__content-subtitle">Nam libero tempore, cum soluta nobis est
                      optio cumque nihil impedit quo minus id
                      maxime placeat facere</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="feature-area6__content">
                    <div className="feature-area6__content-icon">
                      <img src="/assets/imgs/home-6/feature/feature-icon1_4.png" alt="icon" />
                    </div>
                    <h5 className="feature-area6__content-title">Community</h5>
                    <p className="feature-area6__content-subtitle">Nam libero tempore, cum soluta nobis est
                      optio cumque nihil impedit quo minus id
                      maxime placeat facere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* service-section-5 start */}
        <section id="service" className="service-section-5 rr-bg-primary section-spacing">
          <div className="container container-1800">
            <div className="row gy-5 d-flex align-items-center justify-content-center">
              <div className="col-xl-6">
                <div className="section-top6 text-center">
                  <div className="section-top6__title text-center text-white wow fadeInUp" data-wow-delay=".5s">It&apos;s big challenge
                    to grow-up your sales
                    by providing best services</div>
                </div>
              </div>
            </div>
            <div className="service-section-5__wrapper">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
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
                <div className="accordion-item">
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
                <div className="accordion-item">
                  <div className="accordion-box">
                    <h2 className="accordion-number">3</h2>
                  </div>
                  <div className="accordion-content">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Content <span>Marketing</span>
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
                <div className="accordion-item">
                  <div className="accordion-box">
                    <h2 className="accordion-number">4</h2>
                  </div>
                  <div className="accordion-content">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Email <span>Marketing</span>
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

        {/* wcu Section START */}
        <div className="wcu-area6 section-spacing rr-ov-hidden pb-0">
          <div className="shape1"><img src="/assets/imgs/home-6/wcu/wcu-hand-image.png" alt="shape" /></div>
          <div className="container rr-container-1600">
            <div className="row g-4 justify-content-between">
              <div className="col-xl-6">
                <div className="wcu-area6-content">
                  <div className="section-title wow fadeInUp" data-wow-delay=".5s">Why you need SEO
                    services for business growth and long-term success online</div>
                  <div className="wcu-area6-content__items">
                    <p className="wcu-area6-content__items-subtitle">Nor again is there anyone who loves or pursues or
                      desires to obtain of itself, because it is pain, but because occasionally occur in which
                      toil and pain can procure him, some great pleasure. To take a trivial
                      which of us ever undertakes laborious physical exercise, except the
                      obtain some advantage from it?</p>
                    <ul className="wcu-area6-content__items-list">
                      <li className="wcu-area6-content__items-list-items wow fadeInUp" data-wow-delay="0.4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <g clipPath="url(#clip0_298_9991)">
                            <path d="M0.614258 8.82055C3.12266 11.5346 5.55477 13.978 7.89266 17.0682C10.4345 12.0127 13.036 6.93969 17.3286 1.44582L16.172 0.916016C12.5473 4.76 9.73133 8.39867 7.28445 12.7229C5.58289 11.1901 2.83297 9.02094 1.15391 7.90648L0.614258 8.82055Z" fill="black" />
                          </g>
                          <defs>
                            <clipPath id="clip0_298_9991">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Boost Your Search Engine Rankings
                      </li>
                      <li className="wcu-area6-content__items-list-items wow fadeInUp" data-wow-delay="0.6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <g clipPath="url(#clip0_298_9992)">
                            <path d="M0.614258 8.82055C3.12266 11.5346 5.55477 13.978 7.89266 17.0682C10.4345 12.0127 13.036 6.93969 17.3286 1.44582L16.172 0.916016C12.5473 4.76 9.73133 8.39867 7.28445 12.7229C5.58289 11.1901 2.83297 9.02094 1.15391 7.90648L0.614258 8.82055Z" fill="black" />
                          </g>
                          <defs>
                            <clipPath id="clip0_298_9992">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Drive More Targeted Website Traffic
                      </li>
                      <li className="wcu-area6-content__items-list-items wow fadeInUp" data-wow-delay="0.7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <g clipPath="url(#clip0_298_9993)">
                            <path d="M0.614258 8.82055C3.12266 11.5346 5.55477 13.978 7.89266 17.0682C10.4345 12.0127 13.036 6.93969 17.3286 1.44582L16.172 0.916016C12.5473 4.76 9.73133 8.39867 7.28445 12.7229C5.58289 11.1901 2.83297 9.02094 1.15391 7.90648L0.614258 8.82055Z" fill="black" />
                          </g>
                          <defs>
                            <clipPath id="clip0_298_9993">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Increase Leads and Conversions
                      </li>
                      <li className="wcu-area6-content__items-list-items wow fadeInUp" data-wow-delay="0.8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <g clipPath="url(#clip0_298_9994)">
                            <path d="M0.614258 8.82055C3.12266 11.5346 5.55477 13.978 7.89266 17.0682C10.4345 12.0127 13.036 6.93969 17.3286 1.44582L16.172 0.916016C12.5473 4.76 9.73133 8.39867 7.28445 12.7229C5.58289 11.1901 2.83297 9.02094 1.15391 7.90648L0.614258 8.82055Z" fill="black" />
                          </g>
                          <defs>
                            <clipPath id="clip0_298_9994">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Build Strong, Long-Term Online Presence
                      </li>
                    </ul>
                    <div className="wcu-area6-content__items-button">
                      <a href="#" className="rr-btn-button3 btn-purple wow fadeInUp" data-wow-delay="0.4">
                        <span className="text">review more</span>
                        <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <g clipPath="url(#clip0_337_6191)">
                              <path d="M22.0004 10.9995C16.6011 10.9995 12.2227 6.0753 12.2227 -0.000488281" stroke="black" strokeWidth="2" strokeMiterlimit="10"></path>
                              <path d="M12.2227 21.9995C12.2227 15.9253 16.5997 10.9995 22.0004 10.9995" stroke="black" strokeWidth="2" strokeMiterlimit="10"></path>
                              <path d="M22.001 10.9995H0.000976562" stroke="black" strokeWidth="2" strokeMiterlimit="10"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_337_6191">
                                <rect width="22" height="22" fill="white"></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="wcu-area6__items">
                  <div className="wcu-area6__items-thumb1">
                    <img src="/assets/imgs/home-6/wcu/wcu-thumb1_1.jpg" alt="thumb" />
                  </div>
                  <div className="wcu-area6__items-thumb2">
                    <img src="/assets/imgs/home-6/wcu/wcu-thumb1_2.jpg" alt="thumb" />
                  </div>
                  <div className="wcu-area6__items-thumb3">
                    <img src="/assets/imgs/home-6/wcu/wcu-thumb1_3.jpg" alt="thumb" />
                  </div>
                  <div className="wcu-area6__items-plane">
                    <img src="/assets/imgs/home-6/wcu/wcu-plane-image.png" alt="plane-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* brand-area Section START */}
        <div className="brand-area6 section-spacing rr-ov-hidden">
          <div className="brand-area6-wrapper">
            <div className="swiper brand-slider6">
              <div className="swiper-wrapper">
                {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((n, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="brand-area6__image">
                      <img src={`/assets/imgs/home-6/brand/brand-logo1_${n}.png`} alt="brand-img" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* banner-area Section START */}
        <div className="banner-area6 rr-ov-hidden" data-bg-src="/assets/imgs/home-6/banner/banner-thumb1_1.jpg">
        </div>

        {/* project-area6 Section START */}
        <section className="project-area6 section-spacing rr-ov-hidden">
          <div className="container rr-container-1600">
            <div className="row gy-5 d-flex justify-content-between">
              <div className="col-xl-5 col-lg-6 d-flex justify-content-start">
                <div className="section-top6">
                  <div className="section-top6__subtitle wow fadeInUp" data-wow-delay=".3s">// CURATED WORKS</div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 d-flex justify-content-end">
                <div className="section-title wow fadeInUp" data-wow-delay=".5s">Explore Expert Advice and
                  Industry Insights for Growth, Innovation, and Success</div>
              </div>
            </div>
          </div>
          <div className="project-area6__items">
            {[
              { img: '1_1', title: 'Social connectivity and community' },
              { img: '1_2', title: 'Social connectivity and community' },
              { img: '1_3', title: 'Social connectivity and community' },
              { img: '1_4', title: 'Social connectivity and community' },
              { img: '1_5', title: 'Social connectivity and community' },
              { img: '1_6', title: 'Social connectivity and community' },
            ].map((item, i) => (
              <div className="project-area6__card" key={i}>
                <div className="project-area6__card-thumb">
                  <img src={`/assets/imgs/home-6/project/project-thumb${item.img}.jpg`} alt="thumb" />
                </div>
                <div className="project-area6__card-content">
                  <span className="project-area6__card-content-subtitle">Social Marketing</span>
                  <div className="project-area6__card-content-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="112" height="110" viewBox="0 0 112 110" fill="none">
                      <path d="M52.521 0.561406C54.5776 -0.187134 56.8322 -0.187136 58.8888 0.561405L89.1715 11.5834C91.2281 12.3319 92.9552 13.7812 94.0495 15.6765L110.163 43.5852C111.257 45.4806 111.648 47.7009 111.268 49.8563L105.672 81.5929C105.292 83.7482 104.165 85.7007 102.488 87.1075L77.8017 107.822C76.1252 109.229 74.0066 110 71.818 110H39.5918C37.4032 110 35.2846 109.229 33.608 107.822L8.92135 87.1075C7.2448 85.7007 6.11751 83.7482 5.73746 81.5929L0.141444 49.8563C-0.2386 47.7009 0.152903 45.4806 1.2472 43.5852L17.3603 15.6765C18.4546 13.7812 20.1817 12.3319 22.2383 11.5834L52.521 0.561406Z" fill="white" />
                    </svg>
                    <span className="project-area6__card-content-button-text"><a href="/portfolio/details">Details</a></span>
                  </div>
                  <h4 className="project-area6__card-content-title"><a href="/portfolio/details" className="project-area6__card-content-title-dsc">{item.title}</a></h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Section START */}
        <div className="testimonial-area6 section-spacing rr-ov-hidden">
          <div className="testimonial-area6__line">
            <img src="/assets/imgs/home-6/line-shape1_1.png" alt="line" />
          </div>
          <div className="container rr-container-1600">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-7">
                <div className="section-top6 text-center">
                  <div className="section-top6__title text-center wow fadeInUp" data-wow-delay=".5s">The reasons why you
                    should work with us for lasting business success and growth in competitive markets.</div>
                </div>
              </div>
            </div>
            <div className="row g-4 d-flex justify-content-center">
              <div className="col-xl-5 col-lg-6">
                <div className="testimonial-area6-thumb rr-ov-hidden" data-bg-src="/assets/imgs/home-6/testimonial/testimonial-thumb1_1.jpg">
                  <div className="testimonial-area6__items">
                    <div className="testimonial-area6__items-info">
                      <div className="testimonial-area6__items-info-content">
                        <div className="testimonial-area6__items-info-content-point">4.8/5</div>
                        <p className="testimonial-area6__items-info-content-subtitle">Average rating from our clients</p>
                      </div>
                      <div className="testimonial-area6__items-info-thumb">
                        <img src="/assets/imgs/home-6/testimonial/testimonial-image1_1.png" alt="image" />
                      </div>
                    </div>
                    <div className="testimonial-area6__items-image text-center">
                      <div className="testimonial-area6__items-image-thumb">
                        <img src="/assets/imgs/home-6/testimonial/testimonial-client1_1.png" alt="client" />
                      </div>
                      <p className="testimonial-area6__items-image-subtitle">Trusted by 20+ teams</p>
                    </div>
                    <div className="testimonial-area6__items-button-items">
                      <div className="testimonial-area6__items-button-items-logo">
                        <img src="/assets/imgs/home-6/testimonial/testimonial-logo1_1.png" alt="logo" />
                      </div>
                      <div className="testimonial-area6__items-button-items-button">
                        <a href="#" className="rr-btn-button3 btn-purple">
                          <span className="text">review more</span>
                          <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                              <g clipPath="url(#clip0_337_619t)">
                                <path d="M22.0004 10.9995C16.6011 10.9995 12.2227 6.0753 12.2227 -0.000488281" stroke="black" strokeWidth="2" strokeMiterlimit="10"></path>
                                <path d="M12.2227 21.9995C12.2227 15.9253 16.5997 10.9995 22.0004 10.9995" stroke="black" strokeWidth="2" strokeMiterlimit="10"></path>
                                <path d="M22.001 10.9995H0.000976562" stroke="black" strokeWidth="2" strokeMiterlimit="10"></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_337_619t">
                                  <rect width="22" height="22" fill="white"></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="testimonial-area6__card">
                  <div className="swiper testimonial1-slider2">
                    <div className="swiper-wrapper">
                      {[1, 2, 3].map((_, i) => (
                        <div className="swiper-slide" key={i}>
                          <div className="testimonial-area6__card-content">
                            <div className="testimonial-area6__card-content-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="57" viewBox="0 0 72 57" fill="none">
                                <g clipPath={`url(#clip0_298_1414t${i})`}>
                                  <path d="M30.73 4.06423L28.1174 0C10.0419 12.2935 0 27.2303 0 39.5238C0 51.4108 8.63769 57 15.9675 57C25.2061 57 31.7326 49.0731 31.7326 40.7431C31.7326 33.7331 27.3141 27.7376 21.3886 25.5006C19.6822 24.8894 18.0755 24.3822 18.0755 21.4363C18.0755 17.6778 20.7877 12.0919 30.73 4.06423ZM70.5957 4.06423L67.9832 0C50.107 12.2935 39.8658 27.2303 39.8658 39.5238C39.8658 51.4108 48.7027 57 56.0325 57C65.3707 57 72 49.0731 72 40.7431C72 33.7331 67.4819 27.7376 61.3539 25.5006C59.6476 24.8894 58.1405 24.3822 58.1405 21.4363C58.1405 17.6778 60.9522 12.0886 70.5925 4.06098L70.5957 4.06423Z" fill="black" />
                                </g>
                                <defs>
                                  <clipPath id={`clip0_298_1414t${i}`}>
                                    <rect width="72" height="57" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <p className="testimonial-area6__card-content-subtitle">They revamped our entire digital presence
                              with an amazing website, smart SEO, and brilliant content
                              marketing. The impact was immediate, resulting in
                              increased traffic, higher engagement and boosted
                              sales overall success.</p>
                            <div className="testimonial-area6__card-content-items">
                              <div className="testimonial-area6__card-content-items-thumb">
                                <img src="/assets/imgs/home-6/testimonial/testimonial-client1_2.png" alt="client-img" />
                              </div>
                              <p className="testimonial-area6__card-content-items-subtitle">Daniel K., SaaS Founder</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* achievement Section START */}
        <section className="achievement-area6 section-spacing rr-ov-hidden pt-0">
          <div className="container">
            <div className="achievement-area6-wrapper rr-ov-hidden d-flex justify-content-between flex-wrap gap-5"
              data-bg-src="/assets/imgs/home-6/achievement/achievement-bg.jpg">
              <div className="achievement-area6__items">
                <div className="achievement-area6__items-year"> <span className="odometer" data-count="2016">0</span></div>
                <h5 className="achievement-area6__items-title">Year of establishment</h5>
                <p className="achievement-area6__items-subtitle">More than 09 years in the field</p>
                <div className="achievement-area6__items-thumb">
                  <img src="/assets/imgs/home-6/achievement/client-image1_1.png" alt="client-img" />
                </div>
              </div>
              <div className="achievement-area6__items">
                <div className="achievement-area6__items-year"><span className="odometer" data-count="299">0</span></div>
                <h5 className="achievement-area6__items-title">Projects are launched</h5>
                <p className="achievement-area6__items-subtitle">A lot of projects are done</p>
                <div className="achievement-area6__items-thumb">
                  <img src="/assets/imgs/home-6/achievement/client-image1_2.png" alt="client-img" />
                </div>
              </div>
              <div className="achievement-area6__items">
                <div className="achievement-area6__items-year"><span className="odometer" data-count="169">0</span></div>
                <h5 className="achievement-area6__items-title">Clients are satisfied</h5>
                <p className="achievement-area6__items-subtitle">These people love us</p>
                <div className="achievement-area6__items-thumb">
                  <img src="/assets/imgs/home-6/achievement/client-image1_1.png" alt="client-img" />
                </div>
              </div>
              <div className="achievement-area6__items">
                <div className="achievement-area6__items-year"><span className="odometer" data-count="13">0</span></div>
                <h5 className="achievement-area6__items-title">Projects in work</h5>
                <p className="achievement-area6__items-subtitle">What we do right now</p>
                <div className="achievement-area6__items-thumb">
                  <img src="/assets/imgs/home-6/achievement/client-image1_2.png" alt="client-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section START */}
        <div className="integration-area6 section-spacing rr-ov-hidden pb-0">
          <div className="container rr-container-1600">
            <div className="row gy-5 d-flex justify-content-center">
              <div className="col-xl-6">
                <div className="section-top6 text-center">
                  <div className="section-top6__title text-center wow fadeInUp" data-wow-delay=".5s">Automation with 3000+
                    Integrations for Seamless Business Growth Worldwide</div>
                  <div className="section-top6__button">
                    <a href="#" className="rr-btn-button3 btn-purple">
                      <span className="text">discover more</span>
                      <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                          <g clipPath="url(#clip0_337_6192)">
                            <path d="M22.0004 10.9995C16.6011 10.9995 12.2227 6.0753 12.2227 -0.000488281" stroke="black" strokeWidth="2" strokeMiterlimit="10"></path>
                            <path d="M12.2227 21.9995C12.2227 15.9253 16.5997 10.9995 22.0004 10.9995" stroke="black" strokeWidth="2" strokeMiterlimit="10"></path>
                            <path d="M22.001 10.9995H0.000976562" stroke="black" strokeWidth="2" strokeMiterlimit="10"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_337_6192">
                              <rect width="22" height="22" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="integration-area6__items">
            <div className="integration-area6__items-thumb">
              <img src="/assets/imgs/home-6/integration/logo-bg-thumb1_1.png" alt="thumb" />
            </div>
            <div className="integration-area6__items-line">
              <img src="/assets/imgs/home-6/line-shape1_1.png" alt="line" />
            </div>
          </div>
        </div>

        {/* Blog Section START */}
        <section className="blog-area6 section-spacing rr-ov-hidden">
          <div className="container rr-container-1600">
            <div className="row gy-5 d-flex justify-content-between">
              <div className="col-xl-5 col-lg-5 d-flex justify-content-start">
                <div className="section-top6">
                  <div className="section-top6__subtitle wow fadeInUp" data-wow-delay=".3s">// about company</div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 d-flex justify-content-end">
                <div className="section-title wow fadeInUp" data-wow-delay=".5s">Explore Expert Advice
                  and Industry Insights for Growth, Innovation, and Success</div>
              </div>
            </div>
            <div className="blog-area6-wrapper">
              <div className="row g-4 d-flex justify-content-between">
                {['1_1', '1_2', '1_3'].map((n, i) => (
                  <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s" key={i}>
                    <div className="blog-area6__card">
                      <div className="blog-area6__card-thumb">
                        <img src={`/assets/imgs/home-6/blog/blog-thumb${n}.jpg`} alt="blog-thumb" />
                        <img src={`/assets/imgs/home-6/blog/blog-thumb${n}.jpg`} alt="blog-thumb" />
                      </div>
                      <div className="blog-area6__card-content">
                        <ul className="blog-area6__card-content-post">
                          <li className="blog-area6__card-content-post-date">Branding</li>
                          <li className="blog-area6__card-content-post-date">6 min read</li>
                        </ul>
                        <h4 className="blog-area6__card-content-title"><a href="/blog/details">Top 5 SEO Strategies to
                          Boost Your Website Traffic</a></h4>
                        <a className="blog-area6__card-content-link" href="/blog/details">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath={`url(#clip0_246_190b${i})`}>
                              <path d="M23.2462 7.96095C19.4712 11.8212 12.8893 11.5088 8.54541 7.26074" stroke="#F0F2F4" strokeWidth="2" strokeMiterlimit="10" />
                              <path d="M24.2746 22.643C19.9319 18.3961 19.4704 11.8228 23.2465 7.96148" stroke="#F0F2F4" strokeWidth="2" strokeMiterlimit="10" />
                              <path d="M23.2465 7.96141L7.86475 23.6904" stroke="#F0F2F4" strokeWidth="2" strokeMiterlimit="10" />
                            </g>
                            <defs>
                              <clipPath id={`clip0_246_190b${i}`}>
                                <rect width="22" height="22" fill="white" transform="translate(0 16) rotate(-45.6395)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Section START */}
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

        {/* Footer Section START */}
        <footer className="footer-area6 rr-ov-hidden">
          <div className="container rr-container-1600">
            <div className="footer-area6__top">
              <div className="row gy-5 d-flex align-items-center justify-content-center">
                <div className="col-xl-5 col-lg-7 col-md-7 wow fadeInUp" data-wow-delay=".3s">
                  <h4 className="footer-area6__top-title rr-title-anim-2">Have an idea in your mind? Let,s make something great together
                  </h4>
                  <div className="footer-area6__button">
                    <a href="#" className="rr-btn-button2 btn-purple">
                      <span className="text">more about us</span>
                      <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                          <g clipPath="url(#clip0_246_218f)">
                            <path d="M22.0004 11C16.6011 11 12.2227 6.07578 12.2227 0" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M12.2227 22C12.2227 15.9258 16.5997 11 22.0004 11" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M22.0005 11H0.000488281" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                          </g>
                          <defs>
                            <clipPath id="clip0_246_218f">
                              <rect width="22" height="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-area6-main">
              <div className="d-flex justify-content-between flex-wrap gap-5">
                <div className="footer-area4-widget wow fadeInUp" data-wow-delay=".3s">
                  <div className="footer-area4-widget__title">Menu</div>
                  <div className="footer-area4-widget__nav">
                    <a className="footer-area4-widget__nav-link" href="#!">Projects</a>
                    <a className="footer-area4-widget__nav-link" href="#!">Pricing</a>
                    <a className="footer-area4-widget__nav-link" href="#!">About</a>
                    <a className="footer-area4-widget__nav-link" href="#!">Insights</a>
                    <a className="footer-area4-widget__nav-link" href="#!">Contact</a>
                  </div>
                </div>
                <div className="footer-area4-widget wow fadeInUp" data-wow-delay=".6s">
                  <div className="footer-area4-widget__title">Contact</div>
                  <div className="footer-area4-widget__nav">
                    <a className="footer-area4-widget__nav-link" href="#!">Call Us</a>
                    <a className="footer-area4-widget__nav-link" href="#!">Email Us</a>
                    <a className="footer-area4-widget__nav-link" href="#!">Visit Us</a>
                  </div>
                </div>
                <div className="footer-area4-widget wow fadeInUp" data-wow-delay=".9s">
                  <div className="footer-area4-widget__title">Explore</div>
                  <div className="footer-area4-widget__nav">
                    <a className="footer-area4-widget__nav-link" href="#!">Projects</a>
                    <a className="footer-area4-widget__nav-link" href="#!">Pricing</a>
                    <a className="footer-area4-widget__nav-link" href="#!">About</a>
                    <a className="footer-area4-widget__nav-link" href="#!">Insights</a>
                    <a className="footer-area4-widget__nav-link" href="#!">Contact</a>
                  </div>
                </div>
                <div className="footer-area4-widget wow fadeInUp" data-wow-delay=".8s">
                  <div className="footer-area4-widget__title">Follow US</div>
                  <div className="footer-area4-widget__nav">
                    <a className="footer-area4-widget__nav-link" href="#!">Facebook</a>
                    <a className="footer-area4-widget__nav-link" href="#!">Twitter</a>
                    <a className="footer-area4-widget__nav-link" href="#!">Instagram</a>
                    <a className="footer-area4-widget__nav-link" href="#!">Linkedin</a>
                    <a className="footer-area4-widget__nav-link" href="#!">Dribbble</a>
                  </div>
                </div>
              </div>
              <div className="footer-area4-bottom">
                <div className="container">
                  <div className="row g-5 d-flex align-items-center justify-content-center">
                    <div className="col-xl-11 col-lg-12 col-md-12">
                      <div className="footer-area4-bottom__wrapper">
                        <div className="footer-area4-bottom__copyright text-center">
                          Copyright &amp; design by &copy; Themewolfs 2025, All rights reserved
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </InnerPageLayout>
  );
}
