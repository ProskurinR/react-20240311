import { useSelector } from "react-redux";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector(
    (state) => state.restaurant.entities[restaurantId]
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
          <Menu dishesIds={menu} />
        </div>
      )}

      {!!reviews?.length && (
        <div>
          <h3>Reviews</h3>
          <Reviews reviewIds={reviews} />
        </div>
      )}
    </div>
  );
};
