import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';

import { NavLink, } from 'react-router-dom'


class Header extends Component {

    constructor(props){
        super(props);

        this.state ={
            isNavOpen:false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    // nav bar action o/i
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return(
            <React.Fragment>
             <Navbar dark expand="md">
                <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/#">
                    <img src="assets/img/picto/pictoF.svg" height="30" alt="site societe" />
                    Societe
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span>
                                Home</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lg"></span>
                                About Us</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/product">
                                <span className="fa fa-list fa-lg"></span>
                                Product</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-address fa-lg"></span>
                                Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                  <div className="row row-header">
                    <div className="col-12">
                    <h1>Site Societe</h1>
                    <p>Text form text etetetetet.</p>
                    </div>
                  </div> 
                </div>
            </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;