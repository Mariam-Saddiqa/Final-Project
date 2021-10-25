import React from 'react'
import Pic1 from "../pic1.jpg"
import Pic2 from "../pic2.jpg"
import Pic3 from "../pic3.jpg"
import { Carousel } from 'react-bootstrap'


const Header = () => {

    
    return (
        <div className="container">
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic1}
            alt="First slide"
            
          />
          <Carousel.Caption>
            <h1 className="head-slide">First slide label</h1>
            <h3 className="head-slide">Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
          <h1 className="head-slide">First slide label</h1>
            <h3 className="head-slide">Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
          <h1 className="head-slide">First slide label</h1>
            <h3 className="head-slide">Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      )
}

export default Header
