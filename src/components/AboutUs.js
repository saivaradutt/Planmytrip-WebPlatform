import React from 'react';
import {Link} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

class AboutUs extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="bradcam_area bradcam_bg_3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="bradcam_text text-center">
                                    <h3>About Us</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about_story">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="story_heading">
                                    <h3>Our Story</h3>
                                </div>
                                <div className="row">
                                    <div className="col-lg-11 offset-lg-1">
                                        <div className="story_info">
                                            <div className="row">
                                                <div className="col-lg-9">
                                                    <p>Nurtured from the seed of a single great idea - to empower the traveller - PlanMyTrip
                                                        is a pioneer in online travel industry. Founded in the year 2020 , PlanMyTrip came to life
                                                        to empower the travellers with instant bookings and comprehensive choices.
                                                        The company initiated its journey serving the  travel market offering a range of
                                                        best-value products and services powered by technology and round-the-clock customer support.</p>
                                                    <p>PlanMyTrip’s rise has been led by the vision and the spirit of each
                                                        one of its employees, for whom no idea was too big and no problem too
                                                        difficult. With untiring determination, MakeMyTrip has proactively
                                                        diversified its product offering, adding a variety of online and
                                                        offline products and services. PlanMyTrip has stayed ahead of the
                                                        curve by continually evolving its technology to meet the ever-changing
                                                        demands of the rapidly developing global travel market, steadily establishing
                                                        itself as Canada`s leading online travel company.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="story_thumb">
                                            <div className="row">
                                                <div className="col-lg-5 col-md-6">
                                                    <div className="thumb padd_1">
                                                        <img src="asseats/img/about/1.png" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="thumb">
                                                        <img src="asseats/img/about/2.png" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="counter_wrap">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="single_counter text-center">
                                                        <h3 className="counter">378</h3>
                                                        <p>Tour has done successfully</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="single_counter text-center">
                                                        <h3 className="counter">30</h3>
                                                        <p>Yearly tour arrange</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="single_counter text-center">
                                                        <h3 className="counter">2263</h3>
                                                        <p>Happy Clients</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>

            </div>
        );

    }




}
export default AboutUs;
