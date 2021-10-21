import React from "react";
function Header() {
  return (
    <>
      <nav role="navigation">
        <div class="desktop-utility-nav">
          <div class="container-fluid">
            <div class="utility-nav">
              <ul class="utility-list">
                <li>
                  <a href="index.html#" id="header-live-chat" class="icon-chat">
                    <span>Live Chat</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cubcadet.com/en_US/servicelocator"
                    class="icon-find-service"
                  >
                    <span>Find Service</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/en_US/content-asset-page-includes/registration.html"
                    class="icon-registration"
                  >
                    <span>Registration</span>
                  </a>
                </li>
                <li class="icon-account user">
                  <a href="https://www.cubcadet.com/en_US/login">
                    <span class="user-message">Account</span>
                  </a>
                </li>
                <li
                  class="menu-item dropdown country-selector"
                  tabindex="0"
                  data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/Page-SetLocale"
                >
                  <button
                    tabindex="-1"
                    class="dropdown-toggle"
                    id="dropdownCountrySelector"
                    data-toggle="dropdown"
                    data-currentcountry="USA"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-owns="countryList"
                  >
                    <i class="flag-icon flag-icon-us"></i>
                    USA (en)
                  </button>
                  <div
                    id="countryList"
                    class="dropdown-menu dropdown-country-selector"
                    aria-labelledby="dropdownCountrySelector"
                  ></div>
                </li>
              </ul>
            </div>
            <div
              class="minicart"
              data-action-url="/on/demandware.store/Sites-cubcadet-Site/en_US/Cart-MiniCartShow"
            >
              <div class="minicart-total">
                <a
                  class="minicart-link"
                  href="https://www.cubcadet.com/en_US/cart"
                  title="View Cart"
                >
                  <img
                    class="icon icon-cart"
                    src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwdc15d002/images/surepath/svg-icons/icon-cart.svg"
                    alt=""
                  />
                  <span class="minicart-label">
                    Cart
                    <span class="minicart-quantity">0</span>
                  </span>
                </a>
              </div>
              <div class="popover popover-bottom"></div>
            </div>
          </div>
        </div>
        <div class="header container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="navbar-header brand">
                <a href="/en_US/home" title="Cub Cadet Home">
                  <img
                    class="icon logo"
                    src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v1d5f49f5a13f1eba170bf9f8624abecd5fbcf8a0/images/for-dev/logo.svg"
                    alt="Cub Cadet"
                  />
                </a>
              </div>
              <div class="navbar-header">
                <div class="pull-left">
                  <button
                    class="navbar-toggler d-lg-none"
                    type="button"
                    aria-controls="sg-navbar-collapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <img
                      class="icon icon-menu"
                      src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw462426c9/images/surepath/svg-icons/icon-menu.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div class="pull-right">
                  <div class="search">
                    <div class="site-search">
                      <form
                        role="search"
                        action="/en_US/search"
                        method="get"
                        name="simpleSearch"
                      >
                        <span class="search-icon">
                          <img
                            class="icon icon-search-black"
                            src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw9496d0df/images/surepath/svg-icons/icon-search-black.svg"
                            alt="Search"
                          />
                        </span>
                        <input
                          class="form-control search-field"
                          type="search"
                          name="q"
                          value=""
                          placeholder="Keyword, Model or Part #"
                          autocomplete="off"
                          aria-label="Keyword, Model or Part #"
                        />
                        <div
                          class="suggestions-wrapper"
                          data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/SearchServices-GetSuggestions?q="
                        ></div>
                        <input type="hidden" value="en_US" name="lang" />
                      </form>
                    </div>
                    <a href="index.html#" class="search-button">
                      <img
                        class="icon icon-close"
                        src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw6ff802c2/images/surepath/svg-icons/icon-close.svg"
                        alt="Close"
                      />
                      <img
                        class="icon icon-search"
                        src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v1d5f49f5a13f1eba170bf9f8624abecd5fbcf8a0/images/for-dev/icon-search.svg"
                        alt="Search"
                      />
                      <span class="search-button-label">Search</span>
                    </a>
                  </div>
                  <div
                    class="minicart"
                    data-action-url="/on/demandware.store/Sites-cubcadet-Site/en_US/Cart-MiniCartShow"
                  >
                    <div class="minicart-total">
                      <a
                        class="minicart-link"
                        href="https://www.cubcadet.com/en_US/cart"
                        title="View Cart"
                      >
                        <img
                          class="icon icon-cart"
                          src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwdc15d002/images/surepath/svg-icons/icon-cart.svg"
                          alt=""
                        />
                        <span class="minicart-label">
                          Cart
                          <span class="minicart-quantity">0</span>
                        </span>
                      </a>
                    </div>
                    <div class="popover popover-bottom"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
              main-menu
              navbar-toggleable-md
              menu-toggleable-left
              multilevel-dropdown
            "
          id="sg-navbar-collapse"
        >
          <div class="container-fluid">
            <div class="row">
              <nav
                id="collapsible-mobile-menu"
                class="navbar navbar-expand-lg bg-inverse col-12"
              >
                <div class="close-menu clearfix d-lg-none">
                  <div class="back pull-left"></div>
                  <div class="close-button pull-right"></div>
                </div>
                <div
                  class="menu-group"
                  aria-label="Main menu"
                  role="navigation"
                >
                  <ul class="nav navbar-nav" role="menu">
                    <li
                      class="nav-item dropdown layout1 top-level-menu-heading"
                      role="none"
                    >
                      <a
                        role="menuitem"
                        href="/en_US/lawn-mowers"
                        id="lawn-mowers"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Lawn Mowers
                      </a>
                      <ul class="dropdown-menu" role="menu" aria-hidden="true">
                        <li
                          class="
                              dropdown-item dropdown
                              second-level-menu-heading
                            "
                          role="none"
                        >
                          <a
                            role="menuitem"
                            href="/en_US/lawn-mowers/riding-lawn-mowers"
                            id="riding-lawn-mowers"
                            class="dropdown-link dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Riding Lawn Mowers
                          </a>
                          <ul
                            class="dropdown-menu"
                            role="menu"
                            aria-hidden="true"
                          >
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/riding-lawn-mowers/zero-turn-mowers"
                                id="zero-turn-mowers"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">Zero-Turn Mowers</span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw9cf18212/menu-card-images/Cub-Cadet-ZT260_NavCard.png"
                                  class="tile-img"
                                  alt="Zero-Turn Mowers"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Zero-Turn Mowers
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/riding-lawn-mowers/lawn-and-garden-tractors"
                                id="lawn-and-garden-tractors"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Lawn &amp; Garden Tractors
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw0f88e685/menu-card-images/Cub-Cadet-XT1LT42_NavCard.png"
                                  class="tile-img"
                                  alt="Lawn &amp; Garden Tractors"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Lawn &amp; Garden Tractors
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/riding-lawn-mowers/electric-riding-mowers"
                                id="electric-riding-lawn-mowers"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Electric Riding Mowers
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwb45fd490/menu-card-images/33AA27JDB10_XT1LT42E_RT_200x0_200.jpg"
                                  class="tile-img"
                                  alt="Electric Riding Mowers"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Electric Riding Mowers
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/riding-lawn-mowers/riding-mower-accessories"
                                id="riding-mower-accessories"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Riding Mower Accessories
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw63b8d5db/menu-card-images/Cub-Cadet-Riding-Mower-Accessory1_NavCard.png"
                                  class="tile-img"
                                  alt="Riding Mower Accessories"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Riding Mower Accessories
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/riding-lawn-mowers/zero-turn-mower-accessories"
                                id="rzt-mower-accessories"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Zero-Turn Mower Accessories
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwb3c7d8c4/menu-card-images/Cub-Cadet-RZT-Mower-Accessory1_NavCard.png"
                                  class="tile-img"
                                  alt="Zero-Turn Mower Accessories"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Zero-Turn Mower Accessories
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li class="category-link">
                              <a
                                href="/en_US/lawn-mowers/riding-lawn-mowers"
                                id="riding-lawn-mowers"
                                role="button"
                                class="dropdown-link"
                              >
                                Shop All Riding Lawn Mowers
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          class="
                              dropdown-item dropdown
                              second-level-menu-heading
                            "
                          role="none"
                        >
                          <a
                            role="menuitem"
                            href="/en_US/lawn-mowers/walk-behind-mowers"
                            id="push-mowers"
                            class="dropdown-link dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Walk-Behind Mowers
                          </a>
                          <ul
                            class="dropdown-menu"
                            role="menu"
                            aria-hidden="true"
                          >
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/walk-behind-mowers/push-mowers"
                                id="walk-behind-mowers"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">Push Mowers</span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw59e21929/menu-card-images/Cub-Cadet-SC100_hw_NavCard.png"
                                  class="tile-img"
                                  alt="Push Mowers"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Push Mowers
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/walk-behind-mowers/self-propelled-mowers"
                                id="self-propelled-mowers"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Self-Propelled Mowers
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwb9318559/menu-card-images/Cub-Cadet-SC300HW_NavCard.png"
                                  class="tile-img"
                                  alt="Self-Propelled Mowers"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Self-Propelled Mowers
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/walk-behind-mowers/wide-area-mowers"
                                id="wide-area-mowers"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">Wide Area Mowers</span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw9b02872e/menu-card-images/Cub-Cadet-CC600_NavCard.png"
                                  class="tile-img"
                                  alt="Wide Area Mowers"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Wide Area Mowers
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/walk-behind-mowers/push-mower-accessories"
                                id="push-mower-accessories"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Push Mower Accessories
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw4e58dcc7/menu-card-images/Cub-Cadet-Walk-Behind-Accessory_NavCard.png"
                                  class="tile-img"
                                  alt="Push Mower Accessories"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Push Mower Accessories
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li class="category-link">
                              <a
                                href="/en_US/lawn-mowers/walk-behind-mowers"
                                id="push-mowers"
                                role="button"
                                class="dropdown-link"
                              >
                                Shop All Walk-Behind Mowers
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="category-link">
                          <a
                            href="/en_US/lawn-mowers"
                            id="lawn-mowers"
                            role="button"
                            class="dropdown-link"
                          >
                            Shop All Lawn Mowers
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      class="nav-item dropdown layout1 top-level-menu-heading"
                      role="none"
                    >
                      <a
                        role="menuitem"
                        href="/en_US/electric-mowers-and-tools"
                        id="electric-mowers-tools"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Electric Mowers &amp; Tools
                      </a>
                      <ul class="dropdown-menu" role="menu" aria-hidden="true">
                        <li
                          class="
                              dropdown-item dropdown
                              second-level-menu-heading
                            "
                          role="none"
                        >
                          <a
                            role="menuitem"
                            href="https://www.cubcadet.com/en_US/riding-lawn-mowers/electric-riding-mowers"
                            id="electric-mowers"
                            class="dropdown-link dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Electric Lawn Mowers
                          </a>
                          <ul
                            class="dropdown-menu"
                            role="menu"
                            aria-hidden="true"
                          >
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="https://www.cubcadet.com/en_US/electric-lawn-mowers/zt1-42e/34ABA2CS710.html"
                                id="electric-zero-turn-mowers"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Electric Zero Turn Mowers
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwd04de196/menu-card-images/34ABA2CS710_ZT142E_RT_200x200.jpg"
                                  class="tile-img"
                                  alt="Electric Zero Turn Mowers"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Electric Zero Turn Mowers
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="https://www.cubcadet.com/en_US/riding-lawn-mowers/electric-riding-mowers"
                                id="electric-lawn-garden-tractors"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Electric Lawn &amp; Garden Tractors
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwb45fd490/menu-card-images/33AA27JDB10_XT1LT42E_RT_200x0_200.jpg"
                                  class="tile-img"
                                  alt="Electric Lawn &amp; Garden Tractors"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Electric Lawn &amp; Garden Tractors
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="https://www.cubcadet.com/en_US/electric-lawn-mowers/scp21e/18AEB9C5710.html"
                                id="electric-walk-behind-mowers"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Electric Walk-Behind Mowers
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw58289de8/menu-card-images/18AEB9C5B10_SCP21E_H_200x200.jpg"
                                  class="tile-img"
                                  alt="Electric Walk-Behind Mowers"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Electric Walk-Behind Mowers
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li class="category-link">
                              <a
                                href="https://www.cubcadet.com/en_US/riding-lawn-mowers/electric-riding-mowers"
                                id="electric-mowers"
                                role="button"
                                class="dropdown-link"
                              >
                                Shop All Electric Lawn Mowers
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          class="
                              dropdown-item dropdown
                              second-level-menu-heading
                            "
                          role="none"
                        >
                          <a
                            role="menuitem"
                            href="https://www.cubcadet.com/en_US/yard-equipment/cordless-electric-lawn-and-garden-tools"
                            id="electric-handheld-tools-1"
                            class="dropdown-link dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Cordless Electric Lawn &amp; Garden Tools
                          </a>
                          <ul
                            class="dropdown-menu"
                            role="menu"
                            aria-hidden="true"
                          >
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="https://www.cubcadet.com/en_US/cordless-electric-lawn-and-garden-tools/ht24e/HT24E-60V-MAX-CORDLESS-HEDGE-TRIMMER.html"
                                id="electric-hedge-trimmer"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Electric Hedge Trimmer
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwd2857f7a/menu-card-images/41AG125C810_HT24E_LT_200x200.jpg"
                                  class="tile-img"
                                  alt="Electric Hedge Trimmer"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Electric Hedge Trimmer
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="https://www.cubcadet.com/en_US/cordless-electric-lawn-and-garden-tools/lb600e/LB600E-60V-MAX-CORDLESS-BLOWER.html"
                                id="electric-leaf-blower"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Electric Leaf Blower
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw5b36063e/menu-card-images/41AN125C810_LB600E_Rt_200x200.jpg"
                                  class="tile-img"
                                  alt="Electric Leaf Blower"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Electric Leaf Blower
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="https://www.cubcadet.com/en_US/cordless-electric-lawn-and-garden-tools/cs16e/CS16E-60V-CORDLESS-CHAINSAW.html"
                                id="electric-chain-saw"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Electric Chain Saw
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwf972e6dc/menu-card-images/41AT125C810_CS16E_tool_RT_200x200.jpg"
                                  class="tile-img"
                                  alt="Electric Chain Saw"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Electric Chain Saw
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="https://www.cubcadet.com/en_US/cordless-electric-lawn-and-garden-tools/st15e/ST15E-60V-MAX-CORDLESS-STRING-TRIMMER.html"
                                id="electric-string-trimmer"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Electric String Trimmer
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw0afc7bcb/menu-card-images/41AE125C810_ST15E_LPFL_200x200.jpg"
                                  class="tile-img"
                                  alt="Electric String Trimmer"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Electric String Trimmer
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li class="category-link">
                              <a
                                href="https://www.cubcadet.com/en_US/yard-equipment/cordless-electric-lawn-and-garden-tools"
                                id="electric-handheld-tools-1"
                                role="button"
                                class="dropdown-link"
                              >
                                Shop All Cordless Electric Lawn &amp; Garden
                                Tools
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="category-link">
                          <a
                            href="/en_US/electric-mowers-and-tools"
                            id="electric-mowers-tools"
                            role="button"
                            class="dropdown-link"
                          >
                            Shop All Electric Mowers &amp; Tools
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      class="nav-item dropdown layout1 top-level-menu-heading"
                      role="none"
                    >
                      <a
                        role="menuitem"
                        href="/en_US/snow-blowers-main"
                        id="snow-blowers-main"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Snow Blowers
                      </a>
                      <ul class="dropdown-menu" role="menu" aria-hidden="true">
                        <li
                          class="
                              dropdown-item dropdown
                              second-level-menu-heading
                            "
                          role="none"
                        >
                          <a
                            role="menuitem"
                            href="/en_US/snow-blowers/snow-blowers"
                            id="sb-sub"
                            class="dropdown-link dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Snow Blowers
                          </a>
                          <ul
                            class="dropdown-menu"
                            role="menu"
                            aria-hidden="true"
                          >
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/snow-blowers/single-stage-snow-blowers"
                                id="1x-snow-blowers-1"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Single-Stage Snow Blowers
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw15b02ae3/menu-card-images/31PM2T6C710_1X_21LHP_NavCard-200px.png"
                                  class="tile-img"
                                  alt="Single-Stage Snow Blowers"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Single-Stage Snow Blowers
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/snow-blowers/two-stage-snow-blowers"
                                id="2x-snow-blowers-1"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Two-Stage Snow Blowers
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw1342d6ab/menu-card-images/31AM5CVS710_2X_26HP_NavCard-200px.png"
                                  class="tile-img"
                                  alt="Two-Stage Snow Blowers"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Two-Stage Snow Blowers
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/snow-blowers/three-stage-snow-blowers"
                                id="3x-snow-blowers-1"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Three-Stage Snow Blowers
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw723bb422/menu-card-images/31AH5DVB710_3X_28_NavCard-200px.png"
                                  class="tile-img"
                                  alt="Three-Stage Snow Blowers"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Three-Stage Snow Blowers
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/snow-blowers"
                                id="snow-blowers"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">All Snow Blowers</span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw5580d8b9/menu-card-images/Cub-Cadet-2X_26HP_NavCard.png"
                                  class="tile-img"
                                  alt="All Snow Blowers"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    All Snow Blowers
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/snow-blowers/snow-blower-accessories"
                                id="snow-blower-accessories"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Snow Blower Accessories
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwcc225e7e/menu-card-images/Cub-Cadet-Snow-Blower-Accessory_NavCard.png"
                                  class="tile-img"
                                  alt="Snow Blower Accessories"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Snow Blower Accessories
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li class="category-link">
                              <a
                                href="/en_US/snow-blowers/snow-blowers"
                                id="sb-sub"
                                role="button"
                                class="dropdown-link"
                              >
                                Shop All Snow Blowers
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="category-link">
                          <a
                            href="/en_US/snow-blowers-main"
                            id="snow-blowers-main"
                            role="button"
                            class="dropdown-link"
                          >
                            Shop All Snow Blowers
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      class="nav-item dropdown layout2 top-level-menu-heading"
                      role="none"
                    >
                      <a
                        role="menuitem"
                        href="/en_US/commercial-equipment"
                        id="commercial-equipment"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Commercial Equipment
                      </a>
                      <ul class="dropdown-menu" role="menu" aria-hidden="true">
                        <li
                          class="
                              dropdown-item
                              menu-tile
                              second-level-menu-heading-tile
                            "
                          role="menuitem"
                        >
                          <a
                            href="/en_US/commercial-equipment/commercial-zero-turn-mowers"
                            id="commercial-zero-turn-mowers"
                            role="button"
                            class="dropdown-link"
                          >
                            <span class="tile-title">
                              Commercial Zero-Turn Mowers
                            </span>
                            <span class="tile-description"></span>
                            <img
                              src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw5439428a/menu-card-images/Cub-Cadet_ProZ_972L_200x200.jpg"
                              class="tile-img"
                              alt=""
                            />

                            <div class="card-link">
                              <span class="d-none d-lg-block">Shop Now</span>
                              <span class="d-block d-lg-none">
                                Commercial Zero-Turn Mowers
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          class="
                              dropdown-item
                              menu-tile
                              second-level-menu-heading-tile
                            "
                          role="menuitem"
                        >
                          <a
                            href="/en_US/commercial-equipment/stand-on-mowers"
                            id="commercial-stand-on-zero-turns"
                            role="button"
                            class="dropdown-link"
                          >
                            <span class="tile-title">Stand-On Mowers</span>
                            <span class="tile-description"></span>
                            <img
                              src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwf225b99e/menu-card-images/ProX654_Nav_200x200.jpg"
                              class="tile-img"
                              alt=""
                            />

                            <div class="card-link">
                              <span class="d-none d-lg-block">Shop Now</span>
                              <span class="d-block d-lg-none">
                                Stand-On Mowers
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          class="
                              dropdown-item
                              menu-tile
                              second-level-menu-heading-tile
                            "
                          role="menuitem"
                        >
                          <a
                            href="/en_US/commercial-equipment/hydro-walk-behind-mowers"
                            id="commercial-walk-behind-mowers"
                            role="button"
                            class="dropdown-link"
                          >
                            <span class="tile-title">
                              Hydro Walk-Behind Mowers
                            </span>
                            <span class="tile-description"></span>
                            <img
                              src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwd98f0b3d/menu-card-images/Cub-Cadet-ProHW354_NavCard.png"
                              class="tile-img"
                              alt=""
                            />

                            <div class="card-link">
                              <span class="d-none d-lg-block">Shop Now</span>
                              <span class="d-block d-lg-none">
                                Hydro Walk-Behind Mowers
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          class="
                              dropdown-item
                              menu-tile
                              second-level-menu-heading-tile
                            "
                          role="menuitem"
                        >
                          <a
                            href="/en_US/commercial-equipment/walk-behind-blowers"
                            id="commercial-handheld-products"
                            role="button"
                            class="dropdown-link"
                          >
                            <span class="tile-title">Walk-Behind Blowers</span>
                            <span class="tile-description"></span>
                            <img
                              src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw129da566/menu-card-images/Cub-Cadet-CB2800_NavCard.png"
                              class="tile-img"
                              alt=""
                            />

                            <div class="card-link">
                              <span class="d-none d-lg-block">Shop Now</span>
                              <span class="d-block d-lg-none">
                                Walk-Behind Blowers
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          class="
                              dropdown-item
                              menu-tile
                              second-level-menu-heading-tile
                            "
                          role="menuitem"
                        >
                          <a
                            href="/en_US/commercial-equipment/golf-and-sports-turf"
                            id="golf-and-turf-equipment"
                            role="button"
                            class="dropdown-link"
                          >
                            <span class="tile-title">
                              Golf &amp; Sports Turf
                            </span>
                            <span class="tile-description"></span>
                            <img
                              src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw3ee488a7/menu-card-images/NavigationDropdown_Product_Infinicut34_Desktop_200x115.png"
                              class="tile-img"
                              alt=""
                            />
                            <div class="card-link">
                              <span class="d-none d-lg-block">Shop Now</span>
                              <span class="d-block d-lg-none">
                                Golf &amp; Sports Turf
                              </span>
                            </div>
                          </a>
                        </li>
                        <li class="category-link">
                          <a
                            href="/en_US/commercial-equipment"
                            id="commercial-equipment"
                            role="button"
                            class="dropdown-link"
                          >
                            Shop All Commercial Equipment
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      class="nav-item dropdown layout1 top-level-menu-heading"
                      role="none"
                    >
                      <a
                        role="menuitem"
                        href="/en_US/utility-vehicles-and-accessories"
                        id="utility-vehicles"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        UTV
                      </a>
                      <ul class="dropdown-menu" role="menu" aria-hidden="true">
                        <li
                          class="
                              dropdown-item dropdown
                              second-level-menu-heading
                            "
                          role="none"
                        >
                          <a
                            role="menuitem"
                            href="/en_US/utv/utility-vehicles"
                            id="sb-sub-utv"
                            class="dropdown-link dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Utility Vehicles
                          </a>
                          <ul
                            class="dropdown-menu"
                            role="menu"
                            aria-hidden="true"
                          >
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/utility-vehicles"
                                id="utility-vehicles-"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">UTV</span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwf0e2109e/menu-card-images/Cub-Cadet-Challenger750_NavCard.png"
                                  class="tile-img"
                                  alt="UTV"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">UTV</span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/utility-vehicles/utv-accessories"
                                id="utility-vehicle-accessories"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">UTV Accessories</span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwe6a348cc/menu-card-images/Cub-Cadet-UTV-Accessory_NavCard.png"
                                  class="tile-img"
                                  alt="UTV Accessories"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    UTV Accessories
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li class="category-link">
                              <a
                                href="/en_US/utv/utility-vehicles"
                                id="sb-sub-utv"
                                role="button"
                                class="dropdown-link"
                              >
                                Shop All Utility Vehicles
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="category-link">
                          <a
                            href="/en_US/utility-vehicles-and-accessories"
                            id="utility-vehicles"
                            role="button"
                            class="dropdown-link"
                          >
                            Shop All UTV
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      class="nav-item dropdown layout1 top-level-menu-heading"
                      role="none"
                    >
                      <a
                        role="menuitem"
                        href="/en_US/yard-equipment"
                        id="lawn-and-garden-equipment"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Yard Equipment
                      </a>
                      <ul class="dropdown-menu" role="menu" aria-hidden="true">
                        <li
                          class="
                              dropdown-item dropdown
                              second-level-menu-heading
                            "
                          role="none"
                        >
                          <a
                            role="menuitem"
                            href="/en_US/yard-equipment/lawn-cleanup"
                            id="lawn-cleanup"
                            class="dropdown-link dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Lawn Cleanup
                          </a>
                          <ul
                            class="dropdown-menu"
                            role="menu"
                            aria-hidden="true"
                          >
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/lawn-cleanup/trimmers"
                                id="trimmers"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">Trimmers</span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw6adf0d2b/menu-card-images/Cub-Cadet-BC280_NavCard.png"
                                  class="tile-img"
                                  alt="Trimmers"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Trimmers
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/lawn-cleanup/leaf-blowers"
                                id="leaf-blowers"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">Leaf Blowers</span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw1abe9b0b/menu-card-images/Cub-Cadet-BV428_NavCard.png"
                                  class="tile-img"
                                  alt="Leaf Blowers"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Leaf Blowers
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/lawn-cleanup/pressure-washers"
                                id="pressure-washers"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">Pressure Washers</span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwe4183271/menu-card-images/Cub-Cadet-CC3024H_NavCard.png"
                                  class="tile-img"
                                  alt="Pressure Washers"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Pressure Washers
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/lawn-cleanup/chipper-shredders-and-vacs"
                                id="chipper-shredders-1"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Chipper Shredders &amp; Vacs
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw510a063b/menu-card-images/Cub-Cadet-CSV070_NavCard.png"
                                  class="tile-img"
                                  alt="Chipper Shredders &amp; Vacs"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Chipper Shredders &amp; Vacs
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li class="category-link">
                              <a
                                href="/en_US/yard-equipment/lawn-cleanup"
                                id="lawn-cleanup"
                                role="button"
                                class="dropdown-link"
                              >
                                Shop All Lawn Cleanup
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          class="
                              dropdown-item dropdown
                              second-level-menu-heading
                            "
                          role="none"
                        >
                          <a
                            role="menuitem"
                            href="/en_US/yard-equipment/tree-care"
                            id="tree-care"
                            class="dropdown-link dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Tree Care
                          </a>
                          <ul
                            class="dropdown-menu"
                            role="menu"
                            aria-hidden="true"
                          >
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/tree-care/log-splitters"
                                id="log-splitters"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">Log Splitters</span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw5d54157c/menu-card-images/Cub-Cadet-LS33CCHP_NavCard.png"
                                  class="tile-img"
                                  alt="Log Splitters"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Log Splitters
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="/en_US/tree-care/chipper-shredders-and-vacs"
                                id="chipper-shredders"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Chipper Shredders &amp; Vacs
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwed637b29/menu-card-images/Cub-Cadet-CS3310_NavCard.png"
                                  class="tile-img"
                                  alt="Chipper Shredders &amp; Vacs"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Chipper Shredders &amp; Vacs
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li class="category-link">
                              <a
                                href="/en_US/yard-equipment/tree-care"
                                id="tree-care"
                                role="button"
                                class="dropdown-link"
                              >
                                Shop All Tree Care
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          class="
                              dropdown-item dropdown
                              second-level-menu-heading
                            "
                          role="none"
                        >
                          <a
                            role="menuitem"
                            href="/en_US/yard-equipment/cordless-electric-lawn-and-garden-tools"
                            id="electric-lawn-garden-tools"
                            class="dropdown-link dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Cordless Electric Lawn &amp; Garden Tools
                          </a>
                          <ul
                            class="dropdown-menu"
                            role="menu"
                            aria-hidden="true"
                          >
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="https://www.cubcadet.com/en_US/cordless-electric-lawn-and-garden-tools/cs16e/CS16E-60V-CORDLESS-CHAINSAW.html"
                                id="electric-chain-saw-1"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Electric Chain Saw
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwf972e6dc/menu-card-images/41AT125C810_CS16E_tool_RT_200x200.jpg"
                                  class="tile-img"
                                  alt="Electric Chain Saw"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Electric Chain Saw
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="https://www.cubcadet.com/en_US/cordless-electric-lawn-and-garden-tools/ht24e/HT24E-60V-MAX-CORDLESS-HEDGE-TRIMMER.html"
                                id="electric-hedge-trimmer-1"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Electric Hedge Trimmer
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwd2857f7a/menu-card-images/41AG125C810_HT24E_LT_200x200.jpg"
                                  class="tile-img"
                                  alt="Electric Hedge Trimmer"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Electric Hedge Trimmer
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="https://www.cubcadet.com/en_US/cordless-electric-lawn-and-garden-tools/lb600e/LB600E-60V-MAX-CORDLESS-BLOWER.html"
                                id="electric-leaf-blower-1"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Electric Leaf Blower
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw5b36063e/menu-card-images/41AN125C810_LB600E_Rt_200x200.jpg"
                                  class="tile-img"
                                  alt="Electric Leaf Blower"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Electric Leaf Blower
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li
                              class="
                                  dropdown-item
                                  menu-tile
                                  third-level-menu-heading-tiles
                                "
                              role="menuitem"
                            >
                              <a
                                href="https://www.cubcadet.com/en_US/cordless-electric-lawn-and-garden-tools/st15e/ST15E-60V-MAX-CORDLESS-STRING-TRIMMER.html"
                                id="electric-string-trimmer-1"
                                role="button"
                                class="dropdown-link"
                              >
                                <span class="tile-title">
                                  Electric String Trimmer
                                </span>
                                <span class="tile-description"></span>
                                <img
                                  src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw0afc7bcb/menu-card-images/41AE125C810_ST15E_LPFL_200x200.jpg"
                                  class="tile-img"
                                  alt="Electric String Trimmer"
                                />
                                <div class="card-link">
                                  <span class="d-none d-lg-block">
                                    Shop Now
                                  </span>
                                  <span class="d-block d-lg-none">
                                    Electric String Trimmer
                                  </span>
                                </div>
                              </a>
                            </li>
                            <li class="category-link">
                              <a
                                href="/en_US/yard-equipment/cordless-electric-lawn-and-garden-tools"
                                id="electric-lawn-garden-tools"
                                role="button"
                                class="dropdown-link"
                              >
                                Shop All Cordless Electric Lawn &amp; Garden
                                Tools
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="category-link">
                          <a
                            href="/en_US/yard-equipment"
                            id="lawn-and-garden-equipment"
                            role="button"
                            class="dropdown-link"
                          >
                            Shop All Yard Equipment
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      class="nav-item dropdown layout2 top-level-menu-heading"
                      role="none"
                    >
                      <a
                        role="menuitem"
                        href="/en_US/service-and-parts"
                        id="service-and-parts"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Service &amp; Parts
                      </a>
                      <ul class="dropdown-menu" role="menu" aria-hidden="true">
                        <li
                          class="
                              dropdown-item
                              menu-tile
                              second-level-menu-heading-tile
                            "
                          role="menuitem"
                        >
                          <a
                            href="https://www.cubcadet.com/en_US/service-parts.html"
                            id="find-part"
                            role="button"
                            class="dropdown-link"
                          >
                            <span class="tile-title">Find a Part</span>
                            <span class="tile-description"></span>
                            <img
                              class="icon icon-find-a-part tile-img"
                              src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw5080400a/images/surepath/svg-icons/icon-find-a-part.svg"
                              alt=""
                            />
                            <div class="card-link">
                              <span class="d-none d-lg-block">Find a Part</span>
                              <span class="d-block d-lg-none">Find a Part</span>
                            </div>
                          </a>
                        </li>
                        <li
                          class="
                              dropdown-item
                              menu-tile
                              second-level-menu-heading-tile
                            "
                          role="menuitem"
                        >
                          <a
                            href="https://www.cubcadet.com/en_US/servicelocator"
                            id="service-centers"
                            role="button"
                            class="dropdown-link"
                          >
                            <span class="tile-title">Service Centers</span>
                            <span class="tile-description"></span>
                            <img
                              class="icon icon-location-nav tile-img"
                              src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw659bead1/images/surepath/svg-icons/icon-location-nav.svg"
                              alt=""
                            />
                            <div class="card-link">
                              <span class="d-none d-lg-block">
                                Find a Service Center
                              </span>
                              <span class="d-block d-lg-none">
                                Service Centers
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          class="
                              dropdown-item
                              menu-tile
                              second-level-menu-heading-tile
                            "
                          role="menuitem"
                        >
                          <a
                            href="https://www.cubcadet.com/en_US/operatorsmanuals"
                            id="owners-manuals"
                            role="button"
                            class="dropdown-link"
                          >
                            <span class="tile-title">Find Manuals</span>
                            <span class="tile-description"></span>
                            <img
                              class="icon icon-owners-manual tile-img"
                              src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw18d1973b/images/surepath/svg-icons/icon-owners-manual.svg"
                              alt=""
                            />
                            <div class="card-link">
                              <span class="d-none d-lg-block">
                                Download Now
                              </span>
                              <span class="d-block d-lg-none">
                                Find Manuals
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          class="
                              dropdown-item
                              menu-tile
                              second-level-menu-heading-tile
                            "
                          role="menuitem"
                        >
                          <a
                            href="https://www.cubcadet.com/en_US/help-center/"
                            id="how-to-articles"
                            role="button"
                            class="dropdown-link"
                          >
                            <span class="tile-title">
                              Articles &amp; Videos
                            </span>
                            <span class="tile-description"></span>
                            <img
                              class="icon icon-how-to-articles tile-img"
                              src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwbe224aed/images/surepath/svg-icons/icon-how-to-articles.svg"
                              alt=""
                            />
                            <div class="card-link">
                              <span class="d-none d-lg-block">Learn More</span>
                              <span class="d-block d-lg-none">
                                Articles &amp; Videos
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          class="
                              dropdown-item
                              menu-tile
                              second-level-menu-heading-tile
                            "
                          role="menuitem"
                        >
                          <a
                            href="https://www.cubcadet.com/en_US/track-my-order"
                            id="orders"
                            role="button"
                            class="dropdown-link"
                          >
                            <span class="tile-title">Track My Order</span>
                            <span class="tile-description"></span>
                            <img
                              class="icon icon-cart tile-img"
                              src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwdc15d002/images/surepath/svg-icons/icon-cart.svg"
                              alt=""
                            />
                            <div class="card-link">
                              <span class="d-none d-lg-block">Track Now</span>
                              <span class="d-block d-lg-none">
                                Track My Order
                              </span>
                            </div>
                          </a>
                        </li>
                        <li class="category-link">
                          <a
                            href="/en_US/service-and-parts"
                            id="service-and-parts"
                            role="button"
                            class="dropdown-link"
                          >
                            Shop All Service &amp; Parts
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      class="nav-item dropdown layout2 top-level-menu-heading"
                      role="none"
                    >
                      <a
                        role="menuitem"
                        href="https://www.cubcadet.com/en_US/riding-lawn-mowers/riding-mower-accessories"
                        id="attach-access"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Attachments
                      </a>
                      <ul class="dropdown-menu" role="menu" aria-hidden="true">
                        <li
                          class="
                              dropdown-item
                              menu-tile
                              second-level-menu-heading-tile
                            "
                          role="menuitem"
                        >
                          <a
                            href="https://www.cubcadet.com/en_US/riding-lawn-mowers/riding-mower-accessories"
                            id="riding-mower-accessories-faux"
                            role="button"
                            class="dropdown-link"
                          >
                            <span class="tile-title">
                              Riding Mower Accessories
                            </span>
                            <span class="tile-description"></span>
                            <img
                              src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw63b8d5db/menu-card-images/Cub-Cadet-Riding-Mower-Accessory1_NavCard.png"
                              class="tile-img"
                              alt=""
                            />

                            <div class="card-link">
                              <span class="d-none d-lg-block">Shop Now</span>
                              <span class="d-block d-lg-none">
                                Riding Mower Accessories
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          class="
                              dropdown-item
                              menu-tile
                              second-level-menu-heading-tile
                            "
                          role="menuitem"
                        >
                          <a
                            href="https://www.cubcadet.com/en_US/riding-lawn-mowers/zero-turn-mower-accessories"
                            id="zero-turn-accessories-faux"
                            role="button"
                            class="dropdown-link"
                          >
                            <span class="tile-title">
                              Zero Turn Accessories
                            </span>
                            <span class="tile-description"></span>
                            <img
                              src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwb3c7d8c4/menu-card-images/Cub-Cadet-RZT-Mower-Accessory1_NavCard.png"
                              class="tile-img"
                              alt=""
                            />

                            <div class="card-link">
                              <span class="d-none d-lg-block">Shop Now</span>
                              <span class="d-block d-lg-none">
                                Zero Turn Accessories
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          class="
                              dropdown-item
                              menu-tile
                              second-level-menu-heading-tile
                            "
                          role="menuitem"
                        >
                          <a
                            href="https://www.cubcadet.com/en_US/walk-behind-mowers/push-mower-accessories"
                            id="push-mower-accessories-faux"
                            role="button"
                            class="dropdown-link"
                          >
                            <span class="tile-title">
                              Push Mower Accessories
                            </span>
                            <span class="tile-description"></span>
                            <img
                              src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw4e58dcc7/menu-card-images/Cub-Cadet-Walk-Behind-Accessory_NavCard.png"
                              class="tile-img"
                              alt=""
                            />

                            <div class="card-link">
                              <span class="d-none d-lg-block">Shop Now</span>
                              <span class="d-block d-lg-none">
                                Push Mower Accessories
                              </span>
                            </div>
                          </a>
                        </li>
                        <li
                          class="
                              dropdown-item
                              menu-tile
                              second-level-menu-heading-tile
                            "
                          role="menuitem"
                        >
                          <a
                            href="https://www.cubcadet.com/en_US/snow-blowers/snow-blower-accessories"
                            id="snow-blower-accessories-faux"
                            role="button"
                            class="dropdown-link"
                          >
                            <span class="tile-title">
                              Snow Blower Accessories
                            </span>
                            <span class="tile-description"></span>
                            <img
                              src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwcc225e7e/menu-card-images/Cub-Cadet-Snow-Blower-Accessory_NavCard.png"
                              class="tile-img"
                              alt=""
                            />

                            <div class="card-link">
                              <span class="d-none d-lg-block">Shop Now</span>
                              <span class="d-block d-lg-none">
                                Snow Blower Accessories
                              </span>
                            </div>
                          </a>
                        </li>
                        <li class="category-link">
                          <a
                            href="https://www.cubcadet.com/en_US/riding-lawn-mowers/riding-mower-accessories"
                            id="attach-access"
                            role="button"
                            class="dropdown-link"
                          >
                            Shop All Attachments
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div class="mobile-utility-nav">
                    <div class="utility-nav">
                      <ul class="utility-list">
                        <li></li>
                        <li>
                          <a
                            href="https://www.cubcadet.com/en_US/servicelocator"
                            class="icon-find-service"
                          >
                            <span>Find Service</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/en_US/content-asset-page-includes/registration.html"
                            class="icon-registration"
                          >
                            <span>Registration</span>
                          </a>
                        </li>
                        <li class="icon-account user">
                          <a href="https://www.cubcadet.com/en_US/login">
                            <span class="user-message">Account</span>
                          </a>
                        </li>
                        <li
                          class="menu-item dropdown country-selector"
                          tabindex="0"
                          data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/Page-SetLocale"
                        >
                          <button
                            tabindex="-1"
                            class="dropdown-toggle"
                            id="dropdownCountrySelector"
                            data-toggle="dropdown"
                            data-currentcountry="USA"
                            aria-haspopup="true"
                            aria-expanded="false"
                            // role="combobox"
                            aria-owns="countryList"
                          >
                            <i class="flag-icon flag-icon-us"></i>
                            USA (en)
                          </button>
                          <div
                            id="countryList"
                            class="dropdown-menu dropdown-country-selector"
                            aria-labelledby="dropdownCountrySelector"
                          ></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
