import { Pagination } from "swiper/modules";

export const swiperSettings = {
  modules: [Pagination],
  style: { padding: "20px 0px 50px 0px" },
  pagination: {
    dynamicBullets: true,
  },
  spaceBetween: 5,
  slidesPerView: 4,
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 5 },
    480: { slidesPerView: 1, spaceBetween: 5 },
    768: { slidesPerView: 2, spaceBetween: 5 },
    1024: { slidesPerView: 3, spaceBetween: 5 },
    1600: { slidesPerView: 4, spaceBetween: 5 },
  },
};
