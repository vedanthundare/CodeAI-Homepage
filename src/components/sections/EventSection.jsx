import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bgImage from "../../assets/Desktop - 10.png";

const eventData = [
  { src: "/event1.JPG", name: "App Developement" },
  { src: "/event2.JPG", name: "App Developement" },
  { src: "/event3.jpg", name: "App Developement" },
  { src: "/event4.jpg", name: "App Developement" },
  { src: "/event5.jpg", name: "React Bootcamp" },
  { src: "/event6.jpg", name: "React Bootcamp" },
  { src: "/event7.jpg", name: "React Bootcamp" },
  { src: "/event8.jpg", name: "React Bootcamp" },
  { src: "/event9.jpg", name: "React Bootcamp" },
];

const EventSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="bg-darkPurple text-white py-20 px-6 md:px-16 lg:px-36"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
        <motion.div
          className="text-center md:text-left w-full md:w-1/3 relative cursor-default z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-2xl font-kanit">Our</h2>
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl font-custom font-bold cursor-default">EVENTS</h1>
          </div>
        </motion.div>

        <div className="relative w-full md:w-2/3">
          <button ref={prevRef} className="absolute top-1/2 left-[-2vw] z-10 transform -translate-y-1/2">
            <ChevronLeft className="text-white w-8 h-8" />
          </button>
          <button ref={nextRef} className="absolute top-1/2 right-[-2vw] z-10 transform -translate-y-1/2">
            <ChevronRight className="text-white w-8 h-8" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {eventData.map((event, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-cardBg h-100 lg:h-64 text-white p-4 rounded-xl text-center shadow-md cursor-default"
                >
                  <motion.img
                    src={event.src}
                    alt={event.name}
                    className="w-full h-80 lg:h-40 object-cover rounded-lg mb-4"
                    whileHover={{ scale: 1.02 }}
                  />
                  <p className="font-semibold">{event.name}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default EventSection;