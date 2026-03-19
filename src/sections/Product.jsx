import React from 'react';
import productData from '../util/product'; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './style/Product.scss';

const Product = () => {
  return (
    <div className='inner product-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          Shop New <br/>  Arrivals
        </h2>
        <p className="txt">
          매일 들고 다니는 핸드폰에 새로움을 전달하고 <br />
          새로운 변화를 선사하는 깔끔한 브랜드 엘라고 
       
        </p>
        <a href="#" className="btn">
          meet elago
        </a>
      </div>
      <div className="slider-wrap">
        <div className="in">
          <Swiper 
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            className="product-slider"
          >
            {productData.map((item) => (
              <SwiperSlide 
                style={{ backgroundImage: `url(${item.image})` }}
                key={item.id} 
              >
                <a href={item.link}>
                  {item.id}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Product;