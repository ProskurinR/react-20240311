import styles from "./styles.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { getStorageItem, setStorageItem } from "../../utils/storage";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import { RestaurantContainer } from "../restaurant/container";
import { Button } from "../button/component";
import { SIZES } from "../../constants/sizes";

const ACTIVE_RESTAURANT_INDEX_STORAGE_KEY = "activeRestaurantId";

export const Restaurants = ({ onRefresh }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(() =>
    getStorageItem(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY)
  );

  return (
    <div>
      <RestaurantTabsContainer
        onTabClick={(activeRestaurantId) => {
          setActiveRestaurantId(activeRestaurantId);
          setStorageItem(
            ACTIVE_RESTAURANT_INDEX_STORAGE_KEY,
            activeRestaurantId
          );
        }}
        activeTabIndex={activeRestaurantId}
      />
      <div className={classNames(styles.paddingTop)}>
        <Button onClick={onRefresh} size={SIZES.m}>
          Refresh
        </Button>
      </div>
      {activeRestaurantId ? (
        <RestaurantContainer restaurantId={activeRestaurantId} />
      ) : (
        ""
      )}
    </div>
  );
};
