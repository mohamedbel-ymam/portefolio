import React, { useContext } from 'react';
import './portefolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import foodrecipe from '../../img/foodrecipe.PNG';
import wheather from '../../img/wheather.PNG';
import become from '../../img/become.PNG';
import random from '../../img/random.PNG';
import { themeContext } from '../../context';
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>
        Mes Projets Recents
      </span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a className='a' target="_blank" href="https://mohamedbel-ymam.github.io/foodrecipe/">
            <img src={foodrecipe} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className='a' target="_blank" href="https://mohamedbel-ymam.github.io/weather/">
            <img src={wheather} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className='a' target="_blank" href="https://mohamedbel-ymam.github.io/Become-a-web-develloper/">
          <img src={become} alt="" />
          </a>
          
        </SwiperSlide>
        <SwiperSlide>
          <a className='a' target="_blank" href="https://mohamedbel-ymam.github.io/randomuser/">
          <img src={random} alt="" />
          </a>
          
        </SwiperSlide>
      </Swiper>
      <div className="gitlink"></div>
    </div>
  );
};

export default Portfolio;
