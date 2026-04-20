import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Team – Trexa',
  description: 'Meet our expert team blending data, experience, and innovation to fuel your business success.',
};

export default function TeamPage() {
  return (
    <InnerPageLayout>
      {/* Breadcrumb Section */}
      <div className="breadcrumb1 section-bg overflow-hidden">
        <div className="container rr-container-1600">
          <div className="breadcrumb1__top">
            <div className="breadcrumb1__top-left">TEAM MEMBERS</div>
            <div className="breadcrumb1__top-right">
              <div className="breadcrumb1__top-right-img">
                <img src="/assets/imgs/inner/breadcrumb/breadcrumb-img1_1.png" alt="thumb" />
              </div>
              <div className="breadcrumb1__top-right-text">More then 25K clients reviews</div>
            </div>
          </div>
          <h1 className="breadcrumb1__title">We are Flawless — Our expert team blends data, experience, and innovation to fuel your business success.</h1>
        </div>
        <div className="breadcrumb1__thumb">
          <img src="/assets/imgs/inner/breadcrumb/breadcrumb-thumb1_2.jpg" alt="thumb" />
        </div>
      </div>

      {/* Team Page Section */}
      <section className="team-page section-spacing section-bg overflow-hidden pt-0">
        <h2 className="team-page__title">TEAM MEMBERS</h2>
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="team-page__card">
                <h4 className="team-page__card-title">One Founder</h4>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="team-page__card">
                <div className="team-page__card-thumb">
                  <img src="/assets/imgs/inner/team/team-thumb1_1.jpg" alt="thumb" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="team-page__card">
                <div className="team-page__card-content">
                  <h3 className="team-page__card-content-title">&quot;We&apos;ve simplified the traditional, complex agency and model to connect you directly with top globals talent. No delays, no false promises—only meaningful results that drive impact.&quot;</h3>
                  <div className="team-page__card-content-name">Leon Kowalski</div>
                  <p className="team-page__card-content-dsc">Co-Founder, Marketing Expert</p>
                  <ul className="team-page__card-content-list">
                    <li className="team-page__card-content-list-items">FACEBOOK</li>
                    <li className="team-page__card-content-list-items">LINKEDIN</li>
                    <li className="team-page__card-content-list-items">INSTAGRAM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section 2 */}
      <section className="team-section section-spacing section-bg overflow-hidden pt-0">
        <div className="container">
          <div className="row g-4 d-flex justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="team-section__card">
                <div className="team-section__card-thumb">
                  <img src="/assets/imgs/inner/team/team-thumb1_2.jpg" alt="thumb" />
                </div>
                <div className="team-section__card-items">
                  <ul className="team-section__card-items-list">
                    <li>FACEBOOK</li>
                    <li>LINKEDIN</li>
                    <li>INSTAGRAM</li>
                    <li>DRIBBBLE</li>
                  </ul>
                </div>
                <div className="team-section__card-content">
                  <h4 className="team-section__card-content-title">
                    <a href="/team/details" className="team-section__card-content-title-name">Anna Peterson</a>
                  </h4>
                  <p className="team-section__card-content-subtitle">Co-Founder, Technical Director</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="team-section__card">
                <div className="team-section__card-thumb">
                  <img src="/assets/imgs/inner/team/team-thumb1_3.jpg" alt="thumb" />
                </div>
                <div className="team-section__card-items">
                  <ul className="team-section__card-items-list">
                    <li>FACEBOOK</li>
                    <li>LINKEDIN</li>
                    <li>INSTAGRAM</li>
                    <li>DRIBBBLE</li>
                  </ul>
                </div>
                <div className="team-section__card-content">
                  <h4 className="team-section__card-content-title">
                    <a href="/team/details" className="team-section__card-content-title-name">Leon Kowalski</a>
                  </h4>
                  <p className="team-section__card-content-subtitle">Co-Founder, Technical Director</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="team-section__card">
                <div className="team-section__card-thumb">
                  <img src="/assets/imgs/inner/team/team-thumb1_4.jpg" alt="thumb" />
                </div>
                <div className="team-section__card-items">
                  <ul className="team-section__card-items-list">
                    <li>FACEBOOK</li>
                    <li>LINKEDIN</li>
                    <li>INSTAGRAM</li>
                    <li>DRIBBBLE</li>
                  </ul>
                </div>
                <div className="team-section__card-content">
                  <h4 className="team-section__card-content-title">
                    <a href="/team/details" className="team-section__card-content-title-name">Thomas Johnson</a>
                  </h4>
                  <p className="team-section__card-content-subtitle">Co-Founder, Technical Director</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="team-section__card">
                <div className="team-section__card-thumb">
                  <img src="/assets/imgs/inner/team/team-thumb1_5.jpg" alt="thumb" />
                </div>
                <div className="team-section__card-items">
                  <ul className="team-section__card-items-list">
                    <li>FACEBOOK</li>
                    <li>LINKEDIN</li>
                    <li>INSTAGRAM</li>
                    <li>DRIBBBLE</li>
                  </ul>
                </div>
                <div className="team-section__card-content">
                  <h4 className="team-section__card-content-title">
                    <a href="/team/details" className="team-section__card-content-title-name">Jean-Michel Boujon</a>
                  </h4>
                  <p className="team-section__card-content-subtitle">Co-Founder, Technical Director</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="team-section__card">
                <div className="team-section__card-thumb">
                  <img src="/assets/imgs/inner/team/team-thumb1_6.jpg" alt="thumb" />
                </div>
                <div className="team-section__card-items">
                  <ul className="team-section__card-items-list">
                    <li>FACEBOOK</li>
                    <li>LINKEDIN</li>
                    <li>INSTAGRAM</li>
                    <li>DRIBBBLE</li>
                  </ul>
                </div>
                <div className="team-section__card-content">
                  <h4 className="team-section__card-content-title">
                    <a href="/team/details" className="team-section__card-content-title-name">Henri Heymans</a>
                  </h4>
                  <p className="team-section__card-content-subtitle">Co-Founder, Technical Director</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="team-section__card">
                <div className="team-section__card-thumb">
                  <img src="/assets/imgs/inner/team/team-thumb1_7.jpg" alt="thumb" />
                </div>
                <div className="team-section__card-items">
                  <ul className="team-section__card-items-list">
                    <li>FACEBOOK</li>
                    <li>LINKEDIN</li>
                    <li>INSTAGRAM</li>
                    <li>DRIBBBLE</li>
                  </ul>
                </div>
                <div className="team-section__card-content">
                  <h4 className="team-section__card-content-title">
                    <a href="/team/details" className="team-section__card-content-title-name">Nicolas Johnson</a>
                  </h4>
                  <p className="team-section__card-content-subtitle">Co-Founder, Technical Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Vision Section */}
      <div
        className="team-vision overflow-hidden bg-img"
        style={{ backgroundImage: 'url(/assets/imgs/inner/team/team-vision-bg.png)' }}
      >
        <div className="container rr-container-1800">
          <div className="row g-4 d-flex justify-content-start align-items-end">
            <div className="col-xl-4">
              <div className="team-vision__title">Designed to transform</div>
            </div>
            <div className="col-xl-5">
              <div className="team-vision__content">
                <div className="team-vision__item">
                  <div className="team-vision__item-title">One Team, Global Talent</div>
                  <p className="team-vision__item-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. neque porro quisquam, in qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
                </div>
                <div className="team-vision__item">
                  <div className="team-vision__item-title">Strategic Simplicity</div>
                  <p className="team-vision__item-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. neque porro quisquam, in qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
                </div>
                <div className="team-vision__item">
                  <p className="team-vision__item-text text-white">We partner like co-founders. Straight talk, no sugarcoating. This is how we exceed expectations, and deliver memorable brands.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-vision__thumb">
        <div className="container rr-container-1800">
          <div className="row">
            <div className="team-vision__thumb-img">
              <img src="/assets/imgs/inner/team/team-vision-thumb1_1.jpg" alt="thumb" />
            </div>
          </div>
        </div>
      </div>

      {/* Team Achievement Section */}
      <div className="team-achievement section-bg section-spacing rr-ov-hidden">
        <div className="container rr-container-1800">
          <div className="row g-4 d-flex justify-content-center">
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="team-achievement__card">
                <div className="team-achievement__card-title">100K</div>
                <p className="team-achievement__card-text">We have 100+ satisfied clients</p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6">
              <div className="team-achievement__card">
                <div className="team-achievement__card-title">100+</div>
                <p className="team-achievement__card-text">Projects success rate 99% guaranteed</p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6">
              <div className="team-achievement__card">
                <div className="team-achievement__card-title">366+</div>
                <p className="team-achievement__card-text">We helped companies secure $25M+ in funding</p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="team-achievement__card">
                <div className="team-achievement__card-title">19+</div>
                <p className="team-achievement__card-text">Award for Outstanding Digital Innovation</p>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
