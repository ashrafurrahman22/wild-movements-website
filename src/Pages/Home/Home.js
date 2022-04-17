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
      <h3>Zebra</h3>
      <p>Zebras are African equines with distinctive black-and-white striped coats.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={wild4}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Mongoose</h3>
      <p>A mongoose is a small terrestrial carnivorous mammal belonging to the family Herpestidae.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={wild3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Elephant</h3>
      <p>Elephants are the largest existing land animals.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <div id="service">
        <h3 className='text-center my-2'>Our Services</h3>
  <div id='services'>
  {services.map(service => <Service
  key={service.id}
  service={service}
  ></Service> )}
</div>
      </div>
        </div>
    );
};

export default Home;