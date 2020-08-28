import React from 'react';
import {Link} from "react-router-dom";




class Hotels extends React.Component {
    render() {
        return(
            <div>
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
                                                        <Link to={"/aboutus"}><li>AboutUs</li></Link>
                                                        <Link to={"/hotels"}><li>Hotels</li></Link>
                                                        <Link to={"/sign-in"}><li>Logout</li></Link>
                                                        <Link to={"/Contact"}><li>ContactUs</li></Link>
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


                <footer className="footer">
                    <div className="footer_top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-md-6 col-lg-4 ">
                                    <div className="footer_widget">
                                        <div className="footer_logo">
                                            <a href="/#">
                                                <img src="asseats/img/footer_logo.png" alt="" />
                                            </a>
                                        </div>
                                        <p> 2100 Boul. de Maisonneuve E, <br/> Montréal, QC H2K 4S1<br/>
                                            <a href="/#">+1
                                                (514) 842-2426</a> <br/>

                                        </p>
                                        <div className="socail_links">
                                            <ul>
                                                <li>
                                                    <a href="/#">
                                                        <i className="ti-facebook"> </i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#">
                                                        <i className="ti-twitter-alt"> </i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#">
                                                        <i className="fa fa-instagram"> </i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#">
                                                        <i className="fa fa-pinterest"> </i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#">
                                                        <i className="fa fa-youtube-play"> </i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-6 col-lg-2">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Company
                                        </h3>
                                        <ul className="links">
                                            <li><a href="/#">Hotels</a></li>
                                            <li><a href="/#">About</a></li>
                                            <li><a href="/#"> Gallery</a></li>
                                            <li><a href="/#"> Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-3">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Popular destination
                                        </h3>
                                        <ul className="links double_links">
                                            <li><a href="/#">Indonesia</a></li>
                                            <li><a href="/#">America</a></li>
                                            <li><a href="/#">India</a></li>
                                            <li><a href="/#">Switzerland</a></li>
                                            <li><a href="/#">Italy</a></li>
                                            <li><a href="/#">Canada</a></li>
                                            <li><a href="/#">Franch</a></li>
                                            <li><a href="/#">England</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-3">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Instagram
                                        </h3>
                                        <div className="instagram_feed">
                                            <div className="single_insta">
                                                <img src="asseats/img/instagram/1.png" alt="" />

                                            </div>
                                            <div className="single_insta">
                                                <img src="asseats/img/instagram/2.png" alt="" />

                                            </div>
                                            <div className="single_insta">

                                                <img src="asseats/img/instagram/3.png" alt="" />
                                            </div>
                                            <div className="single_insta">

                                                <img src="asseats/img/instagram/4.png" alt="" />

                                            </div>
                                            <div className="single_insta">

                                                <img src="asseats/img/instagram/5.png" alt="" />

                                            </div>
                                            <div className="single_insta">

                                                <img src="asseats/img/instagram/6.png" alt="" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right_text">
                        <div className="container">
                            <div className="footer_border"> </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <p className="copy_right text-center">

                                        Copyright &copy;
                                        <script>document.write(new Date().getFullYear());</script>
                                        All rights reserved |

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>


            </div>
        );

    }




}
export default Hotels;
