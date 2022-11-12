import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import zhaz from '../../assets/imgs/foto 1.jpg';
import zhaz2 from '../../assets/imgs/foto 2.jpg';
import zhaz3 from '../../assets/imgs/zhaz3.png';
import './Fotos.css';


export default props =>
   <div className='tamanho'>
        <Carousel>
            <Carousel.Item interval={1500}>
                <img className='tt'
                     src={zhaz}/>
            </Carousel.Item>
            <Carousel.Item interval={1500}> 
                <img className='tt'
                     src={zhaz2}/>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img className='tt'
                     src={zhaz3}/>
            </Carousel.Item>
        </Carousel>
   </div>