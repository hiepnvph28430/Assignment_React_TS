import React from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../interfaces/product'

type IProps = {
    products: IProduct[]
}

const ProductDetailPage = (props: IProps) => {
    const { id } = useParams();
    const currentProduct = props.products.find(item => item.id == Number(id))
    return (
        <div className="sub_page">

            <div className="hero_area">

                {/* <!-- header section strats --> */}
                <header className="header_section">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <a className="navbar-brand" href="index.html">
                                <span>
                                    Timups
                                </span>
                            </a>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className=""> </span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Home  </a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/products"> Watches <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="about.html"> About </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contact Us</a>
                                    </li>
                                </ul>
                                <div className="user_option-box">
                                    <a href="">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                {/* <!-- end header section --> */}
            </div>

            {/* <!-- shop section --> */}

            <section className="shop_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Latest Watches
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-xl-3">
                            <div className="box">
                                <a href="">
                                    <div className="img-box">
                                        <img src={currentProduct?.image} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            {currentProduct?.name}
                                        </h6>
                                        <h6>
                                            Price:
                                            <span>
                                                {currentProduct?.price}
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* <!-- end shop section --> */}

            {/* <!-- footer section --> */}
            <footer className="footer_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 footer-col">
                            <div className="footer_detail">
                                <h4>
                                    About
                                </h4>
                                <p>
                                    Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                                </p>
                                <div className="footer_social">
                                    <a href="">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 footer-col">
                            <div className="footer_contact">
                                <h4>
                                    Reach at..
                                </h4>
                                <div className="contact_link_box">
                                    <a href="">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span>
                                            Location
                                        </span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <span>
                                            Call +01 1234567890
                                        </span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <span>
                                            demo@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 footer-col">
                            <div className="footer_contact">
                                <h4>
                                    Subscribe
                                </h4>
                                <form action="#">
                                    <input type="text" placeholder="Enter email" />
                                    <button type="submit">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 footer-col">
                            <div className="map_container">
                                <div className="map">
                                    <div id="googleMap"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-info">
                        <p>
                            &copy; <span id="displayYear"></span> All Rights Reserved By
                            <a href="https://html.design/">Free Html Templates</a>
                        </p>
                    </div>
                </div>
            </footer>
            {/* <!-- footer section --> */}
        </div>

    )
}

export default ProductDetailPage