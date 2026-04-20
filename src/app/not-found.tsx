import InnerPageLayout from '@/components/InnerPageLayout';

export default function NotFound() {
  return (
    <InnerPageLayout>
      {/* 404 Error Section */}
      <div className="error overflow-hidden">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="error__thumb">
                <img src="/assets/imgs/404.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="error__title">Sorry, we can&apos;t find the page you&apos;re looking for</div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-5 col-lg-7">
              <div className="error-content">
                <p className="error-content__text">
                  It looks like you&apos;ve taken a wrong turn, but don&apos;t worry we&apos;re here to help!
                  Head back to the homepage please
                </p>
                <div className="error-content__button">
                  <a href="/" className="rr-btn-button4 btn-purple">
                    <span className="text">BACK TO HOME PAGE</span>
                    <span className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <g clipPath="url(#clip0_246_218)">
                          <path
                            d="M22.0004 11C16.6011 11 12.2227 6.07578 12.2227 0"
                            stroke="white"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M12.2227 22C12.2227 15.9258 16.5997 11 22.0004 11"
                            stroke="white"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M22.0005 11H0.000488281"
                            stroke="white"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_246_2183">
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
                <span className="text-slider-3">strategy</span>
                <span className="text-slider-4">marketing</span>
                <span className="text-slider-3">analysis</span>
                <span className="text-slider-4">marketing</span>
                <span className="text-slider-3">strategy</span>
                <span className="text-slider-4">marketing</span>
                <span className="text-slider-3">analysis</span>
                <span className="text-slider-4">marketing</span>
                <span className="text-slider-3">analysis</span>
                <span className="text-slider-4">marketing</span>
                <span className="text-slider-3">analysis</span>
                <span className="text-slider-4">marketing</span>
                <span className="text-slider-3">analysis</span>
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
