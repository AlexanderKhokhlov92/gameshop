import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./MainSlider.css";
import { Link } from "react-router-dom";

const MainSlider = () => {
  return (
    <div className="mainSlider" style={{ width: "100vw" }}>
      <Swiper
        spaceBetween={25} // Расстояние между слайдами
        centeredSlides={true} // Централизованный главный слайд
        slidesPerView={1.5} // Видно 3 слайда (центральный плюс два по бокам)
        loop={true} // Бесконечный слайдер
      >
        <SwiperSlide>
          <div className="slide-content">
            <Link to="/catalog?filter=discount">
              <img className="slide-image" src="./discount.jpg" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <Link to="/catalog?filter=eaSubscription">
              <img className="slide-image" src="./ea-play.jpg" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <Link to="/catalog?filter=ps5Subscription">
              <img className="slide-image" src="./two-players.jpg" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <Link to="/catalog?filter=discount">
              <img className="slide-image" src="./tg-sale.jpg" />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <Link to="/catalog?filter=ps5Subscription">
              <img className="slide-image" src="./ps5.jpg" />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
