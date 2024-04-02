import { useState } from "react";
import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { restaurants } from "./constants/mock";
import { RestaurantTabs } from "./components/restaurant-tabs/component";
import { getStorageItem } from "./utils/storage";
import { setStorageItem } from "./utils/storage";

const ACTIVE_RESTARAUNT_INDEX_STORAGE_KEY = "activeRestarauntIndex";

export const App = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(() =>
    Number(getStorageItem(ACTIVE_RESTARAUNT_INDEX_STORAGE_KEY))
  );

  const activeRestaurant = restaurants[activeRestaurantIndex];

  return (
    <Layout>
      <RestaurantTabs
        restaurants={restaurants}
        onTabClick={(index) => {
          setActiveRestaurantIndex(index);
          setStorageItem(ACTIVE_RESTARAUNT_INDEX_STORAGE_KEY, index);
        }}
        activeTabIndex={activeRestaurantIndex}
      />
      {activeRestaurant ? <Restaurant restaurant={activeRestaurant} /> : ""}
    </Layout>
  );
};
