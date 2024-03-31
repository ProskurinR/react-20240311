import { useState } from "react";
import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { restaurants } from "./constants/mock";
import { useEffect } from "react";
import { RestaurantTabs } from "./components/restaurant-tabs/component";

const getSavedCurrentRestaurantIndex = () =>
  Number(localStorage.getItem("currentRestaurantIndex"));

export const App = () => {
  const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(
    getSavedCurrentRestaurantIndex
  );

  useEffect(() => {
    localStorage.setItem("currentRestaurantIndex", currentRestaurantIndex);
  }, [currentRestaurantIndex]);

  return (
    <Layout>
      <RestaurantTabs
        restaurants={restaurants}
        currentIndex={currentRestaurantIndex}
        onTabClick={setCurrentRestaurantIndex}
      />
      <Restaurant restaurant={restaurants[currentRestaurantIndex]} />
    </Layout>
  );
};
