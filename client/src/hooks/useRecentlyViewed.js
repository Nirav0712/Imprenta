import { useRecentlyViewedContext } from "../context/RecentlyViewedContext";

const useRecentlyViewed = () => {
  return useRecentlyViewedContext();
};

export default useRecentlyViewed;