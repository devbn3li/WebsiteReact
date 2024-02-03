import React from 'react';
import Slider from 'react-infinite-logo-slider'

const logos = [
  "/assets/images/company/1.png",
  "/assets/images/company/2.png",
  "/assets/images/company/3.png",
  "/assets/images/company/4.png",
  "/assets/images/company/1.png",
  "/assets/images/company/2.png",
  "/assets/images/company/3.png",
  "/assets/images/company/4.png",
  "/assets/images/company/1.png",
  "/assets/images/company/2.png",
  "/assets/images/company/3.png",
  "/assets/images/company/4.png",
]

const sliderLogos = () => (
  <div className="h-[100px] overflow-hidden my-14 bg-[#F9FFF5] max-w-[1400px] w-[calc(100vw-5%)]">
 
 
 <Slider
            width="70px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >

{logos.map((url, index) => (
            <Slider.Slide key={index}>
                <img  src={url} alt="any" className='w-36' />
            </Slider.Slide>
             ))}
           
        </Slider>
  
  
  
  
  </div>
);

export default sliderLogos;
