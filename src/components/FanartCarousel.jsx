import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export function FantartCarousel() {
  const images = [
    {
      id: 1,
      url: "/assets/fanarts/1.jpg",
      link: "https://twitter.com/sae_illust/status/1786590510259286419",
    },
    {
      id: 2,
      url: "/assets/fanarts/2.jpg",
      link: "https://twitter.com/0_flowie_0/status/1786844521008967856",
    },
    {
      id: 3,
      url: "/assets/fanarts/3.jpg",
      link: "https://twitter.com/omens_Blind/status/1788756186239496654",
    },
    {
      id: 4,
      url: "/assets/fanarts/4.jpg",
      link: "https://twitter.com/Atuqai/status/1788985992772276689",
    },
    {
      id: 5,
      url: "/assets/fanarts/5.jpg",
      link: "https://twitter.com/AnilySphenic/status/1786462754896797988",
    },
    {
      id: 6,
      url: "/assets/fanarts/6.jpg",
      link: "https://twitter.com/Unsfrausfw/status/1787750232496754738",
    },
    {
      id: 7,
      url: "/assets/fanarts/7.jpg",
      link: "https://twitter.com/AdriMikuRG/status/1787246935293739245",
    },
    {
      id: 8,
      url: "/assets/fanarts/8.jpg",
      link: "https://twitter.com/Erickiwi_art/status/1786917856367477134",
    },
    {
      id: 9,
      url: "/assets/fanarts/9.jpg",
      link: "https://twitter.com/Kyu9n_/status/1787186489668878480",
    },
    {
      id: 10,
      url: "/assets/fanarts/10.jpg",
      link: "https://twitter.com/TZEENCTH/status/1787516022292897953",
    },
    {
      id: 11,
      url: "/assets/fanarts/11.jpg",
      link: "https://twitter.com/LalabellLullaby/status/1786910364854337912",
    },
    {
      id: 12,
      url: "/assets/fanarts/12.jpg",
      link: "https://twitter.com/kuwuri/status/1787775939708956914",
    },
    {
      id: 13,
      url: "/assets/fanarts/13.jpg",
      link: "https://twitter.com/otanaon/status/1786659011200250212",
    },
    {
      id: 14,
      url: "/assets/fanarts/14.jpg",
      link: "https://twitter.com/Kamuiz_Ale/status/1787477055325815106",
    },
    {
      id: 15,
      url: "/assets/fanarts/15.jpg",
      link: "https://twitter.com/Unsfrausfw/status/1789111790762357142",
    },
    {
      id: 16,
      url: "/assets/fanarts/16.jpg",
      link: "https://twitter.com/Achinya00/status/1786622060480843904",
    },
  ];
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <img src={image.url} alt={`Fanart ${image.id}`} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
