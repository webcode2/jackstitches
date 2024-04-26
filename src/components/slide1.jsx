import React from "react";
import { company_profile } from "../company_profile";
import "./slides.css";
import MyGrid from "./gallaryWithSwipe";
import Gallary from "./gallary";
import { Link } from "react-router-dom";

const Slide1 = () => {
  return (
    <div className="relative  flex justify-center items-center isolate w-full slide1 xl:h-[90vh] h-[80vh] md:h-auto  px-5   px-lg:10 ">
      {/* <video autoPlay loop  muted id="" style={{height:"100vh",}} className="w-full">
            <source className="w-full m-0 p-0 " src="https://res.cloudinary.com/dozd0nyze/video/upload/v1712566964/jackstitches/854187-hd_1920_1080_25fps_ohisia.mp4" type="video/mp4" />
        </video> */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] lg:opacity-10 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl   py-[10vh] lg:py-32 sm:py-48 ">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tighter text-[#ffffff] sm:text-6xl font-lobster">
            {company_profile.name}
          </h1>
          <div className="font-light text-white text-3xl pt-3">
            {" "}
            Coming Soon!
          </div>
          <p className="mt-6 text-xl lg:text-2xl px-2 font-light leading-8 text-gray-200">
            We don't just alter clothes, we create a customized fit that
            flatters your unique style.
          </p>

          <div className="mt-20 flex items-center justify-center gap-x-6">
            <Link
              to=""
              className="rounded-md bg-primary lg:px-10 px-5 py-3   font-light text-white shadow-sm hover:bg-[#1a1237] focus-visible:outline focus-visible:outline-2 text-lg lg:text-2xl focus-visible:outline-offset-2"
            >
              Give Us call
            </Link>
            <Link
              to={""}
              className="text-lg lg:text-2xl font-light leading-6 hover:text-primary lg:px-10 lg:py-5 px-5  py-3 transition-all duration-75 hover:bg-lime-50 text-white"
            >
              Email us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default Slide1;

export function Slide3() {
  return (
    <div className="slide3">
      <div className="relative  bg-[black]  lg:bg-opacity-85 bg-opacity-75  flex justify-center items-center h-[80vh] md:h-auto   isolate w-full xl:h-[90vh] px-8 lg:px-12 ">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(20%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80ff8f] to-[#e44915] lg:opacity-30 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="   shadow rounded-lg   py-[10vh] lg:py-24 sm:py-48">
          <div className="text-center">
            <h1 className="text-3xl font-bold  text-slate-200  font-lobster lg:tracking-wide sm:text-6xl">
              Dress with Confidence.
            </h1>
            <h1 className="text-xl font-light  tracking-tight text-slate-200 lg:text-white sm:text-4xl py-2">
              Coming Soon!{" "}
            </h1>
            <p className="mt-3 text-lg leading-8 text-white lg:text-gray-300 lg:text-2xl tracking-wide  font-light">
              {company_profile.name} bespoke tailoring and fashion, is
              undergoing a website renovation!
            </p>

            <div className="mt-20 flex items-center justify-center gap-x-6">
              <Link
                to=""
                className="rounded-md bg-primary lg:px-10 px-5  py-3   font-light text-white shadow-sm hover:bg-[#1a1237] focus-visible:outline focus-visible:outline-2 text-lg lg:text-2xl focus-visible:outline-offset-2"
              >
                Give Us call
              </Link>
              <Link
                to={""}
                className="text-lg lg:text-2xl  font-light leading-6 hover:text-primary lg:px-10 lg:py-5 px-5  py-3 transition-all duration-75 hover:bg-lime-50 text-white"
              >
                Email us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="right"></div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(80%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#fff980] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
export function Slide2() {
  return "";
}
