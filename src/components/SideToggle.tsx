import { getCategories } from '@/lib/api';
import MobileCategoryAccordion from './MobileCategoryAccordion';
import CheckoutLink from './CheckoutLink';

export default async function SideToggle() {
  const categories = await getCategories();

  return (
    <>
      <aside className="fix">
        <div className="side-info">
          <div className="side-info-content">
            <div className="offset-widget offset-header">
              <div className="offset-logo">
                <a href="/"><img className="show-light" src="/assets/imgs/home-8/logo/dark-logo.png" alt="AnyImmi logo" style={{ maxHeight: '36px', width: 'auto' }} /></a>
              </div>
              <button id="side-info-close" className="side-info-close">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="mobile-menu d-xl-none fix">
              <MobileCategoryAccordion categories={categories.map(c => ({
                _id: c._id,
                name: c.name,
                slug: c.slug,
                icon: c.icon,
                assetCount: c.assetCount,
              }))} />
            </div>
            <div className="offset-button">
              <CheckoutLink className="rr-btn">
                <span className="btn-wrap">
                  <span className="text-one">Get Started</span>
                  <span className="text-two">Get Started</span>
                </span>
              </CheckoutLink>
            </div>
            <div className="offset-widget-box">
              <h2 className="title">Contact Us</h2>
              <div className="contact-meta">
                <div className="contact-item">
                  <span className="icon"><i className="fa-solid fa-location-dot"></i></span>
                  <span className="text">Toronto, ON, Canada</span>
                </div>
                <div className="contact-item">
                  <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                  <span className="text"><a href="mailto:support@anyimmi.com">support@anyimmi.com</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="offcanvas-overlay"></div>
    </>
  );
}
