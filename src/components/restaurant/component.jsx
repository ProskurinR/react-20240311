import { useSelector } from "react-redux";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name ? name : "noname"}</h2>

      {!!menu?.length && (
        <div>
          <h3>Menu</h3>
          <Menu restaurantId={restaurantId} />
        </div>
      )}

      {!!reviews?.length && (
        <div>
          <h3>Reviews</h3>
          <Reviews restaurantId={restaurantId} />
        </div>
      )}
    </div>
  );
};
