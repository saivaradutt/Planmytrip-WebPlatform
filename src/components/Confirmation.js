import React from 'react';
import {Link} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";



class Confirmation extends React.Component {
    render() {
        return(<div>
                <Header/>
                     <div style={{marginLeft:"25%"}}><img src="https://classroomclipart.com/images/gallery/Animations/Transportation/plane_flying_around_earth_5C.gif" alt=""/>
                     </div>
                     <div style={{marginLeft:"40%"}}>
                       <p style={{color:"#39FF14"}}> YOUR BOOKING IS COMPLETED</p>
                       <p style={{color:"#EC9706"}}>Thank you for booking with us</p>
                     </div>
                <Footer/>
            </div>
        );

    }




}
export default Confirmation;
