import { useState } from "react";
import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { restaurants } from "./constants/mock";
import { RestaurantTabs } from "./components/restaurant-tabs/component";
import { getStorageItem } from "./utils/storage";
import { setStorageItem } from "./utils/storage";
import { ThemeContext } from "./contexts/theme";
import { UserContext } from "./contexts/user";
import { Button } from "./components/button/component";

const ACTIVE_RESTARAUNT_INDEX_STORAGE_KEY = "activeRestarauntIndex";

export const App = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(() =>
    Number(getStorageItem(ACTIVE_RESTARAUNT_INDEX_STORAGE_KEY))
  );

  const activeRestaurant = restaurants[activeRestaurantIndex];

  const [theme, setTheme] = useState("default");
  const [user, setUser] = useState("");

  const userName = "Roman Proskurin";

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeContext.Provider value="default">
        <UserContext.Provider value={userName}>
          <span style={{ padding: "0px 5px" }}>
            <Button
              onClick={() => setTheme(theme === "default" ? "dark" : "default")}
            >
              <span>Theme - {theme}</span>
            </Button>
          </span>
        </UserContext.Provider>
      </ThemeContext.Provider>

      <UserContext.Provider value={user.length > 0 ? "" : userName}>
        <span>
          <Button onClick={() => setUser(user === "" ? userName : "")}>
            Sign in
          </Button>
        </span>
      </UserContext.Provider>

      <UserContext.Provider value={user.length === 0 ? "" : userName}>
        <span>
          <Button onClick={() => setUser(user === "" ? userName : "")}>
            Sign out
          </Button>
          <span style={{ padding: "0px 5px" }}>{user}</span>
        </span>
      </UserContext.Provider>

      <Layout>
        <UserContext.Provider value={userName}>
          <RestaurantTabs
            restaurants={restaurants}
            onTabClick={(index) => {
              setActiveRestaurantIndex(index);
              setStorageItem(ACTIVE_RESTARAUNT_INDEX_STORAGE_KEY, index);
            }}
            activeTabIndex={activeRestaurantIndex}
          />
        </UserContext.Provider>

        <UserContext.Provider value={user}>
          {activeRestaurant ? <Restaurant restaurant={activeRestaurant} /> : ""}
        </UserContext.Provider>
      </Layout>
    </ThemeContext.Provider>
  );
};
