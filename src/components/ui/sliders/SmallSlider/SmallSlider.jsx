import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PropTypes from "prop-types";
import styles from "./SmallSlider.module.scss";
import { Link } from "react-router-dom";

const SmallSlider = ({ slides, to }) => {
  if (!slides || slides.length === 0) {
    return <div>Нет доступных товаров</div>;
  }

  return (
    <div>
      <Swiper
        slidesPerView={2.2}
        spaceBetween={10}
        loop={false}
        initialSlide={0}
        grabCursor={true}
        style={{ paddingLeft: "5%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link to={`${to}/${slide.id}`} className={styles.slide}>
              <div className={styles.slide__imageWrapper}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={styles.slide__image}
                />
              </div>
              <p className={styles.slide__price}>{slide.price} ₽</p>
              <h3 className={styles.slide__title}>{slide.title}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

SmallSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  to: PropTypes.string.isRequired,
};

export default SmallSlider;
