import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./constants/mock";
import { Restaurant } from "./components/restaurant/component";
import { Layout } from "./components/layout/component";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Layout>
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  </Layout>
);
