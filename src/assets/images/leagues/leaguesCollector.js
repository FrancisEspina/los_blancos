const leagues_array = import.meta.glob(`../leagues/*.{svg,webp,png}`, {
  eager: true,
});
export const leagues = Object.values(leagues_array).map((img) => img.default);
