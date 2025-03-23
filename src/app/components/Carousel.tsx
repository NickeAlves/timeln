"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./../styles/swiper-custom.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const technologies = [
  {
    name: "imageOne",
    image: "/1e2b965b-698c-46a8-a151-346174214bbe.jpg",
  },
  {
    name: "imageTwo",
    image: "/2f0efc91-7c01-4051-a818-7f20061a0466.JPG",
  },
  {
    name: "imageThree",
    image: "/9c64ceee-4918-4a41-9610-847828d16082.JPG",
  },
  {
    name: "imageFour",
    image: "/92D0DCB0-8CD1-48D8-A6F8-E86197174997.jpg",
  },
  {
    name: "imageFive",
    image: "/96DCE073-011B-4824-9850-CAAA92820570.jpg",
  },
  {
    name: "imageSix",
    image: "/664e37e9-a695-42be-8dba-d11081079935.JPEG",
  },
  {
    name: "imageSeven",
    image: "/5058B4E5-5198-4430-94BC-05BE669AFF7C.jpg",
  },
  {
    name: "imageEight",
    image: "/7654527A-EB0C-4814-9749-AA271D09B924.jpg",
  },
  {
    name: "imageNine",
    image: "/casamento-lari-106.jpeg",
  },
  {
    name: "imageTen",
    image: "/casamento-lari-210.jpeg",
  },
  {
    name: "imageEleven",
    image: "/FullSizeRender.JPEG",
  },
  {
    name: "imageTwelve",
    image: "/IMG_0848.JPEG",
  },
  {
    name: "imageThirteen",
    image: "/IMG_3009.JPEG",
  },
  {
    name: "imageFourteen",
    image: "/IMG_3739.JPEG",
  },
  {
    name: "imageFifteen",
    image: "/IMG_3937.JPEG",
  },
  {
    name: "imageSixteen",
    image: "/IMG_6603.JPEG",
  },
  {
    name: "imageSeventeen",
    image: "/IMG_9672.JPEG",
  },
  {
    name: "imageEighteen",
    image: "/IMG_9861.JPEG",
  },
];

export default function Carousel() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Não renderiza nada no servidor
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-8 rounded-lg shadow-2xl">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {technologies.map((tech, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center p-12 md:p-12">
              <Image
                src={tech.image}
                alt={tech.name}
                width={100}
                height={100}
                className="w-48 h-48 md:w-48 md:h-48 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
