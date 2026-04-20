import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Portfolio Details – Trexa',
  description: 'Social Media Marketing portfolio project details – AI Integrations case study.',
};

export default function PortfolioDetails() {
  return (
    <InnerPageLayout>
      {/* Portfolio Details Section */}
      <section className="portfolio-details rr-ov-hidden">
        <div className="container rr-container-1600">
          <div className="row">
            <div className="col-xl-12">
              <div className="portfolio-details__top">
                <div className="portfolio-details__top-title">Social Media Marketing</div>
              </div>
              <div className="portfolio-details__items">
                <div className="portfolio-details__items-content">
                  <span className="portfolio-details__items-content-subtitle">Category</span>
                  <h5 className="portfolio-details__items-content-title">Ai, Integrations</h5>
                </div>
                <div className="portfolio-details__items-content">
                  <span className="portfolio-details__items-content-subtitle">Date</span>
                  <h5 className="portfolio-details__items-content-title">January 14, 2025</h5>
                </div>
                <div className="portfolio-details__items-content">
                  <span className="portfolio-details__items-content-subtitle">Client</span>
                  <h5 className="portfolio-details__items-content-title">Softakey AI Agency</h5>
                </div>
                <div className="portfolio-details__items-content">
                  <span className="portfolio-details__items-content-subtitle">Technology</span>
                  <h5 className="portfolio-details__items-content-title">Figma, WordPress</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="portfolio-details__thumb">
                <img src="/assets/imgs/inner/portfolio-details/portfolio-details-thumb1_1.jpg" alt="thumb" />
              </div>
            </div>
          </div>
        </div>
        <div className="container rr-container-1600">
          <div className="portfolio-details__info">
            <div className="row g-4 d-flex justify-content-center">
              <div className="col-xl-6 col-lg-4">
                <div className="portfolio-details__info-left">about the project</div>
              </div>
              <div className="col-xl-6 col-lg-8">
                <div className="portfolio-details__info-right">
                  <div className="portfolio-details__info-right-title">Challenge</div>
                  <p className="portfolio-details__info-right-subtitle1">
                    Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is
                    pain, but because occasionally circumstances occur in which toil and pain can pleasure. take a
                    trivial example which of us ever undertakes laborious physical exercise, except to obtain some
                    advantage from it? But who has any right to find fault
                  </p>
                  <p className="portfolio-details__info-right-subtitle2">
                    On the other hand, we denounce with righteous indignation and dislike men who are beguiled
                    and demoralized by the charms of pleasure of the moment, so blinded by desire, that foresee
                    the pain and trouble that are bound to ensue &amp; equal blame belongs to those who fail in duty
                    through weakness of will, which is the same as saying
                  </p>
                  <div className="accordion2" id="accordionExample">
                    <div className="global-accordion-item2 border-tp wow fadeInUp" data-wow-delay=".3s">
                      <div className="global-accordion-header">
                        <div
                          className="global-accordion-button collapsed style"
                          data-bs-toggle="collapse"
                          role="group"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <div className="question">Driving Audience Engagement at Scale</div>
                        </div>
                      </div>
                      <div id="collapseOne" className="global-accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="global-accordion-body style">
                          <p>
                            On the other hand, we denounce with righteous indignation and dislike men who are beguiled
                            and demoralized by the charms of pleasure of the moment,
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="global-accordion-item2 border-tp wow fadeInUp" data-wow-delay=".5s">
                      <div className="global-accordion-header">
                        <div
                          className="global-accordion-button style"
                          data-bs-toggle="collapse"
                          role="group"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div className="question">Maximizing Brand Visibility and Awareness</div>
                        </div>
                      </div>
                      <div id="collapseTwo" className="global-accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="global-accordion-body style">
                          <p>
                            On the other hand, we denounce with righteous indignation and dislike men who are beguiled
                            and demoralized by the charms of pleasure of the moment,
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="global-accordion-item2 border-tp wow fadeInUp" data-wow-delay=".7s">
                      <div className="global-accordion-header">
                        <div
                          className="global-accordion-button collapsed style"
                          data-bs-toggle="collapse"
                          role="group"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <div className="question">Data-Driven Targeting and Advertising</div>
                        </div>
                      </div>
                      <div id="collapseThree" className="global-accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="global-accordion-body style">
                          <p>
                            On the other hand, we denounce with righteous indignation and dislike men who are beguiled
                            and demoralized by the charms of pleasure of the moment,
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="global-accordion-item2 border-tp border-bm wow fadeInUp" data-wow-delay=".9s">
                      <div className="global-accordion-header">
                        <div
                          className="global-accordion-button collapsed style"
                          data-bs-toggle="collapse"
                          role="group"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          <div className="question">Continuous Optimization with Performance Analytics</div>
                        </div>
                      </div>
                      <div id="collapseFour" className="global-accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="global-accordion-body style">
                          <p>
                            On the other hand, we denounce with righteous indignation and dislike men who are beguiled
                            and demoralized by the charms of pleasure of the moment,
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container rr-container-1600">
          <div className="row g-4 d-flex justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="portfolio-details__thumb2">
                <img src="/assets/imgs/inner/portfolio-details/portfolio-details-thumb1_2.png" alt="thumb" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="portfolio-details__thumb2">
                <img src="/assets/imgs/inner/portfolio-details/portfolio-details-thumb1_3.jpg" alt="thumb" />
              </div>
            </div>
          </div>
        </div>
        <div className="container rr-container-1600">
          <div className="portfolio-details-wrapper">
            <div className="row g-4 d-flex justify-content-center">
              <div className="col-xl-5 col-lg-4">
                <div className="portfolio-details-wrapper__title">what we do</div>
              </div>
              <div className="col-xl-7 col-lg-8">
                <div className="portfolio-details__content">
                  <h5 className="portfolio-details__content-title">Project solution</h5>
                  <p className="portfolio-details__content-subtitle1">
                    Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is
                    pain, but because occasionally circumstances occur in which toil and pain can pleasure. take a
                    trivial example which of us ever undertakes laborious physical exercise, except to obtain some
                    advantage from it? But who has any right to find fault
                  </p>
                  <p className="portfolio-details__content-subtitle2">
                    On the other hand, we denounce with righteous indignation and dislike men who are beguiled
                    and demoralized by the charms of pleasure of the moment, so blinded by desire, that foresee
                    the pain and trouble that are bound to ensue &amp; equal blame belongs to those who fail in duty
                    through weakness of will, which is the same as saying
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-details-info2">
            <div className="row g-4 d-flex justify-content-center">
              <div className="col-xl-5 col-lg-4">
                <div className="portfolio-details-wrapper__title">the result</div>
              </div>
              <div className="col-xl-7 col-lg-8">
                <div className="portfolio-details__content">
                  <h5 className="portfolio-details__content-title">Summery</h5>
                  <p className="portfolio-details__content-subtitle1">
                    Sed ut perspiciatis unde omnis iste natus error site voluptatem accusantium totam aperiam, eaque
                    ipsa quae ab illo inventore veritatis et architecto in beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas aspernatur odits aut fugit, sed consequuntur in magni dolores eos
                    qui ratione voluptatem sequi nesciunt. neque porro quisquam est, quien dolorem ipsum quia dolor
                    sit amet, consectetur,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container rr-container-1600">
          <div className="row">
            <div className="col-xl-12">
              <div className="portfolio-details__thumb3">
                <img src="/assets/imgs/inner/portfolio-details/portfolio-details-thumb1_4.jpg" alt="thumb" />
              </div>
            </div>
          </div>
        </div>
        <div className="container rr-container-1600">
          <div className="row">
            <div className="col-xl-12">
              <div className="portfolio-details__link">
                <a href="/portfolio" className="portfolio-details__link-items">
                  <div className="button">
                    Prev Services
                    <div className="icon">
                      <svg width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M15.6087 23.8009L0.431641 0.270996C1.37659 1.89415 2.32189 8.74676 0.809931 11.9268"
                          stroke="black"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
                <a href="/portfolio" className="portfolio-details__link-items">
                  <div className="button">
                    Next Services
                    <div className="icon">
                      <svg width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.420549 23.8009L15.5977 0.270996C14.6527 1.89415 13.7074 8.74676 15.2194 11.9268"
                          stroke="black"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
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
