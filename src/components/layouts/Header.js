import React from "react";

import { Link } from "react-router-dom";

import { _staticUrl } from "config/utils";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Header">
                <div className="navbar-top pt-2 pb-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <a href="/shop" className="mb-0 text-white">
                                    20% cashback for all users | Code: <strong><span className="text-light">OGOFERS13 <span className="mdi mdi-tag-faces" /></span>
                                    </strong> </a>
                            </div>
                            <div className="col-md-6 text-right top-right-menu">
                                <ul id="menu-top-right" className="nav-top-right list-inline t-md-right">
                                    <li id="menu-item-260" className="mdi mdi-lock menu-item menu-item-type-post_type menu-item-object-page menu-item-260"><a href="/my-account/">Sign In</a></li>
                                    <li id="menu-item-261" className="mdi mdi-account-circle menu-item menu-item-type-post_type menu-item-object-page menu-item-261"><a href="/my-account/">Sign Up</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



                <nav className="navbar navbar-light navbar-expand-lg bg-dark bg-faded osahan-menu klb-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6 col-md-3 klb-clear order-xs-first">
                                <Link className="navbar-brand" to="/" title="Groci – Organic Food and Grocery Theme">
                                    <img src={_staticUrl("/groci/wp-content/uploads/2018/08/logo-1.png")} alt="Groci – Organic Food and Grocery Theme" />
                                </Link>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
                                    <div className="top-categories-search">
                                        <form className="search-form woocommerce-product-search" role="search" method="get" id="searchform" action="groci/">
                                            <div className="input-group">
                                                <input className="form-control" type="text" defaultValue name="s" id="s" placeholder="Enter Keyword Here ..." autoComplete="off" />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-secondary" type="submit"><i className="mdi mdi-file-find" /> Search</button>
                                                    <input type="hidden" name="post_type" defaultValue="product" />
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-md-3 klb-main-nav-right order-xs-second">
                                <div className="my-lg-0">
                                    <ul className="list-inline main-nav-right">
                                        <li className="list-inline-item cart-btn">
                                            <a href="#" data-toggle="offcanvas" className="btn btn-link border-none"><i className="mdi mdi-cart" /> My Cart
                      <small className="cart-value cart-contents">0</small></a>
                                        </li>
                                    </ul>
                                </div>
                                <button className="navbar-toggler navbar-toggler-white" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>




                <nav className="navbar navbar-expand-lg navbar-light osahan-menu-2 pad-none-mobile">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul id="menu-menu-1" className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto">
                                <li className="nav-item menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home active"><a className="nav-link" href="/">Home</a></li>
                                <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link" href="/about-us/">About
                  Us</a></li>
                                <li className="nav-item menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a className="nav-link" href="/product-category/fruits-vegetables/">Fruits
                  &amp; Vegetables</a></li>
                                <li className="nav-item dropdown menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a className="nav-link dropdown-toggle" href="/shop/">Shop</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link dropdown-item" href="/shop/"><i className="mdi mdi-chevron-right" aria-hidden="true" /> Products Grid</a></li>
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-product"><a className="nav-link dropdown-item" href="/product/jumbo-rainier-cherries/"><i className="mdi mdi-chevron-right" aria-hidden="true" /> Product
                      Detail</a></li>
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><Link className="nav-link dropdown-item" to="/my-account"><i className="mdi mdi-chevron-right" aria-hidden="true" /> My account</Link></li>
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link dropdown-item" href="/checkout/"><i className="mdi mdi-chevron-right" aria-hidden="true" /> Checkout</a></li>
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link dropdown-item" href="/cart/"><i className="mdi mdi-chevron-right" aria-hidden="true" /> Cart</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a className="nav-link dropdown-toggle" href="#">Blog</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link dropdown-item" href="/blog/"><i className="mdi mdi-chevron-right" aria-hidden="true" /> Blog List</a></li>
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-post"><a className="nav-link dropdown-item" href="/blog/2018/08/12/restaurant-employer-read-clients-orders-on-his-ipad/"><i className="mdi mdi-chevron-right" aria-hidden="true" /> Blog Detail</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link" href="/faq/">FAQ</a></li>
                                <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link" href="/contact-us/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;