import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                {/*<div className="footer_top">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-xl-4 col-md-6 col-lg-4 ">*/}
                                <div className="footer_widget" >
                                    <div className="footer_logo">
                                        <a href="/#">
                                            <img src="asseats/img/footer_logo.png" alt=""/>
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
                {/*            </div>*/}
                {/*         */}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="copy-right_text">*/}
                {/*    <div className="container">*/}
                {/*        /!*<div className="footer_border"></div>*!/*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-xl-12">*/}
                {/*                <p className="copy_right text-center">*/}

                {/*                    Copyright &copy;*/}
                {/*                    <script>document.write(new Date().getFullYear());</script>*/}
                {/*                    All rights reserved |*/}

                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </footer>
        );
    }
}