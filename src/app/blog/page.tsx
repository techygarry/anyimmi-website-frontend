import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Blog – Trexa',
  description: 'Read our latest blog posts on web design, technology, and digital innovation.',
};

export default function BlogPage() {
  return (
    <InnerPageLayout>
      {/* Breadcrumb Section */}
      <div className="breadcrumb2 overflow-hidden">
        <div className="container rr-container-1600">
          <div className="breadcrumb2-content">
            <span className="breadcrumb2-content__subtitle">Our Daily Journal grid</span>
            <div className="breadcrumb2-content__title">Recent Posts</div>
            <div className="breadcrumb2-content__heading">Story behind the Data and reflect on Beyond the desk process.</div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="blog-section-5__area">
        <div className="blog-section-5__wrapper section-spacing">
          <div className="container rr-container-1800">
            <div className="blog-section-5__wrap">
              <div className="blog-section-5__item">
                <div className="blog-section-5__meta">
                  <span className="blog-section-5__catagory">Insight</span>
                  <span className="blog-section-5__time">6 min read</span>
                </div>
                <h3 className="blog-section-5__title">
                  <a href="/blog/details">Building Trust Online: The Role <br />of Web Design in Establishing Credibility.</a>
                </h3>
                <div className="blog-section-5__thumb">
                  <a href="/blog/details"><img src="/assets/imgs/inner/blog/blog-5-img-01.jpg" alt="img not found" /></a>
                  <span className="blog-section-5__date">April 16, 2025</span>
                </div>
                <div className="blog-section-5__icon">
                  <a href="/blog/details"><i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="blog-section-5__item">
                <div className="blog-section-5__meta">
                  <span className="blog-section-5__catagory">Insight</span>
                  <span className="blog-section-5__time">6 min read</span>
                </div>
                <h3 className="blog-section-5__title">
                  <a href="/blog/details">Visual Credibility: How Color, Typography &amp; Imagery Impact User Trust</a>
                </h3>
                <div className="blog-section-5__thumb">
                  <a href="/blog/details"><img src="/assets/imgs/inner/blog/blog-5-img-02.jpg" alt="img not found" /></a>
                  <span className="blog-section-5__date">April 16, 2025</span>
                </div>
                <div className="blog-section-5__icon">
                  <a href="/blog/details"><i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="blog-section-5__item">
                <div className="blog-section-5__meta">
                  <span className="blog-section-5__catagory">Insight</span>
                  <span className="blog-section-5__time">6 min read</span>
                </div>
                <h3 className="blog-section-5__title">
                  <a href="/blog/details">First Impressions Matter: How Design Shapes Online Trust &amp; Loyalty</a>
                </h3>
                <div className="blog-section-5__thumb">
                  <a href="/blog/details"><img src="/assets/imgs/inner/blog/blog-5-img-03.jpg" alt="img not found" /></a>
                  <span className="blog-section-5__date">April 16, 2025</span>
                </div>
                <div className="blog-section-5__icon">
                  <a href="/blog/details"><i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="blog-section-5__item">
                <div className="blog-section-5__meta">
                  <span className="blog-section-5__catagory">Insight</span>
                  <span className="blog-section-5__time">6 min read</span>
                </div>
                <h3 className="blog-section-5__title">
                  <a href="/blog/details">Building Trust Online: The Role <br />of Web Design in Establishing Credibility.</a>
                </h3>
                <div className="blog-section-5__thumb">
                  <a href="/blog/details"><img src="/assets/imgs/inner/blog/blog-5-img-04.jpg" alt="img not found" /></a>
                  <span className="blog-section-5__date">April 16, 2025</span>
                </div>
                <div className="blog-section-5__icon">
                  <a href="/blog/details"><i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="blog-section-5__item">
                <div className="blog-section-5__meta">
                  <span className="blog-section-5__catagory">Insight</span>
                  <span className="blog-section-5__time">6 min read</span>
                </div>
                <h3 className="blog-section-5__title">
                  <a href="/blog/details">Visual Credibility: How Color, Typography &amp; Imagery Impact User Trust</a>
                </h3>
                <div className="blog-section-5__thumb">
                  <a href="/blog/details"><img src="/assets/imgs/inner/blog/blog-5-img-05.jpg" alt="img not found" /></a>
                  <span className="blog-section-5__date">April 16, 2025</span>
                </div>
                <div className="blog-section-5__icon">
                  <a href="/blog/details"><i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="blog-section-5__item">
                <div className="blog-section-5__meta">
                  <span className="blog-section-5__catagory">Insight</span>
                  <span className="blog-section-5__time">6 min read</span>
                </div>
                <h3 className="blog-section-5__title">
                  <a href="/blog/details">First Impressions Matter: How Design Shapes Online Trust &amp; Loyalty</a>
                </h3>
                <div className="blog-section-5__thumb">
                  <a href="/blog/details"><img src="/assets/imgs/inner/blog/blog-5-img-06.jpg" alt="img not found" /></a>
                  <span className="blog-section-5__date">April 16, 2025</span>
                </div>
                <div className="blog-section-5__icon">
                  <a href="/blog/details"><i className="fa-solid fa-arrow-right"></i></a>
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
