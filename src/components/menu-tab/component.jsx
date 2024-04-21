import classNames from "classnames";
import styles from "./styles.module.scss";
import { NavLink, useParams } from "react-router-dom";

export const MenuTab = () => {
  const { restaurantId } = useParams();

  return (
    <span>
      <NavLink
        to={`/restaurants/${restaurantId}/menu`}
        className={({ isActive }) =>
          classNames(styles.tab, { [styles.active]: isActive })
        }
      >
        Menu
      </NavLink>
    </span>
  );
};
