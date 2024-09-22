import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BigSlider = () => {
  return (
    <div style={{ width: "100vw", padding: "10px" }}>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        loop={false}
        centeredSlides={false}
        grabCursor={true}
      >
        <SwiperSlide>
          <div style={slideStyle}>Слайд 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={slideStyle}>Слайд 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={slideStyle}>Слайд 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={slideStyle}>Слайд 4</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

// Пример стилей для слайда
const slideStyle = {
  display: "flex",
  width: "100%",
  height: "300px",
  backgroundColor: "#ddd",
  borderRadius: "10px",
};

export default BigSlider;
