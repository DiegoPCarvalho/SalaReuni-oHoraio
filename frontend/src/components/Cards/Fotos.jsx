import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import salaReuniao from '../../assets/imgs/sala-reunião.jpg';
import zhaz from '../../assets/imgs/zhaz.jpg';
import zhaz2 from '../../assets/imgs/zhaz2.jpg';
import zhaz3 from '../../assets/imgs/zhaz3.png';
import './Fotos.css';


export default props =>
   <div className="tamanho" >
        <Carousel>
            <Carousel.Item interval={1500}>
                <img className='d-block w-100 tt'
                    src={salaReuniao}/>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img className='d-block w-100 tt'
                     src={zhaz}/>
            </Carousel.Item>
            <Carousel.Item interval={1500}> 
                <img className='d-block w-100 tt'
                     src={zhaz2}/>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img className='d-block w-100 tt'
                     src={zhaz3}/>
            </Carousel.Item>
        </Carousel>
   </div>