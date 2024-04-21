import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import classNames from "classnames";

export const RestaurantTabContainer = ({ restaurant, className }) => {
  return (
    <NavLink
      to={`/restaurants/${restaurant.id}`}
      className={({ isActive }) =>
        classNames(styles.tab, className, { [styles.active]: isActive })
      }
    >
      {restaurant.name}
    </NavLink>
  );
};
