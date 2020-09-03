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
                        <div className="place_info">
                            <CardTitle title={hotel.name}>
                                <p>{hotel.name}</p>
                                <p>{hotel.Address}</p>
                                <p>{hotel.Telephone}</p>
                                <p>{hotel.city}</p>
                                <p>{hotel.description}</p>
                                <div>
                                    <Link to={"/Checkout"}>Book</Link>
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
