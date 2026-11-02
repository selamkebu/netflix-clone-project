import styles from "./SlideShow.module.css";
import MovieCard from "../MovieCard/MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function SlideShow({ title, movies }) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          // slidesPerView={5.8}
          slidesPerView={2.3}
          breakpoints={{
            480: { slidesPerView: 3.2 },
            768: { slidesPerView: 4.2 },
            1024: { slidesPerView: 5.8 },
            1440: { slidesPerView: 6.8 },
          }}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideShow;
