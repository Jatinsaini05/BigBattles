import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { FaUsers } from "react-icons/fa";
import { GiBoltShield } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { BsCurrencyExchange } from "react-icons/bs";

export default function MainSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="relative">
      <div className="relative hidden sm:block">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1800}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSwiper={setSwiperInstance}
          modules={[Autoplay, Navigation, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={"/Scan code to.png"}
              className="w-full object-cover object-center aspect-[10/3]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"/New Project (2).jpg"}
              className="w-full object-cover object-center aspect-[10/3]"
            />
          </SwiperSlide>
        </Swiper>

        <button
          ref={prevRef}
          className="absolute top-1/2 left-4 z-10 hover:cursor-pointer -translate-y-1/2 bg-gradient-to-r from-[#f60002] to-blue-700 text-white p-2 rounded-full shadow-xl hover:scale-110 hover:shadow-red-500/50 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          ref={nextRef}
          className="absolute top-1/2 right-4 hover:cursor-pointer z-10 -translate-y-1/2 bg-gradient-to-r from-blue-700 to-[#f60002] text-white p-2 rounded-full shadow-xl hover:scale-110 hover:shadow-red-500/50 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="sm:hidden block">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1800}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, EffectFade]}
          className="mySwiper sm:hidden block"
        >
          <SwiperSlide>
            <img
              src={"/Scan code to.png"}
              className="w-full object-cover object-center aspect-[2/1]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"/New Project (2).jpg"}
              className="w-full object-cover object-center aspect-[2/1]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="relative w-full sm:block hidden lg:absolute bottom-0 z-50">
        {/* Simulated top border with fade on both sides */}
        <div className="absolute top-0 left-0 w-full h-[2px] z-50 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>

        {/* Main content */}
        <div className="w-full py-3 backdrop-blur-xs bg-gradient-to-r from-[#032c8ab3] to-[#da0000b3]">
          <div className="container">
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-3">
              {/* Block 1 */}
              <div className="flex gap-2 items-center w-full border-r-2 pr-4 border-white">
                <div className="p-2 bg-black w-fit rounded-full">
                  <FaUsers className="text-2xl text-white sm:text-4xl" />
                </div>
                <div>
                  <h2 className="sm:text-lg text-sm text-white font-semibold sm:font-bold">
                    1.5M +
                  </h2>
                  <p className="sm:font-semibold text-xs sm:text-base text-white">
                    Trusted Users
                  </p>
                </div>
              </div>

              {/* Block 2 */}
              <div className="flex gap-2 items-center w-full border-r-2 pr-4 border-white">
                <div className="p-2 bg-black w-fit rounded-full">
                  <GiBoltShield className="text-2xl text-white sm:text-4xl" />
                </div>
                <div>
                  <h2 className="sm:text-lg text-sm text-white font-semibold sm:font-bold">
                    Within Saftey
                  </h2>
                  <p className="sm:font-semibold text-xs sm:text-base text-white">
                    & Legal Standards
                  </p>
                </div>
              </div>

              {/* Block 3 */}
              <div className="flex gap-2 items-center w-full border-r-2 pr-4 border-white">
                <div className="p-2 bg-black w-fit rounded-full">
                  <IoGameController className="text-2xl text-white sm:text-4xl" />
                </div>
                <div>
                  <h2 className="sm:text-lg text-sm text-white font-semibold sm:font-bold">
                    Top Games
                  </h2>
                  <p className="sm:font-semibold text-xs sm:text-base text-white">
                    Play, Win & Earn Money
                  </p>
                </div>
              </div>

              {/* Block 4 */}
              <div className="flex gap-2 items-center w-full border-r-2 pr-4 border-white">
                <div className="p-2 bg-black w-fit rounded-full">
                  <BsCurrencyExchange className="text-2xl text-white sm:text-4xl" />
                </div>
                <div>
                  <h2 className="sm:text-lg text-sm text-white font-semibold sm:font-bold">
                    Refer & Earn
                  </h2>
                  <p className="sm:font-semibold text-xs sm:text-base text-white">
                    Get Rewarded with Bonus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
