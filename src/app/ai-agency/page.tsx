import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'AI Agency – Trexa',
  description: 'Trexa AI Agency – Unlock the ultimate power of AI in your real life.',
};

export default function AiAgencyPage() {
  return (
    <InnerPageLayout>

      {/* Hero section */}
      <section className="hero-section__area">
        <div className="hero-section__wrapper">
          <div className="container rr-container-1800">
            <div className="hero-section__inner">
              <div className="hero-section__box wow fadeInLeft" data-wow-delay="0.3s">
                <div className="number">
                  <h3>17 </h3>
                  <h4>Years of AI Excellence</h4>
                </div>
                <div className="hero-section__client">
                  <div className="media">
                    <img src="/assets/imgs/hero/client-img-1.png" alt="img not found" />
                    <img src="/assets/imgs/hero/client-img-2.png" alt="img not found" />
                    <img src="/assets/imgs/hero/client-img-3.png" alt="img not found" />
                    <img src="/assets/imgs/hero/client-img-4.png" alt="img not found" />
                  </div>
                  <div className="hero-section__text">
                    <h4>More then 25K <br />
                      clients reviews</h4>
                  </div>
                </div>
              </div>
              <div className="hero-section__content wow fadeInUp" data-wow-delay="0.5s">
                <h2 className="title">Unlock the ultimate <br />
                  power of AI, in your <br />
                  real life</h2>
              </div>
            </div>
            <div className="hero-section__wrapper-box">
              <div className="row">
                <div className="col-xl-6">
                  <div className="hero-section__silad-box">
                    <div className="swiper hero-slider-active">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="hero-section__thumb">
                            <img src="/assets/imgs/hero/hero-img-1.png" alt="img not found" />
                            <div className="video__play">
                              <a className="popup-video icon" href="https://www.youtube.com/watch?v=8oON21G1Bqg">
                                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12.4806 7.13176C13.1524 7.51565 13.1524 8.48435 12.4806 8.86824L1.49614 15.1451C0.829481 15.526 0 15.0446 0 14.2768V1.72318C0 0.955357 0.829482 0.47399 1.49614 0.854937L12.4806 7.13176Z" fill="#101010" />
                                </svg>
                              </a>
                              <span>WATCH VIDEO</span>
                              <a className="popup-video" href="https://www.youtube.com/watch?v=8oON21G1Bqg"></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="arrow">
                      <div className="rr-button-next rr-button">
                        <i className="far fa-chevron-right"></i>
                      </div>
                      <div className="rr-button-prev rr-button rr-button-2">
                        <i className="far fa-chevron-left"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="hero-section__card">
                    <div className="sub-title wow fadeInUp" data-wow-delay="0.8s">
                      <span></span>
                      <h3>ABOUT US</h3>
                    </div>
                    <h2 className="title text-animation-effect"><a href="#">Startup agency, providing AI <br />
                        service worldwide since 2018</a></h2>
                    <a href="#" className="rr-btn-border">
                      <span className="text">CONTACT US TODAY</span>
                      <span className="icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_22_142)">
                            <path d="M22.0004 10.9995C16.6011 10.9995 12.2227 6.07534 12.2227 -0.00044632" stroke="#101010" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M12.2227 21.9995C12.2227 15.9253 16.5997 10.9995 22.0004 10.9995" stroke="#101010" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M22.0005 10.9995H0.000488281" stroke="#101010" strokeWidth="2" strokeMiterlimit="10" />
                          </g>
                          <defs>
                            <clipPath id="clip0_22_142">
                              <rect width="22" height="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="hero-section__card card-2 wow fadeInRight" data-wow-delay="0.7s" style={{ backgroundImage: "url('/assets/imgs/hero/hero-img-3.png')" }}>
                    <div className="sub-title">
                      <span></span>
                      <h3>ABOUT US</h3>
                    </div>
                    <h2 className="title"><a href="#">Startup agency, providing AI <br />
                        service worldwide since 2018</a></h2>
                    <a href="#" className="rr-btn-border">
                      <span className="text">CONTACT US TODAY</span>
                      <span className="icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_22_142b)">
                            <path d="M22.0004 10.9995C16.6011 10.9995 12.2227 6.07534 12.2227 -0.00044632" stroke="#101010" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M12.2227 21.9995C12.2227 15.9253 16.5997 10.9995 22.0004 10.9995" stroke="#101010" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M22.0005 10.9995H0.000488281" stroke="#101010" strokeWidth="2" strokeMiterlimit="10" />
                          </g>
                          <defs>
                            <clipPath id="clip0_22_142b">
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
      </section>

      {/* About section */}
      <section className="about-section-area">
        <div className="about-section-wrapper rr-bg-gray section-spacing">
          <div className="container rr-container-1800">
            <div className="section-heading wow fadeInRight" data-wow-delay="0.3s">
              <div className="shape">
                <img src="/assets/imgs/about/about-shape-1.png" alt="shape" />
              </div>
              <h3 className="title">We&apos;re a full-service AI automation agency, helping <br />
                businesses unlock their full potential with cutting-edge <br />
                artificial intelligence. from smart process automation to <br />
                predictive analytics, </h3>
            </div>
            <div className="row mb-minus-30">
              <div className="col-md-6 col-xl-3">
                <div className="about-section-item wow fadeInRight" data-wow-delay="0.2s">
                  <div className="icon">
                    <img src="/assets/imgs/about/about-icon-1.png" alt="icon" />
                  </div>
                  <div className="about-section-content">
                    <h2 className="title"><a href="#">Advanced AI Technology</a></h2>
                    <p className="decs">Duis aute irure dolor in reprehenderit in velit <br />
                      cillum dolore fugiat nulla pariatur. excepteur <br />
                      sint occaecat cupidatat</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="about-section-item wow fadeInRight" data-wow-delay="0.3s">
                  <div className="icon">
                    <img src="/assets/imgs/about/about-icon-2.png" alt="icon" />
                  </div>
                  <div className="about-section-content">
                    <h2 className="title"><a href="#">Tailored solutions</a></h2>
                    <p className="decs">Duis aute irure dolor in reprehenderit in velit <br />
                      cillum dolore fugiat nulla pariatur. excepteur <br />
                      sint occaecat cupidatat</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="about-section-item wow fadeInRight" data-wow-delay="0.5s">
                  <div className="icon">
                    <img src="/assets/imgs/about/about-icon-3.png" alt="icon" />
                  </div>
                  <div className="about-section-content">
                    <h2 className="title"><a href="#">Cutting-edge technology</a></h2>
                    <p className="decs">Duis aute irure dolor in reprehenderit in velit <br />
                      cillum dolore fugiat nulla pariatur. excepteur <br />
                      sint occaecat cupidatat</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="about-section-item wow fadeInRight" data-wow-delay="0.7s">
                  <div className="icon">
                    <img src="/assets/imgs/about/about-icon-4.png" alt="icon" />
                  </div>
                  <div className="about-section-content">
                    <h2 className="title"><a href="#">Modern development</a></h2>
                    <p className="decs">Duis aute irure dolor in reprehenderit in velit <br />
                      cillum dolore fugiat nulla pariatur. excepteur <br />
                      sint occaecat cupidatat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text slider section */}
      <section className="text-slider-area rr-bg-gray section-spacing">
        <div className="text-slider-box">
          <div className="swiper text-slide__active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="text-slider-content">
                  <h4 className="text">Artificial Intelligence in shaping the future of technology</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-slider-box-2">
          <div className="swiper text-slide__active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="text-slider-content">
                  <h4 className="text">Artificial Intelligence in shaping the future of technology</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="text-slider-content">
                  <h4 className="text">Artificial Intelligence in shaping the future of technology</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service section */}
      <section className="service-section">
        <div className="service-section__wrapper rr-bg-gray section-spacing">
          <div className="container rr-container-1800">
            <div className="service-section__info">
              <h4 className="title wow fadeInRight" data-wow-delay="0.3s">Designing Tomorrow: AI-Powered Creativity for <br />
                Future Innovations and Intelligent Solutions that <br />
                Drive Transformative Growth</h4>
              <a href="#" className="rr-btn-border wow fadeInRight" data-wow-delay="0.3s">
                <span className="text">VIEW ALL SERVICES</span>
                <span className="icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_46_7)">
                      <path d="M22.0007 10.9995C16.6014 10.9995 12.2229 6.0753 12.2229 -0.000488281" stroke="#101010" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M12.2229 21.9995C12.2229 15.9253 16.5999 10.9995 22.0007 10.9995" stroke="#101010" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M22.0005 10.9995H0.000488281" stroke="#101010" strokeWidth="2" strokeMiterlimit="10" />
                    </g>
                    <defs>
                      <clipPath id="clip0_46_7">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
            </div>
            <div className="row mb-minus-30">
              <div className="col-lg-6 col-xxl-4">
                <div className="service-section__wrap">
                  <div className="logo">
                    <img src="/assets/imgs/icon/service-icon-1.png" alt="icon" />
                  </div>
                  <div className="service-section__item wow fadeInLeft" data-wow-delay="0.3s">
                    <div className="number">
                      <span>01.</span>
                    </div>
                    <div className="content">
                      <h3 className="title"><a href="#">Custom AI Driven <br />
                          Solutions</a></h3>
                      <p className="decs">Nemo enim ipsam voluptatem quia voluptas sit <br />
                        aut odit aut fugit, sed quia consequuntur magni <br />
                        dolores qui, ratione voluptatem sequi nesciunte <br />
                        neque porro quisquam est,</p>
                    </div>
                    <div className="service-section__bottom">
                      <div className="icon">
                        <a className="project-btn" href="#">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_42_966a)">
                              <path d="M23.2462 7.96119C19.4712 11.8214 12.8893 11.509 8.54541 7.26099" stroke="#F0F2F4" strokeWidth="2" strokeMiterlimit="10" />
                              <path d="M24.2746 22.6428C19.9319 18.3959 19.4704 11.8225 23.2465 7.96124" stroke="#F0F2F4" strokeWidth="2" strokeMiterlimit="10" />
                              <path d="M23.2465 7.96117L7.86475 23.6902" stroke="#F0F2F4" strokeWidth="2" strokeMiterlimit="10" />
                            </g>
                            <defs>
                              <clipPath id="clip0_42_966a">
                                <rect width="32" height="32" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </div>
                      <span className="dot"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-4">
                <div className="service-section__wrap wow fadeInRight" data-wow-delay="0.3s">
                  <div className="logo">
                    <img src="/assets/imgs/icon/service-icon-2.png" alt="icon" />
                  </div>
                  <div className="service-section__item">
                    <div className="number">
                      <span>02.</span>
                    </div>
                    <div className="content">
                      <h3 className="title"><a href="#">AI Strategy and <br />
                          Consulting</a></h3>
                      <p className="decs">Nemo enim ipsam voluptatem quia voluptas sit <br />
                        aut odit aut fugit, sed quia consequuntur magni <br />
                        dolores qui, ratione voluptatem sequi nesciunte <br />
                        neque porro quisquam est,</p>
                    </div>
                    <div className="service-section__bottom">
                      <div className="icon">
                        <a className="project-btn" href="#">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_42_966b)">
                              <path d="M23.2462 7.96119C19.4712 11.8214 12.8893 11.509 8.54541 7.26099" stroke="#F0F2F4" strokeWidth="2" strokeMiterlimit="10" />
                              <path d="M24.2746 22.6428C19.9319 18.3959 19.4704 11.8225 23.2465 7.96124" stroke="#F0F2F4" strokeWidth="2" strokeMiterlimit="10" />
                              <path d="M23.2465 7.96117L7.86475 23.6902" stroke="#F0F2F4" strokeWidth="2" strokeMiterlimit="10" />
                            </g>
                            <defs>
                              <clipPath id="clip0_42_966b">
                                <rect width="32" height="32" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </div>
                      <span className="dot"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-4">
                <div className="service-section__wrap wow fadeInRight" data-wow-delay="0.6s">
                  <div className="logo">
                    <img src="/assets/imgs/icon/service-icon-1.png" alt="icon" />
                  </div>
                  <div className="service-section__item">
                    <div className="number">
                      <span>03.</span>
                    </div>
                    <div className="content">
                      <h3 className="title"><a href="#">Machine Learning <br />
                          Solutions</a></h3>
                      <p className="decs">Nemo enim ipsam voluptatem quia voluptas sit <br />
                        aut odit aut fugit, sed quia consequuntur magni <br />
                        dolores qui, ratione voluptatem sequi nesciunte <br />
                        neque porro quisquam est,</p>
                    </div>
                    <div className="service-section__bottom">
                      <div className="icon">
                        <a className="project-btn" href="#">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_42_966c)">
                              <path d="M23.2462 7.96119C19.4712 11.8214 12.8893 11.509 8.54541 7.26099" stroke="#F0F2F4" strokeWidth="2" strokeMiterlimit="10" />
                              <path d="M24.2746 22.6428C19.9319 18.3959 19.4704 11.8225 23.2465 7.96124" stroke="#F0F2F4" strokeWidth="2" strokeMiterlimit="10" />
                              <path d="M23.2465 7.96117L7.86475 23.6902" stroke="#F0F2F4" strokeWidth="2" strokeMiterlimit="10" />
                            </g>
                            <defs>
                              <clipPath id="clip0_42_966c">
                                <rect width="32" height="32" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </div>
                      <span className="dot"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work / process section */}
      <section className="work-section bg-img" style={{ backgroundImage: "url('/assets/imgs/work/work-bg.png')" }}>
        <div className="work-section__wrapper">
          <div className="container rr-container-1800">
            <div className="row">
              <div className="col-xl-6">
                <div className="work-section__wrap">
                  <div className="section-heading">
                    <h3 className="title wow fadeInUp" data-wow-delay="0.3s">Our Process for Smarter AI Solutions <br />
                      That Drive Innovation, Efficiency, and <br />
                      Business Growth at Every Step</h3>
                  </div>
                  <div className="icon-shape">
                    <img src="/assets/imgs/project/workt-logo.png" alt="img not found" />
                  </div>
                  <div className="work-section__thumb rr-ov-hidden">
                    <img data-speed="0.9" src="/assets/imgs/project/workt-img-1.jpg" alt="img not found" />
                    <a href="#" className="rr-btn-border">
                      <span className="text">CONTACT US TODAY</span>
                      <span className="icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_46_7b)">
                            <path d="M22.0007 10.9995C16.6014 10.9995 12.2229 6.0753 12.2229 -0.000488281" stroke="#101010" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M12.2229 21.9995C12.2229 15.9253 16.5999 10.9995 22.0007 10.9995" stroke="#101010" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M22.0005 10.9995H0.000488281" stroke="#101010" strokeWidth="2" strokeMiterlimit="10" />
                          </g>
                          <defs>
                            <clipPath id="clip0_46_7b">
                              <rect width="22" height="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-1"></div>
              <div className="col-xl-5">
                <div className="work-section__item-box wow fadeInUp" data-wow-delay="0.6s">
                  <div className="work-section__item">
                    <div className="work-section__number">
                      <span>SETP 01</span>
                    </div>
                    <div className="work-section__content">
                      <h3 className="title">Discover &amp; Align Goals</h3>
                      <p className="decs">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut <br /> fugit, sed quia
                        consequuntur magni dolores qui, ratione out voluptatem sequi nesciunte </p>
                    </div>
                  </div>
                  <div className="work-section__item">
                    <div className="work-section__number">
                      <span>SETP 02</span>
                    </div>
                    <div className="work-section__content">
                      <h3 className="title">Analyze Data &amp; Choose Models</h3>
                      <p className="decs">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut <br /> fugit, sed quia
                        consequuntur magni dolores qui, ratione out voluptatem sequi nesciunte </p>
                    </div>
                  </div>
                  <div className="work-section__item">
                    <div className="work-section__number">
                      <span>SETP 03</span>
                    </div>
                    <div className="work-section__content">
                      <h3 className="title">Develop Custom AI Solutions</h3>
                      <p className="decs">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut <br /> fugit, sed quia
                        consequuntur magni dolores qui, ratione out voluptatem sequi nesciunte </p>
                    </div>
                  </div>
                  <div className="work-section__item">
                    <div className="work-section__number">
                      <span>SETP 04</span>
                    </div>
                    <div className="work-section__content">
                      <h3 className="title">Test, Deploy &amp; Optimize</h3>
                      <p className="decs">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut <br /> fugit, sed quia
                        consequuntur magni dolores qui, ratione out voluptatem sequi nesciunte </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project section */}
      <section className="project-section rr-bg-gray section-spacing">
        <div className="container rr-container-1800">
          <div className="section-heading">
            <h3 className="title wow fadeInUp" data-wow-delay="0.3s">Real Projects. Real Impact. Real Intelligence. Powered <br />
              by AI for Scalable, Smart Business Growth </h3>
          </div>
          <div className="project-section__wrapper">
            <div className="project-section__thumb rr-ov-hidden">
              <img data-speed="0.8" src="/assets/imgs/project/project-img-1.jpg" alt="img not found" />
            </div>
            <div className="project-section__card fadeInUp" data-wow-delay="0.3s">
              <div className="icon">
                <a className="project-btn" href="#">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_54_226a)">
                      <path d="M23.2462 7.96095C19.4712 11.8212 12.8893 11.5088 8.54541 7.26074" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M24.2744 22.6425C19.9316 18.3956 19.4702 11.8223 23.2462 7.96099" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M23.2463 7.96093L7.8645 23.6899" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                    </g>
                    <defs>
                      <clipPath id="clip0_54_226a">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              <div className="project-section__content">
                <h4 className="sub-title">AI Consulting</h4>
                <h2 className="title">DeepVision: Enhancing image recognition with Ai <br />
                  Startup Agency</h2>
                <p className="decs">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia
                  consequuntur magni <br /> dolores qui, ratione out voluptatem sequi nesciunte </p>
                <span className="date">2025</span>
              </div>
            </div>
            <div className="project-section__card fadeInUp" data-wow-delay="0.6s">
              <div className="icon">
                <a className="project-btn" href="#">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_54_226b)">
                      <path d="M23.2462 7.96095C19.4712 11.8212 12.8893 11.5088 8.54541 7.26074" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M24.2744 22.6425C19.9316 18.3956 19.4702 11.8223 23.2462 7.96099" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M23.2463 7.96093L7.8645 23.6899" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                    </g>
                    <defs>
                      <clipPath id="clip0_54_226b">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              <div className="project-section__content">
                <h4 className="sub-title">AI Consulting</h4>
                <h2 className="title">From Pixels to Precision – AI Image Recognition <br />
                  Reinvented</h2>
                <p className="decs">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia
                  consequuntur magni <br /> dolores qui, ratione out voluptatem sequi nesciunte </p>
                <span className="date">2025</span>
              </div>
            </div>
            <div className="project-section__thumb rr-ov-hidden">
              <img data-speed="0.7" src="/assets/imgs/project/project-img-2.jpg" alt="img not found" />
            </div>
            <div className="project-section__thumb rr-ov-hidden">
              <img data-speed="0.8" src="/assets/imgs/project/project-img-1.jpg" alt="img not found" />
            </div>
            <div className="project-section__card fadeInUp" data-wow-delay="0.8s">
              <div className="icon">
                <a className="project-btn" href="#">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_54_226c)">
                      <path d="M23.2462 7.96095C19.4712 11.8212 12.8893 11.5088 8.54541 7.26074" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M24.2744 22.6425C19.9316 18.3956 19.4702 11.8223 23.2462 7.96099" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M23.2463 7.96093L7.8645 23.6899" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                    </g>
                    <defs>
                      <clipPath id="clip0_54_226c">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              <div className="project-section__content">
                <h4 className="sub-title">AI Consulting</h4>
                <h2 className="title">DeepVision: Smarter Image Recognition Solutions <br />
                  for Modern Businesses</h2>
                <p className="decs">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia
                  consequuntur magni <br /> dolores qui, ratione out voluptatem sequi nesciunte </p>
                <span className="date">2025</span>
              </div>
            </div>
            <div className="project-section__card fadeInUp" data-wow-delay="0.3s">
              <div className="icon">
                <a className="project-btn" href="#">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_54_226d)">
                      <path d="M23.2462 7.96095C19.4712 11.8212 12.8893 11.5088 8.54541 7.26074" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M24.2744 22.6425C19.9316 18.3956 19.4702 11.8223 23.2462 7.96099" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M23.2463 7.96093L7.8645 23.6899" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                    </g>
                    <defs>
                      <clipPath id="clip0_54_226d">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              <div className="project-section__content">
                <h4 className="sub-title">AI Consulting</h4>
                <h2 className="title">DeepVision: AI-Powered Image Recognition for the <br />
                  Next Generation</h2>
                <p className="decs">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia
                  consequuntur magni <br /> dolores qui, ratione out voluptatem sequi nesciunte </p>
                <span className="date">2025</span>
              </div>
            </div>
            <div className="project-section__thumb rr-ov-hidden">
              <img data-speed="0.9" src="/assets/imgs/project/project-img-1.jpg" alt="img not found" />
            </div>
          </div>
        </div>
      </section>

      {/* Video section */}
      <section className="video-section__area rr-ov-hidden">
        <div className="video-section__bg" data-speed="0.9" data-lag="0.3" style={{ backgroundImage: "url('/assets/imgs/video/video-banner-img.png')" }}>
          <div className="container rr-container-1800">
            <div className="video-section__wrapper">
              <div className="row">
                <div className="col-xl-6 col-xxl-8">
                  <div className="video-section__content wow fadeInUp" data-wow-delay="0.3s">
                    <h3 className="title">An award winning venture capital and <br />
                      investment agency in Los Angeles set <br />
                      up in 2015</h3>
                    <a href="#" className="rr-btn-border">
                      <span className="text">CONTACT US TODAY</span>
                      <span className="icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_52_154)">
                            <path d="M22.0004 10.9995C16.6011 10.9995 12.2227 6.0753 12.2227 -0.000488281" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M12.2227 21.9995C12.2227 15.9253 16.5997 10.9995 22.0004 10.9995" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M22.0005 10.9995H0.000488281" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                          </g>
                          <defs>
                            <clipPath id="clip0_52_154">
                              <rect width="22" height="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-4">
                  <div className="video-section__card">
                    <div className="video-section__play">
                      <a className="popup-video icon" href="https://www.youtube.com/watch?v=8oON21G1Bqg">
                        <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.5577 13.7577C23.1474 13.421 23.1474 12.579 22.5577 12.2423L1.32692 0.118527C0.737178 -0.218244 5.96046e-07 0.20272 5.96046e-07 0.876261V25.1237C5.96046e-07 25.7973 0.73718 26.2182 1.32692 25.8815L22.5577 13.7577Z" fill="white" />
                        </svg>
                      </a>
                      <a className="popup-video" href="https://www.youtube.com/watch?v=8oON21G1Bqg"></a>
                    </div>
                    <h3 className="title wow fadeInUp" data-wow-delay="0.3s">We believe AI can transform <br />
                      the world and we are here to <br />
                      lead that change.</h3>
                    <div className="video-section__list">
                      <ul>
                        <li>
                          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="12.4307" x2="10.3448" y2="12.4307" stroke="#101010" />
                            <line x1="14.6553" y1="12.4307" x2="25.0001" y2="12.4307" stroke="#101010" />
                            <line x1="12.4312" y1="10.3447" x2="12.4312" y2="-0.000101089" stroke="#101010" />
                            <line x1="12.4312" y1="25" x2="12.4312" y2="14.6552" stroke="#101010" />
                          </svg>
                          Smart. Scalable. Reliable.
                        </li>
                        <li>
                          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="12.4307" x2="10.3448" y2="12.4307" stroke="#101010" />
                            <line x1="14.6553" y1="12.4307" x2="25.0001" y2="12.4307" stroke="#101010" />
                            <line x1="12.4312" y1="10.3447" x2="12.4312" y2="-0.000101089" stroke="#101010" />
                            <line x1="12.4312" y1="25" x2="12.4312" y2="14.6552" stroke="#101010" />
                          </svg>
                          AI Built for Impact
                        </li>
                        <li>
                          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="12.4307" x2="10.3448" y2="12.4307" stroke="#101010" />
                            <line x1="14.6553" y1="12.4307" x2="25.0001" y2="12.4307" stroke="#101010" />
                            <line x1="12.4312" y1="10.3447" x2="12.4312" y2="-0.000101089" stroke="#101010" />
                            <line x1="12.4312" y1="25" x2="12.4312" y2="14.6552" stroke="#101010" />
                          </svg>
                          Solutions That Grow with You
                        </li>
                        <li>
                          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="12.4307" x2="10.3448" y2="12.4307" stroke="#101010" />
                            <line x1="14.6553" y1="12.4307" x2="25.0001" y2="12.4307" stroke="#101010" />
                            <line x1="12.4312" y1="10.3447" x2="12.4312" y2="-0.000101089" stroke="#101010" />
                            <line x1="12.4312" y1="25" x2="12.4312" y2="14.6552" stroke="#101010" />
                          </svg>
                          Human-Centered Innovation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="testimonials-section pin-area-3">
        <div className="testimonials-section-wrapper section-spacing-top">
          <div className="container rr-container-1800">
            <div className="section-heading pin-element_3">
              <h3 className="title wow fadeInUp" data-wow-delay="0.3s">User Stories: Hear What Others Love About <br />
                Our Trexa AI Agency and How It Transformed <br />
                Their Business</h3>
            </div>
            <div className="testimonials-wrapper-box">
              {[
                { name: 'Jonathan Kim', role: 'CEO, NovaTech Solutions', img: '1', short: true },
                { name: 'Sophia Rahman,', role: 'Digital Marketing Lead, VibeTech', img: '2', short: false },
                { name: 'Alex Morgan', role: 'Chief Operating Officer', img: '3', short: false },
                { name: 'David Kwon', role: 'Tech Consultant', img: '4', short: false },
                { name: 'Amina Chowdhury', role: 'Digital Marketing Lead, VibeTech', img: '5', short: true },
              ].map((author, i) => (
                <div key={i} className="testimonials-item project-panel fadeInUp" data-wow-delay={`${0.3 + i * 0.2}s`}>
                  <div className="icon">
                    <svg width="56" height="45" viewBox="0 0 56 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.9011 3.2086L21.8691 0C7.81039 9.70536 0 21.4976 0 31.203C0 40.5875 6.7182 45 12.4192 45C19.6048 45 24.6809 38.7419 24.6809 32.1656C24.6809 26.6314 21.2443 21.8981 16.6356 20.1321C15.3084 19.6495 14.0587 19.2491 14.0587 16.9234C14.0587 13.9561 16.1682 9.54621 23.9011 3.2086ZM54.9078 3.2086L52.8758 0C38.9721 9.70536 31.0067 21.4976 31.0067 31.203C31.0067 40.5875 37.8799 45 43.5808 45C50.8439 45 56 38.7419 56 32.1656C56 26.6314 52.4859 21.8981 47.7197 20.1321C46.3926 19.6495 45.2204 19.2491 45.2204 16.9234C45.2204 13.9561 47.4073 9.54364 54.9053 3.20604L54.9078 3.2086Z" fill="#F14F44" />
                    </svg>
                  </div>
                  <div className="testimonials-content">
                    <p className="decs">Trexa AI helped us streamline our nor again <br />
                      is there anyone who loves or pursues obtain <br />
                      pain of itself, because it is pain, {!author.short && <><br />occasionally circumstances</>} </p>
                  </div>
                  <div className="testimonials-author">
                    <div className="author-thumb">
                      <img src={`/assets/imgs/testimonials/testimonials-author-img-${author.img}.png`} alt="img not found" />
                    </div>
                    <div className="author-content">
                      <h3 className="name">{author.name}</h3>
                      <p className="decs">{author.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features / CTA section */}
      <section className="features-section rr-bg-gray section-spacing-top">
        <div className="container rr-container-1800">
          <div className="features-section__wrapper">
            <div className="features-section__thumb rr-ov-hidden">
              <img src="/assets/imgs/project/features-2.png" alt="img not found" />
              <div className="features-section__item">
                <div className="content">
                  <h3 className="title wow fadeInUp" data-wow-delay="0.3s">Turn Your Concepts <br />
                    Into Reality Start the <br />
                    Conversation</h3>
                  <p className="decs fadeInUp" data-wow-delay="0.5s">Have an idea? Let&apos;s turn it into something real. Share your vision <br /> and we&apos;ll
                    help bring it to life with smart, innovative, efficient, and <br /> tailored AI solutions.</p>
                </div>
                <div className="features-section__form">
                  <form action="#" className="ts-subscribe-form">
                    <input className="form-control" type="email" name="email" placeholder="Enter your email" />
                    <button className="rr-btn-border">
                      <span className="text">Sign Up Now</span>
                      <span className="icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_52_154b)">
                            <path d="M22.0004 10.9995C16.6011 10.9995 12.2227 6.0753 12.2227 -0.000488281" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M12.2227 21.9995C12.2227 15.9253 16.5997 10.9995 22.0004 10.9995" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M22.0005 10.9995H0.000488281" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                          </g>
                          <defs>
                            <clipPath id="clip0_52_154b">
                              <rect width="22" height="22" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand section */}
      <section className="brand__area rr-bg-gray section-spacing">
        <div className="container rr-container-1800">
          <div className="section-heading">
            <h3 className="title wow fadeInUp" data-wow-delay="0.3s">100+ backers with our amazing team driving <br />
              innovation, trust, and results</h3>
          </div>
          <div className="brand__item-wrapper">
            <div className="brand__item-box">
              <div className="swiper brand-slide__active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <img src="/assets/imgs/band/band-shape-1.png" alt="icon" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <img src="/assets/imgs/band/band-shape-2.png" alt="icon" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <img src="/assets/imgs/band/band-shape-4.png" alt="icon" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <img src="/assets/imgs/band/band-shape-4.png" alt="icon" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item">
                      <img src="/assets/imgs/band/band-shape-5.png" alt="icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section className="blog">
        <div className="blog__inner">
          <div className="container rr-container-1800">
            <div className="service-section__info">
              <h4 className="title wow fadeInUp" data-wow-delay="0.3s">Latest Insights: How AI is powering the next <br />
                generation of business innovation and digital <br />
                transformation</h4>
              <a href="#" className="rr-btn-border fadeInUp" data-wow-delay="0.3s">
                <span className="text">VIEW ALL SERVICES</span>
                <span className="icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_46_7c)">
                      <path d="M22.0007 10.9995C16.6014 10.9995 12.2229 6.0753 12.2229 -0.000488281" stroke="#101010" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M12.2229 21.9995C12.2229 15.9253 16.5999 10.9995 22.0007 10.9995" stroke="#101010" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M22.0005 10.9995H0.000488281" stroke="#101010" strokeWidth="2" strokeMiterlimit="10" />
                    </g>
                    <defs>
                      <clipPath id="clip0_46_7c">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
            </div>
            <div className="blog__wrapper">
              <div className="swiper blog-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="blog__item">
                      <div className="blog__media rr-ov-hidden">
                        <a href="#"><img data-speed="0.9" src="/assets/imgs/blog/blog.jpg" alt="img" /></a>
                      </div>
                      <div className="blog__content">
                        <div className="blog__top">
                          <span>July 25, 2025</span>
                          <h2 className="title fadeInUp" data-wow-delay="0.3s"><a href="#">Global Creativity Unlocked: The <br />
                              Role of Generative AI in Design, <br />
                              Content, and Media</a></h2>
                          <p className="decs">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolorefugiat
                            nulla pariatur. excepteur sinte, occaecat cupidatat non proident,</p>
                        </div>
                        <div className="blog__bottom">
                          <a href="#">Read the Full Article</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="blog__item">
                      <div className="blog__media rr-ov-hidden">
                        <a href="#"><img data-speed="0.9" src="/assets/imgs/blog/blog-2.jpg" alt="img" /></a>
                      </div>
                      <div className="blog__content">
                        <div className="blog__top">
                          <span>July 25, 2025</span>
                          <h2 className="title"><a href="#">Global Creativity Unlocked: The <br />
                              Role of Generative AI in Design, <br />
                              Content, and Media</a></h2>
                          <p className="decs">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolorefugiat
                            nulla pariatur. excepteur sinte, occaecat cupidatat non proident,</p>
                        </div>
                        <div className="blog__bottom">
                          <a href="#">Read the Full Article</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (ai-agency uses its own footer inline – but InnerPageLayout wraps FooterInner) */}
      {/* The original html has a custom footer__area for this demo. We inline it here and hide FooterInner via layout override. */}
      {/* Since InnerPageLayout includes FooterInner, we output the demo footer as an additional section before it renders. */}
      {/* NOTE: The template's ai-agency footer is a unique "footer__area" style (not footer-area6). We include it here. */}
      <footer className="footer__area bg-img" style={{ backgroundImage: "url('/assets/imgs/work/work-bg.png')" }}>
        <div className="container rr-container-1800">
          <div className="footer-widget-wrapper">
            <div className="footer-widget-wrapper__top-content">
              <div className="footer-widget-wrapper__icon">
                <img src="/assets/imgs/logo/footer-logo.png" alt="icon" />
              </div>
              <h3 className="title wow fadeInUp" data-wow-delay="0.3s">Collaborate with our creative team to make <br />
                your project shine with unmatched brilliance.</h3>
              <div className="footer-widget-wrapper__social wow fadeInUp" data-wow-delay="0.6s">
                <ul>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                  <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="footer-widget__box wow fadeInUp" data-wow-delay="0.3s">
                  <div className="footer-widget-contact">
                    <span className="sub-title">Our address</span>
                    <h4><a href="#">25 Elm Drive, Riverside, TX</a></h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="footer-widget__box wow fadeInUp" data-wow-delay="0.6s">
                  <div className="footer-widget-contact">
                    <span className="sub-title">Send a message</span>
                    <h4><a href="mailto:infocontact@loremips.com">infocontact@loremips.com</a></h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="footer-widget__box wow fadeInUp" data-wow-delay="0.8s">
                  <div className="footer-widget-contact">
                    <span className="sub-title">Call our office</span>
                    <h4><a href="tel:+17627680763">+1 (762) 768 0763 whatsapp</a></h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="footer-widget__box wow fadeInUp" data-wow-delay="0.9s">
                  <div className="footer-widget-contact">
                    <span className="sub-title">Copyright &copy; trexa</span>
                    <h4><a href="#">Powered by Themeforest</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-widget-text-slider">
          <div className="swiper footer-text-slide__active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="text-slide">
                  <h3>Work with us - Let&apos;s Chat - Work wit</h3>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="text-slide">
                  <h3>Work with us - Let&apos;s Chat - Work wit</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container rr-container-1800">
          <div className="copyright-area">
            <div className="copyright-area-inner">
              <div className="copyright-text wow fadeInUp" data-wow-delay="0.3s">
                <p className="text">
                  Copyright &amp; design by &copy;<a href="#">Themewolfs</a> 2025, All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </InnerPageLayout>
  );
}
