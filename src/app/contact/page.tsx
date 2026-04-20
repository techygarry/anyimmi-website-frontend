import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us – AnyImmi',
  description: 'We are always ready to help you and answer your questions. Connect with AnyImmi today.',
};

export default function ContactPage() {
  return (
    <InnerPageLayout>

      {/* Breadcrumb Section */}
      <div className="breadcrumb2 overflow-hidden">
        <div className="container rr-container-1600">
          <div className="breadcrumb2-content">
            <span className="breadcrumb2-content__subtitle">Contact AnyImmi</span>
            <div className="breadcrumb2-content__title">Get In Touch</div>
            <div className="breadcrumb2-content__heading">We are always ready to help you and
              answer your questions about the bundle
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="contact-area__info-row">
        <div className="container">
          <div className="row gy-3">
            <div className="col-md-6 col-lg-3">
              <div className="contact-info-card">
                <h6 className="contact-info-card__title">Address</h6>
                <p className="contact-info-card__text">
                  Moga Road Near HDFC Bank, Kotkapura, Punjab, India
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="contact-info-card">
                <h6 className="contact-info-card__title">Phone / Message</h6>
                <p className="contact-info-card__text">support@anyimmi.com</p>
                <p className="contact-info-card__text">+91 98761-49140</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="contact-info-card">
                <h6 className="contact-info-card__title">Working Hours</h6>
                <p className="contact-info-card__text">Monday to Saturday 09:30 to 17:30<br />Sunday Closed</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="contact-info-card">
                <h6 className="contact-info-card__title">Follow us</h6>
                <div className="contact-info-card__social">
                  <a href="#" className="social-circle" aria-label="facebook">f</a>
                  <a href="#" className="social-circle" aria-label="twitter">x</a>
                  <a href="#" className="social-circle" aria-label="linkedin">in</a>
                  <a href="#" className="social-circle" aria-label="youtube">&#9654;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="contact-area">
        <div className="container">
          {/* Big heading */}
          <div className="row">
            <div className="col-12">
              <h2 className="contact-area__heading">Connect. Collaborate. Create.</h2>
            </div>
          </div>

          {/* Form card */}
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Decorative background */}
        <div className="contact-area__bg bg-img" style={{ backgroundImage: "url('/assets/imgs/inner/contact/contact-bg.jpg')" }}
          aria-hidden="true"></div>
      </section>
      
      {/* Map Section */}
      <div className="map">
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2042.3062470192235!2d74.83558966612244!3d30.58499708855249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x391751aaddb63b5d%3A0x9f5463029d40977f!2sAdsol%20Digital%20Services%2C%20Kot%20Kapura%20-%20Moga%20Rd%2C%20near%20HDFC%20Bank%2C%20Kot%20Kapura%2C%20Punjab%20151204!3m2!1d30.585017299999997!2d74.8357825!4m5!1s0x391751aaddb63b5d%3A0x9f5463029d40977f!2sAdsol%20Digital%20Services%2C%20Kot%20Kapura%20-%20Moga%20Rd%2C%20near%20HDFC%20Bank%2C%20Kot%20Kapura%2C%20Punjab%20151204!3m2!1d30.585017299999997!2d74.8357825!5e0!3m2!1sen!2sin!4v1772686689841!5m2!1sen!2sin"
            width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
        </div>
      </div>

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
                <span className="text-slider-1">strategy</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">strategy</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
                <span className="text-slider-2">marketing</span>
                <span className="text-slider-1">analysis</span>
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
