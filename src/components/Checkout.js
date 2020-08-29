import React from 'react';
import {Link} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


class Checkout extends React.Component {
    render() {
        return(
            <div >
                <Header/>
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
                                        <Link className="boxed-btn4 " type="submit" to ={"/Confirmation"}>Confirm</Link>
                                    </div>
                                </div>
                            </div>



                        </form>
                    </div>
                </div>
                <Footer/>
            </div>

        );

    }




}
export default Checkout;