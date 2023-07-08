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


            <section>
                <div className="tw-relative tw-mx-auto tw-max-w-screen-xl tw-px-4 tw-py-8">
                    <div>
                        <h1 className="tw-text-2xl tw-font-bold tw-lg:text-3xl"> {currentProduct?.name}</h1>

                        <p className="tw-mt-1 tw-text-sm tw-text-gray-500">SKU: #012345</p>
                    </div>

                    <div className="tw-grid tw-gap-8 tw-grid-cols-4 tw-lg:items-start">
                        <div className="tw-col-span-3">
                            <div className="tw-relative tw-mt-4">
                                <img

                                    src={currentProduct?.image} alt=""
                                    className="tw-h-[500px] tw-w-[500px] tw-rounded-xl tw-object-cover tw-lg:h-[540px] "
                                />

                                <div
                                    className="tw-absolute tw-bottom-4 tw-left-[100px]  tw-inline-flex tw--translate-x-1/4 tw-items-center tw-rounded-full tw-bg-black/75 tw-px-3 tw-py-1.5 tw-text-white"
                                >
                                    <svg
                                        className="tw-h-4 tw-w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                        />
                                    </svg>

                                    <span className="tw-ml-1.5 tw-text-xs"> Hover to zoom </span>
                                </div>
                            </div>

                            <ul className="tw-mt-1 tw-flex tw-gap-1">
                                <li>
                                    <img
                                        src={currentProduct?.image} alt=""
                                        className="tw-h-16 tw-w-16 tw-rounded-md tw-object-cover"
                                    />
                                </li>

                                <li>
                                    <img
                                        src={currentProduct?.image} alt=""
                                        className="tw-h-16 tw-w-16 tw-rounded-md tw-object-cover"
                                    />
                                </li>

                                <li>
                                    <img
                                        src={currentProduct?.image} alt=""
                                        className="tw-h-16 tw-w-16 tw-rounded-md tw-object-cover"
                                    />
                                </li>

                                <li>
                                    <img
                                        src={currentProduct?.image} alt=""
                                        className="tw-h-16 tw-w-16 tw-rounded-md tw-object-cover"
                                    />
                                </li>
                            </ul>
                        </div>

                        <div className="tw-lg-sticky tw-lg:top-0">
                            <form className="tw-space-y-10 tw-lg:pt-8">
                                <fieldset>
                                    <legend className="tw-text-lg tw-font-bold">Color</legend>

                                    <div className="tw-mt-2 flex tw-flex-wrap tw-gap-1">
                                        <label htmlFor="color_green" className="tw-cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_green"
                                                name="color"
                                                className="tw-peer tw-sr-only"
                                                checked
                                            />

                                            <span
                                                className="tw-block tw-h-6 tw-w-6 tw-rounded-full tw-border tw-border-gray-200 tw-bg-green-700 tw-ring-1 tw-ring-transparent tw-ring-offset-1 tw-peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label htmlFor="color_blue" className="tw-cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_blue"
                                                name="color"
                                                className="tw-peer tw-sr-only"
                                            />

                                            <span
                                                className="tw-block tw-h-6 tw-w-6 tw-rounded-full tw-border tw-border-gray-200 tw-bg-blue-700 tw-ring-1 tw-ring-transparent tw-ring-offset-1 tw-peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label htmlFor="color_pink" className="tw-cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_pink"
                                                name="color"
                                                className="tw-peer tw-sr-only"
                                            />

                                            <span
                                                className="tw-block tw-h-6 tw-w-6 tw-rounded-full tw-border tw-border-gray-200 tw-bg-pink-700 tw-ring-1 tw-ring-transparent tw-ring-offset-1 tw-peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label htmlFor="color_red" className="tw-cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_red"
                                                name="color"
                                                className="tw-peer tw-sr-only"
                                            />

                                            <span
                                                className="tw-block tw-h-6 tw-w-6 tw-rounded-full tw-border tw-border-gray-200 tw-bg-red-700 tw-ring-1 tw-ring-transparent tw-ring-offset-1 tw-peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label htmlFor="color_indigo" className="tw-cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_indigo"
                                                name="color"
                                                className="tw-peer tw-sr-only"
                                            />

                                            <span
                                                className="tw-block tw-h-6 tw-w-6 tw-rounded-full tw-border tw-border-gray-200 tw-bg-indigo-700 tw-ring-1 tw-ring-transparent tw-ring-offset-1 tw-peer-checked:ring-gray-300"
                                            ></span>
                                        </label>
                                    </div>
                                </fieldset>



                                <div className="tw-rounded tw-border tw-bg-gray-100 tw-p-4">
                                    <p className="tw-text-sm">
                                        <span className="tw-block"> Pay as low as $3/mo with 0% APR. </span>

                                        <a href="" className="tw-mt-1 tw-inline-block tw-underline"> Find out more </a>
                                    </p>
                                </div>

                                <div>
                                    <p className="tw-text-xl tw-font-bold"> {currentProduct?.price}</p>
                                </div>

                                <button
                                    type="submit"
                                    className="tw-w-full tw-rounded tw-bg-red-700 tw-px-6 tw-py-3 tw-text-sm tw-font-bold tw-uppercase tw-tracking-wide tw-text-white"
                                >
                                    Add to cart
                                </button>

                                <button
                                    type="button"
                                    className="tw-w-full tw-rounded tw-border tw-border-gray-300 tw-bg-gray-100 tw-px-6 tw-py-3 tw-text-sm tw-font-bold tw-uppercase tw-tracking-wide"
                                >
                                    Notify when on sale
                                </button>
                            </form>
                        </div>

                        <div className="tw-lg:col-span-3">
                            <div className="tw-prose tw-max-w-none">
                                <p>
                                    {currentProduct?.desc}
                                </p>
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