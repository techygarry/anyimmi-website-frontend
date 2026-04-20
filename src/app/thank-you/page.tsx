import type { Metadata } from 'next';
import { Suspense } from 'react';
import InnerPageLayout from '@/components/InnerPageLayout';
import ThankYouContent from './ThankYouContent';

export const metadata: Metadata = {
  title: 'Thank You — AnyImmi',
  description: 'Your AnyImmi marketing bundle purchase is confirmed.',
};

export default function ThankYouPage() {
  return (
    <InnerPageLayout>
      {/* Breadcrumb area */}
      <section className="breadcrumb__area breadcrumb__bg" style={{ backgroundImage: "url('/assets/imgs/home-8/pricing/pricing-bg6_1.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__content">
                <h1 className="breadcrumb__title">Thank You!</h1>
                <div className="breadcrumb__list">
                  <span><a href="/">Home</a></span>
                  <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                  <span>Thank You</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense>
        <ThankYouContent />
      </Suspense>
    </InnerPageLayout>
  );
}
