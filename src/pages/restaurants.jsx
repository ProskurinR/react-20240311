import { Outlet } from "react-router-dom";
import { RestaurantTabsContainer } from "../components/restaurant-tabs/container";

export const RestaurantsPage = () => {
  return (
    <div>
      <RestaurantTabsContainer />
      <Outlet />
    </div>
  );
};
