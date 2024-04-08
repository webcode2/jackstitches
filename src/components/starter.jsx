import { useRef, useState } from "react";

import Header from "./Header";
import Carousel from "./carousel";
import Slide1,{Slide2} from "./slide1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/pagination";

export default function Example() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="bg-white">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide><Slide2/></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      {/* <Carousel autoSlide children={[<Slide1/>,<video src={"https://res.cloudinary.com/dozd0nyze/video/upload/v1712566964/jackstitches/854187-hd_1920_1080_25fps_ohisia.mp4"} style={{height:"100%"}} autoPlay muted loop className="my-0 bg-opacity-15  w-full" />,<img src="https://res.cloudinary.com/dozd0nyze/image/upload/v1666872896/cld-sample-3.jpg" alt="me"/>]} /> */}
    </div>
  );
}
