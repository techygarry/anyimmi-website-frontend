import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Blog List – Trexa',
  description: 'Browse our blog articles in list format covering AI, robotics, and technology.',
};

export default function BlogListPage() {
  return (
    <InnerPageLayout>
      {/* Breadcrumb Section */}
      <div className="breadcrumb2 overflow-hidden">
        <div className="container rr-container-1600">
          <div className="breadcrumb2-content">
            <span className="breadcrumb2-content__subtitle">Our Daily Journal list</span>
            <div className="breadcrumb2-content__title">Recent Posts</div>
            <div className="breadcrumb2-content__heading">Story behind the Data and reflect on Beyond the desk process.</div>
          </div>
        </div>
      </div>

      {/* Blog List Section */}
      <section className="blog-2 section-spacing rr-bg-primary">
        <div className="container rr-container-1800">
          <div className="blog-2__warpper">
            <div className="blog-2__media">
              <img src="/assets/imgs/home-2/blog/blog.jpg" alt="image" />
            </div>
            <div className="blog-2__item">
              <div className="blog-2__item-left">
                <h2 className="title"><a href="#">How AI &amp; Robotics Are Revolutionizing <br /> Modern Industries</a></h2>
                <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
              <div className="blog-2__item-right">
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

            <div className="blog-2__item">
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

            <div className="blog-2__item">
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

            <div className="blog-2__item">
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

      {/* Marquee Section */}
      <div className="marque-section6 rr-ov-hidden">
        <div className="marquee-wrapper text-slider-1">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider-1">strategy</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">strategy</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">strategy</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">strategy</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
