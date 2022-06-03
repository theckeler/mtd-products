import React from "react";
function Footer() {
  return (
    <>
      <div className="upper-footer-md container">
        <div className="row">
          <div
            className="
                footer-controls
                col-sm-12 col-md-6 col-lg-4
                offset-lg-1
                order-md-1
              "
          >
            <div className="footer-email-signup">
              <div className="content-asset">
                <div className="container">
                  <form
                    data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/MCSubscription-FooterSubscribe"
                    id="email-subscribe-form"
                    autoComplete="on"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="email-signup">
                            Sign up for Emails from Cub Cadet
                            <br />
                            <span className="legal">
                              Sign up to receive communication on services,
                              products and special offers. You may unsubscribe
                              at any time. Please refer to our
                              <a
                                className="footer-link"
                                href="https://www.cubcadet.com/en_US/privacy-and-security/privacy-policy.html"
                              >
                                Privacy Policy
                              </a>
                              .
                            </span>
                          </label>
                          <div className="input-group">
                            <input
                              aria-label="Join our Email List"
                              className="form-control"
                              data-missing-msg="Please fill out this field."
                              data-missing-type="Required Field:"
                              id="email-signup"
                              name="hpEmailSignUp"
                              pattern="^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$"
                              placeholder="Enter Your Email Address"
                              type="email"
                              autoComplete="email"
                            />
                            <span className="input-group-btn">
                              <button
                                className="btn btn-secondary"
                                type="submit"
                              >
                                Go
                              </button>
                            </span>
                            <div className="invalid-feedback">&nbsp;</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-btns-group">
              <div className="content-asset">
                <a
                  className="footer-button finance-options display-body font-bold"
                  href="https://www.cubcadet.com/en_US/financing"
                  title="Go to Finance Options"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="svg10"
                    version="1.1"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                  >
                    <defs id="defs14" />
                    <g id="g8" transform="translate(1,1)">
                      <circle id="circle2" r="11" cy="11" cx="11" />
                      <g id="text6" aria-label="$">
                        <path
                          id="path823"
                          d="m 14.704,12.32 q 0,1.168 -0.816,1.984 -0.736,0.768 -1.92,0.992 V 16 H 10.256 V 15.296 Q 7.9839998,14.928 7.2959998,12.624 l 1.808,-0.496 q 0.288,0.96 1.1520002,1.248 v -2.352 q -1.2800002,-0.336 -1.9200002,-0.848 -0.848,-0.688 -0.848,-1.84 0,-1.104 0.864,-1.824 0.736,-0.624 1.9040002,-0.8 v -0.88 h 1.712 V 5.68 q 1.392,0.24 2.352,1.552 l -1.392,1.152 q -0.4,-0.544 -0.96,-0.816 v 1.936 q 2.736,0.8 2.736,2.816 z M 10.256,7.6 q -0.8160002,0.224 -0.8160002,0.736 0,0.448 0.8160002,0.736 z m 2.48,4.768 q 0,-0.544 -0.768,-0.848 v 1.856 q 0.768,-0.256 0.768,-1.008 z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span>Finance Options</span>
                </a>
                <a
                  className="footer-button find-a-dealer display-body font-bold"
                  href="https://www.cubcadet.com/en_US/servicelocator"
                  title="Go to Service Locator"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="24"
                    viewBox="0 0 16 24"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      transform="translate(1 1)"
                    >
                      <path
                        stroke="#FFC20F"
                        d="M0 6.923C0 3.089 3.13 0 6.986 0 10.87 0 14 3.09 14 6.923 14 9.726 8.522 19.424 6.986 23 5.478 19.452 0 9.726 0 6.923z"
                      />
                      <circle cx="7" cy="6" r="3" fill="#FFF" />
                    </g>
                  </svg>
                  <span>Find Service</span>
                </a>
              </div>
            </div>
            <div className="content-asset">
              <ul className="social-links">
                <li>
                  <a
                    className="social-icon facebook"
                    title="Go to Facebook"
                    href="https://www.facebook.com/cubcadet/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span></span>
                  </a>
                </li>
                <li>
                  <a
                    className="social-icon instragram"
                    title="Go to Instagram"
                    href="https://www.instagram.com/cubcadet_usa/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span></span>
                  </a>
                </li>
                <li>
                  <a
                    className="social-icon twitter"
                    title="Go to Twitter"
                    href="https://twitter.com/CubCadet_USA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span></span>
                  </a>
                </li>
                <li>
                  <a
                    className="social-icon youtube"
                    title="Go to YouTube"
                    href="https://www.youtube.com/user/CubCadetRidingMowers"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-container col-md-6 col-lg-7 order-md-0">
            <div className="footer-item">
              <div className="content-asset">
                <h3 className="footer-category-heading">About Us</h3>
                <ul className="footer-col">
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/about-us.html"
                    >
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/knowledge-center.html"
                    >
                      How-To Articles
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/built-in-america.html"
                    >
                      Built In America
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/seasonal-offers.html"
                    >
                      Special Offers
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/current-news/"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/financing"
                    >
                      Financing
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/engine-advantage.html"
                    >
                      Our Engine Advantage
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-item">
              <div className="content-asset">
                <h3 className="footer-category-heading">Owner's Center</h3>
                <ul className="footer-col">
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/product-recalls.html"
                    >
                      Product Recalls
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/operatorsmanuals"
                      title="Go to Operator's Manuals"
                    >
                      Operator's Manuals
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/content-asset-page-includes/registration.html"
                    >
                      Product Registration
                    </a>
                  </li>
                  <li>
                    <a
                      className="locate-store footer-link"
                      href="https://www.cubcadet.com/en_US/servicelocator"
                      title="Go to Service Locator"
                    >
                      Service Locator
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/service-and-parts#part-finder"
                    >
                      Find a Part
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/service-and-parts#diagrams"
                    >
                      Lookup Parts via Diagram
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="https://cubcadetgear.us/">
                      Cub Cadet Gear
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-item">
              <div className="content-asset">
                <h3 className="footer-category-heading">Independent Dealers</h3>
                <ul className="footer-col">
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&amp;horizontalView=true&amp;isForm=true&amp;rid=dealers"
                    >
                      Find a Dealer
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/dealer-delivery-or-pick-up.html"
                    >
                      Dealer Delivery or Pick-Up
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/become-a-dealer.html"
                    >
                      Become a Dealer
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/dealer-advantage.html"
                    >
                      Dealer Advantage
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-item">
              <div className="content-asset">
                <h3 className="footer-category-heading">Customer Service</h3>
                <ul className="footer-col">
                  <li>
                    <a
                      className="footer-link"
                      data-target="#call-modal"
                      data-toggle="modal"
                      href="index.html#"
                      title="Click for details"
                      rel="noreferrer"
                    >
                      (877) 428 2349
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/track-my-order"
                      title="Go to Track Order"
                    >
                      Track Order
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.cubcadet.com/en_US/account"
                      title="Go to My Account"
                    >
                      My Account
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://support.cubcadet.com/s/"
                      title="Go to Cub Cadet Support site"
                    >
                      FAQs &amp; Support
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="https://www.mtdproducts.com/en_US/product-safety/"
                      title="Product Safety"
                    >
                      Product Safety
                    </a>
                  </li>
                </ul>
                <div aria-hidden="true" className="modal fade" id="call-modal">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <div>
                          <h4 className="modal-title">
                            We are experiencing high call volumes.
                          </h4>
                        </div>
                        <button
                          aria-label="Close"
                          className="close"
                          data-dismiss="modal"
                          type="button"
                        >
                          <span aria-hidden="true"></span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>
                          <strong>
                            We are available Monday - Friday, 8:30 am - 5:00 pm
                            EST.
                          </strong>
                          To speak with an agent, you might experience longer
                          than normal hold times. We apologize for the
                          inconvenience.
                        </p>
                        <p>
                          <a
                            aria-label="Click to Call"
                            className="btn btn-secondary"
                            href="tel:877-428-2349"
                            title="Call Us"
                          >
                            Call 1-877-428-2349
                          </a>
                        </p>
                        <p>
                          <button
                            className="btn btn-outline-secondary"
                            id="header-live-chat"
                            type="button"
                          >
                            <svg
                              height="20"
                              viewBox="0 0 20 20"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.012 1C2.909 1 2 1.939 2 3.077v9.232c0 1.139.909 2.077 2.012 2.077h1.271L4.9 18.238a.696.696 0 0 0 .378.694c.255.126.56.074.76-.132l4.29-4.414h6.65c1.103 0 2.012-.938 2.012-2.077V3.077C18.99 1.94 18.08 1 16.977 1H4.012zm0 1.385h12.965c.384 0 .671.296.671.692v9.232c0 .396-.287.692-.67.692h-6.93a.657.657 0 0 0-.475.202l-3.151 3.239.265-2.683a.707.707 0 0 0-.17-.53.661.661 0 0 0-.493-.228H4.012c-.383 0-.67-.296-.67-.692V3.077c0-.396.287-.692.67-.692zm2.012 4.154c-.618 0-1.118.517-1.118 1.154 0 .637.5 1.154 1.118 1.154.617 0 1.117-.517 1.117-1.154 0-.637-.5-1.154-1.117-1.154zm4.478 0c-.618 0-1.118.517-1.118 1.154 0 .637.5 1.154 1.118 1.154.617 0 1.117-.517 1.117-1.154 0-.637-.5-1.154-1.117-1.154zm4.464 0c-.618 0-1.118.517-1.118 1.154 0 .637.5 1.154 1.118 1.154.617 0 1.117-.517 1.117-1.154 0-.637-.5-1.154-1.117-1.154z"
                                fill="#FFC20F"
                                fillRule="nonzero"
                              ></path>
                            </svg>
                            Start a live chat
                          </button>
                        </p>
                        <section className="hlinks">
                          <h5 className="modal-title">Helpful links.</h5>
                          <div className="hlinks">
                            <ul>
                              <li>
                                <a
                                  href="https://www.cubcadet.com/en_US/service-and-parts#part-finder"
                                  title="Find a part"
                                >
                                  Find a part
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.cubcadet.com/en_US/operatorsmanuals"
                                  title="Find a product manual"
                                >
                                  Find a product manual
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.cubcadet.com/en_US/servicelocator"
                                  title="Find a service center"
                                >
                                  Find a service center
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.cubcadet.com/en_US/knowledge-center.html"
                                  title="Find an article"
                                >
                                  Find an article
                                </a>
                              </li>
                              <li>
                                <a href="href=" title="Track my order">
                                  Track my order
                                </a>
                              </li>
                            </ul>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-info container">
        <div className="footer-info-links">
          <div className="footer-logo">
            <picture>
              <source
                srcSet="
                    https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v1d5f49f5a13f1eba170bf9f8624abecd5fbcf8a0/images/for-dev/built-in-america-desktop.png,
                    https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v1d5f49f5a13f1eba170bf9f8624abecd5fbcf8a0/images/for-dev/built-in-america-desktop-2x.png 2x
                  "
                media="(min-width: 767px)"
              />
              <img
                srcSet="
                    https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v1d5f49f5a13f1eba170bf9f8624abecd5fbcf8a0/images/for-dev/built-in-america-mobile.png,
                    https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v1d5f49f5a13f1eba170bf9f8624abecd5fbcf8a0/images/for-dev/built-in-america-mobile-2x.png 2x
                  "
                alt="Built in America Badge"
              />
            </picture>
          </div>
          <div className="footer-site-links col-lg-6">
            <div className="content-asset">
              <h6>Global Sites</h6>
              <ul>
                <li className="site-link">
                  <a href="https://www.cubcadet.ca">Canada</a>
                </li>
                <li className="site-link">
                  <a href="https://eu.cubcadet.com/en/">Europe</a>
                </li>
                <li className="site-link">
                  <a href="http://www.cubcadet.com.au/">Australia</a>
                </li>
                <li className="site-link">
                  <a href="http://www.cubcadet.cn/">China</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 copyright-notice">
            <div className="content-asset">
              <div className="copyright">
                <div className="terms-privacy-links">
                  <span className="copyright-text">
                    &copy; 2021 Cubcadet. All Rights Reserved.
                  </span>
                  <span>
                    <a href="https://www.cubcadet.com/en_US/privacy-and-security/privacy-policy.html">
                      Privacy Policy
                    </a>
                  </span>
                  <span>
                    <a href="https://www.cubcadet.com/en_US/terms-of-use.html">
                      Terms of Use
                    </a>
                  </span>
                  <span>
                    <a href="https://www.cubcadet.com/en_US/online-store-policies.html">
                      Online Store Policies
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
