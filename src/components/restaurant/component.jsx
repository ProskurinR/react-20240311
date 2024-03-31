import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ restaurant }) => {
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
          <Menu dishes={menu} />
        </div>
      )}

      {!!reviews?.length && (
        <div>
          <h3>Reviews</h3>
          <Reviews reviews={reviews} />
        </div>
      )}
    </div>
  );
};
