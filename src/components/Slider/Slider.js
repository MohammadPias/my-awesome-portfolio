import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Slider.css";
import ceramic1 from '../../images/projects/ceramic1.png'
import babyCare1 from '../../images/projects/babycare-1.png'
import t2p from '../../images/projects/t2v-1.png'
import medicare from '../../images/projects/medicare-1.png'
import craftShop from '../../images/projects/craftShop-1.png'

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
const Slider = () => {
    const slideImg = [
        { name: 'Ceramics-Amber', src: `${ceramic1}`, path: '/' },
        { name: 'Babycare-Products', src: `${babyCare1}`, path: '/projects' },
        { name: 'Travel-to-Paradise', src: `${t2p}`, path: '/' },
        { name: 'Medicare-Magician', src: `${medicare}`, path: '/' },
        { name: 'Craft-Shop', src: `${craftShop}`, path: '/' },
    ]
    return (
        <>
            <Swiper
                effect={"coverflow"}
                slidesPerView={window.innerWidth < 768 ? '1' : '3'}
                grabCursor={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                loop={true}
                modules={[EffectCoverflow, Pagination, Autoplay,]}
                className="mySwiper"
            >
                {
                    slideImg.map((slide, index) =>
                        <SwiperSlide key={index}>
                            <div className='h-full bg-gray-200 rounded-xl'>
                                <img className="w-full" src={slide.src} alt="" />
                                <div className="flex justify-between items-center px-8 py-4">
                                    <h1 className="text-lg font-bold">{slide.name}</h1>
                                    <Link to={`${slide.name}`}>
                                        <button className='btn btn-primary  transition-all duration-500 hover:border-none relative group ring-2 ring-orange-light'>
                                            <span className='absolute bg-gray-200 w-0 h-full top-0 left-0 group-hover:w-full transition-all duration-500 rounded-full ease-in-out text-gray-800'></span>
                                            <span className='relative group-hover:text-orange-light'>Details</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
};

export default Slider;