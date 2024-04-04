/* eslint-disable react/jsx-key */
import { Tab } from "../tab/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const RestaurantTabs = ({ restaurants, onTabClick, activeTabIndex }) => {
  return (
    <div className={classNames(styles.root)}>
      {restaurants.map((restaurant, index) => (
        <Tab
          title={restaurant.name}
          onClick={() => onTabClick(index)}
          isActive={index === activeTabIndex}
        />
      ))}
    </div>
  );
};
