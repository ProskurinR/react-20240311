import { useGetRestaurantsQuery } from "../../redux/service/api";
import { RestaurantTabs } from "./component";

export const RestaurantTabsContainer = (props) => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!restaurants) {
    return null;
  }

  return <RestaurantTabs {...props} restaurants={restaurants} />;
};
