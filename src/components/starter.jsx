import { useRef, useState } from "react";

import Header from "./Header";
import Slide1, { Slide2, Slide3 } from "./slide1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SimpleFooter from "./Footer";
import ErrorPage from "./404";
import Gallary from "./gallary";
import MyGrid from "./gallaryWithSwipe";
import AboutUs from "./about_us";
import EmailSub from "./Email_Sub";

export default function Example() {
  return (
    <div className="bg-white">
      <Header />
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
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide3 />
        </SwiperSlide>
      </Swiper>
      {/* <Carousel autoSlide children={[<Slide1/>,<video src={"https://res.cloudinary.com/dozd0nyze/video/upload/v1712566964/jackstitches/854187-hd_1920_1080_25fps_ohisia.mp4"} style={{height:"100%"}} autoPlay muted loop className="my-0 bg-opacity-15  w-full" />,<img src="https://res.cloudinary.com/dozd0nyze/image/upload/v1666872896/cld-sample-3.jpg" alt="me"/>]} /> */}
      <div className="gallary bg-white py-20 px-8 lg:px-12">
        <Gallary />
      </div>{" "}
      <AboutUs />
      <div class="skew-c relative "></div>
      <div class="colour-block relative">
        <div className="lg:grid grid-cols-7 lg:gap-x-5   ">
          <div className="first col-span-3">
            {" "}
            <h1 className=" text-3xl font-semibold mt-5 pb-3">
              Responsive Skewed Page Dividers.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="col-span-3 col-start-5">
            <EmailSub />
          </div>
        </div>
      </div>
      {/* <div class="skew-cc"></div> */}
      <div className="about_us"></div>
      <SimpleFooter />
    </div>
  );
}
