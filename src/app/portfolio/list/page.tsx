import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Portfolio List – Trexa',
  description: 'Transforming Visionaries Into Innovators with 180+ Projects Completed.',
};

export default function PortfolioList() {
  return (
    <InnerPageLayout>
      {/* Breadcrumb Section */}
      <div className="breadcrumb2 overflow-hidden">
        <div className="container rr-container-1600">
          <div className="breadcrumb2-content">
            <span className="breadcrumb2-content__subtitle">portfolio List</span>
            <div className="breadcrumb2-content__title">portfolio</div>
            <div className="breadcrumb2-content__heading">
              Transforming Visionaries Into Innovators with 180+ Projects Completed
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio List Section */}
      <section className="portfolio-list section-spacing section-bg rr-ov-hidden pt-0">
        <div className="container rr-container-1600">
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
          <div className="portfolio-list-wrapper">
            <div className="row g-4 justify-content-center">
              <div className="col-xl-12">
                <div className="portfolio-list__card">
                  <div className="portfolio-list__card-thumb">
                    <img src="/assets/imgs/inner/portfolio/portfolio-list-thumb1_1.jpg" alt="list-thumb" />
                  </div>
                  <div className="portfolio-list__card-info">
                    <div className="portfolio-list__card-content">
                      <ul className="portfolio-list__card-content-post">
                        <li className="portfolio-list__card-content-post-date">26 Mar 2023</li>
                      </ul>
                      <div className="portfolio-list__card-content-items">
                        <h4 className="portfolio-list__card-content-items-title">
                          <a href="/portfolio/details">Financial App Design</a>
                        </h4>
                        <p className="portfolio-list__card-content-items-subtitle">Social Media Influencer Campaign</p>
                      </div>
                    </div>
                    <div className="portfolio-list__card-link">
                      <a href="/portfolio/details" className="portfolio-list__card-link-list">See Details</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="portfolio-list__card">
                  <div className="portfolio-list__card-thumb">
                    <img src="/assets/imgs/inner/portfolio/portfolio-list-thumb1_2.jpg" alt="list-thumb" />
                  </div>
                  <div className="portfolio-list__card-info">
                    <div className="portfolio-list__card-content">
                      <ul className="portfolio-list__card-content-post">
                        <li className="portfolio-list__card-content-post-date">26 Mar 2023</li>
                      </ul>
                      <div className="portfolio-list__card-content-items">
                        <h4 className="portfolio-list__card-content-items-title">
                          <a href="/portfolio/details">Financial App Design</a>
                        </h4>
                        <p className="portfolio-list__card-content-items-subtitle">Social Media Influencer Campaign</p>
                      </div>
                    </div>
                    <div className="portfolio-list__card-link">
                      <a href="/portfolio/details" className="portfolio-list__card-link-list">See Details</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="portfolio-list__card">
                  <div className="portfolio-list__card-thumb">
                    <img src="/assets/imgs/inner/portfolio/portfolio-list-thumb1_3.jpg" alt="list-thumb" />
                  </div>
                  <div className="portfolio-list__card-info">
                    <div className="portfolio-list__card-content">
                      <ul className="portfolio-list__card-content-post">
                        <li className="portfolio-list__card-content-post-date">26 Mar 2023</li>
                      </ul>
                      <div className="portfolio-list__card-content-items">
                        <h4 className="portfolio-list__card-content-items-title">
                          <a href="/portfolio/details">Financial App Design</a>
                        </h4>
                        <p className="portfolio-list__card-content-items-subtitle">Social Media Influencer Campaign</p>
                      </div>
                    </div>
                    <div className="portfolio-list__card-link">
                      <a href="/portfolio/details" className="portfolio-list__card-link-list">See Details</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="portfolio-list__card">
                  <div className="portfolio-list__card-thumb">
                    <img src="/assets/imgs/inner/portfolio/portfolio-list-thumb1_4.jpg" alt="list-thumb" />
                  </div>
                  <div className="portfolio-list__card-info">
                    <div className="portfolio-list__card-content">
                      <ul className="portfolio-list__card-content-post">
                        <li className="portfolio-list__card-content-post-date">26 Mar 2023</li>
                      </ul>
                      <div className="portfolio-list__card-content-items">
                        <h4 className="portfolio-list__card-content-items-title">
                          <a href="/portfolio/details">Financial App Design</a>
                        </h4>
                        <p className="portfolio-list__card-content-items-subtitle">Social Media Influencer Campaign</p>
                      </div>
                    </div>
                    <div className="portfolio-list__card-link">
                      <a href="/portfolio/details" className="portfolio-list__card-link-list">See Details</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="portfolio-list__card">
                  <div className="portfolio-list__card-thumb">
                    <img src="/assets/imgs/inner/portfolio/portfolio-list-thumb1_5.jpg" alt="list-thumb" />
                  </div>
                  <div className="portfolio-list__card-info">
                    <div className="portfolio-list__card-content">
                      <ul className="portfolio-list__card-content-post">
                        <li className="portfolio-list__card-content-post-date">26 Mar 2023</li>
                      </ul>
                      <div className="portfolio-list__card-content-items">
                        <h4 className="portfolio-list__card-content-items-title">
                          <a href="/portfolio/details">Financial App Design</a>
                        </h4>
                        <p className="portfolio-list__card-content-items-subtitle">Social Media Influencer Campaign</p>
                      </div>
                    </div>
                    <div className="portfolio-list__card-link">
                      <a href="/portfolio/details" className="portfolio-list__card-link-list">See Details</a>
                    </div>
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
