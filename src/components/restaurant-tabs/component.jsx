/* eslint-disable react/jsx-key */
import { RestaurantTabContainer } from "../restaurant-tab/container";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const RestaurantTabs = ({
  onTabClick,
  activeTabIndex,
  restaurantIds,
}) => {
  return (
    <div className={classNames(styles.root)}>
      {restaurantIds.map((restaurantId) => (
        <RestaurantTabContainer
          restaurantId={restaurantId}
          onClick={() => onTabClick(restaurantId)}
          isActive={restaurantId === activeTabIndex}
          className={styles.action}
        />
      ))}
    </div>
  );
};
