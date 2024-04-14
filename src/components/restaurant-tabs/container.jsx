import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { RestaurantTabs } from "./component";
import { useSelector } from "react-redux";

export const RestaurantTabsContainer = (props) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return <RestaurantTabs {...props} restaurantIds={restaurantIds} />;
};
