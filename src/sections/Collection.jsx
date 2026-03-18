import React, { useRef, useEffect, useState } from 'react'
import { collectionData } from '../util/collection'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import './style/Collection.scss'

const Collection = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)

  // 화면 크기 감지 (모바일일 때 점으로 바꾸기 위함)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    if (swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current
      swiperRef.current.params.navigation.nextEl = nextRef.current
      swiperRef.current.navigation.destroy()
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='inner collection-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          ELAGO <br className='mob-only'/>
           COLLECTION
        </h2>
        <p className="txt">
          Shop By Category
        </p>
      </div>

      <Swiper
        // 모바일(1개), 태블릿(2개), PC(3개)
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          769: { slidesPerView: 2, spaceBetween: 30 },
          1281: { slidesPerView: 3, spaceBetween: 30 }
        }}
        loop={true}
        // 모바일이면 점(bullets), 그 이상이면 선(progressbar)
        pagination={{
          type: isMobile ? 'bullets' : 'progressbar',
          clickable: true
        }}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="collection-slider"
      >
        {collectionData.map((sl, i) => (
          <SwiperSlide key={i}>
            <a href="#">
              <div className="info-wrap">
                <div className="info-tit">
                  {sl.title}
                </div>
                <div className="name">
                  {sl.name}
                </div>
                <div className="k-name">
                  {sl.kname}
                </div>
              </div>
              <div className="img-wrap">
                <img src={sl.image} alt={sl.name} />
              </div>
              <div className="pname">
                {sl.pname}
              </div>
              <div className="price">
                {sl.price}
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <a href="#" className='prev' onClick={(e)=>e.preventDefault()} ref={prevRef}>prev</a>
      <a href="#" onClick={(e)=>e.preventDefault()} className='next' ref={nextRef}>next</a>
    </div>
  )
}

export default Collection