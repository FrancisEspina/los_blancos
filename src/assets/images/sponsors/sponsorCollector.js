const main_sponsors = import.meta.glob(`./main_sponsors/*.{svg,webp}`, {
  eager: true,
});
export const mainSponsors = Object.values(main_sponsors).map(
  (img) => img.default
);

const top_tier_sponsors = import.meta.glob(`./top_tier_sponsors/*.{svg,webp}`, {
  eager: true,
});
export const toptierSponsors = Object.values(top_tier_sponsors).map(
  (img) => img.default
);

const global_sponsors = import.meta.glob(`./global_sponsors/*.{svg,webp}`, {
  eager: true,
});
export const globalSponsors = Object.values(global_sponsors).map(
  (img) => img.default
);

const regional_sponsors = import.meta.glob(`./regional_sponsors/*.{svg,webp}`, {
  eager: true,
});
export const regionalSponsors = Object.values(regional_sponsors).map(
  (img) => img.default
);

