/* eslint-disable react/jsx-key */
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { Tab } from "../tab/component";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";

export const RestaurantTabs = ({ onTabClick, activeTabIndex }) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <div className={classNames(styles.root)}>
      {restaurantIds.map((restaurantId) => (
        <Tab
          restaurantId={restaurantId}
          onClick={() => onTabClick(restaurantId)}
          isActive={restaurantId === activeTabIndex}
          className={styles.action}
        />
      ))}
    </div>
  );
};
