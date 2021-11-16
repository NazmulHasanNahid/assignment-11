import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Footer.css";

const Footer = () => {
    const { user } = useAuth();
    return (
        <div className="main-footer bg-info">
        <div className="container text-content">
            <div className="row">
                
               <div className="col-md-3 col-sm-6">
                    <h4 className="fw-bold">SERVICE</h4>
                <ul className="list-unstyled">
                    <li>Designer</li>
                    <li>Interactions</li>
                    <li>CMS</li>
                    <li>Ecommerce</li>
                    <li>Accessibility</li>
                    <li>Templates</li>
                    <li>learning</li>
                </ul>
                </div>
                 
               <div className="col-md-3 col-sm-6">
                     <h4 className="fw-bold">COMPANY</h4>
                <ul className="list-unstyled">
                    <li>Careers</li>
                    <li>Accessibility Statement</li>
                    <li>Merch Store</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Preferences</li>
                    <li>Become an Affiliate</li>
                </ul>
                </div>
                  
               <div className="col-md-3 col-sm-6">
                     <h4 className="fw-bold">HELP</h4>
                <ul className="list-unstyled">
                    <li>About Colorlib</li>
                    <li>Advertise </li>
                    <li>WordPress Themes</li>
                    <li>Website Templates</li>
                    <li>Bootstrap Templates</li>
                    <li>Support Forum</li>
                    <li>Contact us</li>
                </ul>

                </div>
                 
               <div className="col-md-3 col-sm-6">
                     <h4 className="fw-bold">CONTACT US</h4>
                <ul className="list-unstyled font-awsome ">
                   
                    <li>Cumiila , Barura </li> 
                    <li><i class="fas fa-envelope"></i> nazmulhasan0993@gmail.com </li> 
                    <li> <i class="fas fa-mobile-alt"></i>  01885372431</li>
                    <li><a href="https://www.facebook.com/nazmulhasan.nahid.9889"><i class="fab fa-facebook"></i></a> Facebook</li>
                    <li><a href="https://www.linkedin.com/in/nazmul-hasan-nahid-33440b217"><i class="fab fa-linkedin-in"></i></a> Linkdin</li>
                    <li><i class="fab fa-instagram"></i> Instagram</li>
                </ul>
                </div>
            </div>
           
            
        </div>
    </div>
);
};
export default Footer;
