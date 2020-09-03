import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">

                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-6 col-lg-4 ">
                                <div className="footer_widget">
                                    {/*<div className="footer_logo">*/}
                                        {/*<a href="/#">*/}
                                        {/*    <p style={{fontStyle:"italic",fontFamily:"sans-serif", fontSize:30,color:"blue"}}>PlanMyTrip</p>*/}
                                        {/*</a>*/}
                                    {/*</div>*/}
                                    <p> 2100 Boul. de Maisonneuve E, <br/> Montréal, QC H2K 4S1<br/>
                                        <a href="/#">+1
                                            (514) 842-2426</a>
                                    </p>
                                    <div className="socail_links">
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com/?stype=lo&jlou=AffJ_sAFzIPi8G1dQIA_VtZWXIZCKZxgjMzzVnhzpmxvW91-VWwbPUOziX4W4ixUZvNRGI1KapFDnPkCrEd00Lb1YOPG_SuN-v0Vl2eVOFySQw&smuh=5090&lh=Ac-Is6GXtzSscrzi">
                                                    <i className="ti-facebook"> </i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/?lang=en">
                                                    <i className="ti-twitter-alt"> </i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com">
                                                    <i className="fa fa-instagram"> </i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.pinterest.ca">
                                                    <i className="fa fa-pinterest"> </i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com">
                                                    <i className="fa fa-youtube-play"> </i>
                                                </a>
                                            </li>
                                        </ul>
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
                </div>
            </footer>
        );
    }
}