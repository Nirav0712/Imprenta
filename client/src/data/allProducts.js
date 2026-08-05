import popularProducts from "./popularProducts";
import trendingProducts from "./trendingProducts";
import labelsProducts from "./labelsProducts";
import exploreMoreProducts from "./exploreMoreProducts";
import newArrivalsProducts from "./newArrivalsProducts";

const allProducts = [
  ...popularProducts,
  ...trendingProducts,
  ...labelsProducts,
  ...exploreMoreProducts,
  ...newArrivalsProducts,
];

export default allProducts;