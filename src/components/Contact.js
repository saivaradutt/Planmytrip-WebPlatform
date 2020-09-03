import React from 'react';
import {Link} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


class Contact extends React.Component {
    onButtonClickHandler = () => {
        window.alert('Thanks for contacting us , We will get back to you shortly')
    };
    render() {
        return(
            <div >
                <Header/>

                <section className="contact-section">
                            <div  style={{height: "480px", width:"100%", position: "relative", overflow: "hidden"}}>
                                <iframe title="myframe"
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
                                        <button type="submit" onClick={this.onButtonClickHandler}className="button button-contactForm boxed-btn">Send
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

                <Footer/>
            </div>
        );

    }




}

export default Contact;



