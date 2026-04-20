'use client';
import { useSearchParams } from 'next/navigation';

const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL || 'http://localhost:3001';

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <section className="section-spacing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center">
            <div className="mb-4">
              <i className="fa-solid fa-circle-check" style={{ fontSize: '80px', color: '#22c55e' }}></i>
            </div>
            <h2 className="mb-3" style={{ fontSize: '36px', fontWeight: 700 }}>Your Purchase is Confirmed!</h2>
            <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.6 }}>
              Thank you for choosing AnyImmi. Your marketing bundle is on its way to your inbox.
              Check your email for access links to all your templates.
            </p>
            {sessionId && (
              <p style={{ fontSize: '14px', color: '#888', marginTop: '8px' }}>
                Order reference: {sessionId.slice(0, 20)}…
              </p>
            )}

            <div className="row gy-4 mt-5">
              <div className="col-md-4">
                <div style={{ padding: '30px 20px', background: '#f6f0e9', borderRadius: '12px' }}>
                  <i className="fa-solid fa-envelope" style={{ fontSize: '32px', color: '#573CFF', marginBottom: '12px', display: 'block' }}></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '8px' }}>Step 1</h5>
                  <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>Check your email for the access link and receipt</p>
                </div>
              </div>
              <div className="col-md-4">
                <div style={{ padding: '30px 20px', background: '#f6f0e9', borderRadius: '12px' }}>
                  <i className="fa-solid fa-download" style={{ fontSize: '32px', color: '#573CFF', marginBottom: '12px', display: 'block' }}></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '8px' }}>Step 2</h5>
                  <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>Click the Canva links to add templates to your account</p>
                </div>
              </div>
              <div className="col-md-4">
                <div style={{ padding: '30px 20px', background: '#f6f0e9', borderRadius: '12px' }}>
                  <i className="fa-solid fa-pen-to-square" style={{ fontSize: '32px', color: '#573CFF', marginBottom: '12px', display: 'block' }}></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '8px' }}>Step 3</h5>
                  <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>Customize with your brand and start publishing</p>
                </div>
              </div>
            </div>

            <div className="mt-5 p-4" style={{ background: '#f0ecff', borderRadius: '12px' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '8px' }}>Ready to Go Further?</h4>
              <p style={{ color: '#555', margin: '0 0 16px' }}>
                Upgrade to AnyImmi Portal for AI-powered content generation, auto-scheduling, and a full CRM.
              </p>
              <a href={PORTAL_URL} className="rr-btn-border btn-purple">
                <span className="text">EXPLORE ANYIMMI PORTAL</span>
                <span className="icon"><i className="fa-regular fa-arrow-right"></i></span>
              </a>
            </div>

            <div className="mt-5">
              <p style={{ fontWeight: 600, marginBottom: '12px' }}>Share AnyImmi with fellow consultants:</p>
              <div className="d-flex gap-3 justify-content-center">
                <a href="#" className="footer-area8__social-link" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Fb</a>
                <a href="#" className="footer-area8__social-link" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>In</a>
                <a href="#" className="footer-area8__social-link" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>X</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
