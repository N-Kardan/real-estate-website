"use client";

import Styles from './Partners.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const partners = [
  { id: 1, name: 'Partner 1', img: '/partners/1.png' },
  { id: 2, name: 'Partner 2', img: '/partners/2.png' },
  { id: 3, name: 'Partner 3', img: '/partners/3.png' },
  { id: 4, name: 'Partner 4', img: '/partners/4.png' },
  { id: 5, name: 'Partner 5', img: '/partners/5.png' },
  { id: 6, name: 'Partner 6', img: '/partners/6.png' },
];

const Partners = () => {
  return (
    <>
    <section className={Styles.SectionOurPartners}>
      <div className="container">

        <div className="partners-slider position-relative">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3500,
              pauseOnMouseEnter: true,
            }}
            
            pagination={false}
            navigation={true}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className={Styles.partnerItem + " text-center"}>
                  <Image 
                    src={partner.img} 
                    alt={partner.name} 
                    title={partner.name}
                    width={200}
                    height={100}
                    unoptimized={true}
                    className={Styles.partnerLogo + " img-fluid"}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
    </>
  )
}

export default Partners