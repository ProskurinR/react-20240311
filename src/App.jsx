import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { RestaurantsPage } from "./pages/restaurants";
import { Layout } from "./components/layout/component";
import { useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { getUsers } from "./redux/entities/user/thunks/get-users";
//import { ThemeContext, useTheme } from "./contexts/theme";
import { UserContext, useUser } from "./contexts/user";
import { MenuContainer } from "./components/menu/container";
import { ReviewsContainer } from "./components/reviews/container";
import { RestaurantContainer } from "./components/restaurant/container";
import { DishPage } from "./pages/dish";
import { SelectedDish } from "./components/selected-dish/component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "restaurants",
        element: <RestaurantsPage />,
        children: [
          {
            path: ":restaurantId",
            element: <RestaurantContainer />,
            children: [
              {
                path: "menu",
                element: <MenuContainer />,
              },
              {
                path: "reviews",
                element: <ReviewsContainer />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "dish",
    element: <DishPage />,
    children: [
      {
        path: ":dishId",
        element: <SelectedDish />,
      },
    ],
  },
]);

export const App = () => {
  //const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  // const themeContextValue = useMemo(
  //   () => ({ theme, toggleTheme }),
  //   [theme, toggleTheme]
  // );

  const userContextValue = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );

  const dispatchUsers = useDispatch();

  useEffect(() => {
    dispatchUsers(getUsers());
  }, []);

  return (
    // <ThemeContext.Provider value={themeContextValue}>
    <UserContext.Provider value={userContextValue}>
      <RouterProvider router={router} />
    </UserContext.Provider>
    // </ThemeContext.Provider>
  );
};
