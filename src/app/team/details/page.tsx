import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Team Details – Trexa',
  description: 'Learn more about Leon Kowalski, Marketing Partner at Trexa with 12 years of expertise.',
};

export default function TeamDetailsPage() {
  return (
    <InnerPageLayout>
      {/* Team Details Section */}
      <section className="team-details section-bg rr-ov-hidden">
        <div className="team-details__title">Leon Kowalski</div>
        <div className="container rr-container-1600">
          <div className="row">
            <div className="col-xl-12">
              <div className="team-details__items">
                <div className="team-details__items-thumb">
                  <img src="/assets/imgs/inner/team-details/team-details-thumb1_1.jpg" alt="thumb" />
                </div>
                <div className="team-details__items-bottom">
                  <div className="team-details__items-social">
                    <p className="team-details__items-social-subtitle">Social Media</p>
                    <div className="team-details__items-social-link">
                      <a href="#!"><span><i className="fa-brands fa-facebook-f"></i></span></a>
                      <a href="#!"><span><i className="fa-brands fa-twitter"></i></span></a>
                      <a href="#!"><span><i className="fa-brands fa-linkedin-in"></i></span></a>
                      <a href="#!"><span><i className="fa-brands fa-instagram"></i></span></a>
                    </div>
                  </div>
                  <div className="team-details__items-role">
                    <p className="team-details__items-role-subtitle">Role</p>
                    <h4 className="team-details__items-role-title">Marketing Partner</h4>
                  </div>
                  <div className="team-details__items-exp">
                    <p className="team-details__items-exp-subtitle">Experience</p>
                    <h4 className="team-details__items-exp-title">12 Years Expertise</h4>
                  </div>
                </div>
                <div className="team-details__items-content">
                  <p className="team-details__items-content-subtitle">We thrive on innovation, creativity, and a relentless, drive to deliver digital excellence. as your trusted digital partner we bring together strategy, design, and technology to elevate your brand&apos;s presence. From user-focused web design to data-driven marketing expertise break barriers and achieve measurable growth.</p>
                  <p className="team-details__items-content-subtitle2">As a full-service digital agency, we craft strategies that inspire, designs that engage, and campaigns that convert. Whether you&apos;re a startup aiming to stand out or an established brand seeking a fresh perspective, we tailor solutions to your unique goals. together, we&apos;ll shape a digital journey that transforms vision into reality.</p>
                  <p className="team-details__items-content-subtitle3">Our all-in-one SaaS platform puts everything you need at your fingertips. from management &amp; automation to customer engagement and support, we empower you to work smarter, faster, and more securely. With an intuitive interface and customizable features, it&apos;s your complete solution for managing growth and staying ahead in the digital landscape.</p>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
