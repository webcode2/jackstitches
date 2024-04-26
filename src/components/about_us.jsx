import React from "react";
import pic1 from "../assets/images/fash1.png";
import "../components/slides.css";

const AboutUs = () => {
  return (
    <section class="text-gray-600 relative ceo_bg  body-font overflow-hidden mb-16   bg-primary bg-opacity-15 w-full">
      <div className="container mx-auto md:grid grid-cols-2">
        <div className=" flex flex-col">
          <div className="image col-span-1 bg-red-400  mt-5  z-50">
            <img
              alt="ceo"
              class=" lg:w-12/12 w-auto lg:max-h-[65vh] object-cover object-center"
              src={pic1}
            />
          </div>
          <div class=" w-full z-20 col-span-1  pb-10  flex flex-col ">
            <div className="metatdata mt-3   lg:text-start">
              <h2 class="text-sm title-font text-primary  tracking-widest">
                Gift Jack
              </h2>

              <div class="flex mb-4 lg:justify-start">
                <h1 class="text-gray-900 text-3xl title-font font-medium  ">
                  @jackstitches
                </h1>

                <span class="flex gap-x-3 ml-3 pl-3 py-2 border-l-2 border-gray-300 space-x-2s">
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div className="text-xl ">
              <p class="leading-relaxed lg:mt-5 font-light font-sans ">
                My Story/passion behind brand. the rest is placeholder. Mixtape
                chillwave tumeric sriracha taximy chia microdosing tilde DIY.
                XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.
                Everyday carry +1 shorts keytar banjo tattooed umami cardigan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
