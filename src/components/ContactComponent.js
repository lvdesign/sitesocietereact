import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Col, Label, Input, FormFeedback } from 'reactstrap';
import {  withGoogleMap, GoogleMap} from 'react-google-maps';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// key AIzaSyD9aQETU7fgFdiTaePwg4pvgVcPJvk7zAY
// https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
// https://www.npmjs.com/package/google-map-react
class Contact extends Component{

    constructor(props){
        super(props);

        this.state={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree: false,
            contactType: 'Tel.',
            message:'',
            touched:{
                firstname:false,
                lastname:false,
                telnum:false,
                email:false
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    // Form action
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (evt) =>{
        this.setState({
            touched:{ ...this.state.touched, [field]:true }
        });
    }

    validate(firstname, lastname, telnum,email){
        const errors = {
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
        };

        if(this.state.touched.firstname && firstname.length < 2 )
            errors.firstname = 'Votre prénom doit avoir au moins 1 caractère. ';        
        if (this.state.touched.lastname && lastname.length < 2)
            errors.lastname = 'Votre Nom doit avoir au moins 1 caractère. ';       
        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. seulement des chiffres';            
        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) 
            errors.email = 'Email doit avoir un @';
        return errors;
    }



    render () {
        // googleMap
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
              defaultCenter = { { lat: 48.862725, lng: 2.287592 } }
              defaultZoom = { 13 }              
            >
            <AnyReactComponent
            lat={48.862725}
            lng={2.287592}
            text="My Societé"
            />
            </GoogleMap>
         ));

        const errors = this.validate(
            this.state.firstname, this.state.lastname, 
            this.state.telnum, this.state.email
            );
    



    return (        
        <div className="container">
              <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Contact</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>Contact</h3>
                  <hr />
              </div> 
              <div className="row row-content">
                <div className="col-12 col-md-9">
                    <GoogleMapExample
                        containerElement={ <div style={{ height: `300px`, width: `80vw` }} /> }
                        mapElement={ <div style={{ height: `100%` }} /> }
                    />
                    </div>
                </div>               
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Envoyez un messge</h3>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={ this.handleSubmit} > 
                        <FormGroup row>
                                <Label htmlFor="firstname" md={2}>Prénom</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Nom</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>                        
                            </FormGroup>

                            <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        value={this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur('telnum')}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>Comment vous contacter ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Votre message</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Envoyez votre message
                                    </Button>
                                </Col>
                            </FormGroup>


                            
                        </Form>
                    </div>
                </div>
            </div>
        </div>
     );
    }
}

export default Contact;