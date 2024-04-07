import { useState, useMemo } from "react";
import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
//import { restaurants } from "./constants/mock";
import { RestaurantTabs } from "./components/restaurant-tabs/component";
import { getStorageItem } from "./utils/storage";
import { setStorageItem } from "./utils/storage";
import { ThemeContext, useTheme } from "./contexts/theme";
import { UserContext, useUser } from "./contexts/user";

const ACTIVE_RESTAURANT_INDEX_STORAGE_KEY = "activeRestaurantId";

export const App = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(() =>
    getStorageItem(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY)
  );

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
            onTabClick={(activeRestaurantId) => {
              setActiveRestaurantId(activeRestaurantId);
              setStorageItem(
                ACTIVE_RESTAURANT_INDEX_STORAGE_KEY,
                activeRestaurantId
              );
            }}
            activeTabIndex={activeRestaurantId}
          />
          {activeRestaurantId ? (
            <Restaurant restaurantId={activeRestaurantId} />
          ) : (
            ""
          )}
        </Layout>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
