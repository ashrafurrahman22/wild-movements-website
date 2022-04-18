import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import wild1 from '../../images/wild1.jpg';
import wild3 from '../../images/wild3.jpg';
import wild4 from '../../images/wild4.jpg';
import Service from './Service/Service';
import './Home.css';
import cheetah from '../../images/cheetah.jpg';
import beer from '../../images/bear.jpg';
import elephant from '../../images/elephants.jpg';

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
          <h3 className='text-center mt-5'>Wild Photos With Introduction</h3>
          <div className='d-flex align-items-center p-4'>
          <div>
            <img id='animals' src={cheetah} alt="" />
          </div>
          <div className='p-5'>
            <h2 className='text-center'>Cheetah</h2>
            <p>The cheetah is a large cat native to Africa and central Iran. It is the fastest land animal, estimated to be capable of running at 80 to 128 km/h (50 to 80 mph) with the fastest reliably recorded speeds being 93 and 98 km/h (58 and 61 mph), and as such has several adaptations for speed, including a light build, long thin legs and a long tail. </p>
          </div> </div>
          <div className='d-flex align-items-center p-4'>
          <div className='p-5'>
            <h2 className='text-center'>Beer</h2>
            <p>Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout the Northern Hemisphere and partially in the Southern Hemisphere. </p>
          </div>
          <div>
            <img id='animals' src={beer} alt="" />
          </div>
           </div>
          <div className='d-flex align-items-center p-4'>
          <div>
            <img id='animals' src={elephant} alt="" />
          </div>
          <div className='p-5'>
            <h2 className='text-center'>Elephant</h2>
            <p>Elephantidae is a family of large, herbivorous proboscidean mammals collectively called elephants and mammoths. These are terrestrial large mammals with a snout modified into a trunk and teeth modified into tusks. Most genera and species in the family are extinct. Only two genera, Loxodonta and Elephas, are living.</p>
          </div> </div>


        </div>
    );
};

export default Home;