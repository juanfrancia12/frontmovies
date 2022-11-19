import { Movie } from "@interfaces/movie-example.interface";
import { useRef } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const responsive = {
  300: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  540: {
    slidesPerView: 2,
    spaceBetween: 17,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 31,
  },
};

type Props = {
  children: React.ReactNode;
};

const Slider = ({ children }: Props) => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        slidesPerGroup={1}
        spaceBetween={0}
        loopFillGroupWithBlank={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={false}
        navigation={false}
        breakpoints={responsive}
        modules={[Autoplay, Pagination, Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {children}
      </Swiper>
    </>
  );
};

export default Slider;
