import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'AI Robotic – Trexa',
  description: 'Trexa AI Robotic – Next-Gen Automation with AI-Powered Robots Boosting Productivity.',
};

export default function AiRoboticPage() {
  return (
    <InnerPageLayout>

      {/* Hero section */}
      <div className="hero-2__area">
        <div className="hero-2__inner" style={{ backgroundImage: "url('/assets/imgs/home-2/hero-shape.png')" }}>
          <div className="container rr-container-1800">
            <div className="hero-2__content">
              <div className="hero-2__top">
                <div className="text wow fadeInUp" data-wow-delay="0.3s">
                  <p>Experience the future of automation
                    with AI-powered robots designed to
                    boost productivity,</p>
                  <a href="#">start your project <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <h1 className="sub-title rr-title-anim-2">Next-Gen Automation with AI-Powered Robots
                  Boosting Productivity, Streamlining Operations,
                  Enhancing Accuracy,</h1>
              </div>
              <div className="hero-2__bottom">
                <h1 className="title">igital <span><img data-speed="0.7" src="/assets/imgs/home-2/robot.png" alt="image" /></span>Intell</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise section */}
      <section className="expertise-2 rr-bg-primary section-spacing">
        <div className="container rr-container-1800">
          <div className="section-title-2__wrapper">
            <div className="shape"><img src="/assets/imgs/home-2/expertise-shape.png" alt="image" /></div>
            <h2 className="title text-center wow fadeInUp" data-wow-delay="0.3s"><span>Automating Tasks,</span> Enhancing Precision, Reducing Costs, <br />
              Driving Innovation Forward, Improving Safety, <span>Increasing</span> <br />
              Speed, Elevating Productivity, Enabling Scalability, and <br />
              Transforming <span> Workflows Globally.</span></h2>
          </div>
          <div className="swiper expertise-2-active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="expertise-2__item wow fadeInUp" data-wow-delay="0.3s">
                  <div className="shape-1"><i className="fa-solid fa-angle-left"></i></div>
                  <div className="shape-2"><i className="fa-solid fa-angle-right"></i></div>
                  <span className="number">01</span>
                  <h2 className="title">Smart Automation <br />Solutions</h2>
                  <p className="desc">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut consequuntur magni</p>
                  <a className="arrow" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <g clipPath="url(#clip0_55_1966a)">
                        <path d="M22.4072 7.32644C19.2825 11.7297 12.7328 12.4507 7.77783 8.93457" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M25.7193 21.6667C20.7656 18.1514 19.2816 11.7312 22.4071 7.32674" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M22.4071 7.32695L9.67529 25.2686" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      </g>
                      <defs><clipPath id="clip0_55_1966a"><rect width="32" height="32" fill="white" /></clipPath></defs>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="expertise-2__item wow fadeInUp" data-wow-delay="0.5s">
                  <div className="shape-1"><i className="fa-solid fa-angle-left"></i></div>
                  <div className="shape-2"><i className="fa-solid fa-angle-right"></i></div>
                  <span className="number">02</span>
                  <h2 className="title">Experienced AI <br />Engineers</h2>
                  <p className="desc">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut consequuntur magni</p>
                  <a className="arrow" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <g clipPath="url(#clip0_55_1966b)">
                        <path d="M22.4072 7.32644C19.2825 11.7297 12.7328 12.4507 7.77783 8.93457" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M25.7193 21.6667C20.7656 18.1514 19.2816 11.7312 22.4071 7.32674" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M22.4071 7.32695L9.67529 25.2686" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      </g>
                      <defs><clipPath id="clip0_55_1966b"><rect width="32" height="32" fill="white" /></clipPath></defs>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="expertise-2__item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="shape-1"><i className="fa-solid fa-angle-left"></i></div>
                  <div className="shape-2"><i className="fa-solid fa-angle-right"></i></div>
                  <span className="number">03</span>
                  <h2 className="title">Real-Time Monitoring <br />&amp; Control</h2>
                  <p className="desc">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut consequuntur magni</p>
                  <a className="arrow" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <g clipPath="url(#clip0_55_1966c)">
                        <path d="M22.4072 7.32644C19.2825 11.7297 12.7328 12.4507 7.77783 8.93457" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M25.7193 21.6667C20.7656 18.1514 19.2816 11.7312 22.4071 7.32674" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M22.4071 7.32695L9.67529 25.2686" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      </g>
                      <defs><clipPath id="clip0_55_1966c"><rect width="32" height="32" fill="white" /></clipPath></defs>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="expertise-2__item wow fadeInUp" data-wow-delay="0.7s">
                  <div className="shape-1"><i className="fa-solid fa-angle-left"></i></div>
                  <div className="shape-2"><i className="fa-solid fa-angle-right"></i></div>
                  <span className="number">04</span>
                  <h2 className="title">Full-Time Support <br />Team</h2>
                  <p className="desc">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut consequuntur magni</p>
                  <a className="arrow" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <g clipPath="url(#clip0_55_1966d)">
                        <path d="M22.4072 7.32644C19.2825 11.7297 12.7328 12.4507 7.77783 8.93457" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M25.7193 21.6667C20.7656 18.1514 19.2816 11.7312 22.4071 7.32674" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M22.4071 7.32695L9.67529 25.2686" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      </g>
                      <defs><clipPath id="clip0_55_1966d"><rect width="32" height="32" fill="white" /></clipPath></defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service-2 section */}
      <section className="service-2__area section-spacing rr-bg-gray rr-ov-hidden">
        <div className="container rr-container-1800">
          <div className="section-title-2__wrapper">
            <div className="shape"><img src="/assets/imgs/home-2/servics-shape.png" alt="image not found" /></div>
            <h2 className="title text-center wow fadeInUp" data-wow-delay="0.3s">Advanced Robotic Services – Smart Automation, Precision
              Engineering, Scalable Solutions, 24/7 Operational Support
              and Predictive Maintenance Technology</h2>
          </div>
          <div className="row mb-minus-30">
            {[
              { num: '01', delay: '0.3s', title: 'Robotic Automation' },
              { num: '02', delay: '0.5s', title: 'Machine Learning' },
              { num: '03', delay: '0.7s', title: 'Predictive Analysis' },
            ].map((svc) => (
              <div key={svc.num} className="col-lg-4 col-md-6">
                <div className="service-2__item wow fadeInUp" data-wow-delay={svc.delay}>
                  <a href="#" className="rr-btn-green green-2">
                    <span className="btn-wrap">
                      <span className="text-one"><i className="fa-solid fa-arrow-turn-down-right"></i>SERVICES {svc.num}</span>
                      <span className="text-two"><i className="fa-solid fa-arrow-turn-down-right"></i>SERVICES {svc.num}</span>
                    </span>
                  </a>
                  <h2 className="title">{svc.title}</h2>
                  <p>Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihils impedit quo minus quod maxime placeat
                    facere possimus, omnis voluptas assumenda est, omnis
                    dolor repellendus.</p>
                  <ul className="service-2__list">
                    {['Smart Task Execution', 'Seamless System Integration', 'Scalable & Adaptive Technology'].map((item) => (
                      <li key={item}>
                        <span>
                          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.1">
                              <line x1="9.5" x2="9.5" y2="7" stroke="#101010" />
                              <line x1="9.5" y1="12" x2="9.5" y2="19" stroke="#101010" />
                              <line x1="12" y1="9.5" x2="19" y2="9.5" stroke="#101010" />
                              <line y1="9.5" x2="7" y2="9.5" stroke="#101010" />
                            </g>
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a className="more-btn" href="#">
                    Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax image */}
      <div className="parallax-view rr-ov-hidden">
        <img data-speed="0.8" src="/assets/imgs/home-2/parallax.jpg" alt="img" />
      </div>

      {/* Identity-2 section */}
      <section className="identity-2 rr-bg-primary section-spacing">
        <div className="container rr-container-1800">
          <div className="identity-2__inner">
            <div className="section-title-2__wrapper">
              <h2 className="title wow fadeInUp" data-wow-delay="0.3s">A Journey Fueled by AI &amp; Robotics — Transforming <br />
                Ideas into Intelligent, Scalable, and Impact-Driven <br />
                Automation Solutions Worldwide.</h2>
              <div className="btn-wrap wow fadeInUp" data-wow-delay="0.3s">
                <a className="btn-big" href="#">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_55_1800)">
                      <path d="M21.7026 6.36452C18.5779 10.7678 12.0282 11.4888 7.07324 7.97266" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M25.0147 20.7048C20.061 17.1895 18.577 10.7693 21.7025 6.36483" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M21.7025 6.36504L8.9707 24.3066" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                    </g>
                    <defs>
                      <clipPath id="clip0_55_1800">
                        <rect width="22" height="22" fill="white" transform="translate(0 17.9414) rotate(-54.6395)" />
                      </clipPath>
                    </defs>
                  </svg>
                  EXPLORE MORE
                </a>
              </div>
            </div>
            <div className="identity-2__wrapper">
              {[
                { num: '001', delay: '0.3s' },
                { num: '001', delay: '0.6s' },
                { num: '001', delay: '0.9s' },
              ].map((item, i) => (
                <div key={i} className="identity-2__item wow fadeInUp" data-wow-delay={item.delay}>
                  <div className="number">
                    <span>{item.num}</span>
                  </div>
                  <div className="text">
                    <h5 className="title">AI &amp; Robotics Visionaries</h5>
                    <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects-area-10 */}
      <section className="Projects-area-10 section-spacing-top rr-ov-hidden">
        <div className="container rr-container-1850">
          <div className="Projects-area-10-inner">
            <div className="Projects__content">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </div>
            <div className="Projects-wrapper">
              {['', 'z-0', 'z-1', 'z-2', 'z-3'].map((zClass, i) => (
                <div key={i} className={`Projects__item section-item rr-ov-hidden${zClass ? ' ' + zClass : ''}`}>
                  <div className="media">
                    <img src="/assets/imgs/home-2/recent-work-2/recent-work.jpg" alt="image" />
                  </div>
                  <a className="btn-circle" href="#">Details</a>
                  <h2 className="title"><a href="#">Agriculture Technology</a></h2>
                </div>
              ))}
            </div>
            <div className="recent-work-2__box rr-ov-hidden">
              <span>2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone-2 section */}
      <section className="milestone-2__area section-spacing rr-pos-rel">
        <div className="milestone-2__inner">
          <div className="container rr-container-1800">
            <div className="section-title-2__wrapper">
              <h2 className="title text-center wow fadeInUp" data-wow-delay="0.3s">A Journey Fueled by AI &amp; Robotics — Transforming <br />
                Ideas into Intelligent, Scalable, and Impact-Driven <br />
                Automation Solutions Worldwide.</h2>
            </div>
            <div className="milestone-2__wrapper">
              <div className="swiper milestone-2__active">
                <div className="swiper-wrapper">
                  {[
                    { year: '2010', delay: '0.3s', title: 'The Mission Begins' },
                    { year: '2013', delay: '0.6s', title: 'First Prototype Launched' },
                    { year: '2016', delay: '0.7s', title: 'Expansion into AI Integration' },
                    { year: '2019', delay: '0.9s', title: 'Global Collaborations Started' },
                  ].map((ms, i) => (
                    <div key={ms.year} className="swiper-slide">
                      <div className="milestone-2__item wow fadeInUp" data-wow-delay={ms.delay}>
                        <div className="milestone-2__content">
                          <span>{ms.year}</span>
                          <h6 className="title">{ms.title}</h6>
                          <p>Founded with a vision to merge AI and robotics
                            to solve real-world problems through intelligent
                            automation.</p>
                        </div>
                        <div className="milestone-2__media">
                          <img src={`/assets/imgs/home-2/milestone/milestone-${i + 1}.jpg`} alt="image" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="milestone-2__bottom">
            <div className="milestone-2__shape">
              <img src="/assets/imgs/home-2/milestone/line.png" alt="image" />
            </div>
            <div className="navigation">
              <button className="milestone-2-prev"></button>
              <button className="milestone-2-next"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Future-2 / Brand logos section */}
      <section className="future-2 rr-bg-primary section-spacing-top">
        <div className="container rr-container-1800">
          <div className="section-title-2__wrapper">
            <h2 className="title text-center wow fadeInUp" data-wow-delay="0.3s">Our Brand, Powered by Intelligence – Representing <br />
              innovation, trust, technology, &amp; the future of smart <br />
              automation globally.</h2>
          </div>
          <div className="future-2__wrapper">
            <div className="shape"><img src="/assets/imgs/home-2/future/shape.png" alt="image" /></div>
            <div className="future-top">
              {[1, 2, 3].map((n) => (
                <div key={n} className="future-top__item">
                  <img src={`/assets/imgs/home-2/future/logo-${n}.png`} alt="img" />
                </div>
              ))}
            </div>
            <div className="future-bottom">
              {[4, 5, 6, 7, 8, 9].map((n) => (
                <div key={n} className="future-bottom__item">
                  <img src={`/assets/imgs/home-2/future/logo-${n}.png`} alt="img" />
                </div>
              ))}
            </div>
            <div className="shape-line">
              <img src="/assets/imgs/home-2/future/line.png" alt="img" />
            </div>
          </div>
        </div>
      </section>

      {/* Counter-2 section */}
      <section className="counter-2 rr-bg-primary section-spacing">
        <div className="container rr-container-1800">
          <div className="section-title-2__wrapper">
            <h2 className="title text-center wow fadeInUp" data-wow-delay="0.3s">Our Brand, Powered by Intelligence – Representing <br />
              innovation, trust, technology, &amp; the future of smart <br />
              automation globally.</h2>
          </div>
          <div className="counter-2__wrapper">
            <div className="row mb-minus-30">
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="counter-2__item wow fadeInUp" data-wow-delay="0.3s">
                  <div className="shape-1"><i className="fa-solid fa-angle-left"></i></div>
                  <div className="shape-2"><i className="fa-solid fa-chevron-right"></i></div>
                  <h2 className="title"><span className="odometer" data-count="1.9">0</span>M</h2>
                  <p>We helped to get companies with <br />
                    $300M+ funding.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="counter-2__item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="shape-1"><i className="fa-solid fa-angle-left"></i></div>
                  <div className="shape-2"><i className="fa-solid fa-chevron-right"></i></div>
                  <h2 className="title"><span className="odometer" data-count="260">0</span>+</h2>
                  <p>Crafted responsive, user-centered <br />
                    website &amp; app.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="counter-2__item wow fadeInUp" data-wow-delay="0.8s">
                  <div className="shape-1"><i className="fa-solid fa-angle-left"></i></div>
                  <div className="shape-2"><i className="fa-solid fa-chevron-right"></i></div>
                  <h2 className="title"><span className="odometer" data-count="16">0</span>+</h2>
                  <p>We have had quite a run in our <br />
                    12+ years of working.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="counter-2__item wow fadeInUp" data-wow-delay="0.9s">
                  <div className="shape-1"><i className="fa-solid fa-angle-left"></i></div>
                  <div className="shape-2"><i className="fa-solid fa-chevron-right"></i></div>
                  <h2 className="title"><span className="odometer" data-count="98">0</span>%</h2>
                  <p>Average 99% clients satisfaction <br />
                    with expertise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="contact-area">
        <div className="contact__inner section-spacing">
          <div className="container">
            <div className="contact__wrapper">
              <div className="contact-us__form-wrapper">
                <h2 className="title wow fadeInUp" data-wow-delay="0.3s">Ready to discuss your project with us?
                  Let&apos;s build the future together with AI
                  intelligent automation.</h2>
                <form className="contact-us__form" id="contact-us__form" method="POST" action="./mail.php">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="contact-us__input wow fadeInLeft" data-wow-delay=".4s">
                        <input type="text" id="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="contact-us__input wow fadeInLeft" data-wow-delay=".5s">
                        <input id="password" type="password" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="contact-us__input wow fadeInLeft" data-wow-delay=".5s">
                        <input id="number" type="number" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="contact-us__input wow fadeInLeft" data-wow-delay=".5s">
                        <input id="Company" type="text" placeholder="Company" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact-us__textarea wow fadeInLeft" data-wow-delay=".7s">
                        <textarea name="textarea" id="textarea" cols={30} rows={10} placeholder="Write Your Message"></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-black wow fadeInLeft" data-wow-delay=".8s">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="contact__info">
                <h4 className="title wow fadeInUp" data-wow-delay="0.3s">
                  <img src="/assets/imgs/home-2/contact/review-1.png" alt="image" /> Our clients say
                </h4>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <span>5.0</span>
                  <img src="/assets/imgs/home-2/contact/up-work.png" alt="img" />
                </div>
                <p className="desc wow fadeInUp" data-wow-delay="0.3s">Duis aute irure dolor in reprehenderit velit esse
                  cillum dolore eu fugiat nulla pariatur. excepteur
                  sint occaecat cupidatat the proident sunt culpa
                  mollit anim id est laborum.</p>
                <div className="author wow fadeInUp" data-wow-delay="0.3s">
                  <span>Jhonson Roy</span>
                  <img src="/assets/imgs/home-2/contact/line.png" alt="image" />
                </div>
                <a href="#"><i className="fa-solid fa-location-dot"></i>Australia</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog-2 section */}
      <section className="blog-2 section-spacing rr-bg-primary">
        <div className="container rr-container-1800">
          <div className="section-title-2__wrapper">
            <h2 className="title wow fadeInUp" data-wow-delay="0.3s">Welcome to our blog, where we share <br />
              insights, career advice, and the latest <br />
              trends in the legal industry.</h2>
            <div className="btn-wrap">
              <a className="btn-big wow fadeInUp" data-wow-delay="0.3s" href="#">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_55_1800b)">
                    <path d="M21.7026 6.36452C18.5779 10.7678 12.0282 11.4888 7.07324 7.97266" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M25.0147 20.7048C20.061 17.1895 18.577 10.7693 21.7025 6.36483" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M21.7025 6.36504L8.9707 24.3066" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                  </g>
                  <defs>
                    <clipPath id="clip0_55_1800b">
                      <rect width="22" height="22" fill="white" transform="translate(0 17.9414) rotate(-54.6395)" />
                    </clipPath>
                  </defs>
                </svg>
                VIEW ALL BLOGS
              </a>
            </div>
          </div>
          <div className="blog-2__warpper">
            <div className="blog-2__media">
              <img src="/assets/imgs/home-2/blog/blog.jpg" alt="image" />
            </div>
            <div className="blog-2__item">
              <div className="blog-2__item-left wow fadeInUp" data-wow-delay="0.3s">
                <h2 className="title"><a href="#">How AI &amp; Robotics Are Revolutionizing <br /> Modern Industries</a></h2>
                <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.</p>
              </div>
              <div className="blog-2__item-right wow fadeInUp" data-wow-delay="0.3s">
                <ul className="meta-list">
                  <li>February 7, 2025</li>
                  <li>9 min read</li>
                </ul>
                <a href="#" className="rr-btn-green green-2">
                  <span className="btn-wrap">
                    <span className="text-one"><i className="fa-solid fa-arrow-turn-down-right"></i> READ ARTICLES</span>
                    <span className="text-two"><i className="fa-solid fa-arrow-turn-down-right"></i> READ ARTICLES</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="blog-2__item wow fadeInUp" data-wow-delay="0.6s">
              <div className="blog-2__item-left">
                <h2 className="title"><a href="#">The Future of Work: Will Robots Replace <br /> Human Jobs?</a></h2>
              </div>
              <div className="blog-2__item-right">
                <ul className="meta-list">
                  <li>February 7, 2025</li>
                  <li>8 min read</li>
                </ul>
                <a href="#" className="rr-btn-green green-2">
                  <span className="btn-wrap">
                    <span className="text-one"><i className="fa-solid fa-arrow-turn-down-right"></i> READ ARTICLES</span>
                    <span className="text-two"><i className="fa-solid fa-arrow-turn-down-right"></i> READ ARTICLES</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="blog-2__item wow fadeInUp" data-wow-delay="0.8s">
              <div className="blog-2__item-left">
                <h2 className="title"><a href="#">Smart Robots, Smarter Decisions: AI in <br /> Everyday Life</a></h2>
              </div>
              <div className="blog-2__item-right">
                <ul className="meta-list">
                  <li>February 7, 2025</li>
                  <li>6 min read</li>
                </ul>
                <a href="#" className="rr-btn-green green-2">
                  <span className="btn-wrap">
                    <span className="text-one"><i className="fa-solid fa-arrow-turn-down-right"></i> READ ARTICLES</span>
                    <span className="text-two"><i className="fa-solid fa-arrow-turn-down-right"></i> READ ARTICLES</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="blog-2__item wow fadeInUp" data-wow-delay="0.9s">
              <div className="blog-2__item-left">
                <h2 className="title"><a href="#">How AI &amp; Robotics Are Revolutionizing <br /> Modern Industries</a></h2>
              </div>
              <div className="blog-2__item-right">
                <ul className="meta-list">
                  <li>February 7, 2025</li>
                  <li>5 min read</li>
                </ul>
                <a href="#" className="rr-btn-green green-2">
                  <span className="btn-wrap">
                    <span className="text-one"><i className="fa-solid fa-arrow-turn-down-right"></i> READ ARTICLES</span>
                    <span className="text-two"><i className="fa-solid fa-arrow-turn-down-right"></i> READ ARTICLES</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer-2 (ai-robotic uses its own footer-2 style) */}
      <footer className="footer-2">
        <div className="footer-2__inner">
          <div className="container rr-container-1800">
            <div className="footer-2-widget-wrapper">
              <div className="footer-2-widget-box">
                <ul className="footer-2-socal-list">
                  <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="https://dribbble.com/"><i className="fa-brands fa-dribbble"></i></a></li>
                  <li><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="https://x.com/?lang=en"><i className="fa-brands fa-x-twitter"></i></a></li>
                </ul>
              </div>
              <div className="footer-2-widget-box content">
                <a className="number" href="tel:12344560099">+1 234 456-00-99</a>
                <a className="mail" href="mailto:INFO@trexa.COM">INFO@trexa.COM</a>
                <ul className="footer-2-nav-list wow fadeInUp" data-wow-delay="0.3s">
                  <li><a href="#">HOME</a></li>
                  <li><a href="#">pORTFOLIO</a></li>
                  <li><a href="#">CONTACT</a></li>
                </ul>
                <div className="footer-2-widget-box-wrap wow fadeInUp" data-wow-delay="0.6s">
                  <div className="coppright">
                    <h6 className="title">2025:</h6>
                    <p>Trexa, All Rights Reserved</p>
                  </div>
                  <div className="address">
                    <h6 className="title">address</h6>
                    <p>Level 1, 12 Sample St, Sydney</p>
                  </div>
                </div>
              </div>
              <div className="footer-2-widget-box wow fadeInUp" data-wow-delay="0.3s">
                <a className="btn-big" href="#">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_55_1800c)">
                      <path d="M21.7026 6.36452C18.5779 10.7678 12.0282 11.4888 7.07324 7.97266" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M25.0147 20.7048C20.061 17.1895 18.577 10.7693 21.7025 6.36483" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                      <path d="M21.7025 6.36504L8.9707 24.3066" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                    </g>
                    <defs>
                      <clipPath id="clip0_55_1800c">
                        <rect width="22" height="22" fill="white" transform="translate(0 17.9414) rotate(-54.6395)" />
                      </clipPath>
                    </defs>
                  </svg>
                  EXPLORE MORE
                </a>
              </div>
            </div>
          </div>
          <div className="footer-2__bottom wow fadeInUp" data-wow-delay="0.3s">
            <h2 className="title rr-title-anim-2">Let&apos;s Build Together</h2>
          </div>
        </div>
      </footer>

    </InnerPageLayout>
  );
}
