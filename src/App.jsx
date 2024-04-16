import { useMemo, useEffect } from "react";
import { Layout } from "./components/layout/component";
import { ThemeContext, useTheme } from "./contexts/theme";
import { UserContext, useUser } from "./contexts/user";
import { useDispatch } from "react-redux";
import { getRestaurants } from "./redux/entities/restaurant/thunks/get-restaurants";
import { getUsers } from "./redux/entities/user/thunks/get-users";
import { RestaurantsContainer } from "./components/restaurants/container";

export const App = () => {
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

  const dispatch = useDispatch();
  const dispatchUsers = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
    dispatchUsers(getUsers());
  }, []);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <UserContext.Provider value={userContextValue}>
        <Layout>
          <RestaurantsContainer />
        </Layout>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};
