import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SmallSlider = () => {
  return (
    <div style={{ width: "100vw", paddingTop: "10px", overflow: "hidden" }}>
      <Swiper
        slidesPerView={2.15} // Показать 2.2 слайда
        spaceBetween={10} // Отступы между слайдами
        loop={false} // Слайдер не бесконечный
        initialSlide={0} // Начинаем с нулевого слайда
        grabCursor={true} // Возможность перетаскивания
        style={{ paddingLeft: "5%" }} // Отступ слева для правильного отображения
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
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "200px",
  backgroundColor: "#ddd",
  borderRadius: "10px",
};

export default SmallSlider;
