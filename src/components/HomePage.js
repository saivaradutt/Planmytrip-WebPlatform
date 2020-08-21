import React, {Component} from 'react';
//import homepage from "./css/homepage.css"
//import Header from "./Header";
//import Footer from "./Footer";


class HomePage extends Component {


    render() {
        return (
            <div>
                {/* <Header/> */}
                <main>
                    <h1>Simple gallery pure css</h1>
                    <div className="container-all">
                        <div className="container">
                            <img src="https://bit.ly/2PvlS8Z" alt="" />
                                <span className="title">Lorem ipsum dolor</span>
                                <span className="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span>
                        </div>
                        <div className="container">
                            <img src="https://bit.ly/2PXNumM" alt="" />
                                <span className="title">Lorem ipsum dolor</span>
                                <span className="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span>
                        </div>
                        <div className="container">
                            <img src="https://bit.ly/2KbUszm" alt="" />
                                <span className="title">Lorem ipsum dolor</span>
                                <span className="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span>
                        </div>

                    </div>
                </main>
                {/* <Footer/> */}
            </div>
        );
    }
}

export default HomePage;
