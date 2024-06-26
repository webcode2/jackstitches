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
import AboutUs from "./about_us";
import EmailSub from "./Email_Sub";
import VideoBackground from "./videobg";
import Testimonials from "./testimonials";

export default function Example() {
  return (
    <div className="bg-white">
      <Header />
      <div className="slide">
        <div className="slide_overlay">
          <Swiper
            // spaceBetween={50}
            slidesPerView={1}
            // onSlideChange={(e) => console.log(e)}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide onFocus={(e) => console.log(e)}>
              <Slide1 />
            </SwiperSlide>
            <SwiperSlide>
              <VideoBackground
                videoSrc={require("../assets/images/video.mp4")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide3 />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <Carousel autoSlide children={[<Slide1/>,<video src={"https://res.cloudinary.com/dozd0nyze/video/upload/v1712566964/jackstitches/854187-hd_1920_1080_25fps_ohisia.mp4"} style={{height:"100%"}} autoPlay muted loop className="my-0 bg-opacity-15  w-full" />,<img src="https://res.cloudinary.com/dozd0nyze/image/upload/v1666872896/cld-sample-3.jpg" alt="me"/>]} /> */}
      <div className="gallary bg-white py-20 mx-auto max-w-screen-lg">
        <Gallary />
      </div>
      <div className="about_ceo w-full px-5 lg:px-0  bg-[#edeff0]  ">
        <AboutUs />
      </div>
      <div className="testimonials">
        <Testimonials />
      </div>
      {/* <div class="skew-c relative "></div>
      <div class="colour-block relative">
        <div className="lg:grid grid-cols-7 lg:gap-x-5   ">
          <div className="first col-span-3 bg-slate-400 mx-10  shadow-md shadow-primary mb-16 lg:mb-0 px-4 rounded-2xl">
            {" "}
            <h1 className=" text-3xl font-semibold mt-5 pb-3 text-center">
              Treat yourself to the perfect fit.{" "}
            </h1>
            <p className="text-center">
              We specialize in creating garments that fit you like a dream. From
              taking care of minor alterations to complete garment
              transformations, our skilled tailors can breathe new life into
              your wardrobe.
              <br />
              <span className="text-6xl">...</span>
            </p>
          </div>
        </div>
      </div> */}
      {/* <div class="skew-cc"></div> */}
      <SimpleFooter />
    </div>
  );
}
