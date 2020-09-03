import React from 'react';
import {Link} from "react-router-dom";
import countriesList from "./countries.json";
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


class Home extends React.Component {
    state = {
        search :''
    };

    handleChange = (event) => {
        this.setState({search: event.target.value});
    }
    renderCity = city => {
        const { search } = this.state;
        var code = city.id;

        return (
            <div className="col-lg-4 col-md-6" style={{ marginTop: "20px" }}>
                <Card>
                    <Link to={"/Hotels"}>
                    <CardBody>
                        <div className="single_place">
                            <img
                                src={"asseats/img/place/"+code+".png"}
                                //className={"flag flag-" + code}
                                alt={city.name}
                            />
                        </div>
                        <div className="place_info">
                        <CardTitle title={city.name}>
                            {city.name.substring(0, 15)}
                            <p>{city.country}</p>
                            <p>{city.description}</p>
                            {city.name.length > 15 && "..."}
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
        const filteredCities = countriesList.filter(country => {
            return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        return(
            <div className="App">
                <Header/>
                <div className="video_area video_bg overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-md-12">
                                <div className="where_togo_area">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-3">
                                                <div className="form_area">
                                                    <h3>Where you want to go?</h3>
                                                </div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="search_wrap">
                                                    <form className="search_form" action="#">
                                                        <div className="input_field">
                                                            <input type="text" placeholder="Where to go?" onChange={this.handleChange}/>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="popular_places_area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section_title text-center mb_70">
                                    <h3>Popular Places</h3></div>
                            </div>
                        </div>
                        <div className="row">
                            {filteredCities.map(city => {
                                return this.renderCity(city);
                            })}
                        </div>
                        <div className="row">

                        </div>

                    </div>
                </div>

                <div className="video_area video_bg overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="video_wrap text-center">
                                    <h3>Enjoy Video</h3>
                                    <div className="video_icon">
                                        <a className="popup-video video_play_button"
                                           href="https://www.youtube.com/watch?v=f59dDEk57i0">
                                            <i className="fa fa-play"> </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="travel_variation_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single_travel text-center">
                                    <div className="icon">
                                        <img src="asseats/img/svg_icon/1.svg" alt="" />
                                    </div>
                                    <h3>Comfortable Journey</h3>
                                    <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_travel text-center">
                                    <div className="icon">
                                        <img src="asseats/img/svg_icon/2.svg" alt="" />
                                    </div>
                                    <h3>Luxuries Hotel</h3>
                                    <p>Book cheap, budget and luxury hotels at best price from leading ...</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_travel text-center">
                                    <div className="icon">
                                        <img src="asseats/img/svg_icon/3.svg" alt="" />
                                    </div>
                                    <h3>Travel Guide</h3>
                                    <p>Travel information to inspire global travellers. From cities to airports, cruise ports to ski</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/*<div className="testimonial_area">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-xl-12">*/}
                {/*                <div className="testmonial_active owl-carousel">*/}
                {/*                    <div className="single_carousel">*/}
                {/*                        <div className="row justify-content-center">*/}
                {/*                            <div className="col-lg-8">*/}
                {/*                                <div className="single_testmonial text-center">*/}
                {/*                                    <div className="author_thumb">*/}
                {/*                                        <img src="asseats/img/testmonial/author.png" alt="" />*/}
                {/*                                    </div>*/}
                {/*                                    <p>"Working in conjunction with humanitarian aid agencies, we have*/}
                {/*                                        supported programmes to help alleviate human suffering.</p>*/}
                {/*                                    <div className="testmonial_author">*/}
                {/*                                        <h3>- Micky Mouse</h3>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="single_carousel">*/}
                {/*                        <div className="row justify-content-center">*/}
                {/*                            <div className="col-lg-8">*/}
                {/*                                <div className="single_testmonial text-center">*/}
                {/*                                    <div className="author_thumb">*/}
                {/*                                        <img src="asseats/img/testmonial/author.png" alt="" />*/}
                {/*                                    </div>*/}
                {/*                                    <p>"Working in conjunction with humanitarian aid agencies, we have*/}
                {/*                                        supported programmes to help alleviate human suffering.</p>*/}
                {/*                                    <div className="testmonial_author">*/}
                {/*                                        <h3>- Tom Mouse</h3>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="single_carousel">*/}
                {/*                        <div className="row justify-content-center">*/}
                {/*                            <div className="col-lg-8">*/}
                {/*                                <div className="single_testmonial text-center">*/}
                {/*                                    <div className="author_thumb">*/}
                {/*                                        <img src="asseats/img/testmonial/author.png" alt="" />*/}
                {/*                                    </div>*/}
                {/*                                    <p>"Working in conjunction with humanitarian aid agencies, we have*/}
                {/*                                        supported programmes to help alleviate human suffering.</p>*/}
                {/*                                    <div className="testmonial_author">*/}
                {/*                                        <h3>- Jerry Mouse</h3>*/}
                {/*                                    </div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}



                <Footer/>

            </div>
        );

    }




}
export default Home;
