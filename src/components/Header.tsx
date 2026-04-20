import Link from 'next/link';
import { ProductSwitcher } from '@/lib/platform-client';
import { getCategories } from '@/lib/api';
import CategoryIcon from './CategoryIcon';
import CheckoutLink from './CheckoutLink';

interface HeaderProps {
  logoSrc?: string;
  containerClass?: string;
}

export default async function Header({
  logoSrc = '/assets/imgs/home-8/logo/dark-logo.png',
  containerClass = 'container rr-container-1800',
}: HeaderProps) {
  const categories = await getCategories();

  return (
    <header className="header-area">
      <div className="header-main">
        <div className={containerClass}>
          <div className="header-area__inner">
            <div className="header__logo">
              <Link href="/"><img src={logoSrc} className="normal-logo" alt="AnyImmi Logo" style={{ maxHeight: '40px', width: 'auto' }} /></Link>
            </div>
            <div className="header__nav" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <nav className="main-menu">
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li className="has-dropdown menu-item-has-children anyimmi-mega-parent">
                    <Link href="/categories">Assets</Link>
                    <div className="anyimmi-mega-menu">
                      <div className="anyimmi-mega-menu__body">
                        {(() => {
                          const colSize = Math.ceil(categories.length / 3);
                          const cols = [
                            categories.slice(0, colSize),
                            categories.slice(colSize, colSize * 2),
                            categories.slice(colSize * 2),
                          ];
                          return (
                            <div className="anyimmi-mega-menu__grid">
                              {cols.map((col, ci) => (
                                <div className="anyimmi-mega-menu__col" key={ci}>
                                  {col.map((cat) => (
                                    <Link href={`/categories/${cat.slug}`} className="anyimmi-mega-menu__item" key={cat._id}>
                                      <span className="anyimmi-mega-menu__icon">
                                        {cat.icon && <CategoryIcon name={cat.icon} size={15} />}
                                      </span>
                                      <span className="anyimmi-mega-menu__name">{cat.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          );
                        })()}
                      </div>
                      <div className="anyimmi-mega-menu__footer">
                        <Link href="/categories" className="anyimmi-mega-menu__viewall">
                          View all {categories.length} asset categories <i className="fa-regular fa-arrow-right"></i>
                        </Link>
                        <CheckoutLink className="anyimmi-mega-menu__cta-btn">
                          Get Bundle <i className="fa-regular fa-arrow-right"></i>
                        </CheckoutLink>
                      </div>
                    </div>
                  </li>
                  <li><Link href="/pricing">Pricing</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {/* Renders only for logged-in users with 2+ entitlements (auto-hides on marketing). */}
              <ProductSwitcher currentProduct="bundle" />
              <CheckoutLink className="rr-btn-border">
                <span className="text">GET STARTED</span>
                <span className="icon"><i className="fa-regular fa-arrow-right"></i></span>
              </CheckoutLink>
              <div className="header__navicon d-xl-none">
                <div className="side-toggle">
                  <a className="bar-icon" href="#">
                    <span></span><span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
