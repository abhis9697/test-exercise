import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Form, Nav, Row, Col, Button} from "react-bootstrap";
import Collapsible from 'react-collapsible';
import {Link} from 'react-router-dom';
import WOW from "wowjs";
import GoogleMapComponentWithMarker from "./GoogleMapComponentWithMarker";

const styles1 = {
  width: '100%',
  height: '536px'
}



class Home extends Component {
  constructor(props) {
    super(props);
 
    
  }
  componentDidMount(){
    new WOW.WOW().init();
  }

// Import custom icon for map marker
// You can use this if you need to support IE11 and lower.
// const mapMarker = require('./GoogleMapMarker.svg')

// Google Map component
 
  
   render() {
    
    return (
     <div>
       
       {/* START HEADER SECTION */}      
       <header> 
          <div className="container">

                          <Navbar   expand="md">
                  <Navbar.Brand href="/home" >Test Exercise</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                      <Nav.Link active href="#about">ABOUT</Nav.Link>
                      <Nav.Link href="#community">COMMUNITY</Nav.Link>
                      <Nav.Link href="#location">LOCATION</Nav.Link>
                      <Nav.Link href="#ourmenu">OUR MENU</Nav.Link>
                      <Nav.Link href="#">RECIPES</Nav.Link>
                      <Nav.Link href="#contact">CONTACT</Nav.Link>
                      <Nav.Link href="#">LOGIN</Nav.Link>
                    
                    </Nav>
                    
                  </Navbar.Collapse>
                </Navbar>

           
              </div>        	
          </header>
          {/* END HEADER SECTION */} 

          <main>  
            {/* START BANNER SECTION */}          
              <div className="banner-section">
                  <div className="container">

                        <div className="col-md-4 wow slideInUp" data-wow-delay=".4s">
                            <div className="caption">
                              <h1>THE BEST FOODIE<br/>
              EXPERIENCE</h1>
              <h3>NOW IN LONDON</h3> 
            
                      </div>
                          </div>
 
                      </div>
                <div className="wave"></div>							
              </div>
              {/* END BANNER SECTION */}      


                 {/* START ABOUT SECTION */}
              <div className="container" id="about">
                    <hgroup className="wow fadeInUp" >
                        <h2>ABOUT</h2>
                         
                      </hgroup>
                  <div className="row clearfix">
                    <div className="col-sm-4 wow fadeInUp" data-wow-delay=".30s">
                      <div className="service-box" style={{paddingBottom:'0'}}>
                        <img src="/service-icon1.png" className="img-responsive center-block"/>
                        <h3>Increased Sales</h3>
                      
                      </div>
                    </div>
                    <div className="col-sm-4 wow fadeInUp"  data-wow-delay=".70s">
                      <div className="service-box " style={{paddingBottom:'0'}}>
                        <img src="/service-icon2.png" className="img-responsive center-block"/>
                        <h3>Efficient Staff</h3>
                      
                      </div>
                    </div>
                    <div className="col-sm-4 wow fadeInUp"  data-wow-delay=".80s">
                      <div className="service-box" style={{paddingBottom:'0'}}>
                        <img src="/service-icon3.png" className="img-responsive center-block"/>
                        <h3>Happy Guests</h3>
                     
                      </div>
                    </div>
                    <div className="col-sm-4 wow fadeInUp offset-2"  data-wow-delay=".90s">
                      <div className="service-box" style={{paddingTop:'0'}}>
                        <img src="/service-icon4.png" className="img-responsive center-block"/>
                        <h3>Better Reviews</h3>
                        <p>1-Star reviews about slow service are a thing of the past.</p>
                      </div>
                    </div>
                    <div className="col-sm-4 wow fadeInUp"  data-wow-delay=".95s">
                      <div className="service-box" style={{paddingTop:'0'}}>
                        <img src="/service-icon5.png" className="img-responsive center-block"/>
                        <h3>Guest Data Insights</h3>
                        <p>Know who your best guests are</p>
                      </div>
                    </div>
                  </div>	
                </div>
                  {/* END ABOUT SECTION */}


                 {/* START COMMUNITY SECTION */}
                {/* <div className="admin-dashboard-section" id="community">
                    <div className="container">

                    <h2 className="text-center">COMMUNITY</h2>



                      <div className="row clearfix">
                  
                               
                                
                                </div>
                        
                      </div>
                    </div>
                  </div> */}
                   {/* END COMMUNITY SECTION */}

  {/* START LOCATION SECTION */}
  <div id="location">
                    <div className="container">

                    {/* <h2 className="text-center">LOCATION</h2> */}



                      <div className="row clearfix">
           
                      <div style={styles1}>
        <GoogleMapComponentWithMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>

                      </div>
                    </div>
                  </div>
                   {/* END LOCATION SECTION */}


               

                    {/* START OUR MENU SECTION */}
                      <div className="seprator team-section" id="ourmenu">
                        <div className="container">	
                          <h2 className="text-center">Our Menu</h2>
                          <div className="clearfix row">
                                  <div className="col-md-3 wow fadeInUp" data-wow-delay=".30s">
                                      <div className="team-wrap">
                                            <div className="info-wrap">
                                              <p className="name">STARTERS</p>
                                                <p>QUINOA CROQUETTAS</p>
                                                <p className="phone">Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                                            </div>
                                            <div className="info-wrap">
                                              <p className="name">STARTERS</p>
                                                <p>QUINOA CROQUETTAS</p>
                                                <p className="phone">Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                                            </div>
                                            <div className="info-wrap">
                                              <p className="name">STARTERS</p>
                                                <p>QUINOA CROQUETTAS</p>
                                                <p className="phone">Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 wow fadeInUp" data-wow-delay=".30s">
                                      <div className="team-wrap">
                                            <div className="info-wrap">
                                              <p className="name">STARTERS</p>
                                                <p>QUINOA CROQUETTAS</p>
                                                <p className="phone">Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                                            </div>
                                            <div className="info-wrap">
                                              <p className="name">STARTERS</p>
                                                <p>QUINOA CROQUETTAS</p>
                                                <p className="phone">Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                                            </div>
                                            <div className="info-wrap">
                                              <p className="name">STARTERS</p>
                                                <p>QUINOA CROQUETTAS</p>
                                                <p className="phone">Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 wow fadeInUp" data-wow-delay=".30s">
                                      <div className="team-wrap">
                                            <div className="info-wrap">
                                              <p className="name">STARTERS</p>
                                                <p>QUINOA CROQUETTAS</p>
                                                <p className="phone">Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                                            </div>
                                            <div className="info-wrap">
                                              <p className="name">STARTERS</p>
                                                <p>QUINOA CROQUETTAS</p>
                                                <p className="phone">Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                                            </div>
                                            <div className="info-wrap">
                                              <p className="name">STARTERS</p>
                                                <p>QUINOA CROQUETTAS</p>
                                                <p className="phone">Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 wow fadeInUp" data-wow-delay=".30s">
                                      <div className="team-wrap">
                                            <div className="info-wrap">
                                              <p className="name">STARTERS</p>
                                                <p>QUINOA CROQUETTAS</p>
                                                <p className="phone">Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                                            </div>
                                            <div className="info-wrap">
                                              <p className="name">STARTERS</p>
                                                <p>QUINOA CROQUETTAS</p>
                                                <p className="phone">Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                                            </div>
                                            <div className="info-wrap">
                                              <p className="name">STARTERS</p>
                                                <p>QUINOA CROQUETTAS</p>
                                                <p className="phone">Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                          
                        </div>
                      </div>	

              </main>

               {/* START FOOTER SECTION */} 
                <footer id="contact">
                  <div className="container">
                  <div className="clearfix row">
                  <div className="col-md-6 wow fadeInRight">
                  <div className="text-center" style={{marginBottom:'50px'}}>
                          <h2 style={{textAlign: 'justify'}}>COLLABORATE </h2>
                          <h1 style={{textAlign: 'justify'}}> WITH US</h1><br/><br/>

                                        
                                          <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                                             elit, sed do eiusmod tempor incididunt ut labore et<br/>
                                            dolore magna aliqua. 
                              </p>
                              
                              <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                                             elit, sed do eiusmod tempor incididunt ut labore et<br/>
                                              dolore magna aliqua. 
                              </p>
                           </div>  
                  </div>
                                <div className="col-md-6 wow fadeInRight">
                                

                                  <h2>Send a Message</h2>
                                  <Form>
                                  <Form.Group as={Row}>
                                    <Col sm="6">                                   
                                      <Form.Label>Your Name*</Form.Label>
                                      <Form.Control type="text" />
                                    </Col>
                                    <Col sm="6">                                   
                                      <Form.Label>Your Email*</Form.Label>
                                      <Form.Control type="text" />
                                    </Col>
                                   </Form.Group>
                                   <Form.Group as={Row}>
                                    <Col sm="12">                                   
                                      <Form.Label>Your Subject*</Form.Label>
                                      <Form.Control type="text" />
                                    </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                    <Col sm="12">                                   
                                      <Form.Label>Your Message*</Form.Label>
                                      <Form.Control as="textarea" rows="5" />
                                    </Col>
                                   </Form.Group>
                                <Button variant="primary" className="btn btn-default" type="submit">
                                  Submit
                                </Button>
                            </Form>

                                   
                                </div>
                      </div>
                   
                    
                  </div>
                    <div className="copyright wow fadeIn">
                      
                        &copy; 2019. All Rights Reserved.		
                    
                      
                    </div>
                </footer>
                 {/* END FOOTER SECTION */} 
          
 
                <Link id="back-to-top" to className="back-to-top" role="button" title="Click to return on the top page" data-toggle="tooltip" data-placement="left">Go to top</Link>
      </div>
    );
  }
}
export default Home;