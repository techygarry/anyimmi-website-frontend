'use client';
import { useState } from 'react';
import Link from 'next/link';

interface MobileCategory {
  _id: string;
  name: string;
  slug: string;
  icon?: string;
  assetCount: number;
}

export default function MobileCategoryAccordion({ categories }: { categories: MobileCategory[] }) {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => {
    const w = window as any;
    const $ = w.$ || w.jQuery;
    if ($) {
      $('.side-info').removeClass('info-open');
      $('.offcanvas-overlay').removeClass('overlay-open');
    }
  };

  return (
    <div className="anyimmi-mobile-nav">
      <ul className="anyimmi-mobile-nav__list">
        <li>
          <Link href="/" className="anyimmi-mobile-nav__link" onClick={closeSidebar}>Home</Link>
        </li>
        <li className="anyimmi-mobile-nav__has-sub">
          <div className="anyimmi-mobile-nav__link-row">
            <Link href="/categories" className="anyimmi-mobile-nav__link" onClick={closeSidebar}>Assets</Link>
            <button
              className={`anyimmi-mobile-nav__toggle ${open ? 'is-open' : ''}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle categories"
            >
              <i className={`fa-solid fa-chevron-${open ? 'up' : 'down'}`}></i>
            </button>
          </div>
          <div className={`anyimmi-mobile-nav__sub ${open ? 'is-open' : ''}`}>
            <div className="anyimmi-mobile-nav__sub-scroll">
              {categories.map((cat) => (
                <Link
                  key={cat._id}
                  href={`/categories/${cat.slug}`}
                  className="anyimmi-mobile-nav__sub-item"
                  onClick={closeSidebar}
                >
                  <span className="anyimmi-mobile-nav__sub-name">{cat.name}</span>
                  {cat.assetCount > 0 && (
                    <span className="anyimmi-mobile-nav__sub-count">{cat.assetCount}</span>
                  )}
                </Link>
              ))}
            </div>
            <Link
              href="/categories"
              className="anyimmi-mobile-nav__sub-viewall"
              onClick={closeSidebar}
            >
              View All Assets <i className="fa-regular fa-arrow-right" style={{ fontSize: '11px' }}></i>
            </Link>
          </div>
        </li>
        <li>
          <Link href="/about" className="anyimmi-mobile-nav__link" onClick={closeSidebar}>About Us</Link>
        </li>
        <li>
          <Link href="/contact" className="anyimmi-mobile-nav__link" onClick={closeSidebar}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}
