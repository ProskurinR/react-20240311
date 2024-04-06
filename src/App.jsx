import { useState, useMemo } from "react";
import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { restaurants } from "./constants/mock";
import { RestaurantTabs } from "./components/restaurant-tabs/component";
import { getStorageItem } from "./utils/storage";
import { setStorageItem } from "./utils/storage";
import { ThemeContext, useTheme } from "./contexts/theme";
import { UserContext, useUser } from "./contexts/user";

const ACTIVE_RESTARAUNT_INDEX_STORAGE_KEY = "activeRestarauntIndex";

export const App = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(() =>
    Number(getStorageItem(ACTIVE_RESTARAUNT_INDEX_STORAGE_KEY))
  );

  const activeRestaurant = restaurants[activeRestaurantIndex];

  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  const themeContextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  const userContextValue = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <UserContext.Provider value={userContextValue}>
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
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
