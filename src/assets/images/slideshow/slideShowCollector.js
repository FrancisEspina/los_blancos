const slideshow_images = import.meta.glob(
  `../slideshow/*.{svg,webp,avif,jpg,png}`,
  {
    eager: true,
  }
);
export const slideShowImages = Object.values(slideshow_images).map(
  (img) => img.default
);
