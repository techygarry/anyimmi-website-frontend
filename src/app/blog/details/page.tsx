import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Blog Details – Trexa',
  description: 'How AI & Robotics Are Revolutionizing Modern Industries – read our in-depth article.',
};

export default function BlogDetailsPage() {
  return (
    <InnerPageLayout>
      {/* Blog Details Top Thumb */}
      <div className="blog-details__top">
        <img src="/assets/imgs/inner/blog-details/blog-details-thumb1_4.jpg" alt="bgthumb" />
      </div>

      {/* Blog Details Section */}
      <div className="blog-details section-spacing section-bg fix">
        <div className="container rr-container-1350">
          <div className="blog-details__up">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-xl-6">
                <div className="blog-details__up-wrap">
                  <div className="blog-details__subtitle">IT Solution</div>
                  <div className="blog-details__date">JULY 15, 2025 // Comments (03)</div>
                  <h1 className="blog-details__title">How AI &amp; Robotics Are Revolutionizing Modern Industries</h1>
                  <div className="blog-details__author">
                    <div className="blog-details__author-item">
                      <div className="blog-details__author-thumb">
                        <img src="/assets/imgs/inner/blog-details/blog-details-mentor1_1.png" alt="thumb" />
                      </div>
                      <div className="blog-details__author-content">
                        <div className="title">Writen by</div>
                        <div className="name">Codexipand</div>
                      </div>
                    </div>
                    <div className="blog-details__author-item2">
                      <div className="blog-details__author-content">
                        <div className="view">Viewed</div>
                        <div className="time">3 min read</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-5 justify-content-center">
            {/* Main Content */}
            <div className="col-12 col-xl-8 col-lg-8">
              <div className="blog-details-wrapper">
                <div className="blog-details-wrapper-items">
                  <div className="blog-details-wrapper-items-content wow fadeInUp" data-wow-delay=".7s">
                    <p className="blog-details-wrapper-items-content__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique a sunt in culpa qui officia deserunt mollitia animi, id est laborumi et dolorum fuga. et harum quidem rerum on facilis est et expedita distinctio. nam libero tempore,</p>
                    <p className="blog-details-wrapper-items-content__subtext">On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain.</p>
                    <div className="blog-details-wrapper-items-content__title">Automation in Manufacturing</div>
                    <p className="blog-details-wrapper-items-content__subtext1">On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain.</p>
                  </div>

                  <div className="blog-details-wrapper-items__client">
                    <div className="blog-details-wrapper-items__client-icon">
                      <svg width="56" height="44" viewBox="0 0 56 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.97157 40.2071C1.73675 36.6876 0 32.7402 0 26.3414C0 15.0817 7.71645 4.98969 18.9378 0L21.7424 4.43314C11.2685 10.2367 9.2208 17.7679 8.40424 22.5163C10.0907 21.622 12.2986 21.3099 14.4625 21.5158C20.1281 22.0531 24.594 26.8176 24.594 32.7402C24.594 35.7265 23.4359 38.5905 21.3745 40.7021C19.3131 42.8137 16.5172 44 13.6019 44C11.9897 43.9856 10.3964 43.6428 8.91478 42.9916C7.43313 42.3405 6.09272 41.3939 4.97157 40.2071ZM36.3775 40.2071C33.1427 36.6876 31.406 32.7402 31.406 26.3414C31.406 15.0817 39.1224 4.98969 50.3438 0L53.1483 4.43314C42.6744 10.2367 40.6268 17.7679 39.8102 22.5163C41.4967 21.622 43.7046 21.3099 45.8684 21.5158C51.5341 22.0531 56 26.8176 56 32.7402C56 35.7265 54.8419 38.5905 52.7805 40.7021C50.7191 42.8137 47.9232 44 45.0079 44C43.3957 43.9856 41.8024 43.6428 40.3208 42.9916C38.8391 42.3405 37.4987 41.3939 36.3775 40.2071Z" fill="#41F681" />
                      </svg>
                    </div>
                    <div className="blog-details-wrapper-items__client-content wow fadeInUp" data-wow-delay=".5s">
                      <p className="blog-details-wrapper-items__client-content-subtitle wow fadeInUp" data-wow-delay=".5s">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim id est laborum.</p>
                      <p className="blog-details-wrapper-items__client-content-name">Adam Peterson</p>
                    </div>
                  </div>

                  <div className="blog-details-wrapper-items-tag">
                    <p className="blog-details-wrapper-items-tag__subtitle">On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain.</p>
                    <div className="blog-details-wrapper-items-tag__thumb wow fadeInUp" data-wow-delay=".3s">
                      <img src="/assets/imgs/inner/blog-details/blog-details-thumb1_3.jpg" alt="thumb" />
                    </div>
                    <div className="blog-details-wrapper-items-tag-content">
                      <div className="blog-details-wrapper-items-tag-content__title">Smarter Healthcare</div>
                      <p className="blog-details-wrapper-items-tag-content__subtitle">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique a sunt in culpa qui officia deserunt mollitia animi, id est laborumi et dolorum fuga. et harum quidem rerum on facilis est et expedita distinctio. nam libero tempore,</p>
                      <div className="blog-details-wrapper-items-tag-content__title2">Testing &amp; Launch</div>
                      <p className="blog-details-wrapper-items-tag-content__subtitle2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique a sunt in culpa qui officia deserunt mollitia animi, id est laborumi et dolorum fuga. et harum quidem rerum on facilis est et expedita distinctio. nam libero tempore,</p>
                    </div>

                    <div className="blog-details-wrapper-items-tag__border wow fadeInUp" data-wow-delay=".5s">
                      <div className="row">
                        <div className="col-lg-8 col-12">
                          <div className="blog-details-wrapper-items-tag__tagcloud">
                            <div className="blog-details-wrapper-items-tag__tagcloud-title">Tags:</div>
                            <a className="blog-details-wrapper-items-tag__tagcloud-button" href="/blog/details">All</a>
                            <a className="blog-details-wrapper-items-tag__tagcloud-button" href="/blog/details">Solar Energy</a>
                            <a className="blog-details-wrapper-items-tag__tagcloud-button" href="/blog/details">Wind</a>
                          </div>
                        </div>
                        <div className="col-lg-4 col-12 mt-3 mt-lg-0 d-flex text-lg-end">
                          <div className="blog-details-wrapper-items-tag__title">Share:</div>
                          <div className="blog-details-wrapper-items-tag__social d-flex justify-content-end">
                            <a className="blog-details-wrapper-items-tag__social-icon" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="blog-details-wrapper-items-tag__social-icon" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="blog-details-wrapper-items-tag__social-icon" href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a className="blog-details-wrapper-items-tag__social-icon" href="#"><i className="fa-brands fa-youtube"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-details-wrapper-items-mentor">
                    <div className="blog-details-wrapper-items-mentor__thumb">
                      <img src="/assets/imgs/inner/blog-details/blog-details-mentor1_4.png" alt="thumb" />
                    </div>
                    <div className="blog-details-wrapper-items-mentor__content">
                      <div className="blog-details-wrapper-items-mentor__content-title">Sophia Reynolds</div>
                      <p className="blog-details-wrapper-items-mentor__content-subtitle">All the Lorem Ipsum generators on the Internet tend in repetition predefined chunks an necessary, making this the combined with handful of model sentence structures,</p>
                    </div>
                  </div>

                  <div className="blog-details-wrapper-items-comments">
                    <div className="blog-details-wrapper-items-comments__heading">
                      3 Perspectives on the Perfect AI Agency and Technology That&apos;s Right for You
                    </div>
                    <div className="blog-details-wrapper-items-comments-single wow fadeInUp" data-wow-delay=".5s">
                      <img src="/assets/imgs/inner/blog-details/blog-details-mentor1_1.png" className="blog-details-wrapper-items-comment-single__thumb" alt="image" />
                      <div className="blog-details-wrapper-items-comments-single-content">
                        <div className="blog-details-wrapper-items-comments-single-content-head d-flex gap-2 align-items-center justify-content-between">
                          <div className="blog-details-wrapper-items-comments-single-content-head__con">
                            <div className="blog-details-wrapper-items-comments-single-content-head__con-title">Maya Thompson</div>
                          </div>
                          <div className="blog-details-wrapper-items-comments-single-content-head__con-date">23 August 2025</div>
                        </div>
                        <p className="blog-details-wrapper-items-comments-single-content__text">I&apos;ve been researching different AI agencies lately and this article really helped me narrow down what to look for. I love the way you explained</p>
                        <div className="blog-details-wrapper-items-comments-single-content-head__icon">Reply</div>
                      </div>
                    </div>
                    <div className="blog-details-wrapper-items-comments-single ml-107 wow fadeInUp" data-wow-delay=".5s">
                      <img src="/assets/imgs/inner/blog-details/blog-details-mentor1_2.png" className="blog-details-wrapper-items-comment-single__thumb" alt="image" />
                      <div className="blog-details-wrapper-items-comments-single-content">
                        <div className="blog-details-wrapper-items-comments-single-content-head d-flex gap-2 align-items-center justify-content-between">
                          <div className="blog-details-wrapper-items-comments-single-content-head__con">
                            <div className="blog-details-wrapper-items-comments-single-content-head__con-title">Daniel Ross</div>
                          </div>
                          <div className="blog-details-wrapper-items-comments-single-content-head__con-date">23 August 2025</div>
                        </div>
                        <p className="blog-details-wrapper-items-comments-single-content__text">I&apos;ve been researching different AI agencies lately and this article really helped me narrow down what to look for. I love the way you explained</p>
                        <div className="blog-details-wrapper-items-comments-single-content-head__icon">Reply</div>
                      </div>
                    </div>
                    <div className="blog-details-wrapper-items-comments-single wow fadeInUp" data-wow-delay=".5s">
                      <img src="/assets/imgs/inner/blog-details/blog-details-mentor1_3.png" className="blog-details-wrapper-items-comment-single__thumb" alt="image" />
                      <div className="blog-details-wrapper-items-comments-single-content">
                        <div className="blog-details-wrapper-items-comments-single-content-head d-flex gap-2 align-items-center justify-content-between">
                          <div className="blog-details-wrapper-items-comments-single-content-head__con">
                            <div className="blog-details-wrapper-items-comments-single-content-head__con-title">Ella Morgan</div>
                          </div>
                          <div className="blog-details-wrapper-items-comments-single-content-head__con-date">23 August 2025</div>
                        </div>
                        <p className="blog-details-wrapper-items-comments-single-content__text">I&apos;ve been researching different AI agencies lately and this article really helped me narrow down what to look for. I love the way you explained</p>
                        <div className="blog-details-wrapper-items-comments-single-content-head__icon">Reply</div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-details-wrapper-items-form">
                    <div className="blog-details-wrapper-items-form__title">Leave A Comment</div>
                    <form action="#" id="blog-details-wrapper-items-form__contact" method="POST">
                      <div className="row g-4">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="blog-details-wrapper-items-form__contact-clt">
                            <input type="text" name="name" id="name" placeholder="Your name" />
                          </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                          <div className="blog-details-wrapper-items-form__contact-clt">
                            <input type="text" name="email" id="email2" placeholder="Email address" />
                          </div>
                        </div>
                        <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                          <div className="blog-details-wrapper-items-form__contact-clt">
                            <textarea name="message" id="message" placeholder="Message"></textarea>
                          </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="1s">
                          <div className="contact3-form__button">
                            <a href="#" className="rr-btn-button2 btn-purple">
                              <span className="text">Contact With Us</span>
                              <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                  <g clipPath="url(#clip0_246_2183)">
                                    <path d="M22.0004 11C16.6011 11 12.2227 6.07578 12.2227 0" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                                    <path d="M12.2227 22C12.2227 15.9258 16.5997 11 22.0004 11" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                                    <path d="M22.0005 11H0.000488281" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_246_2183">
                                      <rect width="22" height="22" fill="white"></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-12 col-xl-4 col-lg-4">
              <div className="main-sidebar2">
                <div className="main-sidebar2-widget">
                  <div className="main-sidebar2-widget__heading wow fadeInUp" data-wow-delay=".3s">
                    <div className="main-sidebar2-widget__heading-title">Search Here</div>
                  </div>
                  <div className="main-sidebar2-widget__search-widget wow fadeInUp" data-wow-delay=".5s">
                    <form action="#">
                      <input type="text" placeholder="Search here" />
                      <button type="submit">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 16C9.775 15.9998 11.4989 15.4056 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.4051 11.4997 15.9997 9.77546 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z" fill="white" />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="main-sidebar2-widget">
                  <div className="main-sidebar2-widget__heading wow fadeInUp" data-wow-delay=".3s">
                    <div className="main-sidebar2-widget__heading-title">Categories</div>
                  </div>
                  <div className="main-sidebar2-widget__categories">
                    <ul>
                      <li><a href="/blog"><span className="text"><i className="fa-regular fa-chevrons-right"></i>AI Integration solutions</span> <span>(02)</span></a></li>
                      <li><a href="/blog"><span className="text"><i className="fa-regular fa-chevrons-right"></i>AI Model Development</span> <span>(05)</span></a></li>
                      <li><a href="/blog"><span className="text"><i className="fa-regular fa-chevrons-right"></i>AI Strategy Consulting</span> <span>(03)</span></a></li>
                      <li><a href="/blog"><span className="text"><i className="fa-regular fa-chevrons-right"></i>Data Monitoring</span> <span>(02)</span></a></li>
                      <li><a href="/blog"><span className="text"><i className="fa-regular fa-chevrons-right"></i>Machine Learning</span> <span>(02)</span></a></li>
                      <li><a href="/blog"><span className="text"><i className="fa-regular fa-chevrons-right"></i>Neural Network</span> <span>(02)</span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="main-sidebar2-widget">
                  <div className="main-sidebar2-widget__heading wow fadeInUp" data-wow-delay=".3s">
                    <div className="main-sidebar2-widget__heading-title">Resent Post</div>
                  </div>
                  <div className="main-sidebar2-widget__post">
                    <div className="main-sidebar2-widget__post-items wow fadeInUp" data-wow-delay=".4s">
                      <div className="main-sidebar2-widget__post-items-thumb">
                        <img src="/assets/imgs/inner/blog-details/blog-details1_1.png" alt="thumb" />
                      </div>
                      <div className="main-sidebar2-widget__post-items-content">
                        <ul className="main-sidebar2-widget__post-items-content-post">
                          <li className="main-sidebar2-widget__post-items-content-post-date">feb 12, 2025</li>
                        </ul>
                        <div className="main-sidebar2-widget__post-items-content-title">
                          <a href="/blog/details">How to create a lasting impression</a>
                        </div>
                      </div>
                    </div>
                    <div className="main-sidebar2-widget__post-items wow fadeInUp" data-wow-delay=".6s">
                      <div className="main-sidebar2-widget__post-items-thumb">
                        <img src="/assets/imgs/inner/blog-details/blog-details1_2.png" alt="thumb" />
                      </div>
                      <div className="main-sidebar2-widget__post-items-content">
                        <ul className="main-sidebar2-widget__post-items-content-post">
                          <li className="main-sidebar2-widget__post-items-content-post-date">feb 12, 2025</li>
                        </ul>
                        <div className="main-sidebar2-widget__post-items-content-title">
                          <a href="/blog/details">Photography tips for design studios</a>
                        </div>
                      </div>
                    </div>
                    <div className="main-sidebar2-widget__post-items wow fadeInUp" data-wow-delay=".8s">
                      <div className="main-sidebar2-widget__post-items-thumb">
                        <img src="/assets/imgs/inner/blog-details/blog-details1_3.png" alt="thumb" />
                      </div>
                      <div className="main-sidebar2-widget__post-items-content">
                        <ul className="main-sidebar2-widget__post-items-content-post">
                          <li className="main-sidebar2-widget__post-items-content-post-date">feb 12, 2025</li>
                        </ul>
                        <div className="main-sidebar2-widget__post-items-content-title">
                          <a href="/blog/details">How to create a lasting impression</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-sidebar2-widget wow fadeInUp" data-wow-delay=".9s">
                  <div className="main-sidebar2-widget__heading">
                    <div className="main-sidebar2-widget__heading-title">Tags</div>
                  </div>
                  <div className="main-sidebar2-widget__tags">
                    <div className="main-sidebar2-widget__tags-tagcloud">
                      <a href="/blog/details" className="active">Creative</a>
                      <a href="/blog/details">Business</a>
                      <a href="/blog/details">Technology</a>
                      <a href="/blog/details">UI/UX</a>
                      <a href="/blog/details">Marketing</a>
                      <a href="/blog/details">Digital Agency</a>
                      <a href="/blog/details">Design</a>
                      <a href="/blog/details">Energy</a>
                      <a href="/blog/details">Portfolio</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
