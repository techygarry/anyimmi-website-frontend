"use client";

import { useEffect, useState } from "react";

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatarColor: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

function getInitials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
}

function StarIcons({ count }: { count: number }) {
  return (
    <span className="testimonial-area8__stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="testimonial-area8__star">
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </span>
  );
}

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/api/content/testimonials`)
      .then((r) => r.json())
      .then((res) => {
        if (res.data?.length > 0) setTestimonials(res.data);
      })
      .catch(() => {});
  }, []);

  // Re-initialize Swiper after testimonials render
  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      // Destroy existing instance on this element if any
      const el = document.querySelector(".testimonial-area8__active") as any;
      if (el?.swiper) {
        try { el.swiper.destroy(true, true); } catch (_) {}
      }
      // Re-init all swipers (includes testimonial)
      if (w.initSwipers) w.initSwipers();
    }, 100);
    return () => clearTimeout(timer);
  }, [testimonials]);

  if (testimonials.length === 0) return null;

  return (
    <section className="testimonial-area8 section-spacing">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-8 text-center">
            <h2 className="section-title rr-title-anim-2" style={{ color: "#fff" }}>
              RCICs inside the bundle (first 14 days after soft launch).
            </h2>
          </div>
        </div>
        <div className="swiper testimonial-area8__active">
          <div className="swiper-wrapper">
            {testimonials.map((t) => (
              <div className="swiper-slide" key={t._id}>
                <div className="testimonial-area8__card">
                  <div className="row g-0 align-items-stretch">
                    <div className="col-12 col-md-3">
                      <aside className="testimonial-area8__aside">
                        <div className="testimonial-area8__person">
                          <div className="testimonial-area8__name">{t.name}</div>
                          <div className="testimonial-area8__role">{t.role}</div>
                        </div>
                        <div className="testimonial-area8__avatar-wrap">
                          <div
                            className="testimonial-area8__avatar"
                            style={{
                              background: t.avatarColor || "#573CFF",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#fff",
                              fontSize: "24px",
                              fontWeight: 700,
                              letterSpacing: "1px",
                            }}
                          >
                            {getInitials(t.name)}
                          </div>
                        </div>
                      </aside>
                    </div>
                    <div className="col-12 d-md-none">
                      <hr className="testimonial-area8__divider--hr" />
                    </div>
                    <div className="d-none d-md-block col-md-1">
                      <span className="testimonial-area8__divider"></span>
                    </div>
                    <div className="col-12 col-md-8">
                      <div className="testimonial-area8__body">
                        <div className="testimonial-area8__rating">
                          <div className="testimonial-area8__score">{t.rating.toFixed(1)}</div>
                          <div className="testimonial-area8__meta">
                            <span className="testimonial-area8__label">Rating</span>
                            <StarIcons count={t.rating} />
                          </div>
                        </div>
                        <p className="testimonial-area8__text">{t.text}</p>
                      </div>
                    </div>
                  </div>
                  <span className="testimonial-area8__quote" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="158" height="125" viewBox="0 0 158 125" fill="none">
                      <path d="M67.4352 8.91278L61.7022 0C22.0365 26.9593 0 59.7157 0 86.675C0 112.743 18.9549 125 35.0399 125C55.3134 125 69.6353 107.616 69.6353 89.3488C69.6353 73.9762 59.9393 60.828 46.9361 55.9224C43.1915 54.5819 39.6657 53.4696 39.6657 47.0095C39.6657 38.7671 45.6174 26.5173 67.4352 8.91278ZM154.918 8.91278L149.185 0C109.957 26.9593 87.4832 59.7157 87.4832 86.675C87.4832 112.743 106.875 125 122.96 125C143.452 125 158 107.616 158 89.3488C158 73.9762 148.085 60.828 134.638 55.9224C130.893 54.5819 127.586 53.4696 127.586 47.0095C127.586 38.7671 133.756 26.5101 154.911 8.90565L154.918 8.91278Z" fill="#E9E2D9" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-5">
          <p className="wow fadeInUp" data-wow-delay="0.3s" style={{ fontSize: "18px", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
            <svg
              style={{ display: "inline-block", verticalAlign: "middle", marginRight: "8px", width: "20px", height: "20px", fill: "#573CFF" }}
              viewBox="0 0 24 24"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            Trusted by 500+ Immigration Consultants Across Canada
          </p>
          <p
            className="wow fadeInUp"
            data-wow-delay="0.4s"
            style={{
              marginTop: "10px",
              fontSize: "13px",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "640px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.5,
            }}
          >
            Names shown are early Founder-tier buyers who agreed to be quoted. Full case studies publishing July 1.
          </p>
        </div>
      </div>
    </section>
  );
}
