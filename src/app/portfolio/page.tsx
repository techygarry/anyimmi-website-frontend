import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Portfolio Grid – Trexa',
  description: 'Transforming Visionaries Into Innovators with 180+ Projects Completed.',
};

export default function PortfolioGrid() {
  return (
    <InnerPageLayout>
      {/* Breadcrumb Section */}
      <div className="breadcrumb2 overflow-hidden">
        <div className="container rr-container-1800">
          <div className="breadcrumb2-content">
            <span className="breadcrumb2-content__subtitle">portfolio grid</span>
            <div className="breadcrumb2-content__title">portfolio</div>
            <div className="breadcrumb2-content__heading">
              Transforming Visionaries Into Innovators with 180+ Projects Completed
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Page Section */}
      <section className="portfolio-page section-spacing section-bg rr-ov-hidden pt-0">
        <div className="container rr-container-1800">
          <div className="portfolio-page__top">
            <div className="portfolio-page__top-item">
              <h2 className="portfolio-page__top-item-title">// Featured Work</h2>
            </div>
            <div className="portfolio-page__top-item">
              <h2 className="portfolio-page__top-item-title2">UIUX Design</h2>
            </div>
            <div className="portfolio-page__top-item">
              <h2 className="portfolio-page__top-item-title2">Branding</h2>
            </div>
            <div className="portfolio-page__top-item">
              <h2 className="portfolio-page__top-item-title2">Illustration</h2>
            </div>
          </div>
          <div className="portfolio-page-wrapper">
            <div className="row g-4 justify-content-center">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="portfolio-page__card">
                  <div className="portfolio-page__card-thumb">
                    <img src="/assets/imgs/inner/portfolio/portfolio-grid-thumb1_1.jpg" alt="thumb" />
                  </div>
                  <div className="portfolio-page__card-content">
                    <h4 className="portfolio-page__card-content-title">
                      <a href="/portfolio/details">Financial App Design</a>
                    </h4>
                    <ul className="portfolio-page__card-content-post">
                      <li className="portfolio-page__card-content-post-date">2016</li>
                      <li className="portfolio-page__card-content-post-date">//</li>
                      <li className="portfolio-page__card-content-post-date">Branding</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6">
                <div className="portfolio-page__card">
                  <div className="portfolio-page__card-thumb">
                    <img src="/assets/imgs/inner/portfolio/portfolio-grid-thumb1_2.jpg" alt="thumb" />
                  </div>
                  <div className="portfolio-page__card-content">
                    <h4 className="portfolio-page__card-content-title">
                      <a href="/portfolio/details">AI Chatbot Development</a>
                    </h4>
                    <ul className="portfolio-page__card-content-post">
                      <li className="portfolio-page__card-content-post-date">2016</li>
                      <li className="portfolio-page__card-content-post-date">//</li>
                      <li className="portfolio-page__card-content-post-date">Branding</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="portfolio-page__card">
                  <div className="portfolio-page__card-thumb">
                    <img src="/assets/imgs/inner/portfolio/portfolio-grid-thumb1_3.jpg" alt="thumb" />
                  </div>
                  <div className="portfolio-page__card-content">
                    <h4 className="portfolio-page__card-content-title">
                      <a href="/portfolio/details">Data Intelligence</a>
                    </h4>
                    <ul className="portfolio-page__card-content-post">
                      <li className="portfolio-page__card-content-post-date">2016</li>
                      <li className="portfolio-page__card-content-post-date">//</li>
                      <li className="portfolio-page__card-content-post-date">Branding</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="portfolio-page__card">
                  <div className="portfolio-page__card-thumb">
                    <img src="/assets/imgs/inner/portfolio/portfolio-grid-thumb1_4.jpg" alt="thumb" />
                  </div>
                  <div className="portfolio-page__card-content">
                    <h4 className="portfolio-page__card-content-title">
                      <a href="/portfolio/details">Data Intelligence</a>
                    </h4>
                    <ul className="portfolio-page__card-content-post">
                      <li className="portfolio-page__card-content-post-date">2016</li>
                      <li className="portfolio-page__card-content-post-date">//</li>
                      <li className="portfolio-page__card-content-post-date">Branding</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="portfolio-page__card">
                  <div className="portfolio-page__card-thumb">
                    <img src="/assets/imgs/inner/portfolio/portfolio-grid-thumb1_5.jpg" alt="thumb" />
                  </div>
                  <div className="portfolio-page__card-content">
                    <h4 className="portfolio-page__card-content-title">
                      <a href="/portfolio/details">Financial App Design</a>
                    </h4>
                    <ul className="portfolio-page__card-content-post">
                      <li className="portfolio-page__card-content-post-date">2016</li>
                      <li className="portfolio-page__card-content-post-date">//</li>
                      <li className="portfolio-page__card-content-post-date">Branding</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6">
                <div className="portfolio-page__card">
                  <div className="portfolio-page__card-thumb">
                    <img src="/assets/imgs/inner/portfolio/portfolio-grid-thumb1_6.jpg" alt="thumb" />
                  </div>
                  <div className="portfolio-page__card-content">
                    <h4 className="portfolio-page__card-content-title">
                      <a href="/portfolio/details">AI Chatbot Development</a>
                    </h4>
                    <ul className="portfolio-page__card-content-post">
                      <li className="portfolio-page__card-content-post-date">2016</li>
                      <li className="portfolio-page__card-content-post-date">//</li>
                      <li className="portfolio-page__card-content-post-date">Branding</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6">
                <div className="portfolio-page__card">
                  <div className="portfolio-page__card-thumb">
                    <img src="/assets/imgs/inner/portfolio/portfolio-grid-thumb1_7.jpg" alt="thumb" />
                  </div>
                  <div className="portfolio-page__card-content">
                    <h4 className="portfolio-page__card-content-title">
                      <a href="/portfolio/details">AI Chatbot Development</a>
                    </h4>
                    <ul className="portfolio-page__card-content-post">
                      <li className="portfolio-page__card-content-post-date">2016</li>
                      <li className="portfolio-page__card-content-post-date">//</li>
                      <li className="portfolio-page__card-content-post-date">Branding</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="portfolio-page__card">
                  <div className="portfolio-page__card-thumb">
                    <img src="/assets/imgs/inner/portfolio/portfolio-grid-thumb1_8.jpg" alt="thumb" />
                  </div>
                  <div className="portfolio-page__card-content">
                    <h4 className="portfolio-page__card-content-title">
                      <a href="/portfolio/details">Data Intelligence</a>
                    </h4>
                    <ul className="portfolio-page__card-content-post">
                      <li className="portfolio-page__card-content-post-date">2016</li>
                      <li className="portfolio-page__card-content-post-date">//</li>
                      <li className="portfolio-page__card-content-post-date">Branding</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="portfolio-page__card">
                  <div className="portfolio-page__card-thumb">
                    <img src="/assets/imgs/inner/portfolio/portfolio-grid-thumb1_9.jpg" alt="thumb" />
                  </div>
                  <div className="portfolio-page__card-content">
                    <h4 className="portfolio-page__card-content-title">
                      <a href="/portfolio/details">Financial App Design</a>
                    </h4>
                    <ul className="portfolio-page__card-content-post">
                      <li className="portfolio-page__card-content-post-date">2016</li>
                      <li className="portfolio-page__card-content-post-date">//</li>
                      <li className="portfolio-page__card-content-post-date">Branding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
