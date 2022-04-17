import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import wild1 from '../../images/wild1.jpg';
import wild3 from '../../images/wild3.jpg';
import wild4 from '../../images/wild4.jpg';
import Service from './Service/Service';
import './Home.css'

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(()=> {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])



    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={wild1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={wild4}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={wild3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div id='services'>
  {services.map(service => <Service
  key={service.id}
  service={service}
  ></Service> )}
</div>
        </div>
    );
};

export default Home;