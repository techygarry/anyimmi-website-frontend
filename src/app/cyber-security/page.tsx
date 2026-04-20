import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Cyber Security – Trexa',
  description: 'Trusted cyber security agency committed to keeping your digital world safe with advanced security strategies.',
};

const StarIcon = () => (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.00027 11.4167L4.54194 13.5C4.38916 13.5972 4.22944 13.6389 4.06277 13.625C3.89611 13.6111 3.75027 13.5556 3.62527 13.4583C3.50027 13.3611 3.40305 13.2397 3.33361 13.0942C3.26416 12.9486 3.25027 12.7853 3.29194 12.6042L4.20861 8.66667L1.14611 6.02083C1.00722 5.89583 0.920552 5.75333 0.886107 5.59333C0.851663 5.43333 0.861941 5.27722 0.916941 5.125C0.971941 4.97278 1.05527 4.84778 1.16694 4.75C1.27861 4.65222 1.43139 4.58972 1.62527 4.5625L5.66694 4.20833L7.22944 0.5C7.29888 0.333333 7.40666 0.208333 7.55277 0.125C7.69889 0.0416665 7.84805 0 8.00027 0C8.1525 0 8.30166 0.0416665 8.44777 0.125C8.59388 0.208333 8.70166 0.333333 8.77111 0.5L10.3336 4.20833L14.3753 4.5625C14.5697 4.59028 14.7225 4.65278 14.8336 4.75C14.9447 4.84722 15.0281 4.97222 15.0836 5.125C15.1392 5.27778 15.1497 5.43417 15.1153 5.59417C15.0808 5.75417 14.9939 5.89639 14.8544 6.02083L11.7919 8.66667L12.7086 12.6042C12.7503 12.7847 12.7364 12.9481 12.6669 13.0942C12.5975 13.2403 12.5003 13.3617 12.3753 13.4583C12.2503 13.555 12.1044 13.6106 11.9378 13.625C11.7711 13.6394 11.6114 13.5978 11.4586 13.5L8.00027 11.4167Z" fill="#FF8800" />
  </svg>
);

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="45" viewBox="0 0 56 45" fill="none">
    <path d="M23.2432 3.10449C15.7612 9.31429 13.5586 13.7662 13.5586 16.9238C13.5587 18.1837 13.9024 19.0129 14.5068 19.583C15.0732 20.117 15.8251 20.3694 16.4561 20.5986H16.457C20.8708 22.29 24.1807 26.8375 24.1807 32.166C24.1804 38.5125 19.2839 44.5 12.4189 44.5C6.97047 44.4999 0.500059 40.2881 0.5 31.2031C0.5 21.8392 7.99088 10.3195 21.7256 0.708984L23.2432 3.10449ZM54.251 3.10645C46.9971 9.31229 44.7207 13.7673 44.7207 16.9238C44.7208 18.1745 45.0392 19.0022 45.6221 19.5752C46.1726 20.1163 46.9107 20.3687 47.5459 20.5996V20.6006C52.1199 22.2954 55.5 26.8451 55.5 32.166C55.4998 38.5058 50.5295 44.4999 43.5811 44.5C38.1248 44.5 31.5069 40.2809 31.5068 31.2031C31.5068 21.842 39.1464 10.3255 52.7354 0.712891L54.251 3.10645Z" stroke="white" />
  </svg>
);

const ArrowBtn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <g clipPath="url(#clip_arrow_btn)">
      <path d="M23.2467 7.6902C19.4717 11.5504 12.8898 11.238 8.5459 6.98999" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M24.2746 22.3718C19.9319 18.1249 19.4704 11.5515 23.2465 7.69024" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M23.246 7.69018L7.86426 23.4192" stroke="black" strokeWidth="2" strokeMiterlimit="10" />
    </g>
    <defs>
      <clipPath id="clip_arrow_btn">
        <rect width="22" height="22" fill="white" transform="translate(0 15.729) rotate(-45.6395)" />
      </clipPath>
    </defs>
  </svg>
);

export default function CyberSecurityPage() {
  return (
    <InnerPageLayout>
      {/* Header area start */}
      <header className="header-area header-3">
        <div className="header-main">
          <div className="container rr-container-1800">
            <div className="header-area__inner">
              <div className="header__logo">
                <a href="/">
                  <img src="/assets/imgs/logo/logo-white7.png" className="normal-logo" alt="Site Logo" />
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
                <div className="header__search d-none d-xl-flex">
                  <button className="search-open-btn">search<i className="fa-regular fa-magnifying-glass"></i></button>
                </div>
                <div className="header__navicon">
                  <div className="side-toggle">
                    <a className="bar-icon" href="#">
                      <span></span>
                      <span></span>
                      <span></span>
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

        {/* Intro area start */}
        <section className="intro-area7 bg-img overflow-hidden"
          style={{ backgroundImage: "url('/assets/imgs/home-7/intro/intro-area7-bg.png')" }}>
          <div className="container">
            <div className="row d-flex justify-content-between align-items-center">
              {/* LEFT */}
              <div className="col-xl-6 col-12 intro-area7__content">
                <h2 className="intro-area7__title rr-title-anim-2">
                  TRUSTED
                  <span className="intro-area7__play">
                    <img src="/assets/imgs/home-7/intro/intro-area7-video-thumb.png" alt="thumb" />
                    <span className="intro-area7__play-icon">
                      <i className="bi bi-play-fill"></i>
                    </span>
                  </span>
                  <span className="intro-area7__highlight">CYBER</span>
                  SECURITY
                </h2>
                <div className="row">
                  <div className="intro-area7__stats">
                    <div className="col-6 intro-area7__stat">
                      <h3 className="intro-area7__stat-number"><span className="odometer" data-count="98">0</span>%</h3>
                      <p className="intro-area7__stat-text">Average clients satisfied and repeating</p>
                    </div>
                    <div className="col-6 intro-area7__stat">
                      <h3 className="intro-area7__stat-number"><span className="odometer" data-count="90">0</span>+</h3>
                      <p className="intro-area7__stat-text">Successfully projects done in 24 countries</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="col-xl-5 col-12 intro-area7__images">
                <div className="intro-area7__image-stack rr-ov-hidden">
                  <img data-speed="0.8" src="/assets/imgs/home-7/intro/intro-area7-thumb.png" alt="Hacker"
                    className="intro-area7__image intro-area7__image--main" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Intro area end */}

        {/* Clients slider */}
        <div className="clients-line7 overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="clients-line7__slider swiper">
                  <div className="swiper-wrapper">
                    {/* 1 */}
                    <div className="swiper-slide clients-line7__item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <g clipPath="url(#clip0_320_516)">
                          <path d="M26.4 0H17.6V13.2695C17.5629 15.6677 15.6074 17.6 13.2006 17.6H0V26.4H9.55492C11.8888 26.4 14.1272 25.4728 15.7774 23.8226L23.8226 15.7774C25.4728 14.1272 26.4 11.8888 26.4 9.55492V0Z" fill="black" />
                          <path d="M17.5996 44H26.3996V30.7305C26.4367 28.3322 28.3923 26.4 30.7991 26.4H43.9996V17.6H34.4447C32.1108 17.6 29.8724 18.5272 28.2222 20.1774L20.177 28.2226C18.5268 29.8728 17.5996 32.1112 17.5996 34.445V44Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_320_516">
                            <rect width="44" height="44" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    {/* 4 */}
                    <div className="swiper-slide clients-line7__item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="78" height="32" viewBox="0 0 78 32" fill="none">
                        <g clipPath="url(#clip0_320_534)">
                          <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" fill="black" />
                          <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" fill="black" />
                          <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_320_534">
                            <rect width="78" height="32" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    {/* 8 */}
                    <div className="swiper-slide clients-line7__item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="49" height="40" viewBox="0 0 49 40" fill="none">
                        <g clipPath="url(#clip0_320_521)">
                          <path d="M37.3947 40C43.8275 39.8689 49 34.6073 49 28.1389C49 24.9931 47.7512 21.9762 45.5282 19.7518L25.7895 0V12.2771C25.7895 14.3303 26.6046 16.2995 28.0556 17.7514L32.6795 22.3784L32.6921 22.3907L40.4452 30.149C40.697 30.4009 40.697 30.8094 40.4452 31.0613C40.1935 31.3133 39.7852 31.3133 39.5335 31.0613L36.861 28.3871H12.139L9.46655 31.0613C9.21476 31.3133 8.80654 31.3133 8.55476 31.0613C8.30297 30.8094 8.30297 30.4009 8.55475 30.149L16.3079 22.3907L16.3205 22.3784L20.9444 17.7514C22.3954 16.2995 23.2105 14.3303 23.2105 12.2771V0L3.47175 19.7518C1.24882 21.9762 0 24.9931 0 28.1389C0 34.6073 5.17252 39.8689 11.6053 40H37.3947Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_320_521">
                            <rect width="49" height="40" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About area start */}
        <section className="about-area7 text-white section-spacing overflow-hidden">
          <div className="container">
            <div className="row d-flex align-items-start justify-content-between">
              <div className="col-xl-3">
                <span className="about-area7__eyebrow">// ABOUT COMPANY</span>
              </div>
              <div className="col-xl-9">
                <div className="about-area7__content">
                  <h2 className="about-area7__title wow fadeInUp" data-wow-delay="0.3s">
                    We are a dynamic cybersecurity agency committed to keeping your digital world safe.
                    Whether enterprise or just starting your online journey, we have the expertise and advanced
                    security strategies to protect your data, defend your brand,
                  </h2>
                  <div className="about-area7__cta-group mt-4 d-flex align-items-center gap-3">
                    <a href="#" className="rr-btn-green btn-blue">
                      <span className="btn-wrap">
                        <span className="text-one"><i className="fa-solid fa-arrow-turn-down-right"></i>CONTACT WITH US</span>
                        <span className="text-two"><i className="fa-solid fa-arrow-turn-down-right"></i>CONTACT WITH US</span>
                      </span>
                    </a>
                    <a href="#" className="rr-btn-green btn-blue">
                      <span className="btn-wrap">
                        <span className="text-one"><i className="fa-solid fa-arrow-turn-down-right"></i>CONTACT WITH US</span>
                        <span className="text-two"><i className="fa-solid fa-arrow-turn-down-right"></i>CONTACT WITH US</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="about_area7__stat-visual section-spacing pb-0 overflow-hidden">
              <div className="row g-4 align-items-stretch">
                <div className="col-12 col-lg-3">
                  <div className="stats-card">
                    <div className="stats-card__inner">
                      <div className="stats-card__number">17</div>
                      <div className="stats-card__label">Years of experience</div>
                      <div className="stats-card__badges mt-3">
                        <div className="stats-card__avatars">
                          <span className="stats-card__avatar"><img src="/assets/imgs/home-7/about/about-author1.png" alt="thumb" /></span>
                          <span className="stats-card__avatar"><img src="/assets/imgs/home-7/about/about-author2.png" alt="thumb" /></span>
                          <span className="stats-card__avatar"><img src="/assets/imgs/home-7/about/about-author3.png" alt="thumb" /></span>
                          <span className="stats-card__avatar"><i className="fa-solid fa-plus"></i></span>
                        </div>
                        <div className="stats-card__reviews">
                          <strong>More than 25k</strong>Clients reviews
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-9">
                  <figure className="about-area7__visual h-100 rr-ov-hidden">
                    <img data-speed="0.9" src="/assets/imgs/home-7/about/about-thumb.jpg" alt="thumb" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cyber Services */}
        <section className="cyber-services7 pt-0 overflow-hidden">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-12">
                <p className="cyber-services7__subtitle">// OUR CYBERSECURITY SERVICES</p>
                <h2 className="section-title">
                  Advanced Threat Protection That Safeguards
                  <br />
                  <span>Networks, Applications, and Sensitive Data</span> from
                  <br />
                  Modern Cyber Threats
                </h2>
              </div>
            </div>
            <div className="row cyber-services7__cards">
              {/* Card 1 */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="cyber-services7__card wow fadeInUp" data-wow-delay="0.5s">
                  <div className="cyber-services7__icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <path d="M59.1198 6.896H20.8798L1.75977 40.0001L20.8798 73.1041H59.1198L78.2398 40.0001L59.1198 6.896Z" stroke="white" strokeWidth="0.8" strokeMiterlimit="10" />
                      <path d="M23.4558 8.62394C23.6318 8.44794 40.8638 8.33594 41.1358 8.33594C41.4078 8.33594 58.6398 8.44794 58.7358 8.62394C58.8318 8.79994 76.0158 38.48 76.0158 38.752C76.0158 39.024 58.9918 68.704 58.8158 68.88C58.6398 69.056 41.4078 69.152 41.2158 69.152C41.0238 69.152 23.7118 69.056 23.6158 68.88C23.5198 68.704 6.17578 39.024 6.17578 38.752C6.17578 38.48 23.2798 8.79994 23.4558 8.62394Z" stroke="white" strokeWidth="0.8" strokeMiterlimit="10" />
                    </svg>
                  </div>
                  <h3 className="cyber-services7__card-title">Network Security &amp; Protection</h3>
                  <p className="cyber-services7__card-text">
                    Network Protection Service is designed to your organization&apos;s infrastructure from unauthorized access.
                  </p>
                  <button className="cyber-services7__arrow" aria-label="Open service">
                    <ArrowBtn />
                  </button>
                </div>
              </div>
              {/* Card 2 highlight */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="cyber-services7__card cyber-services7__card--highlight wow fadeInUp" data-wow-delay="0.6s">
                  <div className="cyber-services7__icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <path d="M78.2402 52.8H26.2402V0.751953H42.5922C52.0466 0.751953 61.114 4.50771 67.7993 11.193C74.4846 17.8782 78.2402 26.9454 78.2402 36.4V52.8Z" stroke="white" strokeWidth="0.688" strokeMiterlimit="10" />
                      <path d="M36.0476 78.3999H1.59961V43.9519H16.8316C21.9238 43.9519 26.8073 45.9748 30.4081 49.5754C34.0087 53.1761 36.0316 58.0597 36.0316 63.1519L36.0476 78.3999Z" stroke="white" strokeWidth="0.8" strokeMiterlimit="10" />
                    </svg>
                  </div>
                  <h3 className="cyber-services7__card-title">Threat Intelligence &amp; Analysis</h3>
                  <p className="cyber-services7__card-text">
                    Network Protection Service is designed to your organization&apos;s infrastructure from unauthorized access.
                  </p>
                  <button className="cyber-services7__arrow" aria-label="Open service">
                    <ArrowBtn />
                  </button>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="cyber-services7__card wow fadeInUp" data-wow-delay="0.7s">
                  <div className="cyber-services7__icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <path d="M32.3037 9.59997C23.8397 7.15197 11.9517 1.98397 7.69569 10.544C3.03969 19.9519 11.2797 28.7999 16.6557 35.7599C20.3517 41.0399 19.0397 45.5519 14.1437 50.7039C3.19969 62.1759 8.12769 77.5359 24.2397 77.7919C31.2637 77.7919 37.7757 74.4639 43.9677 71.1359C55.8397 64.7359 63.1677 69.4559 70.8957 63.9039C76.0797 60.2079 72.4157 50.7679 70.2717 45.0879C68.4429 40.338 68.3242 35.0999 69.9357 30.2719C71.5357 24.1599 72.5597 14.272 65.8077 11.216C62.7357 10.064 59.1997 11.392 55.9997 10.352C52.0317 9.02397 50.0477 4.33597 46.1597 2.78397C38.5917 -0.256033 38.3997 11.2 32.3037 9.59997Z" stroke="white" strokeWidth="0.8" strokeMiterlimit="10" />
                      <path d="M53.2643 49.936C58.6635 49.936 63.0403 45.5592 63.0403 40.16C63.0403 34.7608 58.6635 30.384 53.2643 30.384C47.8651 30.384 43.4883 34.7608 43.4883 40.16C43.4883 45.5592 47.8651 49.936 53.2643 49.936Z" stroke="white" strokeWidth="0.464" strokeMiterlimit="10" />
                    </svg>
                  </div>
                  <h3 className="cyber-services7__card-title">Endpoint Detection &amp; Response</h3>
                  <p className="cyber-services7__card-text">
                    Network Protection Service is designed to your organization&apos;s infrastructure from unauthorized access.
                  </p>
                  <button className="cyber-services7__arrow" aria-label="Open service">
                    <ArrowBtn />
                  </button>
                </div>
              </div>
              {/* Card 4 */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="cyber-services7__card wow fadeInUp" data-wow-delay="0.9s">
                  <div className="cyber-services7__icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="99" height="72" viewBox="0 0 99 72" fill="none">
                      <path opacity="0.1" d="M97.8965 36.0242C97.8965 32.5457 95.0766 29.7258 91.5981 29.7258C88.1197 29.7258 85.2998 32.5457 85.2998 36.0242C85.2998 39.5026 88.1197 42.3225 91.5981 42.3225C95.0766 42.3225 97.8965 39.5026 97.8965 36.0242Z" stroke="white" strokeWidth="0.896" strokeMiterlimit="10" />
                      <path d="M70.9998 36.0239C70.9998 16.6939 55.3299 1.02393 35.9999 1.02393C16.67 1.02393 1 16.6939 1 36.0239C1 55.3539 16.67 71.0239 35.9999 71.0239C55.3299 71.0239 70.9998 55.3539 70.9998 36.0239Z" stroke="white" strokeWidth="0.896" strokeMiterlimit="10" />
                    </svg>
                  </div>
                  <h3 className="cyber-services7__card-title">Cloud Security Posture</h3>
                  <p className="cyber-services7__card-text">
                    Network Protection Service is designed to your organization&apos;s infrastructure from unauthorized access.
                  </p>
                  <button className="cyber-services7__arrow" aria-label="Open service">
                    <ArrowBtn />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="industries7 overflow-hidden">
          <div className="container">
            <div className="row align-items-center justify-content-between gy-5">
              {/* LEFT */}
              <div className="col-lg-5">
                <div className="industries7__left section-spacing">
                  <p className="industries7__eyebrow">// OUR INDUSTRIES</p>
                  <h2 className="industries7__title wow fadeInUp" data-wow-delay="0.3s">
                    we don&apos;t just promise security.<br />
                    we deliver it with confidence &amp;<br />
                    <u>trust always secure.</u>
                  </h2>
                  <p className="industries7__lead rr-title-anim-2">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
                  </p>
                  <a href="#" className="rr-btn-green btn-blue wow fadeInUp" data-wow-delay="0.3s">
                    <span className="btn-wrap">
                      <span className="text-one"><i className="fa-solid fa-arrow-turn-down-right"></i>CONTACT WITH US</span>
                      <span className="text-two"><i className="fa-solid fa-arrow-turn-down-right"></i>CONTACT WITH US</span>
                    </span>
                  </a>
                  <div className="row g-3 industries7__stats">
                    <div className="col-sm-6">
                      <div className="industries7__stat-card wow fadeInUp" data-wow-delay="0.3s">
                        <div className="industries7__stat-num"><span className="odometer" data-count="98"> </span>%</div>
                        <div className="industries7__stat-text">Cyber security experts across networks</div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="industries7__stat-card wow fadeInUp" data-wow-delay="0.3s">
                        <div className="industries7__stat-num"><span className="odometer" data-count="15">0 </span>+</div>
                        <div className="industries7__stat-text">years of proven industry experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="col-lg-6">
                <div className="industries7__right">
                  <div className="industries7__panel">
                    <h3 className="industries7__panel-title wow fadeInUp" data-wow-delay="0.3s">Security growth rate</h3>
                    <p className="industries7__panel-desc wow fadeInUp" data-wow-delay="0.4s">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt
                    </p>
                    <div className="industries7__panel-chart wow fadeInUp" data-wow-delay="0.3s">
                      <img src="/assets/imgs/home-7/industri/indutri-thumb.png" alt="chart graphic" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project area start */}
        <div className="project-area7 section-spacing overflow-hidden">
          <div className="container-1600">
            <div className="section-top">
              <div className="choose-us__eyebrow wow fadeInUp" data-wow-delay="0.3s">Our Latest Projects</div>
              <h2 className="choose-us__title wow fadeInUp" data-wow-delay="0.3s">
                Our Cyber Security Projects: Protecting What
                Matters Most Every Day with Advanced Solutions
                and Expert Care
              </h2>
            </div>
            <div className="row gy-4 gy-xl-0">
              <div className="col-xl-12">
                {['5_1', '5_2', '5_3'].map((n, i) => (
                  <div className="project-area7__card section-item rr-ov-hidden" key={i}>
                    <div className="project-area7__card-content">
                      <div className="project-area7__card-year">2025</div>
                      <a href="#" className="project-area7__card-title">Real-Time Threat Defense Solutions</a>
                      <p className="project-area7__card-desc">
                        Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem
                      </p>
                      <div className="project-area7__card-tags">
                        <span className="project-area7__card-tag">Secure Wave</span>
                        <span className="project-area7__card-tag">Shield</span>
                        <span className="project-area7__card-tag">Cloud Guard</span>
                      </div>
                    </div>
                    <div className="project-area7__card-thumb">
                      <img src={`/assets/imgs/home-7/project/project-thumb${n}.jpg`} alt="thumb" />
                      <a href="#" className="project-area7__card-btn">See Details</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Project area end */}

        {/* Steps area start */}
        <div className="wp-area7 section-spacing overflow-hidden">
          <div className="rr-container-1800 container">
            <div className="row align-items-center">
              <div className="col">
                <div className="wp-area7__top">
                  <span className="wp-area7__top-subtitle">// OUR PROCESS</span>
                  <div className="wp-area7__top-right">
                    <h2 className="wp-area7__top-title">
                      We are a dynamic cybersecurity agency committed to keeping your digital world safe.
                      <u>Whether enterprise or just starting your online journey,</u>
                    </h2>
                    <div className="wp-area7__top-buttons">
                      <a href="#" className="rr-btn-green btn-blue">
                        <span className="btn-wrap">
                          <span className="text-one"><i className="fa-solid fa-arrow-turn-down-right"></i>CONTACT WITH US</span>
                          <span className="text-two"><i className="fa-solid fa-arrow-turn-down-right"></i>CONTACT WITH US</span>
                        </span>
                      </a>
                      <a href="#" className="rr-btn-green btn-black">
                        <span className="btn-wrap">
                          <span className="text-one"><i className="fa-solid fa-arrow-turn-down-right"></i>MORE ABOUT US</span>
                          <span className="text-two"><i className="fa-solid fa-arrow-turn-down-right"></i>MORE ABOUT US</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="wp-area7__thumb section-spacing rr-ov-hidden">
                  <a className="popup-video icon" href="https://www.youtube.com/watch?v=8oON21G1Bqg">
                    <img className="rotate-spin" src="/assets/imgs/home-7/wp/wp-video.png" alt="img" />
                  </a>
                  <img data-speed="0.9" src="/assets/imgs/home-7/wp/wcu-thumb1_1.jpg" alt="thumb" />
                </div>
                <div className="row gy-4 gy-xl-0">
                  {[
                    { step: 'STEP 01', title: 'Create an account' },
                    { step: 'STEP 02', title: 'Install our firewall' },
                    { step: 'STEP 03', title: 'Setup your network' },
                    { step: 'STEP 04', title: 'Be protected' },
                  ].map((item, i) => (
                    <div className="col-xl-3 col-md-6" key={i}>
                      <div className="wp-area7__card wow fadeInUp" data-wow-delay={`${0.4 + i * 0.2}s`}>
                        <div className="wp-area7__card-step">{item.step}</div>
                        <h3 className="wp-area7__card-title">{item.title}</h3>
                        <p className="wp-area7__card-desc">
                          Duis aute irure dolor in reprehenderit in velit cillum dolore fugiat nulla pariatur. excepteur sint
                          occaecat cupidatat
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Steps area end */}

        {/* Testimonial area start */}
        <div className="testimonial-area7 section-spacing bg-img overflow-hidden"
          style={{ backgroundImage: "url('/assets/imgs/home-7/testimonial/testimonial-bg.png')" }}>
          {/* Marquee */}
          <div className="marque-section6 rr-ov-hidden">
            <div className="marquee-wrapper text-slider-1">
              <div className="marquee-inner to-left">
                <ul className="marqee-list d-flex">
                  <li className="marquee-item">
                    {Array(16).fill(null).map((_, i) => (
                      <span key={i} className={i % 2 === 0 ? 'text-slider-1 text-uppercase' : 'text-slider-2 text-uppercase'}>TESTIMONIALS</span>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rr-container-1800 container">
            <div className="row gy-4 gy-xl-0">
              {[
                { delay: '0.4s', img: 'testimonial-author5_1.jpg' },
                { delay: '0.6s', img: 'testimonial-author5_2.jpg' },
                { delay: '0.8s', img: 'testimonial-author5_3.jpg' },
                { delay: '0.9s', img: 'testimonial-author5_4.jpg' },
              ].map((item, i) => (
                <div className="col-xl-3" key={i}>
                  <div className="testimonial-area7__card wow fadeInUp" data-wow-delay={item.delay}>
                    <div className="testimonial-area7__card-rating">
                      <span className="testimonial-area7__card-rating-number">5.0</span>
                      <span className="testimonial-area7__card-stars">
                        <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                      </span>
                    </div>
                    <p className="testimonial-area7__card-quote">
                      On the other hand we denounce righteous and dislike men who are so beguiled animi
                      untrammelled soluta charm of pleasure of the moment so blinded by desire that they
                      foresee the pain and trouble
                    </p>
                    <div className="testimonial-area7__card-author">
                      <div className="testimonial-area7__card-author-img">
                        <img src={`/assets/imgs/home-7/testimonial/${item.img}`} alt="author" />
                      </div>
                      <div className="testimonial-area7__card-author-info">
                        <h4 className="testimonial-area7__card-author-name">Nicholls Jhone</h4>
                        <span className="testimonial-area7__card-author-position">Redwood Technologies</span>
                      </div>
                    </div>
                    <span className="icon">
                      <QuoteIcon />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Testimonial area end */}

        {/* Cta area start */}
        <div className="cta-area7 section-spacing overflow-hidden">
          <img className="cta-area7__shape1" src="/assets/imgs/home-7/cta/cta-shape5_1.png" alt="shape" />
          <img className="cta-area7__shape2" src="/assets/imgs/home-7/cta/cta-shape5_2.png" alt="shape" />
          <div className="rr-container-1800 container">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-8">
                <div className="cta-area7__content">
                  <p className="cta-area7__content-title">When you choose Trexa&reg; Security, you
                    gain more than just guards you gain peace
                    of mind, proactive protection always one
                    step ahead.</p>
                  <a href="#" className="rr-btn-border btn-purple">
                    <span className="text">CONTACT US TODAY</span>
                    <span className="icon"><i className="fa-regular fa-arrow-right"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Choose Us */}
        <section className="choose-us section-spacing overflow-hidden">
          <div className="rr-container-1800 container">
            <div className="row g-4 align-items-start justify-content-between">
              <div className="col-12 col-xl-5 col-md-6">
                <div className="choose-us__eyebrow rr-title-anim-2">WHY CHOOSE US</div>
                <h2 className="choose-us__title">
                  Start protecting your online
                  presence &ndash; here&apos;s why we&apos;re
                  your best choice
                </h2>
                <p className="choose-us__desc wow fadeInUp" data-wow-delay="0.4s">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed
                  quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt in
                  neque porro quisquam est, qui dolorem.
                </p>
                <a href="#" className="rr-btn-green btn-blue">
                  <span className="btn-wrap">
                    <span className="text-one"><i className="fa-solid fa-arrow-turn-down-right"></i>CONTACT WITH US</span>
                    <span className="text-two"><i className="fa-solid fa-arrow-turn-down-right"></i>CONTACT WITH US</span>
                  </span>
                </a>
              </div>
              <div className="col-12 col-xl-5 col-md-6">
                <div className="choose-acc" id="chooseAccordion">
                  <div className="choose-acc__item">
                    <button className="choose-acc__header" type="button" data-bs-toggle="collapse" data-bs-target="#accOne"
                      aria-expanded="false" aria-controls="accOne">
                      <span className="choose-acc__label">Data-Driven Decision</span>
                      <span className="choose-acc__icon" aria-hidden="true"></span>
                    </button>
                    <div id="accOne" className="collapse" data-bs-parent="#chooseAccordion">
                      <div className="choose-acc__body">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                        model search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by accident.<br /><br />
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15.001" cy="15" r="15" fill="black" />
                          <path d="M17.3152 11.4274H10.5417C10.305 11.4274 10.078 11.3334 9.91067 11.166C9.74331 10.9987 9.64929 10.7717 9.64929 10.535C9.64929 10.2983 9.74331 10.0713 9.91067 9.90396C10.078 9.7366 10.305 9.64258 10.5417 9.64258H19.466C19.5826 9.64399 19.6978 9.66824 19.8051 9.71397C20.0232 9.80453 20.1964 9.97782 20.287 10.1959C20.3327 10.3032 20.357 10.4184 20.3584 10.535V19.4593C20.3584 19.6959 20.2644 19.9229 20.097 20.0903C19.9297 20.2577 19.7027 20.3517 19.466 20.3517C19.2293 20.3517 19.0023 20.2577 18.8349 20.0903C18.6676 19.9229 18.5735 19.6959 18.5735 19.4593V12.6858L11.1753 20.0929C11.0924 20.1765 10.9937 20.2429 10.8849 20.2882C10.7762 20.3335 10.6595 20.3569 10.5417 20.3569C10.4239 20.3569 10.3073 20.3335 10.1985 20.2882C10.0898 20.2429 9.99105 20.1765 9.90809 20.0929C9.82445 20.0099 9.75805 19.9112 9.71275 19.8025C9.66744 19.6937 9.64411 19.5771 9.64411 19.4593C9.64411 19.3415 9.66744 19.2248 9.71275 19.1161C9.75805 19.0073 9.82445 18.9086 9.90809 18.8256L17.3152 11.4274Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="choose-acc__item is-active">
                    <button className="choose-acc__header" type="button" data-bs-toggle="collapse" data-bs-target="#accTwo"
                      aria-expanded="true" aria-controls="accTwo">
                      <span className="choose-acc__label">Multi-Channel Expertise</span>
                      <span className="choose-acc__icon" aria-hidden="true"></span>
                    </button>
                    <div id="accTwo" className="collapse show" data-bs-parent="#chooseAccordion">
                      <div className="choose-acc__body">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                        model search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by accident.<br /><br />
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15.001" cy="15" r="15" fill="black" />
                          <path d="M17.3152 11.4274H10.5417C10.305 11.4274 10.078 11.3334 9.91067 11.166C9.74331 10.9987 9.64929 10.7717 9.64929 10.535C9.64929 10.2983 9.74331 10.0713 9.91067 9.90396C10.078 9.7366 10.305 9.64258 10.5417 9.64258H19.466C19.5826 9.64399 19.6978 9.66824 19.8051 9.71397C20.0232 9.80453 20.1964 9.97782 20.287 10.1959C20.3327 10.3032 20.357 10.4184 20.3584 10.535V19.4593C20.3584 19.6959 20.2644 19.9229 20.097 20.0903C19.9297 20.2577 19.7027 20.3517 19.466 20.3517C19.2293 20.3517 19.0023 20.2577 18.8349 20.0903C18.6676 19.9229 18.5735 19.6959 18.5735 19.4593V12.6858L11.1753 20.0929C11.0924 20.1765 10.9937 20.2429 10.8849 20.2882C10.7762 20.3335 10.6595 20.3569 10.5417 20.3569C10.4239 20.3569 10.3073 20.3335 10.1985 20.2882C10.0898 20.2429 9.99105 20.1765 9.90809 20.0929C9.82445 20.0099 9.75805 19.9112 9.71275 19.8025C9.66744 19.6937 9.64411 19.5771 9.64411 19.4593C9.64411 19.3415 9.66744 19.2248 9.71275 19.1161C9.75805 19.0073 9.82445 18.9086 9.90809 18.8256L17.3152 11.4274Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="choose-acc__item">
                    <button className="choose-acc__header" type="button" data-bs-toggle="collapse"
                      data-bs-target="#accThree" aria-expanded="false" aria-controls="accThree">
                      <span className="choose-acc__label">Social Media Mastery</span>
                      <span className="choose-acc__icon" aria-hidden="true"></span>
                    </button>
                    <div id="accThree" className="collapse" data-bs-parent="#chooseAccordion">
                      <div className="choose-acc__body">
                        We craft platform-specific strategies that amplify reach and drive measurable results
                        while maintaining brand consistency across channels.<br /><br />
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15.001" cy="15" r="15" fill="black" />
                          <path d="M17.3152 11.4274H10.5417C10.305 11.4274 10.078 11.3334 9.91067 11.166C9.74331 10.9987 9.64929 10.7717 9.64929 10.535C9.64929 10.2983 9.74331 10.0713 9.91067 9.90396C10.078 9.7366 10.305 9.64258 10.5417 9.64258H19.466C19.5826 9.64399 19.6978 9.66824 19.8051 9.71397C20.0232 9.80453 20.1964 9.97782 20.287 10.1959C20.3327 10.3032 20.357 10.4184 20.3584 10.535V19.4593C20.3584 19.6959 20.2644 19.9229 20.097 20.0903C19.9297 20.2577 19.7027 20.3517 19.466 20.3517C19.2293 20.3517 19.0023 20.2577 18.8349 20.0903C18.6676 19.9229 18.5735 19.6959 18.5735 19.4593V12.6858L11.1753 20.0929C11.0924 20.1765 10.9937 20.2429 10.8849 20.2882C10.7762 20.3335 10.6595 20.3569 10.5417 20.3569C10.4239 20.3569 10.3073 20.3335 10.1985 20.2882C10.0898 20.2429 9.99105 20.1765 9.90809 20.0929C9.82445 20.0099 9.75805 19.9112 9.71275 19.8025C9.66744 19.6937 9.64411 19.5771 9.64411 19.4593C9.64411 19.3415 9.66744 19.2248 9.71275 19.1161C9.75805 19.0073 9.82445 18.9086 9.90809 18.8256L17.3152 11.4274Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="choose-acc__item">
                    <button className="choose-acc__header" type="button" data-bs-toggle="collapse" data-bs-target="#accFour"
                      aria-expanded="false" aria-controls="accFour">
                      <span className="choose-acc__label">Social Media Mastery</span>
                      <span className="choose-acc__icon" aria-hidden="true"></span>
                    </button>
                    <div id="accFour" className="collapse" data-bs-parent="#chooseAccordion">
                      <div className="choose-acc__body">
                        Our analytics-first approach ensures every campaign learns and improves continuously.<br /><br />
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15.001" cy="15" r="15" fill="black" />
                          <path d="M17.3152 11.4274H10.5417C10.305 11.4274 10.078 11.3334 9.91067 11.166C9.74331 10.9987 9.64929 10.7717 9.64929 10.535C9.64929 10.2983 9.74331 10.0713 9.91067 9.90396C10.078 9.7366 10.305 9.64258 10.5417 9.64258H19.466C19.5826 9.64399 19.6978 9.66824 19.8051 9.71397C20.0232 9.80453 20.1964 9.97782 20.287 10.1959C20.3327 10.3032 20.357 10.4184 20.3584 10.535V19.4593C20.3584 19.6959 20.2644 19.9229 20.097 20.0903C19.9297 20.2577 19.7027 20.3517 19.466 20.3517C19.2293 20.3517 19.0023 20.2577 18.8349 20.0903C18.6676 19.9229 18.5735 19.6959 18.5735 19.4593V12.6858L11.1753 20.0929C11.0924 20.1765 10.9937 20.2429 10.8849 20.2882C10.7762 20.3335 10.6595 20.3569 10.5417 20.3569C10.4239 20.3569 10.3073 20.3335 10.1985 20.2882C10.0898 20.2429 9.99105 20.1765 9.90809 20.0929C9.82445 20.0099 9.75805 19.9112 9.71275 19.8025C9.66744 19.6937 9.64411 19.5771 9.64411 19.4593C9.64411 19.3415 9.66744 19.2248 9.71275 19.1161C9.75805 19.0073 9.82445 18.9086 9.90809 18.8256L17.3152 11.4274Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Blog area start */}
      <div className="blog-area7 section-spacing overflow-hidden">
        <div className="rr-container-1800 container">
          <h2 className="section-title">Browse our latest news &amp; articles for insights, tips, &amp; expert updates on cyber
            security trends and strategies</h2>
          <div className="row gy-4 gy-xl-0 mt-5">
            {[
              { img: 'blog-thumb5_1.png', delay: '0.3s', date: 'Oct 30, 2025', title: 'How remote work has changed the cybersecurity game' },
              { img: 'blog-thumb5_2.png', delay: '0.4s', date: 'Oct 29, 2025', title: 'The importance of encryption in safeguarding your data online' },
              { img: 'blog-thumb5_3.png', delay: '0.6s', date: 'Oct 28, 2025', title: 'The role of artificial intelligence in enhancing cybersecurity' },
            ].map((item, i) => (
              <div className="col-xl-4 col-md-6" key={i}>
                <div className="blog-area7__card wow fadeInUp" data-wow-delay={item.delay}>
                  <div className="blog-area7__card-thumb">
                    <img src={`/assets/imgs/home-7/blog/${item.img}`} alt="Cyber Security" />
                    <div className="blog-area7__card-date">{item.date}</div>
                  </div>
                  <div className="blog-area7__card-content">
                    <div className="blog-area7__card-category">Technology</div>
                    <a href="/blog/details" className="blog-area7__card-title">{item.title}</a>
                    <p className="blog-area7__card-desc">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div className="blog-area7__card-meta">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M15.8337 17.5V15.8333C15.8337 14.9493 15.4825 14.1014 14.8573 13.4763C14.2322 12.8512 13.3844 12.5 12.5003 12.5H7.50033C6.61627 12.5 5.76842 12.8512 5.1433 13.4763C4.51818 14.1014 4.16699 14.9493 4.16699 15.8333V17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10.0003 9.16667C11.8413 9.16667 13.3337 7.67428 13.3337 5.83333C13.3337 3.99238 11.8413 2.5 10.0003 2.5C8.15938 2.5 6.66699 3.99238 6.66699 5.83333C6.66699 7.67428 8.15938 9.16667 10.0003 9.16667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> By Admin
                      </span>
                      <a href="/blog/details" className="blog-area7__card-link">Read More
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.00041 7C8.00041 6.73478 8.10576 6.48043 8.2933 6.29289C8.48084 6.10536 8.73519 6 9.00041 6H17.0004C17.2656 6 17.52 6.10536 17.7075 6.29289C17.8951 6.48043 18.0004 6.73478 18.0004 7V15C18.0004 15.2652 17.8951 15.5196 17.7075 15.7071C17.52 15.8946 17.2656 16 17.0004 16C16.7352 16 16.4808 15.8946 16.2933 15.7071C16.1058 15.5196 16.0004 15.2652 16.0004 15V9.414L7.70741 17.707C7.5188 17.8892 7.2662 17.99 7.00401 17.9877C6.74181 17.9854 6.491 17.8802 6.30559 17.6948C6.12018 17.5094 6.01501 17.2586 6.01273 16.9964C6.01045 16.7342 6.11125 16.4816 6.29341 16.293L14.5864 8H9.00041C8.73519 8 8.48084 7.89464 8.2933 7.70711C8.10576 7.51957 8.00041 7.26522 8.00041 7Z" fill="white" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Blog area end */}

      {/* Connect area start */}
      <div className="connect-area7 section-spacing bg-img overflow-hidden"
        style={{ backgroundImage: "url('/assets/imgs/footer/footer-bg5.jpg')" }}>
        <div className="container rr-container-1800 text-center">
          <div className="connect-area7__top d-flex justify-content-between text-white">
            <span>Cyber Security</span>
            <span>Trexa Agency</span>
            <span>Based in London</span>
          </div>
          <p className="connect-area7__subtitle text-white">Got a project in mind</p>
          <h2 className="connect-area7__title text-white">LET&apos;S CONNECT</h2>
          <a href="#" className="connect-area7__btn">WRITE A MESSAGE</a>
          <div className="connect-area7__bottom d-flex flex-column flex-md-row justify-content-between text-white">
            <span>Powered by Themeforest</span>
            <div className="connect-area7__social d-flex">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">Dribbble</a>
            </div>
            <span>Copyright &copy; 2025</span>
          </div>
        </div>
      </div>
      {/* Connect area end */}

    </InnerPageLayout>
  );
}
