import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink, } from 'react-router-dom'
import { baseUrl } from '../shared/baseUrl';

class Header extends Component {

    constructor(props){
        super(props);

        this.state ={
            isNavOpen:false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    // nav bar action o/i
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
     // Modal action o/i
     toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event) {
        this.toggleModal();
        console.log("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
    
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return(
            <React.Fragment>
             <Navbar dark expand="md" className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
                <div className="container ">
                <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-2" href="/#">
                    <img src={baseUrl+ 'assets/img/picto/pictoF.svg'} height="35" alt="site societe" />
                    SiteSociété
                    </NavbarBrand>

                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/product">                                
                                Produits</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">                                
                                Actualités</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">                                
                                Contact</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button  onClick={this.toggleModal}>
                                <i className="fa fa-shopping-basket" aria-hidden="true"></i> Card
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                <span className="fa fa-user-circle" aria-hidden="true"></span> Login
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>   
                            <Form onSubmit={this.handleLogin} >
                                <FormGroup>
                                    <Label htmlFor="username" >Username</Label>
                                    <Input type="text" id="username" name="username" 
                                        innerRef={(input) => this.username = input} />
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password"
                                        innerRef={(input) => this.password = input}  />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input}  />
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                            </Form>                       
                        </ModalBody>
                    </Modal>
            </React.Fragment>
        );
    }
}

export default Header;