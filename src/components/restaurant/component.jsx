import styles from "./styles.module.scss";
import classNames from "classnames";
import { MenuContainer } from "../menu/container";
import { ReviewsContainer } from "../reviews/container";

export const Restaurant = ({ restaurant }) => {
  const { id, name, menu, reviews } = restaurant;

  return (
    <div className={classNames(styles.root)}>
      <h2>{name ? name : "noname"}</h2>

      {!!menu?.length && (
        <div>
          <h3>Menu</h3>
          <MenuContainer restaurantId={id} />
        </div>
      )}

      {!!reviews?.length && (
        <div>
          <h3>Reviews</h3>
          <ReviewsContainer restaurantId={id} />
        </div>
      )}
    </div>
  );
};
