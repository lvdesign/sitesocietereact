import React  from 'react';
import { Link } from 'react-router-dom';
import {baseUrl} from '../shared/baseUrl';

function Footer (props){
    return (

        <React.Fragment>

            <footer className="page-footer font-small bg-dark fondFooter">
    
                    <div className="container mt-5 mb-4 text-center text-md-left">

                        <div className="row mt-3">   
                
                            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                                <h6 className="text-uppercase font-weight-bold"><img src={ baseUrl + 'assets/img/picto/pictoF.svg'} alt="logo-brand" /><strong>MASOCIETE</strong></h6>
                                <p>Bonjour, vous êtes sur la démonstration du "site Société" de LVdesign.
                                    Ce site est la base d'une solution E-Commerce pour présenter votre commerce ou boutique en ligne. Très simplement,
                                    vous pourrez présenter à vos clients vos produits, vos services, votre situation
                                    et aussi les dernieres nouveautés grâce à un lien vers instagram, facebook et twitter.
                                    <a href="https://www.lvdesign.com.fr" alt="Contacter LVdesign">Je suis à votre disposition pour toutes adaptations.</a> Merci.</p>
                            </div>
                
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold"><strong>ABOUT</strong></h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"  />
                                <p><a href="#!">About MAVITRINE</a></p>
                                <p><a href="#!">FAQ</a></p>
                                <p><a href="#!">RECRUTEMENT</a></p>
                            </div>
                
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold"><strong>TERMS</strong></h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                                <p> <a href="#!">Votre compte</a> </p>
                                <p><a href="#!">Service clients</a></p>
                                <p><a href="#!">RGPD</a></p>
                                <p><a href="#!">Help!</a></p>
                            </div>
                    
                            <div className="col-md-4 col-lg-3 col-xl-3">
                                <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                                <hr className="deep-purple  mb-4 mt-0 d-inline-block mx-auto" />
                                <p><i className="fa fa-home mr-3"></i> 10 place du trocadéro, 75008 Paris</p>
                                <p><i className="fa fa-envelope mr-3"></i> contact@mavitrine.fr </p>
                                <p><i className="fa fa-phone mr-3"></i> + 06 23 56 89 12</p>
                                <p><i className="fa fa-print mr-3"></i> + 02 23 56 89 12</p>
                            </div>
            
                        </div>
                    </div>
           
                <div className="footer-copyright text-center py-3">
                    © 2019 Copyright/Conception  
                    <a href="https://lvdesign.com.fr" alt="Contact LVdesign, webdesign services"> LVdesign </a> 
                    | Images : <a href="https://unsplash.com/">Unsplash</a> 
                    | Thème : <a href="https://getbootstrap.com/docs/4.0/utilities/text/">Bootstrap 4 </a> 
                    | React &amp; mongoDB solution
                </div>
            </footer>
      </React.Fragment>
    );
}
export default Footer;