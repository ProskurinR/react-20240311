import classNames from "classnames";
import styles from "./styles.module.scss";
import { NavLink, useParams } from "react-router-dom";

export const ReviewsTab = () => {
  const { restaurantId } = useParams();

  return (
    <span>
      <NavLink
        to={`/restaurants/${restaurantId}/reviews`}
        className={({ isActive }) =>
          classNames(styles.tab, { [styles.active]: isActive })
        }
      >
        Reviews
      </NavLink>
    </span>
  );
};
