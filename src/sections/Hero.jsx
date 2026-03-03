import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { heroSlides } from '../util/hero';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style/Hero.scss'; 

const Hero = () => {
  return (
    <div className="hero-container">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          el: '.swiper-pagination',
          type: 'fraction',
        }}
        navigation={{
          nextEl: '.arr-next',
          prevEl: '.arr-prev',
        }}
        className="hero-slider"
        loop={true}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={`hero-slide ${slide.id}`}
            style={{ backgroundImage: `url(${slide.image.desktop})` }}
          >
            <div className="inner">
              <div className="t-wrap">
                <h2
                  className="tit"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <p className="txt">{slide.subtitle}</p>
                <a href={slide.ctaHref} className="btn">
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="hero-nav">
        <div className="swiper-pagination"></div>
          
      </div>

      </Swiper>
    </div>
  );
};

export default Hero;