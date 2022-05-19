import "./rates.scss"
import { RatesList1, RatesList2, RatesList3 } from './const'
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';
import { Button } from '../buttons/btn'

SwiperCore.use([Pagination]);


function Rates(){
    return(
        <section className="rates">
            <div className="container">
            <h2 className="rates__title title">
            ROOMS AND RATES
        </h2>
        <p className="rates__description description">Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, 
comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented 
by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces.  </p>
{RatesList1.map((item) => {
            return (
              <div className="rates__container">
                <img className="rates__img" src={item.img} alt="" />
                <div className="rates__subtitle">{item.title}</div>
                <div className="rates__row">
                        <select className="rates__select">
                            <option selected disabled hidden value="">{item.list}</option>
                            <option>TV</option>
                            <option>shower</option>
                            <option>Wi-fi</option>
                        </select>
                        <Button name="$47  Avg/night"/>

                </div>
                </div>
            );
})}
                <Swiper className="rates__swiper"
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                >
                        {RatesList2.map(item => {
                            return(
                <SwiperSlide> 
                    <img className="rates__img" src={item.img}></img>
                </SwiperSlide>)})}
                </Swiper>
{RatesList1.map((item) => {
            return (
                <>
              <div className="rates__container">
                  <div className="rates__subtitle">{item.title2}</div>
                <div className="rates__row">
                        <select className="rates__select">
                            <option selected disabled hidden value="">{item.list}</option>
                            <option>TV</option>
                            <option>shower</option>
                            <option>Wi-fi</option>
                        </select>
                        <Button name="$155  Avg/night"/>
                </div>
                </div>
                </>
            );
})}
                <Swiper className="rates__swiper"
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                >
                        {RatesList3.map(item => {
                            return(
                <SwiperSlide> 
                    <img className="rates__img" src={item.img}></img>
                </SwiperSlide>)})}
                </Swiper>
{RatesList1.map((item) => {
            return (
                <>
              <div className="rates__container">
                  <div className="rates__subtitle">{item.title3}</div>
                <div className="rates__row">
                        <select className="rates__select">
                            <option selected disabled hidden value="">{item.list}</option>
                            <option>TV</option>
                            <option>shower</option>
                            <option>Wi-fi</option>
                        </select>
                        <Button name="$155  Avg/night"/>
                </div>
                </div>
                </>
            );
})}

        </div>
        </section>
        )
}

export default Rates