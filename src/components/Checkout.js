import React from 'react';
import {Link} from "react-router-dom";




class Checkout extends React.Component {
    render() {
        return(
            <div >

                <header>
                    <div className="header-area ">
                        <div id="sticky-header" className="main-header-area">
                            <div className="container-fluid">
                                <div className="header_bottom_border">
                                    <div className="row align-items-center">
                                        <div className="col-xl-2 col-lg-2">
                                            <div className="logo">
                                                <a href="/#">
                                                    <img src="asseats/img/logo2.png" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="main-menu  d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">
                                                        <Link to={"/home"}><li>Home</li></Link>
                                                        <Link to={"/about-us"}><li>AboutUs</li></Link>
                                                        <Link to={"/hotels"}><li>Hotels</li></Link>
                                                        <Link to={"/Contact"}><li>ContactUs</li></Link>
                                                        <Link to={"/sign-in"}><li>Logout</li></Link>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 d-none d-lg-block">
                                            <div className="social_wrap d-flex align-items-center justify-content-end">
                                                <div className="number">
                                                    <p><i className="fa fa-phone"> </i> +1	(514) 842-2426</p>
                                                </div>
                                                <div className="social_links d-none d-xl-block">
                                                    <ul>
                                                        <li><a href="/#"> <i className="fa fa-instagram"> </i> </a></li>
                                                        <li><a href="/#"> <i className="fa fa-linkedin"> </i> </a></li>
                                                        <li><a href="/#"> <i className="fa fa-facebook"> </i> </a></li>
                                                        <li><a href="/#"> <i className="fa fa-google-plus"> </i> </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="mobile_menu d-block d-lg-none"> </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>


                <div className="bradcam_area bradcam_bg_2">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="bradcam_text text-center">
                                    <h3>Booking Information</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <div style={{marginLeft:"32%", paddingTop:50}}>
                    <form className="form-contact contact_form" >
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input
                                    name="Name"
                                    type="text"
                                    className="form-control"
                                    placeholder="name"

                                />

                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="email"
                                    required

                                />

                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input
                                    name="checkIn-date"
                                    type="datetime-local"
                                    className="form-control"
                                    placeholder="checkIn-date"

                                />

                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input
                                    type="datetime-local"
                                    name="checkout-date"
                                    className="form-control"
                                    placeholder="checkOut-date"
                                    required


                                />

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="more_place_btn text-center">
                                    <button className="boxed-btn4 " type="submit"onClick={this.routeChange}>Submit</button>
                                </div>
                            </div>
                        </div>



                    </form>
                </div>
            </div>
            </div>

        );

    }




}
export default Checkout;
