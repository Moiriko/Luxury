import './testimonials.scss'
import { TestimonialsList } from './const'
import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, A11y]);

function Testimonials(){
    return(
        <section className="testimonials">
            <div className="container">
            <h2 className="testimonials__title">Testimonials</h2>
                        <Swiper className="testimonials__swiper"
                        slidesPerView={1}
                        loop={true}
                        navigation={true}
                        >
                                  {TestimonialsList.map(item => {
                                      return(
                        <SwiperSlide> 
                            <p className="testimonials__text">"{item.text}"</p>
                            <span className="testimonials__author">{item.author}</span>
                        </SwiperSlide>)})}
                        </Swiper>
        </div>
        </section>
        
    )
}

export default Testimonials