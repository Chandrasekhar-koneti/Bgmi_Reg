import { Carousel } from "react-bootstrap";
import bgmi from '../images/bgmi1.jpg'
import cod from '../images/cod.jpg'
import { Fragment } from "react";
import Nav_Header from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Dummy=()=>{
    return (
      <Fragment>
        <Nav_Header />
        <Carousel>
          <Carousel.Item>
           <Link to='/bgmi'> <img
              style={{height:'30rem'}}
              className="d-block w-100"
              src={bgmi}
              alt="First slide"
            />
            </Link>
            <Carousel.Caption>
              <h3>Choose your favorite game</h3>
              <p style={{color:"green",fontWeight:'bolder'}}>Click on the image for more details.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Link to='/cod'> <img
            style={{height:'30rem'}}
              className="d-block w-100"
              src={cod}
              alt="Second slide"
            />
            </Link>
    
            <Carousel.Caption>
              <h3>Choose your favorite game</h3>
              <p style={{color:"green",fontWeight:'bolder'}}>Click on the image for more details.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Footer />
        </Fragment>
      );
}
export default Dummy