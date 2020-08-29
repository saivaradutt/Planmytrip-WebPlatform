import {Link} from "react-router-dom";
import React from "react";

export default class Header extends React.Component{
    render() {
        return(
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
        </header>)
    }
}
