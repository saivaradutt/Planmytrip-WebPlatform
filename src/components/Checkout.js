import React from 'react';
import {Link} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


class Checkout extends React.Component {

    handleConfirmation = ()=> {
        let txt;
        window.alert('Do you want to proceed?');

    };

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
                                        type="date"
                                        className="form-control"
                                        placeholder="checkIn-date"

                                    />

                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input
                                        type="date"
                                        name="checkout-date"
                                        className="form-control"
                                        placeholder="checkOut-date"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input
                                        type="Number"
                                        name="Number-of-guests"
                                        className="form-control"
                                        placeholder="Number-of-guests"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input
                                        type="Number"
                                        name="Number-of-Rooms"
                                        className="form-control"
                                        placeholder="Number-of-rooms"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="more_place_btn text-center">
                                        <Link className="boxed-btn4 " type="submit" onClick={this.handleConfirmation} to ={"/Confirmation"}>Confirm</Link>
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