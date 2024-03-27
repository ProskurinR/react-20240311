import { Tab } from "../tab/component";

export const RestaurantTabs = ({ restaurants, onTabClick, currentIndex }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Tab
          title={restaurant.name}
          isActive={index === currentIndex}
          onClick={() => onTabClick(index)}
        />
      ))}
    </div>
  );
};
