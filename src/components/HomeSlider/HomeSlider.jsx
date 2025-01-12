import sliderImg1 from "../../assets/imgs/slider-image-1.jpeg"
import sliderImg2 from "../../assets/imgs/slider-image-2.jpeg"
import sliderImg3 from "../../assets/imgs/slider-image-3.jpeg"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function HomeSlider() {
    return <>
        <section className="grid grid-cols-12 mb-8 ">
            <div className="col-span-8 h-full">
                <Swiper className="h-full" slidesPerView={1} loop={true}>
                    <SwiperSlide><img className="w-full h-full object-cover" src={sliderImg3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full object-cover" src={sliderImg3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full object-cover" src={sliderImg3} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="col-span-4">
                <img className="w-full" src={sliderImg1} alt="" />
                <img className="w-full" src={sliderImg2} alt="" />
            </div>
        </section>


    </>
}
