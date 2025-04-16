const past_logos = import.meta.glob(`../past_logos/*.{png,jpg}`, {
  eager: true,
});
export const pastLogos = Object.values(past_logos).map((img) => img.default);
