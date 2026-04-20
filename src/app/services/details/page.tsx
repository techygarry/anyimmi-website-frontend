import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Service Details – Trexa',
  description: 'Detailed information about our blockchain development and technology services.',
};

export default function ServiceDetailsPage() {
  return (
    <InnerPageLayout>
      {/* Service Details Section */}
      <section className="service-details section-bg overflow-hidden pb-0">
        <div className="container rr-container-1600">
          <h2 className="service-details__title">Blockchain Development</h2>
          <div className="service-details__items">
            <ul className="service-details__items-list">
              <li className="service-details__items-list-bt">Robotics software</li>
              <li className="service-details__items-list-bt2">Computer vision</li>
              <li className="service-details__items-list-bt">Smart AI &amp; chatbots</li>
              <li className="service-details__items-list-bt2">AI security</li>
              <li className="service-details__items-list-bt">Smart Contracts</li>
              <li className="service-details__items-list-bt2">Token Development</li>
            </ul>
          </div>
        </div>
        <div
          className="service-details__thumb"
          style={{ backgroundImage: 'url(/assets/imgs/inner/service-details/service-details-thumb1_1.jpg)' }}
        ></div>
        <div className="container rr-container-1350">
          <div className="service-details__subtitle">Smart Solutions for Every Brand and Business Growth</div>
          <p className="service-details__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, voluptas a assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis</p>
          <div className="row g-4 justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-details__card">
                <div className="service-details__card-number">01.</div>
                <h5 className="service-details__card-title">AI-Powered Marketing</h5>
                <p className="service-details__card-subtitle">Duis aute irure dolor in voluptati velit esse cillum dolore eu fugiat pariatur. excepteur sint occaecat cupidatat non proident</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-details__card">
                <div className="service-details__card-number">02.</div>
                <h5 className="service-details__card-title">Human-Centered Design</h5>
                <p className="service-details__card-subtitle">Duis aute irure dolor in voluptati velit esse cillum dolore eu fugiat pariatur. excepteur sint occaecat cupidatat non proident</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-details__card">
                <div className="service-details__card-number">03.</div>
                <h5 className="service-details__card-title">Data-Driven Strategies</h5>
                <p className="service-details__card-subtitle">Duis aute irure dolor in voluptati velit esse cillum dolore eu fugiat pariatur. excepteur sint occaecat cupidatat non proident</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-details__card">
                <div className="service-details__card-number">04.</div>
                <h5 className="service-details__card-title">Data-Driven Strategies</h5>
                <p className="service-details__card-subtitle">Duis aute irure dolor in voluptati velit esse cillum dolore eu fugiat pariatur. excepteur sint occaecat cupidatat non proident</p>
              </div>
            </div>
          </div>
          <div className="service-details__content">
            <h3 className="service-details__content-title">Benefit of service</h3>
            <p className="service-details__content-subtitle">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,</p>
            <h3 className="service-details__content-title2">How it works?</h3>
            <p className="service-details__content-subtitle2">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure the moment blindede by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best,</p>
            <div className="service-details__content-items">
              <ul className="service-details__content-items-list">
                <li>
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <line x1="9.5" x2="9.5" y2="7" stroke="#101010" />
                      <line x1="9.5" y1="12" x2="9.5" y2="19" stroke="#101010" />
                      <line x1="12" y1="9.5" x2="19" y2="9.5" stroke="#101010" />
                      <line y1="9.5" x2="7" y2="9.5" stroke="#101010" />
                    </svg>
                  </div>
                  Nemo enim ipsam voluptatem quia voluptas
                </li>
                <li>
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <line x1="9.5" x2="9.5" y2="7" stroke="#101010" />
                      <line x1="9.5" y1="12" x2="9.5" y2="19" stroke="#101010" />
                      <line x1="12" y1="9.5" x2="19" y2="9.5" stroke="#101010" />
                      <line y1="9.5" x2="7" y2="9.5" stroke="#101010" />
                    </svg>
                  </div>
                  Nor again is there anyone who loves or pursues
                </li>
                <li>
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <line x1="9.5" x2="9.5" y2="7" stroke="#101010" />
                      <line x1="9.5" y1="12" x2="9.5" y2="19" stroke="#101010" />
                      <line x1="12" y1="9.5" x2="19" y2="9.5" stroke="#101010" />
                      <line y1="9.5" x2="7" y2="9.5" stroke="#101010" />
                    </svg>
                  </div>
                  Nam libero tempore, cum soluta nobis eligendi
                </li>
                <li>
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <line x1="9.5" x2="9.5" y2="7" stroke="#101010" />
                      <line x1="9.5" y1="12" x2="9.5" y2="19" stroke="#101010" />
                      <line x1="12" y1="9.5" x2="19" y2="9.5" stroke="#101010" />
                      <line y1="9.5" x2="7" y2="9.5" stroke="#101010" />
                    </svg>
                  </div>
                  Nam libero tempore, cum soluta nobis eligendi
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="service-details__thumb2"
          style={{ backgroundImage: 'url(/assets/imgs/inner/service-details/service-details-thumb1_2.jpg)' }}
        ></div>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
