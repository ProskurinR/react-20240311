/* eslint-disable react/jsx-key */
import { Tab } from "../tab/component";

export const RestaurantTabs = ({ restaurants, onTabClick, activeTabIndex }) => {
  return (
    <div>
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
