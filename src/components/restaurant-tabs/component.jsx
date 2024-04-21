/* eslint-disable react/jsx-key */
import { RestaurantTabContainer } from "../restaurant-tab/container";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const RestaurantTabs = ({ onTabClick, activeTabIndex, restaurants }) => {
  return (
    <div>
      <div className={classNames(styles.root)}>
        {restaurants.map((restaurant) => (
          <RestaurantTabContainer
            restaurant={restaurant}
            onClick={() => onTabClick(restaurant.id)}
            isActive={restaurant.id === activeTabIndex}
            className={styles.tab}
          />
        ))}
      </div>
      <div className={classNames(styles.text)}>choose a restaurant</div>
    </div>
  );
};
