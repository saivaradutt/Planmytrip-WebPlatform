import React from 'react';
import {Link} from "react-router-dom";




class Contact extends React.Component {
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
                                                        <li><a href="aboutUs.html">AboutUs</a></li>
                                                        <li><a className=""
                                                               href="Hotels.html">Hotels</a>
                                                        </li>
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
                                                        <li><a href="#"> <i className="fa fa-instagram"> </i> </a></li>
                                                        <li><a href="#"> <i className="fa fa-linkedin"> </i> </a></li>
                                                        <li><a href="#"> <i className="fa fa-facebook"> </i> </a></li>
                                                        <li><a href="#"> <i className="fa fa-google-plus"> </i> </a></li>
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

                <section className="contact-section">


                            <div  style={{height: "480px", width:"100%", position: "relative", overflow: "hidden"}}>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.22689410892!2d-73.55348038447745!3d45.525639479101756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc918e0c061b07f%3A0x647a6b6d7cb681a7!2sISI%2C%20L&#39;institut%20Sup%C3%A9rieur%20d&#39;Informatique!5e0!3m2!1sen!2sca!4v1598571040709!5m2!1sen!2sca"
                                    style={{height: "480px", width:"100%", position: "relative", overflow: "hidden"}} > </iframe>



                        </div>
                    <div className="container">

                        <div className="row">
                            <div className="col-12">
                                <h2 className="contact-title">Get in Touch</h2>
                            </div>
                            <div className="col-lg-8">
                                <form className="form-contact contact_form"  method="post"
                                      id="contactForm" noValidate="novalidate">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control w-100" name="message" id="message"
                                                          cols="30" rows="9" onFocus="this.placeholder = ''"
                                                          onBlur="this.placeholder = 'Enter Message'"
                                                          placeholder=" Enter Message"> </textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control valid" name="name" id="name" type="text"
                                                       onFocus="this.placeholder = ''"
                                                       onBlur="this.placeholder = 'Enter your name'"
                                                       placeholder="Enter your name"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control valid" name="email" id="email"
                                                       type="email" onFocus="this.placeholder = ''"
                                                       onBlur="this.placeholder = 'Enter email address'"
                                                       placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input className="form-control" name="subject" id="subject" type="text"
                                                       onFocus="this.placeholder = ''"
                                                       onBlur="this.placeholder = 'Enter Subject'"
                                                       placeholder="Enter Subject"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <button type="submit" className="button button-contactForm boxed-btn">Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-3 offset-lg-1">
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="ti-home"> </i></span>
                                    <div className="media-body">
                                        <h3>2100 boul. de Maisonneuve Est
                                            </h3>
                                        <p>Montreal,Quebec</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="ti-tablet"> </i></span>
                                    <div className="media-body">
                                        <h3>+1-438-342-2426</h3>
                                        <p>Mon to Fri 9am to 6pm</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="ti-email"> </i></span>
                                    <div className="media-body">
                                        <h3>info@isi-mtl.com</h3>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <div className="footer_top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-md-6 col-lg-4 ">
                                    <div className="footer_widget">
                                        <div className="footer_logo">
                                            <a href="#">
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
                                                <a href="#">
                                                    <img src="asseats/img/instagram/1.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="single_insta">
                                                <a href="#">
                                                    <img src="asseats/img/instagram/2.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="single_insta">
                                                <a href="#">
                                                    <img src="asseats/img/instagram/3.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="single_insta">
                                                <a href="#">
                                                    <img src="asseats/img/instagram/4.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="single_insta">
                                                <a href="#">
                                                    <img src="asseats/img/instagram/5.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="single_insta">
                                                <a href="#">
                                                    <img src="asseats/img/instagram/6.png" alt="" />
                                                </a>
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

export default Contact;
{/*
export default GoogleApiWrapper({
    apiKey: "AIzaSyBXvAl1YrInIQ4n1IYOmSzrpj1ZjXgU7gY "
})(Contact);*/}


