import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { Tab } from "../tab/component";

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return <Tab {...props} title={restaurant.name} />;
};
