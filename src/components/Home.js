import React from 'react';
import {Link} from "react-router-dom";
import countriesList from "./countries.json";
import {
    Button,
    Input,
    Footer,
    Card,
    CardBody,
    CardImage,
    CardTitle,
    CardText
} from "mdbreact";
class Home extends React.Component {
    state = {
        search :''
    };

    /* handleSearch = (event) => {
         event.preventDefault();

     }*/
    handleChange = (event) => {
        this.setState({search: event.target.value});
    }
    renderCity = city => {
        const { search } = this.state;
        var code = city.id;

        return (
            <div className="col-lg-4 col-md-6" style={{ marginTop: "20px" }}>
                <Card>
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


                {/*} <div className="slider_area">
                    <div className="slider_active owl-carousel">
                        <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
                            <div className="container">
                                <div className="row align-items-center">
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


                    </div>


                </div>*/}






                <div className="popular_places_area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section_title text-center mb_70">
                                    <h3>Popular Places</h3>
                                    <p>Suffered alteration in some form, by injected humour or good day randomised booth
                                        anim 8-bit hella wolf moon beard words.</p>
                                </div>
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
                                    <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single_travel text-center">
                                    <div className="icon">
                                        <img src="asseats/img/svg_icon/3.svg" alt="" />
                                    </div>
                                    <h3>Travel Guide</h3>
                                    <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="testimonial_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="testmonial_active owl-carousel">
                                    <div className="single_carousel">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                <div className="single_testmonial text-center">
                                                    <div className="author_thumb">
                                                        <img src="asseats/img/testmonial/author.png" alt="" />
                                                    </div>
                                                    <p>"Working in conjunction with humanitarian aid agencies, we have
                                                        supported programmes to help alleviate human suffering.</p>
                                                    <div className="testmonial_author">
                                                        <h3>- Micky Mouse</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_carousel">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                <div className="single_testmonial text-center">
                                                    <div className="author_thumb">
                                                        <img src="asseats/img/testmonial/author.png" alt="" />
                                                    </div>
                                                    <p>"Working in conjunction with humanitarian aid agencies, we have
                                                        supported programmes to help alleviate human suffering.</p>
                                                    <div className="testmonial_author">
                                                        <h3>- Tom Mouse</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_carousel">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                <div className="single_testmonial text-center">
                                                    <div className="author_thumb">
                                                        <img src="asseats/img/testmonial/author.png" alt="" />
                                                    </div>
                                                    <p>"Working in conjunction with humanitarian aid agencies, we have
                                                        supported programmes to help alleviate human suffering.</p>
                                                    <div className="testmonial_author">
                                                        <h3>- Jerry Mouse</h3>
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
                                                <a href="/#">
                                                    <img src="asseats/img/instagram/1.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="single_insta">
                                                <a href="/#">
                                                    <img src="asseats/img/instagram/2.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="single_insta">
                                                <a href="/#">
                                                    <img src="asseats/img/instagram/3.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="single_insta">
                                                <a href="/#">
                                                    <img src="asseats/img/instagram/4.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="single_insta">
                                                <a href="/#">
                                                    <img src="asseats/img/instagram/5.png" alt="" />
                                                </a>
                                            </div>
                                            <div className="single_insta">
                                                <a href="/#">
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
export default Home;
