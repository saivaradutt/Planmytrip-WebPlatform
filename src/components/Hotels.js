import React from 'react';
import {Link} from "react-router-dom";
import HotelsList from "./hotels.json";
import {
    Button,
    Input,
    Card,
    CardBody,
    CardImage,
    CardTitle,
    CardText
} from "mdbreact";
import Footer from "./Footer";
import Header from "./Header";
import Checkout from "./Checkout";


class Hotels extends React.Component {
    state = {
        search :''
    };

    renderHotel = hotel => {
        const { search } = this.state;
        var code = hotel.id;

        return (
            <div className="col-lg-4 col-md-6" style={{ marginTop: "20px" }}>
                <Card>
                    <Link to={"/Checkout"}>
                    <CardBody>
                        <div className="single_place">
                            <img
                                src={"asseats/img/place/"+code+".png"}
                                //className={"flag flag-" + code}
                                alt={hotel.name}
                            />
                        </div>
<<<<<<< HEAD
                        <div className="place_info">
                            <CardTitle title={hotel.name}>
                                <p>{hotel.name}</p>
                                <p>{hotel.Address}</p>
                                <p>{hotel.Telephone}</p>
                                <p>{hotel.city}</p>
                                <p>{hotel.description}</p>
                                <div>
                                    <Link to={"/Checkout"}>Book</Link>
=======
                    </div>
                </header>

<div>
    <Link to={"/Confirmation"}>confirm</Link>
</div>
                <div>
                    <Link to={"/Checkout"}>checkout</Link>
                </div>
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
>>>>>>> 4c80434998a0dd07fe55288c739404018e8cd015
                                </div>
                            </CardTitle>
                        </div>
                    </CardBody>
                    </Link>
                </Card>
            </div>
        );
    };

    render() {
        const { search } = this.state;
        const filteredHotels = HotelsList.filter(hotel => {
            return hotel.name;
        });
        return(
            <div>
                <Header/>
                <div className="popular_places_area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section_title text-center mb_70">

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {filteredHotels.map(hotel => {
                                return this.renderHotel(hotel);
                            })}
                        </div>
                        <div className="row">

                        </div>

                    </div>
                </div>

                <Footer/>


            </div>
        );

    }




}
export default Hotels;
