import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Dish = ({ dish }) => {
  return (
    <div className={classNames(styles.tab)}>
      <NavLink to={`/dish/${dish.id}`} className={classNames(styles.tab)}>
        {dish.name}
      </NavLink>
    </div>
  );
};
