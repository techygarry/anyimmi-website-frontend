import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'IT Solution – Trexa',
  description: 'Empowering Businesses with IT Solutions – scalable, secure, and smart IT services built for modern business needs.',
};

export default function ItSolutionPage() {
  return (
    <InnerPageLayout>
      {/* Hero Section */}
      <section className="hero-section-3__area">
        <div className="hero-section-3__wrapper" style={{ backgroundImage: "url('/assets/imgs/hero/hero-3-bg-shape-01.png')" }}>
          <div className="container rr-container-1800">
            <div className="hero-section-3__wrap">
              <div className="hero-section-3__content">
                <div className="hero-section-3__left wow fadeInUp" data-wow-delay="0.3s">
                  <div className="hero-section-3__time wow fadeInUp" data-wow-delay="0.3s">
                    <span>Showreel/2025</span>
                    <span>01:20:00</span>
                  </div>
                  <div className="hero-section-3__thumb">
                    <img src="/assets/imgs/hero/hero-3_01.jpg" alt="image not found" />
                  </div>
                </div>
                <div className="hero-section-3__right">
                  <div className="hero-section-3__box-shape">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p className="hero-section-3__dec rr-title-anim-2 wow fadeInUp" data-wow-delay="0.3s">At Trexa, we simplify complexity — with
                    solutions in software development, and
                    systems, enterprise tech.</p>
                </div>
              </div>
              <h1 className="hero-section-3__title rr-title-anim-2">Empowering Businesses
                with <span>IT</span> Solutions
                <a href="/contact" className="tr-btn"><img src="/assets/imgs/icon/btn-icon.png" alt="icon not found" />
                  CONTACT WITH US</a>
              </h1>
            </div>
          </div>
          <div className="hero-section-3__social wow fadeInUp" data-wow-delay="0.3s">
            <ul>
              <li><a href="#"><span></span> FACEBOOK</a></li>
              <li><a href="#"><span></span> TWITTER</a></li>
              <li><a href="#"><span></span> INSTAGRAM</a></li>
              <li><a href="#"><span></span> LINKEDIN</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="counter-section-3__area wow fadeInUp" data-lag="0.01" data-wow-delay="0.3s">
        <div className="counter-section-3__wrapper" style={{ backgroundImage: "url('/assets/imgs/feature/counter-01.jpg')" }}>
          <span className="year">Since 2014</span>
          <a className="popup-video icon" href="https://www.youtube.com/watch?v=8oON21G1Bqg">
            <img className="rotate-spin" src="/assets/imgs/shape/intro.png" alt="img" />
          </a>
          <div className="container rr-container-1800">
            <div className="counter-section-3__info">
              <div className="counter-section-3__count">
                <h2><span className="odometer" data-count="98">0</span>%</h2>
                <p>Average clients satisfied
                  and repeating</p>
              </div>
              <div className="counter-section-3__count">
                <h2><span className="odometer" data-count="92">0</span>+</h2>
                <p>Successfully projects done
                  in 24 countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section-3__area section-spacing">
        <div className="container rr-container-1800">
          <div className="row">
            <div className="col-lg-7">
              <div className="about-section-3__wrap">
                <div className="section-heading__wrap_3">
                  <h4 className="section__subtitle wow fadeInUp" data-wow-delay="0.3s"><span></span>About us</h4>
                  <h2 className="section__title rr-title-anim-2">Scalable, secure, and smart
                    IT services built for modern
                    business needs.</h2>
                </div>
                <div className="about-section-3__content">
                  <div className="about-section-3__circle">
                    <span></span>
                    <span></span>
                  </div>
                  <div className="about-section-3__info">
                    <p className="about-section-3__text wow fadeInUp" data-wow-delay="0.3s">We&apos;re a great team of creatives with a strongest
                      capabilities to helping progressive fields achieve
                      their goals. With the best talent on every project
                      done successfully</p>
                    <div className="about-section-3__btn wow fadeInUp" data-wow-delay="0.6s">
                      <a href="#" className="tr-btn"><img src="/assets/imgs/icon/btn-icon.png" alt="icon not found" />
                        EXPLORE
                        OUR SERVICES</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-section-3__thumb rr-ov-hidden">
                <img className="wow fadeInUp" data-wow-delay="0.3s" data-speed="0.8" src="/assets/imgs/about/about-3_01.jpg" alt="image not found" />
              </div>
            </div>
          </div>
          <div className="about-section-3__bottom section-spacing-top">
            <div className="row mb-minus-30">
              <div className="col-lg-4">
                <div className="about-section-3__card wow fadeInUp" data-wow-delay="0.3s">
                  <div className="about-section-3__info">
                    <h3 className="about-section-3__title">OUR MISSION<a href="#"><i className="fa-regular fa-arrow-right"></i></a></h3>
                    <p className="about-section-3__dec">At Trexa, we simplify complex tech
                      to empower innovation &amp; efficiency
                      in every business we serve.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-section-3__card wow fadeInUp" data-wow-delay="0.5s">
                  <div className="about-section-3__info">
                    <h3 className="about-section-3__title">OUR VISION<a href="#"><i className="fa-regular fa-arrow-right"></i></a></h3>
                    <p className="about-section-3__dec">At Trexa, we simplify complex tech
                      to empower innovation &amp; efficiency
                      in every business we serve.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-section-3__card wow fadeInUp" data-wow-delay="0.7s">
                  <div className="about-section-3__info">
                    <h3 className="about-section-3__title">Our Expertise<a href="#"><i className="fa-regular fa-arrow-right"></i></a></h3>
                    <p className="about-section-3__dec">At Trexa, we simplify complex tech
                      to empower innovation &amp; efficiency
                      in every business we serve.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="service-section-3__area rr-bg-primary section-spacing" style={{ backgroundImage: "url('/assets/imgs/service/service-3-bg.png')" }}>
        <div className="container rr-container-1800">
          <div className="service-section-3__top">
            <div className="section-heading__wrap_3">
              <h4 className="section__subtitle wow fadeInUp" data-wow-delay="0.3s"><span></span>our services</h4>
            </div>
          </div>
          <div className="service-section-3__wrapper">
            <div className="service-section-3__item">
              <div className="service-section-3__number">
                <span>01.</span>
              </div>
              <div className="service-section-3__info">
                <h3 className="service-section-3__title wow fadeInUp" data-wow-delay="0.5s"><a href="/services/details">AI and machine learning</a></h3>
                <div className="service-section-3__list wow fadeInUp" data-wow-delay="0.3s">
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
            <div className="service-section-3__item wow fadeInUp" data-wow-delay="0.6s">
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
            <div className="service-section-3__item wow fadeInUp" data-wow-delay="0.7s">
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
            <div className="service-section-3__item wow fadeInUp" data-wow-delay="0.9s">
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

      {/* Who We Are Section */}
      <section className="who-we-are-3__area section-spacing rr-bg-light">
        <div className="container rr-container-1800">
          <div className="who-we-are-3__rwapper">
            <div className="who-we-are-3__top">
              <div className="section-heading__wrap_3">
                <h4 className="section__subtitle"><span></span>Who we are</h4>
                <h2 className="section__title wow fadeInUp" data-wow-delay="0.3s">An award winning venture capital and
                  investment agency in Los Angeles set
                  up in 2015 .</h2>
              </div>
              <div className="about-section-3__content">
                <div className="about-section-3__circle">
                  <span></span>
                  <span></span>
                </div>
                <div className="about-section-3__info">
                  <p className="about-section-3__text wow fadeInUp" data-wow-delay="0.3s">Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore fugiat nulla pariatur. excepteur sinti
                    occaecat cupidatat noni proident, sunt in culpa official
                    deserunt mollit anim id est laborum.</p>
                  <div className="about-section-3__btn wow fadeInUp" data-wow-delay="0.6s">
                    <a href="/contact" className="tr-btn"><img src="/assets/imgs/icon/btn-icon.png"
                        alt="icon not found" /> CONTACT US TODAY</a>
                  </div>
                </div>
              </div>
              <div className="who-we-are-3__author">
                <div className="who-we-are-3__author-thumb">
                  <div className="thumb wow fadeInUp" data-wow-delay="0.3s">
                    <img src="/assets/imgs/blog/author-3_01.png" alt="image not found" />
                  </div>
                  <div className="thumb wow fadeInUp" data-wow-delay="0.6s">
                    <img src="/assets/imgs/blog/author-3_02.png" alt="image not found" />
                  </div>
                  <div className="thumb wow fadeInUp" data-wow-delay="0.9s">
                    <img src="/assets/imgs/blog/author-3_03.png" alt="image not found" />
                  </div>
                  <div className="thumb wow fadeInUp" data-wow-delay="0.9s">
                    <img src="/assets/imgs/blog/author-3_04.png" alt="image not found" />
                  </div>
                </div>
                <h3 className="who-we-are-3__author-text rr-title-anim-2">Meet our certified tech
                  experts</h3>
              </div>
            </div>
            <div className="who-we-are-3__wrap section-spacing-top">
              <div className="who-we-are-3__item">
                <div className="who-we-are-3__title rr-title-anim-2">Experts in IT Innovation</div>
                <p className="who-we-are-3__dec wow fadeInUp" data-wow-delay="0.3s">Nor again is there anyone who loves pursues
                  desires to obtain pain of itself, because upon
                  because occasionally</p>
                <div className="who-we-are-3__list wow fadeInUp" data-wow-delay="0.6s">
                  <ul>
                    <li><img src="/assets/imgs/icon/who-we-are-3_list-icon.png" alt="icon not found" />Smart Automation</li>
                    <li><img src="/assets/imgs/icon/who-we-are-3_list-icon.png" alt="icon not found" />Cloud Infrastructure</li>
                    <li><img src="/assets/imgs/icon/who-we-are-3_list-icon.png" alt="icon not found" />Secure Systems</li>
                    <li><img src="/assets/imgs/icon/who-we-are-3_list-icon.png" alt="icon not found" />Innovative Thinking</li>
                  </ul>
                </div>
              </div>
              <div className="who-we-are-3__thumb rr-ov-hidden">
                <img data-speed="0.9" src="/assets/imgs/blog/blog-3_01.jpg" alt="image not found" />
              </div>
              <div className="who-we-are-3__item">
                <div className="who-we-are-3__title rr-title-anim-2">Experts in IT Innovation</div>
                <p className="who-we-are-3__dec wow fadeInUp" data-wow-delay="0.3s">Nor again is there anyone who loves pursues
                  desires to obtain pain of itself, because upon
                  because occasionally</p>
                <div className="who-we-are-3__list wow fadeInUp" data-wow-delay="0.3s">
                  <ul>
                    <li><img src="/assets/imgs/icon/who-we-are-3_list-icon.png" alt="icon not found" />Smart Automation</li>
                    <li><img src="/assets/imgs/icon/who-we-are-3_list-icon.png" alt="icon not found" />Cloud Infrastructure</li>
                    <li><img src="/assets/imgs/icon/who-we-are-3_list-icon.png" alt="icon not found" />Secure Systems</li>
                    <li><img src="/assets/imgs/icon/who-we-are-3_list-icon.png" alt="icon not found" />Innovative Thinking</li>
                  </ul>
                </div>
              </div>
              <div className="who-we-are-3__thumb rr-ov-hidden wow fadeInUp" data-wow-delay="0.3s">
                <img data-speed="0.3" data-lag="0.2" src="/assets/imgs/blog/blog-3_02.jpg" alt="image not found" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="project-section-3__area rr-bg-primary section-spacing">
        <div className="project-section-3__wrapper">
          <div className="container rr-container-1800">
            <div className="project-section-3__top">
              <div className="section-heading__wrap_3 text_center">
                <h4 className="section__subtitle wow fadeInUp" data-wow-delay="0.3s"><span></span>Featured Work</h4>
                <h2 className="section__title rr-title-anim-2">Empowering Brands with Innovation,
                  Strategy, and Proven IT Solutions for
                  Growth and Impact</h2>
                <div className="project-section-3__button wow fadeInUp" data-wow-delay="0.3s">
                  <a href="/contact" className="tr-btn"><img src="/assets/imgs/icon/btn-icon.png" alt="icon not found" />
                    VIEW ALL PROJECTS</a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper project-section-3__active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="project-section-3__item wow fadeInUp" data-wow-delay="0.3s">
                  <div className="project-section-3__thumb">
                    <img src="/assets/imgs/project/project-3_01.jpg" alt="image not found" />
                    <div className="project-section-3__btn">
                      <a href="/portfolio/details">See Details</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="project-section-3__item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="project-section-3__thumb">
                    <img src="/assets/imgs/project/project-3_02.jpg" alt="image not found" />
                    <div className="project-section-3__btn">
                      <a href="/portfolio/details">See Details</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="project-section-3__item wow fadeInUp" data-wow-delay="0.7s">
                  <div className="project-section-3__thumb">
                    <img src="/assets/imgs/project/project-3_03.jpg" alt="image not found" />
                    <div className="project-section-3__btn">
                      <a href="/portfolio/details">See Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-section-3__pagination"></div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section-3__area testimonial-section-3__bg section-spacing" style={{ backgroundImage: "url('/assets/imgs/shape/testimonial-3-bg-shape.png')" }}>
        <div className="testimonial-section-3__wrapper">
          <div className="container rr-container-1800">
            <div className="testimonial-section-3__top">
              <div className="section-heading__wrap_3">
                <h4 className="section__subtitle wow fadeInUp" data-wow-delay="0.3s"><span></span>WHAT OUR CLIENT SAY</h4>
                <h2 className="section__title rr-title-anim-2 wow fadeInUp" data-wow-delay="0.3s">Discover how our IT solutions have
                  transformed client success stories</h2>
              </div>
            </div>
          </div>
          <div className="swiper testimonial-section-3__active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-section-3__item wow fadeInUp" data-wow-delay="0.3s">
                  <div className="testimonial-section-3__shape">
                    <img src="/assets/imgs/icon/testimonial-3-shape.png" alt="shape not found" />
                  </div>
                  <div className="testimonial-section-3__quate">
                    <img src="/assets/imgs/icon/testimonial-3-icon.png" alt="icon not found" />
                  </div>
                  <p className="testimonial-section-3__dec">Duis aute irure dolor in reprehenderit in voluptate velit in
                    esse cillum dolore eu fugiat nulla pariatur. excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim laborum.</p>
                  <div className="testimonial-section-3__author">
                    <h3 className="name">David Miller</h3>
                    <p className="position">CEO, TechNova Solutions</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-section-3__item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="testimonial-section-3__shape">
                    <img src="/assets/imgs/icon/testimonial-3-shape.png" alt="shape not found" />
                  </div>
                  <div className="testimonial-section-3__quate">
                    <img src="/assets/imgs/icon/testimonial-3-icon.png" alt="icon not found" />
                  </div>
                  <p className="testimonial-section-3__dec">Duis aute irure dolor in reprehenderit in voluptate velit in
                    esse cillum dolore eu fugiat nulla pariatur. excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim laborum.</p>
                  <div className="testimonial-section-3__author">
                    <h3 className="name">David Miller</h3>
                    <p className="position">CEO, TechNova Solutions</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-section-3__item">
                  <div className="testimonial-section-3__shape">
                    <img src="/assets/imgs/icon/testimonial-3-shape.png" alt="shape not found" />
                  </div>
                  <div className="testimonial-section-3__quate">
                    <img src="/assets/imgs/icon/testimonial-3-icon.png" alt="icon not found" />
                  </div>
                  <p className="testimonial-section-3__dec">Duis aute irure dolor in reprehenderit in voluptate velit in
                    esse cillum dolore eu fugiat nulla pariatur. excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim laborum.</p>
                  <div className="testimonial-section-3__author">
                    <h3 className="name">David Miller</h3>
                    <p className="position">CEO, TechNova Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results">
        <div className="container rr-container-1800">
          <div className="results__inner">
            <div className="results__media">
              <img src="/assets/imgs/results/results.jpg" alt="image" />
              <div className="results__btn wow fadeInUp" data-wow-delay="0.3s">
                <a href="/contact" className="tr-btn"><img src="/assets/imgs/icon/btn-icon.png" alt="icon not found" />
                  CONTACT US TODAY</a>
              </div>
              <a className="popup-video icon" href="https://www.youtube.com/watch?v=8oON21G1Bqg">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 25 30" fill="none">
                  <path
                    d="M24.4986 15.8662C25.1656 15.4814 25.1656 14.5186 24.4986 14.1338L1.49972 0.865225C0.833057 0.48061 0 0.961752 0 1.73141V28.2686C0 29.0382 0.833055 29.5194 1.49972 29.1348L24.4986 15.8662Z"
                    fill="black" />
                </svg>
              </a>
            </div>
            <div className="results__content">
              <h3 className="title rr-title-anim-2">Results in real <br />
                numbers</h3>
              <p className="desc wow fadeInUp" data-wow-delay="0.3s">Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore fugiat nulla pariatur. excepteur sinte
                occaecat cupidatat non proident,</p>
              <div className="results__warpper">
                <div className="results__item">
                  <h2 className="number"> <span className="odometer" data-count="68">0</span> </h2>
                  <p>Episerver Certified Developers</p>
                </div>
                <div className="results__item">
                  <h2 className="number"> <span className="odometer" data-count="45">0</span>%</h2>
                  <p>Certified Microsoft Professionals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-3 rr-bg-primary section-spacing">
        <div className="container rr-container-1800">
          <div className="section-heading__wrap_3 text_center">
            <h4 className="section__subtitle wow fadeInUp" data-wow-delay="0.3s"><span></span>Who we are</h4>
            <h2 className="section__title rr-title-anim-2">More than capital—real people, real <br />
              support : Your partners in the capital <br />
              trenches.</h2>
          </div>
          <div className="swiper team-3__active">
            <div className="swiper-wrapper">
              {[1, 2, 3, 4, 5].map((i) => (
                <div className="swiper-slide" key={i}>
                  <div className={`team-3__item${i === 1 ? ' wow fadeInUp' : ''}`} data-wow-delay={i === 1 ? '0.3s' : undefined}>
                    <div className="media">
                      <img src="/assets/imgs/tema-3/team-3.jpg" alt="image" />
                    </div>
                    <p>Design Director <br /> &amp; CEO</p>
                    <h4 className="title"><a href="#">Ravi Mehra</a></h4>
                    <ul>
                      <li><a href="#"><span></span> FACEBOOK</a></li>
                      <li><a href="#"><span></span> LINKEDIN</a></li>
                      <li><a href="#"><span></span> INSTAGRAM</a></li>
                      <li><a href="#"><span></span> DRIBBBLE</a></li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <div className="brand-3 rr-bg-primary section-spacing rr-ov-hidden wow fadeInUp" data-wow-delay="0.3s">
        <div className="container rr-container-1800">
          <div className="brand-3__warpper">
            <div className="brand-3__slider-1">
              <ul>
                <li><img src="/assets/imgs/band/band-6.png" alt="image" /></li>
                <li><img src="/assets/imgs/band/band-7.png" alt="image" /></li>
                <li><img src="/assets/imgs/band/band-8.png" alt="image" /></li>
                <li><img src="/assets/imgs/band/band-9.png" alt="image" /></li>
                <li><img src="/assets/imgs/band/band-6.png" alt="image" /></li>
                <li><img src="/assets/imgs/band/band-7.png" alt="image" /></li>
                <li><img src="/assets/imgs/band/band-8.png" alt="image" /></li>
                <li><img src="/assets/imgs/band/band-9.png" alt="image" /></li>
              </ul>
            </div>
            <div className="brand-3__slider-2">
              <ul>
                <li><img src="/assets/imgs/band/band-10.png" alt="image" /></li>
                <li><img src="/assets/imgs/band/band-11.png" alt="image" /></li>
                <li><img src="/assets/imgs/band/band-12.png" alt="image" /></li>
                <li><img src="/assets/imgs/band/band-10.png" alt="image" /></li>
                <li><img src="/assets/imgs/band/band-11.png" alt="image" /></li>
                <li><img src="/assets/imgs/band/band-12.png" alt="image" /></li>
                <li><img src="/assets/imgs/band/band-10.png" alt="image" /></li>
                <li><img src="/assets/imgs/band/band-11.png" alt="image" /></li>
                <li><img src="/assets/imgs/band/band-12.png" alt="image" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="blog-3__area section-spacing">
        <div className="container rr-container-1800">
          <div className="section-heading__wrap_3">
            <div className="text">
              <h4 className="section__subtitle wow fadeInUp" data-wow-delay="0.3s"><span></span>Latest Insights</h4>
              <h2 className="section__title wow fadeInUp" data-wow-delay="0.5s">Insights from our experts &amp; news <br />
                from the industry worldwide</h2>
            </div>
            <div className="btn-wrap wow fadeInUp" data-wow-delay="0.3s">
              <a href="/contact" className="tr-btn"><img src="/assets/imgs/icon/btn-icon.png" alt="icon not found" />
                CONTACT WITH US</a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="blog-3__media wow fadeInUp" data-wow-delay="0.3s">
                <img src="/assets/imgs/blog/blog-3_03.jpg" alt="img" />
                <a href="#">See Details</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-3__content">
                {[
                  { delay: '0.3s' },
                  { delay: '0.6s' },
                  { delay: '0.7s' },
                  { delay: '0.8s' },
                ].map((item, idx) => (
                  <div className="blog-3__item wow fadeInUp" data-wow-delay={item.delay} key={idx}>
                    <ul className="meta-date">
                      <li>01 Jan 2025</li>
                      <li><span>IT Consulting2</span></li>
                    </ul>
                    <h3 className="title"><a href="#">Cybersecurity Essentials Protecting Business <br />
                        from Emerging Threats</a></h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section-3__area">
        <div className="footer-section-3__wrapper">
          <div className="container rr-container-1800">
            <div className="footer-section-3__top">
              <div className="footer-section-3__copyright wow fadeInUp" data-wow-delay="0.3s">
                <p>Copyright &copy; 2025 <a href="#">Trexa,</a> All Rights Reserved.</p>
              </div>
              <div className="footer-section-3__social wow fadeInUp" data-wow-delay="0.5s">
                <ul>
                  <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="http://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="http://www.pintrest.com/"><i className="fa-brands fa-pinterest-p"></i></a></li>
                </ul>
              </div>
              <div className="footer-section-3__menu wow fadeInUp" data-wow-delay="0.3s">
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="footer-section-3__title rr-title-anim-2">trexa</h2>
        </div>
      </footer>
    </InnerPageLayout>
  );
}
