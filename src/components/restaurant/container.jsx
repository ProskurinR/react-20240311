import { Restaurant } from "./component";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { Outlet, useParams } from "react-router-dom";

export const RestaurantContainer = () => {
  const { restaurantId } = useParams();

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id }) => id === restaurantId),
    }),
  });

  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <Restaurant restaurant={restaurant} />
      <Outlet />
    </div>
  );
};
