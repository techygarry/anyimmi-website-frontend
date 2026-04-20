import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'FAQ – Trexa',
  description: 'Frequently asked questions about Trexa AI agency services, process, and expertise.',
};

export default function FaqPage() {
  return (
    <InnerPageLayout>

      {/* Breadcrumb Section */}
      <div className="breadcrumb1 section-bg overflow-hidden pb-0">
        <div className="container rr-container-1600">
          <div className="breadcrumb1__top">
            <div className="breadcrumb1__top-left">Question</div>
            <div className="breadcrumb1__top-right">
              <div className="breadcrumb1__top-right-img">
                <img src="/assets/imgs/inner/breadcrumb/breadcrumb-img1_1.png" alt="thumb" />
              </div>
              <div className="breadcrumb1__top-right-text">More then 25K clients reviews</div>
            </div>
          </div>
          <h1 className="breadcrumb1__title">We are Flawless — Our expert team blends data, experience, and innovation to
            fuel
            your business success.</h1>
        </div>
        <div className="breadcrumb1__thumb">
          <img src="/assets/imgs/inner/breadcrumb/breadcrumb-thumb1_2.jpg" alt="thumb" />
        </div>
      </div>

      {/* Project / FAQ Cards Section */}
      <section className="project section-spacing rr-ov-hidden">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="project__card">
                <h2 className="project__card-title">What types of design projects do
                  you specialize in?</h2>
                <p className="project__card-subtitle">Duis aute irure dolor in reprehenderit in voluptate velit esse in
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident sunt in culpa an officia deserunt mollit
                  anim id est laborum.</p>
                <div className="project__card-button"></div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="project__card">
                <h2 className="project__card-title">How do you ensure designs align with my brand?</h2>
                <p className="project__card-subtitle">Duis aute irure dolor in reprehenderit in voluptate velit esse in
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident sunt in culpa an officia deserunt mollit
                  anim id est laborum.</p>
                <div className="project__card-button"></div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="project__card">
                <h2 className="project__card-title">What types of design projects do
                  you specialize in?</h2>
                <p className="project__card-subtitle">Duis aute irure dolor in reprehenderit in voluptate velit esse in
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident sunt in culpa an officia deserunt mollit
                  anim id est laborum.</p>
                <div className="project__card-button"></div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="project__card">
                <h2 className="project__card-title">How do you ensure designs align
                  with my brand?</h2>
                <p className="project__card-subtitle">Duis aute irure dolor in reprehenderit in voluptate velit esse in
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident sunt in culpa an officia deserunt mollit
                  anim id est laborum.</p>
                <div className="project__card-button"></div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="project__card">
                <h2 className="project__card-title">What if I don&apos;t have a clear vision for
                  my design?</h2>
                <p className="project__card-subtitle">Duis aute irure dolor in reprehenderit in voluptate velit esse in
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident sunt in culpa an officia deserunt mollit
                  anim id est laborum.</p>
                <div className="project__card-button"></div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="project__card">
                <h2 className="project__card-title">Can you help with content creation
                  alongside design?</h2>
                <p className="project__card-subtitle">Duis aute irure dolor in reprehenderit in voluptate velit esse in
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident sunt in culpa an officia deserunt mollit
                  anim id est laborum.</p>
                <div className="project__card-button"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <div className="faq1 section-spacing rr-ov-hidden">
        <div className="container rr-container-1600">
          <div className="row gx-60 d-flex justify-content-center">
            <div className="col-xl-12">
              <div className="faq1__top-section">
                <div className="faq1__top-section-title wow fadeInUp" data-wow-delay=".3s">Frequently asked question!</div>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="global-accordion-item wow fadeInUp" data-wow-delay=".3s">
                  <div className="global-accordion-header">
                    <div className="global-accordion-button collapsed style" data-bs-toggle="collapse" role="group"
                      data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <div className="question">
                        1. What is an AI agency?
                      </div>
                    </div>
                  </div>
                  <div id="collapseOne" className="global-accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="global-accordion-body style">
                      <p>An AI agency is more than just a technology partner — it&apos;s a catalyst for smarter growth. We
                        help
                        businesses harness the full potential of artificial intelligence streamline processes, automate
                        repetitive tasks, and unlock new opportunities for innovation. By combining data-driven insights
                        with advanced AI tools,</p>
                    </div>
                  </div>
                </div>
                <div className="global-accordion-item wow fadeInUp" data-wow-delay=".5s">
                  <div className="global-accordion-header">
                    <div className="global-accordion-button style" data-bs-toggle="collapse" role="group"
                      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <div className="question">
                        2. How can AI benefit my business?
                      </div>
                    </div>
                  </div>
                  <div id="collapseTwo" className="global-accordion-collapse collapse show"
                    data-bs-parent="#accordionExample">
                    <div className="global-accordion-body style">
                      <p>An AI agency is more than just a technology partner — it&apos;s a catalyst for smarter growth. We
                        help
                        businesses harness the full potential of artificial intelligence streamline processes, automate
                        repetitive tasks, and unlock new opportunities for innovation. By combining data-driven insights
                        with advanced AI tools,</p>
                    </div>
                  </div>
                </div>
                <div className="global-accordion-item wow fadeInUp" data-wow-delay=".7s">
                  <div className="global-accordion-header">
                    <div className="global-accordion-button collapsed style" data-bs-toggle="collapse" role="group"
                      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <div className="question">
                        Q3. Do I need technical knowledge to work with an AI agency?
                      </div>
                    </div>
                  </div>
                  <div id="collapseThree" className="global-accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="global-accordion-body style">
                      <p>An AI agency is more than just a technology partner — it&apos;s a catalyst for smarter growth. We
                        help
                        businesses harness the full potential of artificial intelligence streamline processes, automate
                        repetitive tasks, and unlock new opportunities for innovation. By combining data-driven insights
                        with advanced AI tools,</p>
                    </div>
                  </div>
                </div>
                <div className="global-accordion-item wow fadeInUp" data-wow-delay=".9s">
                  <div className="global-accordion-header">
                    <div className="global-accordion-button collapsed style" data-bs-toggle="collapse" role="group"
                      data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      <div className="question">
                        4. What industries can benefit from AI solutions?
                      </div>
                    </div>
                  </div>
                  <div id="collapseFour" className="global-accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="global-accordion-body style">
                      <p>An AI agency is more than just a technology partner — it&apos;s a catalyst for smarter growth. We
                        help
                        businesses harness the full potential of artificial intelligence streamline processes, automate
                        repetitive tasks, and unlock new opportunities for innovation. By combining data-driven insights
                        with advanced AI tools,</p>
                    </div>
                  </div>
                </div>
                <div className="global-accordion-item wow fadeInUp" data-wow-delay="1.0s">
                  <div className="global-accordion-header">
                    <div className="global-accordion-button collapsed style" data-bs-toggle="collapse" role="group"
                      data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      <div className="question">
                        5. What types of services does your AI agency provide?
                      </div>
                    </div>
                  </div>
                  <div id="collapseFive" className="global-accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="global-accordion-body style">
                      <p>An AI agency is more than just a technology partner — it&apos;s a catalyst for smarter growth. We
                        help
                        businesses harness the full potential of artificial intelligence streamline processes, automate
                        repetitive tasks, and unlock new opportunities for innovation. By combining data-driven insights
                        with advanced AI tools,</p>
                    </div>
                  </div>
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
